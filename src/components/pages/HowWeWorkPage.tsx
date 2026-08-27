import React, { useState } from 'react';
import { 
  Users, 
  FileText, 
  Code2, 
  Rocket, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  ChevronDown, 
  ArrowUpRight,
  Layers,
  MessageSquare,
  Lock,
  GitBranch,
  Laptop,
  Calendar,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HowWeWorkPageProps {
  onOpenInquiry: () => void;
  onNavigate: (section: string) => void;
}

const PHASES = [
  {
    number: "01",
    phase: "PHASE 01",
    timeframe: "Days 1–2",
    title: "Understand & Scope Discovery",
    tagline: "Uncovering the root problem before touching a single line of code.",
    description: "Every successful project begins with clarity. We conduct a 30-minute discovery session and technical audit to analyze your existing workflow, target users, data inputs, and desired commercial outcome. We filter out unnecessary complexity and isolate the highest-impact requirements.",
    deliverables: [
      "Technical Scope Document with fixed deliverables",
      "User journey mapping & core interaction flows",
      "Third-party API and credential requirements checklist",
      "Fixed milestone pricing and guaranteed launch schedule"
    ],
    icon: Users
  },
  {
    number: "02",
    phase: "PHASE 02",
    timeframe: "Days 3–4",
    title: "Architecture & Stack Strategy",
    tagline: "Selecting the optimal engineering framework for speed and scalability.",
    description: "We objectively evaluate whether Code-Based (React, Next.js, Node.js, Python, LangGraph) or No-Code/Low-Code (Webflow, Framer, Bubble, n8n, Voiceflow) is the right vehicle for your project. We design the database schemas, state management, and security boundaries.",
    deliverables: [
      "Database schema & entity-relationship diagrams",
      "Component architecture and UI design tokens in Figma",
      "Security model, authentication flows, and RBAC rules",
      "Staging and production deployment environment setup"
    ],
    icon: FileText
  },
  {
    number: "03",
    phase: "PHASE 03",
    timeframe: "Weeks 1–3",
    title: "Sprint & Rapid Construction",
    tagline: "High-velocity development with continuous async demos.",
    description: "We build in rapid, iterative sprint cycles. You receive continuous progress updates and interactive preview URLs so you can test features in real-time. We provide concise Loom video walkthroughs explaining architecture decisions, ensuring complete transparency.",
    deliverables: [
      "Working interactive preview deployments on live staging URLs",
      "Bi-weekly async Loom video walkthroughs",
      "Continuous integration and clean modular codebase commits",
      "Direct communication channel via Slack or WhatsApp"
    ],
    icon: Code2
  },
  {
    number: "04",
    phase: "PHASE 04",
    timeframe: "Final Sprint",
    title: "Rigorous QA & Stress Testing",
    tagline: "Zero-defect validation across real environments.",
    description: "Before launching, we put the application through comprehensive stress testing. We validate edge cases, responsive UI across 10+ viewport sizes, SSL security certificates, database query performance, API rate limits, and cross-browser compatibility.",
    deliverables: [
      "Cross-browser and multi-device responsive audits",
      "100/100 Lighthouse performance & Core Web Vitals audit",
      "API failure retry tests & error fallback pathways",
      "End-to-end user checkout and data synchronization verification"
    ],
    icon: ShieldCheck
  },
  {
    number: "05",
    phase: "PHASE 05",
    timeframe: "Post-Launch",
    title: "Launch, 100% IP Transfer & 30-Day Warranty",
    tagline: "Smooth production deployment with total ownership and warranty.",
    description: "We handle domain DNS mapping, production deployment, and telemetry logging. Upon launch, 100% of the GitHub repositories, credentials, and assets are transferred to your accounts. We stand behind our work with a 30-day included warranty covering bug fixes and adjustments.",
    deliverables: [
      "Zero-downtime production deployment and domain DNS routing",
      "100% full transfer of code repositories, databases, and platform accounts",
      "Personalized Loom video documentation and client training",
      "30-Day Post-Launch Warranty with priority bug fix guarantee"
    ],
    icon: Rocket
  }
];

const WORKING_PRINCIPLES = [
  {
    title: "Asynchronous-First Communication",
    desc: "We respect your time. Instead of endless unproductive meetings, we deliver high-density Loom video walkthroughs and actionable progress summaries.",
    icon: Laptop
  },
  {
    title: "100% IP & Code Ownership",
    desc: "You retain full legal ownership of every line of code, database schema, workflow canvas, and design file. Zero lock-in.",
    icon: Lock
  },
  {
    title: "Fixed Scope & Strict Timelines",
    desc: "No vague billing hours. We agree on explicit deliverables, milestones, and delivery dates before starting.",
    icon: Clock
  },
  {
    title: "Direct Access to the Builder",
    desc: "No junior developers, account managers, or bureaucratic intermediaries. You work directly with Dhrumi Patel from kickoff to launch.",
    icon: GitBranch
  }
];

const FAQS = [
  {
    q: "How does payment and milestone scheduling work?",
    a: "We operate on transparent milestone-based payments: typically 50% upfront to initiate the sprint and 50% upon completed production testing and handover. For larger enterprise or multi-agent projects, payments are split across 3 structured milestones."
  },
  {
    q: "How frequently will I receive updates on project progress?",
    a: "You receive continuous updates through our dedicated Slack or WhatsApp channel, along with interactive staging links and weekly Loom video walkthroughs demonstrating live working features."
  },
  {
    q: "What is included in the 30-day post-launch warranty?",
    a: "Our warranty covers any bug fixes, technical adjustments, and performance monitoring directly related to the agreed scope at zero additional charge."
  },
  {
    q: "Can you take over or improve an existing codebase or system?",
    a: "Yes. We frequently conduct technical refactoring, performance overhauls, and modernization for existing React/Next.js codebases, outdated websites, and broken n8n automation pipelines."
  }
];

export function HowWeWorkPage({ onOpenInquiry, onNavigate }: HowWeWorkPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#F4EFE6] text-[#20201D] min-h-screen pt-8 pb-24 text-left">
      
      {/* =================================================== */}
      {/* 1. HERO HEADER                                      */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 sm:pt-10 pb-12 sm:pb-16 text-left">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#7D7970] mb-5 sm:mb-6">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-[#20201D] transition-colors cursor-pointer py-1"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#C88A32] font-semibold">How We Work</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 sm:gap-10 items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE7DA] border border-[#DDD6C9] text-xs font-mono font-semibold uppercase tracking-wider text-[#525048] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C88A32]" />
              <span>Engineering Methodology & Delivery</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1D19] leading-[1.12] sm:leading-[1.1] mb-4 sm:mb-6">
              A Transparent, 5-Phase Engineering Discipline.
            </h1>
            
            <p className="text-base sm:text-lg text-[#555046] max-w-2xl leading-relaxed">
              We eliminate ambiguity with a structured sprint cadence. From initial discovery to live production launch and 30-day warranty, every milestone is scoped, tested, and documented.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 sm:gap-4 lg:items-end justify-end">
            <button
              onClick={onOpenInquiry}
              className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#20201D] text-[#F4EFE6] font-semibold text-sm hover:bg-[#383732] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-[#C88A32]" />
            </button>
            <div className="text-xs font-mono text-[#7D7970] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>100% Fixed Scope & Timeline Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* 2. CORE PRINCIPLES (4 PILLARS)                      */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WORKING_PRINCIPLES.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <div key={idx} className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FBF8F1] border border-[#DDD6C9] flex items-center justify-center text-[#C88A32]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1E1D19]">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555046] leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =================================================== */}
      {/* 3. 5-PHASE LIFECYCLE DEEP DIVE                      */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24">
        <div className="mb-10 sm:mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7D7970] block mb-2">
            Step-by-Step Delivery
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1D19]">
            The 5-Phase Project Roadmap
          </h2>
          <p className="text-sm text-[#555046] max-w-2xl mt-1">
            How we take your idea or bottleneck from initial kickoff to live production release.
          </p>
        </div>

        <div className="space-y-6">
          {PHASES.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <div 
                key={idx}
                className="bg-[#FBF8F1] border border-[#DDD6C9] rounded-3xl p-6 sm:p-8 lg:p-10 transition-all hover:border-[#C88A32]/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-start">
                  
                  {/* Left Column: Number, Phase Title & Description */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl font-mono font-bold text-[#C88A32]">
                        {phase.number}
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#EDE7DA] text-[#525048] border border-[#DDD6C9]">
                        {phase.timeframe}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#1E1D19]">
                      {phase.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-[#7D7970] italic">
                      &quot;{phase.tagline}&quot;
                    </p>

                    <p className="text-xs sm:text-sm text-[#555046] leading-relaxed pt-1">
                      {phase.description}
                    </p>
                  </div>

                  {/* Right Column: Deliverables Checklist */}
                  <div className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-5 sm:p-6 space-y-3">
                    <span className="text-[11px] font-mono text-[#7D7970] font-bold uppercase tracking-wider block">
                      Phase Deliverables:
                    </span>
                    <ul className="space-y-2.5">
                      {phase.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-[#20201D]">
                          <Check className="w-4 h-4 text-[#59634B] flex-shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =================================================== */}
      {/* 4. CODE-BASED VS NO-CODE FRAMEWORK                  */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24">
        <div className="rounded-3xl bg-[#EDE7DA] border border-[#DDD6C9] p-6 sm:p-10 lg:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7D7970] block mb-2">
              Decision Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1D19]">
              How We Choose Between Code-Based & No-Code
            </h2>
            <p className="text-xs sm:text-sm text-[#555046] mt-2 leading-relaxed">
              We never push one rigid approach. We select what creates the highest return on investment for your timeline and technical goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FBF8F1] border border-[#DDD6C9] rounded-2xl p-6 space-y-3">
              <div className="text-xs font-mono font-bold text-[#59634B] uppercase tracking-wider">
                When to Choose Code-Based (React, Next.js, Python)
              </div>
              <ul className="space-y-2 text-xs text-[#413F39]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#59634B]"></span>
                  <span>Proprietary algorithms and custom SaaS backend logic</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#59634B]"></span>
                  <span>Sub-second page speeds, high Lighthouse scores & custom APIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#59634B]"></span>
                  <span>Complex multi-agent reasoning (LangGraph, private vector DBs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#59634B]"></span>
                  <span>100% intellectual property ownership with zero platform lock-in</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FBF8F1] border border-[#DDD6C9] rounded-2xl p-6 space-y-3">
              <div className="text-xs font-mono font-bold text-[#C88A32] uppercase tracking-wider">
                When to Choose No-Code (Webflow, Framer, n8n, Voiceflow)
              </div>
              <ul className="space-y-2 text-xs text-[#413F39]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C88A32]"></span>
                  <span>Fast turnaround (1–2 weeks to launch)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C88A32]"></span>
                  <span>Marketing team autonomy to edit content visually without engineers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C88A32]"></span>
                  <span>Connecting 500+ SaaS apps seamlessly via n8n or Make.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C88A32]"></span>
                  <span>Lower upfront development cost and minimal ongoing maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* 5. CTA BANNER                                       */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24">
        <div className="rounded-3xl bg-[#20201D] text-[#F4EFE6] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C88A32]">
              Ready to Kick Off?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Let’s turn your bottleneck into a reliable digital system.
            </h2>
            <p className="text-xs sm:text-sm text-[#B3AEA3] leading-relaxed">
              Book a 30-minute discovery call or submit your project inquiry. We’ll outline your scope, provide a fixed quote, and begin Phase 1.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3.5">
              <button
                onClick={onOpenInquiry}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#C88A32] text-[#20201D] font-bold text-xs sm:text-sm hover:bg-[#DCA047] active:scale-95 transition-all cursor-pointer shadow-md"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://cal.com/developer.-dp-yz3ril/30min?user=developer.-dp-yz3ril"
                target="_blank"
                rel="noreferrer"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2D2C28] text-white font-medium text-xs sm:text-sm hover:bg-[#3B3A35] transition-all cursor-pointer border border-[#44423C]"
              >
                <Calendar className="w-4 h-4 text-[#C88A32]" />
                <span>Book 30-Min Strategy Call</span>
              </a>
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
            Process & Terms
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1D19] mt-1">
            Frequently Asked Questions: Working Together
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
