import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download } from "lucide-react";

export const ProductsSection = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet <span className="gradient-text">Centaur</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our autonomous manufacturing platform. Four-legged-wheeled design with 50+kg payload for heavy-duty precision metalworking in complex environments.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-muted/20 border-border overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                    Available Q4 2025
                  </Badge>
                  
                  <h3 className="text-3xl font-bold mb-4">Centaur Manufacturing Platform</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>50+kg payload capacity with four-legged-wheeled mobility</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>ROS2-based custom perception & locomotion system</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Integrated welding arms and precision manufacturing tools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Full-body sensing and motion planning for complex environments</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Reserve Centaur <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-border hover:bg-muted">
                      <Download className="mr-2 h-4 w-4" />
                      View Brochure
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-background to-muted/20 rounded-lg flex items-center justify-center p-8">
                    <img 
                      src="/lovable-uploads/7296d4ba-8b2b-4724-835c-cd1f39b14441.png"
                      alt="Terrier Robot Dog"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent rounded-lg flex items-end p-6">
                    <div className="text-sm text-muted-foreground">
                      Centaur Manufacturing Platform - Revolutionizing Metalwork
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};