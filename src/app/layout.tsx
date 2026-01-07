import "@/styles/globals.css";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { siteConfig } from "@/config/site";
import { Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const font = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

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
        <Providers>
          {children}
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  );
}
