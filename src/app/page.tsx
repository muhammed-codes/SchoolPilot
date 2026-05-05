import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import FeaturesSection from "@/components/FeaturesSection";
import RolesSection from "@/components/RolesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const HomePage = () => (
  <>
    <Navbar />
    <main id="main-content">
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <RolesSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default HomePage;
