import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioItem, ShootCategory } from '../types';
import { Play, Eye, MapPin, Sparkles, CheckCircle, Sliders, Smartphone, Film, X, Video } from 'lucide-react';

interface PortfolioGalleryProps {
  onBookShoot: (projectTitle?: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onBookShoot }) => {
  const [activeCategory, setActiveCategory] = useState<ShootCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories: { id: ShootCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'All Featured Projects', icon: '🎬' },
    { id: 'reels', label: 'Viral 9:16 Reels & TikToks', icon: '📱' },
    { id: 'drone', label: '4K Aerial Drone Sweeps', icon: '🛸' },
    { id: 'weddings', label: 'Weddings & Pre-Shoots', icon: '💍' },
    { id: 'realestate', label: 'Villas & Luxury Hotels', icon: '🏡' },
    { id: 'travel', label: 'Travel & Nature Films', icon: '🌴' }
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md">
              <Film className="w-3.5 h-3.5 text-blue-400" />
              <span>Visual Showcase & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Masterworks</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Explore real projects captured with precision 4K drone sweeps and ultra-fluid phone gimbal motion.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Over 2.5 Million Organic Social Views Generated</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-slate-950 font-bold shadow-lg shadow-blue-500/10'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 backdrop-blur-md'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="group glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-blue-400/40 hover:bg-white/8 transition-all duration-300 cursor-pointer flex flex-col hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold flex items-center gap-1 backdrop-blur-md ${
                    item.isVertical 
                      ? 'bg-purple-950/80 border border-purple-400/40 text-purple-300' 
                      : 'bg-blue-950/80 border border-blue-400/40 text-blue-300'
                  }`}>
                    {item.isVertical ? <Smartphone className="w-3 h-3" /> : <Film className="w-3 h-3" />}
                    {item.isVertical ? '9:16 REEL' : '4K CINEMA'}
                  </span>

                  {item.viewsCount && (
                    <span className="px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/10 text-slate-200 text-[11px] font-mono flex items-center gap-1">
                      <Eye className="w-3 h-3 text-cyan-400" />
                      {item.viewsCount}
                    </span>
                  )}
                </div>

                {/* Center Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-950/40 backdrop-blur-xs">
                  <div className="w-14 h-14 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Duration & Location */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-slate-200 font-medium">
                  <span className="flex items-center gap-1 drop-shadow">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    {item.location}
                  </span>
                  <span className="font-mono bg-slate-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] text-blue-300 border border-white/10">
                    {item.duration}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] font-mono uppercase text-blue-400 tracking-wider font-semibold mb-1">
                    {item.client}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Gear Tags */}
                <div className="pt-2 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {item.gearUsed.map((gear, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300"
                      >
                        {gear}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail & Playback Preview Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-900/90 border border-white/15 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-2xl flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10 backdrop-blur-md">
              <div>
                <span className="text-[11px] font-mono uppercase text-blue-400 font-bold">
                  {selectedProject.client} • {selectedProject.location}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 space-y-6">
              {/* Media Preview Box */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="p-5 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/15 text-center max-w-md">
                    <Video className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-white font-bold text-sm mb-1">{selectedProject.title}</p>
                    <p className="text-slate-400 text-xs mb-3">{selectedProject.specs.resolution} • {selectedProject.specs.fps}</p>
                    <span className="inline-block px-4 py-1.5 bg-white text-slate-950 font-bold text-xs rounded-full">
                      Master Film Rendered
                    </span>
                  </div>
                </div>
              </div>

              {/* Story & Technical Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2 font-mono">
                    Project Vision & Execution
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {selectedProject.description}
                  </p>

                  <h5 className="text-xs font-bold text-slate-200 uppercase font-mono mb-2">
                    Hardware & Rigging Used:
                  </h5>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.gearUsed.map((g, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Flight & Motion Specs */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                    <h5 className="text-xs font-bold text-blue-400 uppercase font-mono mb-2.5 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5" /> Technical Specs
                    </h5>
                    <div className="space-y-1.5 text-xs text-slate-300">
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-slate-400">Resolution:</span>
                        <span className="font-mono text-white">{selectedProject.specs.resolution}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-slate-400">Frame Rate:</span>
                        <span className="font-mono text-white">{selectedProject.specs.fps}</span>
                      </div>
                      {selectedProject.specs.altitude && (
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-slate-400">Drone Flight Altitude:</span>
                          <span className="font-mono text-white">{selectedProject.specs.altitude}</span>
                        </div>
                      )}
                      <div className="flex justify-between py-1">
                        <span className="text-slate-400">Stabilizer:</span>
                        <span className="font-mono text-cyan-300">{selectedProject.specs.stabilization}</span>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                    <h5 className="text-xs font-bold text-blue-400 uppercase font-mono mb-2 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" /> Handed Over Deliverables
                    </h5>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {selectedProject.deliverables.map((d, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="px-6 py-4 bg-white/5 border-t border-white/10 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Want a similar look & feel for your business or wedding?
              </span>
              <button
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  onBookShoot(title);
                }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-slate-950 hover:bg-blue-50 font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/10 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Book This Style of Shoot</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
