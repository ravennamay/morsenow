# Commit 6: Morse-to-Text Reverse Translation Functionality

## Overview
Add reverse morse code to text translation converter with validation. Enables bidirectional translation - users can now input morse code and get text output.

## What's Implemented in This Commit

### ✅ Reverse Morse Conversion
- `MORSE_TO_CHAR` mapping created from MORSE_CODE
- Converts morse code back to characters
- Handles word separation (/) and character spacing
- Supports all standard morse characters

### ✅ morseToText Function
- Splits morse input by "/" for word boundaries
- Splits each word by spaces for characters
- Maps each morse code to character using reverse mapping
- Returns "?" for unknown morse codes
- Joins characters and words properly

### ✅ Morse Validation
- `isValidMorse()` function validates morse input
- Checks for valid morse characters only (. - / space)
- Returns false for empty input
- Uses regex pattern: `/^[\s.\-/]+$/`
- Prevents processing invalid morse codes

### ✅ Implementation Details
- Morse code format: dots (.), dashes (-), spaces for character separation, "/" for word separation
- Example: ".... . .-.. .-.. --- / .-- --- .-. .-.. -.." = "HELLO WORLD"
- Handles case insensitivity
- Proper error handling with "?" replacements

## Key Files Created/Modified

**Modified Files:**
- `src/lib/morse/reverse-converter.ts` - Add morseToText and isValidMorse functions
- `src/lib/morse/morse-code.ts` - Ensure complete character mapping

## Morse Code Format

```
Character Separation: space (e.g., "...  --." = "T N")
Word Separation: "/" (e.g., ".... . / -.-- .." = "HE YI")
Morse Symbols:
  . = dot (short signal)
  - = dash (long signal)
```

## Features

- ✅ Morse to text conversion
- ✅ Character mapping
- ✅ Word boundary recognition
- ✅ Input validation
- ✅ Graceful handling of unknown codes
- ✅ Proper spacing in output

## Validation Examples

```typescript
isValidMorse(".... . .-.. .-.. ---") // true
isValidMorse("hello") // false  
isValidMorse("") // false
isValidMorse(".... . / -.-- ..") // true
```

## Conversion Examples

```typescript
morseToText(".... . .-.. .-.. ---") // "HELLO"
morseToText(".... . / -.-- ..") // "HE YI"
morseToText(".....")  // "?????"  (unknown codes become ?)
```

## What's NOT Implemented Yet

- ❌ UI for morse input
- ❌ Direction toggle component
- ❌ Bidirectional translator UI
- ❌ All UI strings using t()
- ❌ Mode switching in useTranslator
- ❌ Dynamic labels based on mode

## Testing

1. Import the functions:
   ```typescript
   import { morseToText, isValidMorse } from "@/lib/morse/reverse-converter";
   ```

2. Test conversion:
   ```typescript
   console.log(morseToText(".... . .-.. .-.. ---"));
   // Output: "HELLO"
   ```

3. Test validation:
   ```typescript
   console.log(isValidMorse(".... . .-.. .-.. ---")); // true
   console.log(isValidMorse("hello")); // false
   ```

## Next Commit

The next commit will create the DirectionToggle component for switching between Text→Morse and Morse→Text modes.
