import React, { useState } from 'react';
import { HEADING_STYLES, HeadingStyle } from '../data/curtainData';
import { Sparkles, Check, Info, ArrowRight, Layers } from 'lucide-react';

interface HeadingVisualizerProps {
  onSelectHeadingForQuote: (headingName: string) => void;
}

export const HeadingVisualizer: React.FC<HeadingVisualizerProps> = ({ onSelectHeadingForQuote }) => {
  const [selectedHeading, setSelectedHeading] = useState<HeadingStyle>(HEADING_STYLES[0]);

  return (
    <section id="headings" className="py-20 bg-[#F0F6FA] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 bg-blue-100/80 px-3.5 py-1 rounded-full border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Curtain Craftsmanship & Drape Science
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal tracking-tight">
            Curtain Heading Style Visualizer
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            The heading determines how your curtain fabric gathers, ripples, and stacks back. Select each style below to explore fabric fullness ratios, track requirements, and room recommendations.
          </p>
        </div>

        {/* Heading Style Selectors - Blue Theme Pills Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {HEADING_STYLES.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedHeading(style)}
              className={`px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                selectedHeading.id === style.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                  : 'bg-white border border-blue-200 text-slate-700 hover:border-blue-600 hover:bg-blue-50/50'
              }`}
            >
              <span>{style.name}</span>
              {selectedHeading.id === style.id && (
                <span className="w-2 h-2 rounded-full bg-sky-200" />
              )}
            </button>
          ))}
        </div>

        {/* Interactive Detailed Feature Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-blue-900/5 border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Media with Badges */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner border border-blue-100">
                <img
                  src={selectedHeading.imageUrl}
                  alt={selectedHeading.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-semibold tracking-wide border border-blue-400/30">
                  {selectedHeading.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-blue-100 shadow-md">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-blue-600" />
                      Fabric Fullness:
                    </span>
                    <span className="text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-md font-bold">
                      {selectedHeading.fullness}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Architectural Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-blue-700">
                  Heading Analysis
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
                  {selectedHeading.name}
                </h3>
                <p className="text-sm text-slate-500 font-medium italic mt-1">
                  {selectedHeading.subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
                  {selectedHeading.description}
                </p>
              </div>

              {/* Architectural features list */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Key Design Features:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                  {selectedHeading.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 bg-blue-50/50 p-2.5 rounded-lg border border-blue-100">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Suited Rooms */}
              <div className="pt-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Recommended For:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedHeading.bestFor.map((room, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-md bg-slate-100 text-slate-800 font-medium border border-slate-200"
                    >
                      {room}
                    </span>
                  ))}
                </div>
              </div>

              {/* Track System */}
              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-blue-950">
                  <span className="font-bold">Hardware Compatibility: </span>
                  {selectedHeading.trackType}. Certified for Somfy motorised glide systems.
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onSelectHeadingForQuote(selectedHeading.name)}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-blue-500/20"
                >
                  <span>Select {selectedHeading.name.split('/')[0]} for Quote</span>
                  <ArrowRight className="w-4 h-4 text-sky-200" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
