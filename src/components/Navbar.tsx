import React, { useState, useEffect } from 'react';
import { Camera, Video, Navigation, Phone, MessageSquare, Menu, X, Sparkles, Sliders } from 'lucide-react';
import { Currency } from '../types';

interface NavbarProps {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  onOpenBooking: () => void;
  onOpenSimulator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  setCurrency,
  onOpenBooking,
  onOpenSimulator
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Showreel', href: '#showreel' },
    { name: 'Gear & Tech', href: '#gear' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Packages & Quote', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/75 backdrop-blur-xl border-b border-white/10 shadow-[0_20px_50px_rgba(2,6,23,0.65)] py-3'
          : 'bg-slate-950/40 backdrop-blur-xl border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 xl:px-10 flex items-center justify-between gap-5 lg:gap-7">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group shrink-0 pr-2 xl:pr-4">
          <div className="rounded-full border border-white/10 bg-white/5 p-1.5 shadow-[0_12px_30px_rgba(34,211,238,0.08)] backdrop-blur-sm">
            <img
              src="/logo.jpg"
              alt="Sanda Fly Visuals logo"
              className="h-[46px] sm:h-[48px] w-auto object-contain rounded-full"
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center flex-1 gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[0.72rem] font-medium tracking-[0.16em] uppercase text-slate-300 hover:text-white transition-colors duration-200 relative py-1.5 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & CTA */}
        <div className="hidden md:flex items-center gap-3 xl:gap-4 shrink-0">
          {/* Simulator Button */}
          <button
            id="nav-simulator-btn"
            onClick={onOpenSimulator}
            className="flex items-center gap-1.5 text-[0.68rem] font-semibold tracking-[0.14em] uppercase px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:text-white"
            title="Experience virtual Drone & Gimbal viewfinder"
          >
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>Live HUD Sim</span>
          </button>

          {/* Currency Toggle */}
          <div className="flex items-center p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-[0.68rem] font-medium tracking-[0.14em] uppercase shadow-inner shadow-black/10">
            <button
              id="currency-lkr-btn"
              onClick={() => setCurrency('LKR')}
              className={`px-2.75 py-1.5 rounded-full transition-all duration-200 ${
                currency === 'LKR'
                  ? 'bg-white text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              LKR
            </button>
            <button
              id="currency-usd-btn"
              onClick={() => setCurrency('USD')}
              className={`px-2.75 py-1.5 rounded-full transition-all duration-200 ${
                currency === 'USD'
                  ? 'bg-white text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              USD
            </button>
          </div>

          {/* Direct WhatsApp Action */}
          <a
            id="nav-whatsapp-btn"
            href="https://wa.me/94781852852?text=Hi%20Sandanila!%20I'm%20interested%20in%20booking%20a%20Drone%20/%20Gimbal%20videography%20shoot%20with%20Sanda%20Fly%20Visuals."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[0.68rem] font-semibold tracking-[0.14em] uppercase px-3.5 py-2 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-200 border border-cyan-400/25 backdrop-blur-sm transition-all duration-200 hover:scale-[1.02]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-cyan-300" />
            <span>WhatsApp</span>
          </a>

          {/* Primary Book Shoot Button */}
          <button
            id="nav-book-now-btn"
            onClick={onOpenBooking}
            className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] px-4.5 py-2.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 shadow-[0_12px_28px_rgba(15,118,110,0.22)] transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Currency Toggle for mobile */}
          <button
            id="mobile-currency-btn"
            onClick={() => setCurrency(currency === 'LKR' ? 'USD' : 'LKR')}
            className="text-xs font-bold px-2.5 py-1 bg-white/10 border border-white/15 rounded-full text-blue-300 backdrop-blur-md"
          >
            {currency}
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 text-slate-300 border border-white/10 hover:text-white backdrop-blur-md"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/90 border-b border-white/10 px-6 py-5 mt-3 space-y-4 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-blue-400 py-1 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSimulator();
              }}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-full bg-white/5 text-slate-200 border border-white/10 backdrop-blur-md"
            >
              <Sliders className="w-4 h-4 text-blue-400" />
              <span>Interactive Drone/Gimbal HUD Simulator</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider py-3 rounded-full bg-white text-slate-950 shadow-xl shadow-blue-500/10"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Book Your Shoot & Get Quote</span>
            </button>
            <a
              href="https://wa.me/94781852852?text=Hi%20Sandanila!%20I'd%20like%20to%20inquire%20about%20a%20video%20shoot%20with%20Sanda%20Fly%20Visuals."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/30 backdrop-blur-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat Direct on WhatsApp (078 185 2852)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
