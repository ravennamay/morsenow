"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { textToMorse } from "@/lib/morse/converter";

export default function Home() {
  const [text, setText] = useState("");
  const morseOutput = textToMorse(text);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>
      <main className="mx-auto flex flex-1 flex-col gap-8 px-4 py-16 max-w-6xl w-full">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Morse Code Translator
          </h1>
          <p className="text-lg text-muted-foreground">
            Convert text to morse code instantly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Card */}
          <Card>
            <CardHeader>
              <CardTitle>Text Input</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type or paste text here..."
                className="h-48 w-full resize-none rounded-lg bg-background/50 p-4 text-foreground placeholder-muted-foreground outline-none border border-border focus:ring-2 focus:ring-primary"
              />
              <p className="mt-2 text-sm text-muted-foreground">{text.length} characters</p>
            </CardContent>
          </Card>

          {/* Output Card */}
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle>Morse Code</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                value={morseOutput}
                readOnly
                placeholder="Morse code output..."
                className="h-48 w-full resize-none rounded-lg bg-background/50 p-4 text-foreground placeholder-muted-foreground outline-none border border-border cursor-not-allowed opacity-80"
              />
              <p className="mt-2 text-sm text-muted-foreground">{morseOutput.length} characters</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
