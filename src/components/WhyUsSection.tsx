import { Shield, Users, TrendingUp, Clock } from "lucide-react";

const WhyUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "15+ years of proven excellence in luxury real estate with unmatched market knowledge.",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Dedicated support tailored to your unique needs and preferences throughout your journey.",
    },
    {
      icon: TrendingUp,
      title: "Premium Portfolio",
      description: "Exclusive access to the finest luxury properties in the most desirable locations.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support ensuring we're always here when you need us.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Domus</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that expertise, dedication, and exceptional service can make in your real estate journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card luxury-shadow hover:scale-105 transition-transform duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-accent/10">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
