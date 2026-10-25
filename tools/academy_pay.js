/* Paid lessons. After Stripe Checkout the buyer lands on /academy/?paid=<session id>.
   The id is saved in this browser, and /api/lessons swaps in the full lessons once
   Stripe confirms the payment. The same link opens them on any other device. */
(function () {
  const KEY = 'ks_paid';
  const get = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch (_) { return [] } };
  const put = (v) => { try { localStorage.setItem(KEY, JSON.stringify(v)) } catch (_) {} };
  const q = new URLSearchParams(location.search);
  const fresh = /^cs_/.test(q.get('paid') || '') ? q.get('paid') : null;
  const ids = get();
  if (fresh && !ids.includes(fresh)) { ids.push(fresh); put(ids); }
  const ready = new Promise((res) => { const t = setInterval(() => { if (C) { clearInterval(t); res(); } }, 100); });
  if (q.has('soon')) ready.then(() => toast('Checkout opens soon. Boot is free right now.'));
  if (fresh || q.has('soon')) history.replaceState(null, '', location.pathname + location.hash);
  if (!ids.length) return;

  fetch('/api/lessons?s=' + encodeURIComponent(ids.join(','))).then((x) => x.json()).then(async (d) => {
    await ready;
    for (const r of C.robots) {
      const full = d.lessons && d.lessons[r.id];
      if (full) r.lessons = r.lessons.map((l) => full.find((f) => f.slug === l.slug) || l);
    }
    (d.owned || []).forEach((id) => { if (!S.owned.includes(id)) S.owned.push(id); });
    save(); route();
    if (fresh && d.owned && d.owned.length) saved(fresh, d.owned);
  }).catch(() => {});

  function saved(id, owned) {
    const who = owned.includes('all') ? 'the whole team' : owned.map((o) => (C.robots.find((r) => r.id === o) || {}).name).join(' and ');
    const link = `https://www.keltysage.com/academy/?paid=${id}`;
    const box = document.createElement('div');
    box.className = 'paidbox';
    box.innerHTML = `<b>You hired ${esc(who)}.</b><p>Every lesson is unlocked in this browser. To open them on your phone or another computer, save this link:</p>
      <div class="cmd"><span>${esc(link)}</span><button class="copy">Copy</button></div><button class="btn soft" id="paidok">Got it</button>`;
    document.body.appendChild(box);
    box.querySelector('.copy').onclick = (e) => copy(link, e.target);
    box.querySelector('#paidok').onclick = () => box.remove();
  }
})();
