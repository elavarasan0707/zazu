import React, { useState, useEffect } from 'react';
import { ZazuLogo } from './ZazuLogo';
import { Menu, X, ArrowUpRight, PhoneCall, Calendar } from 'lucide-react';
import { AgencyContactConfig } from '../types';

interface NavbarProps {
  agencyConfig: AgencyContactConfig;
  onOpenBooking: () => void;
  onOpenQuote: () => void;
  onOpenCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  agencyConfig,
  onOpenBooking,
  onOpenQuote,
  onOpenCustomizer
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why ZAZU', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/92 backdrop-blur-md border-b border-[#222222] py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <div className="shrink-0">
            <ZazuLogo variant="official" size="md" />
          </div>

          {/* Zone 2: Navigation Links (Clean text, subtle hover, no pills) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#A0A0A0] hover:text-[#F5C542] transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F5C542] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Single-line controls) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="text-xs font-semibold px-4 py-2.5 rounded-lg border border-[#F5C542]/40 text-[#FFD966] hover:bg-[#F5C542]/10 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542]"
            >
              Get Free Quote
            </button>
            <button
              onClick={onOpenBooking}
              className="group text-xs font-bold px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#F5C542] to-[#FFD966] text-[#080808] hover:shadow-[0_0_20px_rgba(245,197,66,0.4)] transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD966]"
            >
              <span>Book Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="text-xs font-bold px-3 py-1.5 rounded-md bg-[#F5C542] text-[#080808] sm:hidden whitespace-nowrap"
            >
              Book Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#A0A0A0] hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c0c] border-b border-[#222222] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#D4D4D4] hover:text-[#F5C542] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A0A0A0]" />
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg font-bold text-xs bg-gradient-to-r from-[#F5C542] to-[#FFD966] text-[#080808] flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A FREE CONSULTATION</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 rounded-lg font-semibold text-xs border border-[#F5C542]/40 text-[#FFD966] hover:bg-[#F5C542]/10 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>GET A FREE QUOTE</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomizer();
              }}
              className="text-[11px] text-[#A0A0A0] text-center pt-2 hover:text-[#F5C542]"
            >
              Edit Agency Placeholders / Settings
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
