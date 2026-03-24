"use client";

import { motion } from "framer-motion";
import { BookMarked, FolderOpen, ArrowUpDown, BarChart3 } from "lucide-react";

const FeatureChapterManagement = () => {
  const chapters = [
    { title: "Chapter 1: The Beginning", words: 3420, status: "complete" },
    { title: "Chapter 2: Rising Tension", words: 4180, status: "complete" },
    { title: "Chapter 3: The Discovery", words: 2890, status: "in-progress" },
    { title: "Chapter 4: Confrontation", words: 0, status: "draft" },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-card rounded-2xl shadow-card p-6 border border-border">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-semibold text-foreground">My Novel</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BarChart3 className="w-4 h-4" />
                  <span>10,490 words</span>
                </div>
              </div>

              {/* Progress */}
              <div className="h-2 bg-muted rounded-full mb-6 overflow-hidden">
                <div className="h-full w-3/5 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </div>

              {/* Chapters */}
              <div className="space-y-3">
                {chapters.map((chapter, index) => (
                  <motion.div
                    key={chapter.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <ArrowUpDown className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm font-medium text-foreground">
                        {chapter.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground">
                        {chapter.words.toLocaleString()} words
                      </span>

                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          chapter.status === "complete"
                            ? "bg-green-100 text-green-700"
                            : chapter.status === "in-progress"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {chapter.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
              <BookMarked className="w-4 h-4" />
              <span className="text-sm font-semibold">Chapter Management</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Organize Your Manuscript{" "}
              <span className="text-gradient-brand">Effortlessly</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Create, reorder, save, and manage chapters with intuitive
              drag-and-drop controls. Upload existing manuscripts, track your
              progress visually in a structured dashboard, and never lose sight
              of your story's architecture.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: FolderOpen, text: "Upload existing manuscripts" },
                { icon: ArrowUpDown, text: "Drag-and-drop reordering" },
                { icon: BarChart3, text: "Visual progress tracking" },
                { icon: BookMarked, text: "Chapter templates" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-soft"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureChapterManagement;
