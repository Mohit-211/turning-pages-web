import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Support", href: "/support" },
  ],
  legal: [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo_footer.png"
                alt="Turning Pages Logo"
                width={150}
                height={150}
                priority
              />
            </Link>

            <p className="text-background/70 max-w-md mb-6 leading-relaxed">
              Where stories become books. Empowering writers with AI-powered
              tools and professional editing to bring their literary dreams to
              life.
            </p>

            <div className="flex gap-3">
              <Button variant="hero">Try Now</Button>
              <Button
                variant="outline"
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
                    href={link.href}
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
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Turning Pages. All rights reserved.
          </p>

          <p className="text-background/40 text-sm font-display italic">
            “Turning Pages — Where stories become books.”
          </p>
        </div>
      </div>
    </footer>
  );
}
