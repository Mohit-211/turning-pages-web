import type { Metadata, Viewport } from "next";
import "./globals.css";

import { DM_Sans, Space_Grotesk } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

/* ---------------- FONTS ---------------- */

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

/* ---------------- VIEWPORT ---------------- */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  metadataBase: new URL("https://turningpages.ai"),

  title: {
    default: "Turning Pages – Write Your Book with TAV",
    template: "%s | Turning Pages",
  },

  description:
    "Turning Pages is an TAV-powered platform that helps you write, structure, edit, and publish your book effortlessly.",

  keywords: [
    "TAV writing",
    "book writing platform",
    "write book with TAV",
    "TAV author tools",
    "self publishing",
    "TAV content creation",
  ],

  applicationName: "Turning Pages",

  authors: [{ name: "Turning Pages Team" }],
  creator: "Turning Pages",
  publisher: "Turning Pages",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Turning Pages – Write Your Book with TAV",
    description:
      "Create, edit, and publish your book using powerful TAV tools. Faster writing, smarter storytelling.",
    url: "https://turningpages.ai",
    siteName: "Turning Pages",
    images: [
      {
        url: "/assets/hero-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Turning Pages TAV Writing Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Turning Pages – Write Your Book with TAV",
    description:
      "Your TAV-powered writing partner for books, ideas, and storytelling.",
    images: ["/assets/hero-dashboard.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased bg-background`}
      >
        <TooltipProvider delayDuration={100}>
          <Navbar />

          <main>{children}</main>

          <Footer />

          <Toaster richColors position="top-right" />
        </TooltipProvider>
      </body>
    </html>
  );
}
