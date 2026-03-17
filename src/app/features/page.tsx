import Navbar from "@/components/Navbar";
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
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default Features;
