import React, { useState, useEffect } from 'react';
import { 
  User, 
  Sparkles, 
  Mail, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Send,
  Network,
  Cpu
} from 'lucide-react';
import { 
  SlackIcon, 
  NotionIcon, 
  AirtableIcon, 
  ZapierIcon, 
  ShopifyIcon, 
  MakeIcon,
  OpenClawIcon,
  HermesIcon,
  CodexIcon,
  GeminiIcon,
  ClaudeIcon
} from './BrandIcons';

interface CardWrapperProps {
  id: string;
  className?: string;
  isHighlighted?: boolean;
  onHover?: (id: string | null) => void;
  children: React.ReactNode;
}

export function CardWrapper({ id, className = "", isHighlighted = false, onHover, children }: CardWrapperProps) {
  return (
    <div
      id={id}
      onMouseEnter={() => onHover && onHover(id)}
      onMouseLeave={() => onHover && onHover(null)}
      className={`bg-[#FBF8F1]/95 backdrop-blur-sm border transition-all duration-300 rounded-[18px] shadow-[0_20px_50px_rgba(45,40,30,0.08)] ${
        isHighlighted
          ? 'border-[#C88A32] shadow-[0_20px_50px_rgba(200,138,50,0.2)] scale-[1.03] z-20'
          : 'border-[#DDD6C9] hover:border-[#C88A32]/60 hover:shadow-[0_25px_60px_rgba(45,40,30,0.12)]'
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* 1. AI Agent Card */
export function AIAgentCard({ isHighlighted, onHover }: { isHighlighted?: boolean; onHover?: (id: string | null) => void }) {
  const [messages, setMessages] = useState<string[]>([
    "Hi! I can help qualify leads and book meetings."
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleQuickPrompt = (text: string) => {
    if (isTyping) return;
    setMessages(prev => [...prev, text]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, "Lead qualified! Discovery call scheduled for Tuesday at 2:00 PM."]);
    }, 1100);
  };

  return (
    <CardWrapper id="card-ai-agent" isHighlighted={isHighlighted} onHover={onHover} className="p-4 w-[210px] text-left">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#5F8A68] animate-pulse"></div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F8A68]">AI Agent Online</span>
        </div>
      </div>

      {/* Chat bubble */}
      <div className="space-y-2 mb-2.5">
        <p className="text-[11px] text-[#62615B] leading-snug bg-[#EEE8DC]/60 p-2 rounded-xl">
          {messages[messages.length - 1]}
        </p>

        {isTyping && (
          <div className="flex items-center gap-1 bg-[#EEE8DC]/50 w-12 py-1 px-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#817E74] animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#817E74] animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#817E74] animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
        )}
      </div>

      {/* Quick Interactive Prompt Button */}
      <button 
        onClick={() => handleQuickPrompt("Can you qualify incoming leads?")}
        className="w-full text-[10px] text-[#62615B] hover:text-[#20201D] bg-[#F4EFE6] hover:bg-[#EBE4D5] border border-[#DDD6C9] py-1 px-2 rounded-lg flex items-center justify-between transition-colors group cursor-pointer"
      >
        <span className="truncate">Try: "Qualify incoming lead"</span>
        <Send className="w-3 h-3 text-[#817E74] group-hover:text-[#C88A32] transition-colors" />
      </button>
    </CardWrapper>
  );
}

/* 2. Automation Flow Card */
export function AutomationFlowCard({ isHighlighted, onHover }: { isHighlighted?: boolean; onHover?: (id: string | null) => void }) {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { icon: User, label: "New Lead", dotColor: "#C88A32" },
    { icon: Sparkles, label: "AI Qualify", dotColor: "#667765" },
    { icon: Mail, label: "Send Follow-up", dotColor: "#C88A32" },
    { icon: Calendar, label: "Book Meeting", dotColor: "#5F8A68" }
  ];

  return (
    <CardWrapper id="card-automation" isHighlighted={isHighlighted} onHover={onHover} className="p-4 w-[280px] sm:w-[320px] text-left">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#817E74] block">Automation Flow</span>
        <span className="text-[10px] text-[#5F8A68] font-semibold bg-[#E8EFE9] px-2 py-0.5 rounded-full">Active</span>
      </div>

      {/* Step pipeline */}
      <div className="space-y-1.5">
        <div className="grid grid-cols-4 gap-1.5 items-center">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <div 
                key={idx}
                className={`flex flex-col items-center gap-1 p-1.5 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#22211E] text-white shadow-xs scale-105' 
                    : 'bg-[#EEE8DC]/70 text-[#62615B]'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isActive ? 'bg-[#C88A32] text-white' : 'bg-[#DDD6C9]/60'}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] font-medium leading-tight truncate w-full text-center">
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </CardWrapper>
  );
}

/* 3. Website + MVP Card */
export function WebsiteMvpCard({ isHighlighted, onHover }: { isHighlighted?: boolean; onHover?: (id: string | null) => void }) {
  return (
    <CardWrapper id="card-website-mvp" isHighlighted={isHighlighted} onHover={onHover} className="p-4 w-[190px] text-left">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#817E74] block">Website + MVP</span>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D6A45A]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#BDB6AA]"></span>
        </div>
      </div>

      <div className="space-y-1.5 mb-2.5">
        <div className="h-2 w-full bg-[#EEE8DC] rounded-full"></div>
        <div className="h-2 w-2/3 bg-[#EEE8DC] rounded-full"></div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[10px] text-[#4A4843] font-medium">Validates fast</span>
        <div className="w-5 h-5 rounded-full bg-[#5F8A68] text-white flex items-center justify-center shadow-2xs">
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </CardWrapper>
  );
}

/* 4. Integrations Card */
export function IntegrationsCard({ isHighlighted, onHover }: { isHighlighted?: boolean; onHover?: (id: string | null) => void }) {
  const integrations = [
    { icon: SlackIcon, name: "Slack" },
    { icon: NotionIcon, name: "Notion" },
    { icon: AirtableIcon, name: "Airtable" },
    { icon: ZapierIcon, name: "Zapier" },
    { icon: ShopifyIcon, name: "Shopify" },
    { icon: MakeIcon, name: "Make" },
  ];

  return (
    <CardWrapper id="card-integrations" isHighlighted={isHighlighted} onHover={onHover} className="p-3.5 w-[165px] text-left">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-[#817E74] uppercase tracking-wider">Connect</span>
        <span className="text-[9px] text-[#5F8A68] font-bold">LIVE</span>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {integrations.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              className="bg-[#EEE8DC] hover:bg-[#E5DDCB] border border-[#DDD6C9] p-1.5 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer shadow-2xs"
              title={item.name}
            >
              <Icon className="w-4 h-4" />
            </div>
          );
        })}
      </div>
    </CardWrapper>
  );
}

/* 5. Performance Card - Sleek White Card */
export function PerformanceCard({ isHighlighted, onHover }: { isHighlighted?: boolean; onHover?: (id: string | null) => void }) {
  const metrics = [
    { label: "Leads", value: "1,248", trend: "+24%" },
    { label: "Saved", value: "46 hrs", trend: "+42%" },
    { label: "Convs", value: "892", trend: "+18%" },
    { label: "Flows", value: "156", trend: "+32%" }
  ];

  return (
    <CardWrapper id="card-performance" isHighlighted={isHighlighted} onHover={onHover} className="p-4 w-[210px] text-left">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[11px] font-bold uppercase text-[#817E74] tracking-wider block">Performance</span>
        <span className="flex items-center gap-1 text-[10px] font-semibold text-[#5F8A68] bg-[#E8EFE9] px-1.5 py-0.5 rounded-full">
          <TrendingUp className="w-3 h-3" />
          <span>+28%</span>
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-[#EEE8DC]/55 p-2 rounded-xl border border-[#DDD6C9]/60">
            <div className="text-[16px] font-bold leading-tight text-[#20201D] tracking-tight">{m.value}</div>
            <div className="flex items-center justify-between mt-0.5">
              <span className="text-[9px] text-[#817E74] uppercase tracking-wider font-semibold">{m.label}</span>
              <span className="text-[8.5px] text-[#5F8A68] font-bold">{m.trend}</span>
            </div>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}

/* 6. AI Tools Card */
export function AIToolsCard({ isHighlighted, onHover }: { isHighlighted?: boolean; onHover?: (id: string | null) => void }) {
  const tools = [
    { icon: OpenClawIcon, name: "OpenClaw" },
    { icon: HermesIcon, name: "Hermes" },
    { icon: CodexIcon, name: "Codex" },
    { icon: GeminiIcon, name: "Gemini" },
    { icon: ClaudeIcon, name: "Claude" },
  ];

  return (
    <CardWrapper id="card-ai-tools" isHighlighted={isHighlighted} onHover={onHover} className="p-3.5 w-[220px] text-left">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[#C88A32]" />
          <span className="text-[11px] font-bold uppercase text-[#817E74] tracking-wider">AI Tools</span>
        </div>
        <span className="text-[9px] text-[#5F8A68] font-bold bg-[#E8EFE9] px-1.5 py-0.5 rounded-full">Models</span>
      </div>

      <div className="grid grid-cols-5 gap-1.5 mb-1.5">
        {tools.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-[#EEE8DC] hover:bg-[#E5DDCB] border border-[#DDD6C9] p-1.5 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer shadow-2xs"
              title={item.name}
            >
              <Icon className="w-4 h-4" />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between text-[9px] text-[#62615B] pt-1 border-t border-[#DDD6C9]/60">
        <span className="font-medium truncate">OpenClaw · Hermes · Codex · Gemini · Claude</span>
      </div>
    </CardWrapper>
  );
}

/* 7. Digital Systems Card */
export function DigitalSystemsCard({ isHighlighted, onHover }: { isHighlighted?: boolean; onHover?: (id: string | null) => void }) {
  return (
    <CardWrapper id="card-digital-systems" isHighlighted={isHighlighted} onHover={onHover} className="p-3 w-[220px] text-left">
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C88A32]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#BDB6AA]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#817E74]"></span>
        </div>
        <span className="text-[11px] font-semibold text-[#20201D]">Digital Systems</span>
      </div>

      <div className="flex items-start gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#EEE8DC] border border-[#DDD6C9] flex items-center justify-center shrink-0 mt-0.5">
          <Network className="w-4 h-4 text-[#C88A32]" />
        </div>
        <p className="text-[10.5px] leading-snug text-[#62615B]">
          Connected tools. Automated workflows. Real business impact.
        </p>
      </div>
    </CardWrapper>
  );
}
