import { ChangeEvent, useEffect, useState } from "react";
import { textToMorse } from "@/lib/morse/converter";

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
  };

  return {
    actions: { handleChange, handleCopy },
    states: { inputText, outputText },
  };
};
