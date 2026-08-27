import React, { useState } from 'react';
import { 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Code2, 
  Zap, 
  ChevronDown, 
  ArrowUpRight,
  Database,
  CreditCard,
  Lock,
  BarChart3,
  Users2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MVPServicePageProps {
  onOpenInquiry: () => void;
  onNavigate: (section: string) => void;
}

const MVP_DELIVERABLES = [
  {
    title: "Product Architecture & User Journeys",
    desc: "Interactive wireframes and rapid click-through flows mapping the shortest path from sign-up to value creation.",
    icon: Layers
  },
  {
    title: "Authentication & Role Permissions (RBAC)",
    desc: "Enterprise-grade OAuth (Google, GitHub, Email/Password) with role-based access control and security guards.",
    icon: Lock
  },
  {
    title: "Scalable Database & Backend API",
    desc: "PostgreSQL, Supabase, or Firebase database schemas with real-time subscriptions, secure RLS, and fast REST/GraphQL endpoints.",
    icon: Database
  },
  {
    title: "Stripe Billing & Subscription Webhooks",
    desc: "One-time checkout, tiered monthly/annual SaaS subscriptions, customer billing portal, and automated invoice delivery.",
    icon: CreditCard
  },
  {
    title: "User Telemetry & Product Analytics",
    desc: "Built-in PostHog, Mixpanel, or Google Analytics event tracking to observe feature engagement and optimize retention.",
    icon: BarChart3
  },
  {
    title: "Admin Dashboard & Customer Management",
    desc: "Internal portal allowing you to manage users, view subscription status, review content, and manage platform data.",
    icon: Users2
  }
];

const STACK_OPTIONS = [
  {
    title: "Custom Full-Stack Code",
    badge: "Production SaaS Scale",
    description: "Handcrafted TypeScript, Node.js, Python/FastAPI, Next.js, and PostgreSQL for founders wanting complete control over IP, high security, and zero platform scaling caps.",
    tech: ["Next.js 14", "TypeScript", "Node.js", "Python / FastAPI", "PostgreSQL", "Supabase", "Stripe API", "Tailwind CSS"],
    highlights: [
      "No recurring per-user platform subscription fees",
      "Unlimited freedom for proprietary logic and ML models",
      "Production-ready Docker & Vercel/AWS cloud deployment",
      "100% intellectual property & code ownership"
    ]
  },
  {
    title: "Rapid Visual Full-Stack (Bubble / FlutterFlow)",
    badge: "Fastest Market Validation",
    description: "Visual application engines engineered for rapid validation. Perfect for testing software ideas with paying customers before investing in large-scale custom architecture.",
    tech: ["Bubble", "FlutterFlow", "Glide", "Airtable", "Make.com", "Stripe Connect"],
    highlights: [
      "Ship revenue-ready software in 2 weeks",
      "Built-in database and visual workflow builder",
      "Immediate mobile & web responsive layouts",
      "Significantly lower initial build cost"
    ]
  }
];

const FAQS = [
  {
    q: "How fast can we build and launch an MVP?",
    a: "Our standard MVP sprint runs for 2 to 4 weeks. By week 1, we finalize the UX flow and database schema. By week 2–3, core features, authentication, and payments are functional. By week 4, we conduct thorough end-to-end testing and deploy to production."
  },
  {
    q: "Can this MVP handle real paying users and real data securely?",
    a: "Absolutely. We don’t build 'throwaway prototypes'. Every MVP includes production-grade authentication, SSL encryption, database row-level security (RLS), and live Stripe payment integrations with webhooks."
  },
  {
    q: "What happens if we need to scale or add new features after launch?",
    a: "Because we write modular, well-documented code (or cleanly structured visual databases), your product is built to evolve. We offer 30-day post-launch support and monthly iteration sprints to build your post-launch roadmap."
  },
  {
    q: "Do I own all code and database repositories?",
    a: "Yes. You own 100% of the GitHub repositories, database credentials, Stripe accounts, and deployment environments."
  }
];

export function MVPServicePage({ onOpenInquiry, onNavigate }: MVPServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#F4EFE6] text-[#20201D] min-h-screen pt-8 pb-24 text-left">
      
      {/* =================================================== */}
      {/* 1. HERO HEADER                                      */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 sm:pt-10 pb-12 sm:pb-16 text-left">
        
        {/* Breadcrumb: Home / Services / MVP */}
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
          <span className="text-[#C88A32] font-semibold">MVP</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 sm:gap-10 items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE7DA] border border-[#DDD6C9] text-xs font-mono font-semibold uppercase tracking-wider text-[#525048] mb-4">
              <Rocket className="w-3.5 h-3.5 text-[#C98B35]" />
              <span>MVP · Minimum Viable Product</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1D19] leading-[1.12] sm:leading-[1.1] mb-4 sm:mb-6">
              Turn Your Software Idea into Revenue-Ready Product in 2–4 Weeks.
            </h1>
            
            <p className="text-base sm:text-lg text-[#555046] max-w-2xl leading-relaxed">
              We cut through the noise to build tightly scoped, high-performance MVPs equipped with real user authentication, production databases, and Stripe payment processing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 sm:gap-4 lg:items-end justify-end">
            <button
              onClick={onOpenInquiry}
              className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#20201D] text-[#F4EFE6] font-semibold text-sm hover:bg-[#383732] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              <span>Scope Your MVP</span>
              <ArrowRight className="w-4 h-4 text-[#C88A32]" />
            </button>
            <div className="text-xs font-mono text-[#7D7970] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Fast-Track Sprint: 2–4 Weeks</span>
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
              &lt; 30 Days
            </div>
            <div className="text-xs font-semibold text-[#7D7970] uppercase font-mono mb-1">Idea to Live Product</div>
            <p className="text-xs text-[#555046] leading-relaxed">
              Ship a functional, paying-customer-ready MVP without wasting 6 months in agency development purgatory.
            </p>
          </div>

          <div className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-5 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-[#1E1D19] mb-1">
              100%
            </div>
            <div className="text-xs font-semibold text-[#7D7970] uppercase font-mono mb-1">Code & IP Ownership</div>
            <p className="text-xs text-[#555046] leading-relaxed">
              Complete access to your GitHub repositories, database schemas, and hosting accounts on day one.
            </p>
          </div>

          <div className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-5 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-[#1E1D19] mb-1">
              $0
            </div>
            <div className="text-xs font-semibold text-[#7D7970] uppercase font-mono mb-1">Unnecessary Overhead</div>
            <p className="text-xs text-[#555046] leading-relaxed">
              We focus solely on core value propositions, eliminating bloated features that delay user validation.
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
            Build Strategy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1D19]">
            Full-Stack Code vs. Rapid Visual Frameworks
          </h2>
          <p className="text-sm text-[#555046] max-w-2xl mt-1">
            Depending on your product’s complexity and long-term scaling horizon, we recommend the optimal technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {STACK_OPTIONS.map((item, idx) => (
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
                        <CheckCircle2 className="w-4 h-4 text-[#C98B35] flex-shrink-0 mt-0.5" />
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
            Production Readiness
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1D19]">
            Everything Included in Your MVP Build
          </h2>
          <p className="text-sm text-[#555046] max-w-2xl mt-1">
            Built from day one to handle real user accounts, authentic transactions, and rapid product iteration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MVP_DELIVERABLES.map((del, idx) => {
            const Icon = del.icon;
            return (
              <div key={idx} className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FBF8F1] border border-[#DDD6C9] flex items-center justify-center text-[#C98B35]">
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
      {/* 5. CTA & HOW WE WORK LINK BANNER                    */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24">
        <div className="rounded-3xl bg-[#20201D] text-[#F4EFE6] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C88A32]">
              Ready to Validate Your Idea?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Launch your MVP in weeks, not months.
            </h2>
            <p className="text-xs sm:text-sm text-[#B3AEA3] leading-relaxed">
              Share your concept and target features. We’ll map out the exact product architecture, sprint milestones, and fixed delivery cost.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3.5">
              <button
                onClick={onOpenInquiry}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#C88A32] text-[#20201D] font-bold text-xs sm:text-sm hover:bg-[#DCA047] active:scale-95 transition-all cursor-pointer shadow-md"
              >
                <span>Request MVP Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('how-we-work')}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2D2C28] text-white font-medium text-xs sm:text-sm hover:bg-[#3B3A35] transition-all cursor-pointer border border-[#44423C]"
              >
                <span>Our 5-Step Build Process</span>
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
            Frequently Asked Questions: MVP Development
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
