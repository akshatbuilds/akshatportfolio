"use client";

import React, { useState } from "react";
import { Bot, Brain, Cloud, Code, Database, Workflow, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
    };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const Icon = category.icon;
    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-2xl relative overflow-hidden h-[400px] md:h-[500px] w-full transition-all duration-300 ease-out border border-border/50",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        {/* Background gradient */}
        <div className={cn("absolute inset-0", category.gradient)} />
        
        {/* Content overlay */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        
        {/* Icon background */}
        <div className="absolute top-8 left-8 p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50">
          <Icon className="h-8 w-8 text-[hsl(var(--highlight))]" />
        </div>
        
        {/* Title always visible */}
        <div className="absolute top-8 right-8 left-28">
          <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
        </div>
        
        {/* Skills list - shows on hover */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="w-full max-w-md space-y-3">
            {category.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="flex items-center gap-3 bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-3 transform transition-all duration-200"
                style={{
                  transitionDelay: `${skillIndex * 30}ms`,
                }}
              >
                <span className="text-[hsl(var(--highlight))] flex-shrink-0 font-bold">→</span>
                <span className="text-foreground font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Hover instruction */}
        <div
          className={cn(
            "absolute bottom-8 left-8 right-8 text-center transition-opacity duration-300",
            hovered === index ? "opacity-0" : "opacity-100"
          )}
        >
          <p className="text-sm text-muted-foreground">Hover to view skills</p>
        </div>
      </div>
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
    },
    {
      icon: Brain,
      title: "Generative AI & NLP",
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
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
