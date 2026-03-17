import { motion } from "framer-motion";
import { Lightbulb, FileText, Sparkles, BookOpen } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Spark Your Idea",
    description: "Begin with a concept, a theme, or even a single sentence. Our AI helps you outline and structure your vision.",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Write Your Story",
    description: "Draft chapters with AI assistance, organize scenes, and let your creativity flow without writer's block.",
    color: "secondary",
  },
  {
    icon: Sparkles,
    title: "Refine & Polish",
    description: "Grammar checks, style suggestions, and AI-powered editing transform your draft into professional prose.",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Publish Ready",
    description: "Export your professionally edited manuscript, complete with cover design and formatting options.",
    color: "secondary",
  },
];

const JourneySection = () => {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Your Journey From{" "}
            <span className="text-gradient-brand">Idea to Book</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A seamless creative process that transforms your imagination into a 
            beautifully crafted, professionally edited book.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2" />

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                      step.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <step.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-display font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;