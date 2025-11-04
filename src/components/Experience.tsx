"use client";

import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const Experience = () => {
  const experience = {
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
            <h2 className="text-4xl font-semibold text-foreground dark:text-white">
              Professional Experience <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Building AI Solutions
              </span>
            </h2>
          </>
        }
      >
        <div className="mx-auto rounded-2xl w-full h-full relative bg-background border-2 border-border overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          
          <div className="relative h-full p-8 md:p-12 space-y-8 overflow-y-auto overscroll-contain" style={{ scrollbarGutter: "stable both-edges" }}>
            {/* Header Card */}
            <div className="bg-card/40 border border-border rounded-xl p-6 space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                {experience.role}
              </h3>
              
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[hsl(var(--highlight))]" />
                  <span className="font-medium">{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[hsl(var(--highlight))]" />
                  <span className="font-medium">{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Achievements Cards */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground mb-4">Key Achievements</h4>
              {experience.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-card/20 border border-border/50 rounded-lg p-5 hover:bg-card/40 transition-all duration-300 hover:scale-[1.01] hover:shadow-md group transform-gpu"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-[hsl(var(--highlight))] font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground transition-colors">
                      {achievement}
                    </p>
                  </div>
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
