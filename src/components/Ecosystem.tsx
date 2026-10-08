import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Cpu, Layers } from 'lucide-react';
import { JivoteckEmblem } from './JivoteckLogo';
import { siteConfig } from '../config/siteConfig';

export const Ecosystem: React.FC = () => {
  return (
    <section id="ecosistema" className="py-20 sm:py-28 bg-[#F8F6F1] text-[#0E2433] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Section Header matching Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Title Area */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-0.5 bg-[#FF6B35] rounded-full" aria-hidden="true" />
              <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0E2433]/70 uppercase">
                NUESTRAS INICIATIVAS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0E2433] tracking-tight leading-[1.20]">
              Un ecosistema de ideas con impacto real.
            </h2>
          </div>

          {/* Right Subtitle & Link (with vertical divider on desktop) */}
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[#D8D2C6] space-y-4">
            <p className="font-sans text-sm sm:text-base text-[#0E2433]/75 leading-relaxed">
              Desarrollamos y damos estructura a iniciativas que resuelven problemas reales con tecnología, con identidad propia y enfoque en la industria.
            </p>
            <a
              href="#ecosistema"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#FF6B35] hover:text-[#E85A24] uppercase transition-colors"
            >
              <span>Ver todo el ecosistema</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

        </div>

        {/* Featured Card: Industrialpedia matching Mockup with tech details */}
        <div className="bg-white rounded-3xl border border-[#E5E0D5] shadow-jivo-card overflow-hidden hover:shadow-jivo-hover transition-all duration-300 relative group">
          
          {/* Tech corner markers (+) */}
          <div className="absolute top-3 left-3 text-[10px] font-mono text-[#0E2433]/20 select-none" aria-hidden="true">+</div>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-[#0E2433]/20 select-none" aria-hidden="true">+</div>
          <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#0E2433]/20 select-none" aria-hidden="true">+</div>
          <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#0E2433]/20 select-none" aria-hidden="true">+</div>

          <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 sm:p-8 lg:p-10 gap-6 sm:gap-8">

            {/* Left Navy Square Badge with emblem */}
            <div className="md:col-span-3 flex justify-start sm:justify-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#0E2433] flex items-center justify-center overflow-hidden shadow-md shrink-0">
                {/* Diagonal orange slashes in corners */}
                <div 
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#FF6B35] transform rotate-45 pointer-events-none" 
                  aria-hidden="true" 
                />
                <div 
                  className="absolute -top-6 -right-6 w-12 h-12 bg-[#FF6B35] transform rotate-45 pointer-events-none" 
                  aria-hidden="true" 
                />
                {/* Authentic White Jivoteck Emblem */}
                <JivoteckEmblem
                  className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow"
                  color="#FFFFFF"
                  showAccent={false}
                />
              </div>
            </div>

            {/* Middle Content */}
            <div className="md:col-span-5 space-y-3.5">
              
              {/* Active Initiative Tag + Tech telemetry indicator */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#D8D2C6] text-[10px] font-mono font-bold tracking-widest text-[#0E2433]/80 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" aria-hidden="true" />
                  <span>INICIATIVA ACTIVA</span>
                </div>
                <span className="text-[10px] font-mono text-[#0E2433]/40 tracking-wider">
                  RAMA INDUSTRIAL
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0E2433] tracking-tight">
                Industrialpedia
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#0E2433]/75 leading-relaxed">
                Tecnología e información para la industria con identidad y desarrollo propios.
              </p>

              {/* Innovative tech capabilities chips */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#F8F6F1] text-[10px] font-mono text-[#0E2433]/70 border border-[#E5E0D5]">
                  <Cpu className="w-3 h-3 text-[#2F5F50]" aria-hidden="true" />
                  <span>Datos MRO</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#F8F6F1] text-[10px] font-mono text-[#0E2433]/70 border border-[#E5E0D5]">
                  <Layers className="w-3 h-3 text-[#2F5F50]" aria-hidden="true" />
                  <span>Software Privado</span>
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.industrialpedia.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-neutral-50 border border-[#D8D2C6] text-[#0E2433] hover:border-[#FF6B35] hover:text-[#FF6B35] px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
                >
                  <span>industrialpedia.com.mx</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right Metallic Bearing Imagery & Arrow Action */}
            <div className="md:col-span-4 relative flex items-center justify-end">
              <div className="relative w-full max-w-[280px] h-32 sm:h-36 rounded-2xl overflow-hidden bg-neutral-100 border border-[#EAE5DC]/60 flex items-center">
                <img
                  src="/assets/bearing_mobile.png"
                  alt="Componente de alta precisión industrial"
                  className="w-full h-full object-cover grayscale-[40%] contrast-[1.08]"
                />
                {/* Floating Orange Circle Arrow Button */}
                <a
                  href={siteConfig.industrialpedia.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-4 w-11 h-11 rounded-full bg-[#FF6B35] hover:bg-[#E85A24] flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Ir a Industrialpedia"
                >
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Future Initiatives Card: Incubation & Portfolio Architecture */}
        <div className="bg-white/70 rounded-3xl border border-[#E5E0D5] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0E2433]/5 border border-[#0E2433]/10 flex items-center justify-center shrink-0 text-[#2F5F50]">
              <Sparkles className="w-6 h-6 stroke-[1.8]" aria-hidden="true" />
            </div>
            <div className="space-y-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-[#0E2433]/60 uppercase">
                <span>// ARQUITECTURA DE ESCALA</span>
              </div>
              <h4 className="font-serif text-lg sm:text-xl font-medium text-[#0E2433]">
                Nuevas iniciativas en desarrollo
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#0E2433]/70 leading-relaxed">
                JIVOTECK concibe, valida y respalda nuevas marcas orientadas a resolver necesidades tecnológicas clave. Cada proyecto se integra al ecosistema con gobernanza, visión y modelo operativo propio.
              </p>
            </div>
          </div>

          <a
            href="#contacto"
            className="shrink-0 bg-white hover:bg-neutral-50 text-[#0E2433] border border-[#D8D2C6] px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Vincular proyecto</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
};
