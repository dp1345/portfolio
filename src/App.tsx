import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HeroContent } from './components/HeroContent';
import { HeroVisual } from './components/HeroVisual';
import { ProblemsSection } from './components/ProblemsSection';
import { ServicesStorySection } from './components/services/ServicesStorySection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { CaseStudiesPage } from './components/pages/CaseStudiesPage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/pages/TermsOfServicePage';
import { CookiePolicyPage } from './components/pages/CookiePolicyPage';
import { FooterSection } from './components/FooterSection';
import { ImprovementModal } from './components/ImprovementModal';
import { TechLogosMarquee } from './components/TechLogosMarquee';

type ActivePageType = 'home' | 'about' | 'services' | 'case-studies' | 'privacy-policy' | 'terms-of-service' | 'cookie-policy';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePageType>('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'improve' | 'portfolio' | 'build'>('improve');
  const [hoveredCapability, setHoveredCapability] = useState<string | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Smooth cinematic zoom-out and gentle fade on the hero as user scrolls down towards section 2
  const heroScale = useTransform(heroScrollProgress, [0, 1], [1, 0.90]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.7, 1], [1, 0.9, 0.4]);
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 80]);

  const handleOpenImproveModal = () => {
    setModalMode('improve');
    setModalOpen(true);
  };

  const handleOpenPortfolioModal = () => {
    setModalMode('portfolio');
    setModalOpen(true);
  };

  const handleOpenBuildModal = () => {
    setModalMode('build');
    setModalOpen(true);
  };

  const handleSelectProblem = (problemId: string) => {
    setModalMode('improve');
    setModalOpen(true);
  };

  const handleStartServiceBuild = (serviceId?: string) => {
    setModalMode('build');
    setModalOpen(true);
  };

  const handleNavigate = (section: string) => {
    if (section === 'home') {
      setActivePage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (section === 'about') {
      setActivePage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (section === 'services' || section === 'services-story') {
      setActivePage('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (section === 'case-studies' || section === 'work') {
      setActivePage('case-studies');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (section === 'privacy-policy') {
      setActivePage('privacy-policy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (section === 'terms-of-service') {
      setActivePage('terms-of-service');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (section === 'cookie-policy') {
      setActivePage('cookie-policy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (section === 'how-i-work' || section === 'delivery') {
      if (activePage !== 'home') {
        setActivePage('home');
        setTimeout(() => {
          const el = document.getElementById('how-i-work') || document.getElementById('services-story');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById('how-i-work') || document.getElementById('services-story');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      handleOpenImproveModal();
    }
  };

  const handleCardHover = (cardId: string | null) => {
    if (!cardId) {
      setHoveredCapability(null);
      return;
    }
    if (cardId.includes('ai-agent')) setHoveredCapability('ai_agents');
    else if (cardId.includes('automation')) setHoveredCapability('automation');
    else if (cardId.includes('website')) setHoveredCapability('websites');
    else if (cardId.includes('integrations')) setHoveredCapability('integrations');
    else if (cardId.includes('performance')) setHoveredCapability('performance');
    else if (cardId.includes('digital-systems')) setHoveredCapability('digital_systems');
  };

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#20201D] flex flex-col justify-between selection:bg-[#C88A32]/25 selection:text-[#20201D]">
      
      {/* 1. Header Navigation */}
      <Navigation 
        activePage={activePage}
        onStartBuildClick={handleOpenBuildModal}
        onNavigateSection={handleNavigate}
      />

      {/* Main Page View Routing */}
      {activePage === 'about' ? (
        /* Render About Page */
        <AboutPage 
          onOpenInquiry={handleOpenImproveModal}
          onOpenWork={() => handleNavigate('case-studies')}
        />
      ) : activePage === 'services' ? (
        /* Render Custom Services Page */
        <ServicesPage 
          onOpenInquiry={handleOpenBuildModal}
          onNavigate={handleNavigate}
        />
      ) : activePage === 'case-studies' ? (
        /* Render Custom Case Studies Page */
        <CaseStudiesPage 
          onOpenInquiry={handleOpenImproveModal}
          onNavigate={handleNavigate}
        />
      ) : activePage === 'privacy-policy' ? (
        /* Render Custom Privacy Policy Page */
        <PrivacyPolicyPage 
          onOpenInquiry={handleOpenImproveModal}
          onNavigate={handleNavigate}
        />
      ) : activePage === 'terms-of-service' ? (
        /* Render Custom Terms of Service Page */
        <TermsOfServicePage 
          onOpenInquiry={handleOpenImproveModal}
          onNavigate={handleNavigate}
        />
      ) : activePage === 'cookie-policy' ? (
        /* Render Custom Cookie Policy Page */
        <CookiePolicyPage 
          onOpenInquiry={handleOpenImproveModal}
          onNavigate={handleNavigate}
        />
      ) : (
        /* Render Home Page Experience */
        <>
          {/* 2. Main Hero Section with Scroll Zoom & Transition */}
          <motion.main 
            ref={heroRef}
            style={{
              scale: heroScale,
              opacity: heroOpacity,
              y: heroY,
              transformOrigin: "center 20%"
            }}
            className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full pt-3 sm:pt-4 md:pt-6 lg:pt-8 pb-12 sm:pb-16 md:pb-20 will-change-transform"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[46%_54%] gap-8 lg:gap-12 items-center">
              
              {/* Left Column (Content & Value Prop) */}
              <div className="flex flex-col justify-center">
                <HeroContent 
                  onPrimaryCtaClick={handleOpenImproveModal}
                  onSecondaryCtaClick={handleOpenPortfolioModal}
                  hoveredCapability={hoveredCapability}
                  onCapabilityHover={setHoveredCapability}
                />
              </div>

              {/* Right Column (Illustration + Interconnected System Cards) */}
              <div className="flex items-center justify-center mt-6 lg:mt-0">
                <HeroVisual 
                  highlightedCapability={hoveredCapability}
                  onCardHover={handleCardHover}
                />
              </div>

            </div>
          </motion.main>

          {/* Exact Tech Logos Horizontal Marquee moving smoothly in right direction */}
          <TechLogosMarquee />

          {/* 3. Section 02: What Are You Trying to Improve? */}
          <ProblemsSection onSelectProblem={handleSelectProblem} />

          {/* 4. Section 03: Scroll-Driven Services Story (Services Workflows) */}
          <ServicesStorySection onStartBuild={handleStartServiceBuild} />

          {/* 5. Section 04: Real Projects. Real Results. Case Studies & Client Testimonials */}
          <CaseStudiesSection 
            onOpenWorkModal={handleOpenPortfolioModal}
            onOpenInquiryModal={handleOpenImproveModal}
          />

          {/* 6. Section 05: How I Work - 5 Scroll-Revealed Process Steps */}
          <ProcessSection onOpenInquiry={handleOpenImproveModal} />
        </>
      )}

      {/* 7. Dark Comprehensive Footer Section (Unchanged, flows seamlessly) */}
      <FooterSection 
        onOpenInquiry={handleOpenImproveModal}
        onNavigateSection={handleNavigate}
      />

      {/* 8. Interactive Inquiry / Scope Builder Modal */}
      <ImprovementModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialMode={modalMode}
        whatsappNumber="+91 70161 18861"
      />

    </div>
  );
}
