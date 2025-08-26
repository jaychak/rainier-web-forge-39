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
            <span className="gradient-text">Why This Matters?</span>
          </h2>
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