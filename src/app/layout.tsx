import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import CustomCursor from "@/components/cursor/CustomCursor";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name} — Premium Digital Agency`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="grain-overlay">
      <body>
        <LenisProvider>
          <CustomCursor />
          {/* Skip to content */}
          <a
            href="#main-content"
            className="fixed -top-full left-4 z-[9999] rounded-md bg-violet-600 px-4 py-2 text-sm text-white focus:top-4"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
