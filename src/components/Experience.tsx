"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const Experience = () => {
  const experience = {
    company: "Freelance",
    role: "AI & Automation Engineer",
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
    <section id="experience" className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-foreground">
              Professional Experience
            </h2>
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
              Building AI Solutions
            </span>
          </>
        }
      >
        <div className="h-full w-full bg-background p-6 md:p-8 overflow-y-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {experience.role}
              </h3>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.period}</span>
                </div>
                <span className="text-muted-foreground">
                  {experience.company} • {experience.location}
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="flex gap-3 group">
                  <span className="text-[hsl(var(--highlight))] flex-shrink-0 text-lg">
                    →
                  </span>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default Experience;
