export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Morse Code Translator</h1>
        <p className="text-lg text-muted-foreground">Convert text to morse code instantly</p>
      </main>
    </div>
  );
}
