"use client";

import { motion } from "framer-motion";
import { Pencil, Shield, Award, Users } from "lucide-react";

const FeatureProfessionalEditing = () => {
  const services = [
    {
      title: "Developmental Editing",
      description:
        "Big-picture feedback on structure, pacing, and narrative arc",
    },
    {
      title: "Line Editing",
      description: "Sentence-level refinement for flow and style consistency",
    },
    {
      title: "Copyediting",
      description: "Grammar, punctuation, and mechanical accuracy",
    },
    {
      title: "Proofreading",
      description: "Final polish to catch any remaining errors",
    },
    {
      title: "Fact-Checking",
      description:
        "Verify accuracy of historical, scientific, and factual claims",
    },
    {
      title: "Formatting",
      description: "Prepare your manuscript for publication standards",
    },
  ];

  return (
    <section className="py-24 bg-cta-gradient text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary-foreground/20 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground mb-6">
            <Pencil className="w-4 h-4" />
            <span className="text-sm font-semibold">Professional Editing</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Human-Grade Editing for{" "}
            <span className="text-primary">Publishing-Ready</span> Quality
          </h2>

          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Submit your manuscript for comprehensive editorial services
            delivered by experienced editors supported by TAV tools. From
            developmental feedback to final proofreading, we ensure your book
            meets professional publishing standards.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-foreground/15 transition-colors"
            >
              <h4 className="font-semibold text-primary-foreground mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-primary-foreground/70">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {[
            { icon: Shield, text: "Confidential Process" },
            { icon: Award, text: "Industry Standards" },
            { icon: Users, text: "Expert Editors" },
          ].map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 text-primary-foreground/80"
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureProfessionalEditing;
