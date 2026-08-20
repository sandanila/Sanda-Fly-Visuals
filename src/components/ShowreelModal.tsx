import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, RotateCcw, Smartphone, Monitor, Maximize2, Sparkles, Sliders } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  onBookNow
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isVertical, setIsVertical] = useState(false);
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [showHUD, setShowHUD] = useState(true);
  const [progress, setProgress] = useState(0);

  const clips = [
    {
      title: 'Drone: Ella Nine Arch Sunrise Sweep',
      location: 'Ella, Sri Lanka',
      gear: 'DJI 4K Drone • ND64/PL',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85',
      duration: '4K 60FPS • 120m High Altitude Orbit'
    },
    {
      title: 'Gimbal: Rapid Fitness Gym Reel',
      location: 'Colombo 07',
      gear: 'DJI Osmo Mobile 6 • Sport Mode',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85',
      duration: 'Vertical 9:16 • 120fps Slow-Mo Dutch Tilt'
    },
    {
      title: 'Drone + Gimbal: Mirissa Luxury Villa One-Take',
      location: 'Mirissa Coastal Sanctuary',
      gear: 'Drone Aerial Pull-back into Indoor Gimbal Glide',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85',
      duration: '4K ProRes • Seamless Transition'
    },
    {
      title: 'Gimbal: Artisan Cafe Pour-Over ASMR',
      location: 'Colombo Specialty Coffee Bar',
      gear: 'Inception 360° Barrel Roll + Rode Wireless Mics',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=85',
      duration: 'ASMR Studio Audio • Macro Close-Up'
    },
    {
      title: 'Drone: Galle Fort Ocean Sunset Pre-Shoot',
      location: 'Galle Lighthouse Ramparts',
      gear: 'DJI 4K Drone D-Log M Color Grading',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85',
      duration: 'Golden Hour Cinematic Master Cut'
    }
  ];

  // Auto advance progress when playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveClipIndex((c) => (c + 1) % clips.length);
          return 0;
        }
        return prev + 1.5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying, clips.length]);

  if (!isOpen) return null;

  const currentClip = clips[activeClipIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-slate-950/90 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh] backdrop-blur-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900/80 border-b border-white/10 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>Sanda Fly Visuals Master Showreel</span>
                <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  4K HDR Preview
                </span>
              </h3>
              <p className="text-xs text-slate-400 hidden sm:block">
                Cinematography by Sandanila Godakanda • Drone Aerials & 3-Axis Gimbal
              </p>
            </div>
          </div>

          {/* Controls on header */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Aspect Ratio Switcher */}
            <div className="flex items-center p-0.5 rounded-full bg-slate-800/80 border border-white/10 text-xs backdrop-blur-md">
              <button
                onClick={() => setIsVertical(false)}
                className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all cursor-pointer ${
                  !isVertical ? 'bg-white text-slate-950 font-bold shadow' : 'text-slate-300 hover:text-white'
                }`}
                title="16:9 Landscape Video Format"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">16:9 Cinema</span>
              </button>
              <button
                onClick={() => setIsVertical(true)}
                className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all cursor-pointer ${
                  isVertical ? 'bg-white text-slate-950 font-bold shadow' : 'text-slate-300 hover:text-white'
                }`}
                title="9:16 Vertical Reel Format"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">9:16 Reel</span>
              </button>
            </div>

            {/* HUD toggle */}
            <button
              onClick={() => setShowHUD(!showHUD)}
              className={`p-2 rounded-full border text-xs cursor-pointer transition-colors ${
                showHUD ? 'bg-blue-500/20 text-blue-400 border-blue-400/40' : 'bg-slate-800/60 text-slate-400 border-white/10'
              }`}
              title="Toggle Camera HUD Overlay"
            >
              <Sliders className="w-4 h-4" />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Close Showreel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Display Area */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[460px] overflow-hidden">
          {/* Simulated Video Frame Canvas */}
          <div
            className={`relative transition-all duration-500 ease-out overflow-hidden shadow-2xl flex items-center justify-center ${
              isVertical
                ? 'w-[280px] sm:w-[320px] aspect-[9/16] rounded-2xl border-2 border-white/20 my-4'
                : 'w-full h-full aspect-video'
            }`}
          >
            <img
              src={currentClip.image}
              alt={currentClip.title}
              className="w-full h-full object-cover brightness-90 contrast-110 select-none pointer-events-none transition-all duration-700 transform scale-100"
            />

            {/* Ambient Scanline / Film Grain Texture */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

            {/* HUD Viewfinder Overlay */}
            {showHUD && (
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between pointer-events-none text-[11px] font-mono">
                {/* HUD Top */}
                <div className="flex items-center justify-between text-slate-300 drop-shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-red-600/90 text-white font-bold rounded text-[10px] tracking-wider animate-pulse">
                      REC 4K
                    </span>
                    <span className="bg-black/60 px-2 py-0.5 rounded text-slate-300">
                      00:0{activeClipIndex + 1}:24:18
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-black/60 px-2 py-0.5 rounded text-blue-400">
                      ISO 100 • 1/120s
                    </span>
                    <span className="bg-black/60 px-2 py-0.5 rounded text-emerald-400">
                      3-AXIS LOCKED
                    </span>
                  </div>
                </div>

                {/* HUD Center Crosshair */}
                <div className="self-center flex items-center justify-center opacity-40">
                  <div className="w-16 h-16 border border-white/60 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                </div>

                {/* HUD Bottom Info */}
                <div className="flex items-center justify-between text-white drop-shadow-md">
                  <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                    <p className="text-blue-400 font-bold text-xs">{currentClip.title}</p>
                    <p className="text-[10px] text-slate-300">{currentClip.gear} • {currentClip.location}</p>
                  </div>
                  <div className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-right hidden sm:block">
                    <p className="text-[10px] text-slate-400">STABILIZATION</p>
                    <p className="text-xs text-emerald-400 font-bold">100% STEADY</p>
                  </div>
                </div>
              </div>
            )}

            {/* Big Play/Pause Overlay button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors group cursor-pointer"
              aria-label={isPlaying ? 'Pause showreel' : 'Play showreel'}
            >
              {!isPlaying && (
                <div className="w-16 h-16 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current ml-1 text-blue-600" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Video Scrubber & Playback Controls Bar */}
        <div className="px-4 sm:px-6 py-3.5 bg-slate-900/90 border-t border-white/10 flex flex-col gap-2.5 backdrop-blur-md">
          {/* Progress Scrubber */}
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden cursor-pointer relative"
               onClick={(e) => {
                 const rect = e.currentTarget.getBoundingClientRect();
                 const clickX = e.clientX - rect.left;
                 const newP = (clickX / rect.width) * 100;
                 setProgress(newP);
               }}>
            <div
              className="h-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Play/Pause, Next, Volume controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                onClick={() => {
                  setProgress(0);
                  setActiveClipIndex(0);
                }}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors cursor-pointer"
                title="Restart showreel"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors cursor-pointer"
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-blue-400" />}
              </button>

              <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
                Clip {activeClipIndex + 1} of {clips.length}
              </span>
            </div>

            {/* Quick Clip Switcher Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
              {clips.map((clip, idx) => (
                <button
                  key={clip.title}
                  onClick={() => {
                    setActiveClipIndex(idx);
                    setProgress(0);
                    setIsPlaying(true);
                  }}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer ${
                    idx === activeClipIndex
                      ? 'bg-blue-500 text-white font-bold shadow'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {idx + 1}. {clip.title.split(':')[0]}
                </button>
              ))}
            </div>

            {/* Book This Style CTA */}
            <button
              onClick={() => {
                onClose();
                onBookNow();
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-blue-50 text-slate-950 font-bold text-xs shadow-md cursor-pointer transition-all hover:scale-102"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Book Shoot With Sandanila</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
