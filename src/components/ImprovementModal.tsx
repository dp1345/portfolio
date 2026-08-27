import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  Globe, 
  Layers,
  Send,
  MessageSquare,
  AlertCircle,
  Clock,
  Mail,
  User,
  Phone
} from 'lucide-react';

interface ImprovementModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'improve' | 'portfolio' | 'build';
  whatsappNumber?: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectDescription?: string;
}

export function ImprovementModal({ 
  isOpen, 
  onClose, 
  initialMode = 'improve',
  whatsappNumber = "+91 7016118861"
}: ImprovementModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ai_automation');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [timeline, setTimeline] = useState('2-4 weeks');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

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

  const getWhatsAppUrl = () => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const message = `*New Project Inquiry / Quote Request* 🚀\n\n` +
      `👤 *Name:* ${fullName || 'Client'}\n` +
      `📧 *Email:* ${email || 'Not provided'}\n` +
      `📞 *Phone / WhatsApp:* ${phone || 'Not provided'}\n` +
      `🛠️ *Service:* ${currentCategoryTitle}\n` +
      `⏱️ *Target Timeline:* ${timeline}\n\n` +
      `📝 *Project Scope / Goals:*\n${projectDescription}\n\n` +
      `---\n_Sent via dhrumi.dev quote request_`;
    
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@company.com)";
    }

    if (!phone.trim()) {
      newErrors.phone = "Please enter your phone or WhatsApp number";
    } else if (phone.replace(/[^0-9]/g, '').length < 7) {
      newErrors.phone = "Please enter a valid contact number (at least 7 digits)";
    }

    if (!projectDescription.trim()) {
      newErrors.projectDescription = "Please provide details about your project or bottleneck";
    } else if (projectDescription.trim().length < 10) {
      newErrors.projectDescription = "Please provide a bit more detail (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: keyof FormErrors) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateForm();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      projectDescription: true
    });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Automatically forward inquiry details to WhatsApp (+91 7016118861)
    const waUrl = getWhatsAppUrl();
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback if popup blocked
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setProjectDescription('');
    setErrors({});
    setTouched({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/45 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FBF8F1] border border-[#DDD6C9] rounded-[24px] shadow-[0_30px_90px_rgba(45,40,30,0.2)] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 border-b border-[#DDD6C9] bg-[#F4EFE6]/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C88A32] animate-pulse"></span>
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-[#20201D]">
                {initialMode === 'portfolio' ? "Recent Systems Built" : "Project Inquiry & Scope Builder"}
              </h3>
              <p className="text-xs text-[#716C60] hidden sm:block">
                Direct consultation and architecture estimate with Dhrumi Patel
              </p>
            </div>
          </div>
          <button 
            onClick={handleResetAndClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-[#817E74] hover:text-[#20201D] hover:bg-[#EEE8DC] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
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
            /* Submission Success State */
            <div className="py-8 sm:py-10 text-center space-y-5">
              <div className="w-16 h-16 bg-[#E8EFE9] text-[#5F8A68] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              
              <div className="space-y-2 max-w-md mx-auto">
                <h4 className="text-2xl font-bold text-[#20201D]">
                  Inquiry Submitted Successfully!
                </h4>
                <p className="text-sm text-[#62615B] leading-relaxed">
                  Thank you, <strong className="text-[#20201D]">{fullName || "there"}</strong>! I have received your inquiry for <strong className="text-[#20201D]">{currentCategoryTitle}</strong>.
                </p>
                <p className="text-xs text-[#716C60] leading-relaxed">
                  I will review your project details and respond to <strong className="text-[#20201D]">{email}</strong> within 24 hours with a recommended solution outline.
                </p>
              </div>

              {/* Inquiry Summary Box */}
              <div className="max-w-md mx-auto bg-[#EDE7DA] border border-[#DDD6C9] rounded-2xl p-4 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-[#DDD6C9]/80 pb-2">
                  <span className="text-[#817E74]">Service:</span>
                  <span className="font-semibold text-[#20201D]">{currentCategoryTitle}</span>
                </div>
                <div className="flex justify-between border-b border-[#DDD6C9]/80 pb-2">
                  <span className="text-[#817E74]">Timeline:</span>
                  <span className="font-semibold text-[#20201D]">{timeline}</span>
                </div>
                <div className="flex justify-between border-b border-[#DDD6C9]/80 pb-2">
                  <span className="text-[#817E74]">Contact:</span>
                  <span className="font-semibold text-[#20201D]">{email} {phone ? `· ${phone}` : ''}</span>
                </div>
                <div className="flex justify-between border-b border-[#DDD6C9]/80 pb-2">
                  <span className="text-[#817E74]">WhatsApp Destination:</span>
                  <span className="font-semibold text-[#128C7E] font-mono">{whatsappNumber}</span>
                </div>
                <div>
                  <span className="text-[#817E74] block mb-1">Scope:</span>
                  <p className="text-[#413F39] italic line-clamp-3 bg-[#FBF8F1] p-2.5 rounded-lg border border-[#DDD6C9]">
                    &quot;{projectDescription}&quot;
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[46px] w-full sm:w-auto flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Open in WhatsApp</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="min-h-[46px] w-full sm:w-auto bg-[#22211E] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#2C2B27] cursor-pointer shadow-sm transition-all"
                >
                  Done & Return
                </button>
              </div>
            </div>
          ) : (
            /* Inquiry Form with Validation */
            <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
              
              {/* 1. Category Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#62615B] uppercase tracking-wider mb-2.5">
                  1. What are you looking to build or automate? *
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
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
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

              {/* 2. Contact Information: Name, Email, Phone */}
              <div>
                <label className="block text-xs font-semibold text-[#62615B] uppercase tracking-wider mb-2">
                  2. Your Contact Information *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-medium text-[#716C60] mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors(prev => ({ ...prev, fullName: undefined }));
                        }}
                        onBlur={() => handleBlur('fullName')}
                        placeholder="Alex Morgan"
                        className={`w-full bg-[#EEE8DC]/60 border rounded-xl px-3 py-2.5 text-sm text-[#20201D] placeholder:text-[#817E74] focus:outline-hidden transition-colors ${
                          errors.fullName && touched.fullName
                            ? 'border-[#C0392B] bg-[#FDF2F0] focus:border-[#C0392B]'
                            : 'border-[#DDD6C9] focus:border-[#C88A32] focus:bg-[#FBF8F1]'
                        }`}
                      />
                      {errors.fullName && touched.fullName && (
                        <div className="flex items-center gap-1 text-[11px] text-[#C0392B] mt-1 font-medium">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-medium text-[#716C60] mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                        }}
                        onBlur={() => handleBlur('email')}
                        placeholder="name@company.com"
                        className={`w-full bg-[#EEE8DC]/60 border rounded-xl px-3 py-2.5 text-sm text-[#20201D] placeholder:text-[#817E74] focus:outline-hidden transition-colors ${
                          errors.email && touched.email
                            ? 'border-[#C0392B] bg-[#FDF2F0] focus:border-[#C0392B]'
                            : 'border-[#DDD6C9] focus:border-[#C88A32] focus:bg-[#FBF8F1]'
                        }`}
                      />
                      {errors.email && touched.email && (
                        <div className="flex items-center gap-1 text-[11px] text-[#C0392B] mt-1 font-medium">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-[11px] font-medium text-[#716C60] mb-1">
                      Phone / WhatsApp *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                        }}
                        onBlur={() => handleBlur('phone')}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full bg-[#EEE8DC]/60 border rounded-xl px-3 py-2.5 text-sm text-[#20201D] placeholder:text-[#817E74] focus:outline-hidden transition-colors ${
                          errors.phone && touched.phone
                            ? 'border-[#C0392B] bg-[#FDF2F0] focus:border-[#C0392B]'
                            : 'border-[#DDD6C9] focus:border-[#C88A32] focus:bg-[#FBF8F1]'
                        }`}
                      />
                      {errors.phone && touched.phone && (
                        <div className="flex items-center gap-1 text-[11px] text-[#C0392B] mt-1 font-medium">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>

              {/* 3. Project Description */}
              <div>
                <label className="block text-xs font-semibold text-[#62615B] uppercase tracking-wider mb-1.5">
                  3. Tell me about the project goals or bottleneck *
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    value={projectDescription}
                    onChange={(e) => {
                      setProjectDescription(e.target.value);
                      if (errors.projectDescription) setErrors(prev => ({ ...prev, projectDescription: undefined }));
                    }}
                    onBlur={() => handleBlur('projectDescription')}
                    placeholder="e.g., We need a high-converting website with an automated AI agent to qualify incoming customer inquiries and sync leads into our CRM..."
                    className={`w-full bg-[#EEE8DC]/60 border rounded-xl p-3 text-sm text-[#20201D] placeholder:text-[#817E74] focus:outline-hidden transition-colors ${
                      errors.projectDescription && touched.projectDescription
                        ? 'border-[#C0392B] bg-[#FDF2F0] focus:border-[#C0392B]'
                        : 'border-[#DDD6C9] focus:border-[#C88A32] focus:bg-[#FBF8F1]'
                    }`}
                  />
                  {errors.projectDescription && touched.projectDescription && (
                    <div className="flex items-center gap-1 text-[11px] text-[#C0392B] mt-1 font-medium">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{errors.projectDescription}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* 4. Target Timeline */}
              <div>
                <label className="block text-xs font-semibold text-[#62615B] uppercase tracking-wider mb-1.5">
                  4. Target Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-[#EEE8DC]/60 border border-[#DDD6C9] rounded-xl p-2.5 text-sm text-[#20201D] focus:outline-hidden focus:border-[#C88A32]"
                >
                  <option value="1-2 weeks">1–2 weeks (Rapid Validation / Fast-Track MVP)</option>
                  <option value="2-4 weeks">2–4 weeks (Standard Sprint & System Build)</option>
                  <option value="1-2 months">1–2 months (Comprehensive Architecture & Multi-Agent)</option>
                  <option value="Flexible">Flexible / Exploring Solutions</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-[48px] w-full bg-[#22211E] hover:bg-[#2C2B27] disabled:opacity-75 text-white font-semibold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C88A32]" />
                      <span>Submit Project Inquiry</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-[#817E74] text-center mt-2.5">
                  Direct reply guaranteed within 24 hours with custom architecture and timeline breakdown.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}


