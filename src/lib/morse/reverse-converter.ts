import { MORSE_CODE } from "./morse-code";

// Create reverse mapping: morse code -> character
const MORSE_TO_CHAR: Record<string, string> = {};
Object.entries(MORSE_CODE).forEach(([char, morse]) => {
  MORSE_TO_CHAR[morse] = char;
});

export const morseToText = (morse: string): string => {
  // Split by "/" for words, then by " " for characters
  return morse
    .split("/")
    .map((word) => {
      return word
        .trim()
        .split(" ")
        .map((code) => {
          const trimmedCode = code.trim();
          return MORSE_TO_CHAR[trimmedCode] || "?";
        })
        .join("");
    })
    .join(" ");
};

export const isValidMorse = (morse: string): boolean => {
  if (!morse.trim()) return false;
  // Valid morse should only contain dots (.), dashes (-), spaces, and slashes (/)
  return /^[\s.\-/]+$/.test(morse);
};
