import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Zap } from 'lucide-react';

interface EstimatorProps {
  onProceedToBooking: (estimateDetails: {
    roomType: string;
    treatment: string;
    dimensions: string;
    fabricTier: string;
    motorised: boolean;
    estimatedPrice: string;
  }) => void;
}

const PRESET_WINDOWS = [
  { label: 'Bedroom Window', width: 1.8, height: 2.2, desc: 'Standard 1.8m × 2.2m' },
  { label: 'Living Sliding Doors', width: 3.0, height: 2.6, desc: 'Popular 3.0m × 2.6m' },
  { label: 'Grand Floor-to-Ceiling', width: 4.2, height: 2.8, desc: 'Luxury 4.2m × 2.8m' },
];

const TREATMENTS = [
  { id: 's-fold-sheer', name: 'S-Fold Sheer Curtain', basePerMeter: 240, fullness: 2.2 },
  { id: 'pinch-blockout', name: 'Triple Pinch Pleat Blockout', basePerMeter: 310, fullness: 2.5 },
  { id: 'dual-curtain', name: 'Dual Day/Night Curtain Suite', basePerMeter: 490, fullness: 4.4 },
  { id: 'plantation-shutter', name: 'Basswood Plantation Shutter', basePerMeter: 360, fullness: 1.0 },
  { id: 'roller-blind', name: 'Designer Motorised Roller Blind', basePerMeter: 180, fullness: 1.0 },
];

const FABRIC_TIERS = [
  { id: 'studio', name: 'Studio Essential', multiplier: 1.0, desc: 'High-durability Australian poly-linen blend' },
  { id: 'linen', name: 'Belgian Pure Linen', multiplier: 1.35, desc: 'Natural flax with breezy texture & organic drape' },
  { id: 'luxe', name: 'European Silk & Velvet', multiplier: 1.65, desc: 'Heavy luxury drape with maximum acoustic depth' },
];

export const InstantEstimator: React.FC<EstimatorProps> = ({ onProceedToBooking }) => {
  const [selectedPreset, setSelectedPreset] = useState(1);
  const [width, setWidth] = useState(3.0);
  const [height, setHeight] = useState(2.6);
  const [selectedTreatment, setSelectedTreatment] = useState(TREATMENTS[0]);
  const [selectedTier, setSelectedTier] = useState(FABRIC_TIERS[1]);
  const [isMotorised, setIsMotorised] = useState(true);

  // Calculate pricing
  const fabricMeters = Math.round(width * selectedTreatment.fullness * 10) / 10;
  const rawBase = width * selectedTreatment.basePerMeter * selectedTier.multiplier;
  const motorCost = isMotorised ? 380 : 0;
  const lowEst = Math.round(rawBase + motorCost);
  const highEst = Math.round(lowEst * 1.18);
  const formattedEstimate = `$${lowEst.toLocaleString()} – $${highEst.toLocaleString()}`;

  const handleApplyPreset = (index: number) => {
    setSelectedPreset(index);
    setWidth(PRESET_WINDOWS[index].width);
    setHeight(PRESET_WINDOWS[index].height);
  };

  const handleProceed = () => {
    onProceedToBooking({
      roomType: PRESET_WINDOWS[selectedPreset]?.label || 'Custom Window',
      treatment: selectedTreatment.name,
      dimensions: `${width}m (W) × ${height}m (H)`,
      fabricTier: selectedTier.name,
      motorised: isMotorised,
      estimatedPrice: formattedEstimate,
    });
  };

  return (
    <section id="estimator" className="py-20 bg-[#F8FAFC] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider border border-blue-200">
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            Transparent Sydney Pricing
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal">
            Instant Custom Price & Fabric Estimator
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Get an instant realistic estimate for custom window furnishings tailored to your room size, heading style, and fabric preferences.
          </p>
        </div>

        {/* Main interactive calculator layout */}
        <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Configuration Controls */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-slate-200">
              
              {/* Step 1: Window Dimension Presets */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">1</span>
                    Window & Door Dimensions
                  </label>
                  <span className="text-xs text-slate-500">Preset or manual sliders</span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {PRESET_WINDOWS.map((p, idx) => (
                    <button
                      key={p.label}
                      onClick={() => handleApplyPreset(idx)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                        selectedPreset === idx
                          ? 'border-blue-600 bg-blue-50/60 text-blue-950 font-semibold shadow-sm ring-1 ring-blue-600'
                          : 'border-slate-200 hover:border-blue-300 text-slate-600'
                      }`}
                    >
                      <div className="font-bold">{p.label}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{p.desc}</div>
                    </button>
                  ))}
                </div>

                {/* Sliders */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-blue-50/40 p-4 rounded-xl border border-blue-100">
                  <div>
                    <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                      <span>Width:</span>
                      <span className="font-bold text-blue-900">{width} metres</span>
                    </div>
                    <input
                      type="range"
                      min="1.0"
                      max="7.0"
                      step="0.1"
                      value={width}
                      onChange={(e) => {
                        setWidth(parseFloat(e.target.value));
                        setSelectedPreset(-1);
                      }}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                      <span>Drop Height:</span>
                      <span className="font-bold text-blue-900">{height} metres</span>
                    </div>
                    <input
                      type="range"
                      min="1.2"
                      max="3.6"
                      step="0.1"
                      value={height}
                      onChange={(e) => {
                        setHeight(parseFloat(e.target.value));
                        setSelectedPreset(-1);
                      }}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Treatment Style */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">2</span>
                  Select Window Treatment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {TREATMENTS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTreatment(t)}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between text-xs ${
                        selectedTreatment.id === t.id
                          ? 'border-blue-600 bg-blue-50/70 font-semibold text-blue-950 shadow-sm ring-1 ring-blue-600'
                          : 'border-slate-200 hover:border-blue-200 text-slate-700'
                      }`}
                    >
                      <span>{t.name}</span>
                      {selectedTreatment.id === t.id && (
                        <Check className="w-4 h-4 text-blue-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Fabric Quality Tier */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">3</span>
                  Fabric Collection Grade
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {FABRIC_TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTier(tier)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer text-xs ${
                        selectedTier.id === tier.id
                          ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-semibold shadow-sm ring-1 ring-blue-600'
                          : 'border-slate-200 hover:border-blue-200 text-slate-600'
                      }`}
                    >
                      <div className="font-bold">{tier.name}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{tier.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Motorisation Option */}
              <div className="pt-2">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-blue-50/40 border border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                        Add Somfy Smart Motorisation
                      </div>
                      <div className="text-xs text-slate-500">
                        Ultra-quiet battery or 240V motor with app & remote (+ $380)
                      </div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isMotorised}
                      onChange={(e) => setIsMotorised(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Column: Estimated Summary Box in Deep Navy Blue */}
            <div className="lg:col-span-5 bg-[#0A0F1D] text-[#F8FAFC] p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                
                <div className="flex items-center justify-between border-b border-blue-950 pb-4">
                  <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
                    Specification Breakdown
                  </span>
                  <span className="text-xs text-slate-400">Sydney Handcrafted</span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex justify-between py-1.5 border-b border-blue-950/80">
                    <span className="text-slate-400">Product:</span>
                    <span className="font-semibold text-white">{selectedTreatment.name}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-blue-950/80">
                    <span className="text-slate-400">Window Dimensions:</span>
                    <span className="font-semibold text-white">{width}m width × {height}m drop</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-blue-950/80">
                    <span className="text-slate-400">Fabric Grade:</span>
                    <span className="font-semibold text-white">{selectedTier.name}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-blue-950/80">
                    <span className="text-slate-400">Calculated Fabric Meterage:</span>
                    <span className="font-semibold text-sky-300">Approx. {fabricMeters} metres</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-blue-950/80">
                    <span className="text-slate-400">Operation:</span>
                    <span className="font-semibold text-white">
                      {isMotorised ? 'Somfy Smart Motorised' : 'Manual Smooth Glide'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-blue-950/80">
                    <span className="text-slate-400">Workmanship Warranty:</span>
                    <span className="font-semibold text-sky-400">10-Year Local Warranty</span>
                  </div>
                </div>

                {/* Estimate Result Display */}
                <div className="bg-slate-900/90 rounded-2xl p-5 border border-blue-900/60 mt-6 shadow-inner">
                  <div className="text-xs text-sky-400 font-medium uppercase tracking-wider">
                    Estimated Custom Price Guide
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl text-white font-semibold mt-1">
                    {formattedEstimate}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                    * Includes Sydney laser measure, custom handcrafting, track hardware & white-glove installation. Exact price confirmed during free in-home consultation.
                  </p>
                </div>

              </div>

              {/* Bottom Action in Blue */}
              <div className="mt-8 pt-4">
                <button
                  onClick={handleProceed}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30"
                >
                  <span>Book Free Measure & Lock in Estimate</span>
                  <ArrowRight className="w-4 h-4 text-sky-200" />
                </button>
                <div className="text-center text-[11px] text-slate-400 mt-3">
                  No commitment required • Free cancellation anytime
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
