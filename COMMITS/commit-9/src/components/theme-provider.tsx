"use client";

import { Toaster } from "./ui/toaster";
import { PropsWithChildren } from "react";
import { ThemeProvider, ThemeProviderProps } from "next-themes";
import { LanguageProvider } from "@/context/language-context";

const themeProps: ThemeProviderProps = {
  enableSystem: true,
  attribute: "class",
  defaultTheme: "system",
};

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider {...themeProps}>
      <LanguageProvider>
        {children}
        <Toaster />
      </LanguageProvider>
    </ThemeProvider>
  );
};
