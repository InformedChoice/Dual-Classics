/* Dual Classics: Enhanced reading controls */
(function () {
  const root = document.documentElement;
  const body = document.body;
  const langPref = localStorage.getItem('dc-lang') || 'both';
  const fontScale = parseFloat(localStorage.getItem('dc-fontscale') || '1');
  const pronunciationPref = localStorage.getItem('dc-pronunciation') || 'off';
  const themePref = localStorage.getItem('dc-theme') || 'dark';

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

  function applyPronunciation(pref) {
    body.classList.toggle('show-pronunciation', pref === 'on');
    localStorage.setItem('dc-pronunciation', pref);
    
    // Update button states
    document.querySelectorAll('.pronunciation-toggle').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.dataset.pronunciation === pref ? 'true' : 'false');
    });
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      body.style.backgroundColor = '';
      body.style.color = '';
      body.classList.remove('dark-mode-active');
    } else {
      body.style.backgroundColor = '#1a1611';
      body.style.color = '#f0e0d0';
      body.classList.add('dark-mode-active');
    }
    
    localStorage.setItem('dc-theme', theme);
    
    // Update button states
    document.querySelectorAll('.theme-setting').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.dataset.theme === theme ? 'true' : 'false');
    });
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
      // Close timer panel if open
      const timerPanel = document.getElementById('reader-timer-panel');
      if (timerPanel && !timerPanel.classList.contains('hidden')) {
        timerPanel.classList.add('hidden');
        const timerToggle = document.getElementById('timer-toggle');
        if (timerToggle) timerToggle.setAttribute('aria-pressed', 'false');
      }
    } else {
      panel.setAttribute('hidden', '');
      toggle.classList.remove('active');
    }
  }

  // Toggle timer panel
  function toggleTimerPanel() {
    const panel = document.getElementById('reader-timer-panel');
    const toggle = document.getElementById('timer-toggle');
    
    if (!panel || !toggle) {
      console.error('Timer panel or toggle not found');
      return;
    }
    
    const isHidden = panel.classList.contains('hidden');
    
    if (isHidden) {
      panel.classList.remove('hidden');
      toggle.setAttribute('aria-pressed', 'true');
      toggle.querySelector('.btn-text').textContent = '⏱ Hide Timer';
      // Close settings panel if open on mobile
      if (window.innerWidth <= 640) {
        const settingsPanel = document.getElementById('reading-panel');
        if (settingsPanel && !settingsPanel.hasAttribute('hidden')) {
          settingsPanel.setAttribute('hidden', '');
          const settingsToggle = document.querySelector('.reading-settings-toggle');
          if (settingsToggle) settingsToggle.classList.remove('active');
        }
      }
    } else {
      panel.classList.add('hidden');
      toggle.setAttribute('aria-pressed', 'false');
      toggle.querySelector('.btn-text').textContent = '⏱ Show Timer';
    }
  }

  // Initialize everything on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    // Apply saved preferences
    applyLang(langPref);
    applyScale(fontScale);
    applyPronunciation(pronunciationPref);
    applyTheme(themePref);

    // Event listeners
    document.addEventListener('click', (e) => {
      // Settings toggle
      if (e.target.closest('.reading-settings-toggle')) {
        e.preventDefault();
        toggleSettingsPanel();
        return;
      }
      
      // Settings close button
      if (e.target.closest('.settings-close-btn')) {
        e.preventDefault();
        const panel = document.getElementById('reading-panel');
        if (panel) {
          panel.setAttribute('hidden', '');
          const settingsToggle = document.querySelector('.reading-settings-toggle');
          if (settingsToggle) settingsToggle.classList.remove('active');
        }
        return;
      }
      
      // Timer toggle
      if (e.target.closest('#timer-toggle') || e.target.closest('.timer-btn')) {
        e.preventDefault();
        e.stopPropagation();
        toggleTimerPanel();
        return;
      }
      
      // Language buttons
      const langBtn = e.target.closest('[data-lang]');
      if (langBtn) {
        e.preventDefault();
        applyLang(langBtn.dataset.lang);
        return;
      }
      
      // Font size buttons
      const fontBtn = e.target.closest('[data-font]');
      if (fontBtn) {
        e.preventDefault();
        const delta = fontBtn.dataset.font === 'bigger' ? 0.1 : -0.1;
        const current = parseFloat(localStorage.getItem('dc-fontscale') || '1');
        applyScale(current + delta);
        return;
      }
      
      // Pronunciation toggle
      const pronBtn = e.target.closest('.pronunciation-toggle');
      if (pronBtn) {
        e.preventDefault();
        applyPronunciation(pronBtn.dataset.pronunciation);
        return;
      }
      
      // Theme toggle (from settings panel)
      const themeBtn = e.target.closest('.theme-setting');
      if (themeBtn) {
        e.preventDefault();
        applyTheme(themeBtn.dataset.theme);
        return;
      }
      
      // Close panels when clicking outside (only on desktop)
      if (window.innerWidth > 640) {
        const settingsPanel = document.getElementById('reading-panel');
        const timerPanel = document.getElementById('reader-timer-panel');
        
        if (settingsPanel && !settingsPanel.hasAttribute('hidden')) {
          if (!e.target.closest('.reading-panel') && 
              !e.target.closest('.reading-settings-toggle')) {
            toggleSettingsPanel();
          }
        }
        
        if (timerPanel && !timerPanel.classList.contains('hidden')) {
          if (!e.target.closest('.reader-timer-panel') && 
              !e.target.closest('#timer-toggle')) {
            timerPanel.classList.add('hidden');
            const timerToggle = document.getElementById('timer-toggle');
            if (timerToggle) {
              timerToggle.setAttribute('aria-pressed', 'false');
              timerToggle.querySelector('.btn-text').textContent = '⏱ Show Timer';
            }
          }
        }
      }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Escape to close panels
      if (e.key === 'Escape') {
        const settingsPanel = document.getElementById('reading-panel');
        const timerPanel = document.getElementById('reader-timer-panel');
        
        if (settingsPanel && !settingsPanel.hasAttribute('hidden')) {
          toggleSettingsPanel();
        }
        
        if (timerPanel && !timerPanel.classList.contains('hidden')) {
          timerPanel.classList.add('hidden');
          const timerToggle = document.getElementById('timer-toggle');
          if (timerToggle) {
            timerToggle.setAttribute('aria-pressed', 'false');
            timerToggle.querySelector('.btn-text').textContent = '⏱ Show Timer';
          }
        }
      }
      
      // Cmd/Ctrl + , to toggle settings
      if ((e.metaKey || e.ctrlKey) && e.key === ',') {
        e.preventDefault();
        toggleSettingsPanel();
      }
      
      // Cmd/Ctrl + T to toggle timer
      if ((e.metaKey || e.ctrlKey) && e.key === 't') {
        e.preventDefault();
        toggleTimerPanel();
      }
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Ensure proper panel positioning after resize
        const settingsPanel = document.getElementById('reading-panel');
        const timerPanel = document.getElementById('reader-timer-panel');
        
        if (settingsPanel && !settingsPanel.hasAttribute('hidden')) {
          settingsPanel.style.transition = 'none';
          setTimeout(() => {
            settingsPanel.style.transition = '';
          }, 100);
        }
        
        if (timerPanel && !timerPanel.classList.contains('hidden')) {
          timerPanel.style.transition = 'none';
          setTimeout(() => {
            timerPanel.style.transition = '';
          }, 100);
        }
      }, 250);
    });
  });
})();
