/* Dual Classics: language + font controls */
(function () {
  const root = document.documentElement;
  const body = document.body;
  const langPref = localStorage.getItem('dc-lang') || 'both';
  const fontScale = parseFloat(localStorage.getItem('dc-fontscale') || '1');

  function applyLang(pref) {
    body.classList.remove('lang-both', 'lang-en-only', 'lang-es-only');
    if (pref === 'en') body.classList.add('lang-en-only');
    else if (pref === 'es') body.classList.add('lang-es-only');
    else body.classList.add('lang-both');
    localStorage.setItem('dc-lang', pref);
    document.querySelectorAll('.lang-toggle .btn-outline').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.dataset.lang === pref ? 'true' : 'false');
    });
  }

  function applyScale(scale) {
    const clamped = Math.min(1.5, Math.max(0.85, scale));
    root.style.setProperty('--reader-font-scale', clamped);
    localStorage.setItem('dc-fontscale', String(clamped));
  }

  applyLang(langPref);
  applyScale(fontScale);

  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-lang], [data-font]');
    if (!target) return;
    if (target.dataset.lang) {
      applyLang(target.dataset.lang);
    } else if (target.dataset.font) {
      const delta = target.dataset.font === 'bigger' ? 0.1 : -0.1;
      const next = (parseFloat(localStorage.getItem('dc-fontscale') || '1') + delta);
      applyScale(next);
    }
  });
})();

