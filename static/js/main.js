/* Dual Classics: Enhanced reading controls */
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
    
    // Update button states
    document.querySelectorAll('.control-btn[data-lang]').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.dataset.lang === pref ? 'true' : 'false');
    });
  }

  function applyScale(scale) {
    const clamped = Math.min(1.5, Math.max(0.7, scale));
    root.style.setProperty('--reader-font-scale', clamped);
    localStorage.setItem('dc-fontscale', String(clamped));
    
    // Update size indicator
    const percentage = Math.round(clamped * 100);
    const indicator = document.querySelector('.size-indicator');
    if (indicator) {
      indicator.textContent = percentage + '%';
    }
  }

  // Toggle reading settings panel
  function toggleSettingsPanel() {
    const toggle = document.querySelector('.reading-settings-toggle');
    const panel = document.getElementById('reading-panel');
    
    if (!toggle || !panel) return;
    
    const isHidden = panel.hasAttribute('hidden');
    
    if (isHidden) {
      panel.removeAttribute('hidden');
      toggle.classList.add('active');
    } else {
      panel.setAttribute('hidden', '');
      toggle.classList.remove('active');
    }
  }

  // Apply saved preferences
  applyLang(langPref);
  applyScale(fontScale);

  // Event listeners
  document.addEventListener('click', (e) => {
    // Settings toggle
    if (e.target.closest('.reading-settings-toggle')) {
      e.preventDefault();
      toggleSettingsPanel();
      return;
    }
    
    // Language buttons
    const langBtn = e.target.closest('[data-lang]');
    if (langBtn) {
      applyLang(langBtn.dataset.lang);
      return;
    }
    
    // Font size buttons
    const fontBtn = e.target.closest('[data-font]');
    if (fontBtn) {
      const delta = fontBtn.dataset.font === 'bigger' ? 0.1 : -0.1;
      const current = parseFloat(localStorage.getItem('dc-fontscale') || '1');
      applyScale(current + delta);
      return;
    }
    
    // Close panel when clicking outside
    const panel = document.getElementById('reading-panel');
    if (panel && !panel.hasAttribute('hidden')) {
      if (!e.target.closest('.reading-panel') && !e.target.closest('.reading-settings-toggle')) {
        toggleSettingsPanel();
      }
    }
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Escape to close settings
    if (e.key === 'Escape') {
      const panel = document.getElementById('reading-panel');
      if (panel && !panel.hasAttribute('hidden')) {
        toggleSettingsPanel();
      }
    }
    
    // Cmd/Ctrl + , to toggle settings
    if ((e.metaKey || e.ctrlKey) && e.key === ',') {
      e.preventDefault();
      toggleSettingsPanel();
    }
  });
})();

