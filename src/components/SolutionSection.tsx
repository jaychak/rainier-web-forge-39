import { Card, CardContent } from "@/components/ui/card";

export const SolutionSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rainier Labs: <span className="gradient-text">The Solution</span>
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <img 
            src="/lovable-uploads/10c071d4-2fdd-45af-8314-d1cde7be9209.png"
            alt="Rainier Labs Solution Overview"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-muted/20 border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 gradient-text">Physical AI Stack</h3>
              <p className="text-muted-foreground text-sm">Quadruped + Unique Sensor payloads + AI + Industrial Platform Integrations</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-card to-muted/20 border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 gradient-text">AI-Brain with VLA</h3>
              <p className="text-muted-foreground text-sm">Vision-Language-Action model for full robot autonomy</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-card to-muted/20 border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 gradient-text">'e-Nose' Technology</h3>
              <p className="text-muted-foreground text-sm">Particulate matter sensing capabilities beyond competitors</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-card to-muted/20 border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 gradient-text">Robot as a Service</h3>
              <p className="text-muted-foreground text-sm">RaaS model eliminating high upfront costs</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};