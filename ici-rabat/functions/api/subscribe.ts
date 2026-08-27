// Cloudflare Pages Function — POST /api/subscribe
//
// Adds an email address to a Brevo (formerly Sendinblue) contact list.
// The Brevo API key and list ID live server-side only (Cloudflare Pages
// environment variables) — they are never shipped to the browser bundle.
//
// Setup (Cloudflare Pages dashboard → this project → Settings → Environment variables):
//   BREVO_API_KEY   — from Brevo: SMTP & API → API Keys → Generate a new API key
//   BREVO_LIST_ID   — from Brevo: Contacts → Lists → open your list → the numeric ID in the URL
// Set both for Production AND Preview environments, then redeploy.

interface Env {
  BREVO_API_KEY: string;
  BREVO_LIST_ID: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  if (!env.BREVO_API_KEY || !env.BREVO_LIST_ID) {
    // Fails loudly in logs so this is easy to diagnose, but doesn't leak
    // internals to the visitor.
    console.error('Missing BREVO_API_KEY or BREVO_LIST_ID environment variable.');
    return json({ ok: false, error: 'server_not_configured' }, 500);
  }

  let body: { email?: string; source?: string; company?: string };
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_request' }, 400);
  }

  const email = (body.email || '').trim().toLowerCase();
  const source = (body.source || 'unknown').slice(0, 40);

  // Honeypot: a hidden field named "company" that only bots fill in.
  // Silently report success so scrapers don't learn it's a trap.
  if (body.company) {
    return json({ ok: true });
  }

  if (!EMAIL_RE.test(email)) {
    return json({ ok: false, error: 'invalid_email' }, 400);
  }

  const listId = Number(env.BREVO_LIST_ID);

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true, // upsert: no error if the contact already exists
        attributes: {
          SIGNUP_SOURCE: source,
        },
      }),
    });

    // Brevo returns 201 (created) or 204 (updated existing contact) on success.
    if (brevoRes.status === 201 || brevoRes.status === 204) {
      return json({ ok: true });
    }

    const errBody = await brevoRes.text();
    console.error('Brevo API error', brevoRes.status, errBody);
    return json({ ok: false, error: 'provider_error' }, 502);
  } catch (err) {
    console.error('Brevo request failed', err);
    return json({ ok: false, error: 'network_error' }, 502);
  }
};
