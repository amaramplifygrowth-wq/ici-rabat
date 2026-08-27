// Cloudflare Pages Function — GET/POST /api/reactions
//
// Powers the "Riso-stamp" reaction widget on restaurant profile pages
// (was het lekker? zou je opnieuw bestellen?). One tap = one vote, up or
// down, per restaurant. No text, no accounts, no moderation needed — it's
// just a tally, so there's nothing that can be defamatory or spammy in a
// way that matters.
//
// Storage: a Cloudflare KV namespace. Counts are stored as plain numbers
// under `count:{slug}:up` / `count:{slug}:down`. To stop the same visitor
// from spamming the button, we also set a short-lived lock key per
// (restaurant, hashed IP) — best-effort, not bulletproof, but enough to
// stop casual double-clicking. The browser additionally remembers the vote
// in localStorage so the UI itself won't offer a second click.
//
// Setup (Cloudflare Pages dashboard → this project → Settings → Functions
// → KV namespace bindings):
//   Variable name: REACTIONS
//   KV namespace:  create a new one (e.g. "ici-rabat-reactions") and bind it here.
// Do this for BOTH Production and Preview environments, then redeploy.

interface Env {
  REACTIONS: KVNamespace;
}

const SLUG_RE = /^[a-z0-9-]{1,80}$/;
const VOTE_LOCK_TTL_SECONDS = 60 * 60 * 24 * 60; // 60 days

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

async function hashIp(ip: string): Promise<string> {
  const data = new TextEncoder().encode(ip);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, 24);
}

async function readCounts(kv: KVNamespace, slug: string): Promise<{ up: number; down: number }> {
  const [upRaw, downRaw] = await Promise.all([
    kv.get(`count:${slug}:up`),
    kv.get(`count:${slug}:down`),
  ]);
  return { up: Number(upRaw) || 0, down: Number(downRaw) || 0 };
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const slug = new URL(request.url).searchParams.get('slug') || '';

  if (!env.REACTIONS) {
    console.error('Missing REACTIONS KV binding.');
    return json({ ok: false, error: 'server_not_configured' }, 500);
  }
  if (!SLUG_RE.test(slug)) {
    return json({ ok: false, error: 'invalid_slug' }, 400);
  }

  const counts = await readCounts(env.REACTIONS, slug);
  return json({ ok: true, ...counts });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  if (!env.REACTIONS) {
    console.error('Missing REACTIONS KV binding.');
    return json({ ok: false, error: 'server_not_configured' }, 500);
  }

  let body: { slug?: string; vote?: 'up' | 'down' };
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_request' }, 400);
  }

  const slug = (body.slug || '').trim();
  const vote = body.vote;

  if (!SLUG_RE.test(slug) || (vote !== 'up' && vote !== 'down')) {
    return json({ ok: false, error: 'invalid_request' }, 400);
  }

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const ipHash = await hashIp(ip);
  const lockKey = `voter:${slug}:${ipHash}`;

  const existingLock = await env.REACTIONS.get(lockKey);
  if (existingLock) {
    // Already voted recently from this network — return current counts
    // without incrementing, no error shown to the visitor.
    const counts = await readCounts(env.REACTIONS, slug);
    return json({ ok: true, alreadyVoted: true, ...counts });
  }

  const key = `count:${slug}:${vote}`;
  const current = Number(await env.REACTIONS.get(key)) || 0;

  await Promise.all([
    env.REACTIONS.put(key, String(current + 1)),
    env.REACTIONS.put(lockKey, vote, { expirationTtl: VOTE_LOCK_TTL_SECONDS }),
  ]);

  const counts = await readCounts(env.REACTIONS, slug);
  return json({ ok: true, ...counts });
};
