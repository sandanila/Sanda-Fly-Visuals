import React, { useState } from 'react';
import { Currency, PackageTier } from './types';
import { PRICING_PACKAGES } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowreelModal } from './components/ShowreelModal';
import { GearShowcase } from './components/GearShowcase';
import { PortfolioGallery } from './components/PortfolioGallery';
import { PricingCalculator } from './components/PricingCalculator';
import { BookingSection } from './components/BookingSection';
import { SimulatorModal } from './components/SimulatorModal';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('LKR');
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageTier | null>(PRICING_PACKAGES[1]); // Default to popular drone pack
  const [customQuoteData, setCustomQuoteData] = useState<{
    durationHours: number;
    droneFlights: number;
    reelsCount: number;
    includeMasterFilm: boolean;
    express24h: boolean;
    includeRawFootage: boolean;
    totalLKR: number;
    totalUSD: number;
  } | null>(null);
  const [prefilledNotes, setPrefilledNotes] = useState('');

  const scrollToBooking = () => {
    const bookingEl = document.getElementById('booking-section');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: PackageTier) => {
    setSelectedPackage(pkg);
    setCustomQuoteData(null);
    setPrefilledNotes(`Selected Package: ${pkg.name} (${pkg.duration})`);
    scrollToBooking();
  };

  const handleApplyCustomQuote = (quote: {
    durationHours: number;
    droneFlights: number;
    reelsCount: number;
    includeMasterFilm: boolean;
    express24h: boolean;
    includeRawFootage: boolean;
    totalLKR: number;
    totalUSD: number;
  }) => {
    setCustomQuoteData(quote);
    setSelectedPackage(null);
    setPrefilledNotes(
      `Custom Shoot Kit: ${quote.durationHours} Hours, ${quote.droneFlights} Drone Flights, ${quote.reelsCount} Vertical Reels${
        quote.includeMasterFilm ? ', 16:9 Master Film' : ''
      }${quote.express24h ? ', 24h Express Turnaround' : ''}`
    );
    scrollToBooking();
  };

  const handleBookGear = (gearName: string) => {
    setPrefilledNotes(`Interested in shoot prioritizing: ${gearName}`);
    scrollToBooking();
  };

  const handleBookProjectStyle = (projectTitle?: string) => {
    if (projectTitle) {
      setPrefilledNotes(`I want a similar shoot style to: "${projectTitle}"`);
    }
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Frosted Glass Ambient Blur Orbs */}
      <div className="fixed top-[-150px] left-[-150px] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none z-0 animate-float-glow" />
      <div className="fixed top-[40%] right-[-150px] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none z-0 animate-float-glow" style={{ animationDelay: '3s' }} />
      <div className="fixed bottom-[-100px] left-[20%] w-[550px] h-[550px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none z-0 animate-float-glow" style={{ animationDelay: '5s' }} />

      {/* Fixed Navbar with currency switcher & Quick Actions */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        onOpenBooking={scrollToBooking}
        onOpenSimulator={() => setSimulatorOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* Cinematic Hero */}
        <Hero
          onOpenShowreel={() => setShowreelOpen(true)}
          onOpenBooking={scrollToBooking}
          onOpenSimulator={() => setSimulatorOpen(true)}
        />

        {/* Gear & Technology Breakdown */}
        <GearShowcase
          onOpenSimulator={() => setSimulatorOpen(true)}
          onBookGear={handleBookGear}
        />

        {/* Selected Masterworks & Video Portfolio */}
        <PortfolioGallery
          onBookShoot={handleBookProjectStyle}
        />

        {/* Pricing Packages & Interactive Custom Calculator */}
        <PricingCalculator
          currency={currency}
          onSelectPackage={handleSelectPackage}
          onApplyCustomQuote={handleApplyCustomQuote}
        />

        {/* Client Testimonials & Stats */}
        <Testimonials />

        {/* Direct Booking & WhatsApp Generator Form */}
        <BookingSection
          currency={currency}
          selectedPackage={selectedPackage}
          customQuoteData={customQuoteData}
          prefilledNotes={prefilledNotes}
        />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={scrollToBooking} />

      {/* Showreel Video Player Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        onBookNow={() => {
          setShowreelOpen(false);
          scrollToBooking();
        }}
      />

      {/* Interactive Drone & Gimbal Viewfinder Simulator Modal */}
      <SimulatorModal
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
        onBookNow={() => {
          setSimulatorOpen(false);
          scrollToBooking();
        }}
      />
    </div>
  );
}
