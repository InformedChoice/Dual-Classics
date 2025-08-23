# How to Add a New Book to Dual Classics

## Quick Start - Adding a New Book

### 1. Create the book folder and metadata file

```bash
hugo new books/<book-slug>/_index.md
```

For example: `hugo new books/odyssey/_index.md`

### 2. Edit the book's `_index.md` file

Here's a template with all the options:

```markdown
---
title: "Book Title — Bilingual Edition"
author: "Original Author"
translator: "Translator Name (optional)"
status: "in-progress"  # or "complete"
plannedChapters: 24     # total number of chapters planned
featured: false         # set to true to add a "Featured" badge
cover: "https://your-image-url.com/cover.jpg"  # Book cover image URL
coverColor: "#6C5CE7"   # Fallback gradient color if no cover image
description: "Brief description of the book"
---

Short introduction or description that appears on the book's main page.
```

### 3. Book Cover Guidelines

#### Option A: With a Cover Image
- **Recommended size**: 600x800px (3:4 aspect ratio)
- **Format**: JPG or PNG
- **Hosting**: Use Cloudflare Images or any CDN
- Add the URL to the `cover:` field in the front matter

#### Option B: Without a Cover Image (Automatic Placeholder)
- Just omit the `cover:` field
- The system will automatically create a stylized book placeholder
- Each book gets a unique gradient background color
- Optional: Set a custom `coverColor:` hex value for the gradient

### 4. The Cover Display System

The book covers are displayed as full cards with:
- **3:4 aspect ratio** (like a real book)
- **Title and author** shown in a gradient overlay at the bottom
- **Hover effect** that lifts the card
- **Automatic placeholders** with beautiful gradients if no cover provided

### 5. Adding Chapters

Create chapter files in your book folder:

```bash
hugo new books/<book-slug>/01-chapter-1.md
```

Chapter front matter template:
```markdown
---
title: "Chapter 1: The Beginning"
chapter: 1
weight: 1
summary: "Brief chapter summary (optional)"
---
```

## Examples of Books Already Added

### Book with Cover Image:
```markdown
---
title: "Common Sense — Bilingual Family Edition"
author: "Thomas Paine"
featured: true
cover: "https://imagedelivery.net/uoQWLs2DQGCKz-4i8TTorQ/9b620c90-9400-47ce-91b9-54e5cc7f5d00/public"
---
```

### Book with Placeholder (no cover image):
```markdown
---
title: "The Republic — Modern Simple"
author: "Plato"
status: "in-progress"
plannedChapters: 10
coverColor: "#30cfd0"  # Optional custom gradient
---
```

## Available Gradient Colors for Placeholders

If you don't provide a cover image, these gradients cycle automatically:
1. Purple to violet: `#667eea → #764ba2`
2. Pink to red: `#f093fb → #f5576c`
3. Blue to cyan: `#4facfe → #00f2fe`
4. Green to teal: `#43e97b → #38f9d7`
5. Pink to yellow: `#fa709a → #fee140`
6. Cyan to dark purple: `#30cfd0 → #330867`
7. Light blue to pink: `#a8edea → #fed6e3`
8. Coral to light pink: `#ff9a9e → #fecfef`

Or set your own with the `coverColor:` field.

## Testing Your New Book

1. Run the local server:
   ```bash
   hugo server -D
   ```

2. Navigate to `http://localhost:1313/books/` to see your new book

3. The book will appear with either:
   - Your custom cover image (if provided)
   - A beautiful placeholder with gradient background (if no cover)

## Tips for Best Results

- **Cover images** should be clear and high contrast
- **Book titles** should be concise (they display on 2 lines max)
- **Author names** appear below the title in smaller text
- The system handles both vintage-style covers (like your classics) and modern designs
- All covers maintain the same 3:4 aspect ratio for consistency

## Need Help?

- Check existing books in `/content/books/` for examples
- The card styling is in `/themes/dualkids/assets/css/main.css`
- The template is in `/themes/dualkids/layouts/books/list.html`
