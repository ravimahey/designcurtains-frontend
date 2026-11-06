import React, { useState } from 'react';
import { FAQS } from '../data/curtainData';
import { ChevronDown, HelpCircle, Phone, Search } from 'lucide-react';

interface FAQProps {
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const filteredFaqs = FAQS.filter(
    f => f.q.toLowerCase().includes(search.toLowerCase()) ||
         f.a.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-b border-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider border border-blue-200">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            Frequently Asked Questions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal">
            Everything You Need to Know
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Clear answers about measurements, fabrics, motorisation, turnaround times, and our Castle Hill showroom.
          </p>

          {/* Quick Search in Blue */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-blue-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. Somfy, turnaround, warranty)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 bg-blue-50/20"
            />
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-300 bg-[#F0F6FA] shadow-sm'
                    : 'border-slate-200 bg-white hover:border-blue-200'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-slate-900">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-blue-100 text-blue-800' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Banner in Blue */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-50/80 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-slate-900 text-sm">Have a unique architectural question?</div>
            <div className="text-xs text-slate-600 mt-0.5">
              Speak directly with our senior curtain craftspeople in Castle Hill.
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:1300760720"
              className="px-4 py-2.5 rounded-xl bg-white border border-blue-200 text-slate-800 font-semibold text-xs flex items-center gap-1.5 hover:border-blue-600 hover:text-blue-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              1300 760 720
            </a>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors cursor-pointer shadow-md shadow-blue-500/20"
            >
              Book In-Home Measure
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
