// Log in to the Academy on a new device with an emailed code. No passwords, no database.
//   POST {email}          -> if that email has a paid Checkout session, emails an 8 digit code.
//                            Always answers the same way, so nobody can test which emails bought.
//                            Returns a signed token that only works with the right code, for 15 minutes.
//   POST {token, code}    -> checks the code, then returns that email's paid session ids,
//                            which the Academy saves in ks_paid like a normal purchase.
// Needs STRIPE_SECRET_KEY (also the signing key) and RESEND_API_KEY.
const crypto = require('crypto');

const FROM = 'Kelty Sage Robot Academy <academy@keltysage.com>';
const REPLY_TO = 'keltysage01@gmail.com';
const TTL = 15 * 60 * 1000;
const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,24}$/;

const sign = (s) => crypto.createHmac('sha256', 'ks-login:' + process.env.STRIPE_SECRET_KEY).update(s).digest('base64url');
const same = (a, b) => a.length === b.length && crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));

// Stripe may keep the email the way the buyer typed it, so look up both spellings.
async function paidSessions(email) {
  const all = await Promise.all([...new Set([email, email.toLowerCase()])].map(async (e) => {
    const u = `https://api.stripe.com/v1/checkout/sessions?limit=100&status=complete&customer_details[email]=${encodeURIComponent(e)}`;
    const r = await fetch(u, { headers: { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}` } });
    if (!r.ok) throw new Error(`stripe ${r.status}`);
    return (await r.json()).data;
  }));
  return [...new Map(all.flat().map((s) => [s.id, s])).values()].filter((s) => (s.payment_status === 'paid' || s.payment_status === 'no_payment_required') && s.metadata && s.metadata.item).map((s) => s.id);
}

async function sendCode(email, code) {
  const pretty = code.slice(0, 4) + ' ' + code.slice(4);
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM, to: [email], reply_to: REPLY_TO,
      subject: `Your Robot Academy code: ${pretty}`,
      text: `Your code is ${pretty}\n\nType it into the Robot Academy to open your robots on this device. It works for 15 minutes.\n\nDidn't ask for this? You can ignore it.\n\nBoot, for Kelty`,
      html: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;max-width:440px;margin:0 auto;padding:24px;color:#12181c">
        <p style="margin:0 0 8px;font-size:15px">Your Robot Academy code:</p>
        <p style="margin:0 0 16px;font-size:34px;font-weight:800;letter-spacing:3px">${pretty}</p>
        <p style="margin:0 0 12px;font-size:15px;line-height:1.5">Type it into the Robot Academy to open your robots on this device. It works for 15 minutes.</p>
        <p style="margin:0;font-size:13px;color:#7b8a90">Didn't ask for this? You can ignore it.<br>Boot, for Kelty</p></div>`,
    }),
  });
  if (!r.ok) throw new Error(`resend ${r.status} ${await r.text()}`);
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  if (!process.env.STRIPE_SECRET_KEY || !process.env.RESEND_API_KEY) return res.status(503).json({ ok: false, error: 'Login is not set up yet.' });
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

  try {
    // Step 2: check the code.
    if (body.token) {
      const [payload, mac] = String(body.token).split('.');
      const code = String(body.code || '').replace(/\D/g, '');
      if (!payload || !mac || code.length !== 8 || !same(mac, sign(payload + '|' + code))) {
        return res.status(400).json({ ok: false, error: "That code doesn't match. Check the email and try again." });
      }
      const { e, x } = JSON.parse(Buffer.from(payload, 'base64url').toString());
      if (Date.now() > x) return res.status(400).json({ ok: false, error: 'That code expired. Ask for a new one.' });
      const ids = await paidSessions(e);
      return res.status(200).json({ ok: true, ids });
    }

    // Step 1: email a code, but only to an email that bought something.
    const email = String(body.email || '').trim();
    if (!EMAIL.test(email)) return res.status(400).json({ ok: false, error: 'That email looks off. Try again.' });
    const code = String(crypto.randomInt(0, 1e8)).padStart(8, '0');
    const payload = Buffer.from(JSON.stringify({ e: email, x: Date.now() + TTL, n: crypto.randomBytes(6).toString('hex') })).toString('base64url');
    const token = payload + '.' + sign(payload + '|' + code);
    if ((await paidSessions(email)).length) await sendCode(email, code);
    return res.status(200).json({ ok: true, token });
  } catch (err) {
    console.error('login', err.message);
    return res.status(500).json({ ok: false, error: 'Something went wrong. Try again, or use Tell Kelty.' });
  }
};
