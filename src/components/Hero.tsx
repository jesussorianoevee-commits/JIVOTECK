import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      num: '01',
      words: ['CONECTIVIDAD', 'ACCESIBILIDAD', 'INFORMACIÓN', 'PERSONAS'],
      highlightIndex: 3, // PERSONAS underlined
      tagline: 'Tecnología intuitiva y centrada en las personas',
    },
    {
      num: '02',
      words: ['INNOVACIÓN', 'ESTRUCTURA', 'INDUSTRIA', 'PROCESOS'],
      highlightIndex: 2, // INDUSTRIA underlined
      tagline: 'Soluciones que responden a necesidades reales',
    },
    {
      num: '03',
      words: ['TECNOLOGÍA', 'DECISIONES', 'SIMPLICIDAD', 'PROPÓSITO'],
      highlightIndex: 3, // PROPÓSITO underlined
      tagline: 'Impulsando iniciativas con identidad propia',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#F8F6F1] text-[#0E2433] relative overflow-hidden">
      
      {/* Subtle innovative tech ambient grid & crosshair dots */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#0E2433_1.5px,transparent_1.5px)] [background-size:32px_32px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Messaging & Actions */}
          <div className="lg:col-span-6 space-y-6 lg:pr-4">

            {/* Kicker + Tech Telemetry Status Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-0.5 bg-[#FF6B35] rounded-full" aria-hidden="true" />
                <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0E2433]/70 uppercase">
                  JIVOTECK · CASA DE INNOVACIÓN TECNOLÓGICA
                </span>
              </div>

              {/* Subtle telemetry pill */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-[#D8D2C6]/80 text-[10px] font-mono font-semibold text-[#0E2433]/65 uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F5F50] animate-pulse" aria-hidden="true" />
                <span>INNOVACIÓN CON PROPÓSITO</span>
              </div>
            </div>

            {/* Title with Newsreader Serif and clean line-height to prevent letter overlapping */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] text-[#0E2433] leading-[1.22] tracking-tight font-medium">
              Ideas que también <br />
              <span className="italic font-normal">construyen</span> <br />
              mundos.
            </h1>

            {/* Description aligned with LinkedIn & official corporate definition */}
            <p className="text-base sm:text-lg text-[#0E2433]/80 leading-relaxed font-sans max-w-xl font-normal">
              Creamos tecnología que conecta, facilita e impulsa la innovación. JIVOTECK desarrolla, estructura e impulsa iniciativas tecnológicas propias orientadas a resolver problemas reales, simplificar procesos industriales y hacer la información accesible para todos.
            </p>

            {/* Actions: Primary Orange Pill & Secondary Pill */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#soluciones"
                className="bg-[#FF6B35] hover:bg-[#E85A24] text-white px-7 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
              >
                <span>Nuestras soluciones</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#contacto"
                className="bg-white hover:bg-neutral-50 text-[#0E2433] border border-[#D8D2C6] px-7 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E2433]"
              >
                <span>Contacto corporativo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#0E2433]/70" aria-hidden="true" />
              </a>
            </div>

            {/* Subtle telemetry footer */}
            <div className="pt-4 border-t border-[#D8D2C6]/60 flex items-center gap-4 text-[11px] font-mono text-[#0E2433]/50">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#FF6B35]" aria-hidden="true" />
                <span>TECNOLOGÍA PROPIA</span>
              </span>
              <span>·</span>
              <span>INFORMACIÓN ÚTIL & ENFOQUE HUMANO</span>
            </div>

          </div>

          {/* Right Column: Architectural Brand Showcase & Dynamic Carousel */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] rounded-3xl bg-white/80 border border-[#E5E0D5] p-5 sm:p-7 shadow-sm select-none">

              {/* Tech corner crosshair markers (+) */}
              <div className="absolute top-2.5 left-3 text-[10px] font-mono text-[#0E2433]/25" aria-hidden="true">+</div>
              <div className="absolute top-2.5 right-3 text-[10px] font-mono text-[#0E2433]/25" aria-hidden="true">+</div>
              <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-[#0E2433]/25" aria-hidden="true">+</div>
              <div className="absolute bottom-2.5 right-3 text-[10px] font-mono text-[#0E2433]/25" aria-hidden="true">+</div>

              {/* Graphic Visual Stage: strictly contains all diagonal geometric shapes so they never bleed into text */}
              <div className="relative w-full h-[210px] sm:h-[250px] rounded-2xl overflow-hidden bg-neutral-100 shadow-inner">

                {/* Right: Architectural Concrete Structure Photo */}
                <div className="absolute top-0 right-0 w-[55%] h-full z-0 overflow-hidden">
                  <img
                    src="/assets/hero_architecture.png"
                    alt="Estructura arquitectónica y geométrica JIVOTECK"
                    className="w-full h-full object-cover grayscale-[30%] contrast-[1.08]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-[#0E2433]/10 mix-blend-multiply" />
                </div>

                {/* Center Diagonal: Bold Orange Diagonal Stripe Framing the Brand */}
                <div 
                  className="absolute -top-[20%] right-[32%] w-[22%] h-[150%] bg-[#FF6B35] transform -skew-x-[22deg] z-10 shadow-lg pointer-events-none"
                  aria-hidden="true"
                />

                {/* Front Centerpiece: Dark Navy Parallelogram with Official JIVOTECK Brand */}
                <div 
                  className="absolute top-3 left-3 sm:top-4 sm:left-4 w-[60%] sm:w-[58%] h-[84%] sm:h-[82%] bg-[#0E2433] transform -skew-x-[22deg] rounded-2xl z-20 flex items-center justify-center shadow-2xl border border-white/10 overflow-hidden"
                >
                  {/* Subtle technical blueprint dot grid */}
                  <div 
                    className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" 
                    aria-hidden="true" 
                  />

                  {/* Counter-skew the brand container so the logo stands upright and prominent */}
                  <div className="transform skew-x-[22deg] px-3 py-2 flex items-center justify-center">
                    <img
                      src="/assets/jivoteck_logo_dark.png"
                      alt="JIVOTECK"
                      className="h-10 sm:h-13 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Subtle telemetry stamp inside the visual stage */}
                <div className="absolute bottom-2.5 right-3 z-20 text-[9px] font-mono tracking-wider text-white/90 bg-[#0E2433]/70 backdrop-blur-xs px-2 py-0.5 rounded border border-white/20 uppercase">
                  GEO · 21.88°N / 102.29°W
                </div>
              </div>

              {/* Bottom Information & Navigation Area: 100% clean, non-overlapping, and spacious */}
              <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">

                {/* Floating Strategic Words Column */}
                <div className="flex flex-col space-y-1.5">
                  {active.words.map((word, idx) => {
                    const isUnderlined = idx === active.highlightIndex;
                    return (
                      <div key={word} className="flex flex-col">
                        <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.24em] text-[#0E2433]/90 uppercase leading-none">
                          {word}
                        </span>
                        {isUnderlined && (
                          <span className="w-8 h-0.5 bg-[#FF6B35] mt-1.5 rounded-full" aria-hidden="true" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Carousel Navigation Indicators */}
                <div className="flex flex-col items-start sm:items-end gap-2 pt-1 sm:pt-0">
                  <span className="text-[11px] font-mono text-[#0E2433]/60 hidden sm:block">
                    {active.tagline}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#0E2433]/80 mr-1">
                      <span className="text-[#0E2433] font-black">{active.num}</span>
                      <span className="text-[#0E2433]/40"> / 03</span>
                    </span>

                    {/* Left Prev Button */}
                    <button
                      type="button"
                      onClick={prevSlide}
                      className="w-8 h-8 rounded-full border border-[#D8D2C6] bg-white hover:bg-neutral-100 flex items-center justify-center text-[#0E2433] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
                      aria-label="Diapositiva anterior"
                    >
                      <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                    </button>

                    {/* Right Next Button: Solid Orange Circle */}
                    <button
                      type="button"
                      onClick={nextSlide}
                      className="w-8 h-8 rounded-full bg-[#FF6B35] hover:bg-[#E85A24] flex items-center justify-center text-white transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
                      aria-label="Siguiente diapositiva"
                    >
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
