"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

const FeatureGrammarCheck = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Grammar & Spell Check
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Write with Confidence,{" "}
              <span className="text-gradient-brand">Error-Free</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our built-in TAV-lite editor highlights typos, punctuation issues,
              and minor language problems in real time. Accept or ignore
              suggestions instantly as you write, keeping your flow
              uninterrupted while maintaining polished prose.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                "Real-time corrections",
                "One-click accept",
                "Non-intrusive UI",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
              {/* Editor */}
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  The morning sun casted a golden glow over the{" "}
                  <span className="relative inline-block">
                    <span className="border-b-2 border-red-400 border-dashed">
                      quite
                    </span>
                    <span className="absolute -top-8 left-0 bg-red-50 text-red-600 text-xs px-2 py-1 rounded shadow-soft whitespace-nowrap">
                      Did you mean "quiet"?
                    </span>
                  </span>{" "}
                  village streets. Birds sang their{" "}
                  <span className="relative inline-block">
                    <span className="border-b-2 border-amber-400 border-dashed">
                      melodys
                    </span>
                    <span className="absolute -top-8 left-0 bg-amber-50 text-amber-600 text-xs px-2 py-1 rounded shadow-soft whitespace-nowrap">
                      melodies
                    </span>
                  </span>{" "}
                  from ancient oaks while the baker prepared fresh bread for the
                  day ahead.
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span className="text-sm text-muted-foreground">
                      2 suggestions found
                    </span>
                  </div>

                  <button className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                    <Sparkles className="w-4 h-4" />
                    Fix all
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/5 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrammarCheck;
