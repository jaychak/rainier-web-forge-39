import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EndEffectorsSection } from "@/components/EndEffectorsSection";
import { SolutionSection } from "@/components/SolutionSection";
import { OurStorySection } from "@/components/OurStorySection";
import { PerceptionSection } from "@/components/PerceptionSection";
import { TechnologySection } from "@/components/TechnologySection";

import { ProductsSection } from "@/components/ProductsSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <EndEffectorsSection />
      <SolutionSection />
      <OurStorySection />
      <PerceptionSection />
      <TechnologySection />
      
      <ProductsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
