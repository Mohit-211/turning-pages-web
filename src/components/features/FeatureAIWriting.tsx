"use client";

import { motion } from "framer-motion";
import { Wand2, MessageSquare, Lightbulb, RefreshCw } from "lucide-react";

const FeatureAIWriting = () => {
  const capabilities = [
    {
      icon: Lightbulb,
      title: "Generate Ideas",
      description: "Describe your vision and let TAV draft initial content",
    },
    {
      icon: RefreshCw,
      title: "Expand & Rewrite",
      description: "Transform brief notes into full scenes and chapters",
    },
    {
      icon: MessageSquare,
      title: "Conversational Support",
      description: "Chat with TAV to overcome blocks and refine your voice",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Wand2 className="w-4 h-4" />
              <span className="text-sm font-semibold">
                TAV Writing Assist
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Draft Chapters in{" "}
              <span className="text-gradient-brand">Minutes, Not Days</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our TAV writing assist helps you generate initial drafts by
              simply describing your ideas. Expand scenes, rewrite passages for
              different tones, and overcome writer's block with conversational
              TAV support that understands your creative vision.
            </p>

            <div className="space-y-4">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-5 h-5 text-secondary" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {cap.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
              <div className="space-y-4">
                {/* User */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xs font-bold text-muted-foreground">
                      You
                    </span>
                  </div>
                  <div className="flex-1 bg-muted rounded-2xl rounded-tl-sm p-4">
                    <p className="text-sm text-foreground">
                      Write a tense opening scene where the detective arrives at
                      an abandoned warehouse at midnight...
                    </p>
                  </div>
                </div>

                {/* AI */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-gradient flex items-center justify-center">
                    <Wand2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1 bg-secondary/10 rounded-2xl rounded-tl-sm p-4 border-l-4 border-secondary">
                    <p className="text-sm text-foreground leading-relaxed">
                      The rusted gates groaned as Detective Morgan pushed
                      through, her flashlight cutting weak arcs through the
                      fog...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAIWriting;
