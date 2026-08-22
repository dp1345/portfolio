import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'motion/react';
import portraitImg from '../assets/images/hero_girl_ref_look_1787370690935.jpg';

export function ParallaxHeroPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll progress across the hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth interpolation using spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // LAYER 1 — BACKGROUND (0.15x scroll speed)
  // Moves vertically at ~0.15x speed (0px -> 45px over the hero scroll range)
  const bgY = useTransform(smoothProgress, [0, 1], [0, 45]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.05]);

  // LAYER 2 — BOTANICAL ELEMENTS (0.25x scroll speed)
  // Moves vertically ~75px, slight horizontal drift ~8px
  const botanicalY = useTransform(smoothProgress, [0, 1], [0, 75]);
  const botanicalX = useTransform(smoothProgress, [0, 1], [0, -12]);
  const botanicalRotate = useTransform(smoothProgress, [0, 1], [0, -3]);

  // LAYER 3 — PORTRAIT (0.45x scroll speed)
  // Moves vertically ~130px, subtle scale 1.00 -> 1.04
  const portraitY = useTransform(smoothProgress, [0, 1], [0, 130]);
  const portraitScale = useTransform(smoothProgress, [0, 1], [1.0, 1.04]);

  // LAYER 4 — HANDWRITTEN QUOTE (0.55x scroll speed)
  // Moves vertically ~165px, slight drift ~6px
  const quoteY = useTransform(smoothProgress, [0, 1], [0, 165]);
  const quoteX = useTransform(smoothProgress, [0, 1], [0, 6]);

  // LAYER 5 — IDENTITY LABEL (0.50x scroll speed)
  // Moves vertically ~150px
  const labelY = useTransform(smoothProgress, [0, 1], [0, 150]);

  return (
    <div 
      ref={containerRef}
      className="relative flex items-center justify-center lg:justify-end w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] overflow-visible select-none"
    >
      {/* ========================================================= */}
      {/* LAYER 1 — BACKGROUND: Soft cream/ivory organic circular aura */}
      {/* ========================================================= */}
      <motion.div 
        style={shouldReduceMotion ? {} : { y: bgY, scale: bgScale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 lg:w-[440px] h-80 sm:h-96 lg:h-[440px] rounded-full bg-gradient-to-tr from-[#E6DCB8]/50 via-[#EFE6D6]/80 to-[#DFD5C0]/60 blur-3xl -z-10 pointer-events-none"
      />

      {/* Decorative Organic Ring for depth */}
      <motion.div 
        style={shouldReduceMotion ? {} : { y: bgY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-88 lg:w-[380px] h-72 sm:h-88 lg:h-[380px] rounded-full border border-[#D5CDBC]/35 -z-10 pointer-events-none"
      />

      {/* ========================================================= */}
      {/* LAYER 2 — BOTANICAL ELEMENTS: Fine botanical line-art & leaves */}
      {/* ========================================================= */}
      <motion.div 
        style={shouldReduceMotion ? {} : { y: botanicalY, x: botanicalX, rotate: botanicalRotate }}
        className="absolute -top-12 -right-4 sm:-right-8 lg:-right-10 w-64 sm:w-72 lg:w-80 h-72 sm:h-80 pointer-events-none opacity-60 -z-5 origin-bottom-left"
      >
        <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Main botanical stem */}
          <path d="M 190 230 Q 160 140 175 60 Q 180 25 168 8" stroke="#637861" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 172 135 Q 135 100 100 75" stroke="#637861" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 176 90 Q 210 65 230 45" stroke="#637861" strokeWidth="1.4" strokeLinecap="round" />
          
          {/* Watercolor Foliage Petals */}
          <path d="M 168 8 C 178 0 192 4 186 24 C 176 40 164 30 168 8 Z" fill="#88A285" opacity="0.65" />
          <path d="M 175 50 C 198 36 212 52 204 70 C 195 82 180 72 175 50 Z" fill="#759172" opacity="0.55" />
          <path d="M 100 75 C 78 60 66 76 76 96 C 88 108 100 96 100 75 Z" fill="#9FB49C" opacity="0.65" />
          <path d="M 136 105 C 118 92 108 106 116 122 C 126 132 136 122 136 105 Z" fill="#ADC2AA" opacity="0.55" />
          <path d="M 230 45 C 242 35 248 48 240 60 C 230 68 222 58 230 45 Z" fill="#9FB49C" opacity="0.6" />

          {/* Delicate secondary branch & buds */}
          <circle cx="168" cy="8" r="2.5" fill="#C88A32" opacity="0.75" />
          <circle cx="100" cy="75" r="2" fill="#C88A32" opacity="0.6" />
          <circle cx="230" cy="45" r="2" fill="#C88A32" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Secondary subtle left-lower botanical accent */}
      <motion.div
        style={shouldReduceMotion ? {} : { y: botanicalY, x: botanicalX }}
        className="absolute -bottom-6 -left-6 sm:-left-10 w-40 h-44 pointer-events-none opacity-40 -z-5"
      >
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M 20 130 Q 50 80 80 40" stroke="#7A8F78" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 80 40 C 95 28 105 38 98 52 C 90 62 80 54 80 40 Z" fill="#9FB49C" opacity="0.6" />
          <path d="M 50 80 C 35 70 28 82 36 94 C 44 102 52 92 50 80 Z" fill="#ADC2AA" opacity="0.55" />
        </svg>
      </motion.div>

      {/* ========================================================= */}
      {/* LAYER 3 — PORTRAIT: Woman floating independently (0.45x)   */}
      {/* ========================================================= */}
      <div className="relative max-w-[340px] sm:max-w-[390px] lg:max-w-[420px] w-full">
        <motion.div 
          style={shouldReduceMotion ? {} : { y: portraitY, scale: portraitScale }}
          className="relative z-10 w-full"
        >
          <div 
            className="w-full h-auto overflow-hidden mix-blend-multiply rounded-3xl"
            style={{
              maskImage: 'radial-gradient(ellipse 85% 85% at 50% 48%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.82) 76%, rgba(0,0,0,0) 96%)',
              WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 48%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.82) 76%, rgba(0,0,0,0) 96%)'
            }}
          >
            <img 
              src={portraitImg} 
              alt="Dhrumi Patel - AI Developer" 
              className="w-full h-auto object-contain block transform scale-100"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* LAYER 4 — HANDWRITTEN QUOTE (0.55x scroll speed)           */}
        {/* Positioned anchored near the upper-right, never overlapping */}
        {/* ========================================================= */}
        <motion.div 
          style={shouldReduceMotion ? {} : { y: quoteY, x: quoteX }}
          className="absolute -top-3 sm:top-2 right-0 sm:-right-6 lg:-right-10 text-right select-none pointer-events-none z-20"
        >
          <div className="font-serif italic text-base sm:text-xl lg:text-2xl text-[#24221E] leading-[1.15] font-medium drop-shadow-xs tracking-tight">
            Better systems.<br />
            A more capable<br />
            tomorrow.
          </div>
          <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-l from-[#C88A32] to-transparent ml-auto mt-1.5 sm:mt-2 rounded-full opacity-90" />
        </motion.div>

        {/* ========================================================= */}
        {/* LAYER 5 — IDENTITY LABEL (0.50x scroll speed)              */}
        {/* Positioned at bottom right of composition                  */}
        {/* ========================================================= */}
        <motion.div 
          style={shouldReduceMotion ? {} : { y: labelY }}
          className="absolute -bottom-2 right-0 sm:bottom-2 sm:-right-4 lg:-right-6 bg-[#FBF8F1]/95 backdrop-blur-md border border-[#DDD6C9] py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-xl shadow-[0_8px_20px_rgba(40,35,25,0.06)] text-left z-30 transition-all"
        >
          <div className="text-xs sm:text-sm font-bold text-[#1E1D19] tracking-tight flex items-center gap-1.5">
            <span>Dhrumi Patel</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C88A32]" />
          </div>
          <div className="text-[10px] sm:text-[11px] font-mono text-[#6E6A60] tracking-wider uppercase mt-0.5">
            AI Developer · Freelance
          </div>
        </motion.div>
      </div>
    </div>
  );
}
