# Pronunciation Guide Toggle System

## Overview
The pronunciation guide system gives readers control over when they see pronunciation guides. Based on feedback that constant pronunciation guides can be distracting, the toggle is now integrated into the settings panel alongside other reading preferences.

## How It Works

### For Readers
- **Default Mode (OFF)**: Names appear with a subtle dotted underline. Hover over them to see the pronunciation.
- **Toggle Mode (ON)**: Click "On" in the Pronunciation section of settings to display all pronunciations inline with the text.
- **Preference Saved**: The browser remembers your choice for future visits.
- **Settings Location**: The pronunciation toggle is in the settings panel with Language and Text Size controls.

### Files Created/Modified

1. **Shortcode**: `/themes/dualkids/layouts/shortcodes/name.html`
   - Hugo shortcode that renders names with pronunciation

2. **CSS**: `/static/css/pronunciation.css`
   - Styles for hover tooltips and inline display
   - Mobile-responsive design
   - No floating button - integrated with settings

3. **JavaScript**: `/static/js/pronunciation-toggle.js`
   - Toggle functionality for settings panel buttons
   - Local storage for preference persistence

4. **Reading Controls**: `/themes/dualkids/layouts/partials/reading-controls.html`
   - Added Pronunciation control group with Off/On buttons

5. **Base Template**: `/themes/dualkids/layouts/_default/baseof.html`
   - Includes pronunciation CSS and JS files

## Testing

### Quick Test
1. Open `test-chapter-19-settings.html` in your browser
2. Look for the Pronunciation section in the settings panel
3. Toggle between Off and On
4. When Off: hover over names to see pronunciations
5. When On: all pronunciations show inline
6. Refresh the page - your preference should be remembered

### Full Site Test
```bash
hugo server
```
Then navigate to Chapter 19 and test the settings panel.

## Converting Other Chapters

### Manual Conversion
Change from:
```markdown
Xenophon (zen-uh-FAWN)
```

To:
```markdown
{{< name "Xenophon" "zen-uh-FAWN" >}}
```

### Automatic Conversion
Use the provided Python script:

```bash
# Convert all chapters in the anabasis directory
python convert_anabasis.py content/books/anabasis/

# Convert a single file
python convert_anabasis.py content/books/anabasis/17-chapter-17.md
```

The script will:
- Create backup files (`.md.backup`)
- Convert all pronunciation patterns to shortcodes
- Report on changes made

## Implementation Details

### Shortcode Usage
```hugo
{{< name "CharacterName" "pronunciation-guide" >}}
```

### CSS Classes
- `.name-with-pronunciation` - Container span
- `.character-name` - The name itself
- `.pronunciation-guide` - The pronunciation text
- `.show-all-pronunciation` - Body class when toggled on
- `.pronunciation-toggle` - Settings button class

### Browser Support
- Works on all modern browsers
- Mobile-friendly with touch support
- Gracefully degrades if JavaScript is disabled

## Benefits
1. **Reader Control**: Each reader chooses their preferred display
2. **Clean Reading**: No distracting guides when not needed
3. **Integrated Settings**: All reading preferences in one place
4. **Not Intrusive**: No floating buttons, tucked away in settings
5. **Accessibility**: Pronunciation still available when needed
6. **Persistent**: Settings saved across sessions
7. **Mobile Friendly**: Works well on all devices

## Default Behavior
- **Starts OFF**: Pronunciation guides are hidden by default
- **Visual Hint**: Dotted underline indicates hoverable names
- **On Demand**: Readers can enable guides when learning names
- **Book Flexible**: Works for books with or without pronunciation guides