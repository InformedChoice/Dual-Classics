# AGENTS.md — Tasks for Codex CLI

This repo hosts a custom Hugo site for kid‑friendly, bilingual (EN + ES) classics. Use this checklist to extend and maintain the site.

## Environment

- Ensure Hugo Extended is installed: `hugo version`.
- Run locally: `hugo server -D`.

## Tasks

1) Add a new book
- Create book folder and index:
  - `hugo new books/<slug>/_index.md`
  - Fill front matter: `title`, `author`, `translator`, `status`, `plannedChapters`, optional `coverColor`, `description`.
- Add chapters as you go:
  - `hugo new books/<slug>/<nn>-chapter-<n>.md`
  - Set `chapter` and `weight` to `<n>`.
  - Add content with bilingual paragraphs using the `bp` shortcode:
    - `{{< bp >}} EN text --- ES text {{< /bp >}}`

2) Style tweaks
- Edit `themes/dualkids/assets/css/main.css` for colors/spacing.
- Use site params in `hugo.toml` to adjust primary/secondary/accent colors and tagline.

3) Chapter UX
- Chapter template: `themes/dualkids/layouts/books/single.html`.
- Language + font controls partial: `themes/dualkids/layouts/partials/reading-controls.html`.
- Chapter navigation partial: `themes/dualkids/layouts/partials/chapter-nav.html`.
- JS behavior: `static/js/main.js` (stores prefs in `localStorage`).

4) Home and book list
- Home: `themes/dualkids/layouts/index.html`.
- Book section list: `themes/dualkids/layouts/books/list.html`.

5) Shortcodes
- Bilingual paragraph `bp` lives at `themes/dualkids/layouts/shortcodes/bp.html`.
- Extend by adding `note` or `vocab` shortcodes if needed in the same folder.

6) Deploy to GitHub Pages
- Set `baseURL` in `hugo.toml`.
- Push to `main`. Workflow at `.github/workflows/gh-pages.yml` builds and publishes to `gh-pages`.
- In GitHub → Settings → Pages, ensure source is `gh-pages` branch.

## Conventions

- Use simple sentences and short paragraphs.
- Include pronunciation hints on first mention: `Cyrus (SY-rus)`.
- If a book is partial, set `status: in-progress` and `plannedChapters` to show progress.
- Use numeric prefixes on chapter filenames for stable sort, and set `weight` to match the chapter number.

