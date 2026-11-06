import React, { useState } from 'react';
import { PRODUCTS_LIST, ProductItem } from '../data/curtainData';
import { Sparkles, Clock, ShieldCheck, Check, ArrowUpRight } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (productTitle: string) => void;
}

type CategoryFilter = 'all' | 'curtains' | 'blinds' | 'shutters' | 'motorisation' | 'soft-furnishings';

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_LIST
    : PRODUCTS_LIST.filter(p => p.category === activeCategory);

  const filterTabs: { label: string; value: CategoryFilter }[] = [
    { label: 'All Collections', value: 'all' },
    { label: 'Bespoke Curtains', value: 'curtains' },
    { label: 'Custom Blinds', value: 'blinds' },
    { label: 'Plantation Shutters', value: 'shutters' },
    { label: 'Smart Motorisation', value: 'motorisation' },
    { label: 'Soft Furnishings & Bedheads', value: 'soft-furnishings' },
  ];

  return (
    <section id="products" className="py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Sydney Handcrafted Portfolio
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal tracking-tight">
              Curated Window Furnishings & Interior Decor
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every curtain, blind, shutter and pelmet is individually measured and precision crafted to your home’s exact architectural specifications.
            </p>
          </div>

          {/* Guarantee Pill in Blue */}
          <div className="flex items-center gap-3 bg-blue-50/60 border border-blue-200 px-4 py-3 rounded-2xl flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-slate-900">100% Australian Made</div>
              <div className="text-slate-500">Fabricated locally in Sydney</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveCategory(tab.value)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === tab.value
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-blue-50/60 text-slate-700 hover:bg-blue-100/80 hover:text-blue-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#F8FAFC] rounded-3xl overflow-hidden border border-blue-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-semibold tracking-wide border border-blue-400/30">
                    {product.tag}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-blue-950 text-[11px] font-bold shadow-sm border border-blue-100">
                    {product.startingPrice}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs text-blue-900 font-medium italic mt-0.5">
                      {product.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Highlights with Blue checkmarks */}
                  <div className="space-y-1.5 pt-2 border-t border-blue-100">
                    {product.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom metadata & CTA */}
              <div className="p-6 pt-0 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-blue-100 pt-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                    {product.leadTime}
                  </span>
                  <span className="font-medium text-slate-700">
                    {product.warranty}
                  </span>
                </div>

                <button
                  onClick={() => onSelectProduct(product.title)}
                  className="w-full py-3 rounded-xl bg-white border border-blue-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white text-slate-800 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Book Free Measure for This Style</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
