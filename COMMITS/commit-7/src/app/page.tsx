import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TranslatorContainer } from "@/components/translator/translator-container";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>
      <main className="mx-auto flex flex-1 flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8 max-w-6xl w-full">
        <Header />
        <TranslatorContainer />
      </main>
      <Footer />
    </div>
  );
}
