import { Separator } from "@/components/ui/separator";
import xLogo from "@/assets/x-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="col-span-1 md:col-span-2 max-w-md">
          <div className="flex items-center space-x-2 mb-4">
            <img 
              src="/lovable-uploads/d2120570-ec71-47ea-95c6-a085c9571cbe.png" 
              alt="Rainier Labs" 
              className="h-8"
            />
          </div>
          <p className="text-muted-foreground mb-6 max-w-md">
            We're building the Physical AI stack for mobile robotic metalworking
          </p>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>&copy; 2025 Rainier Labs. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://x.com/LabsRainier" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
              <img src={xLogo} alt="X/Twitter" className="h-4 w-4" />
              Twitter/X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};