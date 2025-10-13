import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Patient Data Automation",
      period: "2024",
      role: "AI Solutions Engineer",
      description:
        "AI-powered patient data extraction and automated workflow optimization system for healthcare providers",
      achievements: [
        "70% reduction in data entry time through intelligent document processing",
        "50% faster patient processing with automated workflow management",
        "Improved data accuracy with AI-powered validation and error detection",
        "Automated patient data extraction from multiple document formats",
        "Reduced manual workload by 30+ hours per week",
      ],
      tech: [
        "Python",
        "OpenAI",
        "FastAPI",
        "PostgreSQL",
        "n8n",
        "Document Processing",
        "Workflow Automation",
      ],
    },
    {
      title: "Multi-Channel Support Automation",
      period: "2024",
      role: "Lead Developer",
      description:
        "AI chatbot with multi-channel integration and automated ticket routing for seamless customer support",
      achievements: [
        "80% reduction in response time from 24 hours to near-instant replies",
        "60% decrease in support workload through intelligent automation",
        "Improved customer satisfaction with 24/7 availability",
        "Automated ticket routing and priority classification",
        "Multi-channel support across WhatsApp, email, and web platforms",
      ],
      tech: [
        "Python",
        "OpenAI",
        "WhatsApp API",
        "Zendesk APIs",
        "n8n",
        "Multi-channel Integration",
        "NLP",
      ],
    },
    {
      title: "CRM Intelligence System",
      period: "2024",
      role: "AI Engineer",
      description:
        "Intelligent automation across HubSpot CRM with autonomous query responses and meeting booking capabilities",
      achievements: [
        "85% faster response time with AI-powered query handling",
        "42% increase in lead conversion through intelligent engagement",
        "70% reduction in manual CRM tasks through automation",
        "Automated meeting scheduling and follow-up workflows",
        "Real-time lead scoring and prioritization",
      ],
      tech: [
        "HubSpot API",
        "OpenAI GPT-4",
        "n8n",
        "Webhooks",
        "CRM Integration",
        "Workflow Automation",
      ],
    },
    {
      title: "WhatsApp Customer Bot",
      period: "2024",
      role: "Developer",
      description:
        "Conversational AI bot for customer interaction with intelligent routing and automated support workflows",
      achievements: [
        "94% customer satisfaction rating with natural language interactions",
        "60% faster resolution time through intelligent routing",
        "45% reduction in support costs with automated responses",
        "24/7 customer support availability",
        "Automated ticket escalation and handoff to human agents",
      ],
      tech: [
        "WhatsApp Business API",
        "NLP",
        "Dialogflow",
        "Cloud Functions",
        "Conversational AI",
      ],
    },
    {
      title: "Voice AI Assistant",
      period: "2024",
      role: "AI Engineer",
      description:
        "Custom voice agent with CRM and calendar integration for automated meeting scheduling and follow-ups",
      achievements: [
        "89% booking success rate with natural voice interactions",
        "55% reduction in no-shows through automated reminders",
        "80% less administrative time with automated scheduling",
        "Real-time CRM updates and data synchronization",
        "Intelligent follow-up and rescheduling workflows",
      ],
      tech: [
        "Speech-to-Text",
        "Calendar APIs",
        "CRM Integration",
        "Voice Synthesis",
        "Real-time Processing",
      ],
    },
    {
      title: "AI Reporting Engine",
      period: "2024",
      role: "Lead AI Engineer",
      description:
        "RAG-powered intelligent reporting system generating customized insights from complex business data",
      achievements: [
        "90% faster report generation with automated data processing",
        "99.2% data accuracy through intelligent validation",
        "65% faster decision making with real-time insights",
        "Automated report customization based on user preferences",
        "Multi-format report generation (PDF, Excel, PowerPoint)",
      ],
      tech: [
        "RAG Architecture",
        "Vector Databases",
        "LangChain",
        "Business Intelligence",
        "Data Analytics",
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
            <div key={index}>
              <div className="space-y-6">
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
