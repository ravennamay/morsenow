# Commit 6: Morse-to-Text Reverse Translation Functionality

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
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── translator/
│       ├── translator-container.tsx
│       └── translator-panel.tsx
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
│   │   ├── reverse-converter.ts  # NEW: Morse → Text
│   │   └── audio.ts
│   ├── speech.ts
│   └── utils.ts
├── styles/
│   ├── globals.css
│   └── theme-variables.css
└── types/
    └── index.ts
```

## New Module

### Reverse Converter (src/lib/morse/reverse-converter.ts)
- MORSE_TO_CHAR mapping (reverse of MORSE_CODE)
- morseToText() function:
  - Takes morse string as input
  - Splits by "/" for word separation
  - Splits by spaces for character separation
  - Maps each morse code to character
  - Returns "?" for unknown codes
- isValidMorse() function:
  - Validates morse code format
  - Allows: dots (.), dashes (-), slashes (/), spaces
  - Returns false for invalid input
  - Returns false for empty input

## Environment at this Stage

- ✅ Text to morse conversion
- ✅ Morse to text conversion
- ✅ Morse validation
- ✅ Theme and language selectors
- ✅ TopBar header
- ❌ UI for morse input not yet created
- ❌ Direction toggle not yet created
- ❌ Bidirectional UI not yet implemented

## Morse Code Format

### Character Separation
- Dots and dashes for a single character
- Example: "..." = T, "..-." = F
- Characters separated by spaces
- Example: ".... . .-.. .-.. ---" = HELLO

### Word Separation
- Slash (/) separates words
- Example: ".... . / -.-- .." = "HE YI"

### Valid Morse Characters
- Dot: .
- Dash: -
- Space: (between characters)
- Slash: / (between words)

## Conversion Algorithm

```typescript
morseToText(morseInput: string): string {
  1. Split input by "/" → array of words
  2. For each word:
     a. Split by spaces → array of characters
     b. Map each morse code to character
     c. Replace unknown with "?"
  3. Join characters → word
  4. Join words with space → result
}
```

## Validation Algorithm

```typescript
isValidMorse(input: string): boolean {
  1. Check if input is empty → false
  2. Test against regex: /^[\s.\-/]+$/
  3. Return true if matches, false otherwise
}
```

## Examples

### Valid Conversions
```
".... . .-.. .-.. ---" → "HELLO"
".... . / -.-- .." → "HE YI"
".-.. --- ...- ." → "LOVE"
```

### Invalid Input
```
"hello" → isValidMorse returns false
"" → isValidMorse returns false
"...abc..." → isValidMorse returns false
```

### Unknown Codes
```
"...... ...... ...... ....." → "???? ?"
```

## Testing Instructions

1. Create test file or use console
2. Import functions:
   ```typescript
   import { morseToText, isValidMorse } from "@/lib/morse/reverse-converter";
   ```

3. Test conversion:
   ```typescript
   console.log(morseToText(".... . .-.. .-.. ---"));
   // Output: "HELLO"
   
   console.log(morseToText(".... . / -.-- .."));
   // Output: "HE YI"
   ```

4. Test validation:
   ```typescript
   console.log(isValidMorse(".... . .-.. .-.. ---"));  // true
   console.log(isValidMorse("hello"));  // false
   console.log(isValidMorse(""));  // false
   ```

## Character Mappings

All standard morse code characters are supported:
- A-Z (26 letters)
- 0-9 (10 digits)
- Common punctuation (., ,, ?, ', !, /, (, ), &, :, ;, =, +, -, _, ", $, @)

## What to Add Next

The next commit (commit-7) will add:
- DirectionToggle component for UI
- Mode switching between Text→Morse and Morse→Text
- Visual indicator of current translation direction
