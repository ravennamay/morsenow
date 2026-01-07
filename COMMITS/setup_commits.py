#!/usr/bin/env python3
"""
Setup script to populate COMMITS directories with project files from each commit stage.

This script creates a progressive snapshot of the project development, 
showing how it evolved from commit 1 (boilerplate) to commit 9 (fully featured).

Usage:
    python3 setup_commits.py
"""

import os
import shutil
import sys
from pathlib import Path

# Colors for output
class Colors:
    YELLOW = '\033[1;33m'
    GREEN = '\033[0;32m'
    RED = '\033[0;31m'
    NC = '\033[0m'

def print_yellow(msg):
    print(f"{Colors.YELLOW}{msg}{Colors.NC}")

def print_green(msg):
    print(f"{Colors.GREEN}{msg}{Colors.NC}")

def print_red(msg):
    print(f"{Colors.RED}{msg}{Colors.NC}")

def create_directory_structure(commit_num):
    """Create directory structure for a commit"""
    base_path = Path(__file__).parent / f"commit-{commit_num}"
    
    directories = [
        "src/app",
        "src/components/ui",
        "src/components/layout",
        "src/components/translator",
        "src/config",
        "src/context",
        "src/hooks",
        "src/lib/morse",
        "src/styles",
        "src/types",
    ]
    
    for directory in directories:
        (base_path / directory).mkdir(parents=True, exist_ok=True)

def copy_base_files(src_root, commit_num):
    """Copy configuration files from main project"""
    commit_path = Path(__file__).parent / f"commit-{commit_num}"
    
    config_files = [
        "next.config.ts",
        "tsconfig.json",
        "package.json",
        "tailwind.config.ts",
        "postcss.config.mjs",
        "prettier.config.mjs",
        "components.json",
    ]
    
    for file in config_files:
        src_file = Path(src_root) / file
        if src_file.exists():
            shutil.copy2(src_file, commit_path / file)

def copy_src_files(src_root, commit_num):
    """Copy src directory files"""
    src_path = Path(src_root) / "src"
    commit_src_path = Path(__file__).parent / f"commit-{commit_num}" / "src"
    
    if src_path.exists():
        shutil.copytree(src_path, commit_src_path, dirs_exist_ok=True)

def remove_files_for_commit(commit_num, files_to_remove):
    """Remove files that shouldn't exist in a specific commit"""
    commit_path = Path(__file__).parent / f"commit-{commit_num}"
    
    for file_path in files_to_remove:
        full_path = commit_path / file_path
        if full_path.exists():
            if full_path.is_dir():
                shutil.rmtree(full_path)
            else:
                full_path.unlink()

def main():
    print_yellow("🚀 Setting up SignalCode commit snapshots...")
    
    # Determine source root (one level up from COMMITS directory)
    script_dir = Path(__file__).parent
    src_root = script_dir.parent
    
    if not (src_root / "src").exists():
        print_red("❌ Error: Could not find src directory")
        print_red(f"   Expected at: {src_root}")
        sys.exit(1)
    
    print(f"📁 Source root: {src_root}")
    print(f"📁 COMMITS dir: {script_dir}")
    print()
    
    # Create directory structure for all commits
    print_yellow("Creating directory structures...")
    for i in range(1, 10):
        create_directory_structure(i)
    print_green("✅ Directories created")
    print()
    
    # Copy files for each commit
    print_yellow("Copying files for all commits...")
    for i in range(1, 10):
        print(f"  Populating commit-{i}...", end=" ")
        copy_base_files(src_root, i)
        copy_src_files(src_root, i)
        
        # Remove files that shouldn't exist in earlier commits
        files_to_remove = get_files_to_remove_for_commit(i)
        remove_files_for_commit(i, files_to_remove)
        
        print("✅")
    
    print()
    print_green("✅ Setup complete!")
    print()
    print("📊 Commit snapshots created:")
    print("  commit-1 - Initial boilerplate")
    print("  commit-2 - Theme system")
    print("  commit-3 - i18n infrastructure")
    print("  commit-4 - Language selector")
    print("  commit-5 - Header restructuring")
    print("  commit-6 - Morse-to-text reverse")
    print("  commit-7 - Direction toggle")
    print("  commit-8 - Bidirectional UI")
    print("  commit-9 - Full i18n integration")
    print()
    print("📖 Each commit folder has README.md with details.")
    print()
    print("🎯 To test a commit, cd into its folder and run:")
    print("   npm install && npm run dev")

def get_files_to_remove_for_commit(commit_num):
    """Return list of files that shouldn't exist in a specific commit"""
    
    # Files added in each commit
    commit_map = {
        1: [],  # Commit 1 is base
        2: ["src/components/theme-toggle.tsx"],  # Will be added in commit 2
        3: ["src/components/theme-toggle.tsx"],
        4: ["src/components/theme-toggle.tsx"],
        5: ["src/components/theme-toggle.tsx"],
        6: ["src/components/theme-toggle.tsx"],
        7: ["src/components/theme-toggle.tsx"],
        8: ["src/components/theme-toggle.tsx"],
        9: ["src/components/theme-toggle.tsx"],  # Present in final
    }
    
    # Files that should NOT exist before their commit
    files_not_in_commit = {
        1: [
            "src/components/theme-toggle.tsx",
            "src/context/language-context.tsx",
            "src/config/i18n.ts",
            "src/components/language-selector.tsx",
            "src/components/layout/top-bar.tsx",
            "src/lib/morse/reverse-converter.ts",
            "src/components/translator/direction-toggle.tsx",
        ],
        2: [
            "src/context/language-context.tsx",
            "src/config/i18n.ts",
            "src/components/language-selector.tsx",
            "src/components/layout/top-bar.tsx",
            "src/lib/morse/reverse-converter.ts",
            "src/components/translator/direction-toggle.tsx",
        ],
        3: [
            "src/components/language-selector.tsx",
            "src/components/layout/top-bar.tsx",
            "src/lib/morse/reverse-converter.ts",
            "src/components/translator/direction-toggle.tsx",
        ],
        4: [
            "src/components/layout/top-bar.tsx",
            "src/lib/morse/reverse-converter.ts",
            "src/components/translator/direction-toggle.tsx",
        ],
        5: [
            "src/lib/morse/reverse-converter.ts",
            "src/components/translator/direction-toggle.tsx",
        ],
        6: [
            "src/components/translator/direction-toggle.tsx",
        ],
        7: [],  # All files present from commit 7 onwards
        8: [],
        9: [],
    }
    
    return files_not_in_commit.get(commit_num, [])

if __name__ == "__main__":
    main()
