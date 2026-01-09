"use client";

export const Header = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Morse Code Translator
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
        Convert text to morse code instantly. <span className="text-foreground font-medium">Type, translate, and play.</span>
      </p>
    </div>
  );
};
