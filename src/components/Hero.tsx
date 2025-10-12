import { Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Name */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 animate-fade-in">
            Akshat Chaudhary
          </h2>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] mb-8 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}>
            I build intelligent AI systems and agentic workflows that automate complex processes and scale from prototype to production.
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
