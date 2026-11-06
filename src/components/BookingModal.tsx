import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Calendar, MapPin, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: {
    roomType?: string;
    treatment?: string;
    dimensions?: string;
    fabricTier?: string;
    motorised?: boolean;
    estimatedPrice?: string;
  } | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefillData,
}) => {
  const [consultType, setConsultType] = useState<'in-home' | 'showroom'>('in-home');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [suburb, setSuburb] = useState('');
  const [roomsCount, setRoomsCount] = useState('Whole House (4+ Rooms)');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (9am – 12pm)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'DC-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsSubmitted(true);

    // Fire confetti celebration in royal & sky blues
    try {
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#2563EB', '#1E40AF', '#38BDF8', '#60A5FA', '#0A0F1D', '#FFFFFF']
      });
    } catch {
      // fallback
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden my-8">
        
        {/* Header Strip in Deep Navy Blue */}
        <div className="bg-[#0A0F1D] text-white p-6 sm:p-7 flex items-center justify-between border-b border-blue-950">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <Sparkles className="w-3.5 h-3.5" />
              Sydney Bespoke Furnishings
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal">
              {isSubmitted ? 'Booking Confirmed!' : 'Book Free In-Home Measure & Quote'}
            </h3>
            <p className="text-xs text-slate-300">
              {isSubmitted 
                ? 'Our senior decorator will be in touch shortly.' 
                : 'Zero obligation. Free laser measurement across Greater Sydney.'}
            </p>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full bg-slate-900 text-slate-300 hover:text-white hover:bg-blue-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-2xl font-bold text-slate-900">
                  Thank You, {name || 'Valued Client'}!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your consultation request has been received. One of our Sydney interior consultants will call you to confirm appointment details.
                </p>
              </div>

              {/* Reference Card */}
              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-blue-100 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-bold text-blue-900 font-mono text-sm">{bookingRef}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-900">
                    {consultType === 'in-home' ? 'Free In-Home Laser Measure' : 'Castle Hill Showroom Walkthrough'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Suburb:</span>
                  <span className="font-semibold text-slate-900">{suburb || 'Sydney Region'}</span>
                </div>
                {prefillData && prefillData.treatment && (
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Treatment:</span>
                    <span className="font-semibold text-blue-700">{prefillData.treatment}</span>
                  </div>
                )}
                {prefillData && prefillData.estimatedPrice && (
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Locked Price Estimate:</span>
                    <span className="font-bold text-slate-900">{prefillData.estimatedPrice}</span>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="px-8 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-md shadow-blue-500/20"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Prefill Notice if arriving from Estimator */}
              {prefillData && (
                <div className="bg-blue-50 p-4 rounded-2xl border border-blue-200 text-xs flex items-center justify-between">
                  <div>
                    <div className="font-bold text-blue-950">Configured Specifications Attached</div>
                    <div className="text-blue-800 mt-0.5">
                      {prefillData.treatment} • {prefillData.dimensions} • {prefillData.estimatedPrice}
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-blue-200 text-blue-900 rounded font-bold text-[10px]">
                    Attached
                  </span>
                </div>
              )}

              {/* Consultation Type Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-2">
                  Select Consultation Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setConsultType('in-home')}
                    className={`p-3.5 rounded-xl text-left border text-xs cursor-pointer transition-all ${
                      consultType === 'in-home'
                        ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-bold ring-1 ring-blue-600'
                        : 'border-slate-200 text-slate-600 hover:border-blue-200'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold mb-1 text-blue-900">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      In-Home Laser Measure
                    </div>
                    <div className="text-[11px] text-slate-500">Mobile Van to your Sydney home</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultType('showroom')}
                    className={`p-3.5 rounded-xl text-left border text-xs cursor-pointer transition-all ${
                      consultType === 'showroom'
                        ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-bold ring-1 ring-blue-600'
                        : 'border-slate-200 text-slate-600 hover:border-blue-200'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold mb-1 text-blue-900">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      Castle Hill Showroom
                    </div>
                    <div className="text-[11px] text-slate-500">Private 1-on-1 designer session</div>
                  </button>
                </div>
              </div>

              {/* Form Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 bg-blue-50/20"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0412 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 bg-blue-50/20"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@example.com.au"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 bg-blue-50/20"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Sydney Suburb & Postcode *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Castle Hill, 2154"
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 bg-blue-50/20"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Scope of Project</label>
                  <select
                    value={roomsCount}
                    onChange={(e) => setRoomsCount(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 bg-blue-50/20"
                  >
                    <option>Single Room (Living or Master)</option>
                    <option>2 – 3 Rooms</option>
                    <option>Whole House (4+ Rooms)</option>
                    <option>Commercial / Office Fitout</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Preferred Time Slot</label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 bg-blue-50/20"
                  >
                    <option>Morning (9am – 12pm)</option>
                    <option>Early Afternoon (12pm – 3pm)</option>
                    <option>Late Afternoon (3pm – 5pm)</option>
                    <option>Saturday Morning Session</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Notes / Room Details (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your windows (e.g. ceiling height, motorized preference, renovation timeline)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-600 bg-blue-50/20"
                />
              </div>

              {/* Guarantees */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>100% Free Consultation. No pushy sales tactics. Free cancellation anytime.</span>
              </div>

              {/* Submit CTA in Blue */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-sky-200" />
                <span>Confirm Consultation Request</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
