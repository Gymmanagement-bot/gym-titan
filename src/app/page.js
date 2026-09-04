import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SoftwareFeaturesSection from '@/components/SoftwareFeaturesSection';
import RolesSection from '@/components/RolesSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SoftwarePricingSection from '@/components/SoftwarePricingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SoftwareFeaturesSection />
      <RolesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <SoftwarePricingSection />
      <Footer />
    </main>
  );
}
