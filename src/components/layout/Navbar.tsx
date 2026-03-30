"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Credits", href: "/credits" },
  { name: "Support", href: "/support" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* ---------------- SCROLL EFFECT ---------------- */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Turning Pages Logo"
              width={100}
              height={80}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`font-medium transition-colors ${pathname === link.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="https://app.turningpages.io/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >

                <Button variant="hero">Try Now</Button>
              </a>
              <a
                href="https://app.turningpages.io/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >

                <Button variant="heroOutline">Log In</Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-6 pb-4"
          >
            <ul className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors block py-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <a
                href="https://app.turningpages.io/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full" size="lg">
                  Try Now
                </Button>
              </a>

              <a
                href="https://app.turningpages.io/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="heroOutline" className="w-full" size="lg">
                  Log In
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
