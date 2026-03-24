import type { Metadata } from "next";

import HeroSection from "@/components/home/HeroSection";
import JourneySection from "@/components/home/JourneySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CTABanner from "@/components/home/CTABanner";
import AudienceSection from "@/components/home/AudienceSection";

export const metadata: Metadata = {
  title: "Turning Pages – Write Your Book with AI",
  description:
    "Turning Pages is an AI-powered platform that helps you write, structure, and publish your book faster and smarter.",
  keywords: [
    "AI writing",
    "book writing platform",
    "write book with AI",
    "AI author tools",
    "content creation",
  ],
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <JourneySection />
      <TestimonialsSection />
      <FeaturesSection />
      <CTABanner />
      <AudienceSection />
    </main>
  );
}
