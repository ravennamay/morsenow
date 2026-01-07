"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Copy, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TranslatorCardProps } from "@/types";
import { useLanguage } from "@/context/language-context";

export const TranslatorPanel = (props: TranslatorCardProps) => {
  const { t } = useLanguage();

  // Determine button titles based on mode and panel type
  const getPlayTitle = (): string => {
    if (props.panelType === "input") {
      // Input panel
      if (props.mode === "textToMorse") {
        return t("speakText"); // Playing text
      } else {
        return t("playMorse"); // Playing morse
      }
    } else {
      // Output panel
      if (props.mode === "textToMorse") {
        return t("playMorse"); // Output is morse
      } else {
        return t("speakText"); // Output is text
      }
    }
  };

  return (
    <Card
      className={cn(
        "flex flex-col gap-4 p-6 border border-border/50 bg-gradient-to-br",
        props.disabled
          ? "from-muted/30 to-muted/50 dark:from-muted/10 dark:to-muted/20"
          : "from-card to-card/95 shadow-md hover:shadow-lg transition-shadow"
      )}
    >
      <textarea
        value={props.text}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onChange={props.actions.handleChange}
        className={cn(
          "h-48 w-full resize-none rounded-lg bg-background/50 p-4 text-foreground placeholder-muted-foreground outline-none transition-all",
          "focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background",
          "disabled:cursor-not-allowed disabled:opacity-60"
        )}
      />

      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            disabled={!props.text}
            onClick={props.actions.handleSpeak}
            className="hover:bg-primary/10 hover:text-primary transition-colors"
            title={getPlayTitle()}
          >
            <Volume2 className="h-5 w-5" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            disabled={!props.text}
            onClick={props.actions.handleCopy}
            className="hover:bg-primary/10 hover:text-primary transition-colors"
            title={t("copy")}
          >
            <Copy className="h-5 w-5" />
          </Button>
        </div>

        <span className="text-sm font-medium text-muted-foreground">
          {props.text.length} <span className="text-xs">{t("chars")}</span>
        </span>
      </div>
    </Card>
  );
};
