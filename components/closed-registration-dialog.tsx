"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface ClosedRegistrationDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ClosedRegistrationDialog({
  isOpen,
  onOpenChange,
}: ClosedRegistrationDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Registration Closed
          </DialogTitle>
          <DialogDescription className="text-lg">
            Thank you for your interest in Nodedathon!
          </DialogDescription>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground">
            We&lsquo;re excited to see your enthusiasm! While registration for
            the current phase has closed, we encourage you to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Stay tuned for future opportunities</li>
            <li>Follow our social media channels for updates</li>
            <li>
              Join our community to learn more
              <Link
                href="https://t.me/nodebridege/1"
                target="_blank"
                className="text-primary"
              >
                Telegram
              </Link>
            </li>
          </ul>
          <Button
            className="w-full bg-primary/10 hover:bg-primary/20 text-primary py-6 text-lg font-medium rounded-xl transition-all duration-300"
            onClick={() => onOpenChange(false)}
          >
            Got it, thanks!
          </Button>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
