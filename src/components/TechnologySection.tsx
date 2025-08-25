import { Card, CardContent } from "@/components/ui/card";
import { Eye, Brain, Zap, Shield, Battery, Wrench } from "lucide-react";

export const TechnologySection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Driven",
      description: "Advanced AI models enabling unprecedented automation capabilities"
    },
    {
      icon: Eye,
      title: "Perception Optimized", 
      description: "LiDAR, IMU, RGBD camera and BioSense Nose for comprehensive sensing"
    },
    {
      icon: Zap,
      title: "User-Friendly",
      description: "Intuitive interfaces making robotics accessible to everyone"
    },
    {
      icon: Shield,
      title: "Durable and Agile",
      description: "Built to withstand industrial environments while maintaining agility"
    },
    {
      icon: Battery,
      title: "Long lasting Power",
      description: "Extended battery life for continuous operation"
    },
    {
      icon: Wrench,
      title: "Ready to Go",
      description: "Plug-and-play solution with minimal setup required"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building the Future of <span className="gradient-text">Physical AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Designing the next-gen of robotics from the actuator-up. Creating a future where intelligent 
            mobile robots are as ubiquitous and accessible as smartphones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-card to-muted/20 border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-2">Engineered & built in the USA</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
      </div>
    </section>
  );
};