"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Feather } from "lucide-react";

const FeaturesCTA = () => {
  return (
    <section className="py-24 bg-cta-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-foreground/10 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-8">
            <Feather className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Your Story is Ready to Be Written
          </h2>

          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            Join thousands of authors who have transformed their ideas into
            published books with Turning Pages. Start your writing journey
            today.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="ctaBanner" size="xl" className="group">
              <a
                href="https://app.turningpages.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Now Free
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

export default FeaturesCTA;
