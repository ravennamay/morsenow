import { ChangeEvent } from "react";

export type TranslatorActions = {
  handleSpeak: () => void;
  handleCopy: () => Promise<void>;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export type TranslatorCardProps = {
  text: string;
  disabled: boolean;
  placeholder: string;
  panelType: "input" | "output";
  actions: TranslatorActions;
};
