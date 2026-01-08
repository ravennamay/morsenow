"use client";

import { TranslatorPanel } from "./translator-panel";
import { useTranslator } from "@/hooks/use-translator";

export const TranslatorContainer = () => {
  const { actions, states } = useTranslator();

  return (
    <div className="flex flex-col gap-6">
      {/* Desktop layout - Side by side */}
      <div className="hidden md:grid grid-cols-2 gap-6 flex-1">
        {/* Input Panel */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Text Input</label>
          <TranslatorPanel
            disabled={false}
            text={states.inputText}
            placeholder="Type or paste text here..."
            mode={states.mode}
            panelType="input"
            actions={{
              handleChange: actions.handleChange,
              handleCopy: () => actions.handleCopy("input"),
              handleSpeak: () => actions.handleSpeak("input"),
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
          <label className="text-sm font-semibold text-foreground">Text Input</label>
          <TranslatorPanel
            disabled={false}
            text={states.inputText}
            placeholder="Type or paste text here..."
            mode={states.mode}
            panelType="input"
            actions={{
              handleChange: actions.handleChange,
              handleCopy: () => actions.handleCopy("input"),
              handleSpeak: () => actions.handleSpeak("input"),
            }}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Morse Code</label>
          <TranslatorPanel
            disabled={true}
            text={states.outputText}
            placeholder="Morse code output..."
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
