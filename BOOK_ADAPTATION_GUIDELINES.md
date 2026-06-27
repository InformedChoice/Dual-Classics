# Book Adaptation Guidelines

These are the main content instructions for all future books in this repo.

The next planned book is Caesar's Commentaries. The Caesar-specific notes near
the end of this file apply to that book, but the general rules apply to every
future public-domain classic.

## Future Book Workflow

- Work only from public-domain source material or text the user has permission
  to use.
- Create the faithful, child-readable English version first.
- Do not create the Spanish version until the English text for the relevant
  chapter, section, or book is completed and ready to translate.
- After the English is completed, create the Spanish from the completed English
  so the bilingual sections match closely.
- Final Hugo chapters should use the repo's bilingual shortcodes:
  - Block form: `{{< bp >}} EN text --- ES text {{< /bp >}}`
  - Inline form: `{{< bi en="EN text" es="ES text" >}}`
- If a chapter is still English-only, make that status clear in the working
  draft or front matter notes. Do not silently pretend the Spanish is complete.

## Core Task

Create a faithful, child-readable version of a public-domain classic for
children ages 7-11.

Do not summarize, abridge heavily, modernize the story, or create a watered-down
children's adaptation. Rewrite the source text in clear, fluent English that an
elementary-school-age child can read and follow while preserving the real story,
the sequence of events, the important details, the characters, the conflicts,
the moral and political complexity, and the qualities that make the work a
classic.

## 1. Source and Copyright

Only work from public-domain source material or text that the user has a right
to use. If the source appears to be a modern copyrighted translation, do not
rewrite it unless the user confirms permission to use it.

For ancient works, remember that the original work may be public domain, but a
modern English translation may still be copyrighted.

## 2. Fidelity to the Original

Stay close to the original meaning.

Do not invent new scenes, motives, conversations, jokes, morals, or explanations
unless they are clearly labeled as a brief clarification for the child reader.

Do not remove important events merely because they are difficult, violent,
political, morally complicated, or historically strange.

Preserve the actual order of events.

Preserve important speeches, arguments, decisions, causes, consequences,
betrayals, battles, journeys, alliances, and changes of fortune.

When the original gives a reason for something, include that reason.

When the original is uncertain, ambiguous, biased, or one-sided, preserve that
quality rather than pretending the matter is settled.

Do not turn the work into a modern moral lesson. Let the classic remain itself.

## 3. Reading Level and Style

Rewrite in clear, direct English for children ages 7-11.

Aim for a reading level roughly around upper elementary school, but do not make
the writing babyish.

Use shorter sentences than the original.

Prefer active voice.

Use concrete words where possible.

Break very long paragraphs into smaller paragraphs.

Explain difficult words naturally in the sentence or with a short note.

Keep the tone serious, adventurous, and respectful. These are classics, not
cartoons.

Avoid slang, sarcasm, silly modern comparisons, or language that would make the
story feel cheap or childish.

The writing should feel like a good parent or teacher is reading the real book
aloud to intelligent children.

## 4. Names, Places, and Pronunciation Help

Keep the real historical names and place names.

The first time a difficult name appears, give a simple pronunciation guide.
Examples:

- Xenophon: ZEN-uh-fon
- Artaxerxes: ar-tuh-ZERK-seez
- Ariovistus: air-ee-oh-VIS-tus
- Vercingetorix: ver-sin-JET-or-ix

After the first time, use the normal name without the pronunciation guide unless
the name has not appeared for a long time.

Do not replace real names with nicknames or simplified fake names.

If a person has a title or role that helps the child understand who he is,
briefly add it.

Example:

> Ariovistus, a powerful German king, refused Caesar's demands.

In committed Hugo content, use the `name` shortcode for pronunciation hints so
they work with the Pronunciation On/Off toggle:

- English: `{{< name "Xenophon" "ZEN-uh-fawn" >}}`
- Espanol: `{{< name "Jenofonte" "heh-no-FAWN-te" >}}`

Do not hard-code committed hints like `Cyrus (SY-rus)`. Convert those to the
`name` shortcode before committing chapter content.

## 5. Hard Concepts

When the original involves politics, military strategy, law, religion,
geography, or ancient customs, explain just enough for a child to follow the
story.

Keep explanations short and embedded in the text when possible.

Example:

> The Senate was Rome's council of leading men. It did not always command
> armies directly, but its approval mattered greatly.

Do not stop the story with long textbook-style explanations unless the user asks
for study notes.

## 6. Violence

Do not remove violence simply because it is violent. The intended readers are
familiar with serious stories, including the Bible and ancient history.

Battles, executions, deaths, punishments, betrayal, and hardship may be
included.

Avoid graphic gore. Do not dwell on blood, mutilation, torture, or suffering in
a sensational way.

State violent events clearly but soberly.

Example:

Instead of:

> The soldiers hacked the men apart and the ground ran red with blood.

Write:

> The soldiers killed many of them, and the rest fled in terror.

## 7. Sexual Material and Sexual Violence

This is the main area for age-appropriate adjustment.

Do not include explicit sexual content.

Do not describe sexual acts, seduction, rape, sexual assault, prostitution,
erotic desire, or adult sexual relationships in detail.

When such material appears, preserve only what is necessary for the story, but
convert it into child-appropriate language.

Use terms such as:

- he treated her shamefully
- he took her by force
- he forced her into marriage
- he wanted her for himself
- he behaved wickedly toward her
- she was taken against her will
- he became wrongly attached to the boy
- he wanted to keep the boy near him

Do not make sexual wrongdoing sound romantic or harmless. Do not turn rape into
a happy marriage or a consensual love story. Also do not describe the sexual
details.

If the original event is not important to the main story, summarize it briefly
or omit the explicit part while keeping any important consequence.

Example:

Original idea: A woman is raped or sexually assaulted.

Child-readable version:

> He took her against her will and treated her shamefully. This wrong act caused
> great anger among her family and people.

Example:

Original idea: An older man desires a boy.

Child-readable version:

> He became wrongly attached to the boy and wanted to keep him close. The others
> saw that this was improper and dangerous.

Example:

Original idea: A forced sexual relationship leads to conflict.

Child-readable version:

> He forced her into his household against her will. Because of this, her
> relatives became his enemies.

## 8. Religion and Ancient Beliefs

Preserve references to gods, omens, sacrifices, priests, temples, prophecies,
and religious customs.

Do not make the ancient religion sound Christian, modern, or fake.

Explain briefly when needed.

Example:

> The Romans believed this omen was a sign from the gods.

## 9. Moral Complexity

Do not over-sanitize characters.

If Caesar is ambitious, show his ambition.

If a Greek general is brave but proud, show both.

If a Roman or Greek writer is biased against foreigners, preserve the bias but
make it understandable as the author's perspective.

When helpful, use phrases like:

- Caesar says...
- According to Plutarch...
- Xenophon believed...
- The writer presents this as...

This helps the child understand that ancient authors often had a point of view.

## 10. Working Draft Output Format

Preserve the structure of the book as much as possible.

Use this format for working drafts unless the user asks for a different one:

```text
Title of Work
Book / Chapter / Section

People and Places in This Section:
- Give a short list only if there are several difficult names.
- Include pronunciation help for new names.

Retold Text:
Rewrite the passage in child-readable English while staying faithful to the
original.

Helpful Notes:
Add only a few short notes when needed to explain terms, customs, geography,
military tactics, or historical background.

Hard Words:
Include a short glossary only when useful.
```

For committed Hugo chapter content, convert the retold text into the repo's
chapter Markdown and bilingual shortcodes after the Spanish pass is complete.

## 11. Length

Do not compress the passage too much.

The rewritten version may be shorter than the original if the original is wordy,
repetitive, or syntactically difficult, but it should not become a mere summary.

As a general rule, preserve most of the content and detail.

If the original passage is 1,000 words, the rewritten version might be 700-1,000
words, depending on how dense the original is.

## 12. Style Example

Original-style sentence:

> Caesar, having learned of these things, and fearing the weakness of the Gauls,
> because they are changeable in their plans and generally eager for new things,
> thought that nothing should be trusted to them.

Child-readable version:

> When Caesar heard this, he became worried. He believed the Gauls often changed
> their minds and were quick to join anything new. So he decided he could not
> safely trust them.

## 13. Do Not Do These Things

- Do not make the story cute.
- Do not add modern slang.
- Do not add jokes.
- Do not add fictional dialogue unless the original has dialogue or indirect
  speech.
- Do not remove hard names.
- Do not turn the book into a moral fable.
- Do not make every character good or bad.
- Do not skip important politics, strategy, or motives.
- Do not replace ancient customs with modern customs.
- Do not make the prose sound like a textbook.
- Do not include explicit sexual material.

## 14. Quality Check Before Publishing or Answering

Check the work against these questions:

- Did it preserve the actual events?
- Did it keep the important details?
- Did it make the language easier for a 7-11-year-old?
- Did it avoid making the story babyish?
- Did it keep the names and add pronunciation help?
- Did it explain difficult ideas briefly?
- Did it preserve violence without making it graphic?
- Did it remove or soften explicit sexual content in an age-appropriate way?
- Did it avoid inventing new material?
- Did it preserve the seriousness and dignity of the classic?

## Special Instruction for Caesar's Commentaries

Caesar writes about himself in the third person and often presents his own
decisions as wise, necessary, and justified. Preserve that style when possible,
but make it understandable to the child reader.

Do not turn Caesar into either a superhero or a villain. Let the child see his
courage, intelligence, ambition, severity, political skill, and self-justifying
tone.

Pay special attention to:

- why Caesar says he acted;
- what the tribes, envoys, soldiers, and rival leaders wanted;
- geography, rivers, forts, roads, winter camps, supply lines, and marches;
- battle tactics and formations;
- promises, hostages, alliances, betrayals, and negotiations;
- the difference between what Caesar reports and what may be Caesar's own point
  of view.

When Caesar uses Roman military or political terms, explain them briefly the
first time.

## One-Chapter Working Prompt

Use this shorter prompt when processing one source passage at a time:

```text
Rewrite the following public-domain classic text for children ages 7-11.

Keep the real story, real names, real order of events, and important details. Do
not summarize heavily or make it babyish. Use clear, fluent English with shorter
sentences and easier vocabulary. Add pronunciation help the first time difficult
names appear. Briefly explain ancient customs, politics, geography, military
terms, or hard ideas when needed.

Preserve serious events, including battles, death, betrayal, hardship, and moral
complexity, but avoid graphic gore.

For sexual content, sexual assault, seduction, prostitution, or adult sexual
relationships, do not include explicit details. Convert the material into
age-appropriate language while preserving any important consequence: "he treated
her shamefully," "he took her by force," "he forced her into marriage," "she was
taken against her will," or similar wording. Do not make wrongdoing sound
romantic or harmless.

Do not invent scenes, modernize the morals, add slang, add jokes, or replace the
ancient world with modern ideas.

Format the answer as:

People and Places:
Retold Text:
Helpful Notes:
Hard Words:

Now rewrite this passage:
[PASTE PASSAGE HERE]
```
