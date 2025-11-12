import React from "react";
import { useReducedMotion } from "framer-motion";

const LoadingOverlay: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {prefersReducedMotion ? (
          <div className="h-10 w-10 rounded-full border-2 border-primary grid place-items-center">
            <div className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
          </div>
        ) : (
          <div className="h-10 w-10 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        )}
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;