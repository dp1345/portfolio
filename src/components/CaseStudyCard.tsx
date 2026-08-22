import React from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export interface CaseStudyData {
  id: string;
  tag: string;
  title: string;
  founder?: string;
  description: string;
  imageUrl: string;
  status: 'Completed' | 'In Development' | 'In Progress';
  ctaText: string;
  highlightsLabel: string;
  highlights: string[];
  detailedCopy?: string;
}

interface CaseStudyCardProps {
  key?: string;
  study: CaseStudyData;
  index: number;
  onClick: () => void;
}

export function CaseStudyCard({ study, index, onClick }: CaseStudyCardProps) {
  // Alternating card styling pattern adapted for dark obsidian background
  const isElevatedCard = index % 2 === 0;
  const isInDevelopment = study.status === 'In Development' || study.status === 'In Progress';

  return (
    <div
      id={`case-study-${study.id}`}
      onClick={onClick}
      className={`group relative rounded-[26px] p-6 sm:p-7 flex flex-col justify-between items-start text-left cursor-pointer select-none transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 ${
        isElevatedCard
          ? 'bg-[#1C1B18] border border-[#2F2D28] shadow-[0_6px_28px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.6)] hover:border-[#524E44] hover:bg-[#22211D]'
          : 'bg-[#171614] border border-[#2A2823] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)] hover:border-[#524E44] hover:bg-[#1E1D19]'
      }`}
    >
      <div className="w-full flex flex-col">
        
        {/* Top Bar: Category Tag & Status Pill */}
        <div className="w-full flex items-center justify-between gap-2 mb-4">
          <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase border border-[#3A3730] text-[#B8B2A6] group-hover:border-[#C98B35]/60 group-hover:text-[#E8A748] bg-[#24221D] transition-colors duration-300">
            {study.tag}
          </span>

          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold border ${
            isInDevelopment 
              ? 'bg-[#2A2315] border-[#5A451E] text-[#E5A845]' 
              : 'bg-[#162419] border-[#25462C] text-[#7ED496]'
          }`}>
            {isInDevelopment ? (
              <Clock className="w-3 h-3 flex-shrink-0 text-[#E5A845]" />
            ) : (
              <CheckCircle2 className="w-3 h-3 flex-shrink-0 text-[#7ED496]" />
            )}
            <span>{study.status}</span>
          </span>
        </div>

        {/* Circular Image Container */}
        <div className="w-full flex justify-center my-2 mb-5">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden relative border border-[#38352E] group-hover:border-[#C98B35]/70 shadow-[0_8px_24px_rgba(0,0,0,0.4)] bg-[#24231F] flex-shrink-0 transition-all duration-400">
            <img 
              src={study.imageUrl} 
              alt={study.title}
              className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.92] group-hover:brightness-[1] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>

        {/* Title & Founder */}
        <div className="mb-2.5">
          <h3 className="text-xl sm:text-[22px] font-bold text-[#F5F2EB] tracking-tight group-hover:text-[#E8A748] transition-colors duration-300">
            {study.title}
          </h3>
          {study.founder && (
            <p className="text-xs sm:text-sm font-medium text-[#C98B35] mt-0.5">
              {study.founder}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#A8A398] leading-relaxed mb-4 line-clamp-3">
          {study.description}
        </p>

        {/* Highlights / Scope List */}
        <div className="pt-3 border-t border-[#26241F] mb-4">
          <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#8E887C] mb-2">
            {study.highlightsLabel}
          </div>
          <ul className="space-y-1.5">
            {study.highlights.map((highlight, hIdx) => (
              <li key={hIdx} className="text-xs text-[#CBC5B8] flex items-start gap-1.5 leading-snug">
                <span className="text-[#C98B35] flex-shrink-0 mt-0.5">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Understated CTA Link With Right Arrow */}
      <div className="w-full pt-4 border-t border-[#2B2924] flex items-center justify-between text-xs sm:text-sm font-bold tracking-wide text-[#D99A45] group-hover:text-[#F3B964] transition-colors duration-300 mt-auto">
        <span>{study.ctaText}</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5" />
      </div>
    </div>
  );
}

