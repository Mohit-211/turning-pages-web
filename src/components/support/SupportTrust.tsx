"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import Link from "next/link";

const SupportTrust = () => {
  const trustPoints = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description:
        "Your manuscripts and personal data are protected with enterprise-grade encryption at rest and in transit.",
    },
    {
      icon: Eye,
      title: "Your Work Stays Yours",
      description:
        "We never share, sell, or use your creative content for TAV training without your explicit consent.",
    },
    {
      icon: FileCheck,
      title: "Confidential Editing",
      description:
        "All editors sign strict NDAs and follow professional confidentiality protocols.",
    },
  ];

  return (
    <section className="py-24 bg-accent/50 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-secondary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Your Stories Are{" "}
            <span className="text-gradient-brand">Safe With Us</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand that your manuscript represents hours, months, or even
            years of creative work. That's why we take data privacy and content
            confidentiality seriously at every level.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-soft border border-border text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-secondary/10 to-transparent" />

              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <point.icon className="w-7 h-7 text-secondary" />
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {point.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-12 max-w-xl mx-auto"
        >
          For more details about how we protect your data, please review our{" "}
          <Link
            href="/privacy-policy"
            className="text-secondary hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-secondary hover:underline">
            Terms of Service
          </Link>
          .
        </motion.p>
      </div>
    </section>
  );
};

export default SupportTrust;
