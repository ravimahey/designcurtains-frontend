import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Award } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenEstimator }) => {
  return (
    <footer className="bg-[#0A0F1D] text-[#F8FAFC] pt-16 pb-12 border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-950/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <div className="font-serif text-2xl sm:text-3xl tracking-[0.16em] uppercase font-light text-white">
                Design Curtains
              </div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-sky-400 font-semibold mt-1">
                Sydney Bespoke Window Furnishings • Est. 1971
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Custom-made architectural sheer curtains, blockout drapes, plantation shutters, and Somfy motorised window treatments for Sydney homes and commercial sanctuaries.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-sky-400" />
                50+ Years Sydney Craftsmanship
              </span>
            </div>
          </div>

          {/* Quick Links: Products */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-blue-950 pb-2">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#products" className="hover:text-sky-300 transition-colors">S-Fold Wave Sheers</a></li>
              <li><a href="#products" className="hover:text-sky-300 transition-colors">Triple Pinch Pleat Drapes</a></li>
              <li><a href="#products" className="hover:text-sky-300 transition-colors">Dual Day & Night Suites</a></li>
              <li><a href="#products" className="hover:text-sky-300 transition-colors">Basswood Shutters</a></li>
              <li><a href="#products" className="hover:text-sky-300 transition-colors">Designer Roller Blinds</a></li>
              <li><a href="#products" className="hover:text-sky-300 transition-colors">Tailored Roman Blinds</a></li>
              <li><a href="#products" className="hover:text-sky-300 transition-colors">Custom Pelmets & Swags</a></li>
            </ul>
          </div>

          {/* Quick Links: Tools & Design */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-blue-950 pb-2">
              Design & Guides
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#headings" className="hover:text-sky-300 transition-colors">Heading Style Guide</a></li>
              <li><button onClick={onOpenEstimator} className="hover:text-sky-300 transition-colors text-left cursor-pointer">Instant Price Calculator</button></li>
              <li><a href="#showroom" className="hover:text-sky-300 transition-colors">Sydney Suburbs Covered</a></li>
              <li><a href="#reviews" className="hover:text-sky-300 transition-colors">Client Testimonials</a></li>
              <li><button onClick={onOpenBooking} className="hover:text-sky-300 transition-colors text-left cursor-pointer">Free In-Home Consultation</button></li>
              <li><a href="#showroom" className="hover:text-sky-300 transition-colors">Castle Hill Showroom</a></li>
            </ul>
          </div>

          {/* Showroom & Contact in Blue Palette */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-blue-950 pb-2">
              Showroom & Contacts
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>Shop 9, Castle Hill Homemaker Centre, 6 Victoria Ave, Castle Hill NSW 2154</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <div className="space-x-3">
                  <a href="tel:0298940400" className="hover:text-sky-300">(02) 9894 0400</a>
                  <span>•</span>
                  <a href="tel:1300760720" className="hover:text-sky-300 font-semibold">1300 760 720</a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:info@designcurtains.com.au" className="hover:text-sky-300">
                  info@designcurtains.com.au
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Mon–Sat: 9:00am–5:00pm | Sun: 10:00am–4:00pm</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center shadow-md shadow-blue-500/20"
              >
                Book Showroom Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Accreditation & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              10-Year Sydney Workmanship Guarantee
            </span>
            <span>•</span>
            <span>Somfy Motorisation Certified Partner</span>
            <span>•</span>
            <span>Child-Safe Tension Systems (ACCC Compliant)</span>
          </div>

          <div className="text-center md:text-right text-[11px] text-slate-400">
            © {new Date().getFullYear()} Design Curtains & Blinds Pty Ltd. All Rights Reserved. Sydney, NSW Australia.
          </div>
        </div>

      </div>
    </footer>
  );
};
