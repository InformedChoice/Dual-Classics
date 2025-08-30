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
  - Add content with bilingual paragraphs using:
    - Block form: `{{< bp >}} EN text --- ES text {{< /bp >}}`
    - Inline form: `{{< bi en="EN text" es="ES text" >}}`

 - Be exact with chapter naming and front matter:
   - Filenames must zero‑pad the prefix and match the chapter number: `01-chapter-1.md`, `02-chapter-2.md`, … `10-chapter-10.md`.
   - In front matter, set both `chapter: <n>` and `weight: <n>` to the same integer so ordering and navigation are correct.
   - Keep `slug` aligned with the filename unless there’s a strong reason to override.
   - Title convention: `Chapter <n>: <short, kid‑friendly title>` (EN/ES handled in content, not in the title).

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

Pronunciation hints (use consistently)
- Use the `name` shortcode for names with phonetics so they participate in the Pronunciation On/Off toggle.
  - English: `{{< name "Xenophon" "ZEN-uh-fawn" >}}`
  - Español: `{{< name "Jenofonte" "heh-no-FAWN-te" >}}`
- Do not hard‑code hints like `Cyrus (SY-rus)` — those won’t toggle. Convert to the shortcode.
- Consistency rules:
  - Add on first mention in each language; repeat only after long gaps or for tricky names.
  - Keep phonetics simple, hyphenated; UPPERCASE the stressed syllable. Avoid IPA.
  - Match the language: use the EN name + EN phonetics in English, ES name + ES phonetics in Spanish.
  - Keep punctuation outside the shortcode, e.g., `{{< name "Cyrus" "SY-rus" >}}, the prince, …`
- How it works (FYI):
  - Shortcode: `themes/dualkids/layouts/shortcodes/name.html` renders the name and hint spans.
  - Styles: `static/css/pronunciation.css` controls tooltip vs inline display.
  - Toggle + persistence: `static/js/pronunciation-toggle.js` and the buttons in `themes/dualkids/layouts/partials/reading-controls.html` add `show-all-pronunciation` to `<body>` and remember the user’s choice.
  - Nothing extra to wire up — just use the shortcode in content.

6) Deploy

Cloudflare Pages (recommended if DNS is on Cloudflare)
- Cloudflare → Pages → Create project → Connect to Git → repo `main`.
- Framework: Hugo. Build command: `hugo --gc --minify`. Output: `public`.
- Env vars: `HUGO_VERSION=0.143.1`, `HUGO_ENV=production`, `HUGO_BASEURL=${CF_PAGES_URL}`.
- Custom domain: Add `dualclassics.com` (and `www`), set apex as Primary.
- Optional: Disable `.github/workflows/gh-pages.yml` once Cloudflare is live.

GitHub Pages
- Set `baseURL` in `hugo.toml`.
- Push to `main`. Workflow at `.github/workflows/gh-pages.yml` publishes to `gh-pages`.
- In GitHub → Settings → Pages, set source to `gh-pages`.

## Conventions

- Use simple sentences and short paragraphs.
- Keep the story wording unchanged. If names include parenthetical pronunciation hints in the draft (e.g., `Cyrus (SY-rus)`), convert them to the `name` shortcode so they toggle with Pronunciation On/Off. Keep punctuation outside the shortcode.
- If a book is partial, set `status: in-progress` and `plannedChapters` to show progress.
- Use numeric prefixes on chapter filenames for stable sort, and set `weight` to match the chapter number.

Maintenance notes
- When you add or remove chapters, update the book’s `_index.md` `plannedChapters` so the progress display stays accurate.
- Avoid duplicate narrative coverage across chapters. If new content expands an event already covered, trim or refocus the earlier chapter so each scene appears once in order.
