import { MORSE_CODE } from "./morse-code";

export const textToMorse = (text: string): string => {
  return text
    .toUpperCase()
    .split("")
    .map((char) => MORSE_CODE[char] || char)
    .join(" ");
};
