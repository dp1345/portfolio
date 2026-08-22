import React from 'react';

// 1. Infosys Springboard Logo (matching uploaded image 1)
export function InfosysSpringboardLogo({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center p-1.5 bg-white rounded-xl shadow-2xs border border-[#DDD6C9] overflow-hidden ${className}`}>
      <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        {/* Infosys in signature Royal Blue */}
        <text 
          x="10" 
          y="48" 
          fill="#007CC3" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="700" 
          fontSize="42" 
          letterSpacing="-1.5"
        >
          Infosys
        </text>

        {/* Springboard with Split Wave (Blue top, Coral-Red bottom) */}
        <g transform="translate(10, 58)">
          <text 
            x="0" 
            y="30" 
            fill="#007CC3" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="800" 
            fontSize="27" 
            letterSpacing="-0.5"
            clipPath="url(#springboard-top-clip)"
          >
            Springboard
          </text>
          <text 
            x="0" 
            y="30" 
            fill="#E8503A" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="800" 
            fontSize="27" 
            letterSpacing="-0.5"
            clipPath="url(#springboard-bottom-clip)"
          >
            Springboard
          </text>

          {/* Distinctive Orange Dot on the 'i' */}
          <circle cx="43" cy="11" r="3.2" fill="#E8503A" />

          {/* Wave Clip Paths */}
          <clipPath id="springboard-top-clip">
            <path d="M -5 0 Q 35 30, 80 14 T 150 18 L 150 -10 L -5 -10 Z" />
          </clipPath>
          <clipPath id="springboard-bottom-clip">
            <path d="M -5 0 Q 35 30, 80 14 T 150 18 L 150 45 L -5 45 Z" />
          </clipPath>
        </g>
      </svg>
    </div>
  );
}

// 2. Notion Infosoft Logo for MERN Stack Intern (matching uploaded Notion Infosoft reference)
export function NotionInfosoftLogo({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center p-1.5 bg-[#2568C8] rounded-xl shadow-2xs overflow-hidden ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        {/* Cobalt Blue Background */}
        <rect width="100" height="100" rx="8" fill="#2568C8" />
        
        {/* Soft Lavender Lower-Left Pillar Section */}
        <rect x="26" y="41" width="18" height="27" fill="#758FCC" />

        {/* Soft Lavender Upper-Right 'i' Dot */}
        <rect x="58" y="24" width="18" height="10" fill="#758FCC" />

        {/* Crisp White 'N' Diagonal Chevron & 'i' Lower Stem Geometry */}
        <path 
          d="M 26 17 L 26 41 L 76 88 L 76 36 L 58 36 L 58 47 Z" 
          fill="#FFFFFF" 
        />
      </svg>
    </div>
  );
}

// 3. Edunet Foundation Logo (matching uploaded image 3)
export function EdunetFoundationLogo({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center p-1.5 bg-white rounded-xl shadow-2xs border border-[#DDD6C9] overflow-hidden ${className}`}>
      <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        {/* 'edune' in deep navy, 't' in crimson red */}
        <g transform="translate(14, 48)">
          <text 
            x="0" 
            y="0" 
            fill="#1B3668" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="700" 
            fontSize="38" 
            letterSpacing="-1"
          >
            edune
          </text>
          <text 
            x="96" 
            y="0" 
            fill="#9E2224" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="700" 
            fontSize="38" 
            letterSpacing="-1"
          >
            t
          </text>
        </g>

        {/* 'foundation' in dark slate/charcoal */}
        <text 
          x="78" 
          y="72" 
          fill="#525B6C" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="500" 
          fontSize="14.5" 
          letterSpacing="0.8"
        >
          foundation
        </text>
      </svg>
    </div>
  );
}

// 4. Mind Mingle Media Logo (matching uploaded image 4)
export function MindMingleMediaLogo({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center p-1.5 bg-white rounded-xl shadow-2xs border border-[#DDD6C9] overflow-hidden ${className}`}>
      <svg viewBox="0 0 160 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        {/* 'Mind Mingle' in vibrant green */}
        <text 
          x="12" 
          y="30" 
          fill="#15803D" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="700" 
          fontSize="22" 
          letterSpacing="-0.5"
        >
          Mind Mingle
        </text>

        {/* Green Orbit Sparkle icon */}
        <circle cx="140" cy="22" r="5" stroke="#15803D" strokeWidth="1.8" fill="none" />
        <ellipse cx="140" cy="22" rx="10" ry="3.5" stroke="#15803D" strokeWidth="1.2" transform="rotate(-30 140 22)" fill="none" />

        {/* 'MEDIA' in bold navy with red play mark in E */}
        <g transform="translate(12, 70)">
          <text 
            x="0" 
            y="0" 
            fill="#14213D" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="900" 
            fontSize="36" 
            letterSpacing="1"
          >
            M
          </text>
          
          {/* Stylized 'E' with green bars & red center triangle */}
          <g transform="translate(32, -30)">
            <rect x="0" y="2" width="6.5" height="28" fill="#14213D" />
            <rect x="6.5" y="2" width="18" height="5.5" fill="#15803D" />
            <rect x="6.5" y="13.5" width="12" height="5" fill="#15803D" />
            <rect x="6.5" y="24.5" width="18" height="5.5" fill="#15803D" />
            <polygon points="12,11 21,16 12,21" fill="#DC2626" />
          </g>

          <text 
            x="64" 
            y="0" 
            fill="#14213D" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="900" 
            fontSize="36" 
            letterSpacing="1"
          >
            DIA
          </text>
        </g>
      </svg>
    </div>
  );
}

// 5. Qiskit IBM Quantum Logo (matching uploaded image 5)
export function QiskitLogo({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center p-1.5 bg-[#1F2128] rounded-xl shadow-2xs overflow-hidden ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        {/* Outer Circular Contour */}
        <circle cx="50" cy="50" r="40" stroke="#FFFFFF" strokeWidth="2.8" />
        
        {/* Latitude Ellipses (Bloch Sphere Rings) */}
        <ellipse cx="50" cy="50" rx="38" ry="12" stroke="#FFFFFF" strokeWidth="2.2" />
        <ellipse cx="50" cy="34" rx="33" ry="8" stroke="#FFFFFF" strokeWidth="2" />
        <ellipse cx="50" cy="66" rx="33" ry="8" stroke="#FFFFFF" strokeWidth="2" />

        {/* Central Quantum State Vector Chord line with nodes */}
        <line x1="33" y1="20" x2="68" y2="78" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        <circle cx="33" cy="20" r="3.5" fill="#FFFFFF" />
        <circle cx="68" cy="78" r="3.5" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

// 6. Freelance Monogram Emblem
export function FreelanceLogo({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center p-1.5 bg-[#171714] text-[#FBF8F1] rounded-xl shadow-2xs border border-[#302F2A] ${className}`}>
      <span className="font-extrabold text-xl tracking-tight text-[#E8DFCF]">
        F
      </span>
    </div>
  );
}
