"use client";

import React, { useState } from "react";
import { Bot, Brain, Cloud, Code, Database, Workflow, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
      skills: string[];
      gradient: string;
      description: string;
      whereUsed: string;
      depth: string;
      similarTools: string[];
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
            onMouseEnter={() => {
              setHovered(index);
              setOpen(true);
            }}
            onMouseLeave={() => {
              setHovered(null);
              setOpen(false);
            }}
            className={cn(
              "rounded-xl relative overflow-hidden h-auto w-full transition-all duration-300 ease-out border border-border/50 cursor-pointer",
              hovered !== null && hovered !== index && "opacity-50 scale-[0.98]"
            )}
          >
            {/* Background gradient */}
            <div className={cn("absolute inset-0", category.gradient)} />
            
            {/* Content overlay */}
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
            
            {/* Content */}
            <div className="relative p-4">
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50">
                  <Icon className="h-5 w-5 text-[hsl(var(--highlight))]" />
                </div>
                <h3 className="text-sm font-bold text-foreground">{category.title}</h3>
              </div>
              
              {/* Skills list - always visible */}
              <div className="space-y-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 text-xs text-foreground/80"
                  >
                    <span className="text-[hsl(var(--highlight))] flex-shrink-0 text-xs">•</span>
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent 
          className="w-80 p-4 z-50" 
          side="top"
          align="center"
        >
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-sm mb-1 text-foreground">Description</h4>
              <p className="text-xs text-muted-foreground">{category.description}</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1 text-foreground">Where Used</h4>
              <p className="text-xs text-muted-foreground">{category.whereUsed}</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1 text-foreground">Depth</h4>
              <p className="text-xs text-muted-foreground">{category.depth}</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1 text-foreground">Similar Tools</h4>
              <ul className="space-y-1">
                {category.similarTools.map((tool, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <span className="text-[hsl(var(--highlight))] mt-0.5">•</span>
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
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
      gradient: "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20",
      skills: [
        "LangChain agents",
        "LangGraph",
        "GPT-4/Claude APIs",
        "Hugging Face Transformers",
        "LLM fine-tuning",
        "RAG frameworks",
      ],
      description: "Building intelligent agents that can reason, plan, and execute complex tasks autonomously.",
      whereUsed: "Production AI applications, customer service automation, and multi-agent systems",
      depth: "Advanced - 3+ years of hands-on experience building and deploying agentic systems",
      similarTools: ["AutoGPT", "BabyAGI", "Semantic Kernel", "CrewAI"],
    },
    {
      icon: Brain,
      title: "Generative AI & NLP",
      gradient: "bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
      skills: [
        "Text generation",
        "Prompt engineering",
        "Multilingual pipelines",
        "Vector DBs",
        "Hallucination detection",
        "NLG templates",
        "Computer vision",
        "Predictive analytics",
      ],
      description: "Creating AI-powered content generation and natural language understanding systems.",
      whereUsed: "Content platforms, chatbots, document analysis, and translation services",
      depth: "Advanced - Expert in prompt engineering and model optimization",
      similarTools: ["Cohere", "AI21 Labs", "Anthropic Claude", "Gemini"],
    },
    {
      icon: Code,
      title: "Backend & Systems",
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
      description: "Developing robust backend systems and integrations for scalable applications.",
      whereUsed: "Microservices architecture, API development, and ML model deployment",
      depth: "Advanced - 4+ years building production-grade backend systems",
      similarTools: ["Flask", "Django", "Express.js", "Node.js", "Kubernetes"],
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
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
      description: "Architecting and managing cloud infrastructure for high-availability applications.",
      whereUsed: "Production deployments, serverless applications, and infrastructure automation",
      depth: "Intermediate to Advanced - Hands-on experience with AWS and Azure cloud platforms",
      similarTools: ["Google Cloud Platform", "DigitalOcean", "Heroku", "Vercel"],
    },
    {
      icon: Workflow,
      title: "Automation & Orchestration",
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
      description: "Orchestrating complex workflows and automating business processes at scale.",
      whereUsed: "Business process automation, data pipelines, and integration platforms",
      depth: "Advanced - Designed and deployed enterprise-scale automation systems",
      similarTools: ["Zapier", "Make.com", "Prefect", "Dagster", "Temporal"],
    },
    {
      icon: Database,
      title: "Data Engineering",
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
      description: "Building data pipelines and engineering features for machine learning systems.",
      whereUsed: "Data warehouses, analytics platforms, and ML training pipelines",
      depth: "Advanced - Processing millions of records daily in production systems",
      similarTools: ["Spark", "Snowflake", "BigQuery", "Redshift", "dbt"],
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
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
