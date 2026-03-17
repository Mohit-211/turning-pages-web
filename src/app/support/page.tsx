import Navbar from "@/components/Navbar";
import SupportHero from "@/components/support/SupportHero";
import SupportForm from "@/components/support/SupportForm";
import SupportFAQ from "@/components/support/SupportFAQ";
import SupportTrust from "@/components/support/SupportTrust";
import SupportCTA from "@/components/support/SupportCTA";
import Footer from "@/components/Footer";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SupportHero />
      <SupportForm />
      <SupportFAQ />
      <SupportTrust />
      <SupportCTA />
      <Footer />
    </div>
  );
};

export default Support;
