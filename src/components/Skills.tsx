import { Bot, Brain, Cloud, Code, Database, Workflow } from "lucide-react";
import { Card } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Bot,
      title: "AI & Agentic AI",
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
      skills: [
        "Text generation",
        "Prompt engineering",
        "Multilingual pipelines",
        "Vector DBs (Pinecone, Weaviate)",
        "Hallucination detection",
        "NLG templates",
      ],
    },
    {
      icon: Code,
      title: "Backend & Systems",
      skills: [
        "Python",
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
      skills: [
        "AWS (Lambda, EC2, S3)",
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
      skills: [
        "n8n automations",
        "Airflow DAGs",
        "Multi-agent orchestration",
        "Workflow automation",
        "API integrations",
        "Event-driven systems",
      ],
    },
    {
      icon: Database,
      title: "Data Engineering",
      skills: [
        "Pandas & NumPy",
        "SQL/NoSQL",
        "Data preprocessing",
        "Feature engineering",
        "ETL pipelines",
        "Model optimization",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable AI systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:card-glow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-sm px-3 py-1 bg-secondary rounded-full text-secondary-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
