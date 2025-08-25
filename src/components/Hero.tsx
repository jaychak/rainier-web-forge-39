import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/87990a21-52eb-48d1-8c41-848759b54e66.png"
          alt="Rainier Labs Robot in Industrial Setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/25"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Robots as a Service</span>
            <br />
            Building the Future of Physical AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transforming ideas into groundbreaking solutions with AI-powered robotics
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Reserve Terrier <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-muted px-8 py-3"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Q4 2025</div>
              <div className="text-muted-foreground">Delivery Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">$99</div>
              <div className="text-muted-foreground">Reservation Price</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">AI-Powered</div>
              <div className="text-muted-foreground">Next-Gen Technology</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};