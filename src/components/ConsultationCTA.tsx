import React from 'react';
import { ArrowUpRight, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';

interface ConsultationCTAProps {
  onBookConsultation: () => void;
  onGetQuote: () => void;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({
  onBookConsultation,
  onGetQuote
}) => {
  return (
    <section className="py-20 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Luxury CTA Container */}
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-[#141414] via-[#0F0F0F] to-[#0A0A0A] border border-[#F5C542]/40 shadow-[0_20px_70px_rgba(245,197,66,0.15)] overflow-hidden">
          
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5C542]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFD966]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            
            {/* Top Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5C542]/10 border border-[#F5C542]/30 text-[11px] font-mono-data uppercase text-[#FFD966]">
              <Sparkles className="w-3.5 h-3.5 text-[#F5C542]" />
              <span>COMMERCIAL ACCELERATION SPRINT</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-white leading-tight">
              READY TO GROW YOUR{' '}
              <span className="gold-gradient-text block sm:inline">
                BUSINESS ONLINE?
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xs sm:text-sm md:text-base text-[#D4D4D4] max-w-xl mx-auto font-normal leading-relaxed">
              “Let’s build a digital strategy that turns attention into leads and leads into growth.”
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={onBookConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#F5C542] via-[#FFD966] to-[#F5C542] text-[#080808] shadow-[0_0_20px_rgba(245,197,66,0.35)] hover:shadow-[0_0_25px_rgba(245,197,66,0.5)] transition-all duration-300 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD966]"
              >
                <span>BOOK A FREE CONSULTATION</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onGetQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs border border-[#F5C542]/40 text-[#FFD966] hover:bg-[#F5C542]/10 transition-colors bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542]"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>GET A FREE QUOTE</span>
              </button>
            </div>

            {/* Trust Marks */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A0A0A0]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5C542]" />
                Zero-Obligation 30-Min Strategy Call
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5C542]" />
                Custom Growth Opportunity Audit
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5C542]" />
                Direct Senior Partner Consultation
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
