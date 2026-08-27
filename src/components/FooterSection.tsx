import React from 'react';
import { 
  Send, 
  MapPin, 
  Mail, 
  Globe, 
  Linkedin, 
  Github, 
  ArrowRight, 
  ArrowUp 
} from 'lucide-react';

interface FooterSectionProps {
  onOpenInquiry: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export function FooterSection({ onOpenInquiry, onNavigateSection }: FooterSectionProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (target: string) => {
    if (onNavigateSection) {
      onNavigateSection(target);
      return;
    }
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      id="footer-section"
      className="relative bg-[#0D0D0C] text-[#A6A29A] pt-14 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-6 md:px-12 border-t border-[#1C1B19] overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* =================================================== */}
        {/* TOP CALLOUT BANNER CARD                             */}
        {/* =================================================== */}
        <div className="relative rounded-3xl bg-[#141412] border border-[#2A2722] p-6 sm:p-10 md:p-12 mb-12 sm:mb-16 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          
          {/* Left: Icon & Text */}
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-[#8C6B37]/60 bg-[#1C1B18] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(201,139,53,0.12)]">
              <Send className="w-5 h-5 sm:w-7 sm:h-7 text-[#D99A45] -rotate-12 translate-x-0.5" />
            </div>
            
            <div className="text-left">
              <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                Ready to solve the right problem?
              </h3>
              <p className="text-xs sm:text-base text-[#9E9A90] leading-relaxed max-w-xl">
                Tell me what you&apos;re trying to improve and I&apos;ll help you find the most practical way forward.
              </p>
            </div>
          </div>

          {/* Right: CTA Button */}
          <div className="w-full md:w-auto flex-shrink-0">
            <button
              id="footer-cta-btn"
              onClick={onOpenInquiry}
              className="min-h-[44px] group w-full md:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl border border-[#8C6B37]/80 hover:border-[#D99A45] bg-[#171613] hover:bg-[#201F1B] text-white font-medium text-xs sm:text-base transition-all duration-300 shadow-md hover:shadow-[0_0_24px_rgba(217,154,69,0.18)] cursor-pointer active:scale-98"
            >
              <span>Let&apos;s talk about your project</span>
              <ArrowRight className="w-4 h-4 text-[#D99A45] group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* =================================================== */}
        {/* SUBTLE DIVIDER                                      */}
        {/* =================================================== */}
        <div className="w-full h-px bg-[#1F1E1B] mb-12 sm:mb-16" />

        {/* =================================================== */}
        {/* MAIN NAVIGATION GRID                                */}
        {/* =================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-10 lg:gap-10 mb-14 sm:mb-20 text-left">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#C98B35] shadow-[0_0_10px_rgba(201,139,53,0.5)]" />
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
                Dhrumi Patel
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[#9E9A90] leading-relaxed max-w-xs">
              I build websites, AI systems and automations that solve real business problems and create measurable value.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col space-y-3 pt-2 text-sm text-[#BFBAB0]">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C98B35] flex-shrink-0" />
                <span>Remote · Working worldwide</span>
              </div>
              <a 
                href="https://wa.me/917016118861?text=Hi%20Dhrumi%2C%20I%20would%20like%20to%20discuss%20a%20project%20inquiry." 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-[#25D366] transition-colors duration-200"
              >
                <span className="w-4 h-4 text-[#25D366] flex-shrink-0 flex items-center justify-center font-bold text-xs">💬</span>
                <span>WhatsApp: +91 7016118861</span>
              </a>
              <a 
                href="mailto:dhrumi858@gmail.com" 
                className="flex items-center gap-3 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-[#C98B35] flex-shrink-0" />
                <span>dhrumi858@gmail.com</span>
              </a>
              <a 
                href="https://github.com/dp1345" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 hover:text-white transition-colors duration-200"
              >
                <Globe className="w-4 h-4 text-[#C98B35] flex-shrink-0" />
                <span>github.com/dp1345</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/dhrumi-p-574846279/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#181714] border border-[#2C2A24] flex items-center justify-center text-[#B8B3A8] hover:text-white hover:border-[#8C6B37] hover:bg-[#22201B] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/dp1345"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#181714] border border-[#2C2A24] flex items-center justify-center text-[#B8B3A8] hover:text-white hover:border-[#8C6B37] hover:bg-[#22201B] transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: SERVICES */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold font-mono tracking-[0.14em] uppercase text-[#D99A45] mb-5">
              SERVICES & SOLUTIONS
            </h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: 'Websites', link: 'service-websites' },
                { name: 'MVP (Minimum Viable Product)', link: 'service-mvp' },
                { name: 'AI Agents & Automation', link: 'service-ai-agents-automation' },
                { name: 'Chatbots (24/7 AI)', link: 'chatbots' }
              ].map((item) => (
                <li key={item.name} className="border-b border-[#1C1B18] pb-2.5">
                  <button
                    onClick={() => handleNavClick(item.link)}
                    className="text-[#C2BDAF] hover:text-white transition-colors duration-200 text-left w-full cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: RESOURCES */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold font-mono tracking-[0.14em] uppercase text-[#D99A45] mb-5">
              RESOURCES
            </h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: 'Home', link: 'home' },
                { name: 'How We Work (5 Steps)', link: 'how-we-work' },
                { name: 'Case Studies', link: 'case-studies' },
                { name: 'About & Experience', link: 'about' }
              ].map((item) => (
                <li key={item.name} className="border-b border-[#1C1B18] pb-2.5">
                  <button
                    onClick={() => handleNavClick(item.link)}
                    className="text-[#C2BDAF] hover:text-white transition-colors duration-200 text-left w-full cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* =================================================== */}
        {/* BOTTOM COPYRIGHT & LEGAL BAR                        */}
        {/* =================================================== */}
        <div className="pt-8 border-t border-[#1C1B18] flex flex-col sm:flex-row items-center justify-between gap-5 text-xs sm:text-sm text-[#7D7970] text-center sm:text-left">
          
          {/* Left: Copyright */}
          <div>
            © 2025 Dhrumi Patel. All rights reserved.
          </div>

          {/* Right: Legal Links & Scroll Top */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[#9E9A90] text-xs">
              <button 
                onClick={() => handleNavClick('privacy-policy')} 
                className="hover:text-white transition-colors cursor-pointer py-1"
              >
                Privacy Policy
              </button>
              <span className="text-[#403E38]">•</span>
              <button 
                onClick={() => handleNavClick('terms-of-service')} 
                className="hover:text-white transition-colors cursor-pointer py-1"
              >
                Terms of Service
              </button>
              <span className="text-[#403E38]">•</span>
              <button 
                onClick={() => handleNavClick('cookie-policy')} 
                className="hover:text-white transition-colors cursor-pointer py-1"
              >
                Cookie Policy
              </button>
            </div>

            {/* Scroll to Top Circle Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#383329] bg-[#141412] hover:bg-[#201F1B] hover:border-[#8C6B37] text-[#D99A45] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer active:scale-95 flex-shrink-0"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
