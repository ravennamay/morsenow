# Files to Copy for Commit 5: Header Restructuring and TopBar Integration

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
├── layout.tsx             ✅ MODIFY: Add TopBar to layout
├── page.tsx               ✅ (no changes from commit-1)
├── robots.ts              ✅ (from commit-1)
└── sitemap.ts             ✅ (from commit-1)
```

## Source Files - Components
```
src/components/
├── theme-provider.tsx         ✅ (from commit-2)
├── theme-toggle.tsx           ✅ MODIFY: Remove fixed positioning
├── language-selector.tsx      ✅ (from commit-4)
├── layout/
│   ├── top-bar.tsx            ✅ NEW: Create sticky header
│   └── header.tsx             ✅ (from commit-1)
├── ui/
│   ├── button.tsx             ✅ (from commit-1)
│   └── card.tsx               ✅ (from commit-1)
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

### 1. src/components/layout/top-bar.tsx
```typescript
"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";

export const TopBar = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b border-border/40 bg-background/95 backdrop-blur-sm px-4 py-3 sm:px-6 lg:px-8">
      <div className="flex-1" />
      <div className="flex items-center justify-end gap-2">
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </div>
  );
};
```

## Files to MODIFY (From Previous Commit)

### 1. src/app/layout.tsx
Add TopBar to layout:
```typescript
import { TopBar } from "@/components/layout/top-bar";
import { Providers } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers>
          <TopBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

### 2. src/components/theme-toggle.tsx
Remove fixed positioning:
```typescript
"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};
```

## TopBar Features

- ✅ Sticky positioning at top of page
- ✅ High z-index (z-50) to stay above content
- ✅ Contains LanguageSelector and ThemeToggle
- ✅ Controls positioned right with spacer
- ✅ Backdrop blur effect
- ✅ Border for visual separation
- ✅ Responsive padding

## Component Structure

```
┌─────────────────────────────────────┐
│ [spacer]     [Language] [Theme]    │
└─────────────────────────────────────┘
```

## Testing

1. Run `npm run dev`
2. Verify TopBar appears at top
3. Scroll page - TopBar should stay visible
4. Click language and theme buttons
5. Test responsive on mobile
6. Verify sticky positioning works

## Files NOT Present Yet
```
- ❌ Morse reverse converter (added in commit-6)
- ❌ Direction toggle component (added in commit-7)
- ❌ Bidirectional UI integration (added in commit-8)
- ❌ Full i18n integration (added in commit-9)
```

## Styling Changes

ThemeToggle changes:
- Remove: `fixed bottom-4 right-4`
- Keep: Sun/Moon icon transitions
- Keep: Color transitions on theme change
- Add: Inline positioning in TopBar

## Total Files
- New files created: 1
- Modified files: 2
- Configuration updates: 0

## Next Steps

The next commit will add morse-to-text reverse translation functionality enabling bidirectional conversion.
