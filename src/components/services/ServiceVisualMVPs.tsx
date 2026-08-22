import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Users, DollarSign, Activity, CheckCircle2, Trash2, Zap, ArrowRight, Layers } from 'lucide-react';

interface VisualProps {
  currentStep: number;
}

export function ServiceVisualMVPs({ currentStep }: VisualProps) {
  return (
    <div className="relative w-full h-auto min-h-[280px] xs:min-h-[320px] sm:min-h-[440px] lg:h-[480px] flex items-center justify-center p-2.5 sm:p-5 overflow-hidden">
      
      {/* STATE 1: CORE IDEA & MESSY LIST */}
      {currentStep === 1 && (
        <motion.div 
          key="mvp-step-1"
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -12 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-[540px] bg-white rounded-xl sm:rounded-2xl border border-[#E5DFD3] shadow-[0_12px_35px_rgba(40,35,25,0.08)] p-3.5 sm:p-6"
        >
          <div className="flex items-center justify-between pb-2.5 sm:pb-3.5 border-b border-[#F0EBE1] mb-2.5 sm:mb-4">
            <span className="text-[11px] sm:text-xs font-mono font-semibold text-[#C98B35] uppercase tracking-wider">
              Product Concept Lab
            </span>
            <span className="text-[10px] sm:text-[11px] bg-[#FAF5EC] text-[#8C8474] px-2 sm:px-2.5 py-0.5 rounded-full border border-[#EAE3D5]">
              Brainstorming Phase
            </span>
          </div>

          <div className="space-y-1.5 sm:space-y-2.5">
            {[
              { tag: "Core", text: "Frictionless customer checkout link", priority: "Must have" },
              { tag: "Fluff", text: "AI-avatar personalized greetings", priority: "Distraction" },
              { tag: "Fluff", text: "Custom crypto multi-wallet sync", priority: "Distraction" },
              { tag: "Fluff", text: "Gamified loyalty tiers & tokens", priority: "Distraction" },
              { tag: "Fluff", text: "Social graph follower network", priority: "Distraction" },
            ].map((item, idx) => (
              <div 
                key={idx}
                className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border flex items-center justify-between ${
                  item.priority === 'Must have' 
                    ? 'bg-[#F9F7F2] border-[#C98B35] text-[#20201D] font-medium' 
                    : 'bg-[#FCFAF7] border-[#ECE6DB] text-[#8C877D] opacity-75'
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className={`text-[9px] sm:text-[10px] font-mono uppercase px-1.5 sm:px-2 py-0.5 rounded shrink-0 ${
                    item.priority === 'Must have' ? 'bg-[#C98B35] text-white' : 'bg-[#EAE3D5] text-[#7A7467]'
                  }`}>
                    {item.tag}
                  </span>
                  <span className="text-[11px] sm:text-xs truncate">{item.text}</span>
                </div>
                <span className="text-[9px] sm:text-[10px] italic shrink-0 ml-1">{item.priority}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* STATE 2: CUT THE UNNECESSARY (Filtering 5 -> 1) */}
      {currentStep === 2 && (
        <motion.div 
          key="mvp-step-2"
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -12 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-[540px] space-y-2 sm:space-y-3"
        >
          <div className="text-center mb-1 sm:mb-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold text-[#59634B] uppercase tracking-wider">
              Scoping Filter: Cut to the Core Value
            </span>
          </div>

          <div className="p-3 sm:p-4 bg-white rounded-xl border border-[#E2DBD0] shadow-sm space-y-2 sm:space-y-2.5">
            <div className="flex items-center justify-between text-xs font-bold text-[#20201D] pb-2 border-b border-[#F0EBE1]">
              <span>Feature Funnel</span>
              <span className="text-[#C98B35]">Speed to Market: 14 Days</span>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <div className="p-2 sm:p-2.5 bg-[#FAF8F3] border border-[#E2DBD0] rounded-lg line-through text-[#A6A095] text-[11px] sm:text-xs flex justify-between">
                <span className="truncate">Multi-tier Affiliate MLM System</span>
                <span className="text-[9px] sm:text-[10px] text-[#C45E5E] shrink-0 ml-1">Removed</span>
              </div>
              <div className="p-2 sm:p-2.5 bg-[#FAF8F3] border border-[#E2DBD0] rounded-lg line-through text-[#A6A095] text-[11px] sm:text-xs flex justify-between">
                <span className="truncate">Complex Custom Analytics Engine</span>
                <span className="text-[9px] sm:text-[10px] text-[#C45E5E] shrink-0 ml-1">Postponed v2</span>
              </div>
              <div className="p-2.5 sm:p-3 bg-[#F4EFE6] border-2 border-[#C98B35] rounded-lg text-[#20201D] text-[11px] sm:text-xs font-semibold flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C98B35] shrink-0" />
                  <span className="truncate">CORE MVP: Instant payment & digital delivery</span>
                </div>
                <span className="text-[9px] sm:text-[10px] bg-[#C98B35] text-white px-1.5 sm:px-2 py-0.5 rounded font-mono shrink-0 ml-1">
                  100% FOCUS
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* STATE 3: INTERACTIVE SAAS DASHBOARD */}
      {currentStep === 3 && (
        <motion.div 
          key="mvp-step-3"
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -12 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-[560px] bg-white rounded-xl sm:rounded-2xl border border-[#DDD6C8] shadow-[0_16px_40px_rgba(40,35,25,0.1)] p-3.5 sm:p-5 overflow-hidden"
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between pb-2.5 sm:pb-3.5 border-b border-[#F0EBE1] mb-2.5 sm:mb-4">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#20201D] text-white flex items-center justify-center font-bold text-[11px] sm:text-xs">
                M
              </div>
              <div>
                <div className="text-[11px] sm:text-xs font-bold text-[#20201D]">MVP Production Console</div>
                <div className="text-[9px] sm:text-[10px] text-[#78756E]">Live Customer Testing Build</div>
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] bg-[#F0F7F2] text-[#347A4B] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#D2EADA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#347A4B] animate-pulse" />
              <span>Live Build</span>
            </div>
          </div>

          {/* Metric KPI Cards */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 mb-2.5 sm:mb-4">
            <div className="p-2 sm:p-3 bg-[#FAF8F3] border border-[#EAE3D5] rounded-lg sm:rounded-xl">
              <div className="text-[9px] sm:text-[10px] text-[#7A7467] font-medium">Active Users</div>
              <div className="text-sm sm:text-lg font-bold text-[#20201D] mt-0.5">1,420</div>
              <div className="text-[8px] sm:text-[10px] text-[#347A4B] font-semibold flex items-center gap-0.5 mt-0.5">
                <TrendingUp className="w-2.5 h-2.5" /> +24%
              </div>
            </div>
            <div className="p-2 sm:p-3 bg-[#FAF8F3] border border-[#EAE3D5] rounded-lg sm:rounded-xl">
              <div className="text-[9px] sm:text-[10px] text-[#7A7467] font-medium">Validation MRR</div>
              <div className="text-sm sm:text-lg font-bold text-[#20201D] mt-0.5">$4,850</div>
              <div className="text-[8px] sm:text-[10px] text-[#347A4B] font-semibold flex items-center gap-0.5 mt-0.5">
                <DollarSign className="w-2.5 h-2.5" /> 84 Paid
              </div>
            </div>
            <div className="p-2 sm:p-3 bg-[#FAF8F3] border border-[#EAE3D5] rounded-lg sm:rounded-xl">
              <div className="text-[9px] sm:text-[10px] text-[#7A7467] font-medium">User CSAT</div>
              <div className="text-sm sm:text-lg font-bold text-[#20201D] mt-0.5">94.6%</div>
              <div className="text-[8px] sm:text-[10px] text-[#C98B35] font-semibold mt-0.5">
                Strong PMF
              </div>
            </div>
          </div>

          {/* User Feedback Stream */}
          <div className="p-2 sm:p-3 bg-[#F6F2EA] rounded-lg sm:rounded-xl border border-[#E6DFC4]">
            <div className="text-[9px] sm:text-[10px] font-bold text-[#20201D] uppercase mb-1 sm:mb-1.5">Real User Telemetry</div>
            <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#20201D] bg-white p-1.5 sm:p-2 rounded-lg border border-[#EBE5DA]">
              <span className="truncate">&quot;Solved our checkout drop-off in minutes.&quot;</span>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#78756E] shrink-0 ml-1.5">5m ago</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* STATE 4: VALIDATION DECISION LOOP */}
      {currentStep === 4 && (
        <motion.div 
          key="mvp-step-4"
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -12 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-[560px] bg-white rounded-xl sm:rounded-2xl border border-[#DDD6C8] shadow-[0_16px_40px_rgba(40,35,25,0.1)] p-3.5 sm:p-6"
        >
          <div className="text-[10px] sm:text-xs font-mono font-bold text-[#20201D] uppercase tracking-wider mb-3 sm:mb-4 pb-2 border-b border-[#F0EBE1]">
            Validated Product Lifecycle
          </div>

          <div className="flex items-center justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-[#E4DDD0] -translate-y-1/2 z-0" />

            {[
              { label: "IDEA", sub: "Hypothesis", icon: Zap },
              { label: "MVP", sub: "14-Day", icon: Layers },
              { label: "USERS", sub: "Traffic", icon: Users },
              { label: "FEEDBACK", sub: "Signals", icon: Activity },
              { label: "SCALE", sub: "Proven", icon: CheckCircle2 }
            ].map((node, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-xs ${
                  i === 4 ? 'bg-[#20201D] text-[#C98B35]' : 'bg-[#F4EFE6] text-[#20201D] border border-[#DDD6C8]'
                }`}>
                  <node.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <span className="text-[9px] sm:text-[11px] font-bold text-[#20201D] mt-1 sm:mt-2">{node.label}</span>
                <span className="text-[8px] sm:text-[9px] text-[#7A7467] hidden xs:inline">{node.sub}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 p-2.5 sm:p-3.5 bg-[#FAF7F0] rounded-xl border border-[#EAE3D5] flex items-center justify-between text-xs">
            <div className="text-[11px] sm:text-xs text-[#20201D] truncate mr-2">
              <span className="font-bold">Next Action:</span> Clear validation reached.
            </div>
            <div className="text-[11px] sm:text-xs font-mono text-[#347A4B] font-bold shrink-0">ROI: +340%</div>
          </div>
        </motion.div>
      )}

    </div>
  );
}
