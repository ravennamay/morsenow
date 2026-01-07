import { toast } from "./use-toast";
import { ChangeEvent, useEffect, useState } from "react";
import { textToMorse } from "@/lib/morse/converter";
import { morseToText, isValidMorse } from "@/lib/morse/reverse-converter";
import { playMorseCode } from "@/lib/morse/audio";
import { speakText } from "@/lib/speech";
import { TRANSLATION_DEBOUNCE_DELAY } from "@/config/constants";
import { useLanguage } from "@/context/language-context";

type ModeType = "input" | "output";
type TranslationMode = "textToMorse" | "morseToText";

export const useTranslator = () => {
  const { t } = useLanguage();
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [mode, setMode] = useState<TranslationMode>("textToMorse");

  useEffect(() => {
    const translate = () => {
      if (mode === "textToMorse") {
        setOutputText(textToMorse(inputText));
      } else {
        // morseToText mode
        if (inputText.trim() === "") {
          setOutputText("");
        } else if (isValidMorse(inputText)) {
          setOutputText(morseToText(inputText));
        } else {
          setOutputText("");
        }
      }
    };

    const timeoutId = setTimeout(translate, TRANSLATION_DEBOUNCE_DELAY);
    return () => clearTimeout(timeoutId);
  }, [inputText, mode]);

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
    if (type === "input") {
      if (mode === "textToMorse") {
        speakText(inputText);
      } else {
        // In morseToText mode, input is morse
        playMorseCode(inputText);
      }
    } else {
      if (mode === "textToMorse") {
        playMorseCode(outputText);
      } else {
        // In morseToText mode, output is text
        speakText(outputText);
      }
    }
  };

  const toggleMode = () => {
    setInputText("");
    setOutputText("");
    setMode((prev) => (prev === "textToMorse" ? "morseToText" : "textToMorse"));
  };

  return {
    actions: { handleChange, handleCopy, handleSpeak, toggleMode },
    states: { inputText, outputText, mode },
  };
};
