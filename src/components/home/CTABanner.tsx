"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-cta-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground mb-6">
            Your book deserves more than a rough draft.
          </h2>

          {/* Subtext */}
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-10">
            Stop rewriting. Start finishing. Turn your manuscript into a
            polished, publish-ready book with AI-powered tools and guided
            editing.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="ctaBanner" size="xl" className="group">
              <a
                href="https://app.turningpages.io/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Writing Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button asChild variant="ctaBannerOutline" size="xl">
              <a
                href="https://app.turningpages.io/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Log In
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
