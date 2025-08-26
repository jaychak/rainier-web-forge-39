import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const WhyThisMattersSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section className="py-20">
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
              controls
              muted
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/videos/whyMatters.mp4" type="video/mp4" />
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