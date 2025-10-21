import { Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import UnderlineToBackground from "@/components/fancy/text/underline-to-background";

const Contact = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const headingWords = "Let's Connect".split(" ");
  const descriptionWords = "Open to exciting opportunities in AI engineering and collaboration on innovative projects".split(" ");

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
    <section id="contact" className="min-h-screen py-32 relative flex items-center">
      <div className="container mx-auto px-6 max-w-6xl w-full">
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            {descriptionWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="flex flex-col items-center gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <a 
              href="mailto:akshatchaudhary4088@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-all text-lg"
            >
              <Mail className="h-5 w-5" />
              <UnderlineToBackground
                targetTextColor="hsl(var(--background))"
                className="cursor-pointer"
              >
                Get in touch
              </UnderlineToBackground>
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center gap-3 group"
                  variants={wordVariants}
                >
                  <Icon className="h-7 w-7 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <UnderlineToBackground
                      targetTextColor="hsl(0, 0%, 0%)"
                      className="cursor-pointer"
                    >
                      <p className="text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                        {item.value}
                      </p>
                    </UnderlineToBackground>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

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
