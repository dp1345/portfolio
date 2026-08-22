import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  Globe, 
  Rocket, 
  Bot, 
  Workflow, 
  Layers,
  Calendar
} from 'lucide-react';

interface NavigationProps {
  onStartBuildClick: () => void;
  onNavigateSection?: (section: string) => void;
  activePage?: 'home' | 'about' | 'services' | 'case-studies' | 'privacy-policy' | 'terms-of-service' | 'cookie-policy';
}

export function Navigation({ onStartBuildClick, onNavigateSection, activePage = 'home' }: NavigationProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Autonomous AI Agents",
      desc: "Multi-agent systems, LangGraph reasoning & tool calling pipelines.",
      icon: Bot,
      color: "#C88A32"
    },
    {
      title: "Voice AI & Audio Systems",
      desc: "Real-time conversational agents & telephony integration with ElevenLabs.",
      icon: Rocket,
      color: "#5F8A68"
    },
    {
      title: "Full-Stack Web Apps & MVPs",
      desc: "High-speed, conversion-focused React & Next.js platforms built to validate fast.",
      icon: Globe,
      color: "#2563EB"
    },
    {
      title: "Automated Workflows (n8n)",
      desc: "Zero-maintenance background pipelines eliminating repetitive manual tasks.",
      icon: Workflow,
      color: "#36C5F0"
    },
    {
      title: "System Integrations & APIs",
      desc: "Connect CRMs, cloud databases, Google Workspace, and third-party APIs.",
      icon: Layers,
      color: "#6D28D9"
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#282620]/8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          id="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            onNavigateSection ? onNavigateSection("home") : window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 text-[#20201D] font-bold text-xl tracking-tight group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-[#C88A32] flex items-center justify-center text-white font-bold text-xs shadow-xs group-hover:scale-105 transition-transform font-mono">
            DP
          </div>
          <span className="text-[18px] font-semibold tracking-tight text-[#20201D]">Dhrumi Patel</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-[450] text-[#3C3B36]">
          {/* Home Link */}
          <a 
            href="#" 
            id="nav-home"
            onClick={(e) => { 
              e.preventDefault(); 
              onNavigateSection ? onNavigateSection("home") : window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }}
            className={`relative py-1.5 transition-colors ${activePage === 'home' ? 'text-[#20201D] font-semibold' : 'hover:text-[#20201D]'}`}
          >
            <span>Home</span>
            {activePage === 'home' && (
              <motion.span 
                layoutId="activeNavLine" 
                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C88A32] rounded-full" 
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </a>

          {/* Services with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button 
              id="nav-services"
              className={`relative flex items-center gap-1.5 py-1.5 transition-colors cursor-pointer font-[450] ${activePage === 'services' ? 'text-[#20201D] font-semibold' : 'hover:text-[#20201D]'}`}
              onClick={() => {
                setServicesOpen(false);
                onNavigateSection && onNavigateSection("services");
              }}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#817E74] transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-[#C88A32]' : ''}`} />
              {activePage === 'services' && (
                <motion.span 
                  layoutId="activeNavLine" 
                  className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C88A32] rounded-full" 
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Dropdown Menu */}
            {servicesOpen && (
              <div className="absolute top-full -left-20 w-[420px] bg-[#FBF8F1] border border-[#DDD6C9] rounded-2xl shadow-[0_20px_50px_rgba(45,40,30,0.12)] p-4 grid grid-cols-1 gap-2.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div 
                  onClick={() => {
                    setServicesOpen(false);
                    onNavigateSection && onNavigateSection("services");
                  }}
                  className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#EDE7DA] text-xs font-bold text-[#1E1D19] hover:bg-[#E5DEC7] transition-colors cursor-pointer"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C88A32]" />
                </div>
                
                {services.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx}
                      onClick={() => {
                        setServicesOpen(false);
                        onNavigateSection && onNavigateSection("services");
                      }}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#EEE8DC]/70 transition-colors cursor-pointer group"
                    >
                      <div className="p-2 rounded-lg bg-[#EEE8DC] group-hover:bg-[#F4EFE6] text-[#20201D] transition-colors">
                        <Icon className="w-4 h-4 text-[#C88A32]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#20201D] group-hover:text-[#C88A32] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-[#62615B] leading-tight mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Case Studies Link */}
          <a 
            href="#case-studies" 
            id="nav-case-studies"
            onClick={(e) => { 
              e.preventDefault(); 
              onNavigateSection && onNavigateSection("case-studies"); 
            }}
            className={`relative py-1.5 transition-colors ${activePage === 'case-studies' ? 'text-[#20201D] font-semibold' : 'hover:text-[#20201D]'}`}
          >
            <span>Case Studies</span>
            {activePage === 'case-studies' && (
              <motion.span 
                layoutId="activeNavLine" 
                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C88A32] rounded-full" 
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </a>
          
          <a 
            href="#about" 
            id="nav-about"
            onClick={(e) => { e.preventDefault(); onNavigateSection && onNavigateSection("about"); }}
            className={`relative py-1.5 transition-colors ${activePage === 'about' ? 'text-[#20201D] font-semibold' : 'hover:text-[#20201D]'}`}
          >
            <span>About</span>
            {activePage === 'about' && (
              <motion.span 
                layoutId="activeNavLine" 
                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C88A32] rounded-full" 
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        </nav>

        {/* Right CTA Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            id="btn-request-quote"
            onClick={onStartBuildClick}
            className="inline-flex items-center gap-1.5 bg-[#EDE7DA] hover:bg-[#E2DBCB] border border-[#DDD6C9] text-[#20201D] font-medium text-xs sm:text-sm px-3.5 py-2 rounded-[10px] transition-all duration-200 cursor-pointer active:scale-95 shadow-2xs"
          >
            <span>Request Quote</span>
          </button>
          <a
            id="btn-book-call"
            href="https://cal.com/developer.-dp-yz3ril/30min?user=developer.-dp-yz3ril"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 bg-[#22211E] hover:bg-[#2C2B27] text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-[10px] transition-all duration-200 shadow-xs cursor-pointer active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C88A32]" />
            <span>Book Call</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle & Buttons */}
        <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
          <button
            id="btn-mobile-request-quote"
            onClick={onStartBuildClick}
            className="min-h-[38px] px-2.5 py-1.5 text-xs bg-[#EDE7DA] border border-[#DDD6C9] text-[#20201D] rounded-lg font-medium cursor-pointer active:scale-95"
          >
            Quote
          </button>
          <a
            id="btn-mobile-book-call"
            href="https://cal.com/developer.-dp-yz3ril/30min?user=developer.-dp-yz3ril"
            target="_blank"
            rel="noreferrer"
            className="min-h-[38px] px-2.5 py-1.5 text-xs bg-[#22211E] text-white rounded-lg font-medium inline-flex items-center gap-1 cursor-pointer active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C88A32]" />
            <span>Book Call</span>
          </a>
          <button
            id="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[40px] min-h-[40px] p-2 text-[#20201D] hover:bg-[#EEE8DC] rounded-lg transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF8F1] border-b border-[#DDD6C9] px-5 py-5 shadow-xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1 text-left font-medium text-[#20201D]">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigateSection ? onNavigateSection("home") : window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className={`min-h-[44px] flex items-center px-3 py-2 rounded-xl transition-colors ${
                activePage === 'home' ? 'bg-[#EDE7DA] font-bold text-[#C88A32]' : 'hover:bg-[#F4EFE6]'
              }`}
            >
              <span>Home</span>
            </a>
            
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigateSection && onNavigateSection("services");
              }} 
              className={`min-h-[44px] flex items-center justify-between px-3 py-2 rounded-xl transition-colors ${
                activePage === 'services' ? 'bg-[#EDE7DA] font-bold text-[#C88A32]' : 'hover:bg-[#F4EFE6]'
              }`}
            >
              <span>Services</span>
              <span className="text-[11px] font-mono font-normal text-[#817E74]">5 Solutions</span>
            </a>
            
            <a 
              href="#case-studies" 
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigateSection && onNavigateSection("case-studies");
              }} 
              className={`min-h-[44px] flex items-center justify-between px-3 py-2 rounded-xl transition-colors ${
                activePage === 'case-studies' ? 'bg-[#EDE7DA] font-bold text-[#C88A32]' : 'hover:bg-[#F4EFE6]'
              }`}
            >
              <span>Case Studies</span>
              <span className="text-[11px] font-mono font-normal text-[#817E74]">Recent Work</span>
            </a>
            
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigateSection && onNavigateSection("about");
              }} 
              className={`min-h-[44px] flex items-center px-3 py-2 rounded-xl transition-colors ${
                activePage === 'about' ? 'bg-[#EDE7DA] font-bold text-[#C88A32]' : 'hover:bg-[#F4EFE6]'
              }`}
            >
              <span>About & Experience</span>
            </a>
            
            <hr className="border-[#DDD6C9] my-2" />
            
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartBuildClick();
                }}
                className="min-h-[44px] w-full text-center py-3 px-4 rounded-xl bg-[#EDE7DA] hover:bg-[#E2DBCB] border border-[#DDD6C9] font-semibold text-sm text-[#20201D] cursor-pointer active:scale-98 transition-all"
              >
                Request Quote
              </button>
              <a
                href="https://cal.com/developer.-dp-yz3ril/30min?user=developer.-dp-yz3ril"
                target="_blank"
                rel="noreferrer"
                className="min-h-[44px] w-full text-center py-3 px-4 rounded-xl bg-[#22211E] hover:bg-[#2C2B27] text-white font-semibold text-sm inline-flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all"
              >
                <Calendar className="w-4 h-4 text-[#C88A32]" />
                <span>Book 30-Min Strategy Call</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
