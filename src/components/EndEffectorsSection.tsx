import { Hammer, Gamepad2, Gauge, Zap, Disc3, Drill, PackageOpen, Search, Paintbrush } from "lucide-react";

const applications = [
  {
    icon: Hammer,
    title: "Riveting",
    description: "High-force riveting operations for structural assembly applications"
  },
  {
    icon: Gamepad2,
    title: "Switchboard Control",
    description: "Operate buttons, switches, and control panels with human-like dexterity"
  },
  {
    icon: Gauge,
    title: "Gauge Reading",
    description: "Visual inspection and data collection from analog and digital instruments"
  },
  {
    icon: Zap,
    title: "Welding",
    description: "Automated arc welding with precision path control and real-time quality monitoring"
  },
  {
    icon: Disc3,
    title: "Grinding & Finishing",
    description: "Surface preparation, deburring, and polishing with adaptive force control"
  },
  {
    icon: Drill,
    title: "Drilling & Fastening",
    description: "Precise hole drilling and automated bolting with torque verification"
  },
  {
    icon: PackageOpen,
    title: "Material Handling",
    description: "Adaptive gripping and precise manipulation of varied workpieces"
  },
  {
    icon: Search,
    title: "Inspection & NDT",
    description: "Non-destructive testing with ultrasonic, thermal, and visual sensors"
  },
  {
    icon: Paintbrush,
    title: "Coating & Painting",
    description: "Automated spray application for protective coatings and finishes"
  }
];

export const EndEffectorsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">End-Effectors as Apps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your mobile robot into a versatile workforce. Simply swap end-effectors like you'd 
            switch apps on your phone. From heavy fabrication to delicate control panel operations, 
            deploy the right tool for every job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {app.title}
                </h3>
                <p className="text-muted-foreground">
                  {app.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
