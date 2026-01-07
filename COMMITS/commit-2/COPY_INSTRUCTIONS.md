# Files to Copy for Commit 2: Theme System Implementation

## Configuration Files
```
├── next.config.ts          ✅ (from previous commit)
├── tsconfig.json           ✅ (from previous commit)
├── package.json            ✅ (updated with next-themes)
├── tailwind.config.ts      ✅ (from root)
├── postcss.config.mjs      ✅ (from root)
├── prettier.config.mjs     ✅ (from root)
├── components.json         ✅ (from root)
└── .gitignore             ✅ (from root)
```

## New Dependencies to Add
```json
{
  "next-themes": "^0.4.3",
  "lucide-react": "^0.468.0"
}
```

## Source Files - App Directory
```
src/app/
├── layout.tsx             ✅ Copy from main - add Providers wrapper
├── page.tsx               ✅ (no changes from commit-1)
├── robots.ts              ✅ (from commit-1)
└── sitemap.ts             ✅ (from commit-1)
```

## Source Files - Components
```
src/components/
├── theme-provider.tsx         ✅ NEW: Create with next-themes integration
├── theme-toggle.tsx           ✅ NEW: Create with sun/moon icon button
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
├── globals.css            ✅ Copy from main - includes theme transitions
└── theme-variables.css    ✅ NEW: Create with light + dark CSS variables
```

## Library - Morse Code
```
src/lib/morse/
├── morse-code.ts          ✅ (from commit-1)
├── converter.ts           ✅ (from commit-1)
└── audio.ts              ✅ (from commit-1)
```

## Library - Utilities
```
src/lib/
├── speech.ts              ✅ (from commit-1)
└── utils.ts              ✅ (from commit-1)
```

## Config & Types
```
src/config/
├── site.ts                ✅ (from commit-1)
└── constants.ts           ✅ (from commit-1)

src/hooks/
└── use-toast.tsx          ✅ (from commit-1)

src/types/
└── index.ts              ✅ (from commit-1)
```

## Files to CREATE (New in This Commit)

### 1. src/components/theme-provider.tsx
```typescript
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeToggle } from "./theme-toggle";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </NextThemesProvider>
  );
};

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        {children}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};
```

### 2. src/components/theme-toggle.tsx
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
      className="fixed bottom-4 right-4"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};
```

### 3. src/styles/theme-variables.css
Create with light and dark mode CSS variables (see DEVELOPMENT_GUIDE for complete structure)

## Files to MODIFY (From Previous Commit)

### 1. src/app/layout.tsx
Add Providers wrapper around children:
```typescript
import { Providers } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### 2. package.json
Add dependencies:
```json
{
  "dependencies": {
    "next-themes": "^0.4.3",
    "lucide-react": "^0.468.0"
  }
}
```

### 3. src/styles/globals.css
Update to include theme transition styles:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "./theme-variables.css";

@layer base {
  * {
    @apply border-border transition-colors duration-300;
  }
}
```

## Files NOT Present Yet
```
- ❌ src/context/language-context.tsx (added in commit-3)
- ❌ src/components/language-selector.tsx (added in commit-4)
- ❌ src/components/layout/top-bar.tsx (added in commit-5)
- ❌ src/config/i18n.ts (added in commit-3)
```

## Installation Command

After copying files, install new dependencies:
```bash
npm install
```

## Testing

1. Run `npm run dev`
2. Verify app loads without errors
3. Click theme toggle button (bottom-right)
4. Verify theme switches between light and dark
5. Refresh page - theme should persist
6. Check DevTools - `<html class="dark">` should toggle

## Total Files
- New files created: 2
- Modified files: 2
- Configuration updates: 1
