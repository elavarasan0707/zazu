import React, { useState } from 'react';
import { servicesData } from '../data/agencyData';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, Edit2, MessageCircle } from 'lucide-react';
import { AgencyContactConfig } from '../types';

interface ContactSectionProps {
  agencyConfig: AgencyContactConfig;
  selectedServicePreload?: string;
  onOpenCustomizer: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  agencyConfig,
  selectedServicePreload = '',
  onOpenCustomizer
}) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    serviceRequired: selectedServicePreload || 'Digital Marketing',
    monthlyBudget: '$5,000 - $15,000 / mo',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if preloaded service changes
  React.useEffect(() => {
    if (selectedServicePreload) {
      setFormData((prev) => ({ ...prev, serviceRequired: selectedServicePreload }));
    }
  }, [selectedServicePreload]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const budgetOptions = [
    '< $5,000 / month (Foundation)',
    '$5,000 - $15,000 / month (Growth)',
    '$15,000 - $50,000 / month (Scale)',
    '$50,000+ / month (Enterprise)'
  ];

  return (
    <section id="contact" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5C542]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono-data tracking-widest uppercase text-[#FFD966] mb-2">
            <span>START A DIALOGUE</span>
            <span aria-hidden="true">/</span>
            <span>PROPOSAL & INQUIRY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-display font-bold tracking-tight text-white">
            LET’S DISCUSS YOUR <span className="gold-gradient-text">GROWTH TRAJECTORY</span>
          </h2>

          <p className="mt-2.5 text-[#A0A0A0] text-xs sm:text-sm leading-relaxed">
            Ready to turn digital attention into qualified pipeline and revenue? Submit your project parameters below or connect directly through our executive channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Agency Channels & Placeholders (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#111111] border border-[#222222] shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Direct Agency Channels
                </h3>
                <button
                  onClick={onOpenCustomizer}
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#FFD966] hover:underline"
                  title="Customize contact details"
                >
                  <Edit2 className="w-3 h-3" />
                  <span>Edit Placeholders</span>
                </button>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-[#F5C542] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono-data text-[#A0A0A0] block">
                    Email: [ADD EMAIL]
                  </span>
                  <a
                    href={`mailto:${agencyConfig.email}`}
                    className="text-sm font-semibold text-white hover:text-[#FFD966] transition-colors break-all"
                  >
                    {agencyConfig.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-[#F5C542] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono-data text-[#A0A0A0] block">
                    Phone: [ADD PHONE]
                  </span>
                  <a
                    href={`tel:${agencyConfig.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-sm font-semibold text-white hover:text-[#FFD966] transition-colors"
                  >
                    {agencyConfig.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono-data text-[#A0A0A0] block">
                    WhatsApp: [ADD WHATSAPP]
                  </span>
                  <a
                    href={`https://wa.me/${agencyConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-white hover:text-[#25D366] transition-colors"
                  >
                    {agencyConfig.whatsapp}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-[#F5C542] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono-data text-[#A0A0A0] block">
                    Location: [ADD LOCATION]
                  </span>
                  <span className="text-sm text-[#D4D4D4] leading-relaxed block">
                    {agencyConfig.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Response Time Guarantee Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#161616] to-[#0F0F0F] border border-[#F5C542]/20">
              <span className="text-xs font-mono-data text-[#FFD966] uppercase block mb-1">
                Priority Turnaround Protocol
              </span>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                All inquiries undergo initial scope and competitor analysis within 24 business hours. You receive a direct executive briefing, not generic marketing spam.
              </p>
            </div>

          </div>

          {/* Right Column: Lead Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-[#222222] shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#F5C542]/10 border-2 border-[#F5C542] flex items-center justify-center text-[#F5C542] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Enquiry Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-[#A0A0A0] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span> from <span className="text-[#FFD966] font-semibold">{formData.businessName || 'your company'}</span>. Our senior growth team is reviewing your requirements and will reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        businessName: '',
                        email: '',
                        phone: '',
                        serviceRequired: 'Digital Marketing',
                        monthlyBudget: '$5,000 - $15,000 / mo',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#222222] hover:bg-[#333333] text-xs font-semibold text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  {/* Row 1: Name & Business */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] text-[#A0A0A0] uppercase font-mono-data block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Johnathan Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-[#F5C542] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-[#A0A0A0] uppercase font-mono-data block mb-1.5">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vance Luxury Group"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full p-3 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-[#F5C542] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] text-[#A0A0A0] uppercase font-mono-data block mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@vancegroup.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-[#F5C542] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-[#A0A0A0] uppercase font-mono-data block mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-9000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-[#F5C542] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Required & Monthly Marketing Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] text-[#A0A0A0] uppercase font-mono-data block mb-1.5">
                        Service Required *
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full p-3 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-[#F5C542]"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] text-[#A0A0A0] uppercase font-mono-data block mb-1.5">
                        Monthly Marketing Budget *
                      </label>
                      <select
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                        className="w-full p-3 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-[#F5C542]"
                      >
                        {budgetOptions.map((opt, idx) => (
                          <option key={idx} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="text-[11px] text-[#A0A0A0] uppercase font-mono-data block mb-1.5">
                      Project Objective / Target Milestones *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Outline your current challenges, acquisition targets, timeline, or key objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-[#F5C542] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-8 rounded-xl font-bold text-xs bg-gradient-to-r from-[#F5C542] via-[#FFD966] to-[#F5C542] text-[#080808] shadow-[0_0_25px_rgba(245,197,66,0.35)] hover:shadow-[0_0_35px_rgba(245,197,66,0.55)] transition-all flex items-center justify-center gap-2 group hover:scale-[1.01]"
                    >
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      <span>{isSubmitting ? 'DISPATCHING BRIEF...' : 'SEND ENQUIRY'}</span>
                    </button>
                    <span className="text-[10px] text-[#777777] text-center block mt-2">
                      Strict non-disclosure confidentiality guaranteed. No data shared.
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
