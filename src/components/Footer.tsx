import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/" },
      { name: "Careers", path: "/" },
    ],
    Properties: [
      { name: "Gallery", path: "/gallery" },
      { name: "Featured Listings", path: "/" },
      { name: "Sold Properties", path: "/" },
    ],
    Support: [
      { name: "Contact Us", path: "/contact" },
      { name: "FAQ", path: "/" },
      { name: "Privacy Policy", path: "/" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-gradient mb-4">DOMUS</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted partner in luxury real estate. Discover exceptional properties and unmatched service.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-primary-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {currentYear} Domus Property. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
