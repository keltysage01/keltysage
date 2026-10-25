// Sends a buyer to Stripe Checkout for one robot ($2.99) or the whole team ($14.99).
// Needs STRIPE_SECRET_KEY in the Vercel project. Until it is set, buyers land back
// in the Academy with a "checkout opens soon" note instead of an error.
const CATALOG = require('./_catalog.json');
const SITE = 'https://www.keltysage.com';

module.exports = async function handler(req, res) {
  const item = String(req.query.item || '');
  const back = item === 'all' ? '' : item;
  const go = (url) => { res.setHeader('Location', url); res.status(303).end(); };

  const product = item === 'all'
    ? { name: 'Robot Academy: the whole team', cents: CATALOG.bundle_cents }
    : CATALOG.robots[item] && { name: `Robot Academy: hire ${CATALOG.robots[item]}`, cents: CATALOG.price_cents };
  if (!product) return go(`${SITE}/academy/`);

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return go(`${SITE}/academy/?soon=1#/${back}`);

  const form = new URLSearchParams({
    mode: 'payment',
    'line_items[0][quantity]': '1',
    'line_items[0][price_data][currency]': 'usd',
    'line_items[0][price_data][unit_amount]': String(product.cents),
    'line_items[0][price_data][product_data][name]': product.name,
    success_url: `${SITE}/academy/?paid={CHECKOUT_SESSION_ID}#/${back}`,
    cancel_url: `${SITE}/academy/#/${back}`,
    'metadata[item]': item,
  });
  const r = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form,
  });
  const s = await r.json();
  if (!r.ok || !s.url) {
    console.error('stripe checkout failed', r.status, s.error && s.error.message);
    return go(`${SITE}/academy/?soon=1#/${back}`);
  }
  return go(s.url);
};
