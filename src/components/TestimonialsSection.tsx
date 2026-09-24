import React, { useState } from 'react';
import { testimonialsData as defaultTestimonials } from '../data/agencyData';
import { TestimonialItem } from '../types';
import { Quote, Star, Edit3, Check, RotateCcw } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    const saved = localStorage.getItem('zazu_testimonials');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultTestimonials;
      }
    }
    return defaultTestimonials;
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<TestimonialItem>>({});

  const handleStartEdit = (t: TestimonialItem) => {
    setEditingId(t.id);
    setEditForm({ ...t });
  };

  const handleSaveEdit = () => {
    if (!editingId) return;
    const updated = testimonials.map((t) => (t.id === editingId ? ({ ...t, ...editForm } as TestimonialItem) : t));
    setTestimonials(updated);
    localStorage.setItem('zazu_testimonials', JSON.stringify(updated));
    setEditingId(null);
  };

  const handleReset = () => {
    setTestimonials(defaultTestimonials);
    localStorage.removeItem('zazu_testimonials');
    setEditingId(null);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono-data tracking-widest uppercase text-[#FFD966] mb-2">
              <span>EXECUTIVE ENDORSEMENTS</span>
              <span aria-hidden="true">/</span>
              <span>CLIENT EXPERIENCES</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-display font-bold tracking-tight text-white">
              WHAT FOUNDERS & LEADERS <span className="gold-gradient-text">EXPERIENCE</span>
            </h2>

            <p className="mt-2.5 text-[#A0A0A0] text-xs sm:text-sm leading-relaxed">
              We cultivate close, high-accountability partnerships with our clients. Review editable representative feedback and partner reflections below.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#888888] font-mono-data">Editable Testimonial Suite</span>
            <button
              onClick={handleReset}
              title="Reset to default placeholders"
              className="p-1.5 rounded-lg bg-[#111111] border border-white/10 text-[#A0A0A0] hover:text-white hover:border-[#F5C542]/40 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Editable Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item) => {
            const isEditing = editingId === item.id;

            return (
              <div
                key={item.id}
                className="relative rounded-xl p-5 bg-[#111111] border border-[#222222] hover:border-[#F5C542]/40 transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                {/* Header Quote & Edit Trigger */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#F5C542]/10 border border-[#F5C542]/30 flex items-center justify-center text-[#F5C542]">
                    <Quote className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5C542] text-[#F5C542]" />
                    ))}
                    <button
                      onClick={() => handleStartEdit(item)}
                      className="ml-2 p-1.5 rounded bg-black/40 text-[#A0A0A0] hover:text-[#FFD966] opacity-40 group-hover:opacity-100 transition-opacity"
                      title="Edit this testimonial"
                    >
                      <Edit3 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Content Body */}
                <div className="space-y-4">
                  {isEditing ? (
                    <div className="space-y-3">
                      <div>
                        <label className="text-[10px] text-[#A0A0A0] uppercase block">Testimonial Quote</label>
                        <textarea
                          rows={4}
                          value={editForm.testimonial || ''}
                          onChange={(e) => setEditForm({ ...editForm, testimonial: e.target.value })}
                          className="w-full text-xs p-2 rounded bg-black border border-[#F5C542]/50 text-white focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] text-[#A0A0A0] uppercase block">Client Name</label>
                          <input
                            type="text"
                            value={editForm.clientName || ''}
                            onChange={(e) => setEditForm({ ...editForm, clientName: e.target.value })}
                            className="w-full text-xs p-2 rounded bg-black border border-white/20 text-white focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-[#A0A0A0] uppercase block">Business Name</label>
                          <input
                            type="text"
                            value={editForm.businessName || ''}
                            onChange={(e) => setEditForm({ ...editForm, businessName: e.target.value })}
                            className="w-full text-xs p-2 rounded bg-black border border-white/20 text-white focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={handleSaveEdit}
                          className="px-3 py-1.5 rounded bg-[#F5C542] text-[#080808] font-bold text-xs flex items-center gap-1"
                        >
                          <Check className="w-3.5 h-3.5" />
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-3 py-1.5 rounded bg-white/10 text-white text-xs"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm text-[#D4D4D4] leading-relaxed italic">
                        "{item.testimonial}"
                      </p>
                      <div className="text-[11px] font-mono-data text-[#FFD966]">
                        {item.highlight}
                      </div>
                    </>
                  )}
                </div>

                {/* Footer Client Credentials */}
                {!isEditing && (
                  <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#222222] to-[#111111] border border-[#F5C542]/30 flex items-center justify-center font-bold text-xs text-[#FFD966]">
                      {item.avatarInitials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {item.clientName}
                      </h4>
                      <p className="text-xs text-[#A0A0A0]">
                        {item.role}, <span className="text-[#FFD966]">{item.businessName}</span>
                      </p>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
