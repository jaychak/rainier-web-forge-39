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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          key={currentVideoIndex}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          onError={() => console.log('Video error, falling back to image')}
        >
          <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">L4 Autonomy</span>
            <br />
            for 21st Century Manufacturing
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Instead of bringing parts to robots, we bring robots to parts. Autonomous metalworking in real construction environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Reserve Centaur <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-muted px-8 py-3"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50+kg</div>
              <div className="text-muted-foreground">Payload Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">500K</div>
              <div className="text-muted-foreground">Unfilled Manufacturing Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Autonomous</div>
              <div className="text-muted-foreground">Metalworking Platform</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};