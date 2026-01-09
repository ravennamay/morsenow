import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>
      <main className="mx-auto flex flex-1 flex-col gap-8 px-4 py-16 max-w-6xl w-full text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Morse Code Translator
        </h1>
        <p className="text-lg text-muted-foreground">
          Convert text to morse code instantly
        </p>
      </main>
    </div>
  );
}
