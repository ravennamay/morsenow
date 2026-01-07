# Files to Copy for Commit 8: Bidirectional UI Integration

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

## Components (Modified)
```
src/components/
├── theme-provider.tsx         ✅ (from commit-2)
├── theme-toggle.tsx           ✅ (from commit-5)
├── language-selector.tsx      ✅ (from commit-4)
├── layout/
│   ├── top-bar.tsx            ✅ (from commit-5)
│   └── header.tsx             ✅ (from commit-1)
├── translator/
│   ├── translator-container.tsx  ✅ MODIFY: Add toggle and dynamic labels
│   ├── translator-panel.tsx      ✅ MODIFY: Add mode-aware button titles
│   └── direction-toggle.tsx      ✅ (from commit-7)
└── ui/
    ├── button.tsx             ✅ (from commit-1)
    └── card.tsx               ✅ (from commit-1)
```

## App, Styles, Config (No Changes)
```
src/app/
├── layout.tsx             ✅ (from commit-5)
├── page.tsx               ✅ (from commit-1)
├── robots.ts              ✅ (from commit-1)
└── sitemap.ts             ✅ (from commit-1)

src/styles/
├── globals.css            ✅ (from commit-2)
└── theme-variables.css    ✅ (from commit-2)

src/config/
├── i18n.ts                ✅ (from commit-3)
├── site.ts                ✅ (from commit-1)
└── constants.ts           ✅ (from commit-1)

src/context/
└── language-context.tsx   ✅ (from commit-3)
```

## Library (No Changes)
```
src/lib/morse/
├── morse-code.ts          ✅ (from commit-1)
├── converter.ts           ✅ (from commit-1)
├── reverse-converter.ts   ✅ (from commit-6)
└── audio.ts              ✅ (from commit-1)

src/lib/
├── speech.ts              ✅ (from commit-1)
└── utils.ts              ✅ (from commit-1)
```

## Files to MODIFY (In This Commit)

### 1. src/hooks/use-translator.tsx
Add mode state and bidirectional logic:
```typescript
"use client";

import { useState, useCallback, ChangeEvent } from "react";
import { textToMorse } from "@/lib/morse/converter";
import { morseToText, isValidMorse } from "@/lib/morse/reverse-converter";
import { playMorseCode } from "@/lib/morse/audio";
import { speakText } from "@/lib/speech";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/language-context";

export const useTranslator = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [mode, setMode] = useState<"textToMorse" | "morseToText">("textToMorse");
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);

    if (mode === "textToMorse") {
      setOutputText(textToMorse(text));
    } else {
      if (isValidMorse(text)) {
        setOutputText(morseToText(text));
      } else {
        setOutputText("");
      }
    }
  }, [mode, t]);

  const handleCopy = useCallback(async (type: "input" | "output") => {
    const text = type === "input" ? inputText : outputText;
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      toast({ title: t("copied") });
    } catch {
      toast({ title: "Error copying to clipboard", variant: "destructive" });
    }
  }, [inputText, outputText, toast, t]);

  const handleSpeak = useCallback((type: "input" | "output") => {
    const text = type === "input" ? inputText : outputText;
    if (!text) return;

    if (mode === "textToMorse") {
      if (type === "input") {
        speakText(text);
      } else {
        playMorseCode(text);
      }
    } else {
      if (type === "input") {
        playMorseCode(text);
      } else {
        speakText(text);
      }
    }
  }, [inputText, outputText, mode]);

  const toggleMode = useCallback(() => {
    setMode(prev => prev === "textToMorse" ? "morseToText" : "textToMorse");
    setInputText("");
    setOutputText("");
  }, []);

  return {
    states: { inputText, outputText, mode },
    actions: { handleChange, handleCopy, handleSpeak, toggleMode }
  };
};
```

### 2. src/components/translator/translator-container.tsx
Update to include DirectionToggle and dynamic labels:
```typescript
"use client";

import { TranslatorPanel } from "./translator-panel";
import { DirectionToggle } from "./direction-toggle";
import { useTranslator } from "@/hooks/use-translator";
import { useLanguage } from "@/context/language-context";

export const TranslatorContainer = () => {
  const { actions, states } = useTranslator();
  const { t } = useLanguage();

  const isTextToMorse = states.mode === "textToMorse";
  const inputLabel = isTextToMorse ? t("textInput") : t("morseCode");
  const outputLabel = isTextToMorse ? t("morseCode") : t("textInput");
  const inputPlaceholder = isTextToMorse ? t("typeOrPaste") : t("morseInput");
  const outputPlaceholder = isTextToMorse ? t("morseOutput") : t("textOutput");

  return (
    <div className="flex flex-col gap-8">
      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-6 items-start flex-1">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">{inputLabel}</label>
          <TranslatorPanel
            disabled={false}
            text={states.inputText}
            placeholder={inputPlaceholder}
            mode={states.mode}
            panelType="input"
            actions={{
              handleChange: actions.handleChange,
              handleCopy: () => actions.handleCopy("input"),
              handleSpeak: () => actions.handleSpeak("input"),
            }}
          />
        </div>

        <div className="flex items-center justify-center h-full pt-8">
          <DirectionToggle mode={states.mode} onToggle={actions.toggleMode} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">{outputLabel}</label>
          <TranslatorPanel
            disabled={true}
            text={states.outputText}
            placeholder={outputPlaceholder}
            mode={states.mode}
            panelType="output"
            actions={{
              handleChange: actions.handleChange,
              handleCopy: () => actions.handleCopy("output"),
              handleSpeak: () => actions.handleSpeak("output"),
            }}
          />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden space-y-4 flex-1">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">{inputLabel}</label>
          <TranslatorPanel
            disabled={false}
            text={states.inputText}
            placeholder={inputPlaceholder}
            mode={states.mode}
            panelType="input"
            actions={{
              handleChange: actions.handleChange,
              handleCopy: () => actions.handleCopy("input"),
              handleSpeak: () => actions.handleSpeak("input"),
            }}
          />
        </div>

        <div className="flex justify-center">
          <DirectionToggle mode={states.mode} onToggle={actions.toggleMode} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">{outputLabel}</label>
          <TranslatorPanel
            disabled={true}
            text={states.outputText}
            placeholder={outputPlaceholder}
            mode={states.mode}
            panelType="output"
            actions={{
              handleChange: actions.handleChange,
              handleCopy: () => actions.handleCopy("output"),
              handleSpeak: () => actions.handleSpeak("output"),
            }}
          />
        </div>
      </div>
    </div>
  );
};
```

### 3. src/components/translator/translator-panel.tsx
Update with mode-aware button titles:
```typescript
"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Copy, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TranslatorCardProps } from "@/types";
import { useLanguage } from "@/context/language-context";

export const TranslatorPanel = (props: TranslatorCardProps) => {
  const { t } = useLanguage();

  const getPlayTitle = (): string => {
    if (props.panelType === "input") {
      return props.mode === "textToMorse" ? t("speakText") : t("playMorse");
    } else {
      return props.mode === "textToMorse" ? t("playMorse") : t("speakText");
    }
  };

  return (
    <Card
      className={cn(
        "flex flex-col gap-4 p-6 border border-border/50 bg-gradient-to-br",
        props.disabled
          ? "from-muted/30 to-muted/50 dark:from-muted/10 dark:to-muted/20"
          : "from-card to-card/95 shadow-md hover:shadow-lg transition-shadow"
      )}
    >
      <textarea
        value={props.text}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onChange={props.actions.handleChange}
        className={cn(
          "h-48 w-full resize-none rounded-lg bg-background/50 p-4 text-foreground placeholder-muted-foreground outline-none transition-all",
          "focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background",
          "disabled:cursor-not-allowed disabled:opacity-60"
        )}
      />

      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            disabled={!props.text}
            onClick={props.actions.handleSpeak}
            className="hover:bg-primary/10 hover:text-primary transition-colors"
            title={getPlayTitle()}
          >
            <Volume2 className="h-5 w-5" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            disabled={!props.text}
            onClick={props.actions.handleCopy}
            className="hover:bg-primary/10 hover:text-primary transition-colors"
            title={t("copy")}
          >
            <Copy className="h-5 w-5" />
          </Button>
        </div>

        <span className="text-sm font-medium text-muted-foreground">
          {props.text.length} <span className="text-xs">{t("chars")}</span>
        </span>
      </div>
    </Card>
  );
};
```

### 4. src/types/index.ts
Update TranslatorCardProps:
```typescript
export interface TranslatorCardProps {
  disabled: boolean;
  text: string;
  placeholder: string;
  mode: "textToMorse" | "morseToText";
  panelType: "input" | "output";
  actions: {
    handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    handleCopy: () => Promise<void>;
    handleSpeak: () => void;
  };
}
```

## Responsive Layout

### Desktop (md and above)
- 3-column grid layout
- Left: Input panel
- Center: Direction toggle
- Right: Output panel
- Toggle vertically centered

### Mobile (below md)
- Stacked vertically
- Input panel on top
- Direction toggle in middle
- Output panel on bottom
- Full width panels

## Files NOT Present Yet
```
- ❌ Full i18n integration (added in commit-9)
- ❌ LanguageProvider in root layout (added in commit-9)
- ❌ All hardcoded strings translated (added in commit-9)
```

## Total Files
- New files created: 0
- Modified files: 4
- Configuration updates: 0

## Next Steps

The final commit will complete i18n integration by replacing all hardcoded strings with translation function calls.
