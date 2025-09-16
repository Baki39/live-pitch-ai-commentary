import { FootballHeader } from "@/components/FootballHeader";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { PricingSection } from "@/components/PricingSection";
import { MobileNavigation } from "@/components/MobileNavigation";

const Index = () => {
  // Mock user data - in real app this would come from auth context
  const user = null; // Set to null for demo, or use: { name: "Marko", plan: "premium" as const }

  return (
    <div className="min-h-screen bg-background">
      <FootballHeader user={user} />
      
      <main className="relative">
        <HeroSection />
        <FeaturesGrid />
        <PricingSection />
      </main>
      
      <MobileNavigation />
    </div>
  );
};

export default Index;