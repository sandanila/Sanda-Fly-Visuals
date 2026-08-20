import React, { useState } from 'react';
import { PRICING_PACKAGES } from '../data/mockData';
import { Currency, PackageTier } from '../types';
import { Check, Sparkles, Sliders, Calculator, Zap, ShieldCheck, ArrowRight, MessageSquare, Flame } from 'lucide-react';

interface PricingCalculatorProps {
  currency: Currency;
  onSelectPackage: (pkg: PackageTier) => void;
  onApplyCustomQuote: (customQuote: {
    durationHours: number;
    droneFlights: number;
    reelsCount: number;
    includeMasterFilm: boolean;
    express24h: boolean;
    includeRawFootage: boolean;
    totalLKR: number;
    totalUSD: number;
  }) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  currency,
  onSelectPackage,
  onApplyCustomQuote
}) => {
  // Custom Estimator State
  const [hours, setHours] = useState<number>(4);
  const [droneFlights, setDroneFlights] = useState<number>(2);
  const [reelsCount, setReelsCount] = useState<number>(3);
  const [includeMasterFilm, setIncludeMasterFilm] = useState<boolean>(true);
  const [express24h, setExpress24h] = useState<boolean>(false);
  const [includeRawFootage, setIncludeRawFootage] = useState<boolean>(true);

  // Calculation Logic (LKR based, converted to USD dynamically)
  // Base hourly rate for mobile phone gimbal videography: Rs. 6,000 / hr
  // Drone flight cost: Rs. 8,000 per flight session
  // Edited 9:16 reel: Rs. 5,000 each
  // Master 16:9 cinematic video: Rs. 15,000
  // Express 24h turnaround: Rs. 10,000
  // Raw 4K footage drive delivery: Rs. 5,000
  const baseRate = 10000;
  const calculatedLKR =
    baseRate +
    hours * 5000 +
    droneFlights * 7000 +
    reelsCount * 4500 +
    (includeMasterFilm ? 12000 : 0) +
    (express24h ? 9000 : 0) +
    (includeRawFootage ? 4000 : 0);

  // USD Rate approximately 1 USD ~ 300 LKR
  const calculatedUSD = Math.round(calculatedLKR / 300);

  const formatPrice = (lkr: number, usd: number) => {
    if (currency === 'USD') {
      return `$${usd.toLocaleString()}`;
    }
    return `Rs. ${lkr.toLocaleString()}`;
  };

  const handleCustomQuoteSubmit = () => {
    onApplyCustomQuote({
      durationHours: hours,
      droneFlights,
      reelsCount,
      includeMasterFilm,
      express24h,
      includeRawFootage,
      totalLKR: calculatedLKR,
      totalUSD: calculatedUSD
    });
  };

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-slate-950/80 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Transparent Production Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Packages & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Custom Quote Calculator</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Choose a ready-to-shoot package or customize every hour, drone flight, and reel delivery with our real-time estimator.
          </p>
        </div>

        {/* Curated Pre-made Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {PRICING_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl ${
                  isPopular
                    ? 'glass-panel-highlight border-2 border-blue-400/80 shadow-2xl shadow-blue-500/10 -translate-y-1'
                    : 'glass-panel border border-white/10 hover:border-white/20'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-blue-500/20">
                    <Flame className="w-3.5 h-3.5 fill-current text-white" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  </div>

                  <p className="text-xs text-slate-300 min-h-[36px] mb-6">
                    {pkg.tagline}
                  </p>

                  {/* Price display */}
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white">
                        {formatPrice(pkg.priceLKR, pkg.priceUSD)}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ shoot</span>
                    </div>
                    <p className="text-[11px] font-mono text-blue-300 mt-1">
                      ⏱️ {pkg.duration}
                    </p>
                  </div>

                  {/* Gear Kit badge */}
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 font-mono mb-6 backdrop-blur-md">
                    <span className="text-slate-400 block text-[10px] uppercase">Hardware Setup:</span>
                    <span className="text-blue-300">{pkg.gearSummary}</span>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-3 mb-6">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Deliverables Included:
                    </p>
                    <ul className="space-y-2">
                      {pkg.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-white text-slate-950 hover:bg-blue-50 shadow-xl shadow-blue-500/10'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md'
                    }`}
                  >
                    <span>Select {pkg.name.split(' ')[0]} Pack</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Shoot Builder / Custom Calculator */}
        <div id="calculator-box" className="glass-panel-highlight rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-md">
              <Calculator className="w-3.5 h-3.5 text-blue-400" />
              <span>Interactive Custom Shoot Estimator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Build Your Exact Videography & Drone Kit
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Adjust sliders for on-site hours, drone flight sessions, and reel deliveries to calculate an instant guaranteed estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sliders & Checkboxes (8 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Duration Slider */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-semibold text-white flex items-center gap-2">
                    <span>⏱️ Shoot Duration on Location</span>
                  </label>
                  <span className="font-mono text-blue-300 font-bold bg-slate-950/80 px-3 py-1 rounded-full border border-white/10">
                    {hours} {hours === 1 ? 'Hour' : 'Hours'}
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="1"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>2 Hours (Quick Session)</span>
                  <span>5 Hours (Half Day)</span>
                  <span>10 Hours (Full Day)</span>
                </div>
              </div>

              {/* Drone Flights Slider */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-semibold text-white flex items-center gap-2">
                    <span>🛸 4K Aerial Drone Flight Sessions</span>
                  </label>
                  <span className="font-mono text-blue-300 font-bold bg-slate-950/80 px-3 py-1 rounded-full border border-white/10">
                    {droneFlights === 0 ? 'No Drone' : `${droneFlights} Battery Cycles`}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="6"
                  step="1"
                  value={droneFlights}
                  onChange={(e) => setDroneFlights(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>Ground Only (0)</span>
                  <span>Standard (2 Flights)</span>
                  <span>Maximum Aerial Coverage (6)</span>
                </div>
              </div>

              {/* Reels Count Slider */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-semibold text-white flex items-center gap-2">
                    <span>📱 9:16 Vertical Edited Social Reels</span>
                  </label>
                  <span className="font-mono text-blue-300 font-bold bg-slate-950/80 px-3 py-1 rounded-full border border-white/10">
                    {reelsCount} {reelsCount === 1 ? 'Reel' : 'Reels'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={reelsCount}
                  onChange={(e) => setReelsCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>1 Viral Reel</span>
                  <span>4 Content Drop Pack</span>
                  <span>8 Full Month Campaign</span>
                </div>
              </div>

              {/* Addon Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className={`p-4 rounded-2xl border flex flex-col justify-between cursor-pointer transition-all backdrop-blur-md ${
                  includeMasterFilm ? 'bg-blue-500/20 border-blue-400/50 text-blue-300' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white">🎬 16:9 Master Highlight</span>
                    <input
                      type="checkbox"
                      checked={includeMasterFilm}
                      onChange={(e) => setIncludeMasterFilm(e.target.checked)}
                      className="accent-blue-400 rounded"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">+16:9 Landscape Film</span>
                </label>

                <label className={`p-4 rounded-2xl border flex flex-col justify-between cursor-pointer transition-all backdrop-blur-md ${
                  express24h ? 'bg-blue-500/20 border-blue-400/50 text-blue-300' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white">⚡ 24h Express Edit</span>
                    <input
                      type="checkbox"
                      checked={express24h}
                      onChange={(e) => setExpress24h(e.target.checked)}
                      className="accent-blue-400 rounded"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">Priority Queue</span>
                </label>

                <label className={`p-4 rounded-2xl border flex flex-col justify-between cursor-pointer transition-all backdrop-blur-md ${
                  includeRawFootage ? 'bg-blue-500/20 border-blue-400/50 text-blue-300' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white">💾 RAW Footage Drive</span>
                    <input
                      type="checkbox"
                      checked={includeRawFootage}
                      onChange={(e) => setIncludeRawFootage(e.target.checked)}
                      className="accent-blue-400 rounded"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">Full unedited 4K files</span>
                </label>
              </div>
            </div>

            {/* Live Quote Output Card (5 cols) */}
            <div className="lg:col-span-5 bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-2xl flex flex-col justify-between space-y-6 shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono text-slate-400 uppercase">Estimated Total</span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-bold backdrop-blur-md">
                    INSTANT PRICE
                  </span>
                </div>

                <div className="py-4">
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {formatPrice(calculatedLKR, calculatedUSD)}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Transparent quotation with zero hidden equipment charges
                  </p>
                </div>

                {/* Summary list */}
                <div className="space-y-2 text-xs text-slate-300 bg-slate-950/70 p-4 rounded-2xl border border-white/10 font-mono backdrop-blur-md">
                  <div className="flex justify-between">
                    <span className="text-slate-400">On-Site Videography:</span>
                    <span>{hours} Hours (3-Axis Gimbal)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Drone Flights:</span>
                    <span>{droneFlights > 0 ? `${droneFlights} Aerial Cycles` : 'None'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Edited 9:16 Reels:</span>
                    <span className="text-blue-300 font-bold">{reelsCount} Videos</span>
                  </div>
                  {includeMasterFilm && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Master Film:</span>
                      <span>4K 16:9 Highlight</span>
                    </div>
                  )}
                  {express24h && (
                    <div className="flex justify-between text-blue-300">
                      <span>Express Delivery:</span>
                      <span>24h Rapid Turnaround</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-2">
                <button
                  id="apply-custom-quote-btn"
                  onClick={handleCustomQuoteSubmit}
                  className="w-full py-3.5 px-4 rounded-full bg-white text-slate-950 hover:bg-blue-50 font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-500/10 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-101"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Transfer This Quote to Booking Form</span>
                </button>

                <a
                  href={`https://wa.me/94781852852?text=${encodeURIComponent(
                    `Hi Sandanila (Sanda Fly Visuals)! I built a custom quote on your website:\n- Duration: ${hours} Hours\n- Drone Flights: ${droneFlights}\n- Reels: ${reelsCount}\n- Estimated Cost: ${formatPrice(
                      calculatedLKR,
                      calculatedUSD
                    )}\nI'd like to check date availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer backdrop-blur-md"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Send This Custom Quote on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
