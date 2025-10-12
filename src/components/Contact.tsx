import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Card } from "./ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akshatchaudhary4088@gmail.com",
      href: "mailto:akshatchaudhary4088@gmail.com",
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+91-9728036616",
      href: "tel:+919728036616",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "AkshatBuilds",
      href: "https://github.com/AkshatBuilds",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ChaudharyAkshat",
      href: "https://linkedin.com/in/ChaudharyAkshat",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open to exciting opportunities in AI engineering and collaboration on innovative projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border hover:border-foreground/20 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="p-3 bg-foreground/5 rounded-lg group-hover:bg-foreground/10 transition-colors">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="font-medium group-hover:text-foreground transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-4">
                Available for freelance projects and full-time opportunities
              </p>
              <a 
                href="mailto:akshatchaudhary4088@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all"
              >
                <Mail className="h-4 w-4" />
                Send me an email
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
