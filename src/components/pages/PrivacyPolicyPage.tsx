import React from 'react';
import { ShieldCheck, ArrowRight, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (section: string) => void;
  onOpenInquiry: () => void;
}

export function PrivacyPolicyPage({ onNavigate, onOpenInquiry }: PrivacyPolicyPageProps) {
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
          <span className="text-[#C88A32] font-semibold">Privacy Policy</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EDE7DA] border border-[#DDD6C9] text-xs font-mono font-semibold uppercase tracking-wider text-[#525048] mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C88A32]" />
          Legal & Data Protection
        </div>

        <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold tracking-tight text-[#1E1D19] leading-[1.15] mb-4">
          Privacy Policy
        </h1>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-[#7D7970] border-b border-[#DDD6C9] pb-5 sm:pb-6">
          <span>Effective Date: January 15, 2025</span>
          <span className="hidden xs:inline">•</span>
          <span>Last Updated: February 2025</span>
        </div>
      </section>

      {/* =================================================== */}
      {/* 2. DOCUMENT CONTENT                                 */}
      {/* =================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 space-y-8 sm:space-y-10">
        
        {/* Intro */}
        <div className="p-5 sm:p-8 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] leading-relaxed text-sm sm:text-base text-[#4A4740] space-y-4">
          <p>
            At <strong>Dhrumi Patel</strong> (Freelance AI & Full-Stack Developer), we respect your privacy and are committed to protecting any personal information you share with us through our website and client services.
          </p>
          <p>
            This Privacy Policy explains what information we collect, how we process and store it, and your rights regarding your personal data in accordance with modern privacy standards including GDPR and CCPA.
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#C88A32]">01.</span>
            Information We Collect
          </h2>
          <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] text-sm text-[#4A4740] space-y-3">
            <p>We may collect information directly from you when you interact with our website or submit project inquiries:</p>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong>Contact Information:</strong> Your name, email address, company name, phone number, or social profiles provided via our inquiry forms.</li>
              <li><strong>Project Specifications:</strong> Details regarding your software requirements, tech stack preferences, timeline goals, and budget scopes.</li>
              <li><strong>Technical & Analytics Data:</strong> Non-personally identifiable usage data, including browser type, referring URL, operating system, and anonymous interaction metrics used strictly to optimize website responsiveness.</li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#C88A32]">02.</span>
            How We Use Your Information
          </h2>
          <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] text-sm text-[#4A4740] space-y-3">
            <p>We utilize the collected information strictly for legitimate commercial and engineering purposes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'To evaluate and respond to project inquiries',
                'To draft statements of work and architecture proposals',
                'To communicate development milestones & progress',
                'To comply with legal obligations and invoicing standards',
                'To maintain website security and prevent spam or abuse',
                'To continually optimize site performance'
              ].map((useCase, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#EDE7DA]/70 border border-[#DDD6C9] text-xs font-medium text-[#20201D]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C88A32] flex-shrink-0" />
                  <span>{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#C88A32]">03.</span>
            Client Confidentiality & Code Security
          </h2>
          <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] text-sm text-[#4A4740] space-y-3">
            <p>
              We treat all client codebases, proprietary API credentials, internal business documents, and AI prompts with strict confidentiality under standard Non-Disclosure Agreement (NDA) principles.
            </p>
            <p>
              Client keys and secrets are never committed to public repositories, and all cloud sandbox credentials provided for integration testing are purged or handed over upon project completion.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#C88A32]">04.</span>
            Third-Party Processors & Infrastructure
          </h2>
          <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] text-sm text-[#4A4740] space-y-3">
            <p>We may use reputable third-party infrastructure providers to host and deliver our web services:</p>
            <ul className="space-y-2 list-disc pl-5 text-xs sm:text-sm">
              <li><strong>Hosting & Edge Delivery:</strong> Cloud Run / Vercel for scalable web asset hosting.</li>
              <li><strong>Form Submissions & Email:</strong> Encrypted webhook relays and transactional email services.</li>
              <li><strong>Analytics:</strong> Minimal privacy-focused analytics adhering to strict cookie-free or anonymized logging.</li>
            </ul>
          </div>
        </div>

        {/* Section 5 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#C88A32]">05.</span>
            Your Rights & Data Inquiries
          </h2>
          <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] text-sm text-[#4A4740] space-y-3">
            <p>
              Under applicable data protection laws, you have the right to request access to the personal data we hold about you, request corrections, or request deletion of your contact history.
            </p>
            <p>
              To exercise any of these rights, please email us directly at{' '}
              <a href="mailto:dhrumi858@gmail.com" className="text-[#C88A32] font-semibold underline hover:text-[#B37926]">
                dhrumi858@gmail.com
              </a>.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
