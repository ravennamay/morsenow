"use client";

import { TranslatorPanel } from "./translator-panel";
import { DirectionToggle } from "./direction-toggle";
import { useTranslator } from "@/hooks/use-translator";
import { useLanguage } from "@/context/language-context";

export const TranslatorContainer = () => {
  const { actions, states } = useTranslator();
  const { t } = useLanguage();

  // Determine labels and placeholders based on mode
  const isTextToMorse = states.mode === "textToMorse";
  const inputLabel = isTextToMorse ? t("textInput") : t("morseCode");
  const outputLabel = isTextToMorse ? t("morseCode") : t("textInput");
  const inputPlaceholder = isTextToMorse ? t("typeOrPaste") : t("morseInput");
  const outputPlaceholder = isTextToMorse ? t("morseOutput") : t("textOutput");

  return (
    <div className="flex flex-col gap-8">
      {/* Desktop layout with direction toggle in between */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-6 items-start flex-1">
        {/* Input Panel */}
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

        {/* Direction Toggle */}
        <div className="flex items-center justify-center h-full pt-8">
          <DirectionToggle mode={states.mode} onToggle={actions.toggleMode} />
        </div>

        {/* Output Panel */}
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

      {/* Mobile layout - stacked vertically */}
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
