import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CheckCircle2, TrendingUp, Zap, Clock, ArrowUpRight, Plus } from "lucide-react";
import OpenAI from "@/components/icons/openai";
import OpenAIDark from "@/components/icons/openai-dark";
import Anthropic from "@/components/icons/anthropic";
import AnthropicDark from "@/components/icons/anthropic-dark";
import Gemini from "@/components/icons/gemini";
import Mistral from "@/components/icons/mistral";
import DeepSeek from "@/components/icons/deepseek";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      id: "voice-agent",
      title: "AI Voice Agent Platform",
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
      title: "SmartReports AI",
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
      title: "CRM Intelligence System",
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
      title: "RAG Customer Support Agent",
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

  return (
    <section id="projects" className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Real-world AI solutions with measurable impact
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Project Navigation */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentProjectIndex(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  index === currentProjectIndex
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                {project.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Bento Grid */}
          <motion.div
            key={currentProjectIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6"
          >
            {/* Row 1: Overview + Code */}
            <div className="grid md:grid-cols-5 gap-6">
              {/* Project Overview */}
              <BentoCard className="md:col-span-2">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold">{currentProject.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground">{currentProject.period}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentProject.description}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {currentProject.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BentoCard>

              {/* Code Snippet */}
              <BentoCard className="md:col-span-3">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Implementation</h3>
                    <span className="text-xs text-muted-foreground">TypeScript</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Core architecture powering the solution
                  </p>
                  <TypingCodeFeature text={currentProject.codeSnippet} />
                </div>
              </BentoCard>
            </div>

            {/* Row 2: Technologies + Metrics */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Technologies */}
              <BentoCard>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Technologies & Tools</h3>
                  <p className="text-sm text-muted-foreground">
                    Cutting-edge stack powering the solution
                  </p>
                  <TechStackDisplay technologies={currentProject.technologies} />
                </div>
              </BentoCard>

              {/* Client Benefits */}
              <BentoCard>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    <h3 className="text-xl font-bold">Client Impact</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Measurable business outcomes and improvements
                  </p>
                  <MetricsDisplay metrics={currentProject.metrics} />
                  <div className="pt-4 border-t border-border/50 space-y-2">
                    {currentProject.clientBenefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Bento Card Component
const BentoCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [2, -2]);
  const rotateY = useTransform(x, [-100, 100], [-2, 2]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 100);
    y.set(yPct * 100);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative flex flex-col gap-4 h-full rounded-2xl p-6 
        bg-card/30 backdrop-blur-sm border border-border/50
        hover:border-border transition-all duration-300 
        hover:shadow-lg hover:shadow-primary/5 ${className}`}
    >
      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
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
      className="bg-muted/30 dark:bg-black/40 rounded-lg p-4 text-xs font-mono h-[200px] overflow-y-auto border border-border/50"
    >
      <pre className="whitespace-pre-wrap text-foreground/90">
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
            className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg border border-border/50 hover:border-border transition-colors"
          >
            {icon && providerIcons[icon]}
            <span className="text-xs font-medium">{tech}</span>
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
