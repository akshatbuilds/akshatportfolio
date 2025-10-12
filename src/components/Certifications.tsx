import { Award, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: "Salesforce Agentforce AI Specialist",
      issuer: "Salesforce",
      date: "March 2025",
      badge: "Certified",
    },
    {
      title: "Salesforce Certified Platform Developer I",
      issuer: "Salesforce",
      date: "December 2024",
      badge: "Trailhead Ranger (100+ Badges, 100K+ Points)",
    },
    {
      title: "AI Foundations: Prompt Engineering with LLMs",
      issuer: "Coursera",
      date: "June 2025",
    },
    {
      title: "Artificial Intelligence",
      issuer: "SkillUp – NASSCOM",
      date: "August 2024",
    },
    {
      title: "AWS Educate Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "July 2024",
    },
  ];

  const education = {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Chandigarh Engineering College",
    location: "Mohali, India",
    period: "June 2020 - August 2024",
    gpa: "8.1",
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Continuous learning and professional development
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Education */}
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{education.degree}</h3>
                <div className="flex flex-wrap gap-2 text-muted-foreground mb-2">
                  <span className="font-medium">{education.institution}</span>
                  <span>•</span>
                  <span>{education.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground font-mono">
                  <span>{education.period}</span>
                  <span>•</span>
                  <span>GPA: {education.gpa}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:card-glow"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {cert.date}
                    </p>
                    {cert.badge && (
                      <p className="text-xs text-primary mt-2 font-medium">
                        {cert.badge}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
