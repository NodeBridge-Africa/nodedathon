"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

interface RegistrationDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegistrationDialog({
  isOpen,
  onOpenChange,
}: RegistrationDialogProps) {
  const [formData, setFormData] = useState({
    full_name: "",
    telegram: "",
    eth_address: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("registrations").insert([formData]);

      if (error) throw error;

      toast.success("Registration successful!");
      onOpenChange(false);
      setFormData({ full_name: "", telegram: "", eth_address: "", email: "" });
    } catch (error) {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Join Nodedathon
          </DialogTitle>
          <DialogDescription className="text-lg">
            Become part of our elite node operator community.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence>
            {[
              {
                id: "full_name",
                label: "Full Name",
                type: "text",
                placeholder: "John Doe",
              },
              {
                id: "telegram",
                label: "Telegram Handle",
                type: "text",
                placeholder: "@username",
              },
              {
                id: "eth_address",
                label: "ETH Address",
                type: "text",
                placeholder: "0x...",
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "you@example.com",
              },
            ].map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <Label htmlFor={field.id} className="text-sm font-medium">
                  {field.label}
                </Label>
                <Input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.id]: e.target.value })
                  }
                  className="border-primary/20 focus:border-primary transition-colors"
                  required
                />
              </motion.div>
            ))}
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Join the Revolution"}
            </Button>
          </motion.div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
