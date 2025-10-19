import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { PinContainer } from "@/components/ui/3d-pin";
import OpenAI from "@/components/icons/openai";
import OpenAIDark from "@/components/icons/openai-dark";

const Projects = () => {
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

  return (
    <section id="projects" className="min-h-screen py-16 relative bg-background overflow-hidden flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <PinContainer
                title={project.period}
                containerClassName="w-full h-[500px]"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-full h-[450px]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    {project.shortName}
                  </h3>
                  <div className="text-sm !m-0 !p-0 font-normal mb-4">
                    <span className="text-slate-400 line-clamp-2">
                      {project.description}
                    </span>
                  </div>

                  <div className="space-y-3 flex-1 overflow-hidden">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-300 mb-2">Key Highlights</h4>
                      <ul className="space-y-1">
                        {project.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-400 line-clamp-1">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-slate-300 mb-2">Impact Metrics</h4>
                      {project.metrics.slice(0, 2).map((m, i) => {
                        const colors = { 
                          emerald: "bg-emerald-500", 
                          blue: "bg-blue-500", 
                          violet: "bg-violet-500", 
                          amber: "bg-amber-500" 
                        };
                        return (
                          <div key={i} className="mb-2">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-slate-400">{m.label}</span>
                              <span className="font-semibold text-slate-300">
                                {m.display || `${m.value}${m.suffix || ""}`}
                              </span>
                            </div>
                            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }} 
                                whileInView={{ width: `${Math.min(100, m.value)}%` }} 
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }} 
                                className={`h-full rounded-full ${colors[m.color as keyof typeof colors]}`} 
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 6).map((tech, i) => {
                          const hasOpenAI = tech.includes("OpenAI");
                          return (
                            <div 
                              key={i} 
                              className="flex items-center gap-1 px-2 py-0.5 bg-slate-800/50 rounded text-xs text-slate-300 border border-slate-700/50"
                            >
                              {hasOpenAI && (
                                <>
                                  <OpenAI className="w-3 h-3 dark:hidden" />
                                  <OpenAIDark className="w-3 h-3 hidden dark:block" />
                                </>
                              )}
                              <span className="text-[10px]">{tech}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-blue-500/20 border border-violet-500/20" />
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
