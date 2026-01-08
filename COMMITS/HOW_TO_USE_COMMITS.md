# How to Use the Commits

## Quick Start

Each `commit-X` folder contains **actual files** that show the project state at that commit.

### Fastest Way: Copy Commit to Your Project

```bash
# Navigate to a commit folder
cd commit-5

# Copy all files to your project
cp -r . /path/to/your/project/

# Install and run
cd /path/to/your/project
npm install
npm run dev
```

---

## Understanding the Structure

### Commit Folders Organization

Each commit folder contains:

1. **Configuration files** (needed to run the project)
   - `package.json` - dependencies
   - `tsconfig.json` - TypeScript config
   - `tailwind.config.ts` - Tailwind config
   - `next.config.ts` - Next.js config
   - etc.

2. **Source files** (actual code)
   - `src/app/` - pages
   - `src/components/` - React components
   - `src/lib/` - utilities
   - `src/hooks/` - custom hooks
   - `src/config/` - configuration
   - `src/types/` - TypeScript types
   - `src/styles/` - CSS

3. **Documentation** (explains what changed)
   - `FILES_INHERITED_FROM_COMMIT_X.md` - explains inheritance

### Example: What's in commit-5?

```
commit-5/
├── package.json                 (inherited from commit-4)
├── tsconfig.json               (same as commit-4)
├── tailwind.config.ts          (same as commit-4)
├── next.config.ts              (same as commit-4)
├── src/
│   ├── app/
│   │   └── layout.tsx          ⭐ MODIFIED - added TopBar
│   ├── components/
│   │   ├── layout/
│   │   │   ├── top-bar.tsx     ⭐ NEW - sticky header
│   │   │   ├── header.tsx      ⭐ MODIFIED - uses translations
│   │   │   └── ...
│   │   ├── theme-provider.tsx  ⭐ MODIFIED - integrated i18n
│   │   └── ... (rest inherited from commit-4)
│   └── ... (rest inherited from commit-4)
└── FILES_INHERITED_FROM_COMMIT_4.md
```

---

## Method 1: Manual Copy (Simplest)

### Step 1: Copy Complete Commit

```bash
# Copy all files from commit-5
cp -r COMMITS/commit-5/* /your/project/
```

### Step 2: Install Dependencies

```bash
cd /your/project
npm install
```

### Step 3: Run the Project

```bash
npm run dev
# Open http://localhost:3000
```

---

## Method 2: Selective Copy (Custom Setup)

If you want to copy only specific files:

### Step 1: Copy Configuration Files

```bash
# Copy config files
cp COMMITS/commit-5/package.json /your/project/
cp COMMITS/commit-5/tsconfig.json /your/project/
cp COMMITS/commit-5/tailwind.config.ts /your/project/
cp COMMITS/commit-5/next.config.ts /your/project/
cp COMMITS/commit-5/postcss.config.mjs /your/project/
cp COMMITS/commit-5/prettier.config.mjs /your/project/
cp COMMITS/commit-5/components.json /your/project/
```

### Step 2: Copy Source Files

```bash
# Copy all src files
cp -r COMMITS/commit-5/src/* /your/project/src/
```

### Step 3: Install and Run

```bash
cd /your/project
npm install
npm run dev
```

---

## Method 3: Automated Copy (Using Python Script)

```bash
cd COMMITS
python3 setup_commits.py

# This will:
# 1. Create commit-1 through commit-9 with all files
# 2. Copy inherited files automatically
# 3. Ensure each commit is complete and runnable
```

---

## Understanding File Inheritance

### How Commits Inherit from Previous Commits

**Commit 1:** Contains all 25+ boilerplate files
```
commit-1/
├── all configuration files
├── src/ (all files needed to run)
└── ... (complete project)
```

**Commit 2:** Contains ONLY new/modified files
```
commit-2/
├── package.json (MODIFIED - added next-themes)
├── src/
│   └── components/
│       └── theme-toggle.tsx (NEW)
├── src/components/theme-provider.tsx (MODIFIED)
└── FILES_INHERITED_FROM_COMMIT_1.md
```

**To fully replicate commit-2:**
1. Copy all files from commit-1
2. Then copy/overwrite files from commit-2
3. Result: Full commit-2 project

---

## Quick Reference: What Changed in Each Commit

### Commit 1
✅ Complete boilerplate setup
- All config files
- All UI components
- Basic morse translator
- 25+ files

### Commit 2
✅ Theme system added
- Add: `src/components/theme-toggle.tsx`
- Modify: `package.json`, `theme-provider.tsx`, `theme-variables.css`

### Commit 3
✅ i18n infrastructure
- Add: `src/config/i18n.ts`, `src/context/language-context.tsx`
- Modify: `theme-provider.tsx`

### Commit 4
✅ Language selector component
- Add: `src/components/language-selector.tsx`

### Commit 5
✅ Header restructuring
- Add: `src/components/layout/top-bar.tsx`
- Modify: `header.tsx`, `layout.tsx`, `theme-provider.tsx`

### Commit 6
✅ Reverse morse logic
- Add: `src/lib/morse/reverse-converter.ts`

### Commit 7
✅ Direction toggle component
- Add: `src/components/translator/direction-toggle.tsx`

### Commit 8
✅ Bidirectional UI integration
- Modify: `use-translator.tsx`, `translator-container.tsx`, `translator-panel.tsx`, `types/index.ts`

### Commit 9
✅ Full i18n integration (FINAL)
- Modify: `header.tsx`, `footer.tsx`, `theme-provider.tsx`, `language-context.tsx`, `i18n.ts`

---

## Using Commits for Learning

### To Understand Progression:

1. **Start with commit-1** - understand the foundation
2. **Review each commit's documentation** - read `FILES_INHERITED_FROM_COMMIT_X.md`
3. **Compare files** between commits - see what changed
4. **Run each commit locally** - test the features at each stage

### Example: Learn How Bidirectional Translation Was Added

```bash
# Compare the translator files between commits
diff COMMITS/commit-7/src/hooks/use-translator.tsx \
     COMMITS/commit-8/src/hooks/use-translator.tsx

# See what the file looked like before
cat COMMITS/commit-7/src/hooks/use-translator.tsx

# See what changed in commit-8
cat COMMITS/commit-8/src/hooks/use-translator.tsx

# See no changes in commit-9
cat COMMITS/commit-9/src/hooks/use-translator.tsx
```

---

## Troubleshooting

### Issue: "Can't find module..."

**Solution:** You might have missed copying some files.
```bash
# Make sure all files were copied:
ls -la /your/project/src/lib/morse/
# Should contain: morse-code.ts, converter.ts, audio.ts, reverse-converter.ts (commit 6+)
```

### Issue: "Port 3000 already in use"

**Solution:** Run on a different port:
```bash
npm run dev -- -p 3001
# Now open http://localhost:3001
```

### Issue: "Missing dependencies"

**Solution:** Reinstall dependencies:
```bash
rm -rf node_modules
npm install
npm run dev
```

---

## File Copying Cheatsheet

### Copy just the changed files from a specific commit

```bash
# See what changed in commit-8
cat COMMITS/commit-8/FILES_INHERITED_FROM_COMMIT_7.md

# Copy only the files that were modified
cp COMMITS/commit-8/src/hooks/use-translator.tsx /your/project/src/hooks/
cp COMMITS/commit-8/src/components/translator/translator-container.tsx /your/project/src/components/translator/
cp COMMITS/commit-8/src/components/translator/translator-panel.tsx /your/project/src/components/translator/
cp COMMITS/commit-8/src/types/index.ts /your/project/src/types/
```

### Copy everything from a commit

```bash
# Easiest - copy entire commit folder
cp -r COMMITS/commit-8/* /your/project/
```

### Compare two commits

```bash
# See files that changed between commit-7 and commit-8
diff -r COMMITS/commit-7 COMMITS/commit-8
```

---

## Next Steps

After copying a commit to your project:

1. **Install dependencies:** `npm install`
2. **Start dev server:** `npm run dev`
3. **Open browser:** `http://localhost:3000`
4. **Test features:**
   - Commit 1: Type text, see morse code appear
   - Commit 2: Click theme toggle (no visible change yet - needs fix)
   - Commit 5: Click language selector, toggle theme (now in top-right)
   - Commit 8: Click direction toggle, switch to Morse→Text mode
   - Commit 9: Try different languages, notice all text is translated

---

## Summary

**To use a commit:**

1. Copy all files from the commit folder to your project
2. Run `npm install`
3. Run `npm run dev`
4. Test the features implemented in that commit

**To learn the progression:**

1. Look at `FILES_INHERITED_FROM_COMMIT_X.md` in each folder
2. Compare changed files between commits
3. Run each commit locally and test

**To understand file structure:**

- Configuration files are at the root
- Source code is in `src/`
- Each commit shows what changed, not what stayed the same

---

## Quick Links

- `COMMITS.md` - Commit descriptions
- `FILES_BY_COMMIT.md` - Which files changed in each commit
- `COMMITS_STRUCTURE_GUIDE.md` - Detailed structure explanation
- `setup_commits.py` - Automated setup script
- `HOW_TO_USE_COMMITS.md` - This file

---

**Happy learning!** 🚀
