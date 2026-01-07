import { Header } from "@/components/layout/header";
import { TranslatorContainer } from "@/components/translator/translator-container";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto flex flex-1 flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8 max-w-6xl w-full">
        <Header />
        <TranslatorContainer />
      </main>
      <Footer />
    </div>
  );
}
