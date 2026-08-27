import { useState, FormEvent } from 'react';

export type SubscribeStatus = 'idle' | 'loading' | 'success' | 'error';

/**
 * Shared newsletter-signup logic for the Footer and CategoryPage forms.
 * Posts to /api/subscribe (a Cloudflare Pages Function) which forwards the
 * email to Brevo server-side — no provider secrets ever reach the browser.
 *
 * `source` tags where the signup came from (e.g. "footer", "evenements",
 * "lifestyle") so it shows up as a contact attribute in Brevo.
 */
export function useNewsletterSubscribe(source: string) {
  const [email, setEmail] = useState('');
  // Honeypot — a field real visitors never see or fill in. Bots that
  // auto-fill every input trip it, and we quietly no-op their submission.
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<SubscribeStatus>('idle');

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === 'loading') return;

    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source, company }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      setStatus(res.ok && data.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return { email, setEmail, company, setCompany, status, submit };
}
