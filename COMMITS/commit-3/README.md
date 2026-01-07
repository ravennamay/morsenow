# Commit 3: i18n Infrastructure Setup

## Overview
Create internationalization system with Portuguese (pt-BR) and English (en-US) support. Implements translation configuration, language context, and provider component.

## What's Implemented in This Commit

### ✅ Translation Configuration
- `translations` object with pt-BR and en-US strings
- Language type definition (`Language = "pt-BR" | "en-US"`)
- Default language set to pt-BR
- 25+ translation keys covering:
  - App title and description
  - UI labels and placeholders
  - Button labels
  - Toast messages
  - Translation mode labels

### ✅ Language Context
- `LanguageContext` for storing language state
- `LanguageContextType` interface with:
  - `language: Language` - Current language
  - `setLanguage: (lang: Language) => void` - Language setter
  - `t: (key) => string` - Translation function

### ✅ Language Provider
- `LanguageProvider` component
- Loads language from localStorage on mount
- Provides context to all children
- Handles hydration with mounted state check
- Prevents hydration mismatch errors

### ✅ useLanguage Hook
- Custom hook to access language context
- Type-safe translation key access
- Easy access throughout the app
- Error handling for missing provider

## Dependencies

No new npm dependencies - uses React Context API.

## Key Files Created

**New Files:**
- `src/config/i18n.ts` - Translation strings and language definitions
- `src/context/language-context.tsx` - Language context and provider

## Translation Keys Available

```typescript
- title: "SignalCode"
- description: "Transform text to morse code instantly"
- tagline: "Type, translate, and play"
- textInput: "Text Input"
- morseCode: "Morse Code"
- textToMorse: "Text to Morse"
- morseToText: "Morse to Text"
- typeOrPaste: "Type or paste text here..."
- morseOutput: "Morse code output..."
- morseInput: "Type or paste morse code here..."
- textOutput: "Text output..."
- chars: "chars"
- copied: "Copied successfully!"
- speak: "Speak"
- copy: "Copy"
- playMorse: "Play morse"
- playText: "Play text"
- switchDirection: "Switch direction"
```

## Features

- ✅ Multi-language support (2 languages)
- ✅ Type-safe translations
- ✅ localStorage persistence
- ✅ SSR-safe hydration handling
- ✅ Easy to extend with new languages
- ✅ Fallback to key if translation missing

## What's NOT Implemented Yet

- ❌ Language selector UI component
- ❌ Integration with layout
- ❌ Morse code translator
- ❌ Theme integration
- ❌ All UI strings using t()
- ❌ Bidirectional translation

## Usage Example

```typescript
import { useLanguage } from "@/context/language-context";

export function MyComponent() {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div>
      <h1>{t("title")}</h1>
      <button onClick={() => setLanguage("en-US")}>
        {t("description")}
      </button>
    </div>
  );
}
```

## Next Commit

The next commit will create the LanguageSelector component with flag emojis for easy language switching.
