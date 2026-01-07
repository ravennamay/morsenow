# Files to Copy for Commit 4: Language Selector Component with Flags

## Configuration Files
```
├── next.config.ts          ✅ (from previous commit)
├── tsconfig.json           ✅ (from previous commit)
├── package.json            ✅ (no changes)
├── tailwind.config.ts      ✅ (from previous commit)
├── postcss.config.mjs      ✅ (from previous commit)
├── prettier.config.mjs     ✅ (from previous commit)
├── components.json         ✅ (from previous commit)
└── .gitignore             ✅ (from previous commit)
```

## Source Files - App Directory
```
src/app/
├── layout.tsx             ✅ (no changes from commit-2)
├── page.tsx               ✅ (no changes from commit-1)
├── robots.ts              ✅ (from commit-1)
└── sitemap.ts             ✅ (from commit-1)
```

## Source Files - Components
```
src/components/
├── theme-provider.tsx         ✅ (from commit-2)
├── theme-toggle.tsx           ✅ (from commit-2)
├── language-selector.tsx      ✅ NEW: Create language picker
├── ui/
│   ├── button.tsx             ✅ (from commit-1)
│   └── card.tsx               ✅ (from commit-1)
├── layout/
│   └── header.tsx             ✅ (from commit-1)
└── translator/
    ├── translator-container.tsx  ✅ (from commit-1)
    └── translator-panel.tsx      ✅ (from commit-1)
```

## Styles
```
src/styles/
├── globals.css            ✅ (from commit-2)
└── theme-variables.css    ✅ (from commit-2)
```

## Config & Context
```
src/config/
├── i18n.ts                ✅ (from commit-3)
├── site.ts                ✅ (from commit-1)
└── constants.ts           ✅ (from commit-1)

src/context/
└── language-context.tsx   ✅ (from commit-3)
```

## Library & Types
```
src/lib/morse/
├── morse-code.ts          ✅ (from commit-1)
├── converter.ts           ✅ (from commit-1)
└── audio.ts              ✅ (from commit-1)

src/lib/
├── speech.ts              ✅ (from commit-1)
└── utils.ts              ✅ (from commit-1)

src/hooks/
└── use-toast.tsx          ✅ (from commit-1)

src/types/
└── index.ts              ✅ (from commit-1)
```

## Files to CREATE (New in This Commit)

### 1. src/components/language-selector.tsx
```typescript
"use client";

import { useLanguage } from "@/context/language-context";
import { Language } from "@/config/i18n";
import { Button } from "./ui/button";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: "pt-BR", flag: "🇧🇷", label: "PT" },
    { code: "en-US", flag: "🇺🇸", label: "EN" },
  ];

  return (
    <div className="flex items-center gap-1 rounded-lg bg-muted/30 p-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          size="sm"
          variant={language === lang.code ? "default" : "ghost"}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center gap-1 text-sm transition-all ${
            language === lang.code ? "bg-primary/20" : "hover:bg-accent/20"
          }`}
          title={lang.label}
        >
          <span className="text-lg">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.label}</span>
        </Button>
      ))}
    </div>
  );
};
```

## Files to MODIFY (From Previous Commit)

None - no existing files need modification in this commit.

## Files NOT Present Yet
```
- ❌ src/components/layout/top-bar.tsx (added in commit-5)
- ❌ LanguageSelector integration in layout (added in commit-5)
```

## Component Features

- ✅ Flag emoji display (🇧🇷 🇺🇸)
- ✅ Language labels (PT, EN)
- ✅ Active language highlighting
- ✅ Responsive design (desktop shows labels, mobile shows flags only)
- ✅ Click to switch language
- ✅ localStorage persistence via context

## Styling

- Container: Rounded box with muted background
- Active button: Primary color highlight
- Inactive button: Ghost variant with hover effect
- Responsive: Labels hidden on small screens

## Testing

1. Add LanguageProvider wrapper to your page
2. Add LanguageSelector component
3. Click PT/EN buttons to switch
4. Verify localStorage update: `{ "language": "en-US" }`
5. Refresh - language should persist
6. Verify responsive on mobile devices

## Dependencies

No new npm dependencies required. Uses existing Button component and context.

## Total Files
- New files created: 1
- Modified files: 0
- Configuration updates: 0

## Next Steps

The next commit will integrate this component into a TopBar header that will be positioned at the top of the page.
