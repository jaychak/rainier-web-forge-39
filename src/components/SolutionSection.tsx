import { Card, CardContent } from "@/components/ui/card";

export const SolutionSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="gradient-text">Physics Advantage</span>
          </h2>
        </div>
        
        {/* Formatted content section */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Breaking Physical Limitations
                </span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Traditional industrial robots are stationary. Humanoids max out at 5-10kg due to support polygon limitations. Our four-legged-wheeled design carries 250+kg whilst navigating complex environments wheeled platforms cannot.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-destructive/10 rounded-xl p-6 border border-destructive/20">
                <h4 className="text-xl font-bold text-destructive mb-4 flex items-center">
                  <span className="w-3 h-3 bg-destructive rounded-full mr-3"></span>
                  Traditional Limits
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    Stationary industrial robots
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    Humanoids limited to 5-10kg
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    Support polygon constraints
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
                  Our Breakthrough
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    250+kg payload capacity
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Complex environment navigation
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    4x larger support polygon
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6 border border-primary/30">
                <p className="text-lg font-semibold text-foreground">
                  Centaur's support polygon is greater than 4x larger than humanoid footprints, keeping the center of mass stable even with heavy industrial payloads that would tip over two-legged robots.
                </p>
              </div>
            </div>

            <div className="text-center">
              <img 
                src="/lovable-uploads/5ce270f4-5558-4bbc-8b22-178e2d548355.png"
                alt="Why a Quadruped Outperforms a Humanoid for Industrial Load Carrying - Greater stability and larger support polygon"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-muted/20 border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 gradient-text">3D Site Mapping</h3>
              <p className="text-muted-foreground text-sm">Gaussian Splatting models creating CAD-importable 3D environments</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-card to-muted/20 border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 gradient-text">Engineer Markup</h3>
              <p className="text-muted-foreground text-sm">Technician markup of welding seams and manufacturing tasks</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-card to-muted/20 border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 gradient-text">Autonomous Execution</h3>
              <p className="text-muted-foreground text-sm">Safety-first autonomous operation alongside human co-workers</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-card to-muted/20 border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 gradient-text">250+kg Payload</h3>
              <p className="text-muted-foreground text-sm">Heavy-duty precision metalworking in mobile autonomous platform</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};