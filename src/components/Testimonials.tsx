import React from 'react';
import { TESTIMONIALS, WHY_US_STATS } from '../data/mockData';
import { Star, MapPin, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-24 bg-slate-950/90 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Brands & Couples</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Read real feedback from clients who booked Sandanila Godakanda for 4K drone cinematography and viral phone gimbal video packages.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {WHY_US_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1 backdrop-blur-xl shadow-lg"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white">
                {stat.label}
              </div>
              <p className="text-xs text-slate-400">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-xl flex flex-col justify-between space-y-6 relative group hover:border-blue-400/40 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-blue-500/20 px-2.5 py-0.5 rounded-full text-blue-300 border border-blue-400/30">
                    Verified Shoot
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Author & Project Details */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="w-10 h-10 rounded-full object-cover border border-blue-400/40 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.clientName}</h4>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-400 bg-slate-900/60 p-3 rounded-2xl border border-white/10 space-y-1 backdrop-blur-md">
                  <div className="flex items-center gap-1 text-slate-200 font-semibold truncate">
                    <span>🎬</span> {t.project}
                  </div>
                  <div className="flex items-center justify-between text-slate-400 text-[10px]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blue-400" /> {t.location}
                    </span>
                    <span className="text-cyan-300">{t.gearUsed}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

