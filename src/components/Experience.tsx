import { Building2, Calendar } from "lucide-react";
import { Card } from "./ui/card";

const Experience = () => {
  const experience = {
    company: "TwoPir Consulting",
    role: "Associate AI & Automation Engineer",
    location: "Chandigarh, India",
    period: "April 2024 - Present",
    achievements: [
      "Delivered end-to-end AI-driven automation using LangChain agents, GPT-4/Claude APIs, and multi-agent orchestration frameworks, reducing manual intervention by ~40%",
      "Integrated platforms including Typeform, Slack, HubSpot via OpenAI APIs to build conversational automation pipelines, improving client engagement by ~30%",
      "Managed data preprocessing and pipeline engineering using Python (Pandas, NumPy) and SQL/NoSQL, improving model input quality by ~25%",
      "Executed cloud infrastructure and MLOps: deployed inference workloads on AWS Lambda, ECS, S3 using Docker and Terraform for CI/CD automation",
      "Collaborated with international stakeholders to architect AI-first automation solutions with measurable ROI improvements",
    ],
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building AI solutions that drive real business impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 card-glow">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gradient">{experience.role}</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  <span className="font-medium">{experience.company}</span>
                  <span>•</span>
                  <span>{experience.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                <Calendar className="h-4 w-4" />
                <span>{experience.period}</span>
              </div>
            </div>

            <div className="space-y-3">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="flex gap-3 group">
                  <div className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
