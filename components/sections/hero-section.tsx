"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export function HeroSection({ onRegisterClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        className="absolute inset-0 bg-[url('/nodes-bg.svg')] bg-no-repeat bg-cover opacity-5"
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary relative">
              Nodedathon
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <Sparkles className="w-8 h-8 text-primary" />
                </motion.div>
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Embark on a journey into the future of blockchain validation.
                Join the elite community of node operators.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={onRegisterClick}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full"
            >
              Join the Revolution <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex justify-center space-x-8"
          >
            {[
              { label: "Participants", value: "30+" },
              { label: "Countries", value: "8+" },
              { label: "Node Operators", value: "17+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
