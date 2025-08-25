import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            console.log('Video section is in view, attempting autoplay...');
            // Try to play the video when it comes into view
            videoRef.current.play()
              .then(() => {
                console.log('Video autoplay successful');
                setIsPlaying(true);
              })
              .catch((error) => {
                console.log('Video autoplay failed:', error);
                // Autoplay failed, which is expected in most browsers
                // The play button overlay will remain visible
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
    <section ref={sectionRef} id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Terrier in Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch Terrier navigate complex indoor and outdoor environments with precision and intelligence
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
                console.log('Video started playing');
                setIsPlaying(true);
              }}
              onPause={() => {
                console.log('Video paused');
                setIsPlaying(false);
              }}
              onLoadedData={() => console.log('Video loaded successfully')}
              onError={(e) => console.log('Video error:', e)}
              poster="/lovable-uploads/7296d4ba-8b2b-4724-835c-cd1f39b14441.png"
            >
              <source src={`/videos/terrierOperations.mp4?v=${Date.now()}`} type="video/mp4" />
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
              See how Terrier's advanced AI enables autonomous operation across diverse environments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};