"use client";

import { useLanguage } from "@/context/language-context";
import { Language } from "@/config/i18n";
import { Button } from "./ui/button";

// SVG Flag Components
const BrazilFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 900 600" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="600" fill="#009c3b"/>
    <polygon points="450,300 225,150 675,150" fill="#ffd700"/>
    <circle cx="450" cy="300" r="90" fill="#002776"/>
    <ellipse cx="450" cy="300" rx="90" ry="40" fill="#002776" opacity="0.3"/>
  </svg>
);

const USFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 900 600" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="600" fill="#b22234"/>
    <rect width="900" height="46" fill="#3c3b6b"/>
    <rect y="92" width="900" height="46" fill="#3c3b6b"/>
    <rect y="184" width="900" height="46" fill="#3c3b6b"/>
    <rect y="276" width="900" height="46" fill="#3c3b6b"/>
    <rect y="368" width="900" height="46" fill="#3c3b6b"/>
    <rect y="460" width="900" height="46" fill="#3c3b6b"/>
    <rect width="360" height="276" fill="#3c3b6b"/>
    <circle cx="180" cy="60" r="8" fill="white" opacity="0.8"/>
    <circle cx="240" cy="60" r="8" fill="white" opacity="0.8"/>
    <circle cx="300" cy="60" r="8" fill="white" opacity="0.8"/>
    <circle cx="180" cy="138" r="8" fill="white" opacity="0.8"/>
    <circle cx="240" cy="138" r="8" fill="white" opacity="0.8"/>
    <circle cx="300" cy="138" r="8" fill="white" opacity="0.8"/>
  </svg>
);

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; icon: React.ReactNode; label: string }[] = [
    { code: "pt-BR", icon: <BrazilFlag className="h-5 w-5" />, label: "PT" },
    { code: "en-US", icon: <USFlag className="h-5 w-5" />, label: "EN" },
  ];

  return (
    <div className="flex items-center gap-1 rounded-lg bg-muted/30 p-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          size="sm"
          variant={language === lang.code ? "default" : "ghost"}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center gap-1.5 text-sm transition-all ${
            language === lang.code ? "bg-primary/20" : "hover:bg-accent/20"
          }`}
          title={lang.label}
        >
          <span className="inline-block">{lang.icon}</span>
          <span className="hidden sm:inline">{lang.label}</span>
        </Button>
      ))}
    </div>
  );
};
