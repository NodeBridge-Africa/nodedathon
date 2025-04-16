'use client';

import { motion } from 'framer-motion';
import { Lightbulb, TreePine, Coins } from 'lucide-react';

const impacts = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Education",
    description: "Empowering African youth with blockchain skills and knowledge"
  },
  {
    icon: <TreePine className="h-8 w-8" />,
    title: "Sustainability",
    description: "Promoting eco-friendly blockchain validation practices"
  },
  {
    icon: <Coins className="h-8 w-8" />,
    title: "Economic Growth",
    description: "Creating opportunities for financial independence"
  }
];

export function ImpactSection() {
  return (
    <section className="impact-section relative py-32">
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Impact in Africa
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a sustainable blockchain future for the continent
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card/90 backdrop-blur-md p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="text-primary mb-4">{impact.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{impact.title}</h3>
              <p className="text-muted-foreground">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}