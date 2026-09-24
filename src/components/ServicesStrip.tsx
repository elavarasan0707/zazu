import React from 'react';

export const ServicesStrip: React.FC = () => {
  const items = [
    'DIGITAL MARKETING',
    'SOCIAL MEDIA MARKETING',
    'SEARCH ENGINE OPTIMIZATION',
    'GOOGLE ADS (PPC)',
    'META ADS',
    'CONTENT CREATION',
    'BRANDING & IDENTITY',
    'LEAD GENERATION',
    'VIDEO MARKETING',
    'HIGH-CONVERTING LANDING PAGES',
    'OMNICHANNEL STRATEGY',
    'CONVERSION RATE OPTIMIZATION'
  ];

  return (
    <div className="w-full bg-[#111111] border-y border-[#222222] py-4 overflow-hidden relative select-none">
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
        {/* Render repeated list for continuous seamless horizontal flow */}
        {[...items, ...items].map((service, idx) => (
          <div key={idx} className="inline-flex items-center gap-8">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#E5E5E5] hover:text-[#F5C542] transition-colors">
              {service}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C542]" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};
