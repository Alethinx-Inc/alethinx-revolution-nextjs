import type { Metadata } from "next";
import { Playfair_Display, Outfit, DM_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { IPProtection } from "@/components/IPProtection";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALETHINX AI REVOLUTION\u2122 \u2014 The Impossible Ecosystem",
  description:
    "The world's first AI Agentic Autonomous Platform for M&A. Find, Buy, Run. Patent Pending 64/024,148.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "ALETHINX AI REVOLUTION\u2122",
    description: "The Impossible Ecosystem \u2014 AI-powered M&A intelligence",
    url: "https://revolution.alethinx.ai",
    siteName: "Alethinx AI",
    type: "website",
  },
  other: {
    "X-Robots-Tag": "noarchive, nosnippet",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen bg-[#08021a] antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <IPProtection />
      </body>
    </html>
  );
}
