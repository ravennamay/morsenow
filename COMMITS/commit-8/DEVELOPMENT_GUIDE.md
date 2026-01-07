# Commit 8: Bidirectional UI Integration

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
│   │   ├── translator-container.tsx  # Updated: Add toggle and dynamic labels
│   │   ├── translator-panel.tsx      # Updated: Mode-aware button titles
│   │   └── direction-toggle.tsx
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
│   └── use-translator.tsx  # Updated: Add mode state and logic
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
├── types/
│   └── index.ts            # Updated: Add mode props
└── config files
```

## Updated Components

### useTranslator Hook (src/hooks/use-translator.tsx)
- Added `mode` state: "textToMorse" | "morseToText"
- Added `toggleMode()` function
- Updated conversion logic to handle both directions
- Mode-aware audio handling
- Clears input on mode toggle

### TranslatorContainer (src/components/translator/translator-container.tsx)
- Displays DirectionToggle between panels
- Dynamic labels based on mode:
  - Left panel: "Text Input" or "Morse Code"
  - Right panel: "Morse Code" or "Text Input"
- Dynamic placeholders based on mode
- Desktop layout: panels on sides, toggle in middle
- Mobile layout: stacked vertically with toggle between
- Passes mode and panelType to panels

### TranslatorPanel (src/components/translator/translator-panel.tsx)
- Accepts `mode` and `panelType` props
- Button titles change based on mode and panel type:
  - Input panel, textToMorse: "Speak text"
  - Input panel, morseToText: "Play morse"
  - Output panel, textToMorse: "Play morse"
  - Output panel, morseToText: "Speak text"

### Types (src/types/index.ts)
- Updated TranslatorCardProps with mode and panelType

## Environment at this Stage

- ✅ Text to morse conversion
- ✅ Morse to text conversion with validation
- ✅ Morse validation
- ✅ Theme and language selectors
- ✅ TopBar header
- ✅ Direction toggle component
- ✅ Bidirectional UI integration
- ✅ Mode-aware labels and buttons
- ✅ Responsive layout (desktop and mobile)
- ❌ Hardcoded strings not yet replaced with translations

## Hook State Structure

```typescript
interface TranslatorState {
  inputText: string;
  outputText: string;
  mode: "textToMorse" | "morseToText";
}

interface TranslatorActions {
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleCopy: (type: "input" | "output") => Promise<void>;
  handleSpeak: (type: "input" | "output") => void;
  toggleMode: () => void;
}
```

## Conversion Logic

### Text to Morse Mode
```
User Input: "Hello"
Conversion: textToMorse("Hello")
Output: ".... . .-.. .-.. ---"
```

### Morse to Text Mode
```
User Input: ".... . .-.. .-.. ---"
Validation: isValidMorse(input)
Conversion: morseToText(input)
Output: "HELLO"
```

## Layout - Desktop (md and above)

```
┌─────────────────────────────────────────────┐
│  TopBar                                      │
├─────────────────────────────────────────────┤
│                                              │
│ Text Input      [Toggle]    Morse Output    │
│ ┌────────────┐  [←→]  ┌────────────┐        │
│ │ [textarea] │        │ [textarea] │        │
│ │ [buttons]  │        │ [buttons]  │        │
│ └────────────┘        └────────────┘        │
│                                              │
└─────────────────────────────────────────────┘
```

## Layout - Mobile (below md)

```
┌──────────────────────────────┐
│  TopBar                      │
├──────────────────────────────┤
│ Text Input                   │
│ ┌──────────────────────────┐ │
│ │ [textarea]               │ │
│ │ [buttons]                │ │
│ └──────────────────────────┘ │
├──────────────────────────────┤
│        [Toggle]              │
│        [←→]                  │
├──────────────────────────────┤
│ Morse Output                 │
│ ┌──────────────────────────┐ │
│ │ [textarea]               │ │
│ │ [buttons]                │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

## Mode-Aware Button Titles

| Mode | Panel | Input Button | Output Button |
|------|-------|--------------|---------------|
| Text→Morse | Input | "Speak text" | - |
| Text→Morse | Output | - | "Play morse" |
| Morse→Text | Input | "Play morse" | - |
| Morse→Text | Output | - | "Speak text" |

## Testing Instructions

1. Run `npm run dev`
2. Verify toggle appears between panels
3. Click toggle to switch modes
4. Verify panel labels change
5. Verify placeholders change
6. Enter text/morse and verify conversion
7. Verify button titles change with mode
8. Test audio buttons play correct mode
9. Test responsive layout on mobile
10. Verify copy functionality works

## Panel Type Usage

```typescript
// TranslatorPanel component determines behavior from panelType
panelType === "input" → user can edit
panelType === "output" → disabled, read-only

// Combined with mode for proper button labels
if (panelType === "input" && mode === "textToMorse") {
  buttonLabel = "Speak text";
}
```

## What to Add Next

The next commit (commit-9) will add:
- Replace all hardcoded strings with translations
- Wire LanguageProvider into root layout
- Complete i18n integration across all components
