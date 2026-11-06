import React, { useState } from 'react';
import { FABRIC_SWATCHES, FabricSwatch } from '../data/curtainData';
import { Sparkles, Package, Check, Plus, Globe } from 'lucide-react';

interface FabricShowcaseProps {
  onOpenSwatchModal: () => void;
  selectedSwatches: string[];
  onToggleSwatch: (swatchId: string) => void;
}

export const FabricShowcase: React.FC<FabricShowcaseProps> = ({
  onOpenSwatchModal,
  selectedSwatches,
  onToggleSwatch,
}) => {
  const [selectedOpacity, setSelectedOpacity] = useState<string>('All');

  const filteredSwatches = selectedOpacity === 'All'
    ? FABRIC_SWATCHES
    : FABRIC_SWATCHES.filter(s => s.opacity === selectedOpacity);

  const opacityFilters = ['All', 'Sheer', 'Semi-Sheer', 'Blockout'];

  return (
    <section className="py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Tactile Luxury Textiles
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal tracking-tight">
              Curated European & Australian Designer Fabrics
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We source directly from heritage mills in Belgium, Italy, France, and Australian coating specialists. Select up to 4 complimentary swatches delivered straight to your door.
            </p>
          </div>

          {/* Sample Box CTA in Blue */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSwatchModal}
              className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white transition-all text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md shadow-blue-500/20"
            >
              <Package className="w-4 h-4 text-sky-200" />
              <span>Sample Box ({selectedSwatches.length} / 4 Selected)</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {opacityFilters.map((op) => (
            <button
              key={op}
              onClick={() => setSelectedOpacity(op)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedOpacity === op
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-blue-50/70 text-slate-700 hover:bg-blue-100 hover:text-blue-900'
              }`}
            >
              {op} Opacity
            </button>
          ))}
        </div>

        {/* Swatches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSwatches.map((swatch) => {
            const isSelected = selectedSwatches.includes(swatch.id);

            return (
              <div
                key={swatch.id}
                className={`bg-[#F8FAFC] rounded-3xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-600 ring-2 ring-blue-600/20 shadow-lg'
                    : 'border-blue-100 hover:border-blue-200 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Swatch preview with color disc */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-blue-100 shadow-inner group">
                    <img
                      src={swatch.imageUrl}
                      alt={swatch.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Color Swatch Circle */}
                    <div
                      className="absolute bottom-3 left-3 w-8 h-8 rounded-full border-2 border-white shadow-md"
                      style={{ backgroundColor: swatch.hexColor }}
                      title={swatch.name}
                    />

                    {/* Opacity Pill */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-blue-950 text-[11px] font-bold shadow-sm border border-blue-100">
                      {swatch.opacity}
                    </div>
                  </div>

                  {/* Information */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg font-bold text-slate-900">
                        {swatch.name}
                      </h4>
                      <span className="text-[11px] font-semibold text-blue-700 flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        {swatch.origin}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 font-medium">
                      {swatch.composition}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {swatch.textureDescription}
                    </p>
                  </div>
                </div>

                {/* Select button in Blue Theme */}
                <div className="pt-4 mt-4 border-t border-blue-100">
                  <button
                    onClick={() => onToggleSwatch(swatch.id)}
                    className={`w-full py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-white border border-blue-200 text-slate-800 hover:border-blue-600 hover:text-blue-700'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>In Sample Kit</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to Free Swatch Kit</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
