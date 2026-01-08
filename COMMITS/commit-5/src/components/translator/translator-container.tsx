"use client";

import { TranslatorPanel } from "./translator-panel";
import { useTranslator } from "@/hooks/use-translator";

export const TranslatorContainer = () => {
  const { actions, states } = useTranslator();

  return (
    <div className="flex flex-col gap-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Input Panel */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Text Input</label>
          <TranslatorPanel
            disabled={false}
            text={states.inputText}
            placeholder="Type or paste text here..."
            actions={{
              handleChange: actions.handleChange,
              handleCopy: () => actions.handleCopy("input"),
            }}
          />
        </div>

        {/* Output Panel */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Morse Code</label>
          <TranslatorPanel
            disabled={true}
            text={states.outputText}
            placeholder="Morse code output..."
            actions={{
              handleChange: actions.handleChange,
              handleCopy: () => actions.handleCopy("output"),
            }}
          />
        </div>
      </div>
    </div>
  );
};
