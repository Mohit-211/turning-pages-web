"use client";

import { motion } from "framer-motion";
import { Image, Palette, Wand2, Download } from "lucide-react";

const FeatureCoverGenerator = () => {
  const coverExamples = [
    {
      genre: "Mystery",
      mood: "Dark & Suspenseful",
      color: "from-slate-800 to-slate-900",
    },
    {
      genre: "Romance",
      mood: "Warm & Romantic",
      color: "from-rose-400 to-pink-600",
    },
    {
      genre: "Sci-Fi",
      mood: "Futuristic & Bold",
      color: "from-cyan-500 to-blue-700",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <Image className="w-4 h-4" />
            <span className="text-sm font-semibold">Cover Generator</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Create Stunning Book Covers with{" "}
            <span className="text-gradient-brand">TAV</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Generate multiple draft book covers by entering prompts for genre,
            mood, and visual style. Create visually appealing concepts suitable
            for early promotion, internal review, or inspiration for
            professional designers.
          </p>
        </motion.div>

        {/* Covers */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {coverExamples.map((cover, index) => (
            <motion.div
              key={cover.genre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`aspect-[2/3] rounded-xl bg-gradient-to-br ${cover.color} shadow-card overflow-hidden relative`}
              >
                {/* Cover mock */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                  <span className="text-xs uppercase tracking-widest opacity-70 mb-4">
                    A Novel
                  </span>
                  <h3 className="text-2xl font-display font-bold text-center mb-2">
                    The Untold Story
                  </h3>
                  <div className="w-12 h-0.5 bg-white/50 mb-4" />
                  <span className="text-sm opacity-70">Author Name</span>
                </div>

                {/* Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="flex items-center gap-2 bg-white text-foreground px-4 py-2 rounded-lg font-medium text-sm">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="font-medium text-foreground">{cover.genre}</p>
                <p className="text-sm text-muted-foreground">{cover.mood}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prompt box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-card p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">
                Describe Your Cover
              </span>
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="e.g., Dark mystery, foggy cityscape, noir style..."
                className="flex-1 px-4 py-3 bg-muted rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <button className="px-6 py-3 bg-primary-gradient text-primary-foreground rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-shadow">
                <Wand2 className="w-4 h-4" />
                Generate
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCoverGenerator;
