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
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-12 font-body animate-fade-in">
                I build{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">intelligent</span>
                  <span className="absolute inset-0 bg-primary/10 blur-xl"></span>
                </span>
                <br />
                systems,{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">agents</span>
                  <span className="absolute inset-0 bg-primary/20 blur-xl"></span>
                </span>{" "}
                &{" "}
                <span className="italic font-serif text-muted-foreground font-normal">
                  solutions
                </span>
                .
              </h1>

              <div className="space-y-3 mb-12 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}>
                <p className="text-lg md:text-xl font-bold text-[hsl(var(--highlight))] highlight-glow animate-pulse">
                  AI & Agentic AI Engineer based in Chandigarh
                </p>
                <p className="text-base md:text-lg font-semibold text-[hsl(var(--highlight))] highlight-glow">
                  Building with <span className="font-black">LangChain</span>, <span className="font-black">LangGraph</span>, and <span className="font-black">cloud infrastructure</span>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}>
                <a
                  href="https://github.com/AkshatBuilds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[hsl(var(--highlight))] hover:scale-110 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/ChaudharyAkshat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[hsl(var(--highlight))] hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:akshatchaudhary4088@gmail.com"
                  className="text-muted-foreground hover:text-[hsl(var(--highlight))] hover:scale-110 transition-all duration-300"
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
