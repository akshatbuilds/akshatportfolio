import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project Sync AI Agent",
      period: "April 2024 – July 2024",
      role: "Lead Developer",
      description:
        "Multi-agent project management automation system using LangChain-based agents to automate task creation, status updates, and stakeholder notifications",
      achievements: [
        "Improved operational efficiency by ~25% through AI agent-driven automation",
        "Created dynamic dashboards with responsive HTML/CSS templating (Tailwind & LiquidJS)",
        "Developed nightly batch-processing pipelines with Python and Terraform-provisioned AWS Lambda",
        "Reduced manual data steps by ~40%",
      ],
      tech: [
        "LangChain agents",
        "Python",
        "AWS Lambda",
        "Terraform",
        "TensorFlow",
        "PyTorch",
        "TailwindCSS",
      ],
    },
    {
      title: "SmartReports AI",
      period: "August 2024 – November 2024",
      role: "Lead Developer | TwoPir Consulting",
      description:
        "RAG-powered multilingual reporting system integrating Hugging Face + OpenAI + n8n for automated client report generation",
      achievements: [
        "Achieved ~95% accuracy with RAG-powered multilingual reporting",
        "Implemented automation workflows via n8n and REST triggers",
        "Reduced manual operations by ~50% across multi-client workflows",
        "Enhanced client engagement with contextualized multilingual content (English/French/Dutch)",
      ],
      tech: [
        "Hugging Face",
        "Typeform",
        "n8n",
        "LangChain agents",
        "OpenAI LLMs",
        "DeepL API",
        "Python",
        "AWS S3",
      ],
    },
    {
      title: "OrderSync Agent",
      period: "December 2024 – March 2025",
      role: "Developer | TwoPir Consulting",
      description:
        "Autonomous AI agent system for order lifecycle management with real-time insights, predictive analytics, and self-healing workflows",
      achievements: [
        "Built autonomous agent loops with PyTorch-based anomaly detection improving tracking consistency by ~25%",
        "Implemented multi-agent orchestration for real-time alerts, customer notifications, and predictive order insights",
        "Achieved zero-downtime deployments with containerized agent services and CI/CD automation",
        "Reduced deployment cycle time by ~30% through automated testing and rollback mechanisms",
      ],
      tech: [
        "LangChain agents",
        "PyTorch",
        "Docker",
        "Jenkins",
        "REST API",
        "Real-time ML inference",
        "Multi-agent systems",
      ],
    },
    {
      title: "RAG-Enhanced Customer Support Agent",
      period: "January 2024 – March 2024",
      role: "AI Engineer",
      description:
        "Intelligent customer support system using retrieval-augmented generation with vector search and conversational memory",
      achievements: [
        "Achieved 92% query resolution accuracy using RAG with Pinecone vector database",
        "Reduced average response time by ~60% with context-aware LangChain agent loops",
        "Implemented conversational memory and multi-turn dialogue handling for improved UX",
        "Built semantic search pipeline processing 100K+ documents with Hugging Face embeddings",
      ],
      tech: [
        "LangChain agents",
        "Pinecone",
        "OpenAI GPT-4",
        "Hugging Face",
        "Vector embeddings",
        "Python",
        "FastAPI",
      ],
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Real-world AI solutions with measurable impact
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[hsl(var(--highlight))] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                    <span>{project.period}</span>
                    <span>•</span>
                    <span>{project.role}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                <div className="space-y-3">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-[hsl(var(--highlight))] mt-1.5 flex-shrink-0">→</span>
                      <span className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 bg-muted/50 text-muted-foreground rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {index < projects.length - 1 && (
                <div className="h-px bg-border/30 mt-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
