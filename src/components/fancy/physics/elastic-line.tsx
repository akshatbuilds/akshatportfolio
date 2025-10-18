"use client";

import { motion, useMotionValue, useSpring, useTransform, Transition } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ElasticLineProps {
  releaseThreshold?: number;
  strokeWidth?: number;
  strokeColor?: string;
  animateInTransition?: Transition;
}

export default function ElasticLine({
  releaseThreshold = 50,
  strokeWidth = 1,
  strokeColor = "currentColor",
  animateInTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    delay: 0.15,
  },
}: ElasticLineProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { stiffness: 300, damping: 30 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  
  const pathD = useTransform(
    [springX, springY],
    ([x, y]) => {
      if (!containerRef.current) return "M 0 0 L 0 0";
      const rect = containerRef.current.getBoundingClientRect();
      const startX = 0;
      const startY = 0;
      const endX = rect.width;
      const endY = 0;
      
      if (!isDragging) {
        return `M ${startX} ${startY} L ${endX} ${endY}`;
      }
      
      const midX = (x as number);
      const midY = (y as number);
      
      return `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
    }
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimatedIn(true);
    }, (animateInTransition.delay || 0) * 1000);
    return () => clearTimeout(timer);
  }, [animateInTransition.delay]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    const rect = containerRef.current.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    cursorX.set(containerRef.current ? containerRef.current.getBoundingClientRect().width / 2 : 0);
    cursorY.set(0);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-px cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <svg className="absolute inset-0 w-full h-full overflow-visible" style={{ pointerEvents: "none" }}>
        <motion.path
          d={pathD}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: hasAnimatedIn ? 1 : 0 }}
          transition={animateInTransition}
        />
      </svg>
    </div>
  );
}
