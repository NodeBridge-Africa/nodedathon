'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const facilitators = [
  {
    name: "Harrison Eze",
    role: "Lead Instructor",
    bio: "Experienced blockchain developer and node operator with extensive knowledge in Ethereum validator operations."
  },
  {
    name: "KC Pele",
    role: "Technical Advisor",
    bio: "Blockchain developer with expertise in distributed systems and validator technology."
  }
];

export function FacilitatorsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Meet the Facilitators</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {facilitators.map((facilitator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="facilitator-card text-center p-6 rounded-lg border bg-card relative group"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Users className="h-16 w-16 text-primary relative z-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{facilitator.name}</h3>
                <p className="text-primary mb-4">{facilitator.role}</p>
                <p className="text-muted-foreground">{facilitator.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}