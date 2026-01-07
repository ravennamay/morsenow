# Files to Copy for Commit 3: i18n Infrastructure Setup

## Configuration Files
```
├── next.config.ts          ✅ (from previous commit)
├── tsconfig.json           ✅ (from previous commit)
├── package.json            ✅ (no new dependencies)
├── tailwind.config.ts      ✅ (from previous commit)
├── postcss.config.mjs      ✅ (from previous commit)
├── prettier.config.mjs     ✅ (from previous commit)
├── components.json         ✅ (from previous commit)
└── .gitignore             ✅ (from previous commit)
```

## Source Files - App Directory
```
src/app/
├── layout.tsx             ✅ (no changes from commit-2)
├── page.tsx               ✅ (no changes from commit-1)
├── robots.ts              ✅ (from commit-1)
└── sitemap.ts             ✅ (from commit-1)
```

## Source Files - Components
```
src/components/
├── theme-provider.tsx         ✅ (no changes - LanguageProvider added in next commit)
├── theme-toggle.tsx           ✅ (from commit-2)
├── ui/
│   ├── button.tsx             ✅ (from commit-1)
│   └── card.tsx               ✅ (from commit-1)
├── layout/
│   └── header.tsx             ✅ (from commit-1)
└── translator/
    ├── translator-container.tsx  ✅ (from commit-1)
    └── translator-panel.tsx      ✅ (from commit-1)
```

## Styles
```
src/styles/
├── globals.css            ✅ (from commit-2)
└── theme-variables.css    ✅ (from commit-2)
```

## Library - All From Previous Commit
```
src/lib/morse/
├── morse-code.ts          ✅ (from commit-1)
├── converter.ts           ✅ (from commit-1)
└── audio.ts              ✅ (from commit-1)

src/lib/
├── speech.ts              ✅ (from commit-1)
└── utils.ts              ✅ (from commit-1)
```

## Config & Types
```
src/config/
├── site.ts                ✅ (from commit-1)
└── constants.ts           ✅ (from commit-1)

src/hooks/
└── use-toast.tsx          ✅ (from commit-1)

src/types/
└── index.ts              ✅ (from commit-1)
```

## Files to CREATE (New in This Commit)

### 1. src/config/i18n.ts
Create translation configuration:
```typescript
export type Language = "pt-BR" | "en-US";

const translations = {
  "pt-BR": {
    title: "SignalCode",
    description: "Transforme texto em código morse instantaneamente",
    tagline: "Digite, traduza e reproduza",
    textInput: "Entrada de Texto",
    morseCode: "Código Morse",
    textToMorse: "Texto para Morse",
    morseToText: "Morse para Texto",
    typeOrPaste: "Digite ou cole o texto aqui...",
    morseOutput: "Saída em código morse...",
    morseInput: "Digite ou cole o código morse aqui...",
    textOutput: "Saída de texto...",
    chars: "caracteres",
    copied: "Copiado com sucesso!",
    speak: "Falar",
    copy: "Copiar",
    playMorse: "Reproduzir morse",
    speakText: "Falar texto",
    switchDirection: "Mudar direção",
  },
  "en-US": {
    title: "SignalCode",
    description: "Transform text to morse code instantly",
    tagline: "Type, translate, and play",
    textInput: "Text Input",
    morseCode: "Morse Code",
    textToMorse: "Text to Morse",
    morseToText: "Morse to Text",
    typeOrPaste: "Type or paste text here...",
    morseOutput: "Morse code output...",
    morseInput: "Type or paste morse code here...",
    textOutput: "Text output...",
    chars: "chars",
    copied: "Copied successfully!",
    speak: "Speak",
    copy: "Copy",
    playMorse: "Play morse",
    speakText: "Speak text",
    switchDirection: "Switch direction",
  },
} as const;

export const DEFAULT_LANGUAGE: Language = "pt-BR";

export function getTranslation(language: Language, key: keyof typeof translations["pt-BR"]): string {
  return translations[language][key] ?? key;
}
```

### 2. src/context/language-context.tsx
Create language context with provider:
```typescript
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Language, DEFAULT_LANGUAGE, getTranslation } from "@/config/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations["pt-BR"]) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null;
    if (stored) {
      setLanguage(stored);
    }
    setMounted(true);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: (key) => getTranslation(language, key),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
```

## Files to MODIFY (From Previous Commit)

None - no existing files need modification in this commit.

## Dependencies

No new npm dependencies required. Uses React Context API.

## Files NOT Present Yet
```
- ❌ src/components/language-selector.tsx (added in commit-4)
- ❌ src/components/layout/top-bar.tsx (added in commit-5)
- ❌ LanguageProvider integration in root layout (added in commit-9)
```

## Testing

```typescript
import { useLanguage } from "@/context/language-context";

export function TestComponent() {
  const { t, language } = useLanguage();
  
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>Current: {language}</p>
    </div>
  );
}
```

## Translation Keys Added

25+ keys for:
- App title and description
- UI labels
- Button labels
- Message strings
- Mode labels

## Total Files
- New files created: 2
- Modified files: 0
- Configuration updates: 0
