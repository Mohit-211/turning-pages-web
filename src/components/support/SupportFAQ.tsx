"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ArrowRight } from "lucide-react";

const SupportFAQ = () => {
  const faqs = [
    {
      question: "How does the AI writing assistant work?",
      answer:
        "Our AI writing assistant uses advanced language models to help you generate ideas, draft content, and overcome writer's block. Simply describe what you want to write, and the AI will suggest text that matches your style and vision. You maintain full creative control—edit, refine, or regenerate until you're satisfied.",
    },
    {
      question: "What happens after I submit a manuscript for editing?",
      answer:
        "Once you submit your manuscript, our team reviews it and assigns the appropriate editor based on your genre and needs. You'll receive a confirmation email with an estimated timeline. Your editor will work through the manuscript and return it with tracked changes, comments, and suggestions for improvement.",
    },
    {
      question: "How long does professional editing take?",
      answer:
        "Turnaround times vary based on the type of editing and manuscript length. Proofreading typically takes 3-5 business days, while developmental editing may take 2-4 weeks. You'll receive a specific timeline estimate when you submit your manuscript, and we always communicate if there are any delays.",
    },
    {
      question: "How does pricing work for editing services?",
      answer:
        "Pricing is based on word count and the type of editing you need. We offer transparent per-word rates for proofreading, copyediting, line editing, and developmental editing. You can get an instant quote by entering your word count in our pricing calculator, with no hidden fees or surprises.",
    },
    {
      question: "How can I download my final manuscript?",
      answer:
        "Your finished manuscript can be downloaded directly from your dashboard in multiple formats including DOCX, PDF, and EPUB. Simply navigate to your project, click the export button, and choose your preferred format. All your versions and revision history are saved securely in your account.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">FAQ</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Frequently Asked{" "}
            <span className="text-gradient-brand">Questions</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about Turning Pages.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border shadow-soft px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild variant="hero" size="lg" className="group">
            <a
              href="https://app.turningpages.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All FAQs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <Button asChild variant="heroOutline" size="lg">
            <a
              href="https://app.turningpages.io/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Now
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportFAQ;
