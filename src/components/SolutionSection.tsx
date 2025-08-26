import { Card, CardContent } from "@/components/ui/card";

export const SolutionSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="gradient-text">Physics Advantage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Traditional industrial robots are stationary. Humanoids max out at 5-10kg due to support polygon limitations. Our four-legged-wheeled design carries 50+kg whilst navigating complex environments wheeled platforms cannot.
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our 4-legged-wheeled design - Centaur's support polygon (blue) is 4x larger than humanoid footprints (orange), keeping the center of mass stable even with heavy industrial payloads that would tip over two-legged robots.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <img 
            src="/lovable-uploads/c0bcc0cd-4b50-40d4-8239-a4fc0b392506.png"
            alt="Physics comparison showing quadruped vs humanoid support polygon and load-bearing capabilities"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
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
              <h3 className="text-lg font-semibold mb-2 gradient-text">50+kg Payload</h3>
              <p className="text-muted-foreground text-sm">Heavy-duty precision metalworking in mobile autonomous platform</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};