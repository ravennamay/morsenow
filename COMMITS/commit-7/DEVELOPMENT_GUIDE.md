# Commit 7: Direction Toggle Component

## Files Structure at this Commit

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── language-selector.tsx
│   ├── layout/
│   │   ├── top-bar.tsx
│   │   └── header.tsx
│   ├── translator/
│   │   ├── translator-container.tsx
│   │   ├── translator-panel.tsx
│   │   └── direction-toggle.tsx  # NEW: Mode switcher
│   └── ui/
│       ├── button.tsx
│       └── card.tsx
├── config/
│   ├── i18n.ts
│   ├── site.ts
│   └── constants.ts
├── context/
│   └── language-context.tsx
├── hooks/
│   └── use-toast.tsx
├── lib/
│   ├── morse/
│   │   ├── morse-code.ts
│   │   ├── converter.ts
│   │   ├── reverse-converter.ts
│   │   └── audio.ts
│   ├── speech.ts
│   └── utils.ts
├── styles/
│   ├── globals.css
│   └── theme-variables.css
└── types/
    └── index.ts
```

## New Component

### Direction Toggle (src/components/translator/direction-toggle.tsx)
- Visual mode switcher component
- Displays current translation direction
- Arrow icon (ArrowRightLeft from lucide-react)
- Mode label below button:
  - "Text to Morse" for textToMorse mode
  - "Morse to Text" for morseToText mode
- Click to toggle between modes
- Uses useLanguage() for localized labels

## Component Props

```typescript
interface DirectionToggleProps {
  mode: "textToMorse" | "morseToText";
  onToggle: () => void;
}
```

## Component Structure

```
┌─────────────────┐
│  [←→ icon]      │  Button with ArrowRightLeft icon
├─────────────────┤
│ Text to Morse   │  Mode label (localized via t())
└─────────────────┘
```

## Environment at this Stage

- ✅ Text to morse conversion
- ✅ Morse to text conversion
- ✅ Morse validation
- ✅ Theme and language selectors
- ✅ TopBar header
- ✅ Direction toggle component
- ❌ Mode state not yet in useTranslator hook
- ❌ Dynamic labels in panels not yet implemented
- ❌ Bidirectional UI integration not yet done

## Features

- ✅ Visual mode indicator
- ✅ Easy mode toggling
- ✅ Localized labels (uses i18n)
- ✅ Icon-based UI with arrow
- ✅ Type-safe mode handling
- ✅ Responsive design
- ✅ Accessibility titles

## Styling Classes

- Container: `flex flex-col items-center gap-3`
- Button: `rounded-full border-2 hover:bg-accent/10`
- Icon: `h-5 w-5` (ArrowRightLeft)
- Label: `text-xs font-medium text-muted-foreground`
- Transitions: `transition-colors` on hover

## Translation Keys Used

```typescript
t("textToMorse")     // "Text to Morse"
t("morseToText")     // "Morse to Text"
t("switchDirection") // "Switch direction"
```

## Mode Determination

The component uses the mode prop to determine which label to display:

```typescript
const modeLabel = mode === "textToMorse" 
  ? t("textToMorse") 
  : t("morseToText");
```

## Usage Example

```typescript
import { DirectionToggle } from "@/components/translator/direction-toggle";
import { useState } from "react";

export function MyTranslator() {
  const [mode, setMode] = useState<"textToMorse" | "morseToText">("textToMorse");

  const toggleMode = () => {
    setMode(prev => prev === "textToMorse" ? "morseToText" : "textToMorse");
  };

  return (
    <DirectionToggle mode={mode} onToggle={toggleMode} />
  );
}
```

## Testing Instructions

1. Create test component
2. Add DirectionToggle with mode state
3. Verify button displays arrow icon
4. Verify mode label appears below button
5. Verify label changes on mode prop change
6. Verify translations appear correctly
7. Verify click calls onToggle callback
8. Test responsive layout on mobile

## Component Placement

In the next commit, DirectionToggle will be integrated into TranslatorContainer:

```typescript
<div className="grid grid-cols-[1fr_auto_1fr] gap-6">
  <TranslatorPanel />
  <DirectionToggle mode={mode} onToggle={toggleMode} />
  <TranslatorPanel />
</div>
```

## What to Add Next

The next commit (commit-8) will add:
- Mode state to useTranslator hook
- toggleMode() function
- Integration of DirectionToggle in TranslatorContainer
- Dynamic panel labels based on mode
- Mode-aware button titles in panels
