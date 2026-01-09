import { ChangeEvent } from "react";

export type TranslatorActions = {
  handleCopy: () => Promise<void>;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export type TranslatorCardProps = {
  text: string;
  disabled: boolean;
  placeholder: string;
  actions: TranslatorActions;
};
