"use client";

import { motion } from "framer-motion";
import { Feather, GraduationCap, Briefcase, Heart } from "lucide-react";

const audiences = [
  {
    icon: Feather,
    title: "Aspiring Authors",
    description: "First-time writers ready to bring their stories to life.",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "Business leaders sharing expertise through books.",
  },
  {
    icon: GraduationCap,
    title: "Educators",
    description: "Teachers creating educational content and textbooks.",
  },
  {
    icon: Heart,
    title: "Storytellers",
    description: "Anyone with a story worth telling to the world.",
  },
] as const;

export default function AudienceSection() {
  return (
    <section className="py-24 bg-background relative">
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
            Built for <span className="text-gradient-brand">Every Writer</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're writing your first novel or your tenth textbook,
            Turning Pages meets you where you are.
          </p>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center group"
              >
                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 via-accent to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-9 h-9 text-secondary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-semibold mb-2">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground">{audience.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
