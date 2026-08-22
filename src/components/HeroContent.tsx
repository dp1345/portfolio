import React from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Globe, 
  Rocket, 
  Bot, 
  MessageSquare, 
  Zap, 
  Link as LinkIcon 
} from 'lucide-react';
import { CapabilityItem } from '../types';

interface HeroContentProps {
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick: () => void;
  hoveredCapability: string | null;
  onCapabilityHover: (id: string | null) => void;
}

export function HeroContent({
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  hoveredCapability,
  onCapabilityHover
}: HeroContentProps) {

  const capabilities: CapabilityItem[] = [
    { id: 'websites', label: 'Websites', icon: 'globe', cardTargetId: 'website_mvp' },
    { id: 'mvps', label: 'MVPs', icon: 'rocket', cardTargetId: 'website_mvp' },
    { id: 'ai_agents', label: 'AI Agents', icon: 'bot', cardTargetId: 'ai_agent' },
    { id: 'chatbots', label: 'Chatbots', icon: 'message', cardTargetId: 'ai_agent' },
    { id: 'automation', label: 'Automation', icon: 'zap', cardTargetId: 'automation' },
    { id: 'integrations', label: 'Integrations', icon: 'link', cardTargetId: 'integrations' },
  ];

  const renderIcon = (iconName: string) => {
    const props = { className: "w-4 h-4" };
    switch (iconName) {
      case 'globe': return <Globe {...props} />;
      case 'rocket': return <Rocket {...props} />;
      case 'bot': return <Bot {...props} />;
      case 'message': return <MessageSquare {...props} />;
      case 'zap': return <Zap {...props} />;
      case 'link': return <LinkIcon {...props} />;
      default: return <Globe {...props} />;
    }
  };

  return (
    <div className="flex flex-col items-start text-left justify-center max-w-[580px] lg:pr-4">
      
      {/* 1. Headline */}
      <h1 
        id="hero-headline"
        className="text-left text-[34px] xs:text-[42px] sm:text-[52px] lg:text-[62px] font-[650] leading-[1.05] sm:leading-[0.98] tracking-[-0.03em] sm:tracking-[-0.04em] text-[#20201D] mb-5 sm:mb-6"
      >
        Bring the business problem. Build the <span className="text-[#C88A32]">right solution.</span>
      </h1>

      {/* 3. Supporting Body Copy */}
      <p 
        id="hero-supporting-copy"
        className="text-[#62615B] text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.55] sm:leading-[1.6] max-w-[500px] mb-6 sm:mb-8 font-normal"
      >
        I help small businesses and founders simplify messy processes and build practical digital systems—from websites and MVPs to AI agents, chatbots, automation and integrations.
      </p>

      {/* 4. Action CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
        {/* Primary CTA */}
        <button
          id="btn-primary-improve"
          onClick={onPrimaryCtaClick}
          className="min-h-[48px] bg-[#22211E] hover:bg-[#2C2B27] text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-[10px] text-[15px] sm:text-[16px] font-medium flex items-center justify-center gap-2 group transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-98"
        >
          <span>Tell Me What You're Improving</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
        </button>

        {/* Secondary CTA */}
        <button
          id="btn-secondary-built"
          onClick={onSecondaryCtaClick}
          className="min-h-[48px] border border-[#BDB6AA] hover:border-[#8E897E] text-[#22211E] hover:bg-[#EEE8DC]/40 px-5 sm:px-6 py-3.5 sm:py-4 rounded-[10px] text-[15px] sm:text-[16px] font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-98"
        >
          <span>See What I've Built</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      </div>

      {/* 5. Capabilities Section */}
      <div className="w-full flex flex-col">
        <span className="text-[11px] uppercase tracking-widest text-[#817E74] font-bold mb-2.5 font-mono">
          Capabilities
        </span>
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {capabilities.map((cap) => {
            const isHovered = hoveredCapability === cap.id;
            return (
              <button
                key={cap.id}
                id={`capability-${cap.id}`}
                onMouseEnter={() => onCapabilityHover(cap.id)}
                onMouseLeave={() => onCapabilityHover(null)}
                onClick={() => onCapabilityHover(isHovered ? null : cap.id)}
                className={`min-h-[38px] inline-flex items-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                  isHovered
                    ? 'bg-[#22211E] text-white shadow-xs scale-105 ring-2 ring-[#C88A32]/40'
                    : 'bg-[#EEE8DC]/80 hover:bg-[#E3E7DD] text-[#455347] border border-[#DDD6C9]'
                }`}
              >
                <span className={isHovered ? 'text-[#C88A32]' : 'text-[#667765]'}>
                  {renderIcon(cap.icon)}
                </span>
                <span>{cap.label}</span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
