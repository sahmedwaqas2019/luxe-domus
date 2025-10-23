import { Linkedin, Mail } from "lucide-react";
import usman from "@/assets/muhammad-usman.jpeg";
import adeel from "@/assets/adeel.png";
import hamza from "@/assets/hamza.jpeg";
import nabeel from "@/assets/nabeel.jpeg" ;


const TeamSection = () => {
  const team = [
    {
      name: "Muhammad Usman",
      role: "CEO & Founder",
      image: usman,
    },
    {
      name: "Muhammad Adeel",
      role: "Senior Property Consultant",
      image: adeel
    },
    {
      name: "Nabeel Ansar",
      role: "Luxury Homes Specialist",
      image: nabeel,
    },
    {
      name: "Muhammad Hamza",
      role: "Investment Advisor",
      image: hamza
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated professionals bring decades of combined experience to help you find your perfect property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 luxury-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-primary hover:bg-accent/90 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-primary hover:bg-accent/90 transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
