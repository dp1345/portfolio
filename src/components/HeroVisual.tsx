import React, { useState, useRef } from 'react';
import { 
  AIAgentCard, 
  AutomationFlowCard, 
  WebsiteMvpCard, 
  IntegrationsCard, 
  PerformanceCard,
  AIToolsCard,
  DigitalSystemsCard 
} from './SystemCard';

// Using the seamlessly blended woman illustration with reference look
import heroWomanImg from '../assets/images/hero_girl_ref_look_1787370690935.jpg';

interface HeroVisualProps {
  highlightedCapability?: string | null;
  onCardHover?: (id: string | null) => void;
}

export function HeroVisual({ highlightedCapability, onCardHover }: HeroVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Handle gentle mouse parallax on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[460px] xs:min-h-[500px] sm:min-h-[580px] lg:min-h-[660px] flex items-center justify-center select-none overflow-visible py-4 sm:py-0"
    >
      {/* Background Soft Watercolor / Ambient Atmospheric Glow */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out z-0"
        style={{
          transform: `translate(${mouseOffset.x * 3}px, ${mouseOffset.y * 3}px)`
        }}
      >
        <div className="absolute top-[45%] sm:top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] xs:w-[340px] sm:w-[540px] h-[280px] xs:h-[340px] sm:h-[540px] bg-gradient-to-tr from-[#DCE2D8]/50 via-[#EAE3D2]/40 to-transparent rounded-full blur-3xl opacity-75"></div>
        <div className="absolute top-1/4 right-1/4 w-[160px] sm:w-[300px] h-[160px] sm:h-[300px] bg-[#D6A45A]/12 rounded-full blur-2xl"></div>
      </div>

      {/* SVG Connection Lines - Layered BEHIND the girl (z-5) */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-5 hidden md:block" 
        viewBox="0 0 700 660" 
        fill="none"
      >
        {/* Connector 1: Behind girl radiating to AI Agent (Top-Left) */}
        <path 
          d="M 320 250 C 260 190, 220 150, 175 105" 
          stroke="#A8B3A3" 
          strokeWidth="1.6" 
          strokeDasharray="4 4" 
          className="opacity-50"
        />
        <circle cx="175" cy="105" r="3" fill="#667765" />

        {/* Connector 2: Behind girl radiating to Automation Flow (Top-Right) */}
        <path 
          d="M 380 240 C 440 180, 480 130, 525 75" 
          stroke="#A8B3A3" 
          strokeWidth="1.6" 
          strokeDasharray="4 4" 
          className="opacity-50"
        />
        <circle cx="525" cy="75" r="3" fill="#667765" />

        {/* Connector 3: Behind girl radiating to Website + MVP (Mid-Left) */}
        <path 
          d="M 300 300 C 250 310, 210 315, 160 320" 
          stroke="#A8B3A3" 
          strokeWidth="1.6" 
          strokeDasharray="4 4" 
          className="opacity-50"
        />
        <circle cx="160" cy="320" r="3" fill="#667765" />

        {/* Connector 4: Behind girl radiating to Integrations (Mid-Right) */}
        <path 
          d="M 400 300 C 470 310, 510 325, 570 340" 
          stroke="#A8B3A3" 
          strokeWidth="1.6" 
          strokeDasharray="4 4" 
          className="opacity-50"
        />
        <circle cx="570" cy="340" r="3" fill="#667765" />

        {/* Connector 5: Behind girl radiating to AI Tools (Lower-Left) */}
        <path 
          d="M 310 360 C 250 400, 210 440, 165 475" 
          stroke="#A8B3A3" 
          strokeWidth="1.6" 
          strokeDasharray="4 4" 
          className="opacity-50"
        />
        <circle cx="165" cy="475" r="3" fill="#667765" />

        {/* Connector 6: Behind girl radiating to Performance (Bottom-Right) */}
        <path 
          d="M 390 365 C 450 420, 490 460, 545 495" 
          stroke="#A8B3A3" 
          strokeWidth="1.6" 
          strokeDasharray="4 4" 
          className="opacity-50"
        />
        <circle cx="545" cy="495" r="3" fill="#667765" />

        {/* Connector 7: Behind girl radiating to Digital Systems (Bottom-Center) */}
        <path 
          d="M 350 395 C 360 450, 380 495, 400 535" 
          stroke="#A8B3A3" 
          strokeWidth="1.6" 
          strokeDasharray="4 4" 
          className="opacity-50"
        />
        <circle cx="400" cy="535" r="3" fill="#667765" />
      </svg>

      {/* Central Illustration of Woman - Seamlessly Integrated without Rectangular Bounds (z-10) */}
      <div 
        className="relative z-10 w-[270px] xs:w-[320px] sm:w-[400px] lg:w-[460px] pointer-events-none translate-y-2 sm:-translate-y-4 lg:-translate-y-8 transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${mouseOffset.x * 5}px, ${mouseOffset.y * 5}px)`
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Radial & Gradient Edge Masking to dissolve the background into the canvas */}
          <div 
            className="w-full h-auto overflow-visible mix-blend-multiply"
            style={{
              maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.65) 68%, rgba(0,0,0,0) 88%)',
              WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.65) 68%, rgba(0,0,0,0) 88%)'
            }}
          >
            <img 
              src={heroWomanImg} 
              alt="Human problem solver building digital systems on laptop" 
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain block transform scale-100 select-none"
            />
          </div>
        </div>
      </div>

      {/* --- Surrounding Floating Cards on Mobile, Tablet & Desktop (z-20) --- */}

      {/* 1. AI Agent Card (Upper Left - positioned well clear of face) */}
      <div 
        className="absolute -top-2 -left-2 xs:top-0 xs:left-0 sm:-top-2 sm:-left-4 lg:-top-3 lg:-left-6 z-20 animate-float-1 transition-transform duration-500 scale-[0.74] xs:scale-[0.84] sm:scale-100 origin-top-left"
        style={{
          transform: `translate(${mouseOffset.x * -8}px, ${mouseOffset.y * -8}px)`
        }}
      >
        <AIAgentCard 
          isHighlighted={highlightedCapability === 'ai_agents' || highlightedCapability === 'chatbots'} 
          onHover={onCardHover} 
        />
      </div>

      {/* 2. Automation Flow Card (Upper Right) */}
      <div 
        className="absolute -top-3 -right-2 xs:top-0 xs:right-0 sm:-top-10 sm:-right-6 lg:-top-8 lg:-right-8 z-20 animate-float-2 transition-transform duration-500 scale-[0.68] xs:scale-[0.78] sm:scale-100 origin-top-right"
        style={{
          transform: `translate(${mouseOffset.x * -10}px, ${mouseOffset.y * -10}px)`
        }}
      >
        <AutomationFlowCard 
          isHighlighted={highlightedCapability === 'automation'} 
          onHover={onCardHover} 
        />
      </div>

      {/* 3. Website + MVP Card (Middle Left) */}
      <div 
        className="absolute top-[36%] -left-3 xs:top-[34%] xs:-left-2 sm:top-[34%] sm:-left-12 lg:top-[32%] lg:-left-14 z-20 animate-float-3 transition-transform duration-500 scale-[0.72] xs:scale-[0.82] sm:scale-100 origin-left"
        style={{
          transform: `translate(${mouseOffset.x * -7}px, ${mouseOffset.y * -7}px)`
        }}
      >
        <WebsiteMvpCard 
          isHighlighted={highlightedCapability === 'websites' || highlightedCapability === 'mvps'} 
          onHover={onCardHover} 
        />
      </div>

      {/* 4. AI Tools Card (Lower Left) */}
      <div 
        className="absolute top-[68%] -left-2 xs:top-[66%] xs:-left-1 sm:top-[66%] sm:-left-8 lg:top-[65%] lg:-left-10 z-20 animate-float-1 transition-transform duration-500 hidden xs:block scale-[0.70] sm:scale-100 origin-bottom-left"
        style={{
          transform: `translate(${mouseOffset.x * -8}px, ${mouseOffset.y * -8}px)`
        }}
      >
        <AIToolsCard 
          isHighlighted={highlightedCapability === 'ai_agents'} 
          onHover={onCardHover} 
        />
      </div>

      {/* 5. Integrations Card (Middle Right) */}
      <div 
        className="absolute top-[36%] -right-2 xs:top-[34%] xs:-right-1 sm:top-[30%] sm:-right-8 lg:top-[28%] lg:-right-10 z-20 animate-float-1 transition-transform duration-500 scale-[0.74] xs:scale-[0.84] sm:scale-100 origin-right"
        style={{
          transform: `translate(${mouseOffset.x * -9}px, ${mouseOffset.y * -9}px)`
        }}
      >
        <IntegrationsCard 
          isHighlighted={highlightedCapability === 'integrations'} 
          onHover={onCardHover} 
        />
      </div>

      {/* 6. Performance Card (Bottom Right) */}
      <div 
        className="absolute bottom-1 -right-2 xs:bottom-2 xs:right-0 sm:bottom-12 sm:-right-6 lg:bottom-10 lg:-right-8 z-20 animate-float-2 transition-transform duration-500 scale-[0.70] xs:scale-[0.80] sm:scale-100 origin-bottom-right"
        style={{
          transform: `translate(${mouseOffset.x * -11}px, ${mouseOffset.y * -11}px)`
        }}
      >
        <PerformanceCard 
          isHighlighted={highlightedCapability === 'performance'} 
          onHover={onCardHover} 
        />
      </div>

      {/* 7. Digital Systems Card (Bottom Center / Left) */}
      <div 
        className="absolute -bottom-2 left-2 xs:bottom-0 xs:left-6 sm:bottom-2 sm:left-28 lg:bottom-2 lg:left-36 z-20 animate-float-3 transition-transform duration-500 scale-[0.72] xs:scale-[0.82] sm:scale-100 origin-bottom-left"
        style={{
          transform: `translate(${mouseOffset.x * -6}px, ${mouseOffset.y * -6}px)`
        }}
      >
        <DigitalSystemsCard 
          isHighlighted={highlightedCapability === 'digital_systems'} 
          onHover={onCardHover} 
        />
      </div>
    </div>
  );
}
