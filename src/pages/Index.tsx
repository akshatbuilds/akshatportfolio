import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Terminal from "@/components/Terminal";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Easter egg: Ctrl+K to open terminal
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      
      <Navigation />
      
      <main className="relative">
        <Hero />
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
