"use client";

import { useLanguage } from "@/context/language-context";
import { LanguageSelector } from "@/components/language-selector";
import { ThemeToggle } from "@/components/theme-toggle";

export const Header = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            {t("title")}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
      <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
        {t("description")}. <span className="text-foreground font-medium">{t("tagline")}</span>
      </p>
    </div>
  );
};
