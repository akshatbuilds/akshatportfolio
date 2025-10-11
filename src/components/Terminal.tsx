import { X, Terminal as TerminalIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface TerminalProps {
  open: boolean;
  onClose: () => void;
}

const Terminal = ({ open, onClose }: TerminalProps) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: "",
      output: "Welcome to Akshat's Terminal v1.0.0\nType 'help' for available commands.",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const commands: Record<string, string> = {
    help: `Available commands:
- about: Learn about Akshat
- skills: View technical skills
- projects: List key projects
- certifications: View certifications
- education: View education background
- contact: Get contact information
- clear: Clear terminal
- easteregg: Find the hidden surprise 🥚`,
    about: `Akshat Chaudhary - AI & Agentic AI Engineer
Currently working at TwoPir Consulting
Specializing in LangChain, GPT-4, AWS, and autonomous AI systems
Building the future, one agent at a time.`,
    skills: `Core Skills:
→ AI & Agentic AI: LangChain, LangGraph, GPT-4, Claude
→ Cloud & DevOps: AWS (Lambda, ECS, S3), Docker, Terraform
→ Backend: Python, REST APIs, Salesforce
→ Automation: n8n, Airflow, Multi-agent orchestration`,
    projects: `Featured Projects:
1. Project Sync AI Agent - Multi-agent PM automation (25% efficiency gain)
2. SmartReports AI - RAG-powered multilingual reports (95% accuracy)
3. OrderSync Agent - Autonomous order processing (25% improved tracking)
4. RAG-Enhanced Customer Support Agent - Intelligent support with 92% accuracy`,
    certifications: `Certifications:
→ Artificial Intelligence - SkillUp – NASSCOM (August 2024)
→ AI Foundations: Prompt Engineering with LLMs - Coursera (June 2025)
→ AWS Educate Cloud Foundations - Amazon Web Services (July 2024)
→ Salesforce Certified Platform Developer I (December 2024)
→ Trailhead Ranger - 100+ Badges, 100K+ Points`,
    education: `Education:
Chandigarh Engineering College, Mohali, India
Bachelor of Technology | Computer Science
GPA: 8.1 | June 2020 - August 2024`,
    contact: `Contact Information:
📧 Email: akshatchaudhary4088@gmail.com
📱 Mobile: +91-9728036616
🔗 GitHub: github.com/AkshatBuilds
💼 LinkedIn: linkedin.com/in/ChaudharyAkshat`,
    easteregg: `🎉 You found the Easter egg!

"The best way to predict the future is to invent it." - Alan Kay

Fun fact: This portfolio was designed to showcase not just skills,
but attention to detail. You found the hidden terminal by pressing Ctrl+K!

Other hidden features to discover:
- Hover effects on project cards
- Smooth scroll animations
- Dynamic typing effect in hero section

Keep exploring! 🚀`,
    clear: "CLEAR",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.trim().toLowerCase();

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = commands[command] || `Command not found: ${command}\nType 'help' for available commands.`;

    setHistory([...history, { command: input, output }]);
    setInput("");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <Card className="w-full max-w-3xl h-[600px] bg-card border-primary/50 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <TerminalIcon className="h-5 w-5 text-primary" />
            <span className="font-mono font-bold">akshat@terminal:~$</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:text-destructive"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div ref={historyRef} className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-4">
          {history.map((entry, index) => (
            <div key={index} className="space-y-1">
              {entry.command && (
                <div className="flex gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-foreground">{entry.command}</span>
                </div>
              )}
              <pre className="text-muted-foreground whitespace-pre-wrap pl-4">
                {entry.output}
              </pre>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-border">
          <div className="flex gap-2 items-center">
            <span className="text-primary font-mono">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-foreground font-mono"
              placeholder="Type a command..."
              autoComplete="off"
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Terminal;
