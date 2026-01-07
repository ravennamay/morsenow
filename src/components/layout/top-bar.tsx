"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";

export const TopBar = () => {
  return (
    <div className="flex items-center justify-end gap-3 p-4">
      <LanguageSelector />
      <ThemeToggle />
    </div>
  );
};
