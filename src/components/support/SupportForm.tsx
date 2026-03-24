"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Send,
  MessageCircle,
  Clock,
  Users,
  BookOpen,
  CreditCard,
  Settings,
} from "lucide-react";
import { toast } from "sonner";

const SupportForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(
      "Message sent successfully! We'll get back to you within 24 hours."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const supportAreas = [
    {
      icon: BookOpen,
      title: "Manuscript Help",
      description: "Questions about writing, uploading, or managing your work",
    },
    {
      icon: Users,
      title: "Editing Services",
      description: "Information about professional editing submissions",
    },
    {
      icon: CreditCard,
      title: "Billing & Pricing",
      description: "Payment questions, plans, and subscription help",
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "Account issues, bugs, or platform assistance",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-foreground">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    We'd love to hear from you
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-secondary/30 focus:border-secondary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-secondary/30 focus:border-secondary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you today?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-secondary/30 focus:border-secondary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your question or concern..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-secondary/30 focus:border-secondary resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    Include any relevant details to help us assist you better.
                  </p>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>We usually respond within 24 hours</span>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Real Human Support,{" "}
              <span className="text-gradient-brand">Always</span>
            </h3>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Turning Pages provides genuine human support for both technical
              and editorial questions. Our team understands the creative process
              and is here to help with manuscripts, editing submissions,
              pricing, account issues, and everything in between.
            </p>

            <div className="space-y-4">
              {supportAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {area.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportForm;
