import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TeamSection from "@/components/TeamSection";
import { CheckCircle2 } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  const values = [
    "Integrity and transparency in every transaction",
    "Personalized service tailored to your needs",
    "Extensive market knowledge and expertise",
    "Commitment to excellence and client satisfaction",
    "Strong relationships with industry leaders",
    "Innovative marketing strategies",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              About <span className="text-gradient">Domus Property</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Setting the standard for luxury real estate excellence since 2008
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 2008, Domus Property emerged from a vision to redefine luxury real estate. 
                  What started as a boutique agency has grown into one of the most respected names in 
                  premium property services.
                </p>
                <p>
                  Our journey has been marked by an unwavering commitment to excellence, integrity, and 
                  personalized service. We've successfully facilitated over 500 luxury property transactions, 
                  helping discerning clients find their perfect homes and investment properties.
                </p>
                <p>
                  Today, we continue to set new standards in the industry, combining traditional values 
                  with innovative approaches to deliver exceptional results for our clients.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden luxury-shadow animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
                alt="Our Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-background rounded-lg luxury-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      <Footer />
    </div>
  );
};

export default About;
