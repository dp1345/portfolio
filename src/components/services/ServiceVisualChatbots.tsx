import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Bot, Calendar, User, ArrowRight, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface VisualProps {
  currentStep: number;
}

export function ServiceVisualChatbots({ currentStep }: VisualProps) {
  return (
    <div className="relative w-full h-auto min-h-[280px] xs:min-h-[320px] sm:min-h-[440px] lg:h-[480px] flex items-center justify-center p-2.5 sm:p-5 overflow-hidden">
      
      {/* CHATBOT INTERFACE CONTAINER */}
      <motion.div 
        key={`chatbot-${currentStep}`}
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -12 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-[540px] bg-white rounded-xl sm:rounded-2xl border border-[#DDD6C8] shadow-[0_16px_40px_rgba(40,35,25,0.1)] p-3.5 sm:p-5 overflow-hidden"
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#F0EBE1] mb-2.5 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C98B35] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-bold text-[#20201D]">AI Assistant · Dhrumi Patel</div>
              <div className="text-[9px] sm:text-[10px] text-[#7A7467] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#347A4B]" />
                <span>Online • Grounded Knowledge</span>
              </div>
            </div>
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono bg-[#FAF5EC] text-[#8C8474] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#EAE3D5]">
            24/7 Active
          </span>
        </div>

        {/* Dynamic Chat Message Flow depending on step */}
        <div className="space-y-2 sm:space-y-3 min-h-[160px] sm:min-h-[220px]">
          
          {/* User question (Always present) */}
          <div className="flex items-start gap-2 sm:gap-2.5 justify-end">
            <div className="bg-[#20201D] text-white p-2.5 sm:p-3 rounded-2xl rounded-tr-sm max-w-[280px] sm:max-w-[320px] text-[11px] sm:text-xs shadow-xs">
              <p>Hi! Can you build an MVP that handles client onboarding and Stripe subscriptions?</p>
            </div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#EAE3D5] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-[#6E685D] shrink-0 mt-0.5 sm:mt-1">
              U
            </div>
          </div>

          {/* Step 1: Incoming state */}
          {currentStep === 1 && (
            <div className="p-2.5 sm:p-3 bg-[#FAF8F3] border border-dashed border-[#DDD6C8] rounded-xl text-center text-[11px] sm:text-xs text-[#8C877D] mt-3 sm:mt-6">
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 mx-auto mb-1 text-[#C98B35]" />
              <span>Visitor waiting for response. Most bounce if not answered in 30 seconds.</span>
            </div>
          )}

          {/* Step 2+: Grounded instant answer */}
          {currentStep >= 2 && (
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2 sm:gap-2.5"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C98B35] flex items-center justify-center text-white text-[9px] sm:text-[10px] shrink-0 mt-0.5 sm:mt-1">
                <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
              <div className="bg-[#FAF8F3] border border-[#EAE3D5] text-[#20201D] p-2.5 sm:p-3 rounded-2xl rounded-tl-sm max-w-[320px] sm:max-w-[360px] text-[11px] sm:text-xs space-y-1 sm:space-y-1.5 shadow-xs">
                <p>Yes, absolutely. We deliver full-stack MVPs including Stripe billing, database schemas, and onboarding workflows within a 14-day sprint.</p>
                <div className="text-[9px] sm:text-[10px] text-[#59634B] font-semibold bg-[#F0F5EC] p-1 sm:p-1.5 rounded border border-[#DEEADA]">
                  ✓ Verified against: &apos;Services & Delivery Scope&apos;
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3 & 4: Conversion & Action Booking Card */}
          {currentStep >= 3 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-2.5 sm:p-3.5 bg-[#F6F2EA] rounded-xl border border-[#DDD6C8] space-y-1.5 sm:space-y-2 mt-1 sm:mt-2"
            >
              <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#20201D]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C98B35]" />
                  <span>Book Architecture Discovery</span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-[#347A4B] font-semibold">Instant Sync</span>
              </div>
              <div className="flex gap-1.5 sm:gap-2">
                <button className="flex-1 py-1 sm:py-1.5 bg-white border border-[#DDD6C8] hover:border-[#C98B35] rounded-lg text-[10px] sm:text-[11px] font-medium text-[#20201D] transition-colors">
                  Tomorrow 10:00 AM
                </button>
                <button className="flex-1 py-1 sm:py-1.5 bg-[#20201D] text-white rounded-lg text-[10px] sm:text-[11px] font-medium transition-colors">
                  Thursday 2:30 PM
                </button>
              </div>
              <div className="text-[9px] sm:text-[10px] text-[#7A7467] flex items-center justify-between pt-1 border-t border-[#EAE3D5]">
                <span>Contact synced to CRM</span>
                <span className="text-[#347A4B] font-bold">✓ Qualified</span>
              </div>
            </motion.div>
          )}

        </div>

        {/* Bottom chat input */}
        <div className="mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-[#F0EBE1] flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Type your message..." 
            disabled 
            className="flex-1 bg-[#FAF8F3] border border-[#EAE3D5] rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs text-[#20201D] placeholder-[#A6A095] cursor-default"
          />
          <button className="p-1.5 sm:p-2 rounded-lg bg-[#20201D] text-white">
            <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>

      </motion.div>

    </div>
  );
}
