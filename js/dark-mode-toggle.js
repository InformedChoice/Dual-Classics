// Dark Mode Toggle Script - Simplified and Fixed

// Apply theme immediately on page load (before DOM ready)
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-mode');
    }
})();

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dark mode script loaded'); // Debug log
    
    // Get the theme toggle button
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    
    if (!themeToggleBtn) {
        console.error('Theme toggle button not found!');
        return;
    }
    
    console.log('Theme toggle button found'); // Debug log
    
    // Apply saved theme to body as well
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
    
    // Add click event listener
    themeToggleBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent any default button behavior
        console.log('Theme toggle clicked'); // Debug log
        
        // Toggle the class on both html and body
        const isCurrentlyLight = document.body.classList.contains('light-mode');
        
        if (isCurrentlyLight) {
            // Switch to dark
            document.documentElement.classList.remove('light-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
            console.log('Switched to dark mode');
        } else {
            // Switch to light
            document.documentElement.classList.add('light-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            console.log('Switched to light mode');
        }
        
        // Animation feedback
        this.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
    
    // Also handle settings panel buttons if they exist
    const themeSettingBtns = document.querySelectorAll('.theme-setting');
    themeSettingBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedTheme = this.getAttribute('data-theme');
            
            if (selectedTheme === 'light') {
                document.documentElement.classList.add('light-mode');
                document.body.classList.add('light-mode');
            } else {
                document.documentElement.classList.remove('light-mode');
                document.body.classList.remove('light-mode');
            }
            
            localStorage.setItem('theme', selectedTheme);
            
            // Update button states
            themeSettingBtns.forEach(b => {
                b.setAttribute('aria-pressed', b.getAttribute('data-theme') === selectedTheme ? 'true' : 'false');
            });
        });
    });
});