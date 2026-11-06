import React, { useState } from 'react';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, Star, CheckCircle2, ChevronRight, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenEstimator: () => void;
}

const HERO_MODES = [
  {
    id: 's-fold',
    tabName: 'S-Fold Sheers',
    title: 'Architectural S-Fold Wave Sheers',
    subtitle: 'Filter harsh Sydney sun into a luminous, gentle coastal glow with continuous flowing waves from floor to ceiling.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
    pill: 'Living & Dining Rooms',
    specs: '2.2x Fullness • Belgian Linen Voile • Slimline Track'
  },
  {
    id: 'dual-blockout',
    tabName: 'Day & Night Suites',
    title: 'Dual Sheer & Blockout Drapery',
    subtitle: 'The master bedroom gold standard. Airy sheers for private daylight, paired with 100% thermal acoustic blackout curtains.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    pill: 'Master Suites & Bedrooms',
    specs: '100% Light Seal • Thermal Climate Control • Dual Recessed Track'
  },
  {
    id: 'plantation',
    tabName: 'Plantation Shutters',
    title: 'Crafted Basswood Plantation Shutters',
    subtitle: 'Timeless architectural louvers custom-built for Sydney properties. Total privacy, airflow direction, and long-term asset value.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85',
    pill: 'Full Home Architecture',
    specs: 'Concealed Tilt Rod • 15-Year Warranty • Moisture-Proof Options'
  },
  {
    id: 'motorised',
    tabName: 'Somfy Motorisation',
    title: 'Smart Whisper-Quiet Motorised Drapes',
    subtitle: 'Automated curtain tracks powered by Somfy and Automate. Operate seamlessly from remotes, smartphone app, or sunrise timers.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=85',
    pill: 'Smart Living & Penthouses',
    specs: 'Somfy Glydea • Apple Home & Alexa • Lithium Rechargeable / 240V'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenEstimator }) => {
  const [activeTab, setActiveTab] = useState(0);
  const current = HERO_MODES[activeTab];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-4 pb-16 lg:pt-8 lg:pb-24 border-b border-blue-100">
      {/* Subtle ambient Blue gradient mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heritage & Trust Badges Strip in Blue */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-blue-100/80">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold tracking-wide">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              Sydney Bespoke Furnishings Since 1971
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
              • 55 Years of Craftsmanship
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-slate-800">4.9 / 5</span>
            <span className="text-slate-500 hidden sm:inline">(Over 500+ Sydney Homes Styled)</span>
          </div>
        </div>

        {/* Main Grid: Left Copy & Right Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Value Propositions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                <span className="w-6 h-[1.5px] bg-blue-600" />
                Custom Tailored in Sydney, Australia
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] text-[#0A0F1D] tracking-tight font-normal">
                Window Furnishings Crafted to Elevate <span className="italic font-serif text-blue-700">Sydney Homes.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed pt-1">
                From flowing architectural S-fold sheers to acoustic blockouts, tailored Roman blinds, and handcrafted plantation shutters. Expertly measured, locally made in Sydney, and immaculately fitted.
              </p>
            </div>

            {/* Value checklist with Blue checkmarks */}
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Free In-Home Laser Measure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>10-Year Sydney Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>2,000+ Designer Fabric Books</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Somfy Certified Motorisation</span>
              </div>
            </div>

            {/* Action Buttons in Blue Palette */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-sky-200 group-hover:scale-110 transition-transform" />
                <span>Book Free Measure & Quote</span>
                <ArrowRight className="w-4 h-4 text-sky-200 group-hover:translate-x-1 transition-all" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="px-6 py-4 rounded-xl bg-white border border-blue-200 hover:border-blue-600 text-slate-800 hover:text-blue-700 text-sm font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Instant Cost Estimator</span>
              </button>
            </div>

            {/* Showroom mini reassurance */}
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Castle Hill Showroom open today until 5:00 PM • Free Parking</span>
            </div>
          </div>

          {/* Right Column: Interactive Room Preview Tabs & Visualizer Showcase */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-xl shadow-blue-900/5 border border-blue-100">
              
              {/* Category selector pills in Blue */}
              <div className="flex items-center gap-1.5 p-1 bg-blue-50/70 rounded-2xl mb-4 overflow-x-auto no-scrollbar">
                {HERO_MODES.map((mode, idx) => (
                  <button
                    key={mode.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      activeTab === idx
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-blue-900 hover:bg-blue-100/60'
                    }`}
                  >
                    {mode.tabName}
                  </button>
                ))}
              </div>

              {/* Showcase Image & Live Details */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating badge pill */}
                <div className="absolute top-4 left-4 bg-slate-950/75 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-medium border border-blue-400/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  {current.pill}
                </div>

                {/* Bottom glassmorphic info bar */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-blue-100 shadow-lg transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-slate-900 leading-tight">
                        {current.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                        {current.subtitle}
                      </p>
                      <div className="mt-2 text-[11px] font-semibold text-blue-700 tracking-wide uppercase">
                        {current.specs}
                      </div>
                    </div>
                    <button
                      onClick={onOpenBooking}
                      className="p-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex-shrink-0 cursor-pointer shadow-sm"
                      title="Enquire about this style"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick stats below preview */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-100 text-center text-xs">
                <div>
                  <div className="font-bold text-slate-900 text-sm">Sydney Made</div>
                  <div className="text-slate-500 text-[11px]">Precision crafted</div>
                </div>
                <div className="border-x border-slate-200">
                  <div className="font-bold text-slate-900 text-sm">3–4 Weeks</div>
                  <div className="text-slate-500 text-[11px]">Average turnaround</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">10-Year</div>
                  <div className="text-slate-500 text-[11px]">Hardware warranty</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
