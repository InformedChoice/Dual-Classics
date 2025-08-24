#!/usr/bin/env python3
"""
Convert Anabasis chapters to use Hugo pronunciation shortcodes.
This script converts inline pronunciation (Name (pronunciation)) 
to Hugo shortcode format {{< name "Name" "pronunciation" >}}
"""

import re
import sys
from pathlib import Path
import shutil
from datetime import datetime

def convert_pronunciation_to_shortcode(text):
    """
    Convert pronunciation patterns to Hugo shortcodes.
    Handles both bold and regular names with pronunciation.
    """
    
    def replace_pronunciation(match):
        name = match.group(1)
        pronunciation = match.group(2)
        return f'{{{{< name "{name}" "{pronunciation}" >}}}}'
    
    # Match pattern: Word (pronunciation-pattern)
    # Where Word starts with capital letter and pronunciation contains letters and hyphens
    pattern = r'\b([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)?)\s+\(([a-z]+(?:-[a-z]+)*(?:-[A-Z]+(?:-[a-z]+)*)*)\)'
    
    text = re.sub(pattern, replace_pronunciation, text)
    
    return text

def is_already_converted(content):
    """Check if a file has already been converted to use shortcodes."""
    return '{{< name' in content

def process_file(file_path, create_backup=True, force=False):
    """
    Process a single markdown file to convert pronunciations.
    """
    file_path = Path(file_path)
    
    if not file_path.exists():
        print(f"❌ File not found: {file_path}")
        return False
    
    # Read the original content
    with open(file_path, 'r', encoding='utf-8') as f:
        original_content = f.read()
    
    # Check if already converted
    if is_already_converted(original_content) and not force:
        print(f"✓ Already converted: {file_path.name}")
        return True
    
    # Create backup if requested
    if create_backup:
        backup_path = file_path.with_suffix('.md.backup')
        if not backup_path.exists():  # Don't overwrite existing backups
            shutil.copy2(file_path, backup_path)
            print(f"📁 Created backup: {backup_path.name}")
    
    # Convert the content
    converted_content = convert_pronunciation_to_shortcode(original_content)
    
    # Check if any changes were made
    if original_content == converted_content:
        print(f"ℹ️  No pronunciations found in: {file_path.name}")
        return True
    
    # Write the converted content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(converted_content)
    
    # Count the number of conversions made
    shortcode_count = converted_content.count('{{< name')
    original_pron_count = len(re.findall(r'\([a-z]+(?:-[a-z]+)*(?:-[A-Z]+(?:-[a-z]+)*)*\)', original_content))
    
    print(f"✅ Converted {file_path.name}: {shortcode_count} pronunciation guides added")
    
    return True

def process_directory(directory_path, pattern="*.md", create_backup=True, skip_index=True):
    """
    Process all markdown files in a directory.
    """
    dir_path = Path(directory_path)
    
    if not dir_path.is_dir():
        print(f"❌ Not a directory: {directory_path}")
        return
    
    # Find all matching files
    md_files = list(dir_path.glob(pattern))
    
    # Skip _index.md if requested
    if skip_index:
        md_files = [f for f in md_files if not f.name.startswith('_')]
    
    if not md_files:
        print(f"❌ No markdown files found in {directory_path}")
        return
    
    # Sort files for consistent processing order
    md_files.sort()
    
    print(f"\n📚 Processing Anabasis Chapters")
    print("=" * 50)
    print(f"Found {len(md_files)} chapter files to process")
    print("=" * 50 + "\n")
    
    successful = 0
    already_converted = 0
    no_pronunciations = 0
    
    for md_file in md_files:
        result = process_file(md_file, create_backup)
        if result:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
                if '{{< name' in content:
                    if 'Already converted' in str(result):
                        already_converted += 1
                    else:
                        successful += 1
                else:
                    no_pronunciations += 1
    
    print("\n" + "=" * 50)
    print("✨ Processing Complete!")
    print(f"   • Newly converted: {successful} files")
    print(f"   • Already converted: {already_converted} files")
    print(f"   • No pronunciations: {no_pronunciations} files")
    print(f"   • Total processed: {len(md_files)} files")
    print("=" * 50)

def show_status(directory_path):
    """Show the conversion status of all files in a directory."""
    dir_path = Path(directory_path)
    
    if not dir_path.is_dir():
        print(f"❌ Not a directory: {directory_path}")
        return
    
    md_files = sorted([f for f in dir_path.glob("*.md") if not f.name.startswith('_')])
    
    print(f"\n📊 Anabasis Chapter Status")
    print("=" * 50)
    
    converted = []
    not_converted = []
    
    for md_file in md_files:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
            if '{{< name' in content:
                converted.append(md_file.name)
            else:
                # Check if it has any pronunciations to convert
                if re.search(r'\([a-z]+(?:-[a-z]+)*(?:-[A-Z]+(?:-[a-z]+)*)*\)', content):
                    not_converted.append(md_file.name)
    
    print(f"✅ Converted ({len(converted)} chapters):")
    for name in converted:
        print(f"   • {name}")
    
    if not_converted:
        print(f"\n⏳ Need conversion ({len(not_converted)} chapters):")
        for name in not_converted:
            print(f"   • {name}")
    
    print("=" * 50)

def main():
    print("\n🔄 Anabasis Pronunciation Converter")
    print("=" * 50)
    
    if len(sys.argv) < 2:
        print("\nUsage:")
        print("  Convert all chapters:  python convert_anabasis.py content/books/anabasis/")
        print("  Check status:          python convert_anabasis.py content/books/anabasis/ --status")
        print("  Convert single file:   python convert_anabasis.py path/to/file.md")
        print("\nExample:")
        print("  python convert_anabasis.py content/books/anabasis/")
        sys.exit(1)
    
    target = Path(sys.argv[1])
    
    # Check for status flag
    if len(sys.argv) > 2 and sys.argv[2] == '--status':
        show_status(target)
        return
    
    if target.is_file():
        # Process single file
        print(f"Processing single file: {target}")
        process_file(target)
    elif target.is_dir():
        # Process directory
        process_directory(target)
    else:
        print(f"❌ Path does not exist: {target}")
        sys.exit(1)

if __name__ == "__main__":
    main()