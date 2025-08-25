import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Wrench, Zap } from "lucide-react";

export const AboutSection = () => {
  const points = [
    {
      icon: TrendingUp,
      title: "AI-Powered Robotics",
      description: "Breakthroughs are making real-world, effective automation a reality."
    },
    {
      icon: Users,
      title: "Industry Automation", 
      description: "Solving labor shortages and meeting rising compliance demands globally."
    },
    {
      icon: Wrench,
      title: "Demand in Supply Chains",
      description: "Global manufacturing rise fuels need for physical AI."
    },
    {
      icon: Zap,
      title: "Physical AI Frontier",
      description: "We are driving the next technological leap forward."
    }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We're Here to <span className="gradient-text">Revolutionise</span> the World of Robotics
          </h2>
          
          <div className="text-lg text-muted-foreground space-y-4 text-left">
            <p>
              At Rainier Labs, we're making real-world robotics a practical solution for industries 
              facing today's biggest challenges. As AI models advance, they're unlocking unprecedented 
              automation capabilities.
            </p>
            
            <p>
              This is vital as businesses worldwide contend with labor shortages and the complexities 
              of compliance. With manufacturing shifting towards the US and India, and the dawn of AGI, 
              physical AI is the clear next leap.
            </p>
            
            <p className="font-semibold text-foreground">
              Rainier Labs isn't just watching this future; we're building it.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {points.map((point, index) => (
            <Card key={index} className="bg-gradient-to-br from-background to-muted/20 border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};