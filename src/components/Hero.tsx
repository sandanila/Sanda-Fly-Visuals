import React, { useState, useEffect } from 'react';
import { Play, Sparkles, Sliders, ChevronDown, CheckCircle2, MessageSquare, Flame, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenShowreel: () => void;
  onOpenBooking: () => void;
  onOpenSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenShowreel,
  onOpenBooking,
  onOpenSimulator
}) => {
  const [activeFrame, setActiveFrame] = useState(0);

  // Background frame rotation for cinematic feeling
  const cinematicScenes = [
    {
      img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85',
      title: 'Nine Arch Sunrise Aerial Sweep',
      mode: 'DRONE 4K 60FPS • D-LOG M 10-BIT',
      tag: 'AERIAL ODYSSEY'
    },
    {
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85',
      title: 'Galle Fort Sunset Cinematic Walk',
      mode: 'GIMBAL 3-AXIS • ACTIVETRACK 6.0',
      tag: 'RUN & GUN STORY'
    },
    {
      img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85',
      title: 'Mirissa Coastal Villa One-Take Glide',
      mode: 'DRONE + GIMBAL SEAMLESS COMBO',
      tag: 'LUXURY SHOWCASE'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % cinematicScenes.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [cinematicScenes.length]);

  return (
    <section id="hero-section" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image Carousel with Vignette & Cinema Gradients */}
      {cinematicScenes.map((scene, idx) => (
        <div
          key={scene.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeFrame ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1400ms' }}
        >
          <img
            src={scene.img}
            alt={scene.title}
            className="w-full h-full object-cover object-center brightness-40 contrast-110"
          />
        </div>
      ))}

      {/* Cinematic Dark Overlays and Ambient Light */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/90 pointer-events-none" />

      {/* Subtle Grid Lines to represent camera sensor grid */}
      <div className="absolute inset-0 camera-grid-bg opacity-30 pointer-events-none" />

      {/* Viewfinder Telemetry Overlay (Top & Bottom subtle markers) */}
      <div className="absolute inset-4 sm:inset-8 pointer-events-none border border-white/10 rounded-3xl flex flex-col justify-between p-4 sm:p-6 text-[11px] font-mono text-slate-400">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 font-bold tracking-widest text-[10px] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
              REC
            </span>
            <span className="hidden sm:inline bg-white/5 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md text-slate-300">
              4K UHD 60FPS
            </span>
            <span className="hidden sm:inline bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-400/20 backdrop-blur-md text-blue-300">
              D-LOG M 10-BIT
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <span className="bg-white/5 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md text-cyan-300">
              DRONE BATT 98%
            </span>
            <span className="bg-white/5 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md text-slate-300">
              GIMBAL: 3-AXIS LOCK
            </span>
          </div>
        </div>

        {/* Viewfinder Center Crosshairs */}
        <div className="self-center flex items-center justify-center opacity-25">
          <div className="w-14 h-14 border border-white/40 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
          </div>
        </div>

        {/* Bottom telemetry bar */}
        <div className="flex items-center justify-between text-slate-400 text-[10px]">
          <span className="bg-white/5 border border-white/10 backdrop-blur-md px-3 py-1 rounded-full">
            SCENE: {cinematicScenes[activeFrame].title}
          </span>
          <span className="bg-blue-500/10 border border-blue-400/20 backdrop-blur-md px-3 py-1 rounded-full text-blue-300 font-semibold">
            {cinematicScenes[activeFrame].mode}
          </span>
        </div>
      </div>

      {/* Main Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Frosted Eyebrow Badge */}
        <div className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg shadow-blue-500/10">
          Sanda Fly Visuals • Directed by Sandanila Godakanda
        </div>

        {/* Dynamic Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6">
          Capturing life from a <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
            new height.
          </span>
        </h1>

        {/* Subtitle & Story */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed font-normal">
          Premium 4K drone cinematography and 3-axis phone gimbal videography by <strong className="text-white font-semibold">Sandanila Godakanda</strong>. Bringing buttery smooth motion, breathtaking aerial sweeps, and viral social reels to your brand, weddings, and commercial projects across Sri Lanka.
        </p>

        {/* Frosted Glass Stat & Feature Highlight Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mb-10 text-left">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
              <div className="w-2.5 h-2.5 bg-blue-400 rounded-full" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Active Clients</p>
              <p className="text-base font-bold text-white">120+</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center shrink-0">
              <div className="w-2.5 h-2.5 bg-purple-400 rounded-full" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Projects Done</p>
              <p className="text-base font-bold text-white">450+</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center shrink-0">
              <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Delivery Time</p>
              <p className="text-base font-bold text-white">24-48h</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Quality Rate</p>
              <p className="text-base font-bold text-white">100% 5★</p>
            </div>
          </div>
        </div>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 w-full">
          <button
            id="hero-book-shoot-btn"
            onClick={onOpenBooking}
            className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-slate-950 hover:bg-blue-50 font-bold text-sm uppercase tracking-wider shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <img src="/logo.jpg" alt="Logo" className="w-4 h-4 object-contain rounded-full" />
            <span>Book Your Shoot</span>
          </button>

          <button
            id="hero-watch-reel-btn"
            onClick={onOpenShowreel}
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 backdrop-blur-xl transition-all duration-200 cursor-pointer group"
          >
            <div className="w-6 h-6 rounded-full bg-blue-500/20 group-hover:bg-blue-500 text-blue-400 group-hover:text-white flex items-center justify-center transition-colors">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            <span>Watch 2026 Showreel</span>
          </button>

          <a
            id="hero-whatsapp-btn"
            href="https://wa.me/94781852852?text=Hi%20Sandanila!%20I'm%20looking%20for%20a%20Drone%20and%20Gimbal%20videographer%20with%20Sanda%20Fly%20Visuals."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 font-semibold text-sm border border-blue-400/30 backdrop-blur-md transition-all duration-200 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Scene Indicator dots */}
        <div className="flex items-center gap-2 mt-12">
          {cinematicScenes.map((scene, i) => (
            <button
              key={scene.title}
              onClick={() => setActiveFrame(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeFrame ? 'w-8 bg-blue-400' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              title={scene.title}
              aria-label={`Go to scene ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#gear"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors text-xs font-mono"
        aria-label="Scroll down to gear section"
      >
        <span>EXPLORE GEAR</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-blue-400" />
      </a>
    </section>
  );
};
