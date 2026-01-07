# Files to Copy to This Commit Directory

To reconstruct Commit 1 (Initial Boilerplate), copy these files from the main project:

## Configuration Files
```
├── next.config.ts          ✅ (already added)
├── tsconfig.json          ✅ (already added)
├── package.json           ✅ (already added)
├── tailwind.config.ts     (copy from root)
├── postcss.config.mjs     (copy from root)
├── prettier.config.mjs    (copy from root)
├── components.json        (copy from root)
└── .gitignore            (copy from root)
```

## Source Files

### App Directory
```
src/app/
├── layout.tsx             (copy from main - basic version, remove TopBar)
├── page.tsx               (copy from main)
├── robots.ts             (copy from main)
└── sitemap.ts            (copy from main)
```

### Components - UI Primitives
```
src/components/ui/
├── button.tsx            (copy from main)
├── card.tsx              (copy from main)
├── toast.tsx             (copy from main)
└── toaster.tsx           (copy from main)
```

### Library - Morse Code
```
src/lib/morse/
├── morse-code.ts         (copy from main)
├── converter.ts          (copy from main - basic version)
└── audio.ts              (copy from main)
```

### Library - Utilities
```
src/lib/
├── speech.ts             (copy from main)
└── utils.ts              (copy from main)
```

### Config
```
src/config/
├── site.ts              (copy from main)
└── constants.ts         (copy from main)
```

### Context/Hooks
```
src/hooks/
└── use-toast.tsx        (copy from main)
```

### Styles
```
src/styles/
├── globals.css          (copy from main)
└── theme-variables.css  (copy from main - light only)
```

### Types
```
src/types/
└── index.ts            (copy from main - basic version)
```

### Components
```
src/components/
├── theme-provider.tsx              (create basic version - no LanguageProvider)
├── layout/
│   └── header.tsx                 (copy from main - hardcoded strings)
└── translator/
    ├── translator-container.tsx    (copy from main - basic version)
    └── translator-panel.tsx        (copy from main - basic version)
```

## Files NOT Present Yet

These files should NOT be in this commit:
- ❌ src/context/language-context.tsx (added in commit-3)
- ❌ src/components/language-selector.tsx (added in commit-4)
- ❌ src/components/theme-toggle.tsx (added in commit-2)
- ❌ src/components/layout/top-bar.tsx (added in commit-5)
- ❌ src/components/translator/direction-toggle.tsx (added in commit-7)
- ❌ src/config/i18n.ts (added in commit-3)
- ❌ src/lib/morse/reverse-converter.ts (added in commit-6)

## Total Files in Commit 1

Approximately 25-30 core files that form the foundation of the project.
