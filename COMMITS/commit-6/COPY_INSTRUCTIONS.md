# Files to Copy for Commit 6: Morse-to-Text Reverse Translation Functionality

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
    └── translator-panel.tsx      ✅ (from commit-1)
```

## App & Styles (No Changes)
```
src/app/
├── layout.tsx             ✅ (from commit-5)
├── page.tsx               ✅ (from commit-1)
├── robots.ts              ✅ (from commit-1)
└── sitemap.ts             ✅ (from commit-1)

src/styles/
├── globals.css            ✅ (from commit-2)
└── theme-variables.css    ✅ (from commit-2)
```

## Config & Context (No Changes)
```
src/config/
├── i18n.ts                ✅ (from commit-3)
├── site.ts                ✅ (from commit-1)
└── constants.ts           ✅ (from commit-1)

src/context/
└── language-context.tsx   ✅ (from commit-3)

src/hooks/
└── use-toast.tsx          ✅ (from commit-1)

src/types/
└── index.ts              ✅ (from commit-1)
```

## Existing Morse Library
```
src/lib/morse/
├── morse-code.ts          ✅ (from commit-1)
├── converter.ts           ✅ (from commit-1)
└── audio.ts              ✅ (from commit-1)

src/lib/
├── speech.ts              ✅ (from commit-1)
└── utils.ts              ✅ (from commit-1)
```

## Files to CREATE (New in This Commit)

### 1. src/lib/morse/reverse-converter.ts
```typescript
import { MORSE_CODE } from "./morse-code";

// Create reverse mapping: morse code → character
const MORSE_TO_CHAR: { [key: string]: string } = {};

Object.entries(MORSE_CODE).forEach(([char, morse]) => {
  MORSE_TO_CHAR[morse] = char;
});

export function morseToText(morseInput: string): string {
  if (!morseInput.trim()) return "";

  // Split by "/" to get words
  const words = morseInput.split("/");

  return words
    .map((word) => {
      // Split by spaces to get individual characters
      const chars = word.trim().split(/\s+/);
      return chars
        .map((morse) => {
          return MORSE_TO_CHAR[morse] || "?";
        })
        .join("");
    })
    .join(" ");
}

export function isValidMorse(input: string): boolean {
  if (!input || !input.trim()) return false;
  // Allow dots, dashes, slashes, and spaces only
  return /^[\s.\-/]+$/.test(input);
}
```

## Files to MODIFY (None)

This commit only adds new code for reverse conversion. No existing files need modification.

## Function Descriptions

### morseToText(morseInput: string): string
Converts morse code string to text.

**Input Format:**
- Morse codes separated by spaces: ".... ."
- Words separated by slashes: ".... . / -.-- .."
- Dots (.) and dashes (-)

**Output:**
- Plain text string
- Unknown morse codes become "?"
- Words separated by spaces

**Examples:**
```
".... . .-.. .-.. ---" → "HELLO"
".... . / -.-- .." → "HE YI"
```

### isValidMorse(input: string): boolean
Validates if input string is valid morse code format.

**Returns:**
- true: Valid morse code (dots, dashes, slashes, spaces)
- false: Invalid input or empty string

**Examples:**
```
".... . .-.. .-.. ---" → true
"hello" → false
"" → false
```

## Morse Code Format Reference

```
DOTS:   .
DASHES: -
CHARACTER SEPARATOR: space
WORD SEPARATOR: /

Example:
.... . .-.. .-.. --- / .-- --- .-. .-.. -..
H    E  L    L    O     W   O   R   L   D
```

## Testing Instructions

```typescript
import { morseToText, isValidMorse } from "@/lib/morse/reverse-converter";

// Test conversion
console.log(morseToText(".... . .-.. .-.. ---"));  // "HELLO"
console.log(morseToText(".... . / -.-- .."));      // "HE YI"

// Test validation
console.log(isValidMorse(".... . .-.. .-.. ---")); // true
console.log(isValidMorse("hello"));                // false
console.log(isValidMorse(""));                     // false
```

## Supported Characters

All standard morse code characters:
- A-Z (26 letters)
- 0-9 (10 digits)
- Common punctuation (., ,, ?, ', !, /, (, ), &, :, ;, =, +, -, _, ", $, @)

## Dependencies

No new npm dependencies. Uses existing morse-code.ts mapping.

## Files NOT Present Yet
```
- ❌ Direction toggle component (added in commit-7)
- ❌ Mode state in useTranslator hook (added in commit-8)
- ❌ Bidirectional UI integration (added in commit-8)
```

## Total Files
- New files created: 1
- Modified files: 0
- Configuration updates: 0

## Next Steps

The next commit will create the DirectionToggle component for UI control of translation direction.
