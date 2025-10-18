import { Mail, ArrowDown } from "lucide-react";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { TextHighlighter } from "@/components/fancy/text/text-highlighter";

const Hero = () => {
  const heroWords = [
    "revenue‑grade",
    "battle‑tested",
    "enterprise‑ready",
    "outcome‑driven",
    "fault‑tolerant",
    "cloud‑native",
    "observability‑backed",
    "compliance‑ready",
  ];
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
            Building{" "}
            <AnimatedTextCycle 
              words={heroWords} 
              interval={3500}
              className="text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            />
            <br />
            AI & Automation Systems.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}>
            Operationalizing{" "}
            <TextHighlighter
              className="rounded-[0.3em] px-1"
              transition={{ type: "spring", duration: 0.8, delay: 0.5, bounce: 0 }}
              highlightColor="hsl(var(--primary) / 0.2)"
              useInViewOptions={{ once: true, initial: true, amount: 0.1 }}
            >
              AI/ML and GenAI
            </TextHighlighter>{" "}
            on cloud‑native stacks with{" "}
            <TextHighlighter
              className="rounded-[0.3em] px-1"
              transition={{ type: "spring", duration: 0.8, delay: 0.7, bounce: 0 }}
              highlightColor="hsl(var(--primary) / 0.2)"
              useInViewOptions={{ once: true, initial: true, amount: 0.1 }}
            >
              guardrails, observability, and continuous evals
            </TextHighlighter>
            .
            <br />
            Orchestrating{" "}
            <TextHighlighter
              className="rounded-[0.3em] px-1"
              transition={{ type: "spring", duration: 0.8, delay: 0.9, bounce: 0 }}
              highlightColor="hsl(var(--primary) / 0.2)"
              useInViewOptions={{ once: true, initial: true, amount: 0.1 }}
            >
              data, models, and services
            </TextHighlighter>{" "}
            into integrated automation which are{" "}
            <TextHighlighter
              className="rounded-[0.3em] px-1"
              transition={{ type: "spring", duration: 0.8, delay: 1.1, bounce: 0 }}
              highlightColor="hsl(var(--primary) / 0.2)"
              useInViewOptions={{ once: true, initial: true, amount: 0.1 }}
            >
              reliable, scalable, and integration‑ready
            </TextHighlighter>
            .
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
