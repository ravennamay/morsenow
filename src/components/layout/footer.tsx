"use client";

import { useLanguage } from "@/context/language-context";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 border-t border-border/30 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-muted-foreground">
          {t("footerText")}{" "}
          <a
            href="https://github.com/rwbe"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground hover:text-primary transition-colors"
          >
            {t("footerLink")}
          </a>
        </p>
      </div>
    </footer>
  );
};
