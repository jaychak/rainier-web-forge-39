import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    Fixed robots need controlled environments
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    500,000 unfilled manufacturing jobs
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    High-mix, low-volume work stays manual
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
                  The Solution
                </h4>
                <div className="space-y-3 text-foreground/80">
                  <div className="flex items-center text-sm">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">1</span>
                    Upload 3D site models
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">2</span>
                    Engineers mark tasks digitally
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">3</span>
                    Centaur executes autonomously
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">4</span>
                    Safe human coexistence
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