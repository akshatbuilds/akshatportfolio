import { Bot, Brain, Cloud, Code, Database, Workflow } from "lucide-react";

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
        "Computer vision",
        "Predictive analytics",
      ],
    },
    {
      icon: Code,
      title: "Backend & Systems",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group"
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="h-6 w-6 text-[hsl(var(--highlight))]" />
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span className="text-[hsl(var(--highlight))] flex-shrink-0">→</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
