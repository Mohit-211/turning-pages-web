"use client";

import { motion } from "framer-motion";
import { Shield, Lock, UserCheck, Eye } from "lucide-react";

const FeaturesTrust = () => {
  const trustItems = [
    {
      icon: Lock,
      title: "Secure Accounts",
      description:
        "Enterprise-grade encryption protects your login credentials and personal data",
    },
    {
      icon: Eye,
      title: "Private Manuscripts",
      description:
        "Your work is never shared, sold, or used for TAV training without consent",
    },
    {
      icon: UserCheck,
      title: "Human-Reviewed Editing",
      description:
        "Professional editors sign NDAs and follow strict confidentiality protocols",
    },
  ];

  return (
    <section className="py-24 bg-accent/50 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-semibold">Trust & Security</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Your Story,{" "}
            <span className="text-gradient-brand">Your Privacy</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We take the security of your creative work seriously. Your
            manuscripts and personal information are protected at every step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-soft border border-border text-center"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-secondary" />
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {item.title}
              </h3>

              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesTrust;
