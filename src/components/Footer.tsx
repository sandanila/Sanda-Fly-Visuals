import React from 'react';
import { Phone, Mail, MapPin, Instagram, Youtube, MessageSquare, ArrowUp, Sparkles, User, Facebook } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/10 relative overflow-hidden">
      {/* Top Banner / Call To Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-white/10">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
          {/* Subtle glow orb */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-2 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-bold tracking-wider uppercase border border-blue-400/30 mb-1">
              <img src="/logo.jpg" alt="Logo" className="w-5 h-5 object-contain rounded-full" />
              <span>Sanda Fly Visuals • Sandanila Godakanda</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to elevate your visual presence with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">4K Drone & Smooth Gimbal</span> magic?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Book your session with Sandanila Godakanda today. Fast 24-48h turnaround, transparent pricing, and world-class aerial & handheld cinematic capture across Sri Lanka.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto relative z-10">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-blue-50 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-102"
            >
              <img src="/logo.jpg" alt="Logo" className="w-4 h-4 object-contain rounded-full" />
              <span>Book Your Shoot</span>
            </button>
            <a
              href="https://wa.me/94781852852?text=Hi%20Sandanila!%20I'm%20ready%20to%20book%20a%20shoot%20with%20Sanda%20Fly%20Visuals."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer backdrop-blur-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us (078 185 2852)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-white/10 bg-white/5 p-1 shadow-[0_12px_30px_rgba(34,211,238,0.08)] backdrop-blur-sm flex-shrink-0">
                <img
                  src="/logo.jpg"
                  alt="Sanda Fly Visuals logo"
                  className="h-10 w-10 object-contain rounded-full"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  SANDA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">FLY</span> VISUALS
                </span>
                <p className="text-[11px] text-slate-400 font-medium">by Sandanila Godakanda</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Sri Lanka’s premier 4K Drone Aerial & 3-Axis Mobile Gimbal videography production. Specializing in high-energy social media reels, luxury hospitality tours, destination pre-shoots, and commercial campaigns.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/sanda.g1223?igsi=a3A0dGhiczEwbmxx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-colors backdrop-blur-md"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1Bzydiu2ZV/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-colors backdrop-blur-md"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@sandaflyvisuals?si=Vi6AVyUZzVf6V2YG"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-colors backdrop-blur-md"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/94781852852"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-colors backdrop-blur-md"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#gear" className="hover:text-blue-400 transition-colors">4K Drone Aerial Sweeps</a></li>
              <li><a href="#gear" className="hover:text-blue-400 transition-colors">Phone Gimbal 9:16 Viral Reels</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Weddings & Pre-Shoot Stories</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Luxury Hotel & Villa Walkthroughs</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Brand Commercials & Drops</a></li>
            </ul>
          </div>

          {/* Coverage Locations */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Coverage Locations
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-blue-400" /> Colombo & Western Province</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-blue-400" /> Galle, Mirissa & South Coast</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-blue-400" /> Kandy & Central Highlands</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-blue-400" /> Ella, Nuwara Eliya & Sigiriya</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-blue-400" /> Islandwide Destination Shoots</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <User className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-semibold text-white">Sandanila Godakanda</span>
              </div>
              <a href="tel:0781852852" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors font-mono">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>078 185 2852 / +94 78 185 2852</span>
              </a>
              <a href="mailto:sandanila@sandaflyvisuals.com" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>sandanila@sandaflyvisuals.com</span>
              </a>
              <p className="text-[11px] text-slate-500 font-mono pt-1">
                Mon - Sun: 7:00 AM - 9:00 PM (IST)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sanda Fly Visuals. Directed by Sandanila Godakanda. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating Quick WhatsApp Widget at bottom right */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/94781852852?text=Hi%20Sandanila!%20I'm%20interested%20in%20a%20Drone%20and%20Gimbal%20videography%20shoot%20with%20Sanda%20Fly%20Visuals."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-2xl shadow-emerald-500/30 transition-all hover:scale-105 backdrop-blur-md"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">WhatsApp Sandanila (078 185 2852)</span>
          <span className="sm:hidden">WhatsApp (0781852852)</span>
        </a>
      </div>
    </footer>
  );
};

