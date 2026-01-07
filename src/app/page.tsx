import { Header } from "@/components/layout/header";
import { TranslatorContainer } from "@/components/translator/translator-container";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 max-w-6xl">
      <Header />
      <TranslatorContainer />
    </main>
  );
}
