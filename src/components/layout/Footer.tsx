import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    navigation: [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
      { name: "Support", href: "/support" },
    ],
    legal: [
      { name: "Terms", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-gradient flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold">
                Turning Pages
              </span>
            </Link>
            <p className="text-background/70 max-w-md mb-6 leading-relaxed">
              Where stories become books. Empowering writers with AI-powered tools 
              and professional editing to bring their literary dreams to life.
            </p>
            <div className="flex gap-3">
              <Button variant="hero" size="default">
                Try Now
              </Button>
              <Button 
                variant="outline" 
                size="default"
                className="border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                Log In
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 Turning Pages. All rights reserved.
          </p>
          <p className="text-background/40 text-sm font-display italic">
            "Turning Pages — Where stories become books."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;