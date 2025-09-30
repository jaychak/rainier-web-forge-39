import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSources = [
    "/videos/welding1_.mp4",
    "/videos/welding2_.mp4", 
    "/videos/welding3_.mp4",
    "/videos/welding4_.mp4"
  ];

  const handleVideoEnd = () => {
    if (currentVideoIndex < videoSources.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setCurrentVideoIndex(0);
    }
  };

  return (
    <>
      {/* Video Section with Text Overlay */}
      <section id="home" className="h-screen relative overflow-hidden">
        <video
          ref={videoRef}
          key={currentVideoIndex}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          onError={() => console.log('Video error:', videoSources[currentVideoIndex])}
        >
          <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        </video>
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                <span className="gradient-text" style={{ textShadow: 'none' }}>L4 Autonomy</span>
                <br />
                for 21st Century Manufacturing
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                One Platform. Infinite Apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">250+kg</div>
              <div className="text-muted-foreground">Payload Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">500K</div>
              <div className="text-muted-foreground">Unfilled Welding Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Autonomous</div>
              <div className="text-muted-foreground">Metalworking Platform</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};