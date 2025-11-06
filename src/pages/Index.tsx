import { useEffect, useState, lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import LazySection from "@/components/ui/LazySection";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
const Experience = lazy(() => import("@/components/Experience"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));
import Terminal from "@/components/Terminal";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Warm up the lazy chunks during idle time after first paint
  useEffect(() => {
    const idle = (cb: () => void) =>
      ("requestIdleCallback" in window
        ? (window as any).requestIdleCallback(cb)
        : setTimeout(cb, 300));

    idle(() => {
      import("@/components/Experience");
      import("@/components/Skills");
      import("@/components/Projects");
      import("@/components/Contact");
    });
  }, []);

  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navigation onLogoClick={() => setTerminalOpen(true)} />
      
      <main className="relative">
        <div className="snap-start"><Hero /></div>

        {/* Single Suspense boundary and a global overlay while any chunk loads */}
        <Suspense fallback={<LoadingOverlay />}> 
          <LazySection className="snap-start">
            <Experience />
          </LazySection>

          <LazySection className="snap-start">
            <Skills />
          </LazySection>

          <LazySection className="snap-start">
            <Projects />
          </LazySection>

          <LazySection className="snap-start">
            <Contact />
          </LazySection>
        </Suspense>
      </main>

      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
};

export default Index;
