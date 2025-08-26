import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const PerceptionSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            console.log('Perception video section is in view, attempting autoplay...');
            videoRef.current.play()
              .then(() => {
                console.log('Perception video autoplay successful');
                setIsPlaying(true);
              })
              .catch((error) => {
                console.log('Perception video autoplay failed:', error);
              });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
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
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Advanced Perception</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time camera-LIDAR fusion creates detailed maps of the environment for the manufacturing robot to navigate autonomously on the shop floor
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-card">
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              autoPlay
              muted
              loop
              playsInline
              onPlay={() => {
                console.log('Perception video started playing');
                setIsPlaying(true);
              }}
              onPause={() => {
                console.log('Perception video paused');
                setIsPlaying(false);
              }}
              onLoadedData={() => console.log('Perception video loaded successfully')}
              onError={(e) => console.log('Perception video error:', e)}
            >
              <source src={`/videos/autNav.mp4?v=${Date.now()}`} type="video/mp4" />
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
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Real-time environmental mapping with advanced sensor fusion and AI-powered analysis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};