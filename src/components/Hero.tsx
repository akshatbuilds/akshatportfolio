import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Browser Window Mockup */}
          <div className="relative bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
            {/* Browser Chrome */}
            <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background/50 rounded px-3 py-1 text-xs text-muted-foreground font-mono">
                  akshat-portfolio.dev
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 md:px-16 py-20 md:py-32 min-h-[600px] flex flex-col items-center justify-center text-center">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-12">
                I build intelligent
                <br />
                systems, agents &{" "}
                <span className="italic font-serif text-muted-foreground">
                  solutions
                </span>
                .
              </h1>

              <div className="space-y-2 mb-12">
                <p className="text-lg md:text-xl text-foreground">
                  AI & Agentic AI Engineer at TwoPir. Based in Chandigarh.
                </p>
                <p className="text-base md:text-lg text-muted-foreground">
                  Formerly building with LangChain, LangGraph, and cloud infrastructure
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 mb-12">
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

              {/* Scroll Indicator */}
              <a
                href="#projects"
                className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
              >
                <ArrowDown className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Terminal Hint */}
          <p className="text-xs text-muted-foreground/60 font-mono text-center mt-8">
            Tip: Press Ctrl+K for terminal access →
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
