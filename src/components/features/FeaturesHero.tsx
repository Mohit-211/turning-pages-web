"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const FeaturesHero = () => {
  return (
    <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Everything You Need to{" "}
              <span className="text-gradient-brand">
                Write, Edit, and Publish
              </span>{" "}
              Smarter
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Turning Pages blends TAV-assisted creativity with
              professional-grade editorial workflows to help authors go from
              blank page to polished manuscript. Discover every tool at your
              fingertips.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg" className="group">
                <a
                               href="https://app.turningpages.io/signup"

                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Now Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button asChild variant="heroOutline" size="lg">
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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <Image
                src="/assets/features-hero.jpg"
                alt="Manuscript editor with TAV suggestions"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;
