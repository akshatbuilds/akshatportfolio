import { Linkedin, Mail, Phone } from "lucide-react";

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
      icon: Linkedin,
      label: "LinkedIn",
      value: "ChaudharyAkshat",
      href: "https://linkedin.com/in/ChaudharyAkshat",
    },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Open to exciting opportunities in AI engineering and collaboration on innovative projects
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-8 mb-16">
            <a 
              href="mailto:akshatchaudhary4088@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-all text-lg"
            >
              <Mail className="h-5 w-5" />
              Get in touch
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center gap-3 group"
                >
                  <Icon className="h-7 w-7 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-20 pt-8 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Akshat Chaudhary. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
