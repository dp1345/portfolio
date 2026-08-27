import React, { useState } from 'react';
import { 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  Code2, 
  Zap, 
  ChevronDown, 
  ArrowUpRight,
  Database,
  Search,
  Clock,
  Radio,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ChatbotsServicePageProps {
  onOpenInquiry: () => void;
  onNavigate: (section: string) => void;
}

const CHATBOT_DELIVERABLES = [
  {
    title: "Zero-Hallucination Vector RAG",
    desc: "Answers grounded strictly in your verified documentation, Notion workspaces, PDFs, and product databases.",
    icon: Database
  },
  {
    title: "24/7 Real-Time Lead Qualification",
    desc: "Intelligently asks qualifying questions, captures verified contact information, and scores lead intent automatically.",
    icon: Search
  },
  {
    title: "Direct Calendar Booking in Chat",
    desc: "Clients can pick an available meeting slot and book directly into your Cal.com, Calendly, or Google Calendar without leaving the chat.",
    icon: Calendar
  },
  {
    title: "Omnichannel Deployment",
    desc: "Deploy the same intelligent brain across your Website Widget, WhatsApp Business API, Telegram, and Slack.",
    icon: Radio
  },
  {
    title: "Instant CRM & Team Notifications",
    desc: "Pushes qualified leads and full conversation transcripts directly into HubSpot, Salesforce, and a dedicated Slack channel.",
    icon: ShieldCheck
  },
  {
    title: "Conversation Analytics & Feedback Loops",
    desc: "Real-time dashboard highlighting unanswered questions, customer sentiment, popular topics, and conversion rates.",
    icon: FileText
  }
];

const STACK_COMPARISON = [
  {
    title: "Custom Vector RAG (Code-Based)",
    badge: "Maximum Accuracy & Deep Integrations",
    description: "Handcrafted Python/FastAPI or TypeScript vector search architectures using OpenAI Assistant APIs, LangChain, PostgreSQL pgvector, and WebSockets for real-time sub-second streaming answers.",
    tech: ["Python", "FastAPI", "OpenAI Assistant API", "pgvector (PostgreSQL)", "Pinecone", "WebSockets", "React Widget"],
    highlights: [
      "No per-message markup fees (use your own direct API keys)",
      "Strict citation links back to source documents",
      "Full control over conversational memory and custom tool-calling",
      "Enterprise security and self-hosted privacy options"
    ]
  },
  {
    title: "Visual Conversational Platforms (Voiceflow / Botpress)",
    badge: "Fastest Setup & Visual Flow Editing",
    description: "Visual conversational flow builders allowing non-technical team members to adjust dialog paths, prompt tones, and FAQs visually.",
    tech: ["Voiceflow", "Botpress", "Chatbase", "n8n Webhooks", "Cal.com API"],
    highlights: [
      "Live within 5–7 business days",
      "Drag-and-drop dialog tree editing for marketing/support teams",
      "Pre-built embeds for React, WordPress, Webflow, and Shopify",
      "Built-in live-chat agent handoff capabilities"
    ]
  }
];

const FAQS = [
  {
    q: "How do you prevent the chatbot from making things up (hallucinating)?",
    a: "We utilize strict Retrieval-Augmented Generation (RAG) with source verification. The model is system-prompted and constrained to only answer from your vector database of uploaded company knowledge. If the answer is not in the source docs, it politely offers to connect the user to a human team member."
  },
  {
    q: "Can the chatbot book discovery calls directly into my calendar?",
    a: "Yes. We integrate with Cal.com, Calendly, and Google Calendar so the bot can check real-time availability and confirm appointments directly inside the chat interface."
  },
  {
    q: "Can we deploy the same chatbot on WhatsApp and our website?",
    a: "Yes. We design the conversational engine to support omnichannel deployment so the exact same knowledge base powers your web widget, WhatsApp number, and Slack internal support."
  },
  {
    q: "How do we update the chatbot’s knowledge when our policies change?",
    a: "We set up automated sync pipelines with your Notion, Google Drive, or CMS, or provide a simple one-click document uploader so your chatbot stays up to date automatically."
  }
];

export function ChatbotsPage({ onOpenInquiry, onNavigate }: ChatbotsServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#F4EFE6] text-[#20201D] min-h-screen pt-8 pb-24 text-left">
      
      {/* =================================================== */}
      {/* 1. HERO HEADER                                      */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 sm:pt-10 pb-12 sm:pb-16 text-left">
        
        {/* Breadcrumb: Home / Services / Chatbot */}
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
          <span className="text-[#C88A32] font-semibold">Chatbot</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 sm:gap-10 items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE7DA] border border-[#DDD6C9] text-xs font-mono font-semibold uppercase tracking-wider text-[#525048] mb-4">
              <MessageSquare className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Conversational AI & Lead Capture</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1D19] leading-[1.12] sm:leading-[1.1] mb-4 sm:mb-6">
              24/7 Intelligent Chatbots That Qualify & Book Clients.
            </h1>
            
            <p className="text-base sm:text-lg text-[#555046] max-w-2xl leading-relaxed">
              Empower your website and WhatsApp with a grounded AI assistant. We build conversational bots that answer customer inquiries accurately from your docs and book meetings directly into your calendar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 sm:gap-4 lg:items-end justify-end">
            <button
              onClick={onOpenInquiry}
              className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#20201D] text-[#F4EFE6] font-semibold text-sm hover:bg-[#383732] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              <span>Build Your Chatbot</span>
              <ArrowRight className="w-4 h-4 text-[#C88A32]" />
            </button>
            <div className="text-xs font-mono text-[#7D7970] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Typical Delivery: 1–2 Weeks</span>
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
              &lt; 3s
            </div>
            <div className="text-xs font-semibold text-[#7D7970] uppercase font-mono mb-1">Instant Response Time</div>
            <p className="text-xs text-[#555046] leading-relaxed">
              Never let high-intent visitors wait for email replies; resolve questions immediately 24/7.
            </p>
          </div>

          <div className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-5 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-[#1E1D19] mb-1">
              3.4x
            </div>
            <div className="text-xs font-semibold text-[#7D7970] uppercase font-mono mb-1">Booked Discovery Calls</div>
            <p className="text-xs text-[#555046] leading-relaxed">
              Direct calendar scheduling embedded directly in conversational flows converts visitors instantly.
            </p>
          </div>

          <div className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-5 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-[#1E1D19] mb-1">
              0%
            </div>
            <div className="text-xs font-semibold text-[#7D7970] uppercase font-mono mb-1">Hallucination Guarantee</div>
            <p className="text-xs text-[#555046] leading-relaxed">
              Constrained strictly to your verified knowledge base with citations and human agent fallbacks.
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
            Conversational Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1D19]">
            Custom Vector RAG vs. Visual Chatbot Platforms
          </h2>
          <p className="text-sm text-[#555046] max-w-2xl mt-1">
            Choose custom vector search for deep API and database actions, or visual platforms for rapid drag-and-drop editing by your support staff.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {STACK_COMPARISON.map((item, idx) => (
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
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
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
            Complete Package
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1D19]">
            Everything Included in Your Chatbot Deployment
          </h2>
          <p className="text-sm text-[#555046] max-w-2xl mt-1">
            Engineered with robust security, prompt safeguards, CRM connectors, and instant staff escalation triggers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHATBOT_DELIVERABLES.map((del, idx) => {
            const Icon = del.icon;
            return (
              <div key={idx} className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FBF8F1] border border-[#DDD6C9] flex items-center justify-center text-[#2563EB]">
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
              Ready to Capture More Leads?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Launch a 24/7 AI Concierge in 1 to 2 weeks.
            </h2>
            <p className="text-xs sm:text-sm text-[#B3AEA3] leading-relaxed">
              Provide your documents or website link. We’ll build a fully working conversational demo tailored to your exact brand tone and service offerings.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3.5">
              <button
                onClick={onOpenInquiry}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#C88A32] text-[#20201D] font-bold text-xs sm:text-sm hover:bg-[#DCA047] active:scale-95 transition-all cursor-pointer shadow-md"
              >
                <span>Request Chatbot Demo</span>
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
            Frequently Asked Questions: Chatbots
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
