import { Home, Award, Users } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Home, value: "500+", label: "Properties Sold" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Domus Property</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 15 years of excellence in luxury real estate, Domus Property has become 
              synonymous with premium properties and exceptional service. We specialize in connecting 
              discerning clients with their dream homes.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our commitment to excellence, integrity, and personalized service has made us a 
              trusted name in the luxury real estate market.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-lg overflow-hidden luxury-shadow animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Property"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
