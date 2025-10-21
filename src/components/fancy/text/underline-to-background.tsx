"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface UnderlineToBackgroundProps {
  children: ReactNode;
  targetTextColor?: string;
  className?: string;
}

export default function UnderlineToBackground({
  children,
  targetTextColor = "#f0f0f0",
  className,
}: UnderlineToBackgroundProps) {
  return (
    <motion.span
      className={cn("relative inline-block", className)}
      initial="initial"
      whileHover="hover"
    >
      <motion.span
        className="absolute inset-0 rounded"
        style={{
          backgroundColor: "hsl(var(--primary))",
        }}
        variants={{
          initial: { scaleX: 0, originX: 0 },
          hover: { scaleX: 1, originX: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="relative z-10"
        variants={{
          initial: { color: "inherit" },
          hover: { color: targetTextColor },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
