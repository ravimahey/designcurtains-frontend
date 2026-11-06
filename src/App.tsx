import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HeadingVisualizer } from './components/HeadingVisualizer';
import { InstantEstimator } from './components/InstantEstimator';
import { ProductCatalog } from './components/ProductCatalog';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { FabricShowcase } from './components/FabricShowcase';
import { ShowroomAndAreas } from './components/ShowroomAndAreas';
import { ProcessSection } from './components/ProcessSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SwatchModal } from './components/SwatchModal';
import { Phone, Calendar } from 'lucide-react';

export function App() {
  const [fontTheme, setFontTheme] = useState<'playfair' | 'cinzel' | 'outfit'>('playfair');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSwatchOpen, setIsSwatchOpen] = useState(false);
  const [selectedSwatches, setSelectedSwatches] = useState<string[]>([
    'belgian-linen-ecru',
    'oatmeal-coastal-boucle'
  ]);
  const [prefillBooking, setPrefillBooking] = useState<{
    roomType?: string;
    treatment?: string;
    dimensions?: string;
    fabricTier?: string;
    motorised?: boolean;
    estimatedPrice?: string;
  } | null>(null);

  // Apply font theme to body dynamically
  useEffect(() => {
    document.body.classList.remove('font-theme-playfair', 'font-theme-cinzel', 'font-theme-outfit');
    document.body.classList.add(`font-theme-${fontTheme}`);
  }, [fontTheme]);

  const handleOpenBooking = () => {
    setPrefillBooking(null);
    setIsBookingOpen(true);
  };

  const handleOpenEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectHeadingForQuote = (headingName: string) => {
    setPrefillBooking({
      treatment: headingName,
      roomType: 'Living / Master Suite',
      estimatedPrice: 'Pending In-Home Laser Measurement'
    });
    setIsBookingOpen(true);
  };

  const handleSelectProduct = (productTitle: string) => {
    setPrefillBooking({
      treatment: productTitle,
      roomType: 'Primary Residence',
      estimatedPrice: 'Itemized In-Home Quote'
    });
    setIsBookingOpen(true);
  };

  const handleProceedFromEstimator = (details: {
    roomType: string;
    treatment: string;
    dimensions: string;
    fabricTier: string;
    motorised: boolean;
    estimatedPrice: string;
  }) => {
    setPrefillBooking(details);
    setIsBookingOpen(true);
  };

  const handleToggleSwatch = (swatchId: string) => {
    if (selectedSwatches.includes(swatchId)) {
      setSelectedSwatches(selectedSwatches.filter(id => id !== swatchId));
    } else {
      if (selectedSwatches.length >= 4) {
        setIsSwatchOpen(true);
        return;
      }
      setSelectedSwatches([...selectedSwatches, swatchId]);
    }
  };

  const handleRemoveSwatch = (id: string) => {
    setSelectedSwatches(selectedSwatches.filter(sId => sId !== id));
  };

  const handleClearAllSwatches = () => {
    setSelectedSwatches([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Sticky Header with Navigation, Font Theme Switcher & Top Bar */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenEstimator={handleOpenEstimator}
        onOpenSwatches={() => setIsSwatchOpen(true)}
        activeFontTheme={fontTheme}
        onChangeFontTheme={setFontTheme}
      />

      {/* Main Content Sections in Blue Palette */}
      <main className="flex-grow">
        {/* Luxury Hero with Interactive Mood Previews */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenEstimator={handleOpenEstimator}
        />

        {/* Interactive Heading Style Visualizer */}
        <HeadingVisualizer
          onSelectHeadingForQuote={handleSelectHeadingForQuote}
        />

        {/* Instant Cost & Fabric Yardage Estimator */}
        <InstantEstimator
          onProceedToBooking={handleProceedFromEstimator}
        />

        {/* Filterable Product Catalog */}
        <ProductCatalog
          onSelectProduct={handleSelectProduct}
        />

        {/* Before & After Interactive Transformation Slider */}
        <BeforeAfterSlider />

        {/* European & Australian Fabric Showcase + Swatch Order Box */}
        <FabricShowcase
          onOpenSwatchModal={() => setIsSwatchOpen(true)}
          selectedSwatches={selectedSwatches}
          onToggleSwatch={handleToggleSwatch}
        />

        {/* Castle Hill Showroom & Sydney Suburbs Postcode Checker */}
        <ShowroomAndAreas
          onOpenBooking={handleOpenBooking}
        />

        {/* 4-Step Bespoke Journey */}
        <ProcessSection />

        {/* Verified Sydney Client Testimonials */}
        <Testimonials />

        {/* Interactive Searchable FAQs */}
        <FAQSection
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* Luxury Comprehensive Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenEstimator={handleOpenEstimator}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefillData={prefillBooking}
      />

      {/* Swatch Sample Box Modal */}
      <SwatchModal
        isOpen={isSwatchOpen}
        onClose={() => setIsSwatchOpen(false)}
        selectedSwatchIds={selectedSwatches}
        onRemoveSwatch={handleRemoveSwatch}
        onClearAll={handleClearAllSwatches}
      />

      {/* Floating Mobile Quick Action Pill in Navy & Royal Blue */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-30 flex items-center gap-2 p-1.5 bg-[#0A0F1D]/95 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-900/60">
        <a
          href="tel:1300760720"
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 hover:text-white"
        >
          <Phone className="w-3.5 h-3.5 text-sky-400" />
          <span>Call Showroom</span>
        </a>
        <button
          onClick={handleOpenBooking}
          className="flex-[1.4] py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/25 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-sky-200" />
          <span>Free Measure</span>
        </button>
      </div>

    </div>
  );
}

export default App;
