"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

const SupportHero = () => {
  return (
    <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-secondary" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            We're Here to Help You{" "}
            <span className="text-gradient-brand">Turn the Page</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you have questions about writing, editing services, billing,
            or technical issues, the Turning Pages team is ready to support you
            at every step of your publishing journey. We're just a message away.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="lg" className="group">
              <a
                href="https://app.turningpages.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Now Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button asChild variant="heroOutline" size="lg">
              <a
                href="https://app.turningpages.io"
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
};

export default SupportHero;
