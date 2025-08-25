export const ApplicationsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Inspection & Monitoring</span> Applications
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Multiple verticals served with one quadruped platform with one physical AI platform 
            (Robot + Gen-AI stack + integration)
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <img 
            src="/lovable-uploads/3222fed8-5ae4-4a01-8958-35b7547b3d53.png"
            alt="Inspection and Monitoring Applications"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div>
            <h3 className="font-semibold gradient-text">Data Centre</h3>
          </div>
          <div>
            <h3 className="font-semibold gradient-text">Oil and Gas</h3>
          </div>
          <div>
            <h3 className="font-semibold gradient-text">First Responder</h3>
          </div>
          <div>
            <h3 className="font-semibold gradient-text">Ship Building</h3>
          </div>
          <div>
            <h3 className="font-semibold gradient-text">Advanced Manufacturing</h3>
          </div>
          <div>
            <h3 className="font-semibold gradient-text">Power and Utility</h3>
          </div>
          <div>
            <h3 className="font-semibold gradient-text">Mining</h3>
          </div>
          <div>
            <h3 className="font-semibold gradient-text">Elder Care</h3>
          </div>
        </div>
      </div>
    </section>
  );
};