#!/usr/bin/env python3
"""
Automatically copy and organize files for all 9 commits.
Each commit is a complete, independent snapshot of the project.
"""

import os
import shutil
from pathlib import Path

# Define the project root
PROJECT_ROOT = Path(__file__).parent.parent
COMMITS_DIR = PROJECT_ROOT / "COMMITS"

# Files to copy for each commit
COMMITS_CONFIG = {
    1: {
        "copy_all_from": None,  # Base commit
        "description": "Initial Boilerplate - All base files",
    },
    2: {
        "copy_all_from": 1,
        "description": "Theme System - Add theme-toggle, modify theme-provider",
    },
    3: {
        "copy_all_from": 2,
        "description": "i18n Infrastructure - Add i18n.ts and language-context",
    },
    4: {
        "copy_all_from": 3,
        "description": "Language Selector - Add language-selector component",
    },
    5: {
        "copy_all_from": 4,
        "description": "Header Restructuring - Add top-bar, integrate LanguageProvider",
    },
    6: {
        "copy_all_from": 5,
        "description": "Reverse Morse - Add reverse-converter.ts",
    },
    7: {
        "copy_all_from": 6,
        "description": "Direction Toggle - Add direction-toggle component",
    },
    8: {
        "copy_all_from": 7,
        "description": "Bidirectional UI - Modify container, panel, hook for bidirectional",
    },
    9: {
        "copy_all_from": 8,
        "description": "Full i18n Integration - Complete i18n across all components",
    },
}

def copy_src_files(from_commit: int, to_commit: int):
    """Copy all src files from one commit to the next."""
    from_src = COMMITS_DIR / f"commit-{from_commit}" / "src"
    to_src = COMMITS_DIR / f"commit-{to_commit}" / "src"
    
    if from_src.exists() and not to_src.exists():
        shutil.copytree(from_src, to_src)
        print(f"  ✓ Copied src/ from commit-{from_commit} to commit-{to_commit}")
    elif from_src.exists():
        # Merge if target exists (don't overwrite)
        for item in from_src.rglob("*"):
            if item.is_file():
                rel_path = item.relative_to(from_src)
                target = to_src / rel_path
                target.parent.mkdir(parents=True, exist_ok=True)
                if not target.exists():
                    shutil.copy2(item, target)

def copy_config_files(from_commit: int, to_commit: int):
    """Copy all config files from one commit to the next."""
    config_files = [
        "tsconfig.json",
        "tailwind.config.ts",
        "next.config.ts",
        "postcss.config.mjs",
        "prettier.config.mjs",
        "components.json",
    ]
    
    from_dir = COMMITS_DIR / f"commit-{from_commit}"
    to_dir = COMMITS_DIR / f"commit-{to_commit}"
    
    for filename in config_files:
        from_file = from_dir / filename
        to_file = to_dir / filename
        
        if from_file.exists() and not to_file.exists():
            shutil.copy2(from_file, to_file)

def setup_all_commits():
    """Set up all 9 commits with proper file hierarchy."""
    print("🔄 Setting up all commits...\n")
    
    for commit_num in range(1, 10):
        print(f"📦 Commit {commit_num}: {COMMITS_CONFIG[commit_num]['description']}")
        
        commit_dir = COMMITS_DIR / f"commit-{commit_num}"
        commit_dir.mkdir(exist_ok=True)
        
        # For commits 2-9, copy from previous commit
        if commit_num > 1:
            prev_commit = COMMITS_CONFIG[commit_num]["copy_all_from"]
            copy_src_files(prev_commit, commit_num)
            copy_config_files(prev_commit, commit_num)
            
            # Copy package.json (might be modified)
            prev_package = COMMITS_DIR / f"commit-{prev_commit}" / "package.json"
            current_package = commit_dir / "package.json"
            if prev_package.exists() and not current_package.exists():
                shutil.copy2(prev_package, current_package)
        
        print()
    
    print("✅ All commits set up successfully!")
    print("\nNote: Files that are already created in their respective commits")
    print("will not be overwritten. New and modified files should be created separately.")

if __name__ == "__main__":
    setup_all_commits()
