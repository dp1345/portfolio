import React from 'react';
import { FileText, ArrowRight, CheckCircle2, ShieldCheck, Scale } from 'lucide-react';

interface TermsOfServicePageProps {
  onNavigate: (section: string) => void;
  onOpenInquiry: () => void;
}

export function TermsOfServicePage({ onNavigate, onOpenInquiry }: TermsOfServicePageProps) {
  return (
    <div className="bg-[#F4EFE6] text-[#20201D] min-h-screen pt-8 pb-24 text-left">
      
      {/* =================================================== */}
      {/* 1. HERO BANNER                                      */}
      {/* =================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 pt-6 sm:pt-10 pb-8 sm:pb-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#7D7970] mb-5 sm:mb-6">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-[#20201D] transition-colors cursor-pointer py-1"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#C88A32] font-semibold">Terms of Service</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EDE7DA] border border-[#DDD6C9] text-xs font-mono font-semibold uppercase tracking-wider text-[#525048] mb-4">
          <Scale className="w-3.5 h-3.5 text-[#C88A32]" />
          Client Engagement Agreement
        </div>

        <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold tracking-tight text-[#1E1D19] leading-[1.15] mb-4">
          Terms of Service
        </h1>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-[#7D7970] border-b border-[#DDD6C9] pb-5 sm:pb-6">
          <span>Effective Date: January 15, 2025</span>
          <span className="hidden xs:inline">•</span>
          <span>Version 2.1</span>
        </div>
      </section>

      {/* =================================================== */}
      {/* 2. DOCUMENT CONTENT                                 */}
      {/* =================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 space-y-8 sm:space-y-10">
        
        {/* Intro */}
        <div className="p-5 sm:p-8 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] leading-relaxed text-sm sm:text-base text-[#4A4740] space-y-4">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website and professional engineering services provided by <strong>Dhrumi Patel</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
          </p>
          <p>
            By accessing our website or contracting our consulting, development, or automation services, you agree to be bound by these Terms and any accompanying Statement of Work (SOW).
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#C88A32]">01.</span>
            Services & Statements of Work (SOW)
          </h2>
          <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] text-sm text-[#4A4740] space-y-3">
            <p>
              All professional software development, AI agent implementation, workflow automation, and consulting services will be specified in a mutually agreed written Statement of Work or project agreement.
            </p>
            <p>
              Each SOW details project deliverables, technical milestones, estimated timelines, total fees, and testing criteria. Any modification to the agreed scope will require a written change order.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#C88A32]">02.</span>
            Intellectual Property & Code Ownership
          </h2>
          <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] text-sm text-[#4A4740] space-y-3">
            <p>
              <strong>Deliverables Ownership:</strong> Upon full and final settlement of all agreed fees for a project or milestone, all rights, titles, and interests in custom code, database structures, UI components, and assets created specifically for you are transferred 100% to you.
            </p>
            <p>
              <strong>Pre-Existing Tools & Open-Source:</strong> Standard open-source libraries (e.g., React, Tailwind, LangGraph) remain governed by their respective open-source licenses (such as MIT or Apache 2.0).
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#C88A32]">03.</span>
            Invoicing & Payment Terms
          </h2>
          <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] text-sm text-[#4A4740] space-y-3">
            <p>
              Engagements typically follow a structured milestone structure (e.g., 50% deposit upon kickoff, 50% upon deployment and sign-off) or agreed bi-weekly retainer billing.
            </p>
            <p>
              Invoices are payable within fourteen (14) calendar days of issuance unless otherwise stipulated in the SOW.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#C88A32]">04.</span>
            Warranty & Post-Launch Support
          </h2>
          <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] text-sm text-[#4A4740] space-y-3">
            <p>
              We provide a <strong>30-day post-launch warranty</strong> for all custom builds. During this period, any software defects or discrepancies against the agreed specifications are resolved promptly at zero additional cost.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#C88A32]">05.</span>
            Contact & Inquiries
          </h2>
          <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] text-sm text-[#4A4740] space-y-3">
            <p>
              If you have any questions regarding these Terms, please reach out directly:
            </p>
            <p className="font-mono text-xs text-[#1E1D19]">
              Email: <a href="mailto:dhrumi858@gmail.com" className="text-[#C88A32] underline font-bold">dhrumi858@gmail.com</a>
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
