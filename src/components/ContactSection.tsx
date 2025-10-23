import { MapPin, Phone, Mail } from "lucide-react";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "CCA1 , DHA phase 6 Lahore",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "03244439779",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hamza4u11@gmail.com",

      // details: "sahmedwaqas2019@gmail.com",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to find your dream property? Contact us today and let's make it happen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{info.title}</h3>
                  {info.title === "Call Us" ? (
                    <a
                      href={`tel:${info.details}`}
                      className="text-accent font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-accent/50 rounded"
                      aria-label={`Call us at ${info.details}`}
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.details}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Sunday: 10:00 AM - 10:00 PM</p>
                {/* <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: By Appointment</p> */}
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg luxury-shadow animate-scale-in">
            <form className="space-y-6" onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const payload = {
                firstName: data.get("firstName") as string,
                lastName: data.get("lastName") as string,
                email: data.get("email") as string,
                phone: data.get("phone") as string,
                message: data.get("message") as string,
              };
              try {
                const res = await fetch("/api/send-email", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                });
                if (!res.ok) throw new Error("Request failed");
                Swal.fire({
                  icon: "success",
                  title: "Success!",
                  text: "Your message has been sent successfully.",
                  confirmButtonColor: "#d946ef",
                });
                form.reset();
              } catch (err) {
                Swal.fire({
                  icon: "error",
                  title: "Oops!",
                  text: "Failed to send message. Please try again.",
                  confirmButtonColor: "#d946ef",
                });
              }
            }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input id="firstName" name="firstName" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" name="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" required />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <Input id="phone" name="phone" type="tel" placeholder="+92 (000) 000-0000" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your dream property..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-primary">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
