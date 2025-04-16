'use client';

import { motion } from 'framer-motion';
import { BookOpen, Cpu, Users, Trophy } from 'lucide-react';

const journeySteps = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Ethereum Basics",
    description: "Master the fundamentals of Ethereum and Proof of Stake.",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Validator Setup",
    description: "Learn to set up and maintain validator nodes.",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "DVT Integration",
    description: "Explore Distributed Validator Technology.",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: "Node Mastery",
    description: "Achieve expertise in node operation and maintenance.",
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
              The Journey to Mastery
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Embark on a transformative journey to become a skilled validator node operator.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-hover"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-primary/10 relative group`}>
                  <div className="absolute inset-0 rounded-2xl bg-background/90 transition-opacity group-hover:opacity-95" />
                  <div className="relative z-10">
                    <div className="mb-6 text-primary transform transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}