export const ApplicationsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Autonomous Metalworking</span> Verticals
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            High-mix, low-volume manufacturing where mobile autonomous metalworking shines. 
            US reshoring boom with city-sized datacenters requiring massive metalwork creates perfect market timing.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <img 
            src="/lovable-uploads/b1ab7285-e695-4866-bc0e-930496b2f862.png"
            alt="Autonomous Metalworking Verticals"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div>
            <h3 className="font-semibold gradient-text">Autonomous Welding</h3>
          </div>
          <div>
            <h3 className="font-semibold gradient-text">Metal 3D Printing</h3>
          </div>
          <div>
            <h3 className="font-semibold gradient-text">Mobile CNC Machining</h3>
          </div>
          <div>
            <h3 className="font-semibold gradient-text">Ship Building</h3>
          </div>
          <div>
            <h3 className="font-semibold gradient-text">Datacentre Construction</h3>
          </div>
          <div>
            <h3 className="font-semibold gradient-text">Grinding & Finishing</h3>
          </div>
          <div>
            <h3 className="font-semibold gradient-text">Heavy Fabrication</h3>
          </div>
          <div>
            <h3 className="font-semibold gradient-text">Precision Metalwork</h3>
          </div>
        </div>
      </div>
    </section>
  );
};