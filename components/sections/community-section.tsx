'use client';

import { motion } from 'framer-motion';
import { Users2, Heart, Globe2 } from 'lucide-react';

const stats = [
  {
    icon: <Users2 className="h-8 w-8" />,
    value: "500+",
    label: "Community Members",
    description: "Active participants from across Africa"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    value: "7+",
    label: "Local Meetups",
    description: "Regular gatherings in major African cities"
  },
  {
    icon: <Globe2 className="h-8 w-8" />,
    value: "3+",
    label: "African Countries",
    description: "Growing presence across the continent"
  }
];

export function CommunitySection() {
  return (
    <section className="community-section relative py-32">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Vibrant Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join a thriving network of African blockchain enthusiasts and node operators
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card/80 backdrop-blur-md p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="text-primary mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2 text-gradient">{stat.value}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <p className="text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}