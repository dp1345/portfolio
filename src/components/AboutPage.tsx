import React, { useRef, useState } from 'react';
import { 
  CheckCircle2, 
  Lightbulb, 
  Cpu, 
  Zap, 
  TrendingUp, 
  Search, 
  Target, 
  Code2, 
  Rocket, 
  RotateCcw,
  Globe, 
  Box, 
  Bot, 
  Workflow, 
  Layers, 
  Compass, 
  Hammer, 
  GitFork, 
  Atom, 
  ArrowRight,
  ExternalLink,
  Send,
  MousePointer
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

// Use the existing high-quality portrait image
import portraitImg from '../assets/images/hero_girl_ref_look_1787370690935.jpg';
import { ParallaxHeroPortrait } from './ParallaxHeroPortrait';

// Import crisp custom logos matching the uploaded reference images
import { 
  InfosysSpringboardLogo, 
  NotionInfosoftLogo, 
  EdunetFoundationLogo, 
  MindMingleMediaLogo, 
  QiskitLogo, 
  FreelanceLogo 
} from './CompanyLogos';

interface AboutPageProps {
  onOpenInquiry: () => void;
  onOpenWork: () => void;
}

interface InteractiveExperienceCardProps {
  exp: {
    period: string;
    role: string;
    company: string;
    mode: string;
    logoComponent: React.ComponentType<{ className?: string }>;
    description: string;
  };
  idx: number;
}

const InteractiveExperienceCard: React.FC<InteractiveExperienceCardProps> = ({ exp, idx }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovered: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(prev => ({ ...prev, isHovered: false }));
  };

  const Logo = exp.logoComponent;

  return (
    <motion.div 
      key={idx}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: idx * 0.09 }}
      className="relative group"
    >
      {/* Gold Circular Marker on the timeline line */}
      <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-[#C88A32] border-2 border-[#F4EFE6] shadow-xs group-hover:scale-125 group-hover:bg-[#D99A40] transition-all duration-300 z-10" />

      {/* Experience Card with Interactive Mouse Spotlight */}
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-2xl bg-[#FBF8F1] border border-[#DDD6C9] p-6 sm:p-8 transition-all duration-300 group-hover:border-[#C88A32]/70 group-hover:shadow-[0_12px_36px_rgba(45,40,30,0.07)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left"
      >
        {/* Dynamic Mouse Spotlight Glow */}
        {mousePos.isHovered && (
          <div 
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200, 138, 50, 0.08), transparent 80%)`
            }}
          />
        )}

        {/* Left Column: Date */}
        <div className="w-full md:w-44 flex-shrink-0 relative z-1">
          <div className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#1E1D19] group-hover:text-[#C88A32] transition-colors">
            {exp.period}
          </div>
        </div>

        {/* Center Column: Logo Badge + Role / Company Details */}
        <div className="w-full md:w-68 flex items-center gap-4 flex-shrink-0 relative z-1">
          
          {/* Logo Badge (Render high fidelity custom logo) */}
          <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Logo className="w-full h-full" />
          </div>

          {/* Role and Company */}
          <div>
            <h3 className="text-base font-bold text-[#1E1D19] tracking-tight group-hover:text-[#1E1D19]">
              {exp.role}
            </h3>
            <div className="text-xs text-[#686358] mt-0.5 font-medium">
              {exp.company}
            </div>
            <div className="text-[11px] font-mono text-[#8C867A] mt-0.5 flex items-center gap-1">
              <span>📍</span>
              <span>{exp.mode}</span>
            </div>
          </div>

        </div>

        {/* Right Column: Description */}
        <div className="w-full md:flex-1 text-xs sm:text-sm text-[#555046] leading-relaxed relative z-1">
          {exp.description}
        </div>

      </div>

    </motion.div>
  );
}

export function AboutPage({ onOpenInquiry, onOpenWork }: AboutPageProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Scroll animation progress for the vertical timeline line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Timeline experiences in exact required order:
  // 1. Freelance
  // 2. Qiskit Advocate
  // 3. Full Stack AI Developer (Mind Mingle Media)
  // 4. AI Intern (Edunet Foundation)
  // 5. MERN Stack Intern (Notion Infosoft)
  // 6. AI Intern (Infosys Springboard) -> placed BELOW MERN Stack!
  const experiences = [
    {
      period: "DEC 2024 — PRESENT",
      role: "Freelance",
      company: "Independent / Self-employed",
      mode: "Hybrid",
      logoComponent: FreelanceLogo,
      description: "Evolved from building high-performance websites to deploying AI agents and chatbots that eliminate tedious tasks. Optimized digital speed while cutting client manual workloads through end-to-end workflow automation."
    },
    {
      period: "SEP 2025 — PRESENT",
      role: "Qiskit Advocate",
      company: "Qiskit · Part-time",
      mode: "Remote",
      logoComponent: QiskitLogo,
      description: "Contributing as a Qiskit Advocate at IBM Quantum, supporting the open-source Qiskit advocate program, quantum computing and community initiatives."
    },
    {
      period: "SEP 2025 — OCT 2025",
      role: "Full Stack AI Developer",
      company: "Mind Mingle Media · Full-time",
      mode: "Ahmedabad, India · On-site",
      logoComponent: MindMingleMediaLogo,
      description: "Worked on integrating ElevenLabs voice AI, n8n automation workflows and Google Cloud APIs and testing. Also LangGraph framework based AI agent. Built scalable pipelines connecting audio generation to business processes."
    },
    {
      period: "NOV 2024 — DEC 2024",
      role: "AI Intern",
      company: "Edunet Foundation · Internship",
      mode: "Remote",
      logoComponent: EdunetFoundationLogo,
      description: "Built an intelligent chatbot using NLP techniques (lemmatization, stemming) to improve response accuracy and data retrieval. Collaborated on the full-cycle development of a chatbot application to streamline user interactions."
    },
    {
      period: "JUN 2024 — AUG 2024",
      role: "MERN Stack Intern",
      company: "Notion Infosoft · Internship",
      mode: "Ahmedabad, India · On-site",
      logoComponent: NotionInfosoftLogo,
      description: "Developed and tested RESTful APIs with Node.js and Express.js, implementing secure JWT authentication. Integrated React frontends with MongoDB to ensure high-performance data operations for end-users."
    },
    {
      period: "MAY 2024 — JUL 2024",
      role: "AI Intern",
      company: "Infosys Springboard · Internship",
      mode: "Remote",
      logoComponent: InfosysSpringboardLogo,
      description: "Built practical AI solutions using Python and Flask while developing experience across machine learning and application development."
    }
  ];

  const certifications = [
    {
      provider: "Snowflake",
      title: "Data Engineering Bootcamp",
      date: "Nov 2025",
      iconColor: "#29B5E8",
      iconType: "snowflake"
    },
    {
      provider: "Snowflake",
      title: "Gen AI Bootcamp",
      date: "Nov 2025",
      iconColor: "#29B5E8",
      iconType: "snowflake"
    },
    {
      provider: "Microsoft",
      title: "Cloud & AI Bootcamp 2025",
      date: "Jul 2025",
      iconColor: "#F25022",
      iconType: "microsoft"
    },
    {
      provider: "Hugging Face",
      title: "Agents Course",
      date: "Sep 2025",
      iconColor: "#FFD21E",
      iconType: "huggingface"
    },
    {
      provider: "IBM",
      title: "Qiskit Global Summer School 2025",
      date: "Aug 2025",
      iconColor: "#1F70C1",
      iconType: "ibm"
    },
    {
      provider: "Hugging Face",
      title: "Fundamentals of MCP",
      date: "Aug 2025",
      iconColor: "#FFD21E",
      iconType: "huggingface"
    },
    {
      provider: "Hugging Face",
      title: "Fundamentals of LLMs",
      date: "Aug 2025",
      iconColor: "#FFD21E",
      iconType: "huggingface"
    },
    {
      provider: "Securiti AI",
      title: "AI Security & Governance",
      date: "Aug 2025",
      iconColor: "#00C389",
      iconType: "securiti"
    },
    {
      provider: "Infosys",
      title: "Python Foundation",
      date: "Feb 2024",
      iconColor: "#007CC3",
      iconType: "infosys"
    },
    {
      provider: "Infosys",
      title: "AI Primer",
      date: "Feb 2024",
      iconColor: "#007CC3",
      iconType: "infosys"
    },
    {
      provider: "Coursera",
      title: "AI For Everyone",
      date: "Oct 2023",
      iconColor: "#0056D2",
      iconType: "coursera"
    }
  ];

  return (
    <div className="w-full bg-[#F4EFE6] text-[#20201D] overflow-hidden selection:bg-[#C88A32]/25 selection:text-[#20201D]">
      
      {/* =================================================== */}
      {/* 1. ABOUT HERO SECTION                               */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 sm:pt-8 md:pt-14 pb-12 sm:pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Bio & 4 Core Principles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col text-left"
          >
            {/* Small Eyebrow */}
            <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.14em] uppercase text-[#817E74] mb-3 sm:mb-4">
              ABOUT ME
            </span>

            {/* Large Headline */}
            <h1 className="text-left text-2xl xs:text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#1E1D19] tracking-tight leading-[1.15] sm:leading-[1.08] mb-4 sm:mb-6 max-w-xl">
              I build digital systems that make businesses easier to run.
            </h1>

            {/* Supporting Bio Paragraph */}
            <p className="text-sm sm:text-lg text-[#525048] leading-relaxed max-w-xl mb-6 sm:mb-10">
              I&apos;m a freelance full-stack AI developer focused on websites, MVPs, AI agents, chatbots, automation and integrations.
            </p>

            {/* 4 Compact Principles Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 pt-5 sm:pt-6 border-t border-[#DFD8CC]">
              
              {/* 01 Problem First */}
              <div className="flex flex-col space-y-1 sm:space-y-1.5 p-2.5 sm:p-3 rounded-xl bg-[#ECE5D8]/50 border border-[#DDD6C9]/60">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#DFD7C7] flex items-center justify-center text-[#555046] mb-0.5 sm:mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-[#C88A32]" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-[#1E1D19] leading-snug">
                  Problem first
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#6E6A60] leading-tight">
                  Always start with what matters.
                </div>
              </div>

              {/* 02 Practical Systems */}
              <div className="flex flex-col space-y-1 sm:space-y-1.5 p-2.5 sm:p-3 rounded-xl bg-[#ECE5D8]/50 border border-[#DDD6C9]/60">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#DFD7C7] flex items-center justify-center text-[#555046] mb-0.5 sm:mb-1">
                  <Cpu className="w-3.5 h-3.5 text-[#5F8A68]" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-[#1E1D19] leading-snug">
                  Practical systems
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#6E6A60] leading-tight">
                  Build what is useful, not complex.
                </div>
              </div>

              {/* 03 Automation */}
              <div className="flex flex-col space-y-1 sm:space-y-1.5 p-2.5 sm:p-3 rounded-xl bg-[#ECE5D8]/50 border border-[#DDD6C9]/60">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#DFD7C7] flex items-center justify-center text-[#555046] mb-0.5 sm:mb-1">
                  <Zap className="w-3.5 h-3.5 text-[#C88A32]" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-[#1E1D19] leading-snug">
                  Automation
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#6E6A60] leading-tight">
                  Remove repetitive work.
                </div>
              </div>

              {/* 04 Real Outcomes */}
              <div className="flex flex-col space-y-1 sm:space-y-1.5 p-2.5 sm:p-3 rounded-xl bg-[#ECE5D8]/50 border border-[#DDD6C9]/60">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#DFD7C7] flex items-center justify-center text-[#555046] mb-0.5 sm:mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-[#5F8A68]" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-[#1E1D19] leading-snug">
                  Real outcomes
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#6E6A60] leading-tight">
                  Measure business value.
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Layered Parallax Hero Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex items-center justify-center lg:justify-end"
          >
            <ParallaxHeroPortrait />
          </motion.div>

        </div>
      </section>

      {/* =================================================== */}
      {/* 2. PHILOSOPHY + EVOLUTION (SIDE-BY-SIDE CARDS)      */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-12 sm:pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT CARD — MY PHILOSOPHY */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[24px] bg-[#FBF8F1] border border-[#DDD6C9] p-5 sm:p-7 md:p-9 flex flex-col justify-between shadow-[0_4px_24px_rgba(45,40,30,0.04)] text-left"
          >
            <div>
              <span className="text-xs font-bold font-mono tracking-[0.14em] uppercase text-[#C88A32] mb-2 sm:mb-3 block">
                MY PHILOSOPHY
              </span>
              
              <h2 className="text-xl sm:text-3xl font-bold text-[#1E1D19] tracking-tight leading-tight mb-6 sm:mb-8">
                I don&apos;t start with technology.<br className="hidden sm:inline" />
                I start with the problem.
              </h2>

              {/* 5-Step Horizontal Process Row */}
              <div className="grid grid-cols-5 gap-1.5 sm:gap-3 items-start relative pt-2">
                {[
                  {
                    num: "01",
                    step: "Understand",
                    desc: "Understand the business, problem and user needs.",
                    icon: Search
                  },
                  {
                    num: "02",
                    step: "Define",
                    desc: "Find the simplest useful solution.",
                    icon: Target
                  },
                  {
                    num: "03",
                    step: "Build",
                    desc: "Design, develop and integrate the right tools.",
                    icon: Code2
                  },
                  {
                    num: "04",
                    step: "Launch",
                    desc: "Test in the real world and ensure it works.",
                    icon: Rocket
                  },
                  {
                    num: "05",
                    step: "Improve",
                    desc: "Iterate based on feedback and real usage.",
                    icon: RotateCcw
                  }
                ].map((item, idx, arr) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.num} className="flex flex-col items-center text-center relative group">
                      
                      {/* Circular Icon */}
                      <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#EEE8DC] border border-[#D5CDBC] flex items-center justify-center text-[#2A2823] mb-2 sm:mb-3 group-hover:border-[#C88A32] group-hover:bg-[#F3EDE2] transition-colors shadow-2xs">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5A554A] group-hover:text-[#C88A32] transition-colors" />
                      </div>

                      {/* Step Number + Title */}
                      <div className="text-[9px] sm:text-[11px] font-mono font-bold text-[#8A8477] uppercase tracking-wider mb-0.5">
                        {item.num}
                      </div>
                      <div className="text-[10px] sm:text-[13px] font-bold text-[#1E1D19] mb-1 leading-tight">
                        {item.step}
                      </div>

                      {/* Brief Explanation */}
                      <p className="text-[10px] sm:text-[11px] text-[#6E6A60] leading-tight max-w-[95px] hidden md:block">
                        {item.desc}
                      </p>

                      {/* Connecting Arrow (between items) */}
                      {idx < arr.length - 1 && (
                        <div className="hidden lg:block absolute -right-2.5 sm:-right-3 top-5 text-[#B8B1A2]">
                          →
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD — MY EVOLUTION */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[24px] bg-[#FBF8F1] border border-[#DDD6C9] p-5 sm:p-7 md:p-9 flex flex-col justify-between shadow-[0_4px_24px_rgba(45,40,30,0.04)] text-left"
          >
            <div>
              <span className="text-xs font-bold font-mono tracking-[0.14em] uppercase text-[#5F8A68] mb-2 sm:mb-3 block">
                MY EVOLUTION
              </span>
              
              <h2 className="text-xl sm:text-3xl font-bold text-[#1E1D19] tracking-tight leading-tight mb-6 sm:mb-8">
                From websites to AI agents —<br className="hidden sm:inline" />
                building for impact.
              </h2>

              {/* 5-Step Horizontal Evolution Path */}
              <div className="grid grid-cols-5 gap-1.5 sm:gap-3 items-start relative pt-2">
                {[
                  {
                    title: "Websites",
                    desc: "Performance, SEO & UX",
                    icon: Globe
                  },
                  {
                    title: "MVPs",
                    desc: "Full-stack products",
                    icon: Box
                  },
                  {
                    title: "AI",
                    desc: "Chatbots & AI agents",
                    icon: Bot
                  },
                  {
                    title: "Automation",
                    desc: "n8n workflows & APIs",
                    icon: Workflow
                  },
                  {
                    title: "Systems",
                    desc: "Scalable integrations",
                    icon: Layers
                  }
                ].map((item, idx, arr) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex flex-col items-center text-center relative group">
                      
                      {/* Circular Icon */}
                      <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#EEE8DC] border border-[#D5CDBC] flex items-center justify-center text-[#2A2823] mb-2 sm:mb-3 group-hover:border-[#5F8A68] group-hover:bg-[#E8EFE9] transition-colors shadow-2xs">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5A554A] group-hover:text-[#5F8A68] transition-colors" />
                      </div>

                      {/* Title */}
                      <div className="text-[10px] sm:text-[13px] font-bold text-[#1E1D19] mb-1 leading-tight">
                        {item.title}
                      </div>

                      {/* Brief Description */}
                      <p className="text-[10px] sm:text-[11px] text-[#6E6A60] leading-tight max-w-[95px] hidden md:block">
                        {item.desc}
                      </p>

                      {/* Connecting Arrow (between items) */}
                      {idx < arr.length - 1 && (
                        <div className="hidden lg:block absolute -right-2.5 sm:-right-3 top-5 text-[#B8B1A2]">
                          →
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =================================================== */}
      {/* 3. EXPERIENCE SECTION                               */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-20 md:pb-28">
        
        {/* Section Heading with Scroll Mouse Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-14 text-left">
          <div>
            <span className="text-xs font-bold font-mono tracking-[0.14em] uppercase text-[#817E74] mb-2 block">
              EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-[#1E1D19] tracking-tight mb-2">
              The path so far.
            </h2>
            <p className="text-sm sm:text-base text-[#6E6A60]">
              A timeline of my professional journey and technical milestones.
            </p>
          </div>

          {/* Interactive Scroll Mouse Animation Badge */}
          <div className="flex items-center gap-3 self-start sm:self-auto px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#EDE7DA] border border-[#DDD6C9] shadow-2xs">
            {/* Animated Mouse Icon */}
            <div className="relative w-3.5 h-5 sm:w-4 sm:h-6 rounded-full border-2 border-[#525048] flex items-start justify-center p-0.5">
              <motion.div 
                animate={{ y: [0, 6, 0], opacity: [1, 0.4, 1] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1 h-1.5 rounded-full bg-[#C88A32]" 
              />
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#525048]">
              Scroll to explore
            </span>
          </div>
        </div>

        {/* Vertical Timeline Structure with Animated Progress Line */}
        <div ref={timelineRef} className="relative pl-6 sm:pl-8 space-y-5 sm:space-y-8">
          
          {/* Base Neutral Timeline Track Line */}
          <div className="absolute left-0 top-3 bottom-6 w-[2px] bg-[#DCD5C6]" />
          
          {/* Glowing Animated Scroll Progress Line */}
          <motion.div 
            style={{ height: progressHeight }} 
            className="absolute left-0 top-3 w-[2.5px] bg-gradient-to-b from-[#C88A32] via-[#E5A84B] to-[#C88A32] shadow-[0_0_8px_rgba(200,138,50,0.6)] origin-top z-0"
          />

          {/* Render Timeline Cards */}
          {experiences.map((exp, idx) => (
            <InteractiveExperienceCard key={idx} exp={exp} idx={idx} />
          ))}
        </div>

      </section>

      {/* =================================================== */}
      {/* 4. ACTIVE LEARNING / EXPLORATION + CERTIFICATIONS   */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 sm:gap-12 lg:gap-14 items-start text-left">
          
          {/* Left Column: Active Learning & Pillars */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <div>
              <span className="text-xs font-bold font-mono tracking-[0.14em] uppercase text-[#C88A32] mb-2 sm:mb-3 block">
                ACTIVELY LEARNING &amp; EXPLORING
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1E1D19] tracking-tight leading-tight mb-3 sm:mb-4">
                Always learning.<br />
                Always building.
              </h2>
              <p className="text-sm sm:text-base text-[#5A554A] leading-relaxed">
                I actively explore new technologies, AI tools and different niches. I learn by doing, experimenting and contributing to real projects.
              </p>
            </div>

            {/* 4 Pillars: Explore, Build, Contribute, What's Next */}
            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
              
              {/* Explore */}
              <div className="flex items-start gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl bg-[#FBF8F1] border border-[#DDD6C9]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#EEE8DC] flex items-center justify-center flex-shrink-0 text-[#C88A32]">
                  <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#1E1D19]">
                    Explore
                  </div>
                  <div className="text-xs text-[#686358] mt-0.5 leading-snug">
                    AI tools, agentic systems, automation, developer tools and emerging technology.
                  </div>
                </div>
              </div>

              {/* Build */}
              <div className="flex items-start gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl bg-[#FBF8F1] border border-[#DDD6C9]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#EEE8DC] flex items-center justify-center flex-shrink-0 text-[#5F8A68]">
                  <Hammer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#1E1D19]">
                    Build
                  </div>
                  <div className="text-xs text-[#686358] mt-0.5 leading-snug">
                    Turn what I learn into experiments and practical projects.
                  </div>
                </div>
              </div>

              {/* Contribute */}
              <div className="flex items-start gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl bg-[#FBF8F1] border border-[#DDD6C9]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#EEE8DC] flex items-center justify-center flex-shrink-0 text-[#36C5F0]">
                  <GitFork className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#1E1D19]">
                    Contribute
                  </div>
                  <div className="text-xs text-[#686358] mt-0.5 leading-snug">
                    Work on open-source and community projects.
                  </div>
                </div>
              </div>

              {/* What's Next */}
              <div className="flex items-start gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl bg-[#FBF8F1] border border-[#DDD6C9]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#EEE8DC] flex items-center justify-center flex-shrink-0 text-[#6D28D9]">
                  <Atom className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#1E1D19]">
                    What&apos;s next
                  </div>
                  <div className="text-xs text-[#686358] mt-0.5 leading-snug">
                    Deeply interested in quantum computing and the intersection of quantum technologies, software and AI.
                  </div>
                </div>
              </div>

            </div>

            {/* Action Link: View my work */}
            <div className="pt-2">
              <button
                onClick={onOpenWork}
                className="min-h-[44px] inline-flex items-center gap-2 bg-[#22211E] hover:bg-[#2C2B27] text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl transition-all duration-200 shadow-xs cursor-pointer active:scale-95"
              >
                <span>View my work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

          {/* Right Column: Certifications Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-bold font-mono tracking-[0.14em] uppercase text-[#817E74] block">
                  CERTIFICATIONS
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-[#1E1D19] tracking-tight">
                  Continuous learning. Stronger tomorrow.
                </h3>
              </div>

              <a
                href="https://www.linkedin.com/in/dhrumi-p-574846279/details/certifications/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#C88A32] hover:text-[#B37926] flex items-center gap-1 transition-colors py-1"
              >
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Grid of Certifications */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {certifications.map((cert, cIdx) => (
                <div 
                  key={cIdx}
                  className="rounded-xl bg-[#FBF8F1] border border-[#DDD6C9] p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-200 hover:border-[#C88A32]/60 hover:bg-[#FFFDF9]"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span 
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: cert.iconColor }}
                    />
                    <span className="text-[11px] font-mono font-bold text-[#686358] uppercase">
                      {cert.provider}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-[#1E1D19] leading-snug line-clamp-2 mb-2">
                    {cert.title}
                  </div>

                  <div className="text-[10px] font-mono text-[#8C867A]">
                    {cert.date}
                  </div>
                </div>
              ))}

              {/* More Certifications Tile linking to LinkedIn certifications */}
              <a 
                href="https://www.linkedin.com/in/dhrumi-p-574846279/details/certifications/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[#F0EAE0] border border-dashed border-[#C5BDAE] p-3 sm:p-3.5 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-[#EAE2D6] hover:border-[#C88A32] transition-colors group"
              >
                <div className="text-xs font-bold text-[#1E1D19] group-hover:text-[#C88A32] transition-colors">
                  +6 more
                </div>
                <div className="text-[11px] text-[#6E6A60] mt-0.5 flex items-center gap-1 group-hover:text-[#1E1D19] transition-colors">
                  <span>and more certifications</span>
                  <ArrowRight className="w-3 h-3 text-[#C88A32] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

            </div>

          </motion.div>

        </div>
      </section>

      {/* =================================================== */}
      {/* 5. PERSONAL POSITIONING                             */}
      {/* =================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 pb-12 sm:pb-16 md:pb-20 text-center">
        <div className="py-6 sm:py-8 px-4 sm:px-10 rounded-2xl bg-[#EBE4D6]/40 border border-[#DDD6C9]/80">
          <h3 className="text-lg sm:text-2xl font-bold text-[#1E1D19] tracking-tight mb-2">
            &ldquo;I don&apos;t chase technology for its own sake.&rdquo;
          </h3>
          <p className="text-xs sm:text-base text-[#625E54] leading-relaxed max-w-xl mx-auto">
            I use technology when it makes a process clearer, faster, more capable or easier to operate.
          </p>
        </div>
      </section>

      {/* =================================================== */}
      {/* 6. CTA CARD (IMMEDIATELY BEFORE EXISTING FOOTER)    */}
      {/* =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-20 md:pb-24">
        <div className="rounded-3xl bg-[#FBF8F1] border border-[#DDD6C9] p-6 sm:p-10 md:p-12 shadow-[0_10px_35px_rgba(45,40,30,0.05)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 text-left">
          
          {/* Left: Icon & Headline */}
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D5CDBC] bg-[#EEE8DC] flex items-center justify-center flex-shrink-0 text-[#C88A32] shadow-2xs">
              <Send className="w-5 h-5 sm:w-6 sm:h-6 -rotate-12 translate-x-0.5" />
            </div>

            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-[#1E1D19] tracking-tight mb-1.5 sm:mb-2">
                Have a problem worth solving?
              </h3>
              <p className="text-xs sm:text-base text-[#686358] leading-relaxed max-w-xl">
                Let&apos;s build a practical system that creates real impact.
              </p>
            </div>
          </div>

          {/* Right: CTA Button */}
          <button
            onClick={onOpenInquiry}
            className="min-h-[48px] group w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#22211E] hover:bg-[#2C2B27] text-white font-medium text-sm sm:text-base transition-all duration-200 shadow-xs cursor-pointer active:scale-95 flex-shrink-0"
          >
            <span>Let&apos;s talk</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      </section>

    </div>
  );
}
