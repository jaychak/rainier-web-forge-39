import { Card, CardContent } from "@/components/ui/card";
import { Eye, Brain, Zap, Shield, Battery, Wrench } from "lucide-react";

export const TechnologySection = () => {
  const features = [
    {
      icon: Brain,
      title: "ROS2 Perception System",
      description: "Custom perception & locomotion system with trained RL models for walking"
    },
    {
      icon: Eye,
      title: "Advanced Camera/LIDAR", 
      description: "In-house developed vision systems for precision navigation and mapping"
    },
    {
      icon: Zap,
      title: "50+kg Payload",
      description: "Heavy-duty capacity that humanoids cannot achieve due to support polygon limits"
    },
    {
      icon: Shield,
      title: "Vertically Integrated",
      description: "Every aspect of design and software developed in-house for optimal performance"
    },
    {
      icon: Battery,
      title: "Complex Environment Navigation",
      description: "Four-legged-wheeled design navigates where wheeled platforms cannot"
    },
    {
      icon: Wrench,
      title: "Manufacturing Ready",
      description: "Welding/grinding tooltip + arm integration with full-body sensing and motion planning"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Physical AI Infrastructure for the <span className="gradient-text">Trillion Dollar Industrial Economy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vertically integrated design and software. From advanced camera/LIDAR perception to specifically trained RL models for walking, 
            we build every component in-house to scale autonomous metalworking platforms.
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