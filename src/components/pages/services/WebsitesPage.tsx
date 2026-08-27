import React, { useState } from 'react';
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Code2, 
  Zap, 
  Layers, 
  ChevronDown, 
  Cpu, 
  ArrowUpRight,
  Layout,
  Search,
  Smartphone,
  Server,
  Palette
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WebsitesServicePageProps {
  onOpenInquiry: () => void;
  onNavigate: (section: string) => void;
}

const DELIVERABLES = [
  {
    title: "High-Converting Page Architecture",
    desc: "Bespoke page layouts engineered to guide visitors smoothly toward booking a call, signing up, or purchasing.",
    icon: Layout
  },
  {
    title: "100/100 Lighthouse & Sub-Second Speed",
    desc: "Optimized asset pipelines, modern image formats, and clean code ensuring ultra-fast load times across mobile and desktop.",
    icon: Zap
  },
  {
    title: "Responsive & Mobile-First Precision",
    desc: "Pixel-perfect touch experiences with adaptive navigation, touch-friendly UI targets, and ergonomic spacing.",
    icon: Smartphone
  },
  {
    title: "Technical SEO & Schema Markup",
    desc: "OpenGraph tags, structured JSON-LD rich snippets, clean metadata, and semantic HTML5 for search engine visibility.",
    icon: Search
  },
  {
    title: "Dynamic Headless CMS Integration",
    desc: "Effortless blog, portfolio, and testimonial updates without touching code (Sanity, Strapi, Webflow CMS, or Notion).",
    icon: Server
  },
  {
    title: "Frictionless Forms & CRM Pipelines",
    desc: "Custom lead-capture forms syncing seamlessly with HubSpot, Notion, Airtable, Slack alerts, and automated email replies.",
    icon: ShieldCheck
  }
];

const STACK_COMPARISON = [
  {
    mode: "Code-Based (Custom React / Next.js)",
    badge: "Maximum Performance & Custom APIs",
    description: "Handcrafted React, Next.js 14, and Tailwind CSS architectures. Best when you need proprietary UI interactions, deep custom backend API integrations, maximum loading speed, or custom SaaS platform frontends.",
    tech: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Vercel", "Framer Motion", "Shadcn UI"],
    pros: [
      "Zero platform lock-in (100% your code and repo)",
      "Unmatched sub-second page performance",
      "Unlimited capability for custom APIs & dynamic data",
      "Enterprise-grade security and custom authentication"
    ]
  },
  {
    mode: "No-Code (Webflow, Framer, Shopify)",
    badge: "Rapid Launch & Visual Client Editing",
    description: "Visual-first website engines allowing marketing teams to easily edit copy, images, and blog posts autonomously without waiting on engineering support.",
    tech: ["Framer", "Webflow", "Shopify", "WordPress", "Relume", "Weglot"],
    pros: [
      "Extremely fast turnaround (1 to 2 weeks)",
      "Visual editor for instant marketing and copy updates",
      "Built-in hosting, SSL certificates, and CDNs",
      "Lower ongoing maintenance overhead"
    ]
  }
];

const FAQS = [
  {
    q: "How long does it take to design and launch a complete website?",
    a: "Standard bespoke websites and high-converting landing pages are typically delivered in 1 to 3 weeks. Rapid visual builds in Framer or Webflow can be ready in 5–10 days, while complex custom Next.js platforms with custom integrations take 2–3 weeks."
  },
  {
    q: "Will my team be able to update content without writing code?",
    a: "Yes. For no-code builds (Framer, Webflow, Shopify), your team gets an intuitive visual CMS editor. For code-based builds (Next.js), we connect headless CMS tools like Sanity, Notion, or Decap so you can publish blog articles and edit text with zero developer assistance."
  },
  {
    q: "Do you handle hosting, domains, and DNS setup?",
    a: "Yes. We configure your domain DNS records, SSL certificates, CDN routing, and production hosting on Vercel, Cloudflare, or Webflow as part of the launch milestone."
  },
  {
    q: "Do I own all the design files and code repository?",
    a: "Yes. You receive full ownership of the GitHub repository, Figma design files, and platform workspaces immediately upon project completion."
  }
];

export function WebsitesServicePage({ onOpenInquiry, onNavigate }: WebsitesServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#F4EFE6] text-[#20201D] min-h-screen pt-8 pb-24 text-left">
      
      {/* =================================================== */}
      {/* 1. HERO HEADER                                      */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 sm:pt-10 pb-12 sm:pb-16 text-left">
        
        {/* Breadcrumb: Home / Services / Websites */}
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
          <span className="text-[#C88A32] font-semibold">Websites</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 sm:gap-10 items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE7DA] border border-[#DDD6C9] text-xs font-mono font-semibold uppercase tracking-wider text-[#525048] mb-4">
              <Globe className="w-3.5 h-3.5 text-[#59634B]" />
              <span>Websites & High-Converting Platforms</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1D19] leading-[1.12] sm:leading-[1.1] mb-4 sm:mb-6">
              Bespoke Websites Engineered to Validate, Engage & Convert.
            </h1>
            
            <p className="text-base sm:text-lg text-[#555046] max-w-2xl leading-relaxed">
              We design and engineer lightning-fast digital platforms, high-converting marketing sites, and client portals built with modern custom code (React/Next.js) or rapid visual CMS engines (Webflow/Framer).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 sm:gap-4 lg:items-end justify-end">
            <button
              onClick={onOpenInquiry}
              className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#20201D] text-[#F4EFE6] font-semibold text-sm hover:bg-[#383732] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              <span>Build Your Website</span>
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
      {/* 2. STATS & VALUE PROP BANNER                        */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-5 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-[#1E1D19] mb-1">
              &lt; 0.8s
            </div>
            <div className="text-xs font-semibold text-[#7D7970] uppercase font-mono mb-1">Page Load Time</div>
            <p className="text-xs text-[#555046] leading-relaxed">
              Optimized bundles and instant CDN caching ensuring visitors never bounce due to slow rendering.
            </p>
          </div>

          <div className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-5 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-[#1E1D19] mb-1">
              100/100
            </div>
            <div className="text-xs font-semibold text-[#7D7970] uppercase font-mono mb-1">Lighthouse Performance</div>
            <p className="text-xs text-[#555046] leading-relaxed">
              Strict adherence to accessibility standards, technical SEO metadata, and clean semantic markup.
            </p>
          </div>

          <div className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-5 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-[#1E1D19] mb-1">
              +45%
            </div>
            <div className="text-xs font-semibold text-[#7D7970] uppercase font-mono mb-1">Avg. Conversion Lift</div>
            <p className="text-xs text-[#555046] leading-relaxed">
              Clear visual hierarchy and strategic call-to-action pathways designed to maximize client inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* 3. CODE-BASED VS NO-CODE APPROACH                   */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-20">
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7D7970] block mb-2">
            Technical Versatility
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1D19]">
            Tailored Engineering: Code-Based or No-Code
          </h2>
          <p className="text-sm text-[#555046] max-w-2xl mt-1">
            We don’t force a one-size-fits-all stack. We recommend the exact architecture that aligns with your timeline, budget, and long-term team autonomy.
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
                  {item.mode}
                </h3>
                <p className="text-xs sm:text-sm text-[#555046] leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-[#7D7970] font-semibold block uppercase">Key Advantages:</span>
                  <ul className="space-y-2">
                    {item.pros.map((pro, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-[#3A3831]">
                        <CheckCircle2 className="w-4 h-4 text-[#59634B] flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
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
      {/* 4. WHAT'S INCLUDED (DELIVERABLES GRID)              */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24">
        <div className="mb-8 sm:mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7D7970] block mb-2">
            Complete Scope
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1D19]">
            Everything Included in Every Website Build
          </h2>
          <p className="text-sm text-[#555046] max-w-2xl mt-1">
            No half-finished templates or hidden extras. Every project is delivered with enterprise-level finish and full client training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DELIVERABLES.map((del, idx) => {
            const Icon = del.icon;
            return (
              <div key={idx} className="bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FBF8F1] border border-[#DDD6C9] flex items-center justify-center text-[#C88A32]">
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
      {/* 5. PROCESS LINK & CTA BANNER                        */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24">
        <div className="rounded-3xl bg-[#20201D] text-[#F4EFE6] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C88A32]">
              Ready to Launch Your Platform?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Let’s build a website that turns casual visitors into booked clients.
            </h2>
            <p className="text-xs sm:text-sm text-[#B3AEA3] leading-relaxed">
              Book a 30-minute scoping call or submit your project inquiry. You&apos;ll receive a clear architecture plan, fixed scope, and guaranteed delivery schedule.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3.5">
              <button
                onClick={onOpenInquiry}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#C88A32] text-[#20201D] font-bold text-xs sm:text-sm hover:bg-[#DCA047] active:scale-95 transition-all cursor-pointer shadow-md"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('how-we-work')}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2D2C28] text-white font-medium text-xs sm:text-sm hover:bg-[#3B3A35] transition-all cursor-pointer border border-[#44423C]"
              >
                <span>Learn How We Work</span>
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
            Frequently Asked Questions: Websites
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
