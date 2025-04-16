import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nodedathon | African Node Operator Training Program",
  description:
    "Join Africa's premier node operator training program. Learn validator setup, DVT integration, and earn POAPs through hands-on challenges. Build the future of blockchain in Africa.",
  keywords:
    "Ethereum, Node Operator, Blockchain, Africa, Validator, DVT, POAP, Training, Blockchain Education",
  authors: [{ name: "Nodedathon Team" }],
  openGraph: {
    title: "Nodedathon | African Node Operator Training Program",
    description:
      "Join Africa's premier node operator training program. Learn validator setup, DVT integration, and earn POAPs through hands-on challenges.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&q=80&w=2940",
        width: 2940,
        height: 1960,
        alt: "Nodedathon - African Node Operator Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nodedathon | African Node Operator Training Program",
    description:
      "Join Africa's premier node operator training program. Learn validator setup, DVT integration, and earn POAPs through hands-on challenges.",
    images: [
      "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&q=80&w=2940",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster
          position="top-right"
          duration={4000}
          className="border border-primary/20"
          style={{
            background: "hsl(var(--background))",
            color: "hsl(var(--foreground))",
            fontSize: "14px",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
          toastOptions={{
            classNames: {
              success: "border-l-4 border-l-primary",
              error: "border-l-4 border-l-destructive",
            },
          }}
        />
      </body>
    </html>
  );
}
