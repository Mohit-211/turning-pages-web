import type { Metadata } from "next";

import FeaturesHero from "@/components/features/FeaturesHero";
import FeatureAIWriting from "@/components/features/FeatureAIWriting";
import FeatureChapterManagement from "@/components/features/FeatureChapterManagement";
import FeatureGrammarCheck from "@/components/features/FeatureGrammarCheck";
import FeatureProfessionalEditing from "@/components/features/FeatureProfessionalEditing";
import FeaturePlagiarism from "@/components/features/FeaturePlagiarism";
import FeatureSummaries from "@/components/features/FeatureSummaries";
import FeatureCoverGenerator from "@/components/features/FeatureCoverGenerator";
import FeaturesJourney from "@/components/features/FeaturesJourney";
import FeaturesTrust from "@/components/features/FeaturesTrust";
import FeaturesCTA from "@/components/features/FeaturesCTA";

export const metadata: Metadata = {
  title: "Features – AI Book Writing Platform | Turning Pages",
  description:
    "Explore powerful AI features that help you write, edit, structure, and publish your book faster. From AI writing to plagiarism checks and cover generation—everything in one place.",
  keywords: [
    "AI writing tools",
    "book writing software",
    "AI author platform",
    "plagiarism checker",
    "grammar checker",
    "AI content generator",
    "book creation tools",
  ],
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background">
      <FeaturesHero />
      <FeatureAIWriting />
      <FeatureChapterManagement />
      <FeatureGrammarCheck />
      <FeatureProfessionalEditing />
      <FeaturePlagiarism />
      <FeatureSummaries />
      <FeatureCoverGenerator />
      <FeaturesJourney />
      <FeaturesTrust />
      <FeaturesCTA />
    </main>
  );
}
