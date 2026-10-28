// "Tell Kelty" help form on the academy. Texts Kelty through the Scentsible K9 GoHighLevel number.
// Needs GHL_TOKEN (private integration token) and GHL_KELTY_CONTACT_ID in the Vercel project.
const KINDS = { broken: 'Something is broken', stuck: 'Stuck on a step', question: 'A question' };
const clean = (v, n) => String(v || '').replace(/\s+/g, ' ').trim().slice(0, n);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const token = process.env.GHL_TOKEN, kelty = process.env.GHL_KELTY_CONTACT_ID;
  if (!token || !kelty) return res.status(503).json({ ok: false, error: 'not set up' });

  let body = req.body || {};
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  // hidden field that only bots fill in
  if (body.website) return res.status(200).json({ ok: true });

  const what = clean(body.what, 600), reach = clean(body.reach, 120), name = clean(body.name, 60);
  if (what.length < 3 || reach.length < 5) return res.status(400).json({ ok: false, error: 'missing' });
  const kind = KINDS[body.kind] || 'Help request';
  const where = clean(body.where, 80), plan = body.plan === 'paid' ? 'paid' : 'free';

  const message = `Robot Academy: ${kind}\nFrom: ${name || 'no name'}, ${reach} (${plan})\n${where ? 'On: ' + where + '\n' : ''}"${what}"`;
  try {
    const r = await fetch('https://services.leadconnectorhq.com/conversations/messages', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, Version: '2021-04-15', 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'SMS', contactId: kelty, message }),
    });
    if (r.ok) return res.status(200).json({ ok: true });
    console.error('help text failed', r.status, await r.text());
  } catch (e) { console.error('help text failed', e); }
  return res.status(502).json({ ok: false });
};
