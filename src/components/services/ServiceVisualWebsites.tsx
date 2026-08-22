import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Smartphone, Monitor, ShieldCheck, Sparkles, Star, AlertCircle } from 'lucide-react';
import plantChairImg from '../../assets/images/editorial_plant_chair_1787373010978.jpg';

interface VisualProps {
  currentStep: number; // 1 to 4
}

export function ServiceVisualWebsites({ currentStep }: VisualProps) {
  return (
    <div className="relative w-full h-auto min-h-[280px] xs:min-h-[320px] sm:min-h-[440px] lg:h-[480px] flex items-center justify-center p-2.5 sm:p-5 overflow-hidden">
      
      {/* Background Decorative Atmosphere */}
      <div className="absolute inset-0 bg-radial from-[#F3EEE3]/80 via-transparent to-transparent pointer-events-none" />

      {/* STATE 1: THE PROBLEM (Cluttered, competing banners, popups, confusion) */}
      {currentStep === 1 && (
        <motion.div 
          key="websites-step-1"
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[560px] bg-white rounded-xl sm:rounded-2xl border border-[#E5DFD3] shadow-[0_12px_35px_rgba(40,35,25,0.08)] p-3.5 sm:p-6 overflow-hidden"
        >
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between pb-2.5 sm:pb-4 border-b border-[#F0EBE1] mb-3 sm:mb-5">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#E58282]" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#E5C182]" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#96D19C]" />
            </div>
            <div className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-[#F5F0E6] text-[10px] sm:text-[11px] text-[#8C877D] font-mono">
              old-cluttered-website.com
            </div>
            <span className="text-[9px] sm:text-[11px] text-[#A66262] font-semibold bg-[#FBEBEB] px-1.5 sm:px-2 py-0.5 rounded">
              High Bounce Rate
            </span>
          </div>

          {/* Cluttered Elements Simulator */}
          <div className="space-y-2 sm:space-y-3">
            {/* Competing banner */}
            <div className="p-2 sm:p-3 bg-[#FFF3D6] border border-[#F4D99B] rounded-lg flex items-center justify-between text-[11px] sm:text-xs text-[#825C12]">
              <span className="font-semibold">⚠️ Limited Flash Sale! Sign up now!</span>
              <span className="text-[10px] underline">Click here</span>
            </div>

            {/* Overcrowded Hero Grid */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              <div className="p-1.5 sm:p-2.5 bg-[#F9F7F2] border border-dashed border-[#D6CEC0] rounded-md text-center">
                <div className="text-[9px] sm:text-[10px] font-bold text-[#8C877D]">Feature #1</div>
                <div className="text-[8px] sm:text-[9px] text-[#B0AAA0] mt-0.5 sm:mt-1 truncate sm:whitespace-normal">Dense unformatted text...</div>
              </div>
              <div className="p-1.5 sm:p-2.5 bg-[#F9F7F2] border border-dashed border-[#D6CEC0] rounded-md text-center">
                <div className="text-[9px] sm:text-[10px] font-bold text-[#8C877D]">Feature #2</div>
                <div className="text-[8px] sm:text-[9px] text-[#B0AAA0] mt-0.5 sm:mt-1 truncate sm:whitespace-normal">Unclear technical jargon...</div>
              </div>
              <div className="p-1.5 sm:p-2.5 bg-[#F9F7F2] border border-dashed border-[#D6CEC0] rounded-md text-center">
                <div className="text-[9px] sm:text-[10px] font-bold text-[#8C877D]">Feature #3</div>
                <div className="text-[8px] sm:text-[9px] text-[#B0AAA0] mt-0.5 sm:mt-1 truncate sm:whitespace-normal">Vague statement...</div>
              </div>
            </div>

            {/* Overlapping Chaotic Popups */}
            <div className="p-2.5 sm:p-4 bg-[#2C2A26] text-white rounded-xl relative shadow-lg flex items-center justify-between">
              <div>
                <div className="text-[11px] sm:text-xs font-semibold">Which button to click?</div>
                <div className="text-[9px] sm:text-[11px] text-[#A8A398]">Conflicting primary actions</div>
              </div>
              <div className="flex gap-1.5 sm:gap-2">
                <button className="text-[9px] sm:text-[10px] bg-[#C98B35] px-2 py-0.5 sm:py-1 rounded">Buy</button>
                <button className="text-[9px] sm:text-[10px] bg-[#6E7860] px-2 py-0.5 sm:py-1 rounded">Book</button>
                <button className="text-[9px] sm:text-[10px] bg-[#8C877D] px-2 py-0.5 sm:py-1 rounded">Demo</button>
              </div>
            </div>

            {/* Warning tag */}
            <div className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 bg-[#FAF4ED] rounded-lg border border-[#E8DEC8] text-[10px] sm:text-xs text-[#7A6D56]">
              <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C98B35] shrink-0" />
              <span>Result: 68% bounce in under 8 seconds without taking action.</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* STATE 2: THE APPROACH (Structure before decoration: 4 clear pillars) */}
      {currentStep === 2 && (
        <motion.div 
          key="websites-step-2"
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[560px] space-y-2 sm:space-y-2.5"
        >
          {[
            { step: "01", title: "Problem Definition", desc: "Acknowledge the pain point in the hero headline immediately.", icon: AlertCircle, color: "#C98B35" },
            { step: "02", title: "Focused Value Proposition", desc: "Showcase the exact solution with crystal-clear positioning.", icon: Sparkles, color: "#59634B" },
            { step: "03", title: "Irrefutable Proof", desc: "Present measurable outcomes and verified case studies.", icon: ShieldCheck, color: "#3B7A57" },
            { step: "04", title: "Decisive Action", desc: "One frictionless primary CTA removing decision fatigue.", icon: ArrowRight, color: "#20201D" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.25 }}
              className="bg-white/90 border border-[#E3DCCE] rounded-xl p-2.5 sm:p-3.5 flex items-center gap-2.5 sm:gap-4 shadow-xs"
            >
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#F5F0E6] flex items-center justify-center font-mono font-bold text-[11px] sm:text-xs text-[#59634B] shrink-0">
                {item.step}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs sm:text-sm font-semibold text-[#20201D]">{item.title}</h4>
                <p className="text-[10px] sm:text-xs text-[#6E6B63] truncate">{item.desc}</p>
              </div>
              <div className="p-1 sm:p-1.5 rounded-full bg-[#F4EFE6] text-[#20201D]">
                <item.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* STATE 3 & 4: THE BUILD & RESULT (High-fidelity Responsive Mockup with Desktop & Mobile preview) */}
      {(currentStep === 3 || currentStep === 4) && (
        <motion.div 
          key="websites-step-3-4"
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: -12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[620px] flex items-center justify-center"
        >
          {/* Main Desktop Mockup (Left/Center) */}
          <div className="w-full sm:w-[410px] md:w-[440px] bg-white rounded-xl sm:rounded-2xl border border-[#DCD5C7] shadow-[0_16px_40px_rgba(40,35,25,0.1)] overflow-hidden transition-all">
            
            {/* Desktop Header */}
            <div className="bg-[#FAF7F2] px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#EBE4D8] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D4CBC0]" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D4CBC0]" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D4CBC0]" />
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-[#7A766E] font-medium">
                <span className="text-[#20201D] font-semibold">Home</span>
                <span>About</span>
                <span>Services</span>
                <span>Contact</span>
              </div>
            </div>

            {/* Desktop Hero Section */}
            <div className="p-3 sm:p-5 bg-gradient-to-br from-[#F6F2EA] to-[#EFEAE0]">
              <div className="grid grid-cols-[58%_42%] gap-2 sm:gap-3 items-center">
                <div>
                  <h3 className="text-xs sm:text-[17px] font-bold text-[#20201D] leading-[1.2] tracking-tight">
                    We build brands that stand out.
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-[#6E6B63] leading-relaxed mt-1 line-clamp-2">
                    Clarity, precision, and purpose for discerning digital ventures.
                  </p>
                  <div className="mt-2 sm:mt-3 inline-flex items-center gap-1 bg-[#20201D] text-white text-[9px] sm:text-[10px] font-medium px-2.5 py-1 sm:py-1.5 rounded-md shadow-xs">
                    <span>Learn More</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </div>

                {/* Plant / Chair Editorial Asset */}
                <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xs border border-white/40 aspect-[4/3]">
                  <img 
                    src={plantChairImg} 
                    alt="Editorial interior" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Desktop What We Do Cards */}
            <div className="p-2.5 sm:p-3.5 bg-white border-t border-[#EBE4D8]">
              <div className="text-[9px] sm:text-[10px] font-bold text-[#20201D] mb-1.5">What we do</div>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-1.5 sm:p-2 bg-[#FBF9F5] border border-[#ECE6DB] rounded-lg">
                    <div className="w-full h-6 sm:h-8 bg-[#EFE9DF] rounded mb-1 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#D6CEC0]" />
                    </div>
                    <div className="w-8 sm:w-12 h-1 sm:h-1.5 bg-[#CCC4B6] rounded-full mb-0.5" />
                    <div className="w-6 sm:w-8 h-1 bg-[#E4DDD2] rounded-full" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Mobile Preview Mockup (Floating on Right - hidden on very small screens, visible from sm) */}
          <motion.div 
            initial={{ opacity: 0, x: 30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="hidden md:block absolute -right-2 top-6 w-[145px] bg-white rounded-[20px] border-[3px] border-[#2C2A26] shadow-[0_20px_45px_rgba(20,18,15,0.22)] overflow-hidden z-20"
          >
            {/* Mobile Status Bar */}
            <div className="bg-[#FAF7F2] px-3 py-1 border-b border-[#ECE6DB] flex items-center justify-between">
              <div className="w-5 h-1 bg-[#D6CEC0] rounded-full" />
              <div className="flex gap-0.5">
                <div className="w-1 h-1 bg-[#8C877D] rounded-full" />
                <div className="w-1 h-1 bg-[#8C877D] rounded-full" />
              </div>
            </div>

            {/* Mobile Content */}
            <div className="p-2.5 bg-gradient-to-b from-[#F6F2EA] to-white">
              <div className="text-[10px] font-bold text-[#20201D] leading-tight mb-1">
                We build brands that stand out.
              </div>
              <div className="w-full h-12 rounded-lg overflow-hidden my-1.5 border border-white/50">
                <img 
                  src={plantChairImg} 
                  alt="" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button className="w-full text-[8px] font-semibold bg-[#20201D] text-white py-1 rounded shadow-xs">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Step 4 Result Badge */}
          {currentStep === 4 && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-2 left-2 sm:left-4 bg-[#20201D] text-white px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold z-30 border border-[#C98B35]/40"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#59D174] animate-pulse" />
              <span>Conversion Ready • 99.8 Score</span>
            </motion.div>
          )}

        </motion.div>
      )}

    </div>
  );
}
