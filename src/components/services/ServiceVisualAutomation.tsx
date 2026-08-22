import React from 'react';
import { motion } from 'motion/react';
import { Workflow, CheckCircle2, Zap, ArrowRight, ShieldCheck, Clock, Layers, Sparkles } from 'lucide-react';

interface VisualProps {
  currentStep: number;
}

export function ServiceVisualAutomation({ currentStep }: VisualProps) {
  return (
    <div className="relative w-full h-auto min-h-[280px] xs:min-h-[320px] sm:min-h-[440px] lg:h-[480px] flex items-center justify-center p-2.5 sm:p-5 overflow-hidden">
      
      {/* STAGE 1: AUTOMATED MULTI-NODE PIPELINE ENGINE */}
      {currentStep === 1 && (
        <motion.div 
          key="auto-step-1"
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -12 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-[560px] bg-white rounded-xl sm:rounded-2xl border border-[#DDD6C8] shadow-[0_16px_40px_rgba(40,35,25,0.1)] p-3.5 sm:p-6"
        >
          <div className="flex items-center justify-between pb-2.5 sm:pb-3.5 border-b border-[#F0EBE1] mb-2.5 sm:mb-4">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#59634B] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                <Workflow className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#20201D]">Automated Pipeline Engine</div>
                <div className="text-[9px] sm:text-[10px] text-[#78756E]">Stage 1 of 2: Trigger &amp; Dispatch</div>
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] font-mono text-[#347A4B] font-bold bg-[#F0F7F2] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#D2EADA]">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#347A4B] animate-pulse" />
              <span>ACTIVE</span>
            </div>
          </div>

          {/* Workflow Node Graph */}
          <div className="space-y-1.5 sm:space-y-2.5 relative">
            
            {/* Step 1 Node: Trigger */}
            <div className="p-2 sm:p-3 bg-[#FAF8F3] border-l-4 border-l-[#C98B35] border border-[#EAE3D5] rounded-lg sm:rounded-xl flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#FAF0E1] text-[#C98B35] flex items-center justify-center font-mono font-bold text-[11px] sm:text-xs shrink-0">
                  01
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-[#20201D] truncate">TRIGGER: Inbound Lead Event</div>
                  <div className="text-[9px] sm:text-[10px] text-[#7A7467] truncate">Captures form, timeline &amp; budget</div>
                </div>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#347A4B] bg-white px-1.5 sm:px-2 py-0.5 rounded border border-[#EAE3D5] shrink-0 ml-1">0.02s</span>
            </div>

            {/* Connector */}
            <div className="w-0.5 h-1.5 sm:h-2.5 bg-[#C98B35] mx-auto" />

            {/* Step 2 Node: Condition & Enrichment */}
            <div className="p-2 sm:p-3 bg-[#FAF8F3] border-l-4 border-l-[#59634B] border border-[#EAE3D5] rounded-lg sm:rounded-xl flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#EFF4EC] text-[#59634B] flex items-center justify-center font-mono font-bold text-[11px] sm:text-xs shrink-0">
                  02
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-[#20201D] truncate">CONDITION: Lead Validation &amp; Enrichment</div>
                  <div className="text-[9px] sm:text-[10px] text-[#7A7467] truncate">Auto-enriches records &amp; validates email</div>
                </div>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#347A4B] bg-white px-1.5 sm:px-2 py-0.5 rounded border border-[#EAE3D5] shrink-0 ml-1">0.18s</span>
            </div>

            {/* Connector */}
            <div className="w-0.5 h-1.5 sm:h-2.5 bg-[#59634B] mx-auto" />

            {/* Step 3 Node: Multi-Action Dispatches */}
            <div className="p-2 sm:p-3 bg-[#FAF8F3] border-l-4 border-l-[#20201D] border border-[#EAE3D5] rounded-lg sm:rounded-xl flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#20201D] text-white flex items-center justify-center font-mono font-bold text-[11px] sm:text-xs shrink-0">
                  03
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-[#20201D] truncate">ACTION: Multi-Dispatch</div>
                  <div className="text-[9px] sm:text-[10px] text-[#7A7467] truncate">HubSpot Deal · Slack Alert · Welcome Email</div>
                </div>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#347A4B] bg-white px-1.5 sm:px-2 py-0.5 rounded border border-[#EAE3D5] shrink-0 ml-1">0.41s</span>
            </div>

          </div>

          {/* Bottom Summary Bar */}
          <div className="mt-3 sm:mt-4 p-2 sm:p-2.5 bg-[#F4EFE6] rounded-xl border border-[#DDD6C8] flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 sm:gap-2 font-medium text-[#20201D] min-w-0">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#59634B] shrink-0" />
              <span className="text-[10px] sm:text-xs truncate">Execution: 0.61s · Zero manual human entry</span>
            </div>
            <span className="font-mono font-bold text-[10px] sm:text-[11px] text-[#59634B] shrink-0 ml-1">100% ACCURATE</span>
          </div>

        </motion.div>
      )}

      {/* STAGE 2: OPERATIONAL IMPACT & PERFORMANCE RESULT */}
      {currentStep >= 2 && (
        <motion.div 
          key="auto-step-2"
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -12 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-[560px] bg-white rounded-xl sm:rounded-2xl border border-[#DDD6C8] shadow-[0_16px_40px_rgba(40,35,25,0.1)] p-3.5 sm:p-6"
        >
          <div className="flex items-center justify-between pb-2.5 sm:pb-3.5 border-b border-[#F0EBE1] mb-3 sm:mb-4">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#20201D] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C98B35]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#20201D]">Operational Impact</div>
                <div className="text-[9px] sm:text-[10px] text-[#78756E]">Stage 2: Measurable Business Results</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[9px] sm:text-[11px] font-mono text-[#20201D] bg-[#ECE6DB] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-bold">
              <span>OUTCOME</span>
            </div>
          </div>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="p-2.5 sm:p-3.5 bg-[#FAF8F3] border border-[#EAE3D5] rounded-xl">
              <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#8A877F] uppercase tracking-wider mb-0.5 sm:mb-1">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C98B35]" />
                <span>Time Saved</span>
              </div>
              <div className="text-xl sm:text-3xl font-bold text-[#1F1F1C]">18+ hrs</div>
              <div className="text-[10px] sm:text-[11px] text-[#65635D] mt-0.5">Per team member / week</div>
            </div>

            <div className="p-2.5 sm:p-3.5 bg-[#FAF8F3] border border-[#EAE3D5] rounded-xl">
              <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#8A877F] uppercase tracking-wider mb-0.5 sm:mb-1">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#59634B]" />
                <span>Fidelity</span>
              </div>
              <div className="text-xl sm:text-3xl font-bold text-[#1F1F1C]">0 Errors</div>
              <div className="text-[10px] sm:text-[11px] text-[#65635D] mt-0.5">100% data accuracy</div>
            </div>
          </div>

          {/* Connected Tools & Sync Feed */}
          <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8A877F]">
              Live Automated Operations
            </div>
            
            <div className="p-2 sm:p-2.5 bg-[#F8F6F0] rounded-lg border border-[#EAE3D5] flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#347A4B]" />
                <span className="font-semibold text-[#20201D] text-[11px] sm:text-xs">Inbound Lead Triage</span>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] text-[#59634B]">142 executed today</span>
            </div>

            <div className="p-2 sm:p-2.5 bg-[#F8F6F0] rounded-lg border border-[#EAE3D5] flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#347A4B]" />
                <span className="font-semibold text-[#20201D] text-[11px] sm:text-xs">CRM &amp; Slack Sync</span>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] text-[#59634B]">Real-time • 0ms lag</span>
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="p-2.5 sm:p-3 bg-[#EFF4EC] rounded-xl border border-[#D2EADA] flex items-center gap-2 text-[11px] sm:text-xs text-[#20201D]">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#59634B] shrink-0" />
            <span>Eliminated all repetitive copy-paste administrative work completely.</span>
          </div>

        </motion.div>
      )}

    </div>
  );
}

