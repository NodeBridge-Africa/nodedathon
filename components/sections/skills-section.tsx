"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const skills = [
  "Set up and maintain Ethereum validator nodes",
  "Implement Distributed Validator Technology (DVT)",
  "Monitor node health with Prometheus/Grafana",
  "Troubleshoot common validator issues",
  "Understand staking solutions (Lido/Rocketpool/Obol)",
  "Contribute to network decentralization",
  "Implement best security practices",
  "Participate in the validator community",
];

export function SkillsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            Skills You&apos;ll Master
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="skill-card flex items-center space-x-4 p-6 rounded-xl hover:glow card-hover"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
