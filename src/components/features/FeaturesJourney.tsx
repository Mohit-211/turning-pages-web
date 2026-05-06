"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PenLine, Sparkles, Pencil, BookCheck } from "lucide-react";

const FeaturesJourney = () => {
  const steps = [
    {
      icon: PenLine,
      title: "Write",
      description:
        "Start with TAV-assisted drafting or upload your existing manuscript",
    },
    {
      icon: Sparkles,
      title: "Refine",
      description:
        "Use grammar checks and style suggestions to polish your prose",
    },
    {
      icon: Pencil,
      title: "Edit",
      description:
        "Submit for professional human editing and developmental feedback",
    },
    {
      icon: BookCheck,
      title: "Publish",
      description:
        "Export your publication-ready manuscript in multiple formats",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            From First Draft to{" "}
            <span className="text-gradient-brand">Final Book</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Turning Pages guides you through every stage of the writing journey.
            Whether you're starting from scratch or polishing a finished
            manuscript, our tools and services help you create a book you're
            proud of.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border h-full">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold -mt-16 md:hidden">
                  {index + 1}
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild variant="hero" size="lg" className="group">
            <a
              href="https://app.turningpages.io/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Writing Now
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
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesJourney;
