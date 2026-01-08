"use client";

import { useLanguage } from "@/context/language-context";

export const Header = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-3">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        {t("title")}
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
        {t("description")}.{" "}
        <span className="text-foreground font-medium">{t("tagline")}</span>
      </p>
    </div>
  );
};
