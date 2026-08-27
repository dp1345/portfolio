import React, { useState } from 'react';
import { 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Workflow, 
  ShieldCheck, 
  Code2, 
  Zap, 
  ChevronDown, 
  ArrowUpRight,
  Cpu,
  RefreshCw,
  GitBranch,
  FileCheck,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AIAgentsServicePageProps {
  onOpenInquiry: () => void;
  onNavigate: (section: string) => void;
}

const AGENT_DELIVERABLES = [
  {
    title: "Autonomous Reasoning & Multi-Agent Pipelines",
    desc: "Self-directed AI agents (LangGraph / CrewAI) that break complex goals into tasks, reason dynamically, and call specialized tools.",
    icon: Cpu
  },
  {
    title: "Zero-Maintenance n8n & Make Workflows",
    desc: "Visual or self-hosted n8n automation pipelines eliminating 20–40 hours a week of manual data entry and repetitive busywork.",
    icon: Workflow
  },
  {
    title: "Cross-Platform API & CRM Synchronization",
    desc: "Instant bi-directional synchronization between HubSpot, Salesforce, Notion, Airtable, Slack, Google Workspace, and Postgres.",
    icon: Share2
  },
  {
    title: "Self-Healing Error Handling & Retries",
    desc: "Robust architecture with automatic exponential backoff, dead-letter queues, failure alerts, and data integrity checks.",
    icon: RefreshCw
  },
  {
    title: "Human-in-the-Loop Approval Safeguards",
    desc: "Interactive Slack and email approval buttons allowing team members to review AI actions before final execution.",
    icon: ShieldCheck
  },
  {
    title: "Audit Logging & Real-Time Dashboards",
    desc: "Live telemetry tracking tokens used, execution run times, cost per workflow, and full execution history.",
    icon: FileCheck
  }
];

const STACK_CHOICES = [
  {
    title: "Agentic Code (LangGraph / Python / FastAPI)",
    badge: "Maximum Reasoning Depth & Custom APIs",
    description: "Handcrafted Python, LangChain, and LangGraph architectures designed for complex multi-step reasoning, custom database tool-calling, and custom private LLM deployments.",
    tech: ["Python", "LangGraph", "LangChain", "FastAPI", "OpenAI / Claude API", "PostgreSQL", "Pinecone / Qdrant", "Docker"],
    highlights: [
      "Custom multi-agent routing & stateful memory graphs",
      "Private self-hosted vector embeddings & semantic search",
      "Unlimited capability for proprietary algorithms",
      "Enterprise auditability and custom tool integrations"
    ]
  },
  {
    title: "No-Code / Low-Code (n8n, Make.com, Zapier)",
    badge: "Fastest ROI & Operational Agility",
    description: "Visual workflow engines connecting hundreds of business applications with zero maintenance overhead. Perfect for small businesses, marketing operations, and client onboarding.",
    tech: ["n8n (Self-Hosted)", "Make.com", "Zapier", "Flowise", "Webhooks", "Google Sheets API"],
    highlights: [
      "Rapid deployment in days rather than weeks",
      "Visual drag-and-drop workflow canvases",
      "Native connectors for 500+ SaaS platforms",
      "Significantly lower infrastructure and maintenance cost"
    ]
  }
];

const FAQS = [
  {
    q: "How do AI agents differ from standard automation workflows?",
    a: "Standard automation (like simple Zapier triggers) follows strict static if-then rules. Autonomous AI agents can reason about unstructured data (like raw emails, messy PDFs, or vague customer requests), decide which tools or APIs to execute, and correct their own mistakes before returning a result."
  },
  {
    q: "Will the AI agent make unverified decisions or hallucinate errors?",
    a: "No. We implement strict guardrails, schema validation, and 'Human-in-the-Loop' safeguards. For sensitive operations (like charging a credit card or sending client-facing messages), the agent prompts a team member in Slack for one-click confirmation."
  },
  {
    q: "Where do you host n8n or Python automation pipelines?",
    a: "We can deploy self-hosted instances on your own cloud (AWS, DigitalOcean, Hetzner, GCP) for complete data privacy, or configure cloud accounts (n8n Cloud, Make.com) for zero infrastructure management."
  },
  {
    q: "How much time will these automations actually save my team?",
    a: "Our clients typically recover 20 to 40+ hours per week of manual data entry, client onboarding, lead triage, and reporting tasks within the first 14 days of deployment."
  }
];

export function AIAgentsPage({ onOpenInquiry, onNavigate }: AIAgentsServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#F4EFE6] text-[#20201D] min-h-screen pt-8 pb-24 text-left">
      
      {/* =================================================== */}
      {/* 1. HERO HEADER                                      */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 sm:pt-10 pb-12 sm:pb-16 text-left">
        
        {/* Breadcrumb: Home / Services / AI agents&automation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#7D7970] mb-5 sm:mb-6">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-[#20201D] transition-colors cursor-pointer py-1"
          >
            Home
          </button>
          <span>/</span>
          <button 
            onClick={() => onNavigate('service-websites')} 
            className="hover:text-[#20201D] transition-colors cursor-pointer py-1"
          >
            Services
          </button>
          <span>/</span>
          <span className="text-[#C88A32] font-semibold">AI Agents & Automation</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 sm:gap-10 items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE7DA] border border-[#DDD6C9] text-xs font-mono font-semibold uppercase tracking-wider text-[#525048] mb-4">
              <Bot className="w-3.5 h-3.5 text-[#5F8A68]" />
              <span>Autonomous Systems & Pipelines</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1D19] leading-[1.12] sm:leading-[1.1] mb-4 sm:mb-6">
              AI Agents & Automation That Eliminate Manual Toil.
            </h1>
            
            <p className="text-base sm:text-lg text-[#555046] max-w-2xl leading-relaxed">
              We build intelligent autonomous agents and background automation pipelines that connect your CRMs, databases, and communication channels into a frictionless 24/7 operating engine.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 sm:gap-4 lg:items-end justify-end">
            <button
              onClick={onOpenInquiry}
              className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#20201D] text-[#F4EFE6] font-semibold text-sm hover:bg-[#383732] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              <span>Automate Your Workflows</span>
              <ArrowRight className="w-4 h-4 text-[#C88A32]" />
            </button>
            <div className="text-xs font-mono text-[#7D7970] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Typical Delivery: 1–3 Weeks</span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* 2. VALUE BENCHMARKS                                 */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-5 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-[#1E1D19] mb-1">
              30+ Hours
            </div>
            <div className="text-xs font-semibold text-[#7D7970] uppercase font-mono mb-1">Weekly Time Recovered</div>
            <p className="text-xs text-[#555046] leading-relaxed">
              Eliminate repetitive manual copy-pasting, lead distribution, and reporting bottlenecks permanently.
            </p>
          </div>

          <div className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-5 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-[#1E1D19] mb-1">
              99.9%
            </div>
            <div className="text-xs font-semibold text-[#7D7970] uppercase font-mono mb-1">Execution Reliability</div>
            <p className="text-xs text-[#555046] leading-relaxed">
              Self-healing pipelines with automated error recovery, fallback pathways, and instant team alerts.
            </p>
          </div>

          <div className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-5 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-[#1E1D19] mb-1">
              &lt; 5s
            </div>
            <div className="text-xs font-semibold text-[#7D7970] uppercase font-mono mb-1">Cross-App Sync Speed</div>
            <p className="text-xs text-[#555046] leading-relaxed">
              Instant event triggers dispatching information between webhooks, databases, and customer records.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* 3. TECHNICAL APPROACH COMPARISON                    */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-20">
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7D7970] block mb-2">
            System Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1D19]">
            Agentic Code vs. Visual Automation Engines
          </h2>
          <p className="text-sm text-[#555046] max-w-2xl mt-1">
            We deliver the ideal balance: custom LangGraph reasoning for complex multi-tool workflows, or n8n/Make for fast, maintainable operational pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {STACK_CHOICES.map((item, idx) => (
            <div key={idx} className="bg-[#FBF8F1] border border-[#DDD6C9] rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-md bg-[#EDE7DA] border border-[#D5CDBC] text-xs font-mono font-bold text-[#20201D]">
                  {item.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1E1D19]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555046] leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-[#7D7970] font-semibold block uppercase">Core Strengths:</span>
                  <ul className="space-y-2">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-[#3A3831]">
                        <CheckCircle2 className="w-4 h-4 text-[#5F8A68] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE3D4]">
                <span className="text-[11px] font-mono text-[#7D7970] font-semibold block mb-2">Technologies Used:</span>
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono bg-[#EDE7DA] text-[#525048] px-2.5 py-1 rounded-md border border-[#DDD6C9]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================== */}
      {/* 4. DELIVERABLES BREAKDOWN                           */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24">
        <div className="mb-8 sm:mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7D7970] block mb-2">
            Engineering Scope
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1D19]">
            What’s Included in Every Automation Deployment
          </h2>
          <p className="text-sm text-[#555046] max-w-2xl mt-1">
            Built for enterprise stability with complete monitoring, error-trapping, and comprehensive team documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AGENT_DELIVERABLES.map((del, idx) => {
            const Icon = del.icon;
            return (
              <div key={idx} className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FBF8F1] border border-[#DDD6C9] flex items-center justify-center text-[#5F8A68]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1E1D19]">
                  {del.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555046] leading-relaxed">
                  {del.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =================================================== */}
      {/* 5. CTA & PROCESS LINK BANNER                        */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24">
        <div className="rounded-3xl bg-[#20201D] text-[#F4EFE6] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C88A32]">
              Ready to Reclaim Your Time?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Automate your manual bottlenecks in 1 to 3 weeks.
            </h2>
            <p className="text-xs sm:text-sm text-[#B3AEA3] leading-relaxed">
              Tell us what repetitive processes are slowing your team down. We’ll design an automated agent blueprint with zero ongoing manual intervention.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3.5">
              <button
                onClick={onOpenInquiry}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#C88A32] text-[#20201D] font-bold text-xs sm:text-sm hover:bg-[#DCA047] active:scale-95 transition-all cursor-pointer shadow-md"
              >
                <span>Request Automation Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('how-we-work')}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2D2C28] text-white font-medium text-xs sm:text-sm hover:bg-[#3B3A35] transition-all cursor-pointer border border-[#44423C]"
              >
                <span>How We Build & Test</span>
                <ArrowUpRight className="w-4 h-4 text-[#C88A32]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* 6. FAQS                                             */}
      {/* =================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 pb-16">
        <div className="text-center mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7D7970]">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1D19] mt-1">
            Frequently Asked Questions: AI Agents & Automation
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="border border-[#DDD6C9] rounded-2xl bg-[#EDE7DA] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#1E1D19]">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#817E74] transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 text-[#C88A32]' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#555046] leading-relaxed border-t border-[#DDD6C9]/60 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
