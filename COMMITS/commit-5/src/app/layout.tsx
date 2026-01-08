import "@/styles/globals.css";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Providers } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Morse Code Translator",
  description: "Convert text to morse code instantly",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
