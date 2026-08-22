import React, { useState } from 'react';
import { 
  Bot, 
  Cpu, 
  Workflow, 
  Globe, 
  Zap, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  HelpCircle, 
  MessageSquare,
  ArrowUpRight,
  Code2,
  ChevronDown,
  Wrench,
  Gauge,
  Rocket
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesPageProps {
  onOpenInquiry: () => void;
  onNavigate: (section: string) => void;
}

interface DetailedService {
  id: string;
  category: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  codeStack: string[];
  noCodeStack: string[];
  deliverables: string[];
  idealFor: string;
  timeline: string;
  impactMetrics: string;
}

const DETAILED_SERVICES: DetailedService[] = [
  {
    id: 'websites',
    category: 'Digital Presence & Growth',
    badge: 'Code-Based & No-Code',
    title: 'Websites & High-Converting Digital Platforms',
    subtitle: 'Fast, accessible, and structured web platforms built with bespoke code or rapid visual engines.',
    description: 'We design and build bespoke business websites, high-converting product landing pages, and interactive client portals. Depending on your team’s workflow, we engineer them either in modern custom code (React, Next.js, Tailwind CSS) for ultimate speed and custom API integrations, or in robust no-code platforms (Webflow, Framer, WordPress, Shopify) for rapid launch and autonomous visual editing by your marketing team.',
    icon: Globe,
    codeStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    noCodeStack: ['Webflow', 'Framer', 'WordPress', 'Shopify'],
    deliverables: [
      'Responsive, component-driven responsive layouts (mobile & desktop)',
      '100/100 Lighthouse performance, sub-second load times & technical SEO',
      'Dynamic CMS architecture for frictionless blog and case study updates',
      'Frictionless lead-capture funnels, CRM forms, and calendar integrations'
    ],
    idealFor: 'Small businesses, founders, consultants, and agencies seeking a credible digital presence that actively converts visitors into booked calls.',
    timeline: '1–3 weeks',
    impactMetrics: '+45% average lift in visitor conversion & sub-second load speeds'
  },
  {
    id: 'mvp',
    category: 'Rapid Product Validation',
    badge: 'Code-Based & No-Code',
    title: 'MVP (Minimum Viable Product)',
    subtitle: 'Turn concepts into revenue-ready, testable software prototypes in 2–4 weeks.',
    description: 'Avoid months of expensive over-engineering. We strip away fluff and build tightly scoped, production-grade MVPs with real authentication, live databases, and Stripe payment processing. We leverage rapid full-stack code (Node.js, Python, Supabase, PostgreSQL) or visual full-stack tools (Bubble, FlutterFlow, Glide) so you can validate user demand, onboard early adopters, and pitch investors with a live working product.',
    icon: Rocket,
    codeStack: ['React', 'Node.js', 'Python / FastAPI', 'Supabase', 'PostgreSQL', 'Stripe API'],
    noCodeStack: ['Bubble', 'FlutterFlow', 'Glide', 'Airtable', 'Make'],
    deliverables: [
      'Core user journey mapping & rapid interactive wireframing',
      'Production-ready authentication, role-based permissions & database schema',
      'Automated Stripe billing, subscriptions, and checkout webhooks',
      'User telemetry, event logging, and feedback loops for rapid iteration'
    ],
    idealFor: 'Solo founders, early-stage startups, and businesses looking to test and validate a new software idea before incurring large engineering overhead.',
    timeline: '2–4 weeks',
    impactMetrics: 'Ship from idea to live paying users in under 30 days'
  },
  {
    id: 'ai-agents-automation',
    category: 'Autonomous Systems & Operations',
    badge: 'Code-Based & No-Code',
    title: 'AI Agents & Automation',
    subtitle: 'Self-healing background pipelines and autonomous reasoning agents that eliminate manual toil.',
    description: 'Stop wasting hours manually copying data between tools, answering repetitive inquiries, or triaging leads. We construct intelligent autonomous AI agents (using LangChain, LangGraph, Python, OpenAI/Claude APIs) and reliable background automation pipelines (using n8n, Make.com, Zapier, Webhooks) that connect your CRM, databases, spreadsheets, Slack, and email into an automated, self-healing operating system.',
    icon: Bot,
    codeStack: ['LangChain', 'LangGraph', 'Python', 'FastAPI', 'OpenAI / Claude API', 'Vector DBs'],
    noCodeStack: ['n8n', 'Make.com', 'Zapier', 'Flowise', 'Google Cloud Functions'],
    deliverables: [
      'Autonomous reasoning agents with custom tool-calling and API execution',
      'Multi-app workflow automation across CRM, Slack, Notion, Airtable & Email',
      'Automated document ingestion, data cleansing, and error-handling retries',
      'Human-in-the-loop audit logs and real-time execution dashboards'
    ],
    idealFor: 'Operations managers, agencies, and small businesses losing 20+ hours a week to manual administrative tasks and disjointed tools.',
    timeline: '1–3 weeks',
    impactMetrics: 'Saves 25–40+ hours per week of manual data entry with 99.9% reliability'
  },
  {
    id: 'chatbot',
    category: 'Conversational AI & Lead Capture',
    badge: 'Code-Based & No-Code',
    title: 'Chatbot (Conversational AI Assistants)',
    subtitle: 'Context-aware conversational assistants for 24/7 customer support and instant lead qualification.',
    description: 'Empower your website with a tireless digital concierge. We build grounded conversational chatbots powered by custom Retrieval-Augmented Generation (RAG) code or no-code platforms (Voiceflow, Botpress, Chatbase). Our chatbots don’t just answer FAQs accurately based strictly on your company docs—they proactively triage visitor needs, capture lead contact information, and directly book calendar appointments.',
    icon: MessageSquare,
    codeStack: ['Custom Vector RAG', 'OpenAI Assistant API', 'WebSockets', 'Python', 'PostgreSQL pgvector'],
    noCodeStack: ['Voiceflow', 'Botpress', 'Chatbase', 'n8n Chatbots'],
    deliverables: [
      'Zero-hallucination conversational engine grounded in your business documentation',
      '24/7 real-time lead qualification with automated CRM syncing & email alerts',
      'Interactive appointment booking and calendar scheduling directly in chat',
      'Omnichannel integration across Website, WhatsApp, and Slack'
    ],
    idealFor: 'Businesses receiving high volumes of repetitive inquiries, customer support desks, and sales teams wanting to capture high-intent leads 24/7.',
    timeline: '1–2 weeks',
    impactMetrics: '3.4x increase in booked discovery calls and instant under-10-second response times'
  }
];

const FAQS = [
  {
    q: "How do you decide between Code-Based and No-Code for a project?",
    a: "We evaluate your timeline, budget, customization requirements, and long-term scaling goals. For maximum speed, lower maintenance, or easy visual editing by your marketing team, No-Code (Webflow, Framer, Bubble, n8n, Voiceflow) is ideal. When you need proprietary algorithms, custom UI interactions, extreme performance, or complex database architectures, Code-Based engineering (React, Next.js, Python, LangGraph) is the right choice. Often, we combine both for the fastest time to market."
  },
  {
    q: "What is the typical timeline for Websites, MVPs, AI Agents, or Chatbots?",
    a: "Standard websites, automation pipelines, and chatbots typically launch in 1 to 2 weeks. Comprehensive MVPs and multi-agent AI systems generally take 2 to 4 weeks from kickoff to production deployment."
  },
  {
    q: "Who owns the code, intellectual property, and platform accounts?",
    a: "You do. 100% of all custom code, repositories, workflows, database schemas, AI prompts, and platform configurations belong entirely to you upon milestone completion."
  },
  {
    q: "Do you offer post-launch support and warranty?",
    a: "Yes. Every project includes a 30-day post-launch warranty with bug fixes, monitoring, and live testing. We also offer monthly iteration and maintenance support retainers if needed."
  }
];

export function ServicesPage({ onOpenInquiry, onNavigate }: ServicesPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#F4EFE6] text-[#20201D] min-h-screen pt-8 pb-24">
      
      {/* =================================================== */}
      {/* 1. HERO BANNER                                      */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 sm:pt-10 pb-12 sm:pb-16 lg:pb-20 text-left">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#7D7970] mb-5 sm:mb-6">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-[#20201D] transition-colors cursor-pointer py-1"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#C88A32] font-semibold">Services</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 sm:gap-10 items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EDE7DA] border border-[#DDD6C9] text-xs font-mono font-semibold uppercase tracking-wider text-[#525048] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C88A32]" />
              <span>Code-Based & No-Code Solutions</span>
            </div>
            
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1D19] leading-[1.12] sm:leading-[1.1] mb-4 sm:mb-6">
              Websites, MVPs, AI Agents & Automation, and Chatbots.
            </h1>
            
            <p className="text-sm sm:text-lg text-[#555046] max-w-2xl leading-relaxed">
              We engineer practical digital systems tailored to your exact business problem. Whether you need custom code for deep flexibility or rapid no-code systems for lightning speed, we deliver clean, high-performing solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 sm:gap-4 lg:items-end justify-end">
            <button
              onClick={onOpenInquiry}
              className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#20201D] text-[#F4EFE6] font-semibold text-sm hover:bg-[#383732] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              <span>Discuss a Custom Build</span>
              <ArrowRight className="w-4 h-4 text-[#C88A32]" />
            </button>
            <div className="text-xs font-mono text-[#7D7970] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open for New Client Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* 2. CODE-BASED VS NO-CODE SHOWCASE BANNER            */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-12 sm:pb-16 text-left">
        <div className="rounded-3xl bg-[#EDE7DA] border border-[#DDD6C9] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#DDD6C9]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-4 h-4 text-[#C88A32]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7D7970]">
                  Flexible Delivery Model
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E1D19]">
                We Work With Both: Code-Based and No-Code
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#555046] max-w-lg leading-relaxed">
              We don&apos;t force one rigid framework. We match the technical approach to your specific timeline, budget, and customization needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-6">
            {/* Code-Based Side */}
            <div className="bg-[#FBF8F1] border border-[#DDD6C9] rounded-2xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-[#EAE2D2] text-[#20201D]">
                  CODE-BASED DEVELOPMENT
                </span>
                <span className="text-xs font-semibold text-[#59634B]">Max Power & Control</span>
              </div>
              <h3 className="text-base font-bold text-[#1E1D19]">Custom Engineering & Deep Flexibility</h3>
              <p className="text-xs sm:text-sm text-[#625E54] leading-relaxed">
                Ideal for bespoke digital products, complex proprietary algorithms, custom databases, and high-load production scaling.
              </p>
              <div className="pt-2 border-t border-[#EAE3D4]">
                <span className="text-[11px] font-mono text-[#7D7970] font-semibold block mb-1.5">Technologies:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'LangGraph', 'PostgreSQL', 'Tailwind CSS'].map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono bg-[#EDE7DA] text-[#525048] px-2 py-0.5 rounded border border-[#DDD6C9]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* No-Code Side */}
            <div className="bg-[#FBF8F1] border border-[#DDD6C9] rounded-2xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-[#E5ECE3] text-[#347A4B]">
                  NO-CODE & RAPID DELIVERY
                </span>
                <span className="text-xs font-semibold text-[#C88A32]">Speed to Market & Agility</span>
              </div>
              <h3 className="text-base font-bold text-[#1E1D19]">Fast Turnarounds & Easy Client Editing</h3>
              <p className="text-xs sm:text-sm text-[#625E54] leading-relaxed">
                Ideal for rapid MVP validation, marketing websites your team can update visually, and multi-tool workflow automations.
              </p>
              <div className="pt-2 border-t border-[#EAE3D4]">
                <span className="text-[11px] font-mono text-[#7D7970] font-semibold block mb-1.5">Technologies:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Webflow', 'Framer', 'Bubble', 'FlutterFlow', 'n8n', 'Make.com', 'Voiceflow', 'Botpress'].map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono bg-[#EDE7DA] text-[#525048] px-2 py-0.5 rounded border border-[#DDD6C9]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* 3. SERVICES DETAILED GRID (4 Core Services)         */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {DETAILED_SERVICES.map((service, idx) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:border-[#C88A32]/80 hover:shadow-[0_16px_40px_rgba(40,35,25,0.06)] transition-all duration-300 group text-left"
              >
                <div>
                  {/* Category Pill + Icon */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-md bg-[#EDE7DA] text-xs font-mono font-semibold uppercase tracking-wider text-[#686458]">
                        {service.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E5ECE3] text-[11px] font-mono font-bold text-[#347A4B] border border-[#C5D8C3]">
                        {service.badge}
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#EDE7DA] border border-[#DDD6C9] flex items-center justify-center text-[#C88A32] group-hover:bg-[#C88A32] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] tracking-tight mb-2 group-hover:text-[#1E1D19]">
                    {service.title}
                  </h2>
                  <p className="text-sm font-medium text-[#7D7970] mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#555046] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Code-Based & No-Code Stack Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#F4EFE6]/80 border border-[#E0D9CB] mb-6">
                    <div>
                      <span className="text-[11px] font-mono uppercase font-bold text-[#20201D] block mb-1.5 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#59634B]"></span>
                        <span>Code-Based Stack</span>
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {service.codeStack.map((c, cIdx) => (
                          <span key={cIdx} className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-[#DDD6C9] text-[#4A4740]">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase font-bold text-[#C88A32] block mb-1.5 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#C88A32]"></span>
                        <span>No-Code Stack</span>
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {service.noCodeStack.map((nc, ncIdx) => (
                          <span key={ncIdx} className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-[#DDD6C9] text-[#4A4740]">
                            {nc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="border-t border-[#EAE3D4] pt-5 mb-6">
                    <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#1E1D19] mb-3">
                      Key Deliverables
                    </h3>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4740]">
                          <CheckCircle2 className="w-4 h-4 text-[#C88A32] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Meta & Action */}
                <div className="border-t border-[#EAE3D4] pt-5 mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono text-[#7D7970]">
                      <span className="font-semibold text-[#1E1D19]">Timeline:</span> {service.timeline}
                    </div>
                    <div className="text-[11px] font-mono text-[#C88A32] font-semibold">
                      {service.impactMetrics}
                    </div>
                  </div>

                  <button
                    onClick={onOpenInquiry}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#1E1D19] hover:text-[#C88A32] transition-colors group/btn self-start sm:self-auto cursor-pointer"
                  >
                    <span>Request this service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-[#C88A32]" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =================================================== */}
      {/* 4. ENGAGEMENT PROCESS (4 STEPS)                     */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24 text-left">
        <div className="rounded-3xl bg-[#EDE7DA] border border-[#DDD6C9] p-6 sm:p-10 lg:p-16">
          <div className="max-w-2xl mb-8 sm:mb-12">
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#817E74] mb-2 block">
              ENGAGEMENT MODEL
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1E1D19] tracking-tight mb-3">
              How we work together from concept to production.
            </h2>
            <p className="text-sm sm:text-base text-[#555046]">
              A direct, collaborative engineering sprint with zero bureaucracy. You speak directly with the builder designing and constructing your system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Problem Scope",
                desc: "We analyze your exact pain point, choose the optimal stack (Code vs No-Code), and define crystal-clear milestone deliverables."
              },
              {
                step: "02",
                title: "Architecture & Wireframing",
                desc: "We blueprint the UI layouts, database models, agent prompt structures, or automation triggers before building."
              },
              {
                step: "03",
                title: "Rapid Sprint & Testing",
                desc: "Fast, focused development with regular staging previews, live telemetry testing, and continuous feedback loops."
              },
              {
                step: "04",
                title: "Launch & Full IP Handoff",
                desc: "Live deployment to your domain and production environment, 100% intellectual property transfer, and 30-day post-launch warranty."
              }
            ].map((stepItem, sIdx) => (
              <div key={sIdx} className="p-5 sm:p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-mono font-bold text-[#C88A32] mb-3">
                    {stepItem.step}
                  </div>
                  <h3 className="text-base font-bold text-[#1E1D19] mb-2">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#625E54] leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* 5. FREQUENTLY ASKED QUESTIONS                       */}
      {/* =================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24 text-left">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#817E74] mb-2 block">
            COMMON QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1E1D19] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3.5 sm:space-y-4">
          {FAQS.map((faq, fIdx) => {
            const isOpen = openFaq === fIdx;
            return (
              <div 
                key={fIdx}
                className="rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#1E1D19]">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#C88A32] transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm text-[#555046] leading-relaxed border-t border-[#EAE3D4] pt-3 sm:pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* =================================================== */}
      {/* 6. CALL TO ACTION BANNER                            */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="rounded-3xl bg-[#181714] text-[#FBF8F1] p-6 sm:p-10 lg:p-16 border border-[#2F2C24] flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-left">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#C88A32] mb-2 block">
              READY TO BUILD?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Let&apos;s build the right solution for your business.
            </h2>
            <p className="text-sm text-[#A8A396] leading-relaxed">
              Book an initial 20-minute discovery consultation to scope out whether Code-Based or No-Code is the best fit for your budget and timeline.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
            <button
              onClick={onOpenInquiry}
              className="min-h-[48px] px-6 sm:px-7 py-3.5 rounded-xl bg-[#C88A32] text-white font-semibold text-sm hover:bg-[#D99A40] active:scale-[0.98] transition-all shadow-sm cursor-pointer text-center flex items-center justify-center"
            >
              Start a Project
            </button>
            <button
              onClick={() => onNavigate('case-studies')}
              className="min-h-[48px] px-6 sm:px-7 py-3.5 rounded-xl bg-[#282620] border border-[#3D3A30] text-[#E8E4D8] font-semibold text-sm hover:bg-[#333129] active:scale-[0.98] transition-all cursor-pointer text-center flex items-center justify-center"
            >
              Explore Case Studies
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
