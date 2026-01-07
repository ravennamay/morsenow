# Commit 8: Bidirectional UI Integration

## Overview
Update translator container and panels to support both translation directions. Integrates direction toggle, updates UI labels dynamically, and implements mode-aware behavior.

## What's Implemented in This Commit

### ✅ Enhanced useTranslator Hook
- Added `mode: "textToMorse" | "morseToText"` state
- Added `toggleMode()` function to switch directions
- Updated conversion logic to handle both directions:
  - textToMorse: uses textToMorse()
  - morseToText: uses morseToText() with validation
- Mode-aware audio handling:
  - Text mode: speak text, play morse
  - Morse mode: play morse, speak text
- Clears input when toggling mode

### ✅ Updated TranslatorContainer
- Imports and uses DirectionToggle
- Determines labels based on current mode:
  - Left panel: input label (Text or Morse)
  - Right panel: output label (Morse or Text)
- Dynamic placeholders based on mode
- Desktop layout: panels on sides, toggle in middle
- Mobile layout: stacked vertically with toggle between
- Responsive design with hidden/md breakpoints
- Passes mode and panelType to TranslatorPanel

### ✅ Updated TranslatorPanel
- Accepts `mode` and `panelType` props
- Button titles change based on mode:
  - Input panel in textToMorse: "Speak text"
  - Input panel in morseToText: "Play morse"
  - Output panel in textToMorse: "Play morse"
  - Output panel in morseToText: "Speak text"
- Proper audio feedback for both directions
- Copy functionality works for both modes

### ✅ Type Updates
- Updated `TranslatorCardProps` in types/index.ts
- Added `mode: "textToMorse" | "morseToText"`
- Added `panelType: "input" | "output"`

## Key Files Modified

**Modified Files:**
- `src/hooks/use-translator.tsx` - Add mode state and bidirectional logic
- `src/components/translator/translator-container.tsx` - Add toggle and dynamic labels
- `src/components/translator/translator-panel.tsx` - Mode-aware button titles
- `src/types/index.ts` - Update TranslatorCardProps

## Hook State Structure

```typescript
interface useTranslatorReturn {
  actions: {
    handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    handleCopy: (type: "input" | "output") => Promise<void>;
    handleSpeak: (type: "input" | "output") => void;
    toggleMode: () => void;
  };
  states: {
    inputText: string;
    outputText: string;
    mode: "textToMorse" | "morseToText";
  };
}
```

## UI Layout

### Desktop (md and above)
```
┌──────────────────────────────────────────────┐
│  TopBar (Language, Theme)                    │
├──────────────────────────────────────────────┤
│                                              │
│ Text/Morse     [Toggle]    Morse/Text       │
│ Input Panel              Output Panel       │
│                                              │
│ [textarea]              [textarea]          │
│ [buttons]               [buttons]           │
│                                              │
│ 50 chars                20 chars            │
│                                              │
└──────────────────────────────────────────────┘
```

### Mobile (below md)
```
┌──────────────────────────────┐
│  TopBar (Language, Theme)    │
├──────────────────────────────┤
│ Text/Morse Input Panel       │
│ [textarea]                   │
│ [buttons]                    │
│ 50 chars                     │
├──────────────────────────────┤
│        [Toggle]              │
├──────────────────────────────┤
│ Morse/Text Output Panel      │
│ [textarea]                   │
│ [buttons]                    │
│ 20 chars                     │
└──────────────────────────────┘
```

## Features Implemented

- ✅ Bidirectional translation UI
- ✅ Dynamic labels based on mode
- ✅ Mode-aware button behavior
- ✅ Responsive layout (desktop & mobile)
- ✅ Direction toggle in center
- ✅ Proper audio feedback
- ✅ Input validation for morse
- ✅ Smooth mode transitions

## Conversion Behaviors

**Text to Morse Mode:**
- Input: Plain text (editable)
- Output: Morse code (read-only)
- Input button: "Speak text"
- Output button: "Play morse"

**Morse to Text Mode:**
- Input: Morse code (editable)
- Output: Plain text (read-only)
- Input button: "Play morse"
- Output button: "Speak text"
- Validates morse input

## What's NOT Implemented Yet

- ❌ All UI strings using t() (hardcoded strings remain)
- ❌ Translation strings for some labels
- ❌ Complete string translation across app

## Testing

1. Run `npm run dev`
2. Verify toggle appears between input and output
3. Click toggle to switch modes
4. Verify labels change (Text Input ↔ Morse Code)
5. Verify input clears on mode switch
6. Enter text → converts to morse
7. Switch to morse mode
8. Enter morse → converts to text
9. Verify validation: invalid morse shows no output

## Next Commit

The next commit will complete internationalization by replacing all hardcoded strings with translation function calls.
