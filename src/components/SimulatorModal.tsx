import React, { useState, useEffect } from 'react';
import { X, Sliders, Crosshair, Camera, Compass, Navigation2, RefreshCw, Zap, Smartphone, Sparkles } from 'lucide-react';

interface SimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
}

export const SimulatorModal: React.FC<SimulatorModalProps> = ({
  isOpen,
  onClose,
  onBookNow
}) => {
  const [mode, setMode] = useState<'drone' | 'gimbal'>('drone');
  const [altitude, setAltitude] = useState<number>(45);
  const [tilt, setTilt] = useState<number>(-25);
  const [rollAngle, setRollAngle] = useState<number>(0);
  const [gimbalFollow, setGimbalFollow] = useState<'FPV' | 'Follow' | 'Inception'>('Follow');
  const [activeTrack, setActiveTrack] = useState<boolean>(true);
  const [snapshotTaken, setSnapshotTaken] = useState<boolean>(false);

  // Auto orbit animation
  const [heading, setHeading] = useState(142);
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setHeading((h) => (h + 1) % 360);
    }, 200);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSnapshot = () => {
    setSnapshotTaken(true);
    setTimeout(() => setSnapshotTaken(false), 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-950/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh] backdrop-blur-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/80 border-b border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-400/30 flex items-center justify-center">
              <Crosshair className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Sanda Fly Visuals Live Viewfinder & Telemetry HUD</span>
              </h3>
              <p className="text-xs text-slate-400">
                Simulated flight & 3-axis stabilization cockpit by Sandanila Godakanda
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Mode Switcher */}
            <div className="flex items-center p-1 rounded-full bg-slate-800/80 border border-white/10 text-xs backdrop-blur-md">
              <button
                onClick={() => setMode('drone')}
                className={`px-3 py-1.5 rounded-full transition-all font-semibold cursor-pointer ${
                  mode === 'drone' ? 'bg-white text-slate-950 font-bold shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                🛸 4K Drone View
              </button>
              <button
                onClick={() => setMode('gimbal')}
                className={`px-3 py-1.5 rounded-full transition-all font-semibold cursor-pointer ${
                  mode === 'gimbal' ? 'bg-white text-slate-950 font-bold shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                📱 3-Axis Gimbal View
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewfinder Canvas Area */}
        <div className="relative flex-1 bg-black min-h-[360px] sm:min-h-[440px] flex items-center justify-center overflow-hidden">
          {/* Simulated Scene Image */}
          <div
            className="w-full h-full relative transition-transform duration-300 overflow-hidden"
            style={{
              transform: `scale(${1 + altitude / 200}) rotate(${rollAngle}deg)`
            }}
          >
            <img
              src={
                mode === 'drone'
                  ? 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85'
                  : 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85'
              }
              alt="Simulated Viewfinder"
              className="w-full h-full object-cover brightness-90 contrast-105"
            />
          </div>

          {/* Flash animation on snapshot */}
          {snapshotTaken && (
            <div className="absolute inset-0 bg-white/90 z-30 animate-out fade-out duration-500 pointer-events-none" />
          )}

          {/* HUD Overlay */}
          <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-between pointer-events-none text-xs font-mono select-none">
            {/* Top HUD Line */}
            <div className="flex items-center justify-between text-slate-200">
              <div className="flex items-center gap-2 sm:gap-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                <span className="flex items-center gap-1.5 text-red-500 font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                  REC
                </span>
                <span>4K/60FPS</span>
                <span className="text-blue-400">10-BIT D-LOG M</span>
              </div>

              <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-emerald-400 font-bold">
                <span>{mode === 'drone' ? 'GPS: 28 SATS' : 'BT: OSMO CONNECTED'}</span>
                <span>BAT: 94%</span>
              </div>
            </div>

            {/* Center Grid & Crosshairs */}
            <div className="self-center relative flex items-center justify-center">
              {/* Pitch Ladder / Horizon line */}
              <div
                className="w-48 h-0.5 bg-blue-400/60 transition-transform duration-200"
                style={{ transform: `translateY(${tilt * 1.5}px)` }}
              />
              <div className="absolute w-20 h-20 border border-white/40 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
              </div>

              {activeTrack && (
                <div className="absolute -top-12 border-2 border-emerald-400/80 rounded-lg px-2.5 py-1 text-[10px] text-emerald-300 font-mono animate-pulse bg-black/60 backdrop-blur-md">
                  <span>[ACTIVETRACK 6.0 LOCKED]</span>
                </div>
              )}
            </div>

            {/* Bottom HUD Line */}
            <div className="flex items-center justify-between text-slate-300">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                <Compass className="w-3.5 h-3.5 text-blue-400" />
                <span>HDG: {heading}° N</span>
                {mode === 'drone' && <span>ALT: {altitude}m AGL</span>}
                <span>TILT: {tilt}°</span>
              </div>

              <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-blue-400 font-bold">
                {mode === 'drone' ? 'FLIGHT SPEED: 14.2 m/s' : `MODE: ${gimbalFollow}`}
              </div>
            </div>
          </div>
        </div>

        {/* Simulator Control Cockpit */}
        <div className="p-4 sm:p-6 bg-slate-900/90 border-t border-white/10 space-y-4 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Control 1 */}
            {mode === 'drone' ? (
              <div className="space-y-1.5 bg-white/5 p-3.5 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Altitude (Height)</span>
                  <span className="text-blue-400 font-mono">{altitude} Meters</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="150"
                  value={altitude}
                  onChange={(e) => setAltitude(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg accent-blue-400 cursor-pointer"
                />
              </div>
            ) : (
              <div className="space-y-1.5 bg-white/5 p-3.5 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Gimbal Follow Mode</span>
                  <span className="text-blue-400 font-mono">{gimbalFollow}</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  {(['Follow', 'FPV', 'Inception'] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => {
                        setGimbalFollow(f);
                        if (f === 'Inception') setRollAngle(180);
                        else setRollAngle(0);
                      }}
                      className={`text-[10px] py-1.5 rounded-lg font-mono font-bold cursor-pointer transition-colors ${
                        gimbalFollow === f ? 'bg-blue-500 text-white shadow' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Control 2: Gimbal Tilt */}
            <div className="space-y-1.5 bg-white/5 p-3.5 rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>Gimbal Tilt Angle</span>
                <span className="text-blue-400 font-mono">{tilt}° (Pitch)</span>
              </div>
              <input
                type="range"
                min="-90"
                max="20"
                value={tilt}
                onChange={(e) => setTilt(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg accent-blue-400 cursor-pointer"
              />
            </div>

            {/* Control 3: Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleSnapshot}
                className="flex-1 py-3 px-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-white/10 transition-colors backdrop-blur-md cursor-pointer"
              >
                <Camera className="w-4 h-4 text-blue-400" />
                <span>Simulate 48MP Photo</span>
              </button>

              <button
                onClick={() => setActiveTrack(!activeTrack)}
                className={`py-3 px-4 rounded-full border text-xs font-bold transition-colors cursor-pointer ${
                  activeTrack ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50' : 'bg-white/5 text-slate-400 border-white/10'
                }`}
              >
                Lock Subject
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <p className="text-xs text-slate-400">
              Ready to see this visual precision deployed on your shoot in Sri Lanka?
            </p>
            <button
              onClick={() => {
                onClose();
                onBookNow();
              }}
              className="px-6 py-2.5 rounded-full bg-white hover:bg-blue-50 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-500/10 transition-all hover:scale-102"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Book Drone / Gimbal Shoot</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
