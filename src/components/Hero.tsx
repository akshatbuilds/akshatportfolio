import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Main Statement */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.1]">
              I build intelligent
              <br />
              <span className="text-muted-foreground">AI systems</span> that
              <br />
              solve real problems.
            </h1>
            
            <div className="space-y-3 text-lg md:text-xl text-muted-foreground max-w-2xl">
              <p>i design autonomous agents.</p>
              <p>i think AI should enhance human capability, not replace it.</p>
              <p>i think the systems we build today shape the world of tomorrow.</p>
              <p>i build with purpose.</p>
            </div>
          </div>

          {/* Identity */}
          <div className="space-y-4 text-base md:text-lg">
            <p className="font-mono text-muted-foreground">
              Akshat Chaudhary / AI & Agentic AI Engineer
            </p>
            <p className="text-muted-foreground">
              Based in Chandigarh, India. Building scalable AI solutions with LLMs, 
              reinforcement learning, and cloud infrastructure.
            </p>
          </div>

          {/* CTA & Social */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a 
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all"
            >
              View My Work
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/AkshatBuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/ChaudharyAkshat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:akshatchaudhary4088@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Terminal Hint */}
          <p className="text-xs text-muted-foreground/60 font-mono pt-8">
            Tip: Press Ctrl+K for terminal access →
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
