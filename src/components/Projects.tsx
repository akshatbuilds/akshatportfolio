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
      title: "Real-Time Conversational Intelligence Platform with Multi-Modal AI Integration",
      shortName: "Conversational AI",
      period: "January 2025 – March 2025",
      description: "Enterprise-grade conversational AI orchestrating real-time voice interactions with advanced natural language understanding, contextual memory systems, and intelligent workflow automation across multiple CRM ecosystems",
      highlights: [
        "~95% conversation accuracy with adaptive learning",
        "<800ms ultra-low latency voice processing",
        "Bi-directional CRM synchronization with intelligent data enrichment",
        "Multi-tenant analytics with predictive insights",
        "~45% engagement improvement through AI-driven personalization",
      ],
      codeSnippet: `const voiceAgent = async () => {
  const agent = new AdvancedAIAgent({
    model: 'gpt-4o-realtime',
    voice: 'neural-tts-streaming',
    tools: [
      intelligentCRMSync,
      predictiveAnalytics,
      contextualMemory,
      workflowOrchestrator
    ],
    memory: new MultiModalConversationMemory(),
    reasoning: 'chain-of-thought'
  });
  
  // WebRTC low-latency streaming
  await agent.connect(twilioStream);
  await agent.initializeContextualIntelligence();
  
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
      title: "Multi-Strategy AI Intelligence Engine with Advanced RAG Architecture",
      shortName: "AI Analytics Engine",
      period: "August 2024 – November 2024",
      description: "Sophisticated multilingual reporting system leveraging multiple AI strategies including RAG, semantic search, and intelligent document processing. Evaluates extensive file repositories consecutively, extracts contextual intelligence, and provides actionable insights for automated decision-making targeting global audiences across diverse linguistic markets",
      highlights: [
        "~95% multilingual accuracy with global language support",
        "50% reduction in manual operations through intelligent automation",
        "Advanced RAG pipeline with multi-stage document evaluation",
        "Multilingual intelligence targeting international audiences",
        "Automated workflow triggers based on intelligence extraction",
      ],
      codeSnippet: `const generateIntelligentReport = async (data) => {
  const ragEngine = new AdvancedRAGPipeline({
    embeddings: huggingFaceEmbeddings,
    vectorStore: pineconeVectorDB,
    llm: openai.gpt4Turbo,
    strategies: ['semantic-search', 'chunk-reranking', 'context-fusion']
  });
  
  // Multi-stage intelligence extraction
  const documents = await ragEngine.evaluateDocuments({
    sources: fileRepository,
    consecutive: true,
    contextWindow: 32000
  });
  
  // Generate multilingual reports targeting global audiences
  const report = await ragEngine.synthesize({
    context: documents,
    languages: ['en', 'fr', 'nl', 'de', 'es', 'pt'],
    localization: 'market-adaptive',
    culturalContext: true,
    actionableInsights: true
  });
  
  return report;
};`,
      technologies: ["Hugging Face", "OpenAI", "n8n", "LangChain", "DeepL", "Python", "AWS S3", "Typeform", "Multi-language NLP"],
      metrics: [
        { label: "Report Accuracy", value: 95, suffix: "%", color: "emerald" },
        { label: "Manual Work Reduction", value: 50, suffix: "%", color: "violet" },
        { label: "Global Language Support", value: 100, suffix: "%", color: "blue" },
      ],
      clientBenefits: [
        "Automated multilingual reports for global markets",
        "50% faster report generation across languages",
        "Enhanced international client engagement",
        "Contextual content delivery adapted to regional markets",
      ]
    },
    {
      id: "crm-intelligence",
      title: "AI-Orchestrated CRM Intelligence Platform with Multi-Agent Workflow Automation",
      shortName: "Workflow Orchestration",
      period: "June 2024 – September 2024",
      description: "Sophisticated AI-driven automation ecosystem integrating HubSpot CRM with intelligent agents, webhook orchestration via n8n, and real-time decision intelligence. Implements multi-strategy AI approaches for autonomous query handling, predictive lead scoring, and intelligent workflow execution",
      highlights: [
        "85% faster response times through AI-powered routing",
        "42% increase in lead conversion via predictive intelligence",
        "70% reduction in manual tasks with autonomous agents",
        "Real-time webhook-based event orchestration",
        "n8n-powered workflow automation with intelligent branching",
      ],
      codeSnippet: `const crmIntelligenceAgent = async (query) => {
  const agent = new MultiStrategyIntelligentAgent({
    crm: hubspotAPI,
    llm: openai.gpt4Turbo,
    automation: n8nWebhookOrchestrator,
    tools: [
      autonomousQueryHandler,
      predictiveMeetingScheduler,
      intelligentFollowUp,
      webhookEventProcessor,
      workflowExecutionEngine
    ],
    strategies: ['intent-classification', 'context-analysis', 'predictive-scoring']
  });
  
  const response = await agent
    .processWithIntelligence(query)
    .executeWorkflow()
    .triggerAutomation();
  
  return response;
};`,
      technologies: ["OpenAI GPT-4", "HubSpot API", "n8n", "Webhooks", "REST API", "AI Integration", "Workflow Automation"],
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
      title: "Intelligent Knowledge Management System with Multi-Stage RAG & Semantic Intelligence",
      shortName: "Knowledge Intelligence",
      period: "January 2024 – March 2024",
      description: "Advanced customer support platform implementing multiple AI strategies including retrieval-augmented generation, semantic vector search, and consecutive document evaluation. Processes 100K+ documents with intelligent chunking, contextual reranking, and provides actionable intelligence for complex multi-turn conversations",
      highlights: [
        "92% query resolution through multi-strategy RAG",
        "60% faster responses via intelligent retrieval optimization",
        "100K+ documents processed with semantic understanding",
        "Multi-turn dialogue with persistent contextual memory",
        "Advanced semantic search with consecutive evaluation",
      ],
      codeSnippet: `const intelligentSupportAgent = async (query) => {
  const ragIntelligence = new MultiStageRAGAgent({
    vectorDB: pineconeMultiIndex,
    embeddings: huggingFaceSemanticModel,
    llm: openai.gpt4Turbo,
    memory: persistentConversationalMemory,
    strategies: [
      'semantic-chunking',
      'hierarchical-retrieval',
      'context-reranking',
      'intelligence-fusion'
    ]
  });
  
  // Consecutive document evaluation
  const knowledge = await ragIntelligence
    .evaluateDocumentsConsecutively(query)
    .extractActionableIntelligence()
    .synthesizeResponse();
  
  return knowledge;
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
    <section id="projects" className="py-16 relative bg-background overflow-hidden">
      <GooeySvgFilter id="projects-gooey-filter" strength={screenSize.lessThan("md") ? 8 : 15} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-muted-foreground max-w-2xl mx-auto"
          >
            Real-world AI solutions with measurable impact
          </motion.p>
        </div>

        {/* Gooey Tabs Container */}
        <div className="relative w-full max-w-7xl mx-auto">
          <div
            className="absolute inset-0"
            style={{ filter: "url(#projects-gooey-filter)" }}
          >
            <div className="flex w-full">
              {projects.map((_, index) => (
                <div key={index} className="relative flex-1 h-10">
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
            <div className="w-full h-[calc(100vh-400px)] min-h-[500px] max-h-[700px] bg-primary/10 dark:bg-primary/20" />
          </div>

          {/* Interactive text overlay */}
          <div className="relative flex w-full">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentProjectIndex(index)}
                className="flex-1 h-10 text-xs sm:text-sm"
              >
                <span
                  className={`w-full h-full flex items-center justify-center font-medium transition-colors ${
                    currentProjectIndex === index
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {project.shortName}
                </span>
              </button>
            ))}
          </div>

          {/* Project Content */}
          <div className="relative w-full h-[calc(100vh-400px)] min-h-[500px] max-h-[700px] overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentProjectIndex}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="p-4 md:p-8 h-full overflow-y-auto"
              >
                {/* Active Project Label - Positioned above container */}
                <div className="flex justify-center mb-3">
                  <motion.div
                    key={`label-${currentProjectIndex}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="px-4 py-1.5 bg-background/90 backdrop-blur-sm rounded-t-2xl border border-b-0 border-border/50 text-xs font-medium"
                  >
                    {currentProject.title}
                  </motion.div>
                </div>

                {/* Styled Container Wrapper */}
                <div className="bg-background/80 backdrop-blur-sm rounded-3xl border border-border/50 p-4 md:p-6 shadow-lg h-full">
                  {/* Project Header - More compact */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {currentProject.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{currentProject.description}</p>
                  </div>

                  {/* Bento Grid Content - Optimized for single view */}
                  <div className="grid lg:grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="space-y-4">
                      {/* Highlights */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-primary" />
                          Key Features
                        </h4>
                        <ul className="space-y-1.5">
                          {currentProject.highlights.slice(0, 4).map((highlight, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05 * idx }}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-muted-foreground">{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-primary" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {currentProject.technologies.slice(0, 6).map((tech, i) => {
                            const icon = Object.keys(providerIcons).find(key => tech.includes(key));
                            return (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.03 * i }}
                                className="flex items-center gap-1.5 px-2 py-1 bg-background/50 rounded-md border border-border/50 text-xs"
                              >
                                {icon && providerIcons[icon]}
                                <span className="text-xs">{tech}</span>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      {/* Code Implementation */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          Implementation
                        </h4>
                        <div className="bg-neutral-900 dark:bg-black text-neutral-100 rounded-lg p-3 text-[10px] font-mono max-h-[180px] overflow-y-auto">
                          <pre className="whitespace-pre-wrap">{currentProject.codeSnippet}</pre>
                        </div>
                      </div>

                      {/* Metrics & Benefits */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold flex items-center gap-2">
                          <TrendingUp className="w-3.5 h-3.5 text-primary" />
                          Client Impact
                        </h4>
                        <div className="space-y-2">
                          {currentProject.metrics.map((metric, idx) => {
                            const colorClasses = {
                              emerald: "bg-emerald-500",
                              blue: "bg-blue-500",
                              violet: "bg-violet-500",
                              amber: "bg-amber-500",
                            };
                            return (
                              <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 * idx }}
                              >
                                <div className="flex justify-between text-xs mb-1">
                                  <span className="text-muted-foreground">{metric.label}</span>
                                  <span className="font-semibold">
                                    {metric.display || `${metric.value}${metric.suffix || ""}`}
                                  </span>
                                </div>
                                <div className="h-1.5 bg-background/50 rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min(100, metric.value)}%` }}
                                    transition={{ duration: 0.8, delay: 0.05 * idx }}
                                    className={`h-full rounded-full ${
                                      colorClasses[metric.color as keyof typeof colorClasses]
                                    }`}
                                  />
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                        <div className="pt-2 border-t border-border/50 space-y-1.5">
                          {currentProject.clientBenefits.slice(0, 3).map((benefit, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05 * i }}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-muted-foreground">{benefit}</span>
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

// Provider Icons for Tech Stack
const providerIcons: Record<string, JSX.Element> = {
  "OpenAI GPT-4o": <><OpenAI className="w-4 h-4 dark:hidden" /><OpenAIDark className="w-4 h-4 hidden dark:block" /></>,
  "OpenAI GPT-4": <><OpenAI className="w-4 h-4 dark:hidden" /><OpenAIDark className="w-4 h-4 hidden dark:block" /></>,
  "OpenAI": <><OpenAI className="w-4 h-4 dark:hidden" /><OpenAIDark className="w-4 h-4 hidden dark:block" /></>,
  "Anthropic": <><Anthropic className="w-4 h-4 dark:hidden" /><AnthropicDark className="w-4 h-4 hidden dark:block" /></>,
  "Google": <Gemini className="w-4 h-4" />,
  "Mistral": <Mistral className="w-4 h-4" />,
  "DeepSeek": <DeepSeek className="w-4 h-4" />,
};

export default Projects;
