"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;
  const prefersReducedMotion = useReducedMotion();
  const prevIndexRef = useRef(0);

  // Update active card only when index actually changes to reduce re-renders
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (prefersReducedMotion) return;
    const nextIndex = Math.min(
      cardLength - 1,
      Math.max(0, Math.floor(latest * cardLength))
    );
    if (nextIndex !== prevIndexRef.current) {
      prevIndexRef.current = nextIndex;
      setActiveCard(nextIndex);
    }
  });

  const backgroundColors = [
    "hsl(var(--background))",
    "hsl(var(--muted))",
    "hsl(var(--background))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(backgroundColors[0]);

  useEffect(() => {
    setBackgroundGradient(backgroundColors[activeCard % backgroundColors.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundGradient,
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{
                  opacity: prefersReducedMotion ? 1 : activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-foreground"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{
                  opacity: prefersReducedMotion ? 1 : activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-muted-foreground"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-card border border-border lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
