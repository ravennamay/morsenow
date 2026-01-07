import { ChangeEvent } from "react";

export type TranslatorActions = {
  handleSpeak: () => void;
  handleCopy: () => Promise<void>;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export type TranslatorState = {
  inputText: string;
  outputText: string;
};

export type TranslatorCardProps = {
  text: string;
  disabled: boolean;
  placeholder: string;
  mode: "textToMorse" | "morseToText";
  panelType: "input" | "output";
  actions: TranslatorActions;
};

export type Toast = {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export type ToastActionElement = React.ReactElement<Record<string, unknown>>;
