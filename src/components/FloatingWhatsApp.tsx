import React, { useState } from 'react';
import { MessageCircle, X, Send, ArrowUpRight } from 'lucide-react';
import { AgencyContactConfig } from '../types';
import { ZazuLogo } from './ZazuLogo';

interface FloatingWhatsAppProps {
  agencyConfig: AgencyContactConfig;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ agencyConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('Hi ZAZU Digital Media, I want to discuss growing our digital presence and generating quality leads.');

  const cleanNumber = agencyConfig.whatsapp.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(customMsg)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Popup Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-2xl bg-[#111111] border border-[#F5C542]/40 shadow-2xl p-5 space-y-4 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <ZazuLogo variant="official" size="sm" showSubtitle={false} linkToHome={false} />
              <div className="leading-tight">
                <span className="text-xs font-bold text-white block">ZAZU Digital Concierge</span>
                <span className="text-[10px] text-[#25D366] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Online • Quick Response
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-[#A0A0A0] hover:text-white"
              aria-label="Close WhatsApp Chat Window"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-xs text-[#D4D4D4] leading-relaxed">
            Welcome to <strong className="text-white">ZAZU DIGITAL MEDIA</strong>. Ready to turn attention into leads and leads into growth? Start a direct WhatsApp conversation with our growth strategists.
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono-data text-[#A0A0A0] uppercase block">
              Your Message:
            </label>
            <textarea
              rows={3}
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg bg-black border border-white/20 text-white focus:outline-none focus:border-[#F5C542]"
            />
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center gap-2 shadow-lg transition-colors"
          >
            <span>Open in WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#111111] border border-[#F5C542]/50 text-white shadow-[0_4px_25px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(245,197,66,0.35)] transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542]"
        aria-label="Chat on WhatsApp with ZAZU"
      >
        <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-md">
          <MessageCircle className="w-4 h-4" />
        </div>
        <span className="text-xs font-bold tracking-wide text-white group-hover:text-[#FFD966] transition-colors pr-1">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
};
