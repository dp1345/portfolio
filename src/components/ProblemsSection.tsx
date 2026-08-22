import React, { useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import botanicalEdgeImg from '../assets/images/botanical_edge_foliage_1787371536583.jpg';

interface ProblemsSectionProps {
  onSelectProblem?: (problemId: string) => void;
}

export function ProblemsSection({ onSelectProblem }: ProblemsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Track scroll progress of the section entering viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  // Smooth scroll-driven zoom and move transforms
  const containerScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 0.95, 1]);
  const containerY = useTransform(scrollYProgress, [0, 0.5, 1], [90, 35, 0]);
  const containerOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.3, 0.7, 0.95, 1]);

  // Subtle parallax move & zoom for the edge botanical leaves
  const foliageScale = useTransform(scrollYProgress, [0, 1], [0.82, 1.05]);
  const foliageY = useTransform(scrollYProgress, [0, 1], [60, -20]);

  const cards = [
    {
      id: "website",
      iconType: "browser",
      title: "Need a website?",
      description: "Build or improve your digital presence.",
      linkText: "Website",
    },
    {
      id: "mvp",
      iconType: "lightbulb",
      title: "Have an idea?",
      description: "Turn the idea into a focused MVP.",
      linkText: "MVP",
    },
    {
      id: "automation",
      iconType: "gear",
      title: "Too much manual work?",
      description: "Automate repetitive and time-consuming processes.",
      linkText: "Automation",
    },
    {
      id: "chatbot",
      iconType: "chat",
      title: "Customers need answers?",
      description: "Give customers quick answers with a chatbot.",
      linkText: "Chatbot",
    },
    {
      id: "ai-agent",
      iconType: "robot",
      title: "Need AI for a specific task?",
      description: "Build an AI system around a defined workflow.",
      linkText: "AI Agent",
    },
    {
      id: "integrations",
      iconType: "puzzle",
      title: "Tools don't connect?",
      description: "Connect your existing tools and keep data in sync.",
      linkText: "Integrations",
    }
  ];

  const renderIcon = (type: string) => {
    switch (type) {
      case "browser":
        return (
          <svg className="w-8 h-8 text-[#5D684D]" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="6" width="24" height="20" rx="3.5" stroke="currentColor" strokeWidth="2.2" />
            <line x1="4" y1="12" x2="28" y2="12" stroke="currentColor" strokeWidth="2" />
            <circle cx="8.5" cy="9" r="1.2" fill="currentColor" />
            <circle cx="12.5" cy="9" r="1.2" fill="currentColor" />
            <circle cx="16.5" cy="9" r="1.2" fill="currentColor" />
            <line x1="8" y1="17" x2="16" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="21" x2="22" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "lightbulb":
        return (
          <svg className="w-8 h-8 text-[#5D684D]" viewBox="0 0 32 32" fill="none">
            <path 
              d="M16 5C11.58 5 8 8.58 8 13C8 16.03 9.68 18.66 12.18 20.02C12.7 20.31 13 20.86 13 21.45V23C13 23.55 13.45 24 14 24H18C18.55 24 19 23.55 19 23V21.45C19 20.86 19.3 20.31 19.82 20.02C22.32 18.66 24 16.03 24 13C24 8.58 20.42 5 16 5Z" 
              stroke="currentColor" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <path d="M13.5 27H18.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M16 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "gear":
        return (
          <svg className="w-8 h-8 text-[#5D684D]" viewBox="0 0 32 32" fill="none">
            <path 
              d="M16 10.5C12.96 10.5 10.5 12.96 10.5 16C10.5 19.04 12.96 21.5 16 21.5C19.04 21.5 21.5 19.04 21.5 16C21.5 12.96 19.04 10.5 16 10.5Z" 
              stroke="currentColor" 
              strokeWidth="2.2" 
            />
            <path 
              d="M16 4V7M16 25V28M4 16H7M25 16H28M7.5 7.5L9.6 9.6M22.4 22.4L24.5 24.5M7.5 24.5L9.6 22.4M22.4 9.6L24.5 7.5" 
              stroke="currentColor" 
              strokeWidth="2.4" 
              strokeLinecap="round" 
            />
          </svg>
        );
      case "chat":
        return (
          <svg className="w-8 h-8 text-[#5D684D]" viewBox="0 0 32 32" fill="none">
            <path 
              d="M16 6C10.48 6 6 10.03 6 15C6 17.65 7.28 20.02 9.32 21.65C9.72 21.97 9.94 22.47 9.87 22.97L9.36 26.54C9.27 27.18 9.88 27.67 10.46 27.38L14.72 25.25C15.14 25.04 15.62 24.98 16.08 24.99C16.05 24.99 16.03 25 16 25C21.52 25 26 20.97 26 15C26 10.03 21.52 6 16 6Z" 
              stroke="currentColor" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <circle cx="11.5" cy="15" r="1.4" fill="currentColor" />
            <circle cx="16" cy="15" r="1.4" fill="currentColor" />
            <circle cx="20.5" cy="15" r="1.4" fill="currentColor" />
          </svg>
        );
      case "robot":
        return (
          <svg className="w-8 h-8 text-[#5D684D]" viewBox="0 0 32 32" fill="none">
            <rect x="7" y="10" width="18" height="15" rx="4" stroke="currentColor" strokeWidth="2.2" />
            <line x1="16" y1="5" x2="16" y2="10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="16" cy="4.5" r="1.5" fill="currentColor" />
            <circle cx="12" cy="16" r="2" fill="currentColor" />
            <circle cx="20" cy="16" r="2" fill="currentColor" />
            <line x1="11" y1="21" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="4" y1="17.5" x2="7" y2="17.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="25" y1="17.5" x2="28" y2="17.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        );
      case "puzzle":
        return (
          <svg className="w-8 h-8 text-[#5D684D]" viewBox="0 0 32 32" fill="none">
            <path 
              d="M13 7H7C5.9 7 5 7.9 5 9V15C6.66 15 8 16.34 8 18C8 19.66 6.66 21 5 21V27C5 28.1 5.9 29 7 29H13C13 27.34 14.34 26 16 26C17.66 26 19 27.34 19 29H25C26.1 29 27 28.1 27 27V21C25.34 21 24 19.66 24 18C24 16.34 25.34 15 27 15V9C27 7.9 26.1 7 25 7H19C19 8.66 17.66 10 16 10C14.34 10 13 8.66 13 7Z" 
              stroke="currentColor" 
              strokeWidth="2.2" 
              strokeLinejoin="round" 
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="problems"
      className="relative bg-[#F5F0E8] w-full pt-[60px] sm:pt-[90px] pb-[60px] sm:pb-[80px] px-4 sm:px-6 md:px-12 overflow-hidden select-none border-t border-[#E8DFD1]/60"
    >
      {/* --- Subtle Warm Decorative Elements (Far Viewport Edges Only) --- */}

      {/* 1. Left Edge Botanical Watercolor (Emerges partially from outside left viewport) */}
      <motion.div 
        className="absolute top-1/2 -translate-y-1/2 -left-12 sm:-left-8 md:-left-4 lg:-left-2 w-[220px] sm:w-[260px] md:w-[310px] lg:w-[360px] pointer-events-none opacity-45 mix-blend-multiply z-0 select-none"
        style={{
          y: foliageY,
          scale: foliageScale,
          maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0) 90%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0) 90%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
          maskComposite: 'intersect',
          WebkitMaskComposite: 'destination-in'
        }}
      >
        <img 
          src={botanicalEdgeImg} 
          alt="" 
          className="w-full h-auto object-cover max-h-[720px]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* 2. Right Edge Botanical Watercolor (Emerges partially from outside right viewport) */}
      <motion.div 
        className="absolute top-1/2 -translate-y-1/2 -right-12 sm:-right-8 md:-right-4 lg:-right-2 w-[220px] sm:w-[260px] md:w-[310px] lg:w-[360px] pointer-events-none opacity-45 mix-blend-multiply z-0 select-none"
        style={{
          y: foliageY,
          scale: foliageScale,
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0) 90%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0) 90%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
          maskComposite: 'intersect',
          WebkitMaskComposite: 'destination-in'
        }}
      >
        <img 
          src={botanicalEdgeImg} 
          alt="" 
          className="w-full h-auto object-cover max-h-[720px] transform -scale-x-100"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* 3. Dot Grid Pattern (Far Upper Left Margin) */}
      <motion.div 
        style={{ y: foliageY }}
        className="absolute top-28 left-4 md:left-8 lg:left-12 pointer-events-none opacity-35 z-0 grid grid-cols-4 gap-3"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={`dot-left-${i}`} className="w-[3px] h-[3px] rounded-full bg-[#C9964A]"></span>
        ))}
      </motion.div>

      {/* 4. Dot Grid Pattern (Far Mid-Right Margin) */}
      <motion.div 
        style={{ y: foliageY }}
        className="absolute top-52 right-4 md:right-8 lg:right-12 pointer-events-none opacity-35 z-0 grid grid-cols-4 gap-3"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={`dot-right-${i}`} className="w-[3px] h-[3px] rounded-full bg-[#C9964A]"></span>
        ))}
      </motion.div>

      {/* --- Main Section Content (Scroll-driven Zoom & Move) --- */}
      <motion.div 
        style={{
          scale: containerScale,
          y: containerY,
          opacity: containerOpacity
        }}
        className="relative z-10 max-w-[1110px] mx-auto flex flex-col items-center"
      >
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center flex flex-col items-center max-w-[900px]"
        >
          {/* Eyebrow */}
          <span 
            id="problems-eyebrow"
            className="text-[14px] sm:text-[15px] font-semibold tracking-[0.08em] uppercase text-[#B97820] mb-[18px] sm:mb-[22px]"
          >
            WHAT ARE YOU TRYING TO IMPROVE?
          </span>

          {/* Headline */}
          <h2 
            id="problems-headline"
            className="text-[32px] sm:text-[38px] lg:text-[42px] font-[600] leading-[1.15] text-[#20201E] tracking-tight mb-[16px] sm:mb-[18px]"
          >
            Not every business problem needs the same solution.
          </h2>

          {/* Description */}
          <p 
            id="problems-description"
            className="text-[17px] sm:text-[19px] leading-[1.5] text-[#66635D] max-w-[650px]"
          >
            Start with the problem. We&apos;ll determine what makes sense.
          </p>
        </motion.div>

        {/* Cards Grid: 3 cols on desktop, 2 cols on tablet, 1 col on mobile */}
        <div 
          id="problems-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4.5 mt-[38px] w-full"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              id={`problem-card-${card.id}`}
              onClick={() => onSelectProblem && onSelectProblem(card.id)}
              initial={{ opacity: 0, y: 32, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="group bg-[#FBF8F2] border border-[#E3DCCF] hover:border-[#D5C5A9] rounded-[18px] p-5 sm:p-[32px] min-h-[220px] sm:min-h-[278px] flex flex-col justify-between shadow-[0_8px_30px_rgba(70,60,45,0.04)] hover:shadow-[0_14px_40px_rgba(70,60,45,0.09)] transition-colors duration-300 ease-out cursor-pointer text-left focus:outline-hidden focus:ring-2 focus:ring-[#BE7B24]/40 active:scale-[0.98]"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProblem && onSelectProblem(card.id);
                }
              }}
            >
              <div>
                {/* Icon Container (Circle 60px mobile / 76px desktop) */}
                <div className="w-14 h-14 sm:w-[76px] sm:h-[76px] rounded-full bg-[#F0EBE1] flex items-center justify-center mb-4 sm:mb-[22px] transition-transform duration-250 ease-out group-hover:scale-105">
                  {renderIcon(card.iconType)}
                </div>

                {/* Card Title */}
                <h3 className="text-[19px] sm:text-[24px] font-[600] leading-[1.2] text-[#24231F] mb-2 sm:mb-[10px]">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[14px] sm:text-[17px] leading-[1.5] text-[#706D66]">
                  {card.description}
                </p>
              </div>

              {/* Card Link */}
              <div className="mt-4 sm:mt-[22px] flex items-center gap-1.5 text-[15px] sm:text-[16px] font-[500] text-[#BE7B24] group-hover:text-[#9F6317] transition-colors">
                <span className="leading-none tracking-tight">{card.linkText}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Prompt / Scroll Guide */}
        <motion.div 
          id="problems-bottom-prompt"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-[32px] sm:mt-[38px] flex flex-col items-center justify-center gap-1 text-[#BE7B24] cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="text-[14px] sm:text-[15px] font-[500] tracking-wide text-[#706D66]">
            Explore ways we can help
          </span>
          <ChevronDown className="w-4 h-4 text-[#BE7B24] animate-bounce" />
        </motion.div>

      </motion.div>
    </section>
  );
}
