'use client';

import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

const galleryItems = [
  {
    title: "DVT Setup Workshop",
    description: "Hands-on session setting up distributed validator nodes"
  },
  {
    title: "Security Best Practices",
    description: "Learning to secure validator operations"
  },
  {
    title: "Community Discussion",
    description: "Engaging with fellow node operators"
  },
  {
    title: "Monitoring Setup",
    description: "Implementing Prometheus and Grafana"
  },
  {
    title: "Troubleshooting Session",
    description: "Solving common validator challenges"
  },
  {
    title: "Future of Staking",
    description: "Exploring upcoming developments in ETH staking"
  }
];

export function GallerySection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Session Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gallery-card relative group overflow-hidden rounded-lg border bg-card aspect-video"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 group-hover:to-background/95 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}