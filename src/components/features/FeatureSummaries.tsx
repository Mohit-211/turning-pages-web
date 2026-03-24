"use client";

import { motion } from "framer-motion";
import { FileText, BookOpen, ScrollText, Sparkles } from "lucide-react";

const FeatureSummaries = () => {
  return (
    <section className="py-24 bg-muted/30">
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
              <FileText className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Summaries & Synopses
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Capture Your Story's{" "}
              <span className="text-gradient-brand">Essence</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Generate chapter-wise summaries, mid-book recaps, and full-book
              synopses with AI assistance. Perfect for reviewing your story's
              structure, preparing marketing descriptions, or creating query
              letters for agents and publishers.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: BookOpen,
                  title: "Chapter Summaries",
                  desc: "Quick recap of each chapter",
                },
                {
                  icon: ScrollText,
                  title: "Book Synopsis",
                  desc: "Complete story overview",
                },
                {
                  icon: Sparkles,
                  title: "Marketing Copy",
                  desc: "Blurbs and taglines",
                },
                {
                  icon: FileText,
                  title: "Query Letters",
                  desc: "Agent-ready pitches",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-4 shadow-soft border border-border"
                >
                  <item.icon className="w-8 h-8 text-secondary mb-3" />
                  <h4 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
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
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">
                  Generated Synopsis
                </span>
              </div>

              <div className="prose prose-sm">
                <p className="text-muted-foreground leading-relaxed italic">
                  "When Detective Morgan discovers a series of cryptic letters
                  hidden in the walls of an abandoned warehouse, she uncovers a
                  decades-old conspiracy that threatens to upend everything she
                  believed about her city's founding families. Racing against
                  time as the killer resurfaces, she must piece together the
                  truth before becoming the next victim in a deadly game of
                  secrets and lies..."
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Generated from 12 chapters
                </span>

                <div className="flex gap-2">
                  <button className="text-xs font-medium text-primary hover:underline">
                    Regenerate
                  </button>
                  <button className="text-xs font-medium text-secondary hover:underline">
                    Edit
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-primary/5 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSummaries;
