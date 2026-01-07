# Commit 3: i18n Infrastructure Setup

## Files Structure at this Commit

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── theme-provider.tsx  # Theme provider (no LanguageProvider yet)
│   ├── theme-toggle.tsx    # Theme toggle
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── layout/
│   │   └── header.tsx
│   └── translator/
│       ├── translator-container.tsx
│       └── translator-panel.tsx
├── config/
│   ├── i18n.ts             # NEW: Translation strings
│   ├── site.ts
│   └── constants.ts
├── context/
│   └── language-context.tsx # NEW: Language context provider
├── hooks/
│   └── use-toast.tsx
├── lib/
│   ├── morse/
│   ├── speech.ts
│   └── utils.ts
├── styles/
│   ├── globals.css
│   └── theme-variables.css
└── types/
    └── index.ts
```

## New Components

### i18n Configuration (src/config/i18n.ts)
- Defines Language type: "pt-BR" | "en-US"
- Contains translations object with:
  - Portuguese (pt-BR) translations
  - English (en-US) translations
- 25+ translation keys covering:
  - App title and description
  - UI labels and placeholders
  - Button titles
  - Toast messages
  - Mode labels

### Language Context (src/context/language-context.tsx)
- LanguageContextType interface with:
  - language: Current language code
  - setLanguage: Function to change language
  - t: Function to translate keys
- LanguageProvider component that:
  - Loads language from localStorage on mount
  - Provides context to child components
  - Handles hydration with mounted state
  - Provides default context value for SSR
- useLanguage hook to access context anywhere

## Environment at this Stage

- ✅ Next.js 15.1.0 with TypeScript
- ✅ Tailwind CSS configured
- ✅ Theme toggle functionality
- ✅ Translation configuration created
- ✅ Language context with localStorage
- ✅ useLanguage hook for accessing translations
- ❌ Language selector UI not yet implemented
- ❌ LanguageProvider not yet in root layout
- ❌ Hardcoded strings not yet replaced

## Translation Keys Available

```typescript
title, description, tagline,
textInput, morseCode,
textToMorse, morseToText,
typeOrPaste, morseOutput, morseInput, textOutput,
chars, copied, speak, copy, playMorse, speakText,
switchDirection
```

## Default Language

Portuguese (pt-BR) is set as default language.

## localStorage Structure

When a user changes language, it's saved as:
```json
{
  "language": "en-US"
}
```

## Hydration Safety

The context uses a `mounted` state to prevent hydration mismatches:
- On server: returns default context
- After mount: loads from localStorage and updates
- Prevents SSR/client mismatch errors

## Testing Instructions

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Verify no console errors about missing context
4. Manual testing:
   ```typescript
   import { useLanguage } from "@/context/language-context";
   const { t, language } = useLanguage();
   console.log(t("title")); // "SignalCode"
   ```

## Hook Usage Example

```typescript
"use client";
import { useLanguage } from "@/context/language-context";

export function MyComponent() {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>Current language: {language}</p>
      <button onClick={() => setLanguage("en-US")}>
        English
      </button>
    </div>
  );
}
```

## What to Add Next

The next commit (commit-4) will add:
- LanguageSelector component with flag buttons
- Language switching UI in top-right
- Integration with LanguageContext for easy switching
