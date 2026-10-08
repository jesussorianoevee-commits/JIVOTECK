import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, Activity } from 'lucide-react';
import { JivoteckEmblem } from './JivoteckLogo';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      num: '01',
      words: ['TECNOLOGÍA', 'ESTRATEGIA', 'IDEAS', 'PERSONAS'],
      highlightIndex: 3, // PERSONAS underlined
      tagline: 'Infraestructura y visión de largo plazo',
    },
    {
      num: '02',
      words: ['ESTRUCTURA', 'INNOVACIÓN', 'INDUSTRIA', 'PRODUCTOS'],
      highlightIndex: 2, // INDUSTRIA underlined
      tagline: 'Desarrollo enfocado en retos reales',
    },
    {
      num: '03',
      words: ['VISIÓN', 'IDENTIDAD', 'GOBERNANZA', 'FUTURO'],
      highlightIndex: 3, // FUTURO underlined
      tagline: 'Iniciativas con autonomía propia',
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
                  JIVOTECK · CORPORATIVO TECNOLÓGICO
                </span>
              </div>

              {/* Innovative subtle telemetry pill */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-[#D8D2C6]/80 text-[10px] font-mono font-semibold text-[#0E2433]/65 uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F5F50] animate-pulse" aria-hidden="true" />
                <span>NODO HQ · MÉXICO</span>
              </div>
            </div>

            {/* Title with Newsreader Serif and clean line-height to prevent letter overlapping */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] text-[#0E2433] leading-[1.22] tracking-tight font-medium">
              Ideas que también <br />
              <span className="italic font-normal">construyen</span> <br />
              mundos.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#0E2433]/80 leading-relaxed font-sans max-w-xl font-normal">
              Creamos y damos estructura a proyectos tecnológicos con visión de largo plazo. JIVOTECK es la casa corporativa desde la que se desarrolla Industrialpedia y desde la que pueden crecer nuevas iniciativas con identidad propia.
            </p>

            {/* Actions: Primary Orange Pill & Secondary Pill */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#ecosistema"
                className="bg-[#FF6B35] hover:bg-[#E85A24] text-white px-7 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
              >
                <span>Conoce el ecosistema</span>
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

            {/* Innovative subtle telemetry footer */}
            <div className="pt-4 border-t border-[#D8D2C6]/60 flex items-center gap-4 text-[11px] font-mono text-[#0E2433]/50">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#FF6B35]" aria-hidden="true" />
                <span>ECOSISTEMA ACTIVO</span>
              </span>
              <span>·</span>
              <span>ARQUITECTURA EMPRESARIAL B2B</span>
            </div>

          </div>

          {/* Right Column: Exact Geometric Composition with Fixed Non-Overlapping Spacing */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[530px] aspect-[4/3] sm:aspect-[16/11.5] rounded-3xl overflow-hidden bg-white/70 border border-[#E5E0D5] p-5 sm:p-6 shadow-sm select-none">

              {/* Tech corner crosshair markers (+) */}
              <div className="absolute top-2.5 left-3 text-[10px] font-mono text-[#0E2433]/25" aria-hidden="true">+</div>
              <div className="absolute top-2.5 right-3 text-[10px] font-mono text-[#0E2433]/25" aria-hidden="true">+</div>
              <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-[#0E2433]/25" aria-hidden="true">+</div>
              <div className="absolute bottom-2.5 right-3 text-[10px] font-mono text-[#0E2433]/25" aria-hidden="true">+</div>

              {/* Diagonal Background Stripe */}
              <div 
                className="absolute top-[-20%] right-[18%] w-[26%] h-[150%] bg-[#FF6B35] transform -skew-x-[26deg] z-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Architectural Concrete Corner Photo */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-6 w-[42%] h-[60%] rounded-2xl overflow-hidden z-0 shadow-inner">
                <img
                  src="/assets/hero_architecture.png"
                  alt="Estructura arquitectónica y geométrica JIVOTECK"
                  className="w-full h-full object-cover grayscale-[30%] contrast-[1.05]"
                  loading="eager"
                />
              </div>

              {/* Dark Navy Parallelogram with White Authentic Emblem (Calibrated height to NEVER overlap lower text) */}
              <div 
                className="absolute top-5 left-4 sm:top-6 sm:left-6 w-[56%] h-[50%] bg-[#0E2433] transform -skew-x-[26deg] rounded-2xl z-20 flex items-center justify-center shadow-xl overflow-hidden"
                aria-hidden="true"
              >
                {/* Tech blueprint dot grid */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
                
                {/* Counter-skew the emblem so it stands upright and prominent */}
                <div className="transform skew-x-[26deg] scale-120 sm:scale-135">
                  <JivoteckEmblem
                    className="w-18 h-18 sm:w-22 sm:h-22 drop-shadow-md"
                    color="#FFFFFF"
                    showAccent={false}
                  />
                </div>
              </div>

              {/* Bottom Information Area: Zero overlap, completely clean layout */}
              <div className="absolute bottom-4 sm:bottom-5 left-5 right-5 sm:left-6 sm:right-6 z-30 flex items-end justify-between">

                {/* Floating Strategic Words Column: Clean, completely unobstructed */}
                <div className="flex flex-col space-y-1.5 pt-2">
                  {active.words.map((word, idx) => {
                    const isUnderlined = idx === active.highlightIndex;
                    return (
                      <div key={word} className="flex flex-col">
                        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.22em] text-[#0E2433]/85 uppercase leading-none">
                          {word}
                        </span>
                        {isUnderlined && (
                          <span className="w-8 h-0.5 bg-[#FF6B35] mt-1 rounded-full" aria-hidden="true" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Carousel Navigation Indicators */}
                <div className="flex flex-col items-end gap-1.5">
                  <span className="text-[10px] font-mono text-[#0E2433]/50 hidden sm:block">
                    {active.tagline}
                  </span>

                  <div className="flex items-center gap-2.5">
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
