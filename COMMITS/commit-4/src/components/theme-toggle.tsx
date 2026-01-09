"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Button } from "./ui/button";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
      className="rounded-lg border border-border/40 bg-background hover:bg-accent transition-colors"
    >
      <SunIcon className="hidden [html.dark_&]:block h-5 w-5" />
      <MoonIcon className="hidden [html.light_&]:block h-5 w-5" />
    </Button>
  );
};
