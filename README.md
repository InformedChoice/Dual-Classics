# Dual Classics — Hugo site

Kid‑friendly, colorful Hugo site for reading public‑domain classics retold in modern, simple English with Spanish alongside. Big text, language toggle (EN / ES / both), and easy chapter navigation. Deploys to GitHub Pages.

## Quick start

- Prereq: Install Hugo Extended.
  - macOS: `brew install hugo`
  - Verify: `hugo version`
- Run locally: `hugo server -D`
- Open: http://localhost:1313

## Content model

- Books live under `content/books/<slug>/`.
- Each book has an `_index.md` with metadata, and chapter files like `01-chapter-1.md` with `chapter` and `weight` for ordering.
- Partial books work fine — publish chapters as you finish them. If you set `plannedChapters` in the book, the list shows progress.

### Front matter

`content/books/<slug>/_index.md`

```
---
title: "Anabasis (Modern Simple)"
author: "Xenophon"
translator: "Your Family"
status: "in-progress" # or "complete"
plannedChapters: 10
coverColor: "#6C5CE7" # optional
description: "Cyrus gathers friends and soldiers for a big journey."
---
Optional intro shown above chapter list.
```

`content/books/<slug>/<nn>-chapter-<n>.md`

```
---
title: "Chapter <N>: <Title>"
chapter: <N>
weight: <N>
summary: "Optional one-liner"
---
```

### Bilingual paragraphs

Use the `bp` shortcode. Put English first, `---`, then Spanish. You can use normal Markdown inside each side.

```
{{< bp >}}
English text with (pro-NUN-see-AY-shun).
---
Texto en español.
{{< /bp >}}
```

On chapter pages, use the language buttons to show EN only, ES only, or both. Kids can also bump text size with A− / A+.

## Archetypes

- New book: `hugo new books/<slug>/_index.md`
- New chapter: `hugo new books/<slug>/<nn>-chapter-<n>.md`

The archetypes in `archetypes/books/` prefill front matter and a bilingual paragraph example.

## Theming

- Custom theme lives in `themes/dualkids`.
- Main templates:
  - Home: `themes/dualkids/layouts/index.html`
  - Book list page: `themes/dualkids/layouts/books/list.html`
  - Chapter page: `themes/dualkids/layouts/books/single.html`
  - Bilingual shortcode: `themes/dualkids/layouts/shortcodes/bp.html`
- Styles: `themes/dualkids/assets/css/main.css`, compiled via Hugo Pipes.
- JS: `static/js/main.js` manages language + font controls.

## Deploy options

### Cloudflare Pages (dualclassics.com)

Recommended if your DNS is on Cloudflare.

- Connect repo: Cloudflare Dashboard → Pages → Create project → Connect to Git → pick this repo and `main` branch.
- Framework preset: Hugo
- Build settings:
  - Build command: `hugo --gc --minify`
  - Output directory: `public`
  - Environment variables:
    - `HUGO_VERSION`: `0.143.1`
    - `HUGO_ENV`: `production`
    - `HUGO_BASEURL`: `${CF_PAGES_URL}`
      - This sets the correct base URL for previews and production automatically.
- Custom domain: In the project → Custom domains → Add `dualclassics.com` (and optionally `www.dualclassics.com`). Set the apex as Primary domain so `www` redirects to it.
- DNS: Since your DNS is already on Cloudflare, Pages can add the CNAME records for you.

Tip: If you switch to Cloudflare Pages, you can disable the GitHub Pages workflow in `.github/workflows/gh-pages.yml` to avoid duplicate deploys.

### GitHub Pages

1. Create a GitHub repo named `Dual-Classics` (or use your existing one).
2. Push this code to the `main` branch.
3. In GitHub → Settings → Pages, choose "Deploy from a branch" and set branch `gh-pages` once it exists (after first deploy). Or leave it and rely on the workflow to publish.
4. The workflow `.github/workflows/gh-pages.yml` builds with Hugo and publishes `public/` to the `gh-pages` branch.
5. Update `baseURL` in `hugo.toml` to `https://<your-username>.github.io/Dual-Classics/` (or your custom domain). For Cloudflare Pages, prefer setting `HUGO_BASEURL=${CF_PAGES_URL}` as an env var.

## Adding a new book (example)

```
hugo new books/gulliver/_index.md
hugo new books/gulliver/01-chapter-1.md
hugo new books/gulliver/02-chapter-2.md
```

Edit the files to add your bilingual content with `{{< bp >}} ... {{< /bp >}}` blocks. Commit and push to `main` — GitHub Pages updates automatically.

## Notes

- Only publish text from public‑domain sources.
- Keep chapter files ordered by `weight` and/or prefix the filename with numbers for easy sorting.
- If you want per-book accent colors, set `coverColor` in the book’s `_index.md`.
