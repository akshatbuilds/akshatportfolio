"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface StackingCardsProps {
  children: ReactNode;
  totalCards: number;
  scrollOptions?: {
    container?: React.RefObject<HTMLDivElement>;
  };
}

export default function StackingCards({
  children,
  totalCards,
  scrollOptions,
}: StackingCardsProps) {
  return (
    <div className="relative">
      {children}
    </div>
  );
}

interface StackingCardItemProps {
  children: ReactNode;
  index: number;
  className?: string;
}

export function StackingCardItem({
  children,
  index,
  className,
}: StackingCardItemProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardStart = index * 300;
  const cardEnd = cardStart + 300;
  
  const progress = Math.max(0, Math.min(1, (scrollY - cardStart) / 300));
  
  const scale = 1 - progress * 0.1;
  const y = progress * -50;

  return (
    <motion.div
      className={cn("sticky top-20", className)}
      style={{
        transform: `scale(${scale}) translateY(${y}px)`,
        zIndex: 100 - index,
      }}
    >
      {children}
    </motion.div>
  );
}
