import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/d2120570-ec71-47ea-95c6-a085c9571cbe.png" 
              alt="Rainier Labs" 
              className="h-8"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#technology" className="text-muted-foreground hover:text-foreground transition-colors">
              Technology
            </a>
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Contact
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};