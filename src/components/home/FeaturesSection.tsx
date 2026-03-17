import { motion } from "framer-motion";
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
    description: "Generate content, overcome writer's block, and expand ideas.",
  },
  {
    icon: BookMarked,
    title: "Chapter Management",
    description: "Organize, reorder, and structure your book effortlessly.",
  },
  {
    icon: CheckCircle2,
    title: "Grammar & Style",
    description: "Real-time corrections and style enhancements.",
  },
  {
    icon: Pencil,
    title: "Professional Editing",
    description: "Human-grade editorial workflows and suggestions.",
  },
  {
    icon: Shield,
    title: "Plagiarism Detection",
    description: "Ensure your work is original and properly cited.",
  },
  {
    icon: FileText,
    title: "Smart Summaries",
    description: "Generate chapter summaries and book synopses.",
  },
  {
    icon: Image,
    title: "Cover Generation",
    description: "AI-powered book cover designs to match your story.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient-brand">Write Your Book</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful AI tools and professional editing features, all in one 
            elegant writing environment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button variant="hero" size="lg" className="group">
            Explore Features
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg">
            Try Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;