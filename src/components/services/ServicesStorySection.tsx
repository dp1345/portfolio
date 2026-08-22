import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle, 
  Lightbulb, 
  Sparkles, 
  Check, 
  Zap, 
  Play,
  Pause,
  MousePointer2
} from 'lucide-react';
import { SERVICES_LIST, ServiceData, ServiceStep } from './ServicesData';
import { ServiceVisualWebsites } from './ServiceVisualWebsites';
import { ServiceVisualMVPs } from './ServiceVisualMVPs';
import { ServiceVisualAIAgents } from './ServiceVisualAIAgents';
import { ServiceVisualChatbots } from './ServiceVisualChatbots';
import { ServiceVisualAutomation } from './ServiceVisualAutomation';

interface ServicesStorySectionProps {
  onStartBuild: (serviceId?: string) => void;
}

interface StoryFrame {
  serviceIndex: number;
  stepIndex: number;
}

// Build sequential storyboard frames one-by-one: 4 for Websites, 4 for MVPs, 4 for AI Agents, 4 for Chatbots, 2 for Automation
const STORY_FRAMES: StoryFrame[] = [];
SERVICES_LIST.forEach((srv, srvIdx) => {
  srv.steps.forEach((_, stepIdx) => {
    STORY_FRAMES.push({ serviceIndex: srvIdx, stepIndex: stepIdx });
  });
});

export function ServicesStorySection({ onStartBuild }: ServicesStorySectionProps) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [scrollProgressVal, setScrollProgressVal] = useState(0);

  const sectionContainerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScrollRef = useRef(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const currentService: ServiceData = SERVICES_LIST[activeServiceIndex] || SERVICES_LIST[0];
  const currentStep: ServiceStep = currentService.steps[activeStepIndex] || currentService.steps[0];
  const totalFrames = STORY_FRAMES.length;
  const totalServices = SERVICES_LIST.length;

  // Motion Scroll Hook configured on the tall scroll track
  const { scrollYProgress } = useScroll({
    target: sectionContainerRef,
    offset: ["start start", "end end"]
  });

  // React to native scroll scrub: sequentially advances step by step through each service
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgressVal(latest);

    if (isProgrammaticScrollRef.current) return;

    // Clamp latest value [0, 0.9999]
    const clamped = Math.min(Math.max(latest, 0), 0.9999);
    
    // Determine target sequential frame from STORY_FRAMES
    const frameIdx = Math.min(Math.floor(clamped * totalFrames), totalFrames - 1);
    const targetFrame = STORY_FRAMES[frameIdx];

    if (targetFrame) {
      if (targetFrame.serviceIndex !== activeServiceIndex) {
        setActiveServiceIndex(targetFrame.serviceIndex);
      }
      if (targetFrame.stepIndex !== activeStepIndex) {
        setActiveStepIndex(targetFrame.stepIndex);
      }
    }
  });

  // Scroll to a specific service and step position on user interaction
  const scrollToServiceAndStep = useCallback((serviceIdx: number, stepIdx: number = 0) => {
    if (!sectionContainerRef.current) return;

    isProgrammaticScrollRef.current = true;
    setActiveServiceIndex(serviceIdx);
    setActiveStepIndex(stepIdx);

    const frameIdx = STORY_FRAMES.findIndex(
      f => f.serviceIndex === serviceIdx && f.stepIndex === stepIdx
    );
    const resolvedFrameIdx = frameIdx >= 0 
      ? frameIdx 
      : STORY_FRAMES.findIndex(f => f.serviceIndex === serviceIdx);

    const progress = (resolvedFrameIdx + 0.1) / totalFrames;

    const containerTop = sectionContainerRef.current.offsetTop;
    const containerHeight = sectionContainerRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const targetScrollY = containerTop + progress * (containerHeight - viewportHeight);

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });

    setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 600);
  }, [totalFrames]);

  // Handle step navigation (step by step forward / backward)
  const handlePrevStep = () => {
    const currentFrameIdx = STORY_FRAMES.findIndex(
      f => f.serviceIndex === activeServiceIndex && f.stepIndex === activeStepIndex
    );
    if (currentFrameIdx > 0) {
      const prevFrame = STORY_FRAMES[currentFrameIdx - 1];
      scrollToServiceAndStep(prevFrame.serviceIndex, prevFrame.stepIndex);
    }
  };

  const handleNextStep = () => {
    const currentFrameIdx = STORY_FRAMES.findIndex(
      f => f.serviceIndex === activeServiceIndex && f.stepIndex === activeStepIndex
    );
    if (currentFrameIdx >= 0 && currentFrameIdx < STORY_FRAMES.length - 1) {
      const nextFrame = STORY_FRAMES[currentFrameIdx + 1];
      scrollToServiceAndStep(nextFrame.serviceIndex, nextFrame.stepIndex);
    }
  };

  // Auto-play slideshow logic (cycles sequentially frame-by-frame)
  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      const currentIdx = STORY_FRAMES.findIndex(
        f => f.serviceIndex === activeServiceIndex && f.stepIndex === activeStepIndex
      );
      const nextIdx = (currentIdx + 1) % STORY_FRAMES.length;
      const nextFrame = STORY_FRAMES[nextIdx];
      setActiveServiceIndex(nextFrame.serviceIndex);
      setActiveStepIndex(nextFrame.stepIndex);
    }, 3800);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, activeServiceIndex, activeStepIndex]);

  // Render the appropriate visual component
  const renderVisual = (serviceId: string, stepNumber: number) => {
    switch (serviceId) {
      case "websites":
        return <ServiceVisualWebsites currentStep={stepNumber} />;
      case "mvp":
      case "mvps":
        return <ServiceVisualMVPs currentStep={stepNumber} />;
      case "ai-agents-automation":
      case "ai-agents":
        return <ServiceVisualAIAgents currentStep={stepNumber} />;
      case "chatbots":
        return <ServiceVisualChatbots currentStep={stepNumber} />;
      default:
        return <ServiceVisualWebsites currentStep={stepNumber} />;
    }
  };

  const renderHighlightIcon = (type?: string) => {
    switch (type) {
      case 'question':
        return <HelpCircle className="w-4 h-4 text-[#C98B35] shrink-0" />;
      case 'lightbulb':
        return <Lightbulb className="w-4 h-4 text-[#C98B35] shrink-0" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#C98B35] shrink-0" />;
      case 'check':
        return <Check className="w-4 h-4 text-[#59634B] shrink-0" />;
      case 'zap':
        return <Zap className="w-4 h-4 text-[#C98B35] shrink-0" />;
      default:
        return <Lightbulb className="w-4 h-4 text-[#C98B35] shrink-0" />;
    }
  };

  return (
    <section 
      id="services-story"
      ref={sectionContainerRef}
      className="relative bg-[#F4F0E8] w-full border-t border-[#DED8CC]/70"
      style={{ minHeight: '420vh' }}
    >
      {/* Sticky Pin Container for the Scroll Slideshow */}
      <div className="sticky top-0 min-h-[100dvh] lg:h-screen w-full flex flex-col justify-between py-2 sm:py-5 px-3 sm:px-6 lg:px-12 overflow-y-auto lg:overflow-hidden">
        
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
          
          {/* =================================================== */}
          {/* 1. SERVICES SECTION INTRO & CONTROLS                */}
          {/* =================================================== */}
          <div className="flex items-center justify-between gap-2 pb-2 sm:pb-3 border-b border-[#DED8CC]/60">
            
            {/* Title & Eyebrow */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase text-[#C98B35]">
                  WAYS I CAN HELP
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#8A877F] font-mono">
                  • {currentService.numberStr}
                </span>
              </div>
              <h2 className="text-base sm:text-2xl lg:text-3xl font-bold text-[#1F1F1C] tracking-tight leading-tight truncate sm:whitespace-normal">
                Build around the problem. <span className="text-[#65635D] font-normal hidden xs:inline">Not the technology.</span>
              </h2>
            </div>

            {/* Slideshow Progress Bar & Auto-Play / Scroll Indicator */}
            <div className="flex items-center gap-2 shrink-0">
              
              {/* Scroll Track Mini-Bar */}
              <div className="hidden md:flex items-center gap-1.5 bg-[#FAF8F3] px-3 py-1.5 rounded-full border border-[#DED8CC] text-xs font-mono text-[#65635D]">
                <MousePointer2 className="w-3.5 h-3.5 text-[#C98B35] animate-bounce" />
                <span>Scroll to step through</span>
                <div className="w-16 h-1.5 bg-[#ECE6DB] rounded-full overflow-hidden ml-1">
                  <div 
                    className="h-full bg-[#C98B35] transition-all duration-150"
                    style={{ width: `${Math.round(scrollProgressVal * 100)}%` }}
                  />
                </div>
              </div>

              {/* Auto-play toggle button */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all duration-200 cursor-pointer shadow-xs ${
                  isAutoPlaying 
                    ? 'bg-[#59634B] text-white' 
                    : 'bg-[#FAF8F3] hover:bg-[#ECE6DB] text-[#1F1F1C] border border-[#DED8CC]'
                }`}
                title={isAutoPlaying ? "Pause slideshow" : "Auto-advance slideshow"}
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-white" />
                    <span className="hidden xs:inline">Auto-Playing</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-[#C98B35]" />
                    <span className="hidden xs:inline">Auto-Play</span>
                  </>
                )}
              </button>

            </div>

          </div>

          {/* =================================================== */}
          {/* 2. SERVICE SWITCHER PILLS (With live progress)     */}
          {/* =================================================== */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-1.5 sm:py-2 scrollbar-none -mx-1 px-1">
            {SERVICES_LIST.map((srv, idx) => {
              const isActive = idx === activeServiceIndex;
              return (
                <button
                  key={srv.id}
                  onClick={() => scrollToServiceAndStep(idx, 0)}
                  className={`min-h-[32px] sm:min-h-[36px] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-[13px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1 sm:gap-1.5 shrink-0 active:scale-95 ${
                    isActive
                      ? 'bg-[#20201D] text-white shadow-sm ring-2 ring-[#C98B35]/30'
                      : 'bg-[#FAF8F3]/90 text-[#65635D] hover:text-[#1F1F1C] border border-[#DED8CC] hover:border-[#C98B35]/50'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#C98B35]' : 'bg-[#DED8CC]'}`} />
                  <span>{srv.title}</span>
                  {isActive && (
                    <span className="text-[10px] font-mono text-[#C98B35] ml-0.5">
                      [{activeStepIndex + 1}/{currentService.steps.length}]
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* =================================================== */}
          {/* 3. MAIN SLIDESHOW STAGE (Adaptive Responsive Layout) */}
          {/* =================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-[36%_64%] gap-2.5 sm:gap-4 lg:gap-8 items-start lg:items-center flex-1 my-auto py-1 sm:py-2">
            
            {/* ----------------- LEFT COLUMN (Service Info & Active Step) ----------------- */}
            <div className="flex flex-col justify-between space-y-2 sm:space-y-3">
              
              {/* Service Headline (Desktop + Mobile compact) */}
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-mono font-bold text-[#C98B35]">
                    {currentService.numberStr}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#ECE6DB] text-[#65635D] uppercase tracking-wider">
                    Story Scene
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#1F1F1C] tracking-tight mb-0.5 sm:mb-1.5">
                  {currentService.title}
                </h3>

                <p className="text-[11px] sm:text-xs text-[#65635D] leading-relaxed hidden sm:block">
                  {currentService.description}
                </p>
              </div>

              {/* Step Navigation Controls (Horizontal pills on mobile, vertical track on desktop) */}
              <div className="flex items-center gap-1.5 lg:hidden py-1 overflow-x-auto scrollbar-none">
                {currentService.steps.map((step, sIdx) => {
                  const isStepActive = sIdx === activeStepIndex;
                  const isPast = sIdx < activeStepIndex;
                  return (
                    <button
                      key={step.id}
                      onClick={() => scrollToServiceAndStep(activeServiceIndex, sIdx)}
                      className={`min-h-[30px] px-2.5 py-1 rounded-lg flex items-center gap-1.5 text-[11px] font-medium transition-all duration-150 cursor-pointer shrink-0 ${
                        isStepActive
                          ? 'bg-[#C98B35] text-white shadow-xs font-bold'
                          : isPast
                          ? 'bg-[#59634B]/15 text-[#59634B] border border-[#59634B]/30'
                          : 'bg-[#FAF8F3] text-[#7A766D] border border-[#DED8CC]'
                      }`}
                    >
                      <span className="font-mono text-[10px] font-bold">
                        {isPast ? '✓' : `0${sIdx + 1}`}
                      </span>
                      <span>{step.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Vertical Step Track & Active Content (Desktop only vertical rail) */}
              <div className="hidden lg:grid grid-cols-[auto_1fr] gap-4 items-start pt-1">
                
                {/* Vertical Step Track */}
                <div className="flex flex-col items-center py-1">
                  {currentService.steps.map((step, sIdx) => {
                    const isStepActive = sIdx === activeStepIndex;
                    const isPast = sIdx < activeStepIndex;
                    return (
                      <React.Fragment key={step.id}>
                        <button
                          onClick={() => scrollToServiceAndStep(activeServiceIndex, sIdx)}
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-mono font-bold transition-all duration-200 cursor-pointer ${
                            isStepActive
                              ? 'bg-[#C98B35] text-white ring-4 ring-[#C98B35]/25 shadow-xs scale-110'
                              : isPast
                              ? 'bg-[#59634B] text-white'
                              : 'bg-[#FAF8F3] text-[#8A877F] border border-[#DED8CC] hover:border-[#C98B35]'
                          }`}
                          title={step.label}
                        >
                          {isPast ? <Check className="w-3 h-3" /> : sIdx + 1}
                        </button>
                        {sIdx < currentService.steps.length - 1 && (
                          <div className={`w-0.5 h-6 my-0.5 transition-colors duration-300 ${
                            isPast ? 'bg-[#59634B]' : 'bg-[#DED8CC]'
                          }`} />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Animated Active Step Card (Desktop) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentService.id}-${currentStep.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                    className="space-y-2.5"
                  >
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FAF8F3] border border-[#DED8CC] text-[10px] font-mono text-[#65635D]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C98B35]" />
                      <span>STEP {currentStep.stepNumber} OF {currentStep.totalSteps}: {currentStep.label.toUpperCase()}</span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-[#1F1F1C] tracking-tight leading-snug">
                      {currentStep.title}
                    </h4>

                    <p className="text-xs text-[#65635D] leading-relaxed">
                      {currentStep.copy}
                    </p>

                    {/* Highlight Box */}
                    {currentStep.highlightBox && (
                      <div className="p-2.5 bg-[#FAF8F3] rounded-xl border border-[#DED8CC] flex items-start gap-2 shadow-xs">
                        <div className="p-1 rounded-md bg-[#F4F0E8] text-[#C98B35] shrink-0 mt-0.5">
                          {renderHighlightIcon(currentStep.highlightBox.iconType)}
                        </div>
                        <p className="text-[11px] text-[#4A4740] font-medium leading-snug">
                          {currentStep.highlightBox.text}
                        </p>
                      </div>
                    )}

                    {/* Action CTA Button */}
                    <div className="pt-0.5">
                      <button
                        onClick={() => onStartBuild(currentService.id)}
                        className="group inline-flex items-center gap-2 bg-[#20201D] hover:bg-[#2C2B27] text-white font-medium text-xs px-3.5 py-1.5 rounded-xl transition-all duration-200 shadow-xs cursor-pointer active:scale-95"
                      >
                        <span>{currentStep.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>

              {/* Mobile Active Step Info Bar */}
              <div className="lg:hidden bg-[#FAF8F3] rounded-xl p-2.5 border border-[#DED8CC] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#C98B35]">
                    STEP {currentStep.stepNumber}/{currentStep.totalSteps}: {currentStep.label}
                  </span>
                  <button
                    onClick={() => onStartBuild(currentService.id)}
                    className="text-[10px] font-semibold text-[#20201D] underline hover:text-[#C98B35] flex items-center gap-1 cursor-pointer"
                  >
                    <span>{currentStep.ctaText}</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                </div>
                <div className="text-xs font-bold text-[#1F1F1C]">
                  {currentStep.title}
                </div>
                <p className="text-[11px] text-[#65635D] leading-tight line-clamp-2">
                  {currentStep.copy}
                </p>
              </div>

            </div>

            {/* ----------------- RIGHT COLUMN (Interactive Visual Canvas) ----------------- */}
            <div className="w-full">
              <div className="bg-[#FAF8F3] rounded-[16px] sm:rounded-[24px] border border-[#DED8CC] shadow-[0_8px_30px_rgba(40,35,25,0.06)] overflow-hidden flex flex-col justify-between">
                
                {/* Visual Header Tag */}
                <div className="px-3 sm:px-4 pt-2.5 sm:pt-3 pb-1 flex items-center justify-between text-xs">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/80 border border-[#DED8CC] text-[9px] sm:text-[10px] font-semibold text-[#65635D]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#347A4B] animate-pulse" />
                    <span>● LIVE PREVIEW</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#8A877F]">
                    Scene {activeServiceIndex + 1}/{totalServices} • Step {activeStepIndex + 1}/{currentService.steps.length}
                  </span>
                </div>

                {/* Main Visual Display */}
                <div className="w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${currentService.id}-${activeStepIndex}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.28 }}
                    >
                      {renderVisual(currentService.id, currentStep.stepNumber)}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom Card Bar: Goal Description + Manual Controls */}
                <div className="bg-white/80 border-t border-[#DED8CC] px-3 sm:px-4 py-2 flex items-center justify-between gap-2">
                  
                  {/* Goal Info */}
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-6 h-6 rounded-full bg-[#F4F0E8] flex items-center justify-center text-[#C98B35] shrink-0">
                      <Lightbulb className="w-3 h-3" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] sm:text-[10px] font-bold text-[#1F1F1C]">Goal</div>
                      <div className="text-[10px] sm:text-[11px] text-[#65635D] truncate max-w-[180px] xs:max-w-[260px] sm:max-w-[340px]">
                        {currentStep.goalText}
                      </div>
                    </div>
                  </div>

                  {/* Manual Arrow Controls */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={handlePrevStep}
                      disabled={activeServiceIndex === 0 && activeStepIndex === 0}
                      className="w-7 h-7 rounded-full bg-[#FAF8F3] hover:bg-[#F4F0E8] border border-[#DED8CC] flex items-center justify-center text-[#1F1F1C] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer active:scale-95"
                      aria-label="Previous step"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleNextStep}
                      disabled={activeServiceIndex === totalServices - 1 && activeStepIndex === currentService.steps.length - 1}
                      className="w-7 h-7 rounded-full bg-[#20201D] hover:bg-[#2C2B27] text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer active:scale-95"
                      aria-label="Next step"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* =================================================== */}
          {/* 4. BOTTOM STATUS BAR & SCROLL PROGRESS PIPELINE     */}
          {/* =================================================== */}
          <div className="pt-1.5 sm:pt-2 flex items-center justify-between text-[11px] sm:text-xs text-[#8A877F]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] sm:text-[11px] text-[#59634B] font-semibold truncate max-w-[220px] sm:max-w-none">
                {activeServiceIndex < totalServices - 1 
                  ? `Next on scroll: ${SERVICES_LIST[activeServiceIndex + 1].title}` 
                  : "All service workflows completed"}
              </span>
            </div>

            <div className="flex items-center gap-1">
              {SERVICES_LIST.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeServiceIndex 
                      ? 'w-5 sm:w-6 bg-[#C98B35]' 
                      : i < activeServiceIndex 
                      ? 'w-1.5 sm:w-2 bg-[#59634B]' 
                      : 'w-1.5 sm:w-2 bg-[#DED8CC]'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

