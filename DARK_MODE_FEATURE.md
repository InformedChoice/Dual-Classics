# 🌙 Dark Mode / Night Reading Feature

## Overview
A dedicated dark mode optimized for bedtime reading, designed to reduce eye strain and minimize sleep disruption. Based on your daughter's feedback about reading before bed.

## Key Features

### 🎯 Design Principles
- **Default is Dark Mode** - Better for sleep hygiene
- **Warm Color Palette** - Reduces blue light exposure
- **One-Click Toggle** - Convenient moon/sun icon button
- **Always Visible** - No need to open settings
- **Saves Preference** - Remembers your choice

### 🎨 Color Scheme

#### Dark Mode (Default)
- Background: `#1a1611` - Warm dark brown (not pure black)
- Text: `#e8d7c3` - Warm cream color
- Accent: `#ffa94d` - Warm orange
- Cards: `#252119` - Slightly lighter brown

#### Light Mode
- Background: `#fffdf8` - Soft off-white
- Text: `#212121` - Dark gray
- Accent: `#007acc` - Blue
- Cards: `#ffffff` - White

### 📍 Toggle Locations
1. **Quick Toggle Button** - Top bar, next to settings (moon/sun icon)
2. **Settings Panel** - Also available in reading settings for consistency

## Implementation

### Files Created/Modified

1. **Template**: `/themes/dualkids/layouts/books/single.html`
   - Added theme toggle button to top bar
   - Positioned next to settings button

2. **CSS**: `/static/css/dark-mode.css`
   - Complete dark mode styles
   - Warm color scheme for night reading
   - Smooth transitions between modes

3. **JavaScript**: `/static/js/dark-mode-toggle.js`
   - Toggle functionality
   - LocalStorage persistence
   - Settings sync

4. **Settings Panel**: `/themes/dualkids/layouts/partials/reading-controls.html`
   - Added Theme control group
   - Dark/Light buttons

5. **Base Template**: `/themes/dualkids/layouts/_default/baseof.html`
   - Included dark mode CSS and JS

## Testing

### Quick Test
```bash
open test-dark-mode.html
```
This shows:
- How dark and light modes look
- Toggle functionality
- Benefits explanation

### Live Site Test
```bash
hugo server
```
Then visit any chapter and:
1. Look for the moon icon in the top bar
2. Click to toggle between dark/light
3. Refresh - preference is saved
4. Check settings panel - theme option is there too

## User Experience

### For Your Daughter
- **Bedtime Reading**: Dark mode by default means less blue light before sleep
- **Easy Access**: Moon/sun button always visible - no hunting through settings
- **Quick Toggle**: One click to switch if reading during the day
- **Consistent**: Works across all chapters

### Visual Indicators
- **Dark Mode**: 🌙 Moon icon visible
- **Light Mode**: ☀️ Sun icon visible
- **Smooth Transition**: 300ms fade between modes

## Benefits

### 😴 Sleep Benefits
- Warm colors reduce melatonin suppression
- Less stimulating than bright white screens
- Easier transition to sleep after reading

### 👁️ Eye Comfort
- Reduced eye strain in dark rooms
- No harsh contrast
- Comfortable for extended reading

### 🎮 User Control
- Personal preference saved
- Works independently of device settings
- Quick access without menu diving

## Technical Notes

### Performance
- CSS-only transitions (no JavaScript animations)
- LocalStorage for instant preference loading
- No flicker on page load

### Accessibility
- ARIA labels on all buttons
- Respects prefers-reduced-motion
- Clear visual feedback

### Browser Support
- Works on all modern browsers
- LocalStorage fallback for older browsers
- Progressive enhancement approach

## Future Enhancements
Could consider:
- Auto-switch based on time of day
- Adjustable warm color intensity
- Sepia mode option
- Custom color themes

## Summary
The dark mode feature makes bedtime reading more comfortable and sleep-friendly. With dark as the default and easy toggle access, your daughter can read comfortably any time of day without worrying about bright screens affecting her sleep! 🌙📚