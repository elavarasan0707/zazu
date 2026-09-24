import React from 'react';
import { ZazuLogo } from './ZazuLogo';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { AgencyContactConfig } from '../types';

interface FooterProps {
  agencyConfig: AgencyContactConfig;
  onOpenBooking: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ agencyConfig, onOpenBooking, onOpenQuote }) => {
  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why ZAZU', href: '#why-us' },
    { label: '6-Step Process', href: '#process' },
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'Client Testimonials', href: '#testimonials' },
    { label: 'Book Strategy Call', href: '#booking' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const serviceCategories = [
    'Digital Marketing Strategy',
    'Social Media Marketing',
    'Search Engine Optimization (SEO)',
    'Google Ads (PPC)',
    'Meta Ads (FB & Instagram)',
    'Content Creation & Video',
    'Luxury Brand Identity',
    'Lead Generation Funnels'
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'X / Twitter', url: 'https://x.com' },
    { name: 'YouTube', url: 'https://youtube.com' }
  ];

  return (
    <footer className="bg-[#050505] border-t border-[#1C1C1C] text-white pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/5">
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <ZazuLogo variant="official" size="lg" />

            <p className="text-sm font-semibold tracking-wide text-[#E5E5E5] pt-2">
              “WE DON’T JUST CREATE CONTENT.<br />
              <span className="text-[#FFD966]">WE CREATE BUSINESS IMPACT.”</span>
            </p>

            <p className="text-xs text-[#A0A0A0] leading-relaxed max-w-sm">
              ZAZU Digital Media helps businesses turn their online presence into real growth through strategy, creativity, technology and digital marketing.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#111111] border border-white/10 text-xs text-[#A0A0A0] hover:text-[#FFD966] hover:border-[#F5C542]/40 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Mirror (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#A0A0A0] hover:text-[#FFD966] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Disciplines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Specializations
            </h4>
            <ul className="space-y-2 text-xs text-[#A0A0A0]">
              {serviceCategories.map((s, idx) => (
                <li key={idx}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Action & Direct Hub (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-[#A0A0A0]">
              <div className="hover:text-white transition-colors break-all">
                {agencyConfig.email}
              </div>
              <div className="hover:text-white transition-colors">
                {agencyConfig.phone}
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-bold bg-[#F5C542] text-[#080808] hover:bg-[#FFD966] transition-colors"
              >
                Book Call
              </button>
              <button
                onClick={onOpenQuote}
                className="w-full py-2 px-3 rounded-lg text-xs font-semibold border border-white/10 text-[#D4D4D4] hover:text-white hover:bg-white/5 transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#777777] gap-4">
          <div>
            © 2026 ZAZU DIGITAL MEDIA. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-[#A0A0A0] transition-colors">Privacy Notice</a>
            <a href="#contact" className="hover:text-[#A0A0A0] transition-colors">Terms of Engagement</a>
            <a href="#contact" className="hover:text-[#A0A0A0] transition-colors">Client Confidentiality</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
