"use client";

import { TranslatorPanel } from "./translator-panel";
import { DirectionToggle } from "./direction-toggle";
import { useTranslator } from "@/hooks/use-translator";

export const TranslatorContainer = () => {
  const { actions, states } = useTranslator();

  const isTextToMorse = states.mode === "textToMorse";
  const inputLabel = isTextToMorse ? "Text Input" : "Morse Code";
  const outputLabel = isTextToMorse ? "Morse Code" : "Text Input";
  const inputPlaceholder = isTextToMorse ? "Type or paste text here..." : "Type or paste morse code here...";
  const outputPlaceholder = isTextToMorse ? "Morse code output..." : "Text output...";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center">
        <DirectionToggle mode={states.mode} onToggle={actions.toggleMode} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">{inputLabel}</label>
          <TranslatorPanel
            disabled={false}
            text={states.inputText}
            placeholder={inputPlaceholder}
            mode={states.mode}
            panelType="input"
            actions={{ handleChange: actions.handleChange, handleCopy: () => actions.handleCopy("input"), handleSpeak: () => actions.handleSpeak("input") }}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">{outputLabel}</label>
          <TranslatorPanel
            disabled={true}
            text={states.outputText}
            placeholder={outputPlaceholder}
            mode={states.mode}
            panelType="output"
            actions={{ handleChange: actions.handleChange, handleCopy: () => actions.handleCopy("output"), handleSpeak: () => actions.handleSpeak("output") }}
          />
        </div>
      </div>
    </div>
  );
};
