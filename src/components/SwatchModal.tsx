import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Package, Trash2, CheckCircle2, ArrowRight } from 'lucide-react';
import { FABRIC_SWATCHES } from '../data/curtainData';

interface SwatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSwatchIds: string[];
  onRemoveSwatch: (id: string) => void;
  onClearAll: () => void;
}

export const SwatchModal: React.FC<SwatchModalProps> = ({
  isOpen,
  onClose,
  selectedSwatchIds,
  onRemoveSwatch,
  onClearAll,
}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [suburb, setSuburb] = useState('');
  const [state, setState] = useState('NSW');
  const [postcode, setPostcode] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const swatches = FABRIC_SWATCHES.filter(s => selectedSwatchIds.includes(s.id));

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    try {
      confetti({
        particleCount: 85,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#2563EB', '#38BDF8', '#1E40AF', '#FFFFFF']
      });
    } catch {
      // ignore
    }
  };

  const handleClose = () => {
    setIsOrdered(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden my-8">
        
        {/* Header in Deep Navy */}
        <div className="bg-[#0A0F1D] text-white p-6 flex items-center justify-between border-b border-blue-950">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-sky-400" />
            <h3 className="font-serif text-2xl font-normal">
              {isOrdered ? 'Swatch Box Dispatched!' : 'Complimentary Fabric Swatch Kit'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full bg-slate-900 text-slate-300 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isOrdered ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-slate-900">
                Your Sample Box is on its way!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                We have prepared your {swatches.length} selected fabric swatches. They will be posted via Express Australia Post to <strong>{address}, {suburb} {state} {postcode}</strong>.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-md shadow-blue-500/20"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleOrder} className="space-y-6">
              
              {/* Selected Swatches Overview */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Selected Swatches ({swatches.length} of 4 Max)
                  </span>
                  {swatches.length > 0 && (
                    <button
                      type="button"
                      onClick={onClearAll}
                      className="text-xs text-rose-600 hover:underline cursor-pointer"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {swatches.length === 0 ? (
                  <div className="p-6 text-center bg-blue-50/40 rounded-2xl border border-blue-100 text-xs text-slate-500">
                    You haven’t selected any swatches yet. Click "Add to Free Swatch Kit" on the fabric showcase!
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {swatches.map((s) => (
                      <div
                        key={s.id}
                        className="flex items-center justify-between p-2.5 bg-blue-50/40 rounded-xl border border-blue-100 text-xs"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <div
                            className="w-5 h-5 rounded-full flex-shrink-0 border border-slate-300"
                            style={{ backgroundColor: s.hexColor }}
                          />
                          <span className="font-medium text-slate-800 truncate">{s.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveSwatch(s.id)}
                          className="text-slate-400 hover:text-rose-600 ml-2"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Delivery Details */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                  Delivery Address (Free Express Delivery in Australia)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Liam Miller"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-300 text-xs bg-blue-50/20 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">Street Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 14 Highview Crescent"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-300 text-xs bg-blue-50/20 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">Suburb *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Castle Hill"
                      value={suburb}
                      onChange={(e) => setSuburb(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-300 text-xs bg-blue-50/20 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-700 block mb-1">State</label>
                      <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-slate-300 text-xs bg-blue-50/20 focus:outline-none focus:border-blue-600"
                      >
                        <option>NSW</option>
                        <option>ACT</option>
                        <option>VIC</option>
                        <option>QLD</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-700 block mb-1">Postcode *</label>
                      <input
                        type="text"
                        required
                        placeholder="2154"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-slate-300 text-xs bg-blue-50/20 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit CTA in Blue */}
              <button
                type="submit"
                disabled={swatches.length === 0}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                <span>Dispatch Free Swatches</span>
                <ArrowRight className="w-4 h-4 text-sky-200" />
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
