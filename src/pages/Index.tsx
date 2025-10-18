import { useState } from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Terminal from "@/components/Terminal";
import Navigation from "@/components/Navigation";
import ProjectShowcase from "@/components/ProjectShowcase";

const Index = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Navigation onLogoClick={() => setTerminalOpen(true)} />
      
      <main className="relative">
        <Hero />
        <ProjectShowcase />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
};

export default Index;
