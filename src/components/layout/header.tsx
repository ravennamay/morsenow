"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";

export const Header = () => {
  const { t } = useLanguage();

  return (
    <Card className="bg-gradient-to-br from-background via-background to-accent/5 border-0 shadow-none">
      <CardHeader className="space-y-2">
        <CardTitle className="text-4xl font-bold">{t("title")}</CardTitle>
        <CardDescription className="text-base">
          {t("description")}. {t("tagline")}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
