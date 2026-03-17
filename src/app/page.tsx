import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTABanner from "@/components/CTABanner";
import AudienceSection from "@/components/AudienceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <JourneySection />
      <TestimonialsSection />
      <FeaturesSection />
      <CTABanner />
      <AudienceSection />
      <Footer />
    </div>
  );
};

export default Index;
