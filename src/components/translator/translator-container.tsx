"use client";

import { TranslatorPanel } from "./translator-panel";
import { useTranslator } from "@/hooks/use-translator";
import { useLanguage } from "@/context/language-context";

export const TranslatorContainer = () => {
  const { actions, states } = useTranslator();
  const { t } = useLanguage();

  return (
    <div className="grid flex-1 gap-8 md:grid-cols-2 sm:grid-cols-1">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-foreground">{t("textInput")}</label>
        <TranslatorPanel
          disabled={false}
          text={states.inputText}
          placeholder={t("typeOrPaste")}
          actions={{
            handleChange: actions.handleChange,
            handleCopy: () => actions.handleCopy("input"),
            handleSpeak: () => actions.handleSpeak("input"),
          }}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-foreground">{t("morseCode")}</label>
        <TranslatorPanel
          disabled={true}
          text={states.outputText}
          placeholder={t("morseOutput")}
          actions={{
            handleChange: actions.handleChange,
            handleCopy: () => actions.handleCopy("output"),
            handleSpeak: () => actions.handleSpeak("output"),
          }}
        />
      </div>
    </div>
  );
};
