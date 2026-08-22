import React, { useState } from 'react';
import { Cookie, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface CookiePolicyPageProps {
  onNavigate: (section: string) => void;
  onOpenInquiry: () => void;
}

export function CookiePolicyPage({ onNavigate, onOpenInquiry }: CookiePolicyPageProps) {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [preferencesSaved, setPreferencesSaved] = useState(false);

  const handleSavePreferences = () => {
    setPreferencesSaved(true);
    setTimeout(() => setPreferencesSaved(false), 3000);
  };

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
          <span className="text-[#C88A32] font-semibold">Cookie Policy</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EDE7DA] border border-[#DDD6C9] text-xs font-mono font-semibold uppercase tracking-wider text-[#525048] mb-4">
          <Cookie className="w-3.5 h-3.5 text-[#C88A32]" />
          Transparency & Preferences
        </div>

        <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold tracking-tight text-[#1E1D19] leading-[1.15] mb-4">
          Cookie Policy
        </h1>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-[#7D7970] border-b border-[#DDD6C9] pb-5 sm:pb-6">
          <span>Effective Date: January 15, 2025</span>
          <span className="hidden xs:inline">•</span>
          <span>Version 1.2</span>
        </div>
      </section>

      {/* =================================================== */}
      {/* 2. DOCUMENT CONTENT                                 */}
      {/* =================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 space-y-8 sm:space-y-10">
        
        {/* Intro */}
        <div className="p-5 sm:p-8 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] leading-relaxed text-sm sm:text-base text-[#4A4740] space-y-4">
          <p>
            This Cookie Policy explains what cookies and similar local storage technologies are used on <strong>Dhrumi Patel&apos;s</strong> portfolio and web platforms, why we use them, and how you can manage your preferences.
          </p>
          <p>
            We adhere to a minimalist data philosophy: we do not use intrusive cross-site tracking cookies, third-party advertising pixels, or data brokerage trackers.
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#C88A32]">01.</span>
            What Are Cookies?
          </h2>
          <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] text-sm text-[#4A4740] space-y-3">
            <p>
              Cookies are small text files stored on your computer or mobile device when you visit a website. They help the website remember your preferences, active tabs, and theme configurations, providing a faster and smoother browsing experience.
            </p>
          </div>
        </div>

        {/* Section 2: Interactive Preferences Simulator */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#C88A32]">02.</span>
            Categories of Cookies We Use
          </h2>
          
          <div className="space-y-4">
            
            {/* Essential */}
            <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#1E1D19] text-base">Strictly Essential Cookies</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#EAE3D4] text-[#555046]">REQUIRED</span>
                </div>
                <p className="text-xs sm:text-sm text-[#625E54]">
                  Necessary for website security, page routing, and session state. These cannot be disabled.
                </p>
              </div>
              <div className="text-xs font-mono text-[#7D7970] sm:self-center">
                Always Active
              </div>
            </div>

            {/* Performance */}
            <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#1E1D19] text-base">Performance & Analytics</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#EDE7DA] text-[#686458]">OPTIONAL</span>
                </div>
                <p className="text-xs sm:text-sm text-[#625E54]">
                  Anonymous telemetry to analyze page load speeds, screen resolutions, and error diagnostics.
                </p>
              </div>
              
              <button
                onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer flex-shrink-0 ${
                  analyticsEnabled ? 'bg-[#C88A32]' : 'bg-[#DDD6C9]'
                }`}
              >
                <span 
                  className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                    analyticsEnabled ? 'left-6.5' : 'left-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Save Button */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2.5 rounded-xl bg-[#1E1D19] text-[#F4EFE6] text-xs font-semibold hover:bg-[#333129] transition-colors cursor-pointer"
              >
                Save Preferences
              </button>
              {preferencesSaved && (
                <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Preferences updated
                </span>
              )}
            </div>

          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#C88A32]">03.</span>
            How to Control Cookies in Your Browser
          </h2>
          <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] text-sm text-[#4A4740] space-y-3">
            <p>
              You can configure your web browser settings to block or delete cookies. Please visit your browser&apos;s help documentation for instructions:
            </p>
            <ul className="space-y-1.5 list-disc pl-5 text-xs sm:text-sm text-[#625E54]">
              <li>Google Chrome: Settings → Privacy and Security → Cookies and other site data</li>
              <li>Apple Safari: Preferences → Privacy → Manage Website Data</li>
              <li>Mozilla Firefox: Settings → Privacy & Security → Enhanced Tracking Protection</li>
            </ul>
          </div>
        </div>

        {/* Section 4 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1D19] flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#C88A32]">04.</span>
            Questions & Contact
          </h2>
          <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] text-sm text-[#4A4740] space-y-2">
            <p>
              If you have any questions about our use of cookies, contact us at:
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
