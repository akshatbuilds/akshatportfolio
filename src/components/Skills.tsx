"use client";

import React, { useState } from "react";
import { Bot, Brain, Cloud, Code, Database, Workflow, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const SkillCard = React.memo(
  ({
    category,
    index,
    hovered,
    setHovered,
  }: {
    category: {
      icon: LucideIcon;
      title: string;
      description: string;
      depth: string;
      similarTools: string[];
      skills: string[];
      gradient: string;
    };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const Icon = category.icon;
    const [open, setOpen] = useState(false);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(index)}
            onBlur={() => setHovered(null)}
            tabIndex={0}
            role="button"
            aria-expanded={open}
            className={cn(
              "rounded-xl relative overflow-hidden h-[140px] w-full transition-all duration-300 ease-out border border-border/50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--highlight))]",
              hovered !== null && hovered !== index && "opacity-40 scale-[0.98]"
            )}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen(true);
              }
            }}
          >
            {/* Background gradient */}
            <div className={cn("absolute inset-0", category.gradient)} />
            
            {/* Content overlay */}
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
            
            {/* Icon and title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
              <div className="p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50">
                <Icon className="h-6 w-6 text-[hsl(var(--highlight))]" />
              </div>
              <h3 className="text-sm font-semibold text-foreground text-center line-clamp-2">
                {category.title}
              </h3>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent 
          className="w-[320px] p-4 bg-background/95 backdrop-blur-md border-border/50"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-background/80 border border-border/50 flex-shrink-0">
                <Icon className="h-5 w-5 text-[hsl(var(--highlight))]" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-foreground mb-1">{category.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-border/50">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">Proficiency:</span>
                <span className="text-xs font-semibold text-[hsl(var(--highlight))]">
                  {category.depth}
                </span>
              </div>

              {category.similarTools.length > 0 && (
                <div className="space-y-1">
                  <span className="text-xs font-medium text-muted-foreground">Similar Tools:</span>
                  <p className="text-xs text-foreground">
                    {category.similarTools.join(", ")}
                  </p>
                </div>
              )}

              <div className="space-y-1.5">
                <span className="text-xs font-medium text-muted-foreground">Key Skills:</span>
                <ul className="space-y-1">
                  {category.skills.slice(0, 6).map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-foreground">
                      <span className="text-[hsl(var(--highlight))] flex-shrink-0 mt-0.5">•</span>
                      <span className="line-clamp-1">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  }
);

SkillCard.displayName = "SkillCard";

const Skills = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const skillCategories = [
    {
      icon: Bot,
      title: "AI & Agentic AI",
      description: "Building intelligent autonomous systems with multi-agent orchestration and advanced LLM integration.",
      depth: "Advanced",
      similarTools: ["AutoGPT", "BabyAGI", "Semantic Kernel"],
      gradient: "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20",
      skills: [
        "LangChain agents",
        "LangGraph",
        "GPT-4/Claude APIs",
        "Hugging Face Transformers",
        "LLM fine-tuning",
        "RAG frameworks",
      ],
    },
    {
      icon: Brain,
      title: "Generative AI & NLP",
      description: "Creating natural language solutions with state-of-the-art transformers and vector databases.",
      depth: "Advanced",
      similarTools: ["OpenAI API", "Anthropic Claude", "Cohere"],
      gradient: "bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
      skills: [
        "Text generation",
        "Prompt engineering",
        "Multilingual pipelines",
        "Vector DBs (Pinecone, Weaviate)",
        "Hallucination detection",
        "NLG templates",
        "Computer vision",
        "Predictive analytics",
      ],
    },
    {
      icon: Code,
      title: "Backend & Systems",
      description: "Developing scalable server-side applications with modern frameworks and containerization.",
      depth: "Advanced",
      similarTools: ["Django", "Express.js", "Spring Boot"],
      gradient: "bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      skills: [
        "Python",
        "JavaScript",
        "FastAPI",
        "REST APIs",
        "Salesforce integrations",
        "TensorFlow",
        "PyTorch",
        "Docker",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Architecting cloud-native solutions with infrastructure-as-code and serverless computing.",
      depth: "Intermediate",
      similarTools: ["Google Cloud", "DigitalOcean", "Heroku"],
      gradient: "bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-yellow-500/20",
      skills: [
        "AWS (Lambda, EC2, S3)",
        "Azure",
        "ECS/Fargate",
        "Terraform",
        "CI/CD pipelines",
        "CloudWatch",
        "IAM",
      ],
    },
    {
      icon: Workflow,
      title: "Automation & Orchestration",
      description: "Streamlining complex workflows with event-driven architectures and integration platforms.",
      depth: "Advanced",
      similarTools: ["Zapier", "Make.com", "Prefect"],
      gradient: "bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-violet-500/20",
      skills: [
        "n8n automations",
        "Airflow DAGs",
        "Multi-agent orchestration",
        "Workflow automation",
        "API integrations",
        "Event-driven systems",
        "WhatsApp Business API",
        "Apollo.io",
      ],
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust data pipelines with ETL processes and optimized model deployment.",
      depth: "Advanced",
      similarTools: ["Apache Spark", "Databricks", "Snowflake"],
      gradient: "bg-gradient-to-br from-rose-500/20 via-pink-500/20 to-fuchsia-500/20",
      skills: [
        "Pandas & NumPy",
        "SQL/NoSQL",
        "PostgreSQL",
        "MongoDB",
        "Data preprocessing",
        "Feature engineering",
        "ETL pipelines",
        "Model optimization",
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-32 relative flex items-center">
      <div className="container mx-auto px-6 w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable AI systems
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                category={category}
                index={index}
                hovered={hovered}
                setHovered={setHovered}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
