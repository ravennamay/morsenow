import "@/styles/globals.css";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { siteConfig } from "@/config/site";
import { Inter } from "next/font/google";
import { Providers } from "@/components/theme-provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  robots: siteConfig.robots,
  keywords: siteConfig.keywords,
  description: siteConfig.description,
  metadataBase: siteConfig.metadataBase,
  applicationName: siteConfig.applicationName,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
