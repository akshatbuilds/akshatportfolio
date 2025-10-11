import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "AI & Agentic AI Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-radial from-primary/20 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm tracking-wider uppercase">
              // Developer. AI Engineer. Problem Solver.
            </p>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Akshat Chaudhary</span>
            </h1>
            
            <div className="h-12 flex items-center justify-center">
              <p className="text-2xl md:text-3xl text-muted-foreground font-mono">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Skilled in developing autonomous AI systems leveraging LLMs, reinforcement learning, 
            and cloud infrastructure. Building scalable, data-driven solutions that optimize 
            business processes and enhance user experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/AkshatBuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/ChaudharyAkshat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:akshatchaudhary4088@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground/60 font-mono pt-4">
            Tip: Press Ctrl+K for a surprise 👀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
