import { playMorseCode } from "@/lib/morse/audio";
import { textToMorse } from "@/lib/morse/converter";
import { isValidMorse, morseToText } from "@/lib/morse/reverse-converter";
import { speakText } from "@/lib/speech";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "./use-toast";

const DEBOUNCE_DELAY = 300;
type TranslationMode = "textToMorse" | "morseToText";

export const useTranslator = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [mode, setMode] = useState<TranslationMode>("textToMorse");

  useEffect(() => {
    const translate = () => {
      if (mode === "textToMorse") {
        setOutputText(textToMorse(inputText));
      } else {
        if (inputText.trim() === "") {
          setOutputText("");
        } else if (isValidMorse(inputText)) {
          setOutputText(morseToText(inputText));
        } else {
          setOutputText("");
        }
      }
    };

    const timeoutId = setTimeout(translate, DEBOUNCE_DELAY);
    return () => clearTimeout(timeoutId);
  }, [inputText, mode]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleCopy = async (type: "input" | "output") => {
    const text = type === "input" ? inputText : outputText;
    await navigator.clipboard.writeText(text);
    toast({
      variant: "success",
      title: type === "input" ? "Text copied!" : "Morse code copied!",
    });
  };

  const handleSpeak = (type: "input" | "output") => {
    if (type === "input") {
      if (mode === "textToMorse") speakText(inputText);
      else playMorseCode(inputText);
    } else {
      if (mode === "textToMorse") playMorseCode(outputText);
      else speakText(outputText);
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
