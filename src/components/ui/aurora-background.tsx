"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  intensity?: "low" | "medium" | "high";
  speed?: "slow" | "normal" | "fast";
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  intensity = "medium",
  speed = "normal",
  ...props
}: AuroraBackgroundProps) => {
  const intensityClasses = {
    low: "opacity-30",
    medium: "opacity-50",
    high: "opacity-70",
  };

  const speedClasses = {
    slow: "after:animate-aurora-slow",
    normal: "after:animate-aurora",
    fast: "after:animate-aurora-fast",
  };

  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-background text-foreground transition-all duration-500",
          className
        )}
        {...props}
      >
        {/* Aurora Effect Layer */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              // Base gradients
              `[--white-gradient:repeating-linear-gradient(100deg,hsl(var(--background))_0%,hsl(var(--background))_7%,transparent_10%,transparent_12%,hsl(var(--background))_16%)]`,
              `[--dark-gradient:repeating-linear-gradient(100deg,hsl(var(--background))_0%,hsl(var(--background))_7%,transparent_10%,transparent_12%,hsl(var(--background))_16%)]`,
              
              // Aurora colors - vibrant and dynamic
              `[--aurora:repeating-linear-gradient(100deg,#6366f1_10%,#8b5cf6_15%,#d946ef_20%,#ec4899_25%,#f43f5e_30%,#6366f1_35%)]`,
              
              // Background composition
              "bg-[length:300%_200%] bg-[position:50%_50%]",
              "[background-image:var(--white-gradient),var(--aurora)]",
              "dark:[background-image:var(--dark-gradient),var(--aurora)]",
              
              // Blur and effects
              "blur-[10px]",
              
              // After pseudo-element for animation
              "after:content-[''] after:absolute after:inset-0",
              "after:[background-image:var(--white-gradient),var(--aurora)]",
              "after:dark:[background-image:var(--dark-gradient),var(--aurora)]",
              "after:bg-[length:200%_100%]",
              "after:[background-attachment:fixed]",
              "after:mix-blend-difference",
              speedClasses[speed],
              
              // Performance optimizations
              "pointer-events-none absolute -inset-[10px]",
              "will-change-transform",
              intensityClasses[intensity],
              
              // Radial gradient mask
              showRadialGradient &&
                "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
            )}
          />
          
          {/* Additional glow layer */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5",
              "blur-3xl animate-pulse",
              intensityClasses[intensity]
            )}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          {children}
        </div>
      </div>
    </main>
  );
};
