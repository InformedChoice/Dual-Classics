# 📚 Anabasis Pronunciation Implementation Guide

## Quick Start - Convert All Chapters

### Step 1: Check Current Status
```bash
python convert_anabasis.py content/books/anabasis/ --status
```
This shows which chapters are already converted and which need conversion.

### Step 2: Convert All Existing Chapters
```bash
python convert_anabasis.py content/books/anabasis/
```
This will:
- ✅ Skip already converted chapters (like Chapter 19)
- 📁 Create backups of all files before converting
- 🔄 Convert all pronunciations to the new shortcode format
- 📊 Show a summary of what was done

### Step 3: Test the Results
```bash
hugo server
```
Navigate to different chapters and test:
- Pronunciation toggle in settings (Off/On)
- Hover functionality when Off
- Inline display when On

## For Future Chapters

### Option A: Use the Helper Script
When adding new chapters, use the helper script:

```bash
python new_chapter.py
```

This interactive script will:
1. Ask for chapter number, title, and summary
2. Let you paste text with pronunciations like: `Xenophon (zen-uh-FAWN)`
3. Automatically convert to: `{{< name "Xenophon" "zen-uh-FAWN" >}}`
4. Create the properly formatted chapter file

### Option B: Manual Format
When writing new chapters, use this format:

```markdown
---
title: "Chapter 22: Title Here"
chapter: 22
weight: 22
summary: "Brief summary here"
---

{{< bp >}}
Text with {{< name "Xenophon" "zen-uh-FAWN" >}} in English.
---
Texto con {{< name "Jenofonte" "jeh-no-FAWN-te" >}} en español.
{{< /bp >}}
```

### Option C: Quick Conversion
If you have text with traditional pronunciations, paste it and convert:

```bash
python new_chapter.py --clipboard
```
This converts text from your clipboard and copies back the converted version.

## Rollback if Needed

All original files are backed up as `.md.backup`. To rollback:

```bash
# Rollback a single file
cp content/books/anabasis/17-chapter-17.md.backup content/books/anabasis/17-chapter-17.md

# Rollback all files
for file in content/books/anabasis/*.md.backup; do
  cp "$file" "${file%.backup}"
done
```

## How It Works Summary

### Reader Experience:
1. **Default OFF**: Clean reading experience, hover for help
2. **Toggle ON**: All pronunciations visible inline
3. **Saved Preference**: Browser remembers their choice

### Technical Implementation:
- **Shortcode**: `{{< name "Name" "pronunciation" >}}`
- **CSS Classes**: Handles hover and inline display
- **JavaScript**: Manages toggle and saves preference
- **Settings Integration**: Part of reading controls

## Workflow for Book Completion

### As you write new chapters:
1. Write with pronunciations: `Tissaphernes (tis-uh-FER-neez)`
2. Run converter on new chapter: `python convert_anabasis.py content/books/anabasis/22-chapter-22.md`
3. Or use the helper: `python new_chapter.py`

### Batch processing:
- Run the converter periodically on the whole directory
- It will skip already-converted files
- Only processes files with pronunciations to convert

## Benefits of This System

✅ **Reader-Friendly**: Readers control their experience
✅ **Author-Friendly**: Easy to write and convert
✅ **Maintainable**: One system for all pronunciation needs
✅ **Future-Proof**: Works for books with or without pronunciations
✅ **Clean Source**: Markdown stays readable with shortcodes

## Commands Reference

```bash
# Check status of all chapters
python convert_anabasis.py content/books/anabasis/ --status

# Convert all chapters
python convert_anabasis.py content/books/anabasis/

# Convert single chapter
python convert_anabasis.py content/books/anabasis/17-chapter-17.md

# Create new chapter interactively
python new_chapter.py

# Convert text from clipboard
python new_chapter.py --clipboard
```

## Next Steps

1. ✅ Run the converter on all 21 chapters
2. ✅ Test a few chapters to ensure it works
3. ✅ Use the helper script for future chapters
4. ✅ Keep the same format for consistency