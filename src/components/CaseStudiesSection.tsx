import React, { useState } from 'react';
import { ArrowRight, X, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudyCard, CaseStudyData } from './CaseStudyCard';
import yarnAndHookImg from '../assets/images/yarn_and_hook_1787408119043.jpg';
import openclawImg from '../assets/images/openclaw_mascot_1787408104133.jpg';

const CASE_STUDIES: CaseStudyData[] = [
  {
    id: 'rk-packers',
    tag: 'Website + WhatsApp Automation',
    title: 'RK Packers & Movers',
    founder: 'Founder: Hawa Singh',
    description: 'Built and optimized the business website and connected WhatsApp automation to improve customer communication and lead handling.',
    imageUrl: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=600&q=80',
    status: 'Completed',
    ctaText: 'View Project →',
    highlightsLabel: 'Results / Highlights',
    highlights: [
      'Lighthouse SEO score: 100',
      'Website performance & technical optimization',
      'WhatsApp automation for customer interactions',
      '3/3 agentic browsing'
    ],
    detailedCopy: 'Full end-to-end modernization of the online presence for RK Packers & Movers. We engineered an ultra-fast, mobile-first booking interface achieving a perfect 100 Lighthouse SEO audit score, paired with an automated WhatsApp conversational assistant that captures moving quotes, calculates freight estimates, and notifies team dispatchers instantly.'
  },
  {
    id: 'tt-crochet',
    tag: 'Full-Stack MVP + AI Chatbot',
    title: 'T&T Crochet',
    founder: 'Handmade Crochet Studio',
    description: 'Building a full-stack e-commerce MVP for a crochet business, including the website experience and an integrated chatbot.',
    imageUrl: yarnAndHookImg,
    status: 'In Development',
    ctaText: 'View Progress →',
    highlightsLabel: 'Current Scope',
    highlights: [
      'Full-stack website',
      'MVP architecture',
      'Product/customer experience',
      'AI chatbot integration'
    ],
    detailedCopy: 'Currently developing a modern, artisanal e-commerce experience for handmade crochet creations. Building a reactive product catalog, seamless checkout flow, and an intelligent custom concierge chatbot that guides buyers through yarn selections, custom color palettes, and order customization.'
  },
  {
    id: 'khushi-patel',
    tag: 'Business Automation with n8n',
    title: 'Khushi Patel',
    founder: 'Business Executive',
    description: 'Designed an n8n-based automation workflow for Business Executive Khushi Patel to reduce repetitive business processes and connect the required tools.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    status: 'Completed',
    ctaText: 'View Automation →',
    highlightsLabel: 'Focus',
    highlights: [
      'Workflow automation',
      'Tool integration',
      'Reduced manual operations',
      'Business process optimization'
    ],
    detailedCopy: 'Engineered custom n8n visual automation pipelines for Business Executive Khushi Patel to replace tedious manual data transfers across operations. Automatically synchronizes incoming client leads, transforms payload records, updates shared project dashboards, and triggers instant confirmation workflows.'
  },
  {
    id: 'openclaw',
    tag: 'AI Integration + Channel Setup',
    title: 'OpenClaw Integration',
    founder: 'OpenClaw Framework Setup',
    description: 'Set up an OpenClaw integration and configured one communication channel as part of the initial system setup.',
    imageUrl: openclawImg,
    status: 'Completed',
    ctaText: 'View Setup →',
    highlightsLabel: 'Scope',
    highlights: [
      'OpenClaw integration',
      'Channel configuration',
      'Initial system setup',
      'Integration testing'
    ],
    detailedCopy: 'Executed an end-to-end setup and API integration of the OpenClaw framework. Configured primary communication webhooks, verified secure payload handling across connected channels, and completed comprehensive end-to-end integration tests.'
  }
];

interface CaseStudiesSectionProps {
  onOpenWorkModal?: () => void;
  onOpenInquiryModal?: () => void;
}

export function CaseStudiesSection({ onOpenWorkModal, onOpenInquiryModal }: CaseStudiesSectionProps) {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyData | null>(null);

  return (
    <section 
      id="work-case-studies"
      className="relative bg-[#12110F] py-24 sm:py-32 px-6 md:px-12 border-t border-[#262420] overflow-hidden"
    >
      {/* Decorative Dot Matrix Accents (Left & Right) */}
      <div className="absolute left-6 top-36 hidden xl:grid grid-cols-2 gap-2 opacity-30 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={`dot-l-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#4A463D]" />
        ))}
      </div>

      <div className="absolute right-6 bottom-36 hidden xl:grid grid-cols-3 gap-2 opacity-30 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={`dot-r-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#4A463D]" />
        ))}
      </div>

      {/* Decorative Botanical Leaf Silhouettes */}
      <svg 
        className="absolute -left-12 -bottom-10 w-64 h-64 text-[#26241F]/40 pointer-events-none transform -rotate-12" 
        viewBox="0 0 200 200" 
        fill="currentColor"
      >
        <path d="M40,160 Q80,120 70,80 Q100,100 120,60 Q130,100 150,110 Q110,130 90,170 Z" />
        <path d="M20,180 Q60,150 50,110 Q80,130 100,90 Q110,130 130,140 Q90,160 70,200 Z" opacity="0.6" />
        <path d="M5,195 Q90,140 140,70" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      <svg 
        className="absolute -right-12 -bottom-10 w-64 h-64 text-[#26241F]/40 pointer-events-none transform rotate-12 scale-x-[-1]" 
        viewBox="0 0 200 200" 
        fill="currentColor"
      >
        <path d="M40,160 Q80,120 70,80 Q100,100 120,60 Q130,100 150,110 Q110,130 90,170 Z" />
        <path d="M20,180 Q60,150 50,110 Q80,130 100,90 Q110,130 130,140 Q90,160 70,200 Z" opacity="0.6" />
        <path d="M5,195 Q90,140 140,70" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* =================================================== */}
        {/* SECTION HEADER                                      */}
        {/* =================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-[0.12em] uppercase text-[#D99A45] mb-3 inline-block font-mono">
            REAL PROJECTS &amp; CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#F5F2EB] tracking-tight leading-[1.08] mb-4">
            Real projects. Real results.
          </h2>
          <p className="text-base sm:text-lg text-[#A49F94] leading-relaxed max-w-xl mx-auto">
            A selection of live builds, active MVPs, and production automation workflows.
          </p>
        </div>

        {/* =================================================== */}
        {/* 4 CASE STUDY CARDS GRID                             */}
        {/* =================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-14">
          {CASE_STUDIES.map((study, idx) => (
            <CaseStudyCard 
              key={study.id} 
              study={study} 
              index={idx}
              onClick={() => setSelectedStudy(study)} 
            />
          ))}
        </div>

        {/* =================================================== */}
        {/* BOTTOM "SEE ALL WORK" BUTTON                        */}
        {/* =================================================== */}
        <div className="text-center">
          <button
            id="see-all-work-btn"
            onClick={onOpenWorkModal || (() => setSelectedStudy(CASE_STUDIES[0]))}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-[#1F1E1A] hover:bg-[#2A2823] text-[#F5F2EB] font-semibold text-sm transition-all duration-200 border border-[#3A3730] hover:border-[#524E44] shadow-md cursor-pointer active:scale-95"
          >
            <span>See all work</span>
            <ArrowRight className="w-4 h-4 text-[#D99A45]" />
          </button>
        </div>

      </div>

      {/* =================================================== */}
      {/* CASE STUDY DETAIL MODAL OVERLAY                     */}
      {/* =================================================== */}
      <AnimatePresence>
        {selectedStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-[#1C1B18] w-full max-w-xl rounded-3xl border border-[#3A3730] shadow-2xl p-6 sm:p-8 overflow-hidden relative text-left"
            >
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#282621] hover:bg-[#38352F] text-[#D8D2C5] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase border border-[#484236] text-[#E8A748] bg-[#2A241A]">
                  {selectedStudy.tag}
                </span>

                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                  selectedStudy.status === 'In Development' || selectedStudy.status === 'In Progress'
                    ? 'bg-[#2A2315] border-[#5A451E] text-[#E5A845]' 
                    : 'bg-[#162419] border-[#25462C] text-[#7ED496]'
                }`}>
                  {selectedStudy.status === 'In Development' || selectedStudy.status === 'In Progress' ? (
                    <Clock className="w-3 h-3 text-[#E5A845]" />
                  ) : (
                    <CheckCircle2 className="w-3 h-3 text-[#7ED496]" />
                  )}
                  <span>{selectedStudy.status}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F2EB] tracking-tight mb-1">
                {selectedStudy.title}
              </h3>
              {selectedStudy.founder && (
                <p className="text-sm font-medium text-[#C98B35] mb-3">
                  {selectedStudy.founder}
                </p>
              )}

              {/* Highlights Block */}
              <div className="p-4 bg-[#151412] rounded-2xl border border-[#2B2923] text-xs mb-4">
                <div className="font-mono font-bold uppercase tracking-wider text-[#A49F94] mb-2">
                  {selectedStudy.highlightsLabel}:
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedStudy.highlights.map((h, i) => (
                    <li key={i} className="text-[#D8D2C5] flex items-start gap-1.5">
                      <span className="text-[#C98B35] mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm sm:text-base text-[#B8B2A6] leading-relaxed mb-6">
                {selectedStudy.detailedCopy || selectedStudy.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#2F2D27]">
                <button
                  onClick={() => {
                    setSelectedStudy(null);
                    if (onOpenInquiryModal) onOpenInquiryModal();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#D99A45] hover:bg-[#E8A748] text-[#12110F] font-bold text-sm transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start a similar project</span>
                </button>
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#282621] hover:bg-[#38352F] text-[#F5F2EB] font-medium text-sm transition-colors cursor-pointer"
                >
                  Close preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

