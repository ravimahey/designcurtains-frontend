import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Calendar, Clock, Menu, X, Sparkles, Type } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenEstimator: () => void;
  onOpenSwatches: () => void;
  activeFontTheme: 'playfair' | 'cinzel' | 'outfit';
  onChangeFontTheme: (theme: 'playfair' | 'cinzel' | 'outfit') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenEstimator,
  onOpenSwatches,
  activeFontTheme,
  onChangeFontTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Curtains & Drapes', href: '#products' },
    { name: 'Heading Styles', href: '#headings' },
    { name: 'Blinds & Shutters', href: '#products' },
    { name: 'Motorisation', href: '#products' },
    { name: 'Instant Estimator', href: '#estimator' },
    { name: 'Showroom & Areas', href: '#showroom' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification Announcement Bar in Regal Deep Navy */}
      <div className="bg-[#0A0F1D] text-[#F8FAFC] text-xs font-medium py-2 px-4 border-b border-blue-950">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Sydney Showroom: Castle Hill Homemaker Centre (Open 7 Days)</span>
            </span>
            <span className="hidden md:inline text-blue-900">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-sky-400" /> Mon–Sat: 9am–5pm | Sun: 10am–4pm
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs flex-wrap justify-center">
            {/* Font Style Quick Switcher */}
            <div className="flex items-center gap-1 bg-slate-900/90 border border-blue-900/80 rounded-full px-2 py-0.5 text-[11px]">
              <Type className="w-3 h-3 text-sky-400" />
              <span className="text-slate-400 mr-1 hidden lg:inline">Font:</span>
              <button
                onClick={() => onChangeFontTheme('playfair')}
                className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                  activeFontTheme === 'playfair' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Playfair
              </button>
              <button
                onClick={() => onChangeFontTheme('cinzel')}
                className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                  activeFontTheme === 'cinzel' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Cinzel
              </button>
              <button
                onClick={() => onChangeFontTheme('outfit')}
                className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                  activeFontTheme === 'outfit' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Outfit
              </button>
            </div>

            <span className="text-blue-900 hidden sm:inline">|</span>
            <button 
              onClick={onOpenSwatches}
              className="text-slate-300 hover:text-sky-300 underline underline-offset-2 transition-colors cursor-pointer"
            >
              Order Free Fabric Swatches
            </button>
            <span className="text-blue-900">|</span>
            <a 
              href="tel:1300760720" 
              className="flex items-center gap-1 text-sky-300 hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              1300 760 720
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar in Ice Blue & Crisp Slate */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-blue-100 py-3' 
          : 'bg-[#F8FAFC] border-b border-blue-100/80 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex flex-col group">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.16em] font-normal text-[#0A0F1D] uppercase group-hover:text-blue-700 transition-colors">
                Design Curtains
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-blue-900 font-semibold">
              <span>Sydney Bespoke</span>
              <span className="text-blue-600">•</span>
              <span>Est. 1971</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors tracking-wide relative group py-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action CTAs in Blue Theme */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenEstimator}
              className="text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full border border-blue-300 bg-white text-blue-950 hover:bg-blue-50 hover:border-blue-600 transition-all cursor-pointer shadow-sm"
            >
              Cost Estimator
            </button>
            <button
              onClick={onOpenBooking}
              className="text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all duration-200 flex items-center gap-2 cursor-pointer group"
            >
              <Calendar className="w-3.5 h-3.5 text-sky-200 group-hover:scale-110 transition-transform" />
              <span>Book Free Measure</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-600 text-white flex items-center gap-1 shadow-sm"
            >
              <Calendar className="w-3 h-3 text-sky-200" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-blue-50 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-blue-900" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-blue-100 px-6 py-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3 pb-4 border-b border-slate-100">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-800 hover:text-blue-600 transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full text-center py-2.5 rounded-xl border border-blue-200 text-blue-950 font-medium text-sm bg-blue-50/50"
              >
                Instant Price Estimator
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSwatches();
                }}
                className="w-full text-center py-2.5 rounded-xl border border-blue-300 bg-blue-50 text-blue-900 font-medium text-sm"
              >
                Order Free Fabric Swatches
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
              >
                <Calendar className="w-4 h-4 text-sky-200" />
                Book Free In-Home Measure & Quote
              </button>
              <a
                href="tel:1300760720"
                className="w-full py-2.5 text-center text-slate-600 font-medium text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                Call (02) 9894 0400 or 1300 760 720
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
