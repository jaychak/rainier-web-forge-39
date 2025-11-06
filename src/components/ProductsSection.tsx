import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Download } from "lucide-react";
import ZeusWeldingRobot from "@/assets/zeusWeldingRobot.png";

export const ProductsSection = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced autonomous platforms designed for precision manufacturing work and inspection in challenging environments.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="zeus" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-12 bg-muted/50">
              <TabsTrigger 
                value="zeus" 
                className="text-sm md:text-base py-2 px-4 data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                Zeus 1
              </TabsTrigger>
              <TabsTrigger 
                value="centaur" 
                className="text-sm md:text-base py-2 px-4 data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                Centaur Platform
              </TabsTrigger>
              <TabsTrigger 
                value="terrier" 
                className="text-sm md:text-base py-2 px-4 data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                Terrier Robot Dog
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="centaur" className="mt-0">
              <Card className="bg-gradient-to-br from-card to-muted/20 border-border overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div>
                      <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                        Available Q4 2025
                      </Badge>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">Centaur Autonomous Manufacturing Platform</h3>
                      
                      <div className="space-y-3 md:space-y-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="text-sm md:text-base">250+kg payload capacity with four-legged-wheeled mobility</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="text-sm md:text-base">ROS2-based custom perception & locomotion system</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="text-sm md:text-base">Integrated arms for precision manufacturing</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="text-sm md:text-base">Full-body sensing and motion planning for complex environments</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="order-first lg:order-last">
                      <div className="aspect-square bg-gradient-to-br from-background to-muted/20 rounded-lg flex items-center justify-center p-6 md:p-8">
                        <img 
                          src="/lovable-uploads/69ce7302-a2d6-45c2-b953-5a2849e8682d.png"
                          alt="Centaur Autonomous Manufacturing Platform"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <div className="text-xs md:text-sm text-muted-foreground">
                          Centaur Autonomous Manufacturing Platform - Revolutionizing Manufacturing
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="terrier" className="mt-0">
              <Card className="bg-gradient-to-br from-card to-muted/20 border-border overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div>
                      <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                        Available Now
                      </Badge>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">Terrier Robot Dog</h3>
                      
                      <div className="space-y-3 md:space-y-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="text-sm md:text-base">Autonomous navigation and inspection capabilities</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="text-sm md:text-base">Advanced sensor suite for environmental mapping</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="text-sm md:text-base">Rugged design for challenging terrain</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="text-sm md:text-base">Real-time data collection and transmission</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative order-first lg:order-last">
                      <div className="aspect-square bg-gradient-to-br from-background to-muted/20 rounded-lg flex items-center justify-center p-6 md:p-8">
                        <img 
                          src="/lovable-uploads/7296d4ba-8b2b-4724-835c-cd1f39b14441.png"
                          alt="Terrier Robot Dog"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent rounded-lg flex items-end p-4 md:p-6">
                        <div className="text-xs md:text-sm text-muted-foreground">
                          Terrier Robot Dog - Autonomous Inspection & Navigation
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="zeus" className="mt-0">
              <Card className="bg-gradient-to-br from-card to-muted/20 border-border overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div>
                      <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                        Pre-Order: $100
                      </Badge>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">Zeus 1 Welding Robot</h3>
                      
                      <div className="space-y-3 md:space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                          <div>
                            <span className="font-semibold text-sm md:text-base">Mobile Autonomous Welding</span>
                            <p className="text-xs md:text-sm text-muted-foreground">Gasless MIG welding on a mobile robotic platform</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                          <div>
                            <span className="font-semibold text-sm md:text-base">Precision Welding</span>
                            <p className="text-xs md:text-sm text-muted-foreground">6-axis robotic arm with 922mm reach delivers repeatable, high-quality welds anywhere on the job site with all-terrain mobility</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                          <div>
                            <span className="font-semibold text-sm md:text-base">Industrial-Grade Performance</span>
                            <p className="text-xs md:text-sm text-muted-foreground">145A maximum output with dual voltage (110V/220V) capability handles a wide range of materials and thicknesses</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                          <div>
                            <span className="font-semibold text-sm md:text-base">AI-Powered Control</span>
                            <p className="text-xs md:text-sm text-muted-foreground">Intuitive ForgeOS software with drag-and-drop programming, real-time monitoring, and integrated vision system for seam tracking and quality inspection</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                          <div>
                            <span className="font-semibold text-sm md:text-base">Flexible Power Options</span>
                            <p className="text-xs md:text-sm text-muted-foreground">Operates on AC power umbilical with onboard battery backup, enabling deployment in diverse job site conditions</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                        <Button 
                          size="lg" 
                          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg md:text-xl px-8 py-6"
                          asChild
                        >
                          <a href="https://buy.stripe.com/dRmfZi4Fm1dVdqn4EP67S03" target="_blank" rel="noopener noreferrer">
                            Pre-Order: $100 <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="relative order-first lg:order-last">
                      <div className="aspect-square bg-gradient-to-br from-background to-muted/20 rounded-lg flex items-center justify-center p-6 md:p-8">
                        <img 
                          src={ZeusWeldingRobot}
                          alt="Zeus 1 autonomous welding robot"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent rounded-lg flex items-end p-4 md:p-6">
                        <div className="text-xs md:text-sm text-muted-foreground">
                          Zeus 1 - Autonomous Mobile Welding Robot
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};