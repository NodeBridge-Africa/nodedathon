'use client';

import { motion } from 'framer-motion';
import { Users, Server, Trophy, Medal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Formation",
    description: "Get paired with fellow participants to form dynamic validator teams"
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Node Operation",
    description: "Receive dedicated server credentials to run and manage your validator node"
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: "Week-long Challenge",
    description: "Maintain optimal node performance over a 7-day period"
  },
  {
    icon: <Medal className="h-8 w-8" />,
    title: "POAP Rewards",
    description: "Earn exclusive POAPs upon successful completion of the challenge"
  }
];

interface CompetitionSectionProps {
  onRegisterClick: () => void;
}

export function CompetitionSection({ onRegisterClick }: CompetitionSectionProps) {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 kente-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            The Node Operation Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Put your skills to the test in our week-long node operation challenge. 
            Work in teams, manage real validator nodes, and earn exclusive rewards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto bg-primary/5 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-semibold mb-4">Ready to Take the Challenge?</h3>
            <p className="text-muted-foreground mb-6">
              Join our community of node operators and participate in this unique learning experience.
            </p>
            <Button
              onClick={onRegisterClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl"
            >
              Register Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}