import React, { useState } from 'react';
import { caseStudiesData } from '../data/agencyData';
import { CaseStudyItem } from '../types';
import { ArrowUpRight, CheckCircle, X, ExternalLink } from 'lucide-react';

interface PortfolioSectionProps {
  onRequestSimilarProject: (projectCategory: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onRequestSimilarProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudyItem | null>(null);

  const categories = [
    'All',
    'Paid Advertising',
    'Branding',
    'SEO',
    'Social Media',
    'Content Creation',
    'Lead Generation'
  ];

  const filteredStudies =
    selectedCategory === 'All'
      ? caseStudiesData
      : caseStudiesData.filter((c) => c.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono-data tracking-widest uppercase text-[#FFD966] mb-2">
              <span>PROVEN BLUEPRINTS</span>
              <span aria-hidden="true">/</span>
              <span>CASE STUDY FRAMEWORKS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-display font-bold tracking-tight text-white">
              STRATEGIC <span className="gold-gradient-text">CASE STUDIES</span>
            </h2>

            <p className="mt-2.5 text-[#A0A0A0] text-xs sm:text-sm leading-relaxed">
              Explore our structured frameworks across six core marketing disciplines. Representative project blueprints demonstrate our methodology, tactical execution, and commercial results.
            </p>
          </div>

          <div className="text-[11px] font-mono-data text-[#888888] bg-[#111111] px-3 py-1.5 rounded-lg border border-white/5">
            Representative Frameworks • Sample Projects
          </div>
        </div>

        {/* Filter Bar (Segmented button controls with functional handlers) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none ${
                selectedCategory === cat
                  ? 'bg-[#F5C542] text-[#080808] shadow-[0_0_15px_rgba(245,197,66,0.3)]'
                  : 'bg-[#111111] text-[#A0A0A0] hover:text-white border border-[#222222]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setActiveModalStudy(study)}
              className="group rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#F5C542]/50 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement?.querySelector('.study-fallback');
                      if (fallback) (fallback as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="study-fallback hidden absolute inset-0 bg-neutral-900 items-center justify-center p-6 text-center text-xs text-[#A0A0A0]">
                    <span>{study.title}</span>
                  </div>

                  {/* Category Pill Tag (Unboxed in text according to zero-pill rule) */}
                  <div className="absolute top-3 left-3 bg-[#080808]/85 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-mono-data font-semibold text-[#FFD966] border border-white/10">
                    {study.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[11px] text-[#A0A0A0] block font-mono-data mb-1">
                    {study.clientType}
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-[#FFD966] transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-xs text-[#A0A0A0] line-clamp-3 leading-relaxed mb-4">
                    {study.challenge}
                  </p>

                  {/* Sample Metrics Badges */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5">
                    {study.sampleMetrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-2 rounded bg-black/40 border border-white/5 text-center">
                        <span className="text-[9px] text-[#A0A0A0] block truncate">{metric.label}</span>
                        <span className="text-xs font-mono-data font-bold text-white">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Affordance */}
              <div className="px-6 py-4 border-t border-white/5 bg-black/20 flex items-center justify-between text-xs font-semibold text-[#FFD966] group-hover:text-white">
                <span>View Full Strategic Blueprint</span>
                <ArrowUpRight className="w-4 h-4 text-[#F5C542] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Full Detail Modal */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111111] border border-[#F5C542]/40 p-6 sm:p-8 shadow-2xl space-y-6">
            
            <button
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#A0A0A0] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono-data text-[#FFD966] mb-1">
                <span>REPRESENTATIVE CASE STUDY</span>
                <span>•</span>
                <span>{activeModalStudy.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {activeModalStudy.title}
              </h3>
              <p className="text-xs text-[#A0A0A0] mt-1 font-mono-data">
                Focus: {activeModalStudy.clientType}
              </p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-black/50 border border-white/10">
              {activeModalStudy.sampleMetrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <span className="text-[10px] text-[#A0A0A0] block">{metric.label}</span>
                  <span className="text-lg font-mono-data font-bold text-[#F5C542]">{metric.value}</span>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-4 text-sm text-[#D4D4D4] leading-relaxed">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD966] mb-1">
                  The Strategic Challenge:
                </h4>
                <p className="text-xs sm:text-sm text-[#A0A0A0]">{activeModalStudy.challenge}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD966] mb-1">
                  The ZAZU Architecture:
                </h4>
                <p className="text-xs sm:text-sm text-[#A0A0A0]">{activeModalStudy.solution}</p>
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                Executed Components:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalStudy.deliverables.map((del, dIdx) => (
                  <span
                    key={dIdx}
                    className="px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-xs text-[#E5E5E5] flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#F5C542]" />
                    {del}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  const cat = activeModalStudy.category;
                  setActiveModalStudy(null);
                  onRequestSimilarProject(cat);
                }}
                className="w-full sm:flex-1 py-3 px-5 rounded-xl font-bold text-xs bg-gradient-to-r from-[#F5C542] to-[#FFD966] text-[#080808] flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(245,197,66,0.3)] transition-all"
              >
                <span>REQUEST BLUEPRINT FOR MY BUSINESS</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveModalStudy(null)}
                className="w-full sm:w-auto py-3 px-5 rounded-xl font-semibold text-xs border border-white/10 text-[#A0A0A0] hover:text-white"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
