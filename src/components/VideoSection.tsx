import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const videoSources = [
    "/videos/welding1_.mp4",
    "/videos/welding2_.mp4", 
    "/videos/welding3_.mp4",
    "/videos/welding4_.mp4"
  ];

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

  const handleVideoEnd = () => {
    if (currentVideoIndex < videoSources.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      // Loop back to first video
      setCurrentVideoIndex(0);
    }
  };

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
            <span className="gradient-text">Autonomous Welding in Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our Centaur platform perform precision autonomous welding operations in real manufacturing environments
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-card">
            <video
              ref={videoRef}
              key={currentVideoIndex}
              className="w-full h-auto"
              controls
              autoPlay
              muted
              playsInline
              onPlay={() => {
                console.log(`Video ${currentVideoIndex + 1} started playing`);
                setIsPlaying(true);
              }}
              onPause={() => {
                console.log('Video paused');
                setIsPlaying(false);
              }}
              onEnded={handleVideoEnd}
              onLoadedData={() => console.log(`Video ${currentVideoIndex + 1} loaded successfully`)}
              onError={(e) => console.log('Video error:', e)}
              poster="/lovable-uploads/7296d4ba-8b2b-4724-835c-cd1f39b14441.png"
            >
              <source src={`${videoSources[currentVideoIndex]}?v=${Date.now()}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">
              Video {currentVideoIndex + 1} of {videoSources.length}
            </div>
            
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
              Autonomous welding sequence demonstrating precision metalworking capabilities in real environments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};