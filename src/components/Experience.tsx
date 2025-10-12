import { Building2, Calendar } from "lucide-react";

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
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Building AI solutions that drive real business impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">{experience.role}</h3>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <span>{experience.company}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.period}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="flex gap-3 group">
                  <span className="text-[hsl(var(--highlight))] mt-1.5 flex-shrink-0">→</span>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
