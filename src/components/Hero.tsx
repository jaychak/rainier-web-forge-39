import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import CentaurWeldGrind from "@/assets/CentaurWeldGrind.png";
import CentaurDrill from "@/assets/CentaurDrill1.png";
import CentaurDrill2 from "@/assets/CentaurDrill-2.png";
import WeldingRobot4 from "@/assets/weldingRobot4.png";
import Zeus1Robot from "@/assets/weldingRobot4.png";

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    WeldingRobot4,
    CentaurWeldGrind,
    CentaurDrill,
    CentaurDrill2
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Image Section with Text Overlay */}
      <section id="home" className="h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Centaur robot ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        
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
              <div className="text-muted-foreground">Unfilled Manufacturing Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Autonomous</div>
              <div className="text-muted-foreground">Manufacturing Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Zeus 1 Product Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold">
                <span className="gradient-text">Zeus 1</span>
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                Welding.<br />
                Autonomous.<br />
                24/7.
              </h3>
              <p className="text-xl text-muted-foreground">
                MIG welding robot that moves, works, and never stops.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div dangerouslySetInnerHTML={{
                  __html: `<stripe-buy-button
                    buy-button-id="buy_btn_1SQXvgKtSa48KsEIFPiGwZo1"
                    publishable-key="pk_live_51PVEaoKtSa48KsEIGAScNJciZ1bPtV9X6Shz13iGZ0pN4ZcwIk1OXbImz3wh2oVsbqJyQ9L5Z1HAeZJeWiB97lIk00TapxenkZ"
                  >
                  </stripe-buy-button>`
                }} />
              </div>
            </div>
            <div className="relative">
              <img
                src={Zeus1Robot}
                alt="Zeus 1 autonomous welding robot"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};