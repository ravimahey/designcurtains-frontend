import React from 'react';
import { Calendar, Compass, Scissors, CheckCheck, Sparkles } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'In-Home Design & Laser Measure',
    desc: 'Our experienced Sydney decorator visits your residence with fabric books and precision laser gauges to evaluate architectural drop, sunlight angles, and privacy goals.',
    icon: Calendar,
  },
  {
    step: '02',
    title: 'Textile & Track Engineering',
    desc: 'Select your preferred drape fullness (S-fold, pinch pleat), fabric opacity, Somfy motorisation, and track concealment (recessed ceiling or wall bracket).',
    icon: Compass,
  },
  {
    step: '03',
    title: 'Precision Sydney Fabrication',
    desc: 'Handcrafted in Sydney by master artisans with over 50 years of heritage. Weighted bottom hems, flawless alignment, and strict quality control before dispatch.',
    icon: Scissors,
  },
  {
    step: '04',
    title: 'White-Glove Fitting & Steaming',
    desc: 'Our certified installers mount tracks, hang drapes, link smart home remotes, and steam every pleat on-site for a flawless luxury magazine finish.',
    icon: CheckCheck,
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            End-To-End Bespoke Service
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal">
            The Seamless 4-Step Journey
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From your very first idea to the final vertical steam press, we manage every single detail in-house.
          </p>
        </div>

        {/* Steps Grid in Blue Palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-blue-100 flex flex-col justify-between group hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-blue-200 group-hover:text-blue-600 transition-colors">
                      {item.step}
                    </span>
                    <div className="p-3 rounded-2xl bg-white border border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-blue-100 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Step {index + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
