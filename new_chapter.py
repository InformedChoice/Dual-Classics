#!/usr/bin/env python3
"""
Helper script for adding new Anabasis chapters with pronunciation support.
This creates a template or converts pasted text to use the pronunciation shortcodes.
"""

import re
import sys
from pathlib import Path

def create_chapter_template(chapter_num, title, summary):
    """Create a new chapter template with pronunciation shortcode examples."""
    
    template = f"""---
title: "Chapter {chapter_num}: {title}"
chapter: {chapter_num}
weight: {chapter_num}
summary: "{summary}"
---

{{{{< bp >}}}}
[English paragraph with {{{{< name "CharacterName" "pronunciation" >}}}} examples]
---
[Spanish paragraph with {{{{< name "NombrePersonaje" "pronunciación" >}}}} examples]
{{{{< /bp >}}}}

{{{{< bp >}}}}
[Continue with more paragraphs...]
---
[Continúa con más párrafos...]
{{{{< /bp >}}}}
"""
    return template

def convert_text_to_chapter(text, chapter_num, title, summary):
    """Convert raw text with pronunciations to a properly formatted chapter."""
    
    # Convert pronunciation patterns
    def replace_pronunciation(match):
        name = match.group(1)
        pronunciation = match.group(2)
        return f'{{{{< name "{name}" "{pronunciation}" >}}}}'
    
    # Pattern for names with pronunciation
    pattern = r'\b([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)?)\s+\(([a-z]+(?:-[a-z]+)*(?:-[A-Z]+(?:-[a-z]+)*)*)\)'
    converted_text = re.sub(pattern, replace_pronunciation, text)
    
    # Create the chapter structure
    chapter = f"""---
title: "Chapter {chapter_num}: {title}"
chapter: {chapter_num}
weight: {chapter_num}
summary: "{summary}"
---

{converted_text}"""
    
    return chapter

def interactive_mode():
    """Interactive mode for creating new chapters."""
    
    print("\n📝 Anabasis Chapter Creator")
    print("=" * 50)
    
    chapter_num = input("Chapter number: ")
    title = input("Chapter title (e.g., 'The River Crossing'): ")
    summary = input("Brief summary: ")
    
    print("\nChoose an option:")
    print("1. Create empty template")
    print("2. Convert pasted text with pronunciations")
    
    choice = input("\nYour choice (1 or 2): ")
    
    if choice == "1":
        content = create_chapter_template(chapter_num, title, summary)
        filename = f"{chapter_num.zfill(2)}-chapter-{chapter_num}.md"
        
    elif choice == "2":
        print("\nPaste your text (with pronunciations in parentheses).")
        print("Type 'END' on a new line when done:")
        
        lines = []
        while True:
            line = input()
            if line == 'END':
                break
            lines.append(line)
        
        text = '\n'.join(lines)
        content = convert_text_to_chapter(text, chapter_num, title, summary)
        filename = f"{chapter_num.zfill(2)}-chapter-{chapter_num}.md"
    
    else:
        print("Invalid choice")
        return
    
    # Save the file
    save_path = Path(f"content/books/anabasis/{filename}")
    
    print(f"\n📄 Preview of {filename}:")
    print("-" * 50)
    print(content[:500] + "..." if len(content) > 500 else content)
    print("-" * 50)
    
    confirm = input(f"\nSave to {save_path}? (y/n): ")
    
    if confirm.lower() == 'y':
        save_path.parent.mkdir(parents=True, exist_ok=True)
        with open(save_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Saved to {save_path}")
    else:
        print("❌ Cancelled")

def batch_convert_clipboard():
    """Convert text from clipboard with pronunciations."""
    try:
        import pyperclip
        text = pyperclip.paste()
    except ImportError:
        print("Install pyperclip for clipboard support: pip install pyperclip")
        print("Or paste your text manually in interactive mode")
        return
    
    # Convert pronunciation patterns
    def replace_pronunciation(match):
        name = match.group(1)
        pronunciation = match.group(2)
        return f'{{{{< name "{name}" "{pronunciation}" >}}}}'
    
    pattern = r'\b([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)?)\s+\(([a-z]+(?:-[a-z]+)*(?:-[A-Z]+(?:-[a-z]+)*)*)\)'
    converted = re.sub(pattern, replace_pronunciation, text)
    
    print("\n✅ Converted text (copied to clipboard):")
    print("-" * 50)
    print(converted)
    print("-" * 50)
    
    try:
        pyperclip.copy(converted)
        print("\n📋 Converted text has been copied to your clipboard!")
    except:
        pass

def main():
    if len(sys.argv) > 1:
        if sys.argv[1] == '--clipboard':
            batch_convert_clipboard()
        else:
            print("Usage:")
            print("  Interactive mode:     python new_chapter.py")
            print("  Convert clipboard:    python new_chapter.py --clipboard")
    else:
        interactive_mode()

if __name__ == "__main__":
    main()