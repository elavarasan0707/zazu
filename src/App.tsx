/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesStrip } from './components/ServicesStrip';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConsultationCTA } from './components/ConsultationCTA';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AgencyConfigModal } from './components/AgencyConfigModal';
import { QuoteModal } from './components/QuoteModal';
import { initialAgencyConfig } from './data/agencyData';
import { AgencyContactConfig } from './types';

export default function App() {
  // Agency Contact Details stored in state & synced to localStorage
  const [agencyConfig, setAgencyConfig] = useState<AgencyContactConfig>(() => {
    const saved = localStorage.getItem('zazu_agency_config');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialAgencyConfig;
      }
    }
    return initialAgencyConfig;
  });

  // Modal controls
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preloadedService, setPreloadedService] = useState('Digital Marketing');

  const handleSaveConfig = (updated: AgencyContactConfig) => {
    setAgencyConfig(updated);
    localStorage.setItem('zazu_agency_config', JSON.stringify(updated));
  };

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPreloadedService(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-[#F5C542]/30 selection:text-[#FFD966] font-sans antialiased overflow-x-hidden">
      
      {/* 1. Sticky Navigation */}
      <Navbar
        agencyConfig={agencyConfig}
        onOpenBooking={() => scrollToSection('booking')}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
        onOpenCustomizer={() => setIsConfigModalOpen(true)}
      />

      {/* 2. Hero Section with 3D Canvas Visual */}
      <Hero
        onBookConsultation={() => scrollToSection('booking')}
        onExploreServices={() => scrollToSection('services')}
      />

      {/* 3. Services Ticker Strip */}
      <ServicesStrip />

      {/* 4. Services Section (10 interactive cards) */}
      <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

      {/* 5. Why Choose ZAZU */}
      <WhyChooseUs />

      {/* 6. Process (6-Step Animated Timeline) */}
      <ProcessSection />

      {/* 7. Portfolio (Case Study Blueprints) */}
      <PortfolioSection onRequestSimilarProject={handleSelectServiceForInquiry} />

      {/* 8. Testimonials (3 Editable Cards) */}
      <TestimonialsSection />

      {/* 9. Free Consultation CTA */}
      <ConsultationCTA
        onBookConsultation={() => scrollToSection('booking')}
        onGetQuote={() => setIsQuoteModalOpen(true)}
      />

      {/* 13. Consultation Booking Section */}
      <BookingSection agencyConfig={agencyConfig} />

      {/* 14. Contact Section & Lead Form */}
      <ContactSection
        agencyConfig={agencyConfig}
        selectedServicePreload={preloadedService}
        onOpenCustomizer={() => setIsConfigModalOpen(true)}
      />

      {/* 15. Footer */}
      <Footer
        agencyConfig={agencyConfig}
        onOpenBooking={() => scrollToSection('booking')}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />

      {/* Floating WhatsApp Quick-Chat */}
      <FloatingWhatsApp agencyConfig={agencyConfig} />

      {/* Agency Details Customizer Modal */}
      <AgencyConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        config={agencyConfig}
        onSave={handleSaveConfig}
      />

      {/* Quick Quote Estimation Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onRedirectToContact={handleSelectServiceForInquiry}
      />

    </div>
  );
}
