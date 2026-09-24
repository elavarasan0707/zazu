import React from 'react';
import { Target, Lightbulb, Compass, TrendingUp, CheckCircle2 } from 'lucide-react';
import { ZazuLogo } from './ZazuLogo';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: '100% Client Focus',
      description: 'We limit our active client roster to deliver relentless dedication, deep immersion, and direct senior-level strategic execution.',
      icon: Target
    },
    {
      title: 'Strategy Driven',
      description: 'No guesswork or generic templates. Every campaign is engineered from target market analysis, competitive gaps, and unit economics.',
      icon: Compass
    },
    {
      title: 'Creative Execution',
      description: 'World-class aesthetic polish combined with direct-response psychological hooks that captivate audiences and trigger decisive action.',
      icon: Lightbulb
    },
    {
      title: 'Growth Focused',
      description: 'Our metrics are tied directly to your balance sheet: qualified inbound leads, lower acquisition costs, and compounding enterprise value.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#080808] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F5C542]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono-data tracking-widest uppercase text-[#FFD966] mb-2">
            <span>ABOUT ZAZU DIGITAL MEDIA</span>
            <span aria-hidden="true">/</span>
            <span>PURPOSE & PHILOSOPHY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-display font-bold tracking-tight text-white leading-tight">
            WE TURN DIGITAL PRESENCE INTO{' '}
            <span className="gold-gradient-text">BUSINESS GROWTH.</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
            “ZAZU Digital Media helps businesses turn their online presence into real growth through strategy, creativity, technology and digital marketing.”
          </p>
        </div>

        {/* 2-Column Grid: Visual Card & Value Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Showcase: 3D Emblem & Brand Core (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-[#111111] border border-[#222222] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group hover:border-[#F5C542]/50 transition-all duration-300">
              
              {/* Image Frame */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-black/80 border border-white/10 mb-5 flex items-center justify-center p-4">
                <img
                  src="/src/assets/images/zazu_official_logo_1790257041428.jpg"
                  alt="ZAZU Digital Media Official 3D Owl Logo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to vector logo if file missing
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.fallback-logo');
                    if (fallback) (fallback as HTMLElement).style.display = 'flex';
                  }}
                />
                <div className="fallback-logo hidden absolute inset-0 items-center justify-center bg-neutral-950 p-6">
                  <ZazuLogo variant="official" size="xl" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent opacity-40 pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-[#E5E5E5] px-3 py-1.5 rounded-lg bg-[#080808]/85 backdrop-blur-md border border-white/10">
                  <span className="font-semibold text-[#60A5FA]">OFFICIAL BRANDMARK</span>
                  <span className="text-[#A0A0A0]">Vigilant Growth</span>
                </div>
              </div>

              {/* Agency Mission Statement Box */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white">THE ZAZU ADVANTAGE</span>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  We reject cookie-cutter tactics. By aligning strategic positioning, hyper-targeted media distribution, and direct conversion funnels, we help ambitious brands outcompete incumbents and build lasting market power.
                </p>
              </div>

            </div>
          </div>

          {/* 4 Pillars Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#111111]/80 border border-[#222222] hover:border-[#F5C542]/40 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#F5C542] mb-3.5 group-hover:bg-[#F5C542] group-hover:text-[#080808] transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-display font-bold text-white mb-1.5 group-hover:text-[#FFD966] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#A0A0A0] leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-semibold text-[#FFD966]">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Non-Negotiable Agency Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
