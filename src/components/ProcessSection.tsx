import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  FileText, 
  Code2, 
  Rocket, 
  TrendingUp, 
  ArrowRight, 
  UserCheck 
} from 'lucide-react';
import { motion, useScroll } from 'motion/react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'UNDERSTAND',
    description: 'Understand the business, problem and desired outcome.',
    icon: <Users className="w-5 h-5 text-[#4E5C49]" />
  },
  {
    number: '02',
    title: 'DEFINE',
    description: 'Determine the simplest useful solution.',
    icon: <FileText className="w-5 h-5 text-[#4E5C49]" />
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'Design, develop and integrate the solution.',
    icon: <Code2 className="w-5 h-5 text-[#4E5C49]" />
  },
  {
    number: '04',
    title: 'LAUNCH',
    description: 'Test and launch in a real environment.',
    icon: <Rocket className="w-5 h-5 text-[#4E5C49]" />
  },
  {
    number: '05',
    title: 'IMPROVE',
    description: 'Iterate based on actual usage and feedback.',
    icon: <TrendingUp className="w-5 h-5 text-[#4E5C49]" />
  }
];

interface ProcessSectionProps {
  onOpenInquiry?: () => void;
}

export function ProcessSection({ onOpenInquiry }: ProcessSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  // Calculate active step threshold dynamically based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // 5 steps: divide scroll progress into 5 segments
      // 0.00 - 0.18 -> Step 0 (01)
      // 0.18 - 0.38 -> Step 1 (02)
      // 0.38 - 0.58 -> Step 2 (03)
      // 0.58 - 0.78 -> Step 3 (04)
      // 0.78 - 1.00 -> Step 4 (05)
      let step = 0;
      if (latest >= 0.75) step = 4;
      else if (latest >= 0.55) step = 3;
      else if (latest >= 0.35) step = 2;
      else if (latest >= 0.15) step = 1;
      else step = 0;

      setActiveStepIndex(step);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section 
      id="how-i-work"
      ref={containerRef}
      className="relative bg-[#F7F3EC] py-24 sm:py-32 px-6 md:px-12 border-t border-[#E3DCCE] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* =================================================== */}
        {/* SECTION HEADER                                      */}
        {/* =================================================== */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <span className="text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-[#C98B35] mb-3 inline-block font-mono">
            HOW I WORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1F1C] tracking-tight leading-[1.15]">
            Start with the problem.<br />
            <span className="text-[#32302A]">Define what matters. Build only what is useful.</span>
          </h2>
        </div>

        {/* =================================================== */}
        {/* 5 PROGRESSIVE PROCESS CARDS WITH CONNECTORS         */}
        {/* =================================================== */}
        <div className="relative mb-16">
          
          {/* TOP ROW: STEPS 01, 02, 03 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 relative">
            {PROCESS_STEPS.slice(0, 3).map((step, idx) => {
              const isRevealed = activeStepIndex >= idx;
              const isActive = activeStepIndex === idx;
              const isBuildCard = step.number === '03';

              return (
                <div key={step.number} className="relative flex items-center">
                  
                  {/* ========================================================= */}
                  {/* EXACT BOTANICAL WATERCOLOR & DOT MATRIX BEHIND BUILD CARD */}
                  {/* ========================================================= */}
                  {isBuildCard && (
                    <div className="absolute -top-32 sm:-top-40 -right-8 sm:-right-14 w-72 sm:w-96 h-80 sm:h-96 pointer-events-none select-none z-0">
                      {/* 4x4 Dot Matrix grid placed to the upper left of the branch */}
                      <div className="absolute left-4 top-8 grid grid-cols-4 gap-2.5 opacity-30">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={`build-dot-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#B5AA9C]" />
                        ))}
                      </div>

                      {/* Soft Watercolor Wash Aura (Organic seamless ambient blending) */}
                      <div className="absolute right-6 top-8 w-52 h-56 rounded-full bg-[#E2EBE0]/50 blur-3xl -z-10" />

                      {/* Seamless High-Fidelity Watercolor Botanical Foliage */}
                      <svg 
                        viewBox="0 0 320 340" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full opacity-90"
                      >
                        <defs>
                          {/* Watercolor Multi-tone Leaf Gradients */}
                          <linearGradient id="leafGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#A4BE9F" stopOpacity="0.88" />
                            <stop offset="45%" stopColor="#87A581" stopOpacity="0.92" />
                            <stop offset="100%" stopColor="#5E7C57" stopOpacity="0.82" />
                          </linearGradient>

                          <linearGradient id="leafGradSoft" x1="10%" y1="100%" x2="90%" y2="0%">
                            <stop offset="0%" stopColor="#BBD2B6" stopOpacity="0.82" />
                            <stop offset="50%" stopColor="#9CB996" stopOpacity="0.88" />
                            <stop offset="100%" stopColor="#75936E" stopOpacity="0.75" />
                          </linearGradient>

                          <linearGradient id="leafGradDeep" x1="0%" y1="50%" x2="100%" y2="50%">
                            <stop offset="0%" stopColor="#71906A" stopOpacity="0.92" />
                            <stop offset="100%" stopColor="#4A6843" stopOpacity="0.85" />
                          </linearGradient>

                          <linearGradient id="leafGradPale" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#D5E4D1" stopOpacity="0.78" />
                            <stop offset="100%" stopColor="#A2BFA0" stopOpacity="0.85" />
                          </linearGradient>

                          <linearGradient id="stemWatercolor" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#5E7756" stopOpacity="0.85" />
                            <stop offset="70%" stopColor="#7B9774" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#9BB494" stopOpacity="0.65" />
                          </linearGradient>
                        </defs>

                        {/* ========================================= */}
                        {/* MAIN BOTANICAL STEMS                      */}
                        {/* ========================================= */}
                        {/* Primary Upright Stem */}
                        <path 
                          d="M 270 330 Q 240 250 250 140 Q 255 70 245 15" 
                          stroke="url(#stemWatercolor)" 
                          strokeWidth="2.4" 
                          strokeLinecap="round" 
                        />
                        {/* Secondary Branch reaching upward-left */}
                        <path 
                          d="M 248 210 Q 210 160 170 120 Q 140 95 100 80" 
                          stroke="url(#stemWatercolor)" 
                          strokeWidth="1.8" 
                          strokeLinecap="round" 
                        />
                        {/* Tertiary Lower Branch arching left */}
                        <path 
                          d="M 260 270 Q 200 240 140 220 Q 80 205 30 185" 
                          stroke="url(#stemWatercolor)" 
                          strokeWidth="1.8" 
                          strokeLinecap="round" 
                        />
                        {/* Small branchlets */}
                        <path d="M 250 140 Q 275 115 300 95" stroke="url(#stemWatercolor)" strokeWidth="1.4" strokeLinecap="round" />
                        <path d="M 252 85 Q 225 65 200 48" stroke="url(#stemWatercolor)" strokeWidth="1.3" strokeLinecap="round" />
                        <path d="M 180 130 Q 195 100 215 75" stroke="url(#stemWatercolor)" strokeWidth="1.3" strokeLinecap="round" />
                        <path d="M 135 220 Q 110 190 85 165" stroke="url(#stemWatercolor)" strokeWidth="1.3" strokeLinecap="round" />
                        <path d="M 190 235 Q 170 210 150 185" stroke="url(#stemWatercolor)" strokeWidth="1.3" strokeLinecap="round" />

                        {/* ========================================= */}
                        {/* TOP TERMINAL LEAVES (Top Right)           */}
                        {/* ========================================= */}
                        <g>
                          {/* Apex Topmost Leaf */}
                          <path d="M 245 15 C 248 2 262 5 260 25 C 255 45 242 35 245 15 Z" fill="url(#leafGradSoft)" />
                          <path d="M 245 15 Q 252 28 255 38" stroke="#4E6847" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

                          {/* Top Right Flanking Leaf */}
                          <path d="M 248 35 C 270 20 288 32 282 50 C 275 62 258 55 248 35 Z" fill="url(#leafGradMain)" />
                          <path d="M 248 35 Q 268 44 278 52" stroke="#3D5636" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

                          {/* Top Left Flanking Leaf */}
                          <path d="M 246 45 C 220 30 205 45 212 65 C 222 75 238 65 246 45 Z" fill="url(#leafGradPale)" />
                          <path d="M 246 45 Q 224 55 214 66" stroke="#4E6847" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

                          {/* Upper Mid Leaf Pair */}
                          <path d="M 250 70 C 278 55 298 70 292 90 C 282 105 262 95 250 70 Z" fill="url(#leafGradDeep)" />
                          <path d="M 250 70 Q 275 80 288 92" stroke="#2F452A" strokeWidth="0.9" strokeLinecap="round" opacity="0.65" />

                          <path d="M 200 48 C 175 35 160 50 170 70 C 182 82 195 70 200 48 Z" fill="url(#leafGradSoft)" />
                          <path d="M 200 48 Q 180 58 172 70" stroke="#4E6847" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
                        </g>

                        {/* ========================================= */}
                        {/* RIGHT LATERAL LEAVES                      */}
                        {/* ========================================= */}
                        <g>
                          <path d="M 300 95 C 318 85 330 98 325 115 C 315 128 300 120 300 95 Z" fill="url(#leafGradMain)" />
                          <path d="M 300 95 Q 315 106 322 118" stroke="#3D5636" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

                          <path d="M 252 110 C 285 95 305 110 298 135 C 285 150 265 140 252 110 Z" fill="url(#leafGradSoft)" />
                          <path d="M 252 110 Q 280 122 294 138" stroke="#4E6847" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />

                          <path d="M 255 160 C 290 150 310 168 302 195 C 288 210 268 195 255 160 Z" fill="url(#leafGradMain)" />
                          <path d="M 255 160 Q 285 178 298 198" stroke="#3D5636" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />

                          <path d="M 265 210 C 295 205 315 225 302 250 C 285 262 272 245 265 210 Z" fill="url(#leafGradDeep)" />
                          <path d="M 265 210 Q 288 230 298 252" stroke="#2F452A" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
                        </g>

                        {/* ========================================= */}
                        {/* MIDDLE SPREADING FOLIAGE (Center)         */}
                        {/* ========================================= */}
                        <g>
                          <path d="M 215 75 C 190 60 175 75 185 98 C 198 110 210 98 215 75 Z" fill="url(#leafGradMain)" />
                          <path d="M 215 75 Q 195 86 186 99" stroke="#3D5636" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

                          <path d="M 170 120 C 145 105 130 120 140 145 C 155 160 168 145 170 120 Z" fill="url(#leafGradPale)" />
                          <path d="M 170 120 Q 150 132 142 148" stroke="#4E6847" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

                          <path d="M 100 80 C 75 65 60 80 70 105 C 85 120 98 105 100 80 Z" fill="url(#leafGradSoft)" />
                          <path d="M 100 80 Q 80 92 72 108" stroke="#4E6847" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

                          <path d="M 210 160 C 185 145 170 162 180 190 C 195 205 208 190 210 160 Z" fill="url(#leafGradDeep)" />
                          <path d="M 210 160 Q 190 176 182 192" stroke="#2F452A" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
                        </g>

                        {/* ========================================= */}
                        {/* LOWER SPREADING ARCH (Extending Left)     */}
                        {/* ========================================= */}
                        <g>
                          <path d="M 150 185 C 125 170 110 185 120 210 C 135 225 148 210 150 185 Z" fill="url(#leafGradMain)" />
                          <path d="M 150 185 Q 130 198 122 212" stroke="#3D5636" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

                          <path d="M 85 165 C 60 150 45 165 55 190 C 70 205 82 190 85 165 Z" fill="url(#leafGradSoft)" />
                          <path d="M 85 165 Q 65 178 58 192" stroke="#4E6847" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

                          <path d="M 140 220 C 112 205 95 222 108 248 C 125 262 138 245 140 220 Z" fill="url(#leafGradDeep)" />
                          <path d="M 140 220 Q 118 235 110 250" stroke="#2F452A" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />

                          <path d="M 80 205 C 55 190 40 205 50 230 C 65 245 78 230 80 205 Z" fill="url(#leafGradMain)" />
                          <path d="M 80 205 Q 60 218 52 232" stroke="#3D5636" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

                          {/* Terminal Lowermost Left Leaf */}
                          <path d="M 30 185 C 10 170 0 185 10 208 C 22 220 32 208 30 185 Z" fill="url(#leafGradPale)" />
                          <path d="M 30 185 Q 18 198 12 210" stroke="#4E6847" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
                        </g>
                      </svg>
                    </div>
                  )}

                  <motion.div
                    id={`process-step-${step.number}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: isRevealed ? 1 : 0.45, 
                      y: isRevealed ? 0 : 10,
                      scale: isActive ? 1.02 : 1
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`w-full bg-[#FCFBF8] rounded-[22px] p-6 sm:p-7 border transition-all duration-300 cursor-pointer select-none flex items-start gap-4 relative z-10 ${
                      isActive 
                        ? 'border-[#C98B35] shadow-[0_12px_32px_rgba(40,35,25,0.08)] bg-white ring-2 ring-[#C98B35]/20' 
                        : isRevealed 
                        ? 'border-[#E3DCCE] shadow-[0_4px_16px_rgba(40,35,25,0.03)] hover:border-[#C5BBAA]'
                        : 'border-[#EAE3D6] opacity-60'
                    }`}
                  >
                    {/* Step Number in Amber */}
                    <div className="text-xl sm:text-2xl font-bold font-mono text-[#C98B35] flex-shrink-0 pt-0.5">
                      {step.number}
                    </div>

                    {/* Circular Icon in Olive/Sage */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isActive ? 'bg-[#E2ECE0] ring-2 ring-[#7F9C75]/40' : 'bg-[#ECE5D8]'
                    }`}>
                      {step.icon}
                    </div>

                    {/* Text Details */}
                    <div className="flex-1 text-left min-w-0">
                      <div className="text-xs sm:text-sm font-bold tracking-wider text-[#1F1F1C] uppercase mb-1">
                        {step.title}
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#65635D] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Horizontal Dotted Connector Arrow between Step 01 -> 02 and 02 -> 03 (Desktop) */}
                  {idx < 2 && (
                    <div className="hidden md:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
                      <div className={`h-0.5 w-6 lg:w-8 border-t-2 border-dotted transition-colors duration-300 ${
                        activeStepIndex > idx ? 'border-[#C98B35]' : 'border-[#D5CDBC]'
                      }`} />
                      <div className={`w-1.5 h-1.5 rounded-full -ml-1 transition-colors duration-300 ${
                        activeStepIndex > idx ? 'bg-[#C98B35]' : 'bg-[#D5CDBC]'
                      }`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dotted Connecting Pipe down from Step 03 to Step 04 */}
          <div className="hidden md:block absolute right-[16%] top-[38%] w-1/3 h-16 pointer-events-none">
            <svg className="w-full h-full" fill="none">
              <path 
                d="M 100% 0 L 100% 30 Q 100% 50 80% 50 L 0% 50" 
                stroke={activeStepIndex >= 3 ? "#C98B35" : "#D5CDBC"} 
                strokeWidth="2" 
                strokeDasharray="4 4" 
                className="transition-colors duration-300"
              />
            </svg>
          </div>

          {/* BOTTOM ROW: STEPS 04 & 05 (Shifted inward for balanced layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto relative md:mt-10">
            {PROCESS_STEPS.slice(3, 5).map((step, sliceIdx) => {
              const idx = sliceIdx + 3;
              const isRevealed = activeStepIndex >= idx;
              const isActive = activeStepIndex === idx;

              return (
                <div key={step.number} className="relative flex items-center">
                  <motion.div
                    id={`process-step-${step.number}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: isRevealed ? 1 : 0.45, 
                      y: isRevealed ? 0 : 10,
                      scale: isActive ? 1.02 : 1
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`w-full bg-[#FCFBF8] rounded-[22px] p-6 sm:p-7 border transition-all duration-300 cursor-pointer select-none flex items-start gap-4 ${
                      isActive 
                        ? 'border-[#C98B35] shadow-[0_12px_32px_rgba(40,35,25,0.08)] bg-white ring-2 ring-[#C98B35]/20' 
                        : isRevealed 
                        ? 'border-[#E3DCCE] shadow-[0_4px_16px_rgba(40,35,25,0.03)] hover:border-[#C5BBAA]'
                        : 'border-[#EAE3D6] opacity-60'
                    }`}
                  >
                    {/* Step Number in Amber */}
                    <div className="text-xl sm:text-2xl font-bold font-mono text-[#C98B35] flex-shrink-0 pt-0.5">
                      {step.number}
                    </div>

                    {/* Circular Icon in Olive/Sage */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isActive ? 'bg-[#E2ECE0] ring-2 ring-[#7F9C75]/40' : 'bg-[#EAEFE8]'
                    }`}>
                      {step.icon}
                    </div>

                    {/* Text Details */}
                    <div className="flex-1 text-left min-w-0">
                      <div className="text-xs sm:text-sm font-bold tracking-wider text-[#1F1F1C] uppercase mb-1">
                        {step.title}
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#65635D] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Horizontal Dotted Connector Arrow between Step 04 -> 05 (Desktop) */}
                  {sliceIdx === 0 && (
                    <div className="hidden md:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
                      <div className={`h-0.5 w-6 lg:w-8 border-t-2 border-dotted transition-colors duration-300 ${
                        activeStepIndex >= 4 ? 'border-[#C98B35]' : 'border-[#D5CDBC]'
                      }`} />
                      <div className={`w-1.5 h-1.5 rounded-full -ml-1 transition-colors duration-300 ${
                        activeStepIndex >= 4 ? 'bg-[#C98B35]' : 'bg-[#D5CDBC]'
                      }`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* =================================================== */}
        {/* BOTTOM CALLOUT BANNER                               */}
        {/* =================================================== */}
        <div className="bg-[#EFE9DE] rounded-3xl p-5 sm:p-6 md:p-7 border border-[#DDD5C5] shadow-xs flex flex-col md:flex-row items-center justify-between gap-5 text-left">
          
          {/* Left Avatar & Value Copy */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E4DDD0] border border-[#D0C6B5] flex items-center justify-center flex-shrink-0 text-[#C98B35]">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-[#1F1F1C] leading-snug">
                A clear process. Practical outcomes.
              </div>
              <div className="text-xs sm:text-sm text-[#65635D] mt-0.5">
                Focused on solving the right problem in the simplest way.
              </div>
            </div>
          </div>

          {/* Right Action CTA Button */}
          <button
            id="talk-about-problem-btn"
            onClick={onOpenInquiry}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#20201D] hover:bg-[#2F2E2A] text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow cursor-pointer active:scale-98 whitespace-nowrap"
          >
            <span>Let&apos;s talk about your problem</span>
            <ArrowRight className="w-4 h-4 text-[#C98B35]" />
          </button>
        </div>

      </div>
    </section>
  );
}
