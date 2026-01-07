"use client";

import { useLanguage } from "@/context/language-context";
import { Language } from "@/config/i18n";
import { Button } from "./ui/button";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: "pt-BR", flag: "🇧🇷", label: "PT" },
    { code: "en-US", flag: "🇺🇸", label: "EN" },
  ];

  return (
    <div className="flex items-center gap-1 rounded-lg bg-muted/30 p-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          size="sm"
          variant={language === lang.code ? "default" : "ghost"}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center gap-1 text-sm transition-all ${
            language === lang.code ? "bg-primary/20" : "hover:bg-accent/20"
          }`}
          title={lang.label}
        >
          <span className="text-lg">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.label}</span>
        </Button>
      ))}
    </div>
  );
};
