"use client";

import { useLanguage } from "@/context/language-context";
import { Language } from "@/config/i18n";
import { Button } from "./ui/button";
import "flag-icons/css/flag-icons.min.css";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: "pt-BR", flag: "br", label: "PT" },
    { code: "en-US", flag: "us", label: "EN" },
  ];

  return (
    <div className="flex items-center gap-1 rounded-lg bg-muted/30 p-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          size="sm"
          variant={language === lang.code ? "default" : "ghost"}
          onClick={() => setLanguage(lang.code)}
          className="flex items-center gap-1.5 text-sm transition-all"
          title={lang.label}
        >
          <span className={`fi fi-${lang.flag} h-5 w-5 inline-block rounded-sm`} />
          <span className="hidden sm:inline">{lang.label}</span>
        </Button>
      ))}
    </div>
  );
};
