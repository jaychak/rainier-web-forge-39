import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";

export const OurStorySection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            console.log("Our Story video section is in view, attempting autoplay...");
            videoRef.current.play().then(() => {
              console.log("Our Story video autoplay successful");
            }).catch((error) => {
              console.log("Our Story video autoplay failed:", error);
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
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the evolution of Terrier's design and engineering from the very beginning - 
              a journey of innovation, challenges, and breakthrough solutions.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-background/50 backdrop-blur-sm border border-border/50">
            <div className="relative">
              <video
                ref={videoRef}
                className="w-full h-auto"
                controls
                autoPlay
                muted
                loop
                playsInline
                onPlay={() => {
                  setIsPlaying(true);
                  console.log("Our Story video started playing");
                }}
                onPause={() => {
                  setIsPlaying(false);
                  console.log("Our Story video paused");
                }}
                onLoadedData={() => {
                  console.log("Our Story video loaded successfully");
                }}
                onError={(e) => {
                  console.error("Our Story video error:", e);
                }}
              >
                <source src={`/videos/terrierStory.mp4?v=${Date.now()}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-300 group"
                  aria-label="Play Our Story video"
                >
                  <div className="bg-primary hover:bg-primary/90 rounded-full p-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};