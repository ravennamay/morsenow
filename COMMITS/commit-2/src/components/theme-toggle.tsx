"use client";

import { useCallback } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border/40 bg-background hover:bg-accent transition-colors"
    >
      <SunIcon className="hidden [html.dark_&]:block h-5 w-5" />
      <MoonIcon className="hidden [html.light_&]:block h-5 w-5" />
    </button>
  );
};
