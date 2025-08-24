// Pronunciation Guide Toggle Script

document.addEventListener('DOMContentLoaded', function() {
    // Get pronunciation toggle buttons
    const pronunciationButtons = document.querySelectorAll('.pronunciation-toggle');
    
    if (pronunciationButtons.length === 0) {
        // No pronunciation controls on this page
        return;
    }
    
    // Check for saved preference (default is OFF)
    const savedPref = localStorage.getItem('showPronunciation');
    const isOn = savedPref === 'true';
    
    // Set initial state
    if (isOn) {
        document.body.classList.add('show-all-pronunciation');
        updatePronunciationButtons(true);
    } else {
        document.body.classList.remove('show-all-pronunciation');
        updatePronunciationButtons(false);
    }
    
    // Add click handlers to pronunciation toggle buttons
    pronunciationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const wantOn = this.getAttribute('data-pronunciation') === 'on';
            
            // Update body class
            if (wantOn) {
                document.body.classList.add('show-all-pronunciation');
            } else {
                document.body.classList.remove('show-all-pronunciation');
            }
            
            // Update button states
            updatePronunciationButtons(wantOn);
            
            // Save preference
            localStorage.setItem('showPronunciation', wantOn);
        });
    });
    
    // Helper function to update button states
    function updatePronunciationButtons(isOn) {
        pronunciationButtons.forEach(btn => {
            const btnIsOn = btn.getAttribute('data-pronunciation') === 'on';
            btn.setAttribute('aria-pressed', btnIsOn === isOn ? 'true' : 'false');
        });
    }
});