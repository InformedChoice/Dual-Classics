# Caesar's Commentaries Translation Prep

This file prepares the Caesar project before chapter adaptation begins.

## Working Title

Caesar's Commentaries — Family Reading Edition

## Source Rule

Use only public-domain source material or text the user has permission to use.

Primary starting source:

- Project Gutenberg eBook 10657, `"De Bello Gallico" and Other Commentaries`, by Julius Caesar, translated by W. A. McDevitte.
- Project Gutenberg lists the eBook as public domain in the United States.
- Source URL: https://www.gutenberg.org/ebooks/10657

Do not use modern copyrighted translations unless the user explicitly confirms
permission.

## Initial Scope

Start with Caesar's account of the Gallic War.

Proposed sequence:

1. `The War in Gaul`, Books I-VII, attributed to Julius Caesar.
2. Book VIII, traditionally included with the Gallic War but written by Aulus
   Hirtius, clearly labeled if adapted.
3. `The Civil War`, Books I-III, after the Gallic War is complete.
4. Other commentaries often printed with Caesar should not be added until the
   user confirms whether to include them, because some are not by Caesar.

Keep `plannedChapters` at `0` in the book index until the chapter map is chosen.
After the first pass divides the source into stable kid-readable chapters,
update `plannedChapters` so the progress display is meaningful.

## Adaptation Workflow

Follow `BOOK_ADAPTATION_GUIDELINES.md`.

1. Choose a source section small enough to adapt faithfully.
2. Create the child-readable English first.
3. Preserve Caesar's order of events, stated reasons, speeches, negotiations,
   geography, military details, alliances, hostages, betrayals, and consequences.
4. Preserve Caesar's third-person, self-justifying point of view where possible,
   while making it understandable for children.
5. Add pronunciation help with the `name` shortcode in committed Hugo content.
6. After the English is complete and reviewed, create the Spanish from that
   completed English.
7. Commit final chapter content as bilingual Hugo Markdown using `bp` or `bi`.

## Chapter Chunking Guidance

Do not force Caesar's ancient book divisions into very long modern chapters.
Each site chapter should be short enough for family reading while preserving
the original sequence.

A good first chunk for testing is:

- Gallic War, Book I, sections 1-7: Gaul's three main parts, the Helvetii's
  plan to migrate, Orgetorix's plot, and the first political consequences.

Likely chapter titles should stay simple:

- `Chapter 1: The Three Parts of Gaul`
- `Chapter 2: The Helvetii Prepare to Leave`
- `Chapter 3: Caesar Blocks the Road`

Final filenames must follow the repo convention:

- `01-chapter-1.md`
- `02-chapter-2.md`
- `03-chapter-3.md`

Set both `chapter` and `weight` to the same integer.

## Content Watchpoints for Caesar

- Do not make Caesar a superhero or a villain.
- Preserve his courage, intelligence, ambition, severity, political skill, and
  self-justifying tone.
- Explain Roman and military terms briefly on first use.
- Make geography clear: rivers, roads, forts, camps, provinces, borders, and
  marches matter in Caesar.
- Explain hostages, envoys, alliances, and surrender terms when they appear.
- Keep battle violence sober and non-graphic.
- Keep ancient religious references as ancient Roman beliefs, not modernized
  or Christianized.

## Current Status

- Book shell created: `content/books/caesars-commentaries/_index.md`
- Cover asset created: `static/images/books/caesars-commentaries-cover.png`
- Published bilingual chapters created:
  - `01-chapter-1.md`: Gallic War, Book I, section 1.
  - `02-chapter-2.md`: Gallic War, Book I, sections 2-3.
  - `03-chapter-3.md`: Gallic War, Book I, sections 4-7.
  - `04-chapter-4.md`: Gallic War, Book I, section 8.
  - `05-chapter-5.md`: Gallic War, Book I, sections 9-11.
  - `06-chapter-6.md`: Gallic War, Book I, sections 12-14.
  - `07-chapter-7.md`: Gallic War, Book I, sections 15-16.
  - `08-chapter-8.md`: Gallic War, Book I, sections 17-18.
  - `09-chapter-9.md`: Gallic War, Book I, sections 19-20.
  - `10-chapter-10.md`: Gallic War, Book I, sections 21-22.
  - `11-chapter-11.md`: Gallic War, Book I, sections 23-24.
  - `12-chapter-12.md`: Gallic War, Book I, sections 25-26.
  - `13-chapter-13.md`: Gallic War, Book I, sections 27-29.
- Stopped before Gallic War, Book I, section 30, where ambassadors from across
  Gaul come to congratulate Caesar and request a council.
- Spanish has been added for chapters 1-13.
