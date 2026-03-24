"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const SupportCTA = () => {
  return (
    <section className="py-24 bg-cta-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-primary-foreground/10 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Still Have Questions? Let's Start Your Book Anyway
          </h2>

          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            Sometimes the best way to find answers is to dive in and explore.
            Start your writing journey today—our support team is always here if
            you need us along the way.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="ctaBanner" size="xl" className="group">
              <a
                href="https://app.turningpages.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Writing Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button asChild variant="ctaBannerOutline" size="xl">
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

export default SupportCTA;
