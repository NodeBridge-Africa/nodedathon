'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nodedathon opened doors to blockchain opportunities I never knew existed in Africa.",
    author: "Harrison Eze",
    role: "Node Operator",
    location: "Nigeria"
  },
  {
    quote: "This program is transforming how we think about blockchain technology in Africa.",
    author: "David",
    role: "Tech Educator",
    location: "Nigeria"
  },
  {
    quote: "The community support and knowledge sharing have been invaluable for my growth.",
    author: "Kc Pele",
    role: "Blockchain Developer",
    location: "Nigeria"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 mud-cloth-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Voices of Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our participants across Africa
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card p-8 rounded-2xl border border-primary/20 relative"
            >
              <Quote className="absolute top-4 right-4 h-6 w-6 text-primary/20" />
              <p className="text-lg mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center space-x-4">
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}