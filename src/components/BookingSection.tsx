import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Currency, PackageTier } from '../types';
import { Sparkles, Send, MessageSquare, Copy, Check, Calendar, MapPin, Phone, User, Mail, ShieldCheck, Clock } from 'lucide-react';

interface BookingSectionProps {
  currency: Currency;
  selectedPackage: PackageTier | null;
  customQuoteData: {
    durationHours: number;
    droneFlights: number;
    reelsCount: number;
    includeMasterFilm: boolean;
    express24h: boolean;
    includeRawFootage: boolean;
    totalLKR: number;
    totalUSD: number;
  } | null;
  prefilledNotes?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  currency,
  selectedPackage,
  customQuoteData,
  prefilledNotes = ''
}) => {
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [shootType, setShootType] = useState('Wedding / Pre-shoot');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('Colombo');
  const [customLocation, setCustomLocation] = useState('');
  const [notes, setNotes] = useState(prefilledNotes);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const finalLocation = location === 'Other' ? customLocation : location;

  // Compute pricing
  const finalPriceLKR = customQuoteData 
    ? customQuoteData.totalLKR 
    : (selectedPackage ? selectedPackage.priceLKR : 45000);

  const finalPriceUSD = customQuoteData 
    ? customQuoteData.totalUSD 
    : (selectedPackage ? selectedPackage.priceUSD : 150);

  const displayPrice = currency === 'USD' ? `$${finalPriceUSD}` : `Rs. ${finalPriceLKR.toLocaleString()}`;

  const serviceSummary = customQuoteData
    ? `Custom Kit (${customQuoteData.durationHours} hrs, ${customQuoteData.droneFlights} Drone Flights, ${customQuoteData.reelsCount} Reels)`
    : (selectedPackage ? selectedPackage.name : 'Aerial Drone Essential');

  // WhatsApp Message Generator
  const generateWhatsAppMessage = () => {
    const lines = [
      `*New Shoot Booking Inquiry - Sanda Fly Visuals*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Client Name:* ${clientName || 'Not specified'}`,
      `📞 *Phone / WhatsApp:* ${whatsapp || phone || 'Not specified'}`,
      `📧 *Email:* ${email || 'Not specified'}`,
      `🎬 *Shoot Type:* ${shootType}`,
      `📅 *Target Date:* ${eventDate || 'Flexible / To be confirmed'}`,
      `📍 *Location:* ${finalLocation || 'Sri Lanka'}`,
      `📦 *Selected Service:* ${serviceSummary}`,
      `💰 *Estimated Quote:* ${displayPrice}`,
      notes ? `📝 *Special Requests:* ${notes}` : '',
      `━━━━━━━━━━━━━━━━━━━━`,
      `Hi Sandanila! Looking forward to confirming availability with Sanda Fly Visuals.`
    ].filter(Boolean).join('\n');

    return encodeURIComponent(lines);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = generateWhatsAppMessage();
    window.open(`https://wa.me/94781852852?text=${encoded}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
  };

  const handleCopySummary = () => {
    const summaryText = `Sanda Fly Visuals Booking Request (Sandanila Godakanda)\nClient: ${clientName}\nService: ${serviceSummary}\nDate: ${eventDate}\nLocation: ${finalLocation}\nEstimated Quote: ${displayPrice}\nContact: 0781852852`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="booking-section" className="py-20 sm:py-24 bg-slate-950/80 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>Secure Your Date in Our Calendar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Book With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Sanda Fly Visuals</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Fill in your shoot vision below to submit an inquiry directly to Sandanila Godakanda or start a pre-filled WhatsApp conversation instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Booking Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 border border-blue-400/40 mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Booking Inquiry Received!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, <span className="text-blue-400 font-semibold">{clientName || 'Friend'}</span>. Sandanila Godakanda has received your inquiry for <span className="text-white font-semibold">{eventDate || 'your shoot'}</span> at <span className="text-white font-semibold">{finalLocation}</span>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendWhatsApp}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm on WhatsApp (078 185 2852)</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold border border-white/10 cursor-pointer"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-blue-400" />
                      <span>Full Name / Brand Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sahan Silva / Apex Gym"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 text-xs focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-md"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-blue-400" />
                      <span>WhatsApp Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 078 185 2852"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 text-xs focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      <span>Email Address (Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 text-xs focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-md"
                    />
                  </div>

                  {/* Target Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>Shoot Target Date *</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-white text-xs focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Shoot Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Shoot Category
                    </label>
                    <select
                      value={shootType}
                      onChange={(e) => setShootType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-md"
                    >
                      <option value="Wedding / Pre-shoot">Wedding & Pre-Shoot Highlight</option>
                      <option value="Villa / Real Estate Tour">Luxury Villa / Hotel Aerial Tour</option>
                      <option value="Social Media Reels & TikTok">Brand & Social Media Reels</option>
                      <option value="Event / Concert Coverage">Event & Festival Coverage</option>
                      <option value="Travel & Adventure Film">Travel & Destination Film</option>
                    </select>
                  </div>

                  {/* Location in Sri Lanka */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span>Shoot Location</span>
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-md"
                    >
                      <option value="Colombo">Colombo / Greater Colombo</option>
                      <option value="Galle & South Coast">Galle / Unawatuna / Mirissa</option>
                      <option value="Kandy & Central Highlands">Kandy / Nuwara Eliya / Ella</option>
                      <option value="Negombo & West Coast">Negombo / Kalpitiya</option>
                      <option value="Arugam Bay & East Coast">Arugam Bay / Trincomalee</option>
                      <option value="Other">Other / Custom Location</option>
                    </select>
                  </div>
                </div>

                {location === 'Other' && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Specify Location Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dambulla / Jaffna / Private Estate"
                      value={customLocation}
                      onChange={(e) => setCustomLocation(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-white text-xs focus:border-blue-400 focus:outline-none backdrop-blur-md"
                    />
                  </div>
                )}

                {/* Special Notes & Requests */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Vision, Shot Preferences & Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell Sandanila what you want to achieve (e.g. sunset golden hour drone reveal, fast transition gym workout, audio interviews, etc.)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 text-xs focus:border-blue-400 focus:outline-none backdrop-blur-md"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    id="submit-booking-form-btn"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-white hover:bg-blue-50 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/10 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-101"
                  >
                    <Send className="w-4 h-4 text-blue-600" />
                    <span>Submit Booking Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors backdrop-blur-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Direct WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Selected Booking Summary Card (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Selected Kit Summary</span>
                <button
                  onClick={handleCopySummary}
                  className="flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 font-mono cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                </button>
              </div>

              <div className="py-4">
                <div className="text-xs font-mono uppercase text-blue-400 font-semibold mb-1">
                  SERVICE PACKAGE
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {serviceSummary}
                </h4>
                <div className="text-3xl font-extrabold text-white">
                  {displayPrice}
                </div>
              </div>

              {/* Perks list */}
              <div className="space-y-2.5 bg-slate-900/60 p-4 rounded-2xl border border-white/10 text-xs text-slate-300 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Licensed 4K Drone Operations & Safe Flight</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>24-48h Rapid Reels Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Color Graded D-Log M & ProRes Quality</span>
                </div>
              </div>
            </div>

            {/* Direct Contact hotline */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 backdrop-blur-md space-y-1">
              <p className="font-semibold text-white mb-1">Have an urgent shoot inquiry?</p>
              <p className="text-slate-400">Call or WhatsApp Sandanila directly on our hotline:</p>
              <a
                href="tel:0781852852"
                className="font-mono text-blue-400 font-bold hover:underline block pt-1 text-sm"
              >
                📞 078 185 2852 / +94 78 185 2852
              </a>
              <p className="text-[11px] text-slate-400 pt-1">
                Owner & Cinematographer: <span className="text-slate-200 font-medium">Sandanila Godakanda</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

