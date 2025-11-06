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
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Traditional industrial robots are anchored in place. Humanoid robots max out at 5-10kg payloads due to fundamental support polygon constraints. The Centaur changes the equation. Our four-legged wheeled platform delivers 250+kg payload capacity while navigating the complex, unstructured environments that wheeled systems can't handle. Purpose-built for welding and heavy industrial manipulation where stationary robots can't reach and wheeled platforms can't go.
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

            <div className="text-center">
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6 border border-primary/30">
                <p className="text-lg font-semibold text-foreground">
                  Centaur&apos;s support polygon is greater than 4x larger than humanoid footprints, keeping the center of mass stable even with heavy industrial payloads that would tip over two-legged robots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};