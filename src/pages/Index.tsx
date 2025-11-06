import { useState, lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import LazySection from "@/components/ui/LazySection";
const Experience = lazy(() => import("@/components/Experience"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));
import Terminal from "@/components/Terminal";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navigation onLogoClick={() => setTerminalOpen(true)} />
      
      <main className="relative">
        <div className="snap-start"><Hero /></div>

        <Suspense fallback={<div className="snap-start h-screen" />}> 
          <LazySection className="snap-start">
            <Experience />
          </LazySection>
        </Suspense>

        <Suspense fallback={<div className="snap-start h-screen" />}> 
          <LazySection className="snap-start">
            <Skills />
          </LazySection>
        </Suspense>

        <Suspense fallback={<div className="snap-start h-screen" />}> 
          <LazySection className="snap-start">
            <Projects />
          </LazySection>
        </Suspense>

        <Suspense fallback={<div className="snap-start h-screen" />}> 
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
