// Hands paid lessons to a buyer. The Academy sends the Stripe Checkout session ids it
// saved after purchase; each one is checked with Stripe before anything is returned.
// The paid lessons live in Vercel Blob at PAID_DATA_URL, never in this public repo.
const SESSION = /^cs_(live|test)_[A-Za-z0-9]{10,200}$/;
let paid = null;

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || !process.env.PAID_DATA_URL) return res.status(503).json({ owned: [], lessons: {} });

  const ids = String(req.query.s || '').split(',').filter((x) => SESSION.test(x)).slice(0, 10);
  const owned = new Set();
  await Promise.all(ids.map(async (id) => {
    const r = await fetch(`https://api.stripe.com/v1/checkout/sessions/${id}`, { headers: { Authorization: `Bearer ${key}` } });
    if (!r.ok) return;
    const s = await r.json();
    if (s.payment_status === 'paid' && s.metadata && s.metadata.item) owned.add(s.metadata.item);
  }));
  if (!owned.size) return res.status(200).json({ owned: [], lessons: {} });

  if (!paid) paid = await (await fetch(process.env.PAID_DATA_URL)).json();
  const lessons = {};
  for (const [rid, list] of Object.entries(paid.robots)) {
    if (owned.has('all') || owned.has(rid)) lessons[rid] = list;
  }
  return res.status(200).json({ owned: [...owned], lessons });
};
