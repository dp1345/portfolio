import React from 'react';
import { motion } from 'motion/react';
import { Bot, Terminal, Cpu, CheckCircle2, ArrowRight, Database, Search, Send, Clock, UserCheck } from 'lucide-react';

interface VisualProps {
  currentStep: number;
}

export function ServiceVisualAIAgents({ currentStep }: VisualProps) {
  return (
    <div className="relative w-full h-auto min-h-[280px] xs:min-h-[320px] sm:min-h-[440px] lg:h-[480px] flex items-center justify-center p-2.5 sm:p-5 overflow-hidden">
      
      {/* STATE 1: MANUAL WORKFLOW BOTTLENECK */}
      {currentStep === 1 && (
        <motion.div 
          key="agent-step-1"
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -12 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-[540px] bg-white rounded-xl sm:rounded-2xl border border-[#E5DFD3] shadow-[0_12px_35px_rgba(40,35,25,0.08)] p-3.5 sm:p-6"
        >
          <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#F0EBE1] mb-2.5 sm:mb-4">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#A65B5B] uppercase">
              Manual Triage Bottleneck
            </span>
            <span className="text-[10px] sm:text-[11px] bg-[#FBEFEF] text-[#A65B5B] px-2 sm:px-2.5 py-0.5 rounded font-mono">
              Avg: 4.5 Hours
            </span>
          </div>

          <div className="space-y-2 sm:space-y-2.5">
            {[
              { step: "01", title: "Incoming Customer Request", time: "0m", status: "Received in inbox" },
              { step: "02", title: "Employee Searches 4 Databases", time: "+45m", status: "Manual lookup" },
              { step: "03", title: "Cross-checks Compliance Rules", time: "+120m", status: "High human fatigue" },
              { step: "04", title: "Drafts Response & Updates CRM", time: "+60m", status: "Context switching" }
            ].map((s, i) => (
              <div key={i} className="p-2 sm:p-3 bg-[#FAF8F3] border border-[#EAE3D5] rounded-lg sm:rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-[#ECE6DB] flex items-center justify-center font-mono text-[9px] sm:text-[10px] text-[#7A7467] font-bold shrink-0">
                    {s.step}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] sm:text-xs font-semibold text-[#20201D] truncate">{s.title}</div>
                    <div className="text-[9px] sm:text-[10px] text-[#8C877D] truncate">{s.status}</div>
                  </div>
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-[#A65B5B] font-semibold shrink-0 ml-1.5">{s.time}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* STATE 2: THE DETERMINISTIC AGENT SYSTEM ARCHITECTURE */}
      {currentStep === 2 && (
        <motion.div 
          key="agent-step-2"
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -12 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-[550px] bg-white rounded-xl sm:rounded-2xl border border-[#DDD6C8] shadow-[0_16px_40px_rgba(40,35,25,0.1)] p-3.5 sm:p-6"
        >
          <div className="text-[10px] sm:text-xs font-mono font-bold text-[#59634B] uppercase tracking-wider mb-3 sm:mb-4 pb-2 border-b border-[#F0EBE1]">
            Deterministic Agent Pipeline
          </div>

          <div className="grid grid-cols-5 gap-1 sm:gap-2 items-center text-center">
            {[
              { name: "Input", icon: Search, role: "Structured Ingestion" },
              { name: "Agent", icon: Bot, role: "Reasoning Engine" },
              { name: "Tools", icon: Database, role: "API Connectors" },
              { name: "Guards", icon: UserCheck, role: "Policy Gate" },
              { name: "Action", icon: Send, role: "Validated Out" }
            ].map((node, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shadow-xs ${
                  i === 1 ? 'bg-[#59634B] text-white' : 'bg-[#F4EFE6] text-[#20201D] border border-[#DDD6C8]'
                }`}>
                  <node.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-[9px] sm:text-[11px] font-bold text-[#20201D] mt-1 sm:mt-2">{node.name}</span>
                <span className="text-[7px] sm:text-[8px] text-[#7A7467] leading-tight mt-0.5 hidden xs:block">{node.role}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 p-2.5 sm:p-3 bg-[#F8F5EE] rounded-xl border border-[#EAE3D5] text-[10px] sm:text-xs text-[#59634B] flex items-center justify-between font-mono">
            <span className="truncate mr-2">Deterministic: Strict schema validation</span>
            <span className="font-bold shrink-0">100% AUDITABLE</span>
          </div>
        </motion.div>
      )}

      {/* STATE 3: LIVE AGENT EXECUTION TERMINAL */}
      {currentStep === 3 && (
        <motion.div 
          key="agent-step-3"
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -12 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-[560px] bg-[#1E1E1C] rounded-xl sm:rounded-2xl border border-[#3E3D38] shadow-[0_16px_40px_rgba(20,18,15,0.3)] p-3.5 sm:p-5 text-white font-mono text-xs overflow-hidden"
        >
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-[#33322E] mb-2.5 sm:mb-3 text-[#A8A49A]">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C98B35]" />
              <span className="font-bold text-white text-[10px] sm:text-[11px]">workflow_agent.executor.ts</span>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-[#74D68E]">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#74D68E] animate-pulse" />
              <span>RUNNING</span>
            </div>
          </div>

          {/* Execution Log stream */}
          <div className="space-y-1.5 sm:space-y-2 font-mono text-[10px] sm:text-[11px]">
            <div className="text-[#8E8B83] flex items-center gap-1.5">
              <span className="text-[#C98B35]">›</span> [00:00.12] INGEST: Payload #8924 received
            </div>
            <div className="p-1.5 sm:p-2 bg-[#2A2925] rounded border border-[#3E3D38] text-[#D8D5CD]">
              <span className="text-[#8E8B83]">Agent:</span> Verifying subscription in PostgreSQL...
            </div>
            <div className="text-[#8E8B83] flex items-center gap-1.5">
              <span className="text-[#74D68E]">✓</span> [00:00.38] TOOL: pg_query(user_id=&quot;4918&quot;) → Enterprise
            </div>
            <div className="p-2 sm:p-2.5 bg-[#253023] rounded border border-[#3D5239] text-[#A7E2A2] flex items-center justify-between">
              <span className="truncate">ACTION: Dispatched summary to Slack</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-white bg-[#3D5239] px-1.5 sm:px-2 py-0.5 rounded ml-2 shrink-0">0.98s</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* STATE 4: INTEGRATED AGENT OUTCOME */}
      {currentStep === 4 && (
        <motion.div 
          key="agent-step-4"
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -12 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-[540px] bg-white rounded-xl sm:rounded-2xl border border-[#DDD6C8] shadow-[0_16px_40px_rgba(40,35,25,0.1)] p-3.5 sm:p-6"
        >
          <div className="flex items-center justify-between pb-2.5 sm:pb-3.5 border-b border-[#F0EBE1] mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-[#59634B]" />
              <span className="text-[11px] sm:text-xs font-bold text-[#20201D]">Autonomous Production Impact</span>
            </div>
            <span className="text-[10px] sm:text-xs font-mono text-[#347A4B] font-bold">Latency: &lt;1.2s</span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="p-2.5 sm:p-3.5 bg-[#FAF8F3] border border-[#EAE3D5] rounded-xl">
              <div className="text-[10px] sm:text-[11px] text-[#7A7467]">Tasks / Day</div>
              <div className="text-lg sm:text-xl font-bold text-[#20201D] mt-0.5">3,850+</div>
              <div className="text-[9px] sm:text-[10px] text-[#347A4B] mt-0.5 sm:mt-1 font-medium">100% human oversight</div>
            </div>
            <div className="p-2.5 sm:p-3.5 bg-[#FAF8F3] border border-[#EAE3D5] rounded-xl">
              <div className="text-[10px] sm:text-[11px] text-[#7A7467]">Error Rate</div>
              <div className="text-lg sm:text-xl font-bold text-[#20201D] mt-0.5">0.02%</div>
              <div className="text-[9px] sm:text-[10px] text-[#C98B35] mt-0.5 sm:mt-1 font-medium">Automatic retry & escalation</div>
            </div>
          </div>

          <div className="p-2.5 sm:p-3 bg-[#F4EFE6] rounded-xl border border-[#DDD6C8] text-[11px] sm:text-xs text-[#20201D] flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#59634B] shrink-0" />
            <span>AI embedded naturally into your existing stack without disruption.</span>
          </div>
        </motion.div>
      )}

    </div>
  );
}
