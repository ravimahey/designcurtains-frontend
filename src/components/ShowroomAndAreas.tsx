import React, { useState } from 'react';
import { POPULAR_SUBURBS, SuburbCoverage } from '../data/curtainData';
import { MapPin, Phone, Clock, Search, CheckCircle2, Car, Navigation } from 'lucide-react';

interface ShowroomProps {
  onOpenBooking: () => void;
}

export const ShowroomAndAreas: React.FC<ShowroomProps> = ({ onOpenBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSuburbs = POPULAR_SUBURBS.filter(
    s => s.suburb.toLowerCase().includes(searchQuery.toLowerCase()) ||
         s.postcode.includes(searchQuery) ||
         s.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="showroom" className="py-20 bg-[#F0F6FA] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider border border-blue-200">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            Sydney Showroom & Mobile Service
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal">
            Visit Our Castle Hill Showroom or We Come to You
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Experience 2,000+ fabric samples and full-scale motorized curtain displays in our Hills District showroom, or book a mobile consultation anywhere across Greater Sydney.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Flagship Showroom Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-blue-900/5 border border-blue-100 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Flagship Destination
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 mt-0.5">
                    Castle Hill Homemaker Centre
                  </h3>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold border border-blue-200">
                  Open 7 Days
                </span>
              </div>

              {/* Showroom Imagery */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-blue-100 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                  alt="Castle Hill Showroom Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-white text-xs font-medium">
                  Shop 9, Level 1 • Dedicated Interactive Displays
                </div>
              </div>

              {/* Showroom Details with Blue icons */}
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Address: </span>
                    Shop 9, Castle Hill Homemaker Centre, 6 Victoria Ave, Castle Hill NSW 2154
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Phone: </span>
                    <a href="tel:0298940400" className="hover:text-blue-700 underline mr-2">(02) 9894 0400</a>
                    <span className="text-slate-400">|</span>
                    <a href="tel:1300760720" className="hover:text-blue-700 underline ml-2">1300 760 720</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Trading Hours: </span>
                    Monday to Saturday: 9:00am – 5:00pm | Sunday: 10:00am – 4:00pm
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Parking: </span>
                    Abundant complimentary parking directly in front of the centre entrance.
                  </div>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=Castle+Hill+Homemaker+Centre+6+Victoria+Ave+Castle+Hill+NSW+2154"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl border border-blue-200 hover:border-blue-600 text-slate-800 text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4 text-blue-600" />
                <span>Google Maps Directions</span>
              </a>
              <button
                onClick={onOpenBooking}
                className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-blue-500/20"
              >
                <span>Book Showroom Walkthrough</span>
              </button>
            </div>

          </div>

          {/* Right Column: Mobile Service Suburb Checker */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-blue-900/5 border border-blue-100 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="pb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Mobile In-Home Van Service
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 mt-0.5">
                  We Travel Across Greater Sydney
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Our specialized mobile styling vans bring full fabric swatches, timber shutter samples, and laser measuring tools directly to your residence.
                </p>
              </div>

              {/* Suburb Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-blue-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Enter your Sydney suburb or postcode (e.g. Castle Hill, Mosman, 2154)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:border-blue-600 text-xs sm:text-sm text-slate-900 bg-blue-50/30"
                />
              </div>

              {/* Coverage List Box */}
              <div className="border border-blue-100 rounded-2xl overflow-hidden max-h-72 overflow-y-auto">
                <div className="bg-blue-50/70 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-blue-950 flex justify-between">
                  <span>Sydney Suburb & Postcode</span>
                  <span>Mobile Van Schedule</span>
                </div>
                <div className="divide-y divide-slate-100">
                  {filteredSuburbs.length > 0 ? (
                    filteredSuburbs.map((item) => (
                      <div key={item.suburb} className="p-3.5 flex items-center justify-between text-xs hover:bg-blue-50/50 transition-colors">
                        <div>
                          <div className="font-bold text-slate-900 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                            {item.suburb} ({item.postcode})
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{item.region}</div>
                        </div>
                        <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 border border-blue-200">
                          {item.transitDays}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="p-6 text-center text-xs text-slate-500">
                      We cover all of Greater Sydney & surrounding regions! Contact us for custom bookings outside standard routes.
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Bottom Suburb Banner in Blue */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200 flex items-center justify-between gap-4">
                <div className="text-xs text-blue-950">
                  <span className="font-bold">Complimentary Consultation: </span>
                  No travel fees across all Sydney metropolitan zones.
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold whitespace-nowrap cursor-pointer shadow-sm shadow-blue-500/20"
                >
                  Book My Suburb
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
