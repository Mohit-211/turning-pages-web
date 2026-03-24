"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Wand2,
  BookMarked,
  CheckCircle2,
  Pencil,
  Shield,
  FileText,
  Image,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI Drafting",
    description:
      "Generate ideas, expand thoughts, and break through writer’s block instantly.",
  },
  {
    icon: BookMarked,
    title: "Chapter Management",
    description:
      "Structure, reorder, and organize your book without losing flow.",
  },
  {
    icon: CheckCircle2,
    title: "Grammar & Style",
    description:
      "Real-time corrections that make your writing clear and polished.",
  },
  {
    icon: Pencil,
    title: "Professional Editing",
    description:
      "AI + editorial workflows that elevate your manuscript to publishable quality.",
  },
  {
    icon: Shield,
    title: "Plagiarism Detection",
    description:
      "Ensure originality with built-in plagiarism checks and citation support.",
  },
  {
    icon: FileText,
    title: "Smart Summaries",
    description:
      "Instantly create chapter summaries and compelling book synopses.",
  },
  {
    icon: Image,
    title: "Cover Generation",
    description:
      "Design beautiful, AI-powered book covers tailored to your story.",
  },
] as const;

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient-brand">Write Your Book</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From your first idea to a finished manuscript—every tool you need,
            all in one seamless writing experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild variant="hero" size="lg" className="group">
            <Link href="/features">
              Explore Features
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button asChild variant="secondary" size="lg">
            <Link href="/signup">Try Now</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
