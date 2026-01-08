import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
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

        {/* Demo of UI Components */}
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>UI Components Ready</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">Base components are now available.</p>
            <div className="flex gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
