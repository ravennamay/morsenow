"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";

export const TopBar = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b border-border/40 bg-background/95 backdrop-blur-sm px-4 py-3 sm:px-6 lg:px-8">
      <div className="flex-1" />
      <div className="flex items-center justify-end gap-2">
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </div>
  );
};
