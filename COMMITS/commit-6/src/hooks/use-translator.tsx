import { playMorseCode } from "@/lib/morse/audio";
import { textToMorse } from "@/lib/morse/converter";
import { speakText } from "@/lib/speech";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "./use-toast";

const DEBOUNCE_DELAY = 300;

export const useTranslator = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOutputText(textToMorse(inputText));
    }, DEBOUNCE_DELAY);
    return () => clearTimeout(timeoutId);
  }, [inputText]);

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
