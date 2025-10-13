import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projects = [
    {
      title: "AI Voice Agent Platform",
      period: "January 2025 – March 2025",
      role: "Lead AI Engineer",
      description:
        "Enterprise-grade conversational AI platform managing inbound/outbound calls with natural language understanding, business knowledge base integration, and multi-tenant dashboard system",
      achievements: [
        "Deployed autonomous voice agents achieving ~95% natural conversation accuracy using GPT-4o with function calling and real-time speech-to-speech capabilities",
        "Built multi-tenant analytics dashboards providing sub-client performance insights, reducing manual reporting by ~70%",
        "Integrated bi-directional CRM sync (Salesforce, HubSpot) enabling real-time customer data enrichment and automated workflow triggers",
        "Implemented personalized outreach campaigns with dynamic voice synthesis and sentiment analysis, improving engagement rates by ~45%",
        "Achieved <800ms average response latency with WebRTC-based streaming and edge-optimized inference infrastructure",
      ],
      tech: [
        "OpenAI GPT-4o",
        "WebRTC",
        "Speech-to-Text API",
        "LangChain agents",
        "Twilio Voice API",
        "Salesforce API",
        "HubSpot API",
        "Redis",
        "AWS Lambda",
        "ElevenLabs TTS",
        "Real-time streaming",
      ],
    },
    {
      title: "SmartReports AI",
      period: "August 2024 – November 2024",
      role: "Lead Developer",
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
      title: "CRM Intelligence System",
      period: "June 2024 – September 2024",
      role: "AI Solutions Engineer",
      description:
        "Intelligent automation across HubSpot CRM with autonomous query responses and meeting booking capabilities",
      achievements: [
        "Achieved 85% faster response time through intelligent automation and AI-powered query handling",
        "Increased lead conversion by 42% with autonomous meeting booking and intelligent follow-ups",
        "Reduced manual tasks by 70% through automated workflow orchestration and CRM integration",
        "Implemented real-time synchronization between HubSpot CRM and automated response systems",
      ],
      tech: [
        "HubSpot API",
        "OpenAI GPT-4",
        "n8n",
        "Webhooks",
        "REST API",
        "CRM automation",
        "Workflow orchestration",
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
              data-index={index}
              className={`project-card transition-all duration-700 ease-out ${
                visibleProjects.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="space-y-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <span>{project.period}</span>
                    <span>•</span>
                    <span>{project.role}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4 pt-6">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-[hsl(var(--highlight))] flex-shrink-0">→</span>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {achievement}
                      </p>
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
