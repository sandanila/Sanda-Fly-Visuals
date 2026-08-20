import React, { useState } from 'react';
import { GEAR_INVENTORY } from '../data/mockData';
import { GearItem } from '../types';
import { Check, ShieldCheck, Zap, Radio, Sparkles, Sliders, Smartphone, Crosshair, Aperture, Layers } from 'lucide-react';

interface GearShowcaseProps {
  onOpenSimulator: () => void;
  onBookGear: (gearName: string) => void;
}

export const GearShowcase: React.FC<GearShowcaseProps> = ({
  onOpenSimulator,
  onBookGear
}) => {
  const [selectedGearId, setSelectedGearId] = useState<string>('gear-drone');

  const selectedGear = GEAR_INVENTORY.find((g) => g.id === selectedGearId) || GEAR_INVENTORY[0];

  const featuredProducts = [
    {
      name: 'DJI Mini 3 Drone',
      badge: '4K HDR / LIGHTWEIGHT',
      image: '/dji-mini3.jpg',
      description: 'Compact, cinematic drone coverage built for scenic reveals, travel storytelling, and polished social-first aerial edits.',
      specs: [
        '4K/60fps HDR video',
        'Lightweight under 249g build',
        'Up to 38 mins flight time',
        'True vertical shooting',
        '3-axis stabilized gimbal'
      ]
    },
    {
      name: 'DJI Osmo Mobile 6 Gimbal',
      badge: '3-AXIS / ACTIVE TRACK',
      image: '/osmo-mobile6a.jpg',
      description: 'Smooth handheld motion for dynamic walk-throughs, intimate reels, and cinematic mobile footage without camera shake.',
      specs: [
        '3-axis stabilization',
        'ActiveTrack 6.0 subject tracking',
        'Quick portrait/landscape switching',
        'Built-in extension rod',
        'Fast run-and-gun operation'
      ]
    }
  ];

  return (
    <section id="gear" className="py-20 sm:py-24 bg-slate-950/80 relative overflow-hidden border-t border-white/10">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 camera-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-[-100px] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>The Professional Production Rig</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Drone & Gimbal Mastery</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Bulky old-school cinema rigs slow down the creative process. Our ultra-mobile 4K Drone + 3-Axis Smart Gimbal setup unlocks angles, tight glides, and rapid social media deliveries impossible with traditional cameras.
          </p>
        </div>

        {/* Gear Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {GEAR_INVENTORY.map((gear) => (
            <button
              key={gear.id}
              onClick={() => setSelectedGearId(gear.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedGearId === gear.id
                  ? 'bg-white text-slate-950 font-bold shadow-xl shadow-blue-500/10 scale-102'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 backdrop-blur-md'
              }`}
            >
              {gear.category === 'drone' && <span>🛸</span>}
              {gear.category === 'gimbal' && <span>📱</span>}
              {gear.category === 'audio' && <span>🎙️</span>}
              {gear.category === 'optics' && <span>✨</span>}
              <span>{gear.name.split(' ')[0]} {gear.name.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Interactive Highlight Showcase Card */}
        <div className="glass-panel-highlight rounded-3xl p-6 sm:p-8 lg:p-10 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Gear Image & Visual Badges */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900">
                <img
                  src={selectedGear.image}
                  alt={selectedGear.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-blue-400/40 text-blue-300 font-mono text-[11px] font-bold">
                    {selectedGear.badge}
                  </span>
                </div>

                {/* Model pill */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="p-3 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/10">
                    <p className="text-[11px] font-mono text-slate-400">HARDWARE MODEL</p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">{selectedGear.model}</p>
                  </div>
                </div>
              </div>

              {/* Try Simulator banner */}
              <button
                onClick={onOpenSimulator}
                className="mt-3.5 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-blue-300 backdrop-blur-md transition-colors cursor-pointer"
              >
                <Crosshair className="w-3.5 h-3.5 text-blue-400" />
                <span>Test Live Viewfinder Simulator & Telemetry</span>
              </button>
            </div>

            {/* Gear Specs & Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">
                    {selectedGear.highlight}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedGear.name}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                  {selectedGear.description}
                </p>
              </div>

              {/* Technical Specifications List */}
              <div className="space-y-2.5 bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-bold">
                  <Sliders className="w-3.5 h-3.5 text-blue-400" />
                  Key Specifications & Cinematic Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {selectedGear.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Motion Modes / Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedGear.features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2.5 text-xs text-slate-300">
                    <Zap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Book Gear Action */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => onBookGear(selectedGear.name)}
                  className="px-6 py-3 rounded-full bg-white text-slate-950 hover:bg-blue-50 font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-500/10 flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Request This Kit for Your Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Product Cards */}
        <div className="mb-12">
          <div className="flex items-center justify-between gap-3 mb-6">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-cyan-300 mb-2">Featured equipment</p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Sony-ready production essentials</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {featuredProducts.map((product) => (
              <article
                key={product.name}
                className="group rounded-[28px] border border-white/10 bg-slate-900/70 p-4 shadow-[0_25px_65px_rgba(15,23,42,0.42)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_20px_50px_rgba(34,211,238,0.12)]"
              >
                <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-950/70">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-5 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-2xl font-extrabold tracking-tight text-white">{product.name}</h4>
                    <span className="whitespace-nowrap rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      {product.badge}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-300">{product.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {product.specs.map((spec) => (
                      <div
                        key={spec}
                        className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-[13px] text-slate-200"
                      >
                        <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Comparison: Why Our Setup Wins Over Bulky Traditional Crews */}
        <div className="mt-12 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Why the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Drone + Mobile Gimbal</span> Combo Wins
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              How modern mobile creators deliver better, faster, and more engaging content than slow 5-person video crews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-sm">Lightning Fast 24-48h Delivery</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Native 9:16 vertical 4K recording directly optimized for Instagram & TikTok algorithms. No waiting 4 weeks for simple edits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Crosshair className="w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-sm">Agile Dynamic Movement</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Glide through narrow cafe tables, sprint alongside runners, or spin 360° barrel rolls without bulky tripods blocking your guests.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-sm">High Altitude & Ground Unity</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Seamless color science matching between our 4K Drone D-Log M and 4K Gimbal clips for a unified Hollywood feel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
