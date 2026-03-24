"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Fantasy Author",
    avatar: "SM",
    quote:
      "Turning Pages saved me months of editing time. The AI suggestions felt like having a professional editor by my side 24/7.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Self-Published Writer",
    avatar: "MC",
    quote:
      "From scattered notes to a polished manuscript in weeks, not years. This platform made publishing finally feel accessible.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Non-Fiction Author",
    avatar: "ER",
    quote:
      "The chapter management and AI drafting tools transformed how I organize my thoughts. My productivity has tripled.",
    rating: 5,
  },
] as const;

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Loved by{" "}
            <span className="text-gradient-brand">Authors Worldwide</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of writers who’ve turned ideas into finished books—
            faster, easier, and without the overwhelm.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 relative group hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                “{testimonial.quote}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>

                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
