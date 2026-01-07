# Morse Code Rules & Limitations

## 📝 Overview

SignalCode follows the **International Morse Code** standard. This document explains what characters are supported, how morse code works, and important limitations regarding accents and special characters.

---

## ✅ Supported Characters

### Letters (A-Z)
All English alphabet letters are supported. Input is case-insensitive (converted to uppercase automatically).

| Letter | Code | Letter | Code | Letter | Code |
|--------|------|--------|------|--------|------|
| A | .- | J | .--- | S | ... |
| B | -... | K | -.- | T | - |
| C | -.-. | L | .-.. | U | ..- |
| D | -.. | M | -- | V | ...- |
| E | . | N | -. | W | .-- |
| F | ..-. | O | --- | X | -..- |
| G | --. | P | .--.| Y | -.-- |
| H | .... | Q | --.- | Z | --.. |
| I | .. | R | .-. | | |

### Numbers (0-9)
All digits 0 through 9 are supported.

| Number | Code | Number | Code |
|--------|------|--------|------|
| 0 | ----- | 5 | ..... |
| 1 | .---- | 6 | -.... |
| 2 | ..--- | 7 | --... |
| 3 | ...-- | 8 | --.. |
| 4 | ....- | 9 | ----. |

### Punctuation & Symbols
The following punctuation marks and symbols are supported:

| Character | Name | Code |
|-----------|------|------|
| `.` | Period | .-.-.- |
| `,` | Comma | --..-- |
| `?` | Question | ..--.. |
| `'` | Apostrophe | .----. |
| `!` | Exclamation | -.-.-- |
| `/` | Slash | -.-.-. |
| `(` | Left Parenthesis | -.--.- |
| `)` | Right Parenthesis | -.--.- |
| `&` | Ampersand | .-... |
| `:` | Colon | ---... |
| `;` | Semicolon | -.-.-. |
| `=` | Equals | -...- |
| `+` | Plus | .-.-. |
| `-` | Minus | -....- |
| `_` | Underscore | ..--.- |
| `"` | Double Quote | -..-. |
| `$` | Dollar Sign | ...-..- |
| `@` | At Sign | .--.-. |

### Space
In morse code, spaces between words are represented as `/` (forward slash).

**Example:** "HELLO WORLD" → ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."

---

## ❌ NOT Supported

### Accented Characters
**These characters are NOT supported and will be skipped:**
- Vowels with accents: `á, à, â, ã, é, è, ê, í, ì, î, ó, ò, ô, õ, ú, ù, û`
- C with cedilla: `ç, Ç`
- Other accented letters: `ñ, ü, ø`, etc.

**Example:**
```
Input:  "Café com açúcar"
Output: "C F  COM   CAR"  ← accented letters removed
Morse:  "-.-. ..-. / -.-. --- -- / -.-. .- .-. "
```

### Special Unicode Characters
- Emoji: 😀, ❤️, 🚀, etc.
- Currency symbols (except `$`): €, £, ¥, etc.
- Mathematical symbols: ×, ÷, ±, etc.
- Other special characters not in the supported list

**Example:**
```
Input:  "Hello 👋 2024"
Output: "HELLO  2024"  ← emoji removed
```

---

## 🔧 Morse Code Basics

### Dots and Dashes
Morse code uses two symbols:
- **Dot (.)** - Short pulse, represented as "dit"
- **Dash (-)** - Long pulse, represented as "dah"

### Timing & Spacing

In morse audio playback, SignalCode uses:
- **Dot duration:** ~120ms
- **Dash duration:** ~360ms
- **Character separation:** Space between characters
- **Word separation:** `/` symbol (longer pause)

### Capitalization
The morse code alphabet treats uppercase and lowercase the same. SignalCode automatically converts all input to uppercase before translation.

---

## ⚠️ Important Notes

### 1. **Accent Removal**
When translating text with accented characters, the accents are silently removed:
```
"François" → "FRANCOIS"
"São Paulo" → "SAO PAULO"
"Résumé" → "RESUME"
```

### 2. **Character Skipping**
Unsupported characters (emoji, special unicode) are completely skipped, not replaced:
```
"Hello! 😀 World" → "HELLO  WORLD"
```

### 3. **Spaces as Word Separators**
Spaces in text become `/` in morse code:
```
"HELLO WORLD" → [morse] / [morse]
```

### 4. **Morse to Text Conversion**
When converting morse back to text, the system expects:
- Single space ` ` between morse characters
- Forward slash `/` between words
- Valid morse patterns (dots and dashes only)

**Valid morse format:**
```
".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
```

### 5. **Bidirectional Limitations**
When converting from morse to text and back:
```
Text → Morse → Text = Original (if no special chars)
Text → Morse → Text ≠ Original (if accents removed)
```

---

## 🎯 Best Practices

1. **For accented text:** Remove accents before translation
2. **For special characters:** Use only supported punctuation
3. **For compatibility:** Stick to A-Z, 0-9, and common punctuation
4. **For reverse conversion:** Follow the morse format with spaces and slashes

---

## 🚀 Future Enhancements

Possible improvements for SignalCode:
- [ ] Add extended morse code with accent support (non-standard)
- [ ] Auto-normalize accents (remove diacritics)
- [ ] Warn users about unsupported characters
- [ ] Display skipped characters in conversion
- [ ] Support additional punctuation marks

---

## 📚 References

- [International Morse Code Standard](https://en.wikipedia.org/wiki/Morse_code)
- [ITU-R Recommendation](https://www.itu.int/rec/R-REC-M.1677-1-202202-I/en)
- [American Radio Relay League (ARRL)](https://www.arrl.org/)

---

**Last updated:** 2024
