import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";


export const WhyThisMattersSection = () => {
  console.log("WhyThisMattersSection is rendering");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            console.log("Why This Matters video section is in view, attempting autoplay...");
            videoRef.current.play().then(() => {
              console.log("Why This Matters video autoplay successful");
            }).catch((error) => {
              console.log("Why This Matters video autoplay failed:", error);
            });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Point and Click Manufacturing</span>
          </h2>
        </div>
        
        {/* Workflow diagram */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <img 
              src="/lovable-uploads/60160021-fe00-4fa5-881f-4f6d2dc6fe6b.png" 
              alt="AI-driven Point-and-Click Metal-working Stack workflow showing 3D reality capture, markup in CAD, and autonomous welding"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
        
        {/* Text content section - moved above video */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  From Assembly Lines to Anywhere
                </span>
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                For a century, manufacturing meant bringing parts to robots. This works for factories, but fails for the real world—shipyards, construction sites, custom installations.
              </p>
              <p className="text-xl font-semibold text-primary mt-4">
                Our L4 autonomy changes everything: bring robots to parts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-destructive/10 rounded-xl p-6 border border-destructive/20">
                <h4 className="text-xl font-bold text-destructive mb-4 flex items-center">
                  <span className="w-3 h-3 bg-destructive rounded-full mr-3"></span>
                  The Problem Today
                </h4>
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <h5 className="font-semibold text-destructive mb-1">Robots can't go where the work is</h5>
                    <p className="text-sm">Traditional industrial robots are fixed to factory floors - useless in shipyards, construction sites, and real-world manufacturing environments</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-destructive mb-1">Half a million missing metalworkers</h5>
                    <p className="text-sm">500,000 unfilled welding and metalworking jobs across America, with skilled workers retiring faster than replacements arrive</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-destructive mb-1">Complex projects stay stuck in the past</h5>
                    <p className="text-sm">Custom fabrication, ship construction, and infrastructure work still relies on human welders working in dangerous, repetitive conditions</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
                  The Solution
                </h4>
                <div className="space-y-3 text-foreground/80">
                  <div className="flex items-start text-sm">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                    <div>
                      <h5 className="font-semibold text-primary mb-1">Scan any worksite in 3D</h5>
                      <p>Create precise digital twins of ships, construction sites, or industrial facilities using advanced sensing</p>
                    </div>
                  </div>
                  <div className="flex items-start text-sm">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                    <div>
                      <h5 className="font-semibold text-primary mb-1">Point and click to assign work</h5>
                      <p>Engineers mark welding paths, grinding areas, and metalworking tasks directly on the 3D model from anywhere</p>
                    </div>
                  </div>
                  <div className="flex items-start text-sm">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                    <div>
                      <h5 className="font-semibold text-primary mb-1">Centaur navigates and executes</h5>
                      <p>Mobile robot carries 150kg+ tools, climbs over obstacles, and performs precision metalwork autonomously</p>
                    </div>
                  </div>
                  <div className="flex items-start text-sm">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                    <div>
                      <h5 className="font-semibold text-primary mb-1">Works safely alongside humans</h5>
                      <p>Continuous monitoring and collision avoidance enable mixed human-robot worksites</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6 border border-primary/30">
                <p className="text-lg font-semibold text-foreground mb-2">
                  <span className="text-primary">Result:</span> Manufacturing anywhere, managed by fewer specialists, at industrial scale.
                </p>
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  This is 21st century manufacturing.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature cards */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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

        <div className="max-w-5xl mx-auto relative">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-card">
            <video
              ref={videoRef}
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
              controls
              onPlay={() => {
                setIsPlaying(true);
                console.log("Why This Matters video started playing");
              }}
              onPause={() => {
                setIsPlaying(false);
                console.log("Why This Matters video paused");
              }}
              onLoadedData={() => {
                console.log("Why This Matters video loaded successfully");
              }}
              onError={(e) => {
                console.error("Why This Matters video error:", e);
              }}
            >
              <source src={`/videos/whyMatters.mp4?v=${Date.now()}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Button
                  onClick={togglePlay}
                  size="lg"
                  className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full w-20 h-20"
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};