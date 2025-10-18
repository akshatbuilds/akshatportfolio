import { useState } from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Terminal from "@/components/Terminal";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navigation onLogoClick={() => setTerminalOpen(true)} />
      
      <main className="relative">
        <div className="snap-start"><Hero /></div>
        <div className="snap-start"><Experience /></div>
        <div className="snap-start"><Skills /></div>
        <div className="snap-start"><Projects /></div>
        <div className="snap-start"><Contact /></div>
      </main>

      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
};

export default Index;
