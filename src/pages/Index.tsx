import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SolutionSection } from "@/components/SolutionSection";
import { WhyThisMattersSection } from "@/components/WhyThisMattersSection";
import { OurStorySection } from "@/components/OurStorySection";
import { PerceptionSection } from "@/components/PerceptionSection";
import { TechnologySection } from "@/components/TechnologySection";
import { ApplicationsSection } from "@/components/ApplicationsSection";
import { ProductsSection } from "@/components/ProductsSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SolutionSection />
      <WhyThisMattersSection />
      <OurStorySection />
      <PerceptionSection />
      <TechnologySection />
      <ApplicationsSection />
      <ProductsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
