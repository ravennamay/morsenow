"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TranslatorCardProps } from "@/types";
import { Copy, Volume2 } from "lucide-react";

export const TranslatorPanel = (props: TranslatorCardProps) => {
  const getPlayTitle = (): string => {
    if (props.panelType === "input") {
      return props.mode === "textToMorse" ? "Speak text" : "Play morse";
    } else {
      return props.mode === "textToMorse" ? "Play morse" : "Speak text";
    }
  };

  return (
    <Card className={cn(
      "flex flex-col gap-4 p-6 border border-border/50 bg-gradient-to-br",
      props.disabled ? "from-muted/30 to-muted/50 dark:from-muted/10 dark:to-muted/20" : "from-card to-card/95 shadow-md hover:shadow-lg transition-shadow"
    )}>
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
          <Button size="icon" variant="ghost" disabled={!props.text} onClick={props.actions.handleSpeak} className="hover:bg-primary/10 hover:text-primary transition-colors" title={getPlayTitle()}>
            <Volume2 className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" disabled={!props.text} onClick={props.actions.handleCopy} className="hover:bg-primary/10 hover:text-primary transition-colors" title="Copy">
            <Copy className="h-5 w-5" />
          </Button>
        </div>
        <span className="text-sm font-medium text-muted-foreground">{props.text.length} <span className="text-xs">chars</span></span>
      </div>
    </Card>
  );
};
