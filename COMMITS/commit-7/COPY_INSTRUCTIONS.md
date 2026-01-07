# Files to Copy for Commit 7: Direction Toggle Component

## Configuration Files (No Changes)
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

## Components (No Changes)
```
src/components/
├── theme-provider.tsx         ✅ (from commit-2)
├── theme-toggle.tsx           ✅ (from commit-5)
├── language-selector.tsx      ✅ (from commit-4)
├── layout/
│   ├── top-bar.tsx            ✅ (from commit-5)
│   └── header.tsx             ✅ (from commit-1)
├── ui/
│   ├── button.tsx             ✅ (from commit-1)
│   └── card.tsx               ✅ (from commit-1)
└── translator/
    ├── translator-container.tsx  ✅ (from commit-1)
    ├── translator-panel.tsx      ✅ (from commit-1)
    └── direction-toggle.tsx      ✅ NEW: Create mode switcher
```

## App, Styles, Config (No Changes)
```
src/app/
├── layout.tsx             ✅ (from commit-5)
├── page.tsx               ✅ (from commit-1)
├── robots.ts              ✅ (from commit-1)
└── sitemap.ts             ✅ (from commit-1)

src/styles/
├── globals.css            ✅ (from commit-2)
└── theme-variables.css    ✅ (from commit-2)

src/config/
├── i18n.ts                ✅ (from commit-3)
├── site.ts                ✅ (from commit-1)
└── constants.ts           ✅ (from commit-1)

src/context/
└── language-context.tsx   ✅ (from commit-3)
```

## Library & Types (No Changes)
```
src/lib/morse/
├── morse-code.ts          ✅ (from commit-1)
├── converter.ts           ✅ (from commit-1)
├── reverse-converter.ts   ✅ (from commit-6)
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

### 1. src/components/translator/direction-toggle.tsx
```typescript
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightLeft } from "lucide-react";
import { useLanguage } from "@/context/language-context";

interface DirectionToggleProps {
  mode: "textToMorse" | "morseToText";
  onToggle: () => void;
}

export const DirectionToggle = ({ mode, onToggle }: DirectionToggleProps) => {
  const { t } = useLanguage();

  const modeLabel = mode === "textToMorse" ? t("textToMorse") : t("morseToText");

  return (
    <div className="flex flex-col items-center gap-3">
      <Button
        size="icon"
        variant="outline"
        onClick={onToggle}
        title={t("switchDirection")}
        className="rounded-full"
      >
        <ArrowRightLeft className="h-5 w-5" />
      </Button>
      <span className="text-xs font-medium text-muted-foreground">{modeLabel}</span>
    </div>
  );
};
```

## Files to MODIFY (None)

No existing files need modification in this commit. The component is standalone and ready for integration in the next commit.

## Component Features

- ✅ Displays current translation mode
- ✅ Arrow icon (ArrowRightLeft from lucide-react)
- ✅ Mode label below button (localized via t())
- ✅ Click handler for toggling mode
- ✅ Type-safe mode handling
- ✅ Accessible with title attribute

## Component Props

```typescript
interface DirectionToggleProps {
  mode: "textToMorse" | "morseToText";
  onToggle: () => void;
}
```

## Styling

- Container: Flex column with center alignment
- Button: Icon button with outline variant, rounded-full
- Label: Small text, muted color
- Icon: ArrowRightLeft, 5x5 size

## Translation Keys Used

```typescript
t("textToMorse")     // "Text to Morse"
t("morseToText")     // "Morse to Text"
t("switchDirection") // "Switch direction"
```

## Component Usage Example

```typescript
import { DirectionToggle } from "@/components/translator/direction-toggle";
import { useState } from "react";

export function MyTranslator() {
  const [mode, setMode] = useState<"textToMorse" | "morseToText">("textToMorse");

  return (
    <DirectionToggle 
      mode={mode} 
      onToggle={() => setMode(mode === "textToMorse" ? "morseToText" : "textToMorse")} 
    />
  );
}
```

## Visual Layout

```
┌─────────────────┐
│   [↔ icon]      │  Button with ArrowRightLeft
├─────────────────┤
│  Text to Morse  │  Mode label (localized)
└─────────────────┘
```

## Testing Instructions

1. Create a test component with DirectionToggle
2. Add state for mode
3. Verify button displays arrow icon
4. Verify mode label appears below button
5. Verify label changes with mode prop
6. Verify translations appear correctly
7. Verify click calls onToggle callback
8. Test on mobile view

## Dependencies

- lucide-react: ArrowRightLeft icon (already installed)
- react-context: useLanguage hook (already created)
- Button component: UI primitive (already created)

## Files NOT Present Yet
```
- ❌ Mode state in useTranslator hook (added in commit-8)
- ❌ Integration in TranslatorContainer (added in commit-8)
- ❌ Dynamic labels in panels (added in commit-8)
```

## Total Files
- New files created: 1
- Modified files: 0
- Configuration updates: 0

## Next Steps

The next commit will integrate DirectionToggle into TranslatorContainer and add mode state management to the useTranslator hook.
