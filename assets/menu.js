// The menu opens on its own (it's a <details>). This only closes it on a tap outside, Escape, or picking a link.
document.addEventListener('click', (e) => {
  document.querySelectorAll('.smenu[open]').forEach((m) => {
    if (!m.contains(e.target) || e.target.closest('.smenu-panel a')) m.removeAttribute('open');
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('.smenu[open]').forEach((m) => { m.removeAttribute('open'); m.querySelector('summary').focus(); });
});
