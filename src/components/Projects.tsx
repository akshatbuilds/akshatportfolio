import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import { CheckCircle2, TrendingUp, Zap, Clock, Sparkles } from "lucide-react";
import OpenAI from "@/components/icons/openai";
import OpenAIDark from "@/components/icons/openai-dark";
import Anthropic from "@/components/icons/anthropic";
import AnthropicDark from "@/components/icons/anthropic-dark";
import Gemini from "@/components/icons/gemini";
import Mistral from "@/components/icons/mistral";
import DeepSeek from "@/components/icons/deepseek";
import useDetectBrowser from "@/hooks/use-detect-browser";
import useScreenSize from "@/hooks/use-screen-size";
import GooeySvgFilter from "@/components/fancy/filter/gooey-svg-filter";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      id: "voice-agent",
      title: "Enterprise Voice Intelligence Platform",
      period: "January 2025 – March 2025",
      description: "Enterprise-grade conversational AI platform managing inbound/outbound calls with natural language understanding",
      highlights: [
        "~95% natural conversation accuracy",
        "<800ms average response latency",
        "Real-time CRM synchronization",
        "Multi-tenant analytics dashboards",
        "~45% engagement rate improvement",
      ],
      codeSnippet: `const voiceAgent = async () => {
  const agent = new AIAgent({
    model: 'gpt-4o',
    voice: 'realtime-tts',
    tools: [crmSync, analytics],
    memory: new ConversationMemory()
  });
  
  // WebRTC streaming
  await agent.connect(twilioStream);
  
  return agent;
};`,
      technologies: ["OpenAI GPT-4o", "WebRTC", "Twilio", "Salesforce", "HubSpot", "Redis", "AWS Lambda", "ElevenLabs"],
      metrics: [
        { label: "Conversation Accuracy", value: 95, suffix: "%", color: "emerald" },
        { label: "Response Latency", value: 800, suffix: "ms", color: "blue", display: "<800ms" },
        { label: "Engagement Improvement", value: 45, suffix: "%", color: "violet" },
      ],
      clientBenefits: [
        "70% reduction in manual reporting",
        "Real-time customer data enrichment",
        "Automated workflow triggers",
        "Sub-client performance insights",
      ]
    },
    {
      id: "smartreports",
      title: "Intelligent Business Analytics Engine",
      period: "August 2024 – November 2024",
      description: "RAG-powered multilingual reporting system with automated client report generation",
      highlights: [
        "~95% multilingual accuracy",
        "50% reduction in manual operations",
        "Automated workflow triggers",
        "3-language content generation",
        "Enterprise-grade scalability",
      ],
      codeSnippet: `const generateReport = async (data) => {
  const rag = new RAGPipeline({
    embeddings: huggingFaceEmbeddings,
    vectorStore: pinecone,
    llm: openai.gpt4
  });
  
  // Multi-language generation
  const report = await rag.query({
    context: clientData,
    languages: ['en', 'fr', 'nl']
  });
  
  return report;
};`,
      technologies: ["Hugging Face", "OpenAI", "n8n", "LangChain", "DeepL", "Python", "AWS S3", "Typeform"],
      metrics: [
        { label: "Report Accuracy", value: 95, suffix: "%", color: "emerald" },
        { label: "Manual Work Reduction", value: 50, suffix: "%", color: "violet" },
        { label: "Languages Supported", value: 3, suffix: "", color: "blue" },
      ],
      clientBenefits: [
        "Automated multilingual reports",
        "50% faster report generation",
        "Enhanced client engagement",
        "Contextual content delivery",
      ]
    },
    {
      id: "crm-intelligence",
      title: "Sales Acceleration AI Platform",
      period: "June 2024 – September 2024",
      description: "Intelligent automation across HubSpot CRM with autonomous query responses and meeting booking",
      highlights: [
        "85% faster response times",
        "42% increase in lead conversion",
        "70% reduction in manual tasks",
        "Real-time CRM synchronization",
        "Intelligent follow-up automation",
      ],
      codeSnippet: `const crmAgent = async (query) => {
  const agent = new IntelligentAgent({
    crm: hubspotAPI,
    llm: openai.gpt4,
    tools: [
      queryHandler,
      meetingScheduler,
      followUpAutomation
    ]
  });
  
  const response = await agent
    .processQuery(query)
    .scheduleFollowUp();
  
  return response;
};`,
      technologies: ["HubSpot API", "OpenAI GPT-4", "n8n", "Webhooks", "REST API", "CRM automation"],
      metrics: [
        { label: "Response Speed", value: 85, suffix: "%", color: "emerald" },
        { label: "Lead Conversion", value: 42, suffix: "%", color: "violet" },
        { label: "Manual Task Reduction", value: 70, suffix: "%", color: "blue" },
      ],
      clientBenefits: [
        "Autonomous query handling",
        "Intelligent meeting booking",
        "Workflow orchestration",
        "Real-time synchronization",
      ]
    },
    {
      id: "rag-support",
      title: "Knowledge-Augmented Support Intelligence",
      period: "January 2024 – March 2024",
      description: "Intelligent support system using retrieval-augmented generation with vector search",
      highlights: [
        "92% query resolution accuracy",
        "60% faster response times",
        "100K+ documents processed",
        "Multi-turn dialogue handling",
        "Conversational memory",
      ],
      codeSnippet: `const supportAgent = async (query) => {
  const rag = new RAGAgent({
    vectorDB: pinecone,
    embeddings: huggingFace,
    llm: openai.gpt4,
    memory: conversationalMemory
  });
  
  const answer = await rag
    .search(query)
    .generateResponse();
  
  return answer;
};`,
      technologies: ["LangChain", "Pinecone", "OpenAI GPT-4", "Hugging Face", "Vector embeddings", "Python", "FastAPI"],
      metrics: [
        { label: "Query Resolution", value: 92, suffix: "%", color: "emerald" },
        { label: "Response Time Improvement", value: 60, suffix: "%", color: "blue" },
        { label: "Documents Processed", value: 100, suffix: "K+", color: "violet" },
      ],
      clientBenefits: [
        "Context-aware responses",
        "Multi-turn conversations",
        "Semantic search pipeline",
        "Reduced support costs",
      ]
    },
  ];

  const currentProject = projects[currentProjectIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const screenSize = useScreenSize();
  const browserName = useDetectBrowser();
  const isSafari = browserName === "Safari";

  return (
    <section id="projects" className="py-32 relative bg-background overflow-hidden">
      <GooeySvgFilter id="projects-gooey-filter" strength={screenSize.lessThan("md") ? 8 : 15} />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto"
          >
            Real-world AI solutions with measurable impact
          </motion.p>
        </div>

        {/* Gooey Tabs Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div
            className="absolute inset-0"
            style={{ filter: "url(#projects-gooey-filter)" }}
          >
            <div className="flex w-full">
              {projects.map((_, index) => (
                <div key={index} className="relative flex-1 h-12 md:h-14">
                  {currentProjectIndex === index && (
                    <motion.div
                      layoutId="active-project-tab"
                      className="absolute inset-0 bg-primary/10 dark:bg-primary/20"
                      transition={{
                        type: "spring",
                        bounce: 0.0,
                        duration: isSafari ? 0 : 0.4,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            {/* Content panel background */}
            <div className="w-full min-h-[600px] bg-primary/10 dark:bg-primary/20" />
          </div>

          {/* Interactive text overlay */}
          <div className="relative flex w-full">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentProjectIndex(index)}
                className="flex-1 h-12 md:h-14 text-xs sm:text-sm md:text-base"
              >
                <span
                  className={`w-full h-full flex items-center justify-center font-medium transition-colors ${
                    currentProjectIndex === index
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {project.title.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Project Content - Wrapped in styled container */}
          <div className="relative w-full min-h-[600px] overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentProjectIndex}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="p-6 md:p-12"
              >
                {/* Styled Container Wrapper */}
                <div className="bg-background/80 backdrop-blur-sm rounded-3xl border border-border/50 p-6 md:p-10 shadow-lg">
                  {/* Project Header */}
                  <div className="mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {currentProject.title}
                      </h3>
                      <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-muted/50 w-fit">
                        {currentProject.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-base">{currentProject.description}</p>
                  </div>

                  {/* Bento Grid Content */}
                  <div className="grid gap-6">
                    {/* Row 1: Highlights + Code */}
                    <div className="grid md:grid-cols-5 gap-6">
                      {/* Highlights */}
                      <div className="md:col-span-2 space-y-4">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-primary" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {currentProject.highlights.map((highlight, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * idx }}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Code Implementation */}
                      <div className="md:col-span-3 space-y-4">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          Implementation
                        </h4>
                        <TypingCodeFeature text={currentProject.codeSnippet} />
                      </div>
                    </div>

                    {/* Row 2: Technologies + Metrics */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Technologies */}
                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Zap className="w-4 h-4 text-primary" />
                          Technologies
                        </h4>
                        <TechStackDisplay technologies={currentProject.technologies} />
                      </div>

                      {/* Metrics & Benefits */}
                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          Client Impact
                        </h4>
                        <MetricsDisplay metrics={currentProject.metrics} />
                        <div className="pt-4 border-t border-border/50 space-y-2">
                          {currentProject.clientBenefits.map((benefit, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i }}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// Typing Code Animation
const TypingCodeFeature = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, Math.random() * 30 + 10);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div
      ref={terminalRef}
      className="bg-neutral-900 dark:bg-black text-neutral-100 rounded-lg p-4 text-xs font-mono h-[180px] overflow-y-auto"
    >
      <pre className="whitespace-pre-wrap">
        {displayedText}
        <span className="animate-pulse">|</span>
      </pre>
    </div>
  );
};

// Tech Stack Display
const TechStackDisplay = ({ technologies }: { technologies: string[] }) => {
  const providerIcons: Record<string, JSX.Element> = {
    "OpenAI GPT-4o": <><OpenAI className="w-5 h-5 dark:hidden" /><OpenAIDark className="w-5 h-5 hidden dark:block" /></>,
    "OpenAI GPT-4": <><OpenAI className="w-5 h-5 dark:hidden" /><OpenAIDark className="w-5 h-5 hidden dark:block" /></>,
    "OpenAI": <><OpenAI className="w-5 h-5 dark:hidden" /><OpenAIDark className="w-5 h-5 hidden dark:block" /></>,
    "Anthropic": <><Anthropic className="w-5 h-5 dark:hidden" /><AnthropicDark className="w-5 h-5 hidden dark:block" /></>,
    "Google": <Gemini className="w-5 h-5" />,
    "Mistral": <Mistral className="w-5 h-5" />,
    "DeepSeek": <DeepSeek className="w-5 h-5" />,
  };

  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, i) => {
        const icon = Object.keys(providerIcons).find(key => tech.includes(key));
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-lg border border-border/50"
          >
            {icon && providerIcons[icon]}
            <span className="text-xs">{tech}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

// Metrics Display
const MetricsDisplay = ({ metrics }: { metrics: Array<{ label: string; value: number; suffix?: string; color?: string; display?: string }> }) => {
  const getColorClass = (color = "emerald") => {
    const colors = {
      emerald: "bg-emerald-500",
      blue: "bg-blue-500",
      violet: "bg-violet-500",
      amber: "bg-amber-500",
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  const getIcon = (label: string) => {
    if (label.includes("Speed") || label.includes("Response")) return <Zap className="w-3.5 h-3.5" />;
    if (label.includes("Time") || label.includes("Latency")) return <Clock className="w-3.5 h-3.5" />;
    return <TrendingUp className="w-3.5 h-3.5" />;
  };

  return (
    <div className="space-y-3">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="space-y-1"
        >
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-1.5 font-medium">
              {getIcon(metric.label)}
              {metric.label}
            </div>
            <div className="font-semibold">
              {metric.display || `${metric.value}${metric.suffix || ""}`}
            </div>
          </div>
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${getColorClass(metric.color)}`}
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(100, metric.value)}%` }}
              transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
