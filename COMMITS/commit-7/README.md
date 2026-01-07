# Commit 7: Direction Toggle Component

## Overview
Create UI component for switching between Text→Morse and Morse→Text translation directions. Provides visual indicator of current mode and easy toggling.

## What's Implemented in This Commit

### ✅ Direction Toggle Component
- `DirectionToggle` component in `src/components/translator/direction-toggle.tsx`
- Displays current translation mode
- Toggle button with arrow icon
- Mode label below button
- Responsive design

### ✅ Visual Design
- Rounded button with outline variant
- ArrowRightLeft icon from lucide-react
- Mode label (e.g., "Text to Morse", "Morse to Text")
- Hover effects and transitions
- Proper spacing and alignment

### ✅ Functionality
- Props interface:
  - `mode: "textToMorse" | "morseToText"`
  - `onToggle: () => void`
- Displays localized mode label using t()
- Clicking toggles between modes
- Tooltip on button hover

### ✅ Integration Ready
- Component designed to be placed between input/output panels
- Works with translation modes
- Uses language context for labels
- Type-safe mode handling

## Key Files Created

**New Files:**
- `src/components/translator/direction-toggle.tsx` - Mode switcher component

## Component Props

```typescript
interface DirectionToggleProps {
  mode: "textToMorse" | "morseToText";
  onToggle: () => void;
}
```

## Component Structure

```tsx
<div className="flex flex-col items-center gap-3">
  <Button
    size="icon"
    variant="outline"
    onClick={onToggle}
    title={t("switchDirection")}
  >
    <ArrowRightLeft className="h-5 w-5" />
  </Button>
  <span className="text-xs font-medium text-muted-foreground">
    {modeLabel}
  </span>
</div>
```

## Features

- ✅ Visual mode indicator
- ✅ Easy mode switching
- ✅ Localized labels (uses i18n)
- ✅ Icon-based UI
- ✅ Accessible with titles
- ✅ Responsive layout
- ✅ Type-safe mode handling

## Styling

- Button: `rounded-full border-2` with hover effects
- Label: `text-xs font-medium text-muted-foreground`
- Container: Flex column with `gap-3`
- Transitions: Smooth color transitions on hover

## Usage Example

```typescript
import { DirectionToggle } from "@/components/translator/direction-toggle";
import { useState } from "react";

export function TranslatorContainer() {
  const [mode, setMode] = useState<"textToMorse" | "morseToText">("textToMorse");

  const toggleMode = () => {
    setMode(prev => prev === "textToMorse" ? "morseToText" : "textToMorse");
  };

  return (
    <DirectionToggle mode={mode} onToggle={toggleMode} />
  );
}
```

## What's NOT Implemented Yet

- ❌ Integration with TranslatorContainer
- ❌ Mode state management in useTranslator
- ❌ Dynamic input/output panel labels
- ❌ Bidirectional conversion logic in hook
- ❌ All UI strings using t()

## Translation Keys Used

- `textToMorse: "Text to Morse"`
- `morseToText: "Morse to Text"`
- `switchDirection: "Switch direction"`

## Testing

1. Create a test component with DirectionToggle
2. Verify button displays with arrow icon
3. Verify mode label displays correctly
4. Verify translations appear in both languages
5. Test click handler is called on button click

## Next Commit

The next commit will integrate DirectionToggle with TranslatorContainer and update the translator logic for bidirectional translation.
