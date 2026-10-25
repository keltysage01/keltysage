// Saves a weekly-build signup as a contact in Resend.
// Needs RESEND_API_KEY (full access) in the Vercel project. RESEND_SEGMENT_ID is optional.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(503).json({ ok: false, error: 'not set up' });

  let body = req.body || {};
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  const email = String(body.email || '').trim().toLowerCase();
  // hidden field that only bots fill in
  if (body.website) return res.status(200).json({ ok: true });
  if (!EMAIL.test(email) || email.length > 254) return res.status(400).json({ ok: false, error: 'bad email' });

  const contact = { email, unsubscribed: false };
  if (process.env.RESEND_SEGMENT_ID) contact.segments = [{ id: process.env.RESEND_SEGMENT_ID }];

  const r = await fetch('https://api.resend.com/contacts', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(contact),
  });
  // someone signing up twice is still a success
  if (r.ok || r.status === 409) return res.status(200).json({ ok: true });
  console.error('resend contact failed', r.status, await r.text());
  return res.status(502).json({ ok: false });
};
