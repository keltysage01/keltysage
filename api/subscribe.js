// Saves a weekly-build signup as a contact in Resend.
// Needs RESEND_API_KEY (full access) in the Vercel project. RESEND_SEGMENT_ID is optional.
const { podcastSegment } = require('./_podcast');
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

  const headers = { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' };
  const save = c => fetch('https://api.resend.com/contacts', { method: 'POST', headers, body: JSON.stringify(c) });
  // someone signing up twice is still a success
  const fine = r => r.ok || r.status === 409;

  // where they signed up (podcast page sends source: "podcast"). Resend only keeps a property that
  // already exists, and fails the whole call otherwise, so: try with it, create the property once if
  // that fails, try again, and if it still fails save the contact without it. Forms that send no
  // source (the homepage) take the plain path below, same as before.
  const source = /^[a-z0-9-]{1,30}$/.test(String(body.source || '')) ? String(body.source) : '';
  // podcast signups also join the podcast segment, the list the Tuesday email goes to.
  // Done as its own call so someone already on the list (409 above) still gets added.
  const joinPodcast = async () => {
    if (source !== 'podcast') return;
    try {
      const seg = await podcastSegment();
      await fetch(`https://api.resend.com/contacts/${encodeURIComponent(email)}/segments/${seg}`, { method: 'POST', headers });
    } catch (e) { console.error('podcast segment join failed', e); }
  };
  if (source) {
    let r = await save({ ...contact, properties: { source } });
    if (!fine(r)) {
      await fetch('https://api.resend.com/contact-properties', {
        method: 'POST', headers, body: JSON.stringify({ key: 'source', type: 'string' }),
      }).catch(() => {});
      r = await save({ ...contact, properties: { source } });
    }
    if (fine(r)) { await joinPodcast(); return res.status(200).json({ ok: true }); }
    console.error('resend contact with source failed', r.status, await r.text());
  }

  const r = await save(contact);
  if (fine(r)) { await joinPodcast(); return res.status(200).json({ ok: true }); }
  console.error('resend contact failed', r.status, await r.text());
  return res.status(502).json({ ok: false });
};
