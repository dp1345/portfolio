import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import yarnAndHookImg from '../../assets/images/yarn_and_hook_1787408119043.jpg';
import openclawImg from '../../assets/images/openclaw_mascot_1787408104133.jpg';

interface CaseStudiesPageProps {
  onOpenInquiry: () => void;
  onNavigate: (section: string) => void;
}

interface DetailedCaseStudy {
  id: string;
  category: 'all' | 'ai-agents' | 'fullstack' | 'automation';
  categoryLabel: string;
  title: string;
  client: string;
  clientRole: string;
  status: 'Completed' | 'In Production' | 'Active Development';
  summary: string;
  heroImage: string;
  challenge: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const CASE_STUDIES: DetailedCaseStudy[] = [
  {
    id: 'rk-packers',
    category: 'automation',
    categoryLabel: 'Website + WhatsApp AI Automation',
    title: 'RK Packers & Movers Logistics Automation & Digital Platform',
    client: 'Hawa Singh',
    clientRole: 'Managing Director, RK Packers & Movers',
    status: 'Completed',
    summary: 'Built an ultra-fast, mobile-first logistics booking portal integrated with an automated WhatsApp quote calculator and dispatch routing system.',
    heroImage: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1000&q=80',
    challenge: 'The logistics business was losing high-intent leads due to manual phone quote delays, slow website response times on mobile networks, and disconnected team dispatch communications.',
    solution: 'Engineered a tailored digital presence achieving a perfect 100 Google Lighthouse SEO audit score. Connected a custom WhatsApp conversational agent that collects pickup/drop locations, calculates cubic freight estimates in real-time, and notifies regional team dispatchers within seconds.',
    architecture: [
      'Edge-rendered responsive React frontend with instant load times',
      'Twilio WhatsApp API integration with automated payload parsing',
      'Freight calculation microservice running on Google Cloud Functions',
      'Automated Google Sheets & SMS dispatch relay for drivers'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'WhatsApp Business API', 'Google Cloud', 'Tailwind CSS'],
    metrics: [
      { label: 'Lighthouse SEO', value: '100/100', sublabel: 'Perfect Audit Score' },
      { label: 'Quote Response Time', value: '< 15s', sublabel: 'Down from 3+ hours' },
      { label: 'Lead Conversion', value: '+64%', sublabel: 'In first 60 days' }
    ],
    testimonial: {
      quote: "The automated WhatsApp quote system changed our entire day-to-day operations. Leads are captured and quoted within seconds even during late evening hours, resulting in significantly higher customer bookings.",
      author: "Hawa Singh",
      role: "Managing Director, RK Packers & Movers"
    }
  },
  {
    id: 'tt-crochet',
    category: 'fullstack',
    categoryLabel: 'Full-Stack MVP + Custom AI Concierge',
    title: 'T&T Crochet Artisanal E-Commerce Platform & AI Stylist',
    client: 'T&T Artisans',
    clientRole: 'Handmade Crochet Studio',
    status: 'In Production',
    summary: 'Full-stack reactive e-commerce MVP with custom product customizer and an intelligent AI shopping concierge guiding buyers through bespoke yarn palettes.',
    heroImage: yarnAndHookImg,
    challenge: 'Custom handmade crochet products have complex configuration options (colors, stitches, sizing) that traditional e-commerce templates failed to accommodate, forcing lengthy back-and-forth direct messages.',
    solution: 'Designed and engineered an artisanal web storefront featuring a live interactive yarn/colorway customizer, seamless Stripe checkout, and a domain-trained AI chatbot that advises customers on personalized sizing and care instructions.',
    architecture: [
      'Modern component-driven React & Next.js storefront architecture',
      'Custom OpenAI assistant with custom product vector embeddings',
      'Secure Stripe payment processing with webhook order verification',
      'PostgreSQL database for dynamic product attributes and custom orders'
    ],
    techStack: ['Next.js', 'React', 'OpenAI API', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    metrics: [
      { label: 'Checkout Conversion', value: '3.8x', sublabel: 'Over Instagram DMs' },
      { label: 'Customer Support Load', value: '-72%', sublabel: 'Autonomous AI answers' },
      { label: 'Average Order Value', value: '+35%', sublabel: 'Via AI bundle suggestions' }
    ]
  },
  {
    id: 'khushi-patel',
    category: 'automation',
    categoryLabel: 'n8n Business Process Automation',
    title: 'Operations Pipeline & Lead Synchronizer',
    client: 'Khushi Patel',
    clientRole: 'Business Executive',
    status: 'Completed',
    summary: 'Custom self-hosted n8n automation pipelines for Business Executive Khushi Patel eliminating manual data entry across multi-channel client inquiries, CRM records, and project boards.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    challenge: 'Operations teams spent upwards of 6 hours every day manually copying client lead submissions from web forms into disparate project management boards and invoicing tools.',
    solution: 'Designed and deployed robust visual n8n pipelines featuring retry logic, payload sanitization, automatic email verification, and instantaneous multi-system broadcasts.',
    architecture: [
      'Self-hosted Dockerized n8n workflow server with webhook listeners',
      'Intelligent payload normalization and deduplication triggers',
      'Two-way sync between Airtable, Google Workspace, and Slack channels',
      'Automated PDF invoice generation and Stripe receipt filing'
    ],
    techStack: ['n8n', 'Docker', 'Google Cloud Functions', 'Airtable API', 'Slack Webhooks', 'REST APIs'],
    metrics: [
      { label: 'Time Saved', value: '30+ hrs/wk', sublabel: 'Per team member' },
      { label: 'Error Rate', value: '0.0%', sublabel: 'Over 10,000+ executions' },
      { label: 'Sync Latency', value: '< 2 sec', sublabel: 'Instantaneous data flow' }
    ]
  },
  {
    id: 'openclaw',
    category: 'ai-agents',
    categoryLabel: 'AI Integration + Channel Setup',
    title: 'OpenClaw Multi-Channel AI Framework Setup',
    client: 'OpenClaw Integration',
    clientRole: 'Integration Lead',
    status: 'Completed',
    summary: 'Full-stack OpenClaw AI framework deployment with configured communication channels, real-time message routing, and verified tool integrations.',
    heroImage: openclawImg,
    challenge: 'Configuring custom AI agent frameworks requires disciplined webhook orchestration, rate limit management, and rigorous verification across third-party communication channels.',
    solution: 'Engineered an end-to-end deployment of OpenClaw, configuring secure channel routing, establishing real-time webhook endpoints, and running comprehensive validation tests across all agent actions.',
    architecture: [
      'OpenClaw core daemon deployment and configuration',
      'Encrypted webhook endpoints with replay attack protection',
      'Bidirectional communication channel integration',
      'Automated integration test harness & telemetry logging'
    ],
    techStack: ['OpenClaw', 'TypeScript', 'Node.js', 'Webhooks', 'REST APIs', 'Docker'],
    metrics: [
      { label: 'Integration Speed', value: '100%', sublabel: 'Zero downtime setup' },
      { label: 'Channel Latency', value: '< 250ms', sublabel: 'Real-time response' },
      { label: 'Test Pass Rate', value: '100%', sublabel: 'End-to-end verified' }
    ]
  },
  {
    id: 'omniflow-ai',
    category: 'ai-agents',
    categoryLabel: 'Autonomous AI Agent System',
    title: 'OmniFlow Multi-Agent Research & Support Engine',
    client: 'Enterprise Client',
    clientRole: 'VP of Technology',
    status: 'Completed',
    summary: 'A LangGraph-based multi-agent system that autonomously analyzes incoming enterprise tickets, retrieves internal documentation, and drafts verified technical answers.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    challenge: 'Tier-2 and Tier-3 technical support engineers were overwhelmed by repetitive architectural inquiries that required searching across 500+ internal documentation pages and repos.',
    solution: 'Engineered a multi-agent orchestration layer with LangGraph. One agent plans the retrieval strategy, a secondary agent searches vector embeddings with semantic filtering, and a third verification agent audits the code samples before presenting them to staff.',
    architecture: [
      'LangGraph multi-agent supervisor/worker architecture',
      'Hybrid semantic vector search with Pinecone and BM25 re-ranking',
      'Structured tool calling with strict schema validation',
      'Interactive audit dashboard with confidence score thresholds'
    ],
    techStack: ['LangGraph', 'Python', 'FastAPI', 'Claude 3.5 Sonnet', 'Pinecone', 'React'],
    metrics: [
      { label: 'Ticket Resolution Time', value: '-65%', sublabel: 'From 45m to 15m' },
      { label: 'Accuracy Rating', value: '98.4%', sublabel: 'Staff verified' },
      { label: 'Knowledge Base Coverage', value: '100%', sublabel: '500+ docs indexed' }
    ]
  }
];

export function CaseStudiesPage({ onOpenInquiry, onNavigate }: CaseStudiesPageProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-agents' | 'fullstack' | 'automation'>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<DetailedCaseStudy | null>(null);

  const filteredStudies = activeFilter === 'all' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(s => s.category === activeFilter);

  return (
    <div className="bg-[#F4EFE6] text-[#20201D] min-h-screen pt-8 pb-24">
      
      {/* =================================================== */}
      {/* 1. HERO BANNER                                      */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 sm:pt-10 pb-8 sm:pb-12 text-left">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#7D7970] mb-5 sm:mb-6">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-[#20201D] transition-colors cursor-pointer py-1"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#C88A32] font-semibold">Case Studies</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EDE7DA] border border-[#DDD6C9] text-xs font-mono font-semibold uppercase tracking-wider text-[#525048] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C88A32]" />
              Proven Results & Production Case Studies
            </div>
            
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1D19] leading-[1.12] sm:leading-[1.1] mb-3 sm:mb-4">
              Real projects. Measurable business outcomes.
            </h1>
            
            <p className="text-sm sm:text-lg text-[#555046] leading-relaxed">
              Explore how we design, build, and deploy intelligent agents, automated backend pipelines, and high-performance digital platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 self-start md:self-auto p-1.5 rounded-2xl bg-[#EDE7DA] border border-[#DDD6C9] overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai-agents', label: 'AI Agents' },
              { id: 'automation', label: 'Automation' },
              { id: 'fullstack', label: 'Full-Stack' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`min-h-[38px] px-3 sm:px-4 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                  activeFilter === tab.id
                    ? 'bg-[#1E1D19] text-[#F4EFE6] shadow-2xs'
                    : 'text-[#686358] hover:text-[#1E1D19] hover:bg-[#E2DBCB]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

      </section>

      {/* =================================================== */}
      {/* 2. CASE STUDIES SHOWCASE LIST                       */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
        {filteredStudies.map((study, idx) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="rounded-3xl bg-[#FBF8F1] border border-[#DDD6C9] overflow-hidden hover:border-[#C88A32]/70 hover:shadow-[0_20px_50px_rgba(40,35,25,0.07)] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 text-left group"
          >
            {/* Left Image & Status Banner */}
            <div className="lg:col-span-5 relative overflow-hidden bg-[#1E1D19] min-h-[220px] sm:min-h-[340px] flex items-center justify-center">
              <img 
                src={study.heroImage} 
                alt={study.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
                  {study.categoryLabel}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <div className="text-[11px] sm:text-xs font-mono text-[#C88A32] font-semibold uppercase mb-0.5 sm:mb-1">
                  Client / Partner
                </div>
                <div className="text-sm sm:text-base font-bold">
                  {study.client}
                </div>
                <div className="text-xs text-white/70">
                  {study.clientRole}
                </div>
              </div>
            </div>

            {/* Right Detailed Case Study Content */}
            <div className="lg:col-span-7 p-5 sm:p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#817E74] font-semibold">
                    Case Study 0{idx + 1}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#EBF5EA] text-[#246A36] text-[10px] sm:text-[11px] font-mono font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#246A36]" />
                    {study.status}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E1D19] tracking-tight mb-3 sm:mb-4 group-hover:text-[#1E1D19]">
                  {study.title}
                </h2>

                <p className="text-xs sm:text-base text-[#555046] leading-relaxed mb-4 sm:mb-6">
                  {study.summary}
                </p>

                {/* Metrics Highlight Strip */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl bg-[#EDE7DA] border border-[#DDD6C9] mb-5 sm:mb-6">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-left">
                      <div className="text-base sm:text-xl font-bold font-mono text-[#1E1D19]">
                        {m.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-medium text-[#7A756B] leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Architecture Highlights */}
                <div className="mb-5 sm:mb-6">
                  <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#1E1D19] mb-2.5 sm:mb-3">
                    Engineered Solution
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {study.architecture.slice(0, 3).map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#555046]">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C88A32] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-[#EAE3D4] pt-5 sm:pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {study.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#EDE7DA] border border-[#DDD6C9] text-[10px] sm:text-[11px] font-mono text-[#525048]">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCaseStudy(study)}
                  className="min-h-[42px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E1D19] text-[#F4EFE6] text-xs font-semibold hover:bg-[#333129] active:scale-95 transition-all cursor-pointer self-stretch sm:self-auto"
                >
                  <span>View Deep-Dive</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C88A32]" />
                </button>
              </div>

            </div>
          </motion.div>
        ))}
      </section>

      {/* =================================================== */}
      {/* 3. CASE STUDY DETAIL MODAL                          */}
      {/* =================================================== */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FBF8F1] border border-[#DDD6C9] p-6 sm:p-10 text-left shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#EDE7DA] border border-[#DDD6C9] flex items-center justify-center text-[#555046] hover:text-[#1E1D19] hover:bg-[#E5DEC7] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="px-3 py-1 rounded-full bg-[#EDE7DA] text-xs font-mono font-semibold uppercase tracking-wider text-[#686458] mb-4 inline-block">
                {selectedCaseStudy.categoryLabel}
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1D19] tracking-tight mb-4">
                {selectedCaseStudy.title}
              </h2>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-[#EDE7DA] border border-[#DDD6C9] mb-8">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#9C382A] mb-2">
                    The Challenge
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4740] leading-relaxed">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#246A36] mb-2">
                    The Solution
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4740] leading-relaxed">
                    {selectedCaseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="mb-8">
                <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#1E1D19] mb-3">
                  Key Results & Metrics
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {selectedCaseStudy.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-4 rounded-xl bg-white border border-[#DDD6C9] text-center">
                      <div className="text-xl font-mono font-bold text-[#C88A32]">
                        {m.value}
                      </div>
                      <div className="text-xs font-bold text-[#1E1D19] mt-0.5">
                        {m.label}
                      </div>
                      <div className="text-[10px] text-[#7A756B]">
                        {m.sublabel}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial if exists */}
              {selectedCaseStudy.testimonial && (
                <div className="p-6 rounded-2xl bg-[#1E1D19] text-white mb-8 border border-[#3A3730]">
                  <p className="font-serif italic text-sm sm:text-base leading-relaxed text-[#EAE6DA] mb-3">
                    &ldquo;{selectedCaseStudy.testimonial.quote}&rdquo;
                  </p>
                  <div className="text-xs font-bold text-[#C88A32]">
                    {selectedCaseStudy.testimonial.author} · <span className="text-[#A8A396] font-normal">{selectedCaseStudy.testimonial.role}</span>
                  </div>
                </div>
              )}

              {/* CTA footer inside modal */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#EAE3D4] pt-6">
                <span className="text-xs text-[#7A756B]">
                  Looking for similar architecture or results?
                </span>
                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    onOpenInquiry();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C88A32] text-white font-semibold text-xs hover:bg-[#D99A40] transition-colors cursor-pointer text-center"
                >
                  Discuss Your Project
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =================================================== */}
      {/* 4. BOTTOM CTA                                       */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl bg-[#181714] text-[#FBF8F1] p-8 sm:p-12 lg:p-16 border border-[#2F2C24] flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#C88A32] mb-2 block">
              START YOUR CASE STUDY
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Ready to create your next measurable success story?
            </h2>
            <p className="text-sm text-[#A8A396] leading-relaxed">
              We collaborate closely with founders and teams to engineer production software with tangible ROI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              onClick={onOpenInquiry}
              className="px-7 py-3.5 rounded-xl bg-[#C88A32] text-white font-semibold text-sm hover:bg-[#D99A40] transition-colors shadow-sm cursor-pointer text-center"
            >
              Start a Project
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-7 py-3.5 rounded-xl bg-[#282620] border border-[#3D3A30] text-[#E8E4D8] font-semibold text-sm hover:bg-[#333129] transition-colors cursor-pointer text-center"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
