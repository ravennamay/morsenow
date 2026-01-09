"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightLeft } from "lucide-react";

type DirectionToggleProps = {
  mode: "textToMorse" | "morseToText";
  onToggle: () => void;
};

export const DirectionToggle = ({ mode, onToggle }: DirectionToggleProps) => {
  const modeLabel = mode === "textToMorse" ? "Text to Morse" : "Morse to Text";

  return (
    <div className="flex flex-col items-center gap-3">
      <Button
        size="icon"
        variant="outline"
        onClick={onToggle}
        className="rounded-full border-2 hover:bg-primary/10 transition-colors"
        title="Switch direction"
      >
        <ArrowRightLeft className="h-5 w-5" />
      </Button>
      <span className="text-xs font-medium text-muted-foreground text-center">
        {modeLabel}
      </span>
    </div>
  );
};
