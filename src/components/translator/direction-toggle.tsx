"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightLeft } from "lucide-react";
import { useLanguage } from "@/context/language-context";

type DirectionToggleProps = {
  mode: "textToMorse" | "morseToText";
  onToggle: () => void;
};

export const DirectionToggle = ({ mode, onToggle }: DirectionToggleProps) => {
  const { t } = useLanguage();

  const modeLabel = mode === "textToMorse" ? t("textToMorse") : t("morseToText");

  return (
    <div className="flex flex-col items-center gap-3">
      <Button
        size="icon"
        variant="outline"
        onClick={onToggle}
        className="rounded-full border-2 hover:bg-primary/10 transition-colors"
        title={t("switchDirection")}
      >
        <ArrowRightLeft className="h-5 w-5" />
      </Button>
      <span className="text-xs font-medium text-muted-foreground text-center">
        {modeLabel}
      </span>
    </div>
  );
};
