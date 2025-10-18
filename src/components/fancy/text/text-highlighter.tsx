import { motion, useInView, type Transition } from "framer-motion";
import { useRef } from "react";

interface TextHighlighterProps {
  children: React.ReactNode;
  className?: string;
  transition?: Transition;
  highlightColor?: string;
  useInViewOptions?: {
    once?: boolean;
    initial?: boolean;
    amount?: number;
  };
}

export function TextHighlighter({
  children,
  className = "",
  transition = { type: "spring", duration: 1, delay: 0.2, bounce: 0 },
  highlightColor = "hsl(var(--primary))",
  useInViewOptions = { once: true, initial: true, amount: 0.1 },
}: TextHighlighterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, useInViewOptions);

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <motion.span
        className="absolute inset-0 -z-10"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={transition}
        style={{
          backgroundColor: highlightColor,
        }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}
