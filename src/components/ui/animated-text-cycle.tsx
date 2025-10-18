import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedTextCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function AnimatedTextCycle({
  words,
  interval = 5000,
  className = "",
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  return (
    <span className="relative inline-flex justify-center overflow-hidden">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={`absolute font-bold ${className}`}
          initial={{ opacity: 0, y: "-100" }}
          transition={{ type: "spring", stiffness: 50 }}
          animate={
            currentIndex === index
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {
                  y: currentIndex > index ? -150 : 150,
                  opacity: 0,
                }
          }
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
