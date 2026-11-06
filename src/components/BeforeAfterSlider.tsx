import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            The Design Curtains Transformation
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal">
            See the Architecture Soften & Come Alive
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Drag the slider to witness how custom floor-to-ceiling drapery softens stark glass lines, filters sunlight, and creates an intimate, acoustic sanctuary.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/9] sm:aspect-[21/10] rounded-3xl overflow-hidden shadow-2xl border border-blue-200 select-none cursor-ew-resize group"
          >
            {/* Background Image: AFTER (Transformed Room with Luxury S-Fold Sheers) */}
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85"
              alt="Transformed Room with Luxury S-Fold Sheers"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-blue-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-semibold tracking-wide border border-blue-400/40 flex items-center gap-1.5">
              <span>AFTER: Bespoke S-Fold Sheers</span>
            </div>

            {/* Foreground Image: BEFORE (Raw Stark Room with Harsh Glare) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                alt="Bare Room with Harsh Sun Glare"
                className="absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-110"
                style={{ width: `${containerRef.current ? containerRef.current.offsetWidth : 900}px`, maxWidth: 'none' }}
              />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-semibold tracking-wide border border-white/20">
                BEFORE: Stark Glass & Glare
              </div>
            </div>

            {/* Slider Dividing Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle Button in Vibrant Blue */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white border-2 border-white shadow-xl flex items-center justify-center transition-transform group-hover:scale-110">
                <MoveHorizontal className="w-5 h-5 text-sky-200" />
              </div>
            </div>

            {/* Helper drag pill */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs pointer-events-none flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
              <span>Drag slider left or right</span>
            </div>
          </div>

          {/* Key Transformation Comparison Points in Blue */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-white rounded-2xl border border-blue-100">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Diffused Natural Glow
              </div>
              <p className="text-xs text-slate-600">
                Eliminates harsh TV and screen reflections while filling your living space with soft, cinematic daylight.
              </p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-blue-100">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Acoustic Softening
              </div>
              <p className="text-xs text-slate-600">
                Absorbs harsh floor and glass echo, delivering the serene, tranquil atmosphere of a 5-star boutique resort.
              </p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-blue-100">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Year-Round Climate Seal
              </div>
              <p className="text-xs text-slate-600">
                Cuts summer heat transfer by up to 45% and retains winter warmth, significantly lowering Sydney energy bills.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
