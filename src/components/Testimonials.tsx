import React from 'react';
import { REVIEWS_DATA } from '../data/curtainData';
import { Star, ShieldCheck, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#F8FAFC] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Sydney Client Experiences
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal">
            Loved Across Sydney for Over 50 Years
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Read verified feedback from homeowners across the Hills District, North Shore, and Eastern Suburbs.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars and date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {rev.date}
                  </span>
                </div>

                {/* Project Tag in Blue */}
                <div className="inline-block bg-blue-50 text-blue-900 border border-blue-200 px-3 py-1 rounded-md text-xs font-semibold">
                  {rev.project}
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic relative">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Verified Tag */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-slate-900 text-base">
                    {rev.author}
                  </div>
                  <div className="text-xs text-slate-500">
                    {rev.suburb}
                  </div>
                </div>

                {rev.verified && (
                  <div className="flex items-center gap-1.5 text-xs text-blue-700 font-semibold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Verified Project</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Trust banner in Deep Navy Blue */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#0A0F1D] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-blue-950">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-light">
              Experience the Design Curtains Difference
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Join over 15,000 satisfied Sydney residences styled since 1971.
            </p>
          </div>
          <div className="flex items-center gap-6 text-center">
            <div>
              <div className="font-serif text-2xl font-bold text-sky-400">52+</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider">Years Heritage</div>
            </div>
            <div className="w-px h-8 bg-blue-900" />
            <div>
              <div className="font-serif text-2xl font-bold text-sky-400">10-Yr</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider">Warranty</div>
            </div>
            <div className="w-px h-8 bg-blue-900" />
            <div>
              <div className="font-serif text-2xl font-bold text-sky-400">100%</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider">Custom Made</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
