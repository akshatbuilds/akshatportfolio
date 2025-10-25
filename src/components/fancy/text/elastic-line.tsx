"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ElasticLine() {
  const lineRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [pathD, setPathD] = useState("M 0 16 Q 50 16 100 16");
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (lineRef.current) {
        const rect = lineRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from center, normalized
        const distanceX = (e.clientX - centerX) / rect.width;
        const distanceY = (e.clientY - centerY) / 200;
        
        mouseX.set(distanceX * 100);
        mouseY.set(distanceY * 20);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const unsubscribeX = x.on("change", (latest) => {
      const latestY = y.get();
      setPathD(`M 0 16 Q 50 ${16 + latestY} 100 16`);
    });
    
    const unsubscribeY = y.on("change", (latest) => {
      const latestX = x.get();
      setPathD(`M 0 16 Q 50 ${16 + latest} 100 16`);
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [x, y]);

  return (
    <div ref={lineRef} className="w-full max-w-2xl mx-auto mb-12 h-8 flex items-center">
      <svg
        width="100%"
        height="32"
        viewBox="0 0 100 32"
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        <motion.path
          d={pathD}
          stroke="hsl(var(--foreground))"
          strokeWidth="0.5"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
