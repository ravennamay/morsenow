"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Language, defaultLanguage, translations } from "@/config/i18n";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof (typeof translations)["pt-BR"]) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Default context value for SSR/initial render
const defaultContextValue: LanguageContextType = {
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: keyof (typeof translations)["pt-BR"]) => key,
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && (savedLanguage === "pt-BR" || savedLanguage === "en-US")) {
      setLanguageState(savedLanguage);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: keyof (typeof translations)["pt-BR"]): string => {
    return translations[language][key] || key;
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  // Return default value if context is not available (for SSR)
  if (!context) {
    return defaultContextValue;
  }
  return context;
};
