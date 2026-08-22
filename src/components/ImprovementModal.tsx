import React, { useState } from 'react';
import {
  X,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Bot,
  Workflow,
  Globe,
  Layers,
  Send,
  MessageSquare,
  Phone
} from 'lucide-react';

interface ImprovementModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'improve' | 'portfolio' | 'build';
  whatsappNumber?: string;
}

export function ImprovementModal({
  isOpen,
  onClose,
  initialMode = 'improve',
  whatsappNumber = "+91 70161 18861"
}: ImprovementModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ai_automation');
  const [projectDescription, setProjectDescription] = useState('');
  const [email, setEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [timeline, setTimeline] = useState('2-4 weeks');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionType, setSubmissionType] = useState<'email' | 'whatsapp'>('whatsapp');

  if (!isOpen) return null;

  const categories = [
    {
      id: 'websites',
      title: 'Websites & Platforms',
      desc: 'Bespoke high-converting web apps (React/Next.js or Webflow/Framer).',
      icon: Globe
    },
    {
      id: 'mvp',
      title: 'MVP (Minimum Viable Product)',
      desc: 'Ship revenue-ready software with Auth, DB & Stripe in 2–4 weeks.',
      icon: Layers
    },
    {
      id: 'ai_automation',
      title: 'AI Agents & Automation',
      desc: 'Multi-agent reasoning, n8n workflows, tool-calling pipelines.',
      icon: Bot
    },
    {
      id: 'chatbot',
      title: 'Chatbot & Conversational AI',
      desc: '24/7 lead qualification, grounded knowledge RAG & appointment booking.',
      icon: MessageSquare
    }
  ];

  const portfolioHighlights = [
    {
      client: "RK Packers & Movers",
      system: "Website + WhatsApp Automation",
      impact: "Lighthouse SEO 100 · 3/3 Agentic Browsing · Instant Lead Routing",
      stack: "React · TypeScript · WhatsApp Business API · Automated Dispatch"
    },
    {
      client: "T&T Crochet",
      system: "Full-Stack MVP + AI Chatbot",
      impact: "In Development: Custom Concierge Chatbot & E-Commerce Storefront",
      stack: "Full-Stack Web · Custom Chatbot · Product Catalog"
    },
    {
      client: "Khushi Patel (Business Executive)",
      system: "Business Automation with n8n",
      impact: "Workflow Automation · Multi-tool Integration · Operational Efficiency",
      stack: "n8n · Webhooks · Data Pipelines · Process Optimization"
    },
    {
      client: "OpenClaw Integration",
      system: "AI Integration + Channel Setup",
      impact: "OpenClaw Framework · Communication Channel Config · Integration Tests",
      stack: "OpenClaw · API Webhooks · Channel Routing · QA Testing"
    }
  ];

  const currentCategoryTitle = categories.find(c => c.id === selectedCategory)?.title || "Custom Digital System";

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `*New Project Inquiry for Dhrumi Patel*\n\n` +
      `*Service Required:* ${currentCategoryTitle}\n` +
      `*Timeline:* ${timeline}\n` +
      `*Client Email:* ${email || 'Not provided'}\n` +
      (clientPhone ? `*Client Phone/WhatsApp:* ${clientPhone}\n` : '') +
      `\n*Project Goals & Bottlenecks:*\n${projectDescription || 'Looking to discuss requirements and get a recommended architecture.'}\n\n` +
      `_Sent via portfolio inquiry builder_`
    );
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const encodedText = generateWhatsAppMessage();

    const waUrl = cleanNumber
      ? `https://wa.me/${cleanNumber}?text=${encodedText}`
      : `https://api.whatsapp.com/send?text=${encodedText}`;

    window.open(waUrl, '_blank');
    setSubmissionType('whatsapp');
    setIsSubmitted(true);
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmissionType('email');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#FBF8F1] border border-[#DDD6C9] rounded-[24px] shadow-[0_30px_90px_rgba(45,40,30,0.2)] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-[#DDD6C9] bg-[#F4EFE6]/70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C88A32]"></span>
            <h3 className="font-semibold text-base sm:text-lg text-[#20201D]">
              {initialMode === 'portfolio' ? "Recent Systems Built" : "Project Inquiry & Scope Builder"}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-[#817E74] hover:text-[#20201D] hover:bg-[#EEE8DC] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6">
          {initialMode === 'portfolio' ? (
            <div className="space-y-4">
              <p className="text-sm text-[#62615B]">
                Here is a sample of systems deployed for small businesses and founders:
              </p>
              <div className="space-y-3">
                {portfolioHighlights.map((item, idx) => (
                  <div key={idx} className="bg-[#EEE8DC]/60 border border-[#DDD6C9] rounded-2xl p-4 text-left space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#C88A32] uppercase tracking-wider">{item.client}</span>
                      <span className="text-[11px] font-medium text-[#5F8A68] bg-[#E8EFE9] px-2 py-0.5 rounded-full">{item.stack}</span>
                    </div>
                    <h4 className="text-base font-semibold text-[#20201D]">{item.system}</h4>
                    <p className="text-xs text-[#55534E] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5F8A68]" />
                      <span>{item.impact}</span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setSelectedCategory('ai_automation');
                  }}
                  className="bg-[#22211E] text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-[#2C2B27] cursor-pointer"
                >
                  Start Your Custom Build
                </button>
              </div>
            </div>
          ) : isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 bg-[#E8EFE9] text-[#5F8A68] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-[#20201D]">
                {submissionType === 'whatsapp' ? "Opening WhatsApp..." : "Inquiry Received!"}
              </h4>
              <p className="text-sm text-[#62615B] max-w-md mx-auto">
                {submissionType === 'whatsapp' ? (
                  <>
                    Your project details have been formatted for <strong>WhatsApp</strong>. If the WhatsApp window did not open automatically, click the button below to connect directly with Dhrumi.
                  </>
                ) : (
                  <>
                    Thank you! I&apos;ve received your request for <strong>{currentCategoryTitle}</strong>. I&apos;ll review your process and email you back at <strong>{email}</strong> within 24 hours.
                  </>
                )}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                {submissionType === 'whatsapp' && (
                  <button
                    onClick={handleSendToWhatsApp}
                    className="bg-[#25D366] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#20BD5A] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Again</span>
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="bg-[#22211E] text-white text-sm font-medium px-6 py-2.5 rounded-xl hover:bg-[#2C2B27] cursor-pointer"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5 text-left">
              {/* Category Picker */}
              <div>
                <label className="block text-xs font-semibold text-[#62615B] uppercase tracking-wider mb-2.5">
                  1. What are you looking to build or automate?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${isSelected
                          ? 'bg-[#E3E7DD] border-[#5F8A68] shadow-xs ring-1 ring-[#5F8A68]'
                          : 'bg-[#EEE8DC]/60 border-[#DDD6C9] hover:bg-[#EAE2D2]'
                          }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-[#5F8A68]' : 'text-[#817E74]'}`} />
                          <span className="text-xs font-bold text-[#20201D]">{cat.title}</span>
                        </div>
                        <p className="text-[11px] text-[#62615B] leading-tight">{cat.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Description field */}
              <div>
                <label className="block text-xs font-semibold text-[#62615B] uppercase tracking-wider mb-1.5">
                  2. Tell me about the current bottleneck or project scope
                </label>
                <textarea
                  rows={3}
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="e.g., We need a high-converting website and an automated AI agent to qualify customer inquiries and sync leads..."
                  className="w-full bg-[#EEE8DC]/60 border border-[#DDD6C9] rounded-xl p-3 text-sm text-[#20201D] placeholder:text-[#817E74] focus:outline-hidden focus:border-[#C88A32] focus:bg-[#FBF8F1] transition-all"
                />
              </div>

              {/* Timeline & Email / Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#62615B] uppercase tracking-wider mb-1.5">
                    Target Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-[#EEE8DC]/60 border border-[#DDD6C9] rounded-xl p-2.5 text-sm text-[#20201D] focus:outline-hidden focus:border-[#C88A32]"
                  >
                    <option value="1-2 weeks">1-2 weeks (Rapid MVP/Automation)</option>
                    <option value="2-4 weeks">2-4 weeks (Standard sprint)</option>
                    <option value="1-2 months">1-2 months (Comprehensive system)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#62615B] uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-[#EEE8DC]/60 border border-[#DDD6C9] rounded-xl p-2.5 text-sm text-[#20201D] placeholder:text-[#817E74] focus:outline-hidden focus:border-[#C88A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#62615B] uppercase tracking-wider mb-1.5">
                    Your Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+43 or +91 or ..."
                    className="w-full bg-[#EEE8DC]/60 border border-[#DDD6C9] rounded-xl p-2.5 text-sm text-[#20201D] placeholder:text-[#817E74] focus:outline-hidden focus:border-[#C88A32]"
                  />
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Direct Submit */}
              <div className="pt-3 space-y-2.5">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="min-h-[48px] w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-[0.99]"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Send Project Inquiry via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <span className="text-[11px] text-[#817E74]">
                    Direct chat with Dhrumi Patel. Instant message formulation.
                  </span>

                  {email && (
                    <button
                      type="button"
                      onClick={handleSubmitEmail}
                      className="text-xs text-[#525048] hover:text-[#20201D] underline font-medium cursor-pointer"
                    >
                      Or submit via email only
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

