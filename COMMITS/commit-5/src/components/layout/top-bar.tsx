"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";

export const TopBar = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border/30 bg-background/80 backdrop-blur-md px-4 py-2.5 sm:px-6 lg:px-8">
      <div className="flex-1" />
      <nav className="flex items-center justify-end gap-3">
        <LanguageSelector />
        <ThemeToggle />
      </nav>
    </header>
  );
};
