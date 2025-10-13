import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
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
