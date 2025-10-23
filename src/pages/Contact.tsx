import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Let's start your journey to finding the perfect luxury property
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Map Section */}
      
      <section className="h-[500px] bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.29976678958!2d74.4857705!3d31.4884432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919094da45e1253%3A0x189773f2af8aedf4!2sCCA%201%2C%20Sector%20Q%20Phase%207%2C%20Lahore!5e0!3m2!1sen!2s!4v1761248666870!5m2!1sen!2s" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
