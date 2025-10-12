import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-8 animate-fade-in">
            <span className="text-xs font-medium text-muted-foreground">✨ Building intelligent systems</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}>
            AI & Agentic Systems
            <br />
            <span className="text-foreground">with </span>
            <span className="text-[hsl(var(--highlight))] highlight-glow">
              Precision
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}>
            Effortlessly building intelligent agents with LangChain, LangGraph, and cloud infrastructure.
            <br />
            Creating solutions that scale from prototype to production.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
            <a
              href="https://github.com/AkshatBuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/ChaudharyAkshat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:akshatchaudhary4088@gmail.com"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#projects"
            className="inline-block text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
