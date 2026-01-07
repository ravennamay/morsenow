import { toast } from "./use-toast";
import { ChangeEvent, useEffect, useState } from "react";
import { textToMorse } from "@/lib/morse/converter";
import { playMorseCode } from "@/lib/morse/audio";
import { speakText } from "@/lib/speech";
import { TRANSLATION_DEBOUNCE_DELAY } from "@/config/constants";
import { useLanguage } from "@/context/language-context";

type ModeType = "input" | "output";

export const useTranslator = () => {
  const { t } = useLanguage();
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  useEffect(() => {
    const translate = () => setOutputText(textToMorse(inputText));
    const timeoutId = setTimeout(translate, TRANSLATION_DEBOUNCE_DELAY);
    return () => clearTimeout(timeoutId);
  }, [inputText]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleCopy = async (type: ModeType) => {
    const isInput = type === "input";
    const text = isInput ? inputText : outputText;
    await navigator.clipboard.writeText(text);

    const toastTitle = isInput ? t("textCopied") : t("morseCopied");
    toast({ variant: "success", title: toastTitle });
  };

  const handleSpeak = (type: ModeType) => {
    if (type == "input") {
      speakText(inputText);
    } else {
      playMorseCode(outputText);
    }
  };

  return {
    actions: { handleChange, handleCopy, handleSpeak },
    states: { inputText, outputText },
  };
};
