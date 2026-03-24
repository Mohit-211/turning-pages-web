import type { Metadata } from "next";

import SupportHero from "@/components/support/SupportHero";
import SupportForm from "@/components/support/SupportForm";
import SupportFAQ from "@/components/support/SupportFAQ";
import SupportTrust from "@/components/support/SupportTrust";
import SupportCTA from "@/components/support/SupportCTA";

export const metadata: Metadata = {
  title: "Support – Turning Pages",
  description:
    "Get help with Turning Pages. Contact support, explore FAQs, and find guidance on using our AI-powered book writing platform.",
  keywords: [
    "Turning Pages support",
    "AI writing help",
    "book writing support",
    "customer support",
    "FAQs",
  ],
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background">
      <SupportHero />
      <SupportForm />
      <SupportFAQ />
      <SupportTrust />
      <SupportCTA />
    </main>
  );
}
