import React from 'react';
import { ArrowDown, ArrowUpRight, ExternalLink } from 'lucide-react';
import { JivoteckIcon } from './JivoteckLogo';
import { siteConfig } from '../config/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#FAF8F5] text-[#13262F] relative overflow-hidden border-b border-[#EAE5DC]">

      {/* Subtle organic background tones */}
      <div className="absolute top-12 left-1/4 w-[420px] h-[420px] bg-[#638379]/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>
      <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-[#2E4846]/5 rounded-full blur-[130px] pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">

        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-white border border-[#D8D2C6] text-[#2E4846] shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#50756C]" aria-hidden="true"></span>
          <span>JIVOTECK · CORPORATIVO TECNOLÓGICO</span>
        </div>

        {/* Hero Title & Description */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-serif text-[#13262F] leading-[1.15]">
            Ideas que también <span className="italic font-normal text-[#2E4846]">construyen mundos.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#3E5C54] leading-relaxed font-sans max-w-3xl font-normal">
            Creamos y damos estructura a proyectos tecnológicos con visión de largo plazo. JIVOTECK es la casa corporativa desde la que se desarrolla Industrialpedia y desde la que pueden crecer nuevas iniciativas con identidad propia.
          </p>

          {/* Max 2 CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#ecosistema"
              className="min-h-[44px] px-6 py-3 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xs hover:shadow flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
            >
              <span>Conoce el ecosistema</span>
              <ArrowDown className="w-4 h-4 text-white" aria-hidden="true" />
            </a>
            <a
              href="#contacto"
              className="min-h-[44px] px-6 py-3 rounded-xl bg-white hover:bg-[#F4F1EA] text-[#13262F] font-mono text-xs font-semibold uppercase tracking-wider transition-all border border-[#D8D2C6] shadow-2xs flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
            >
              <span>Contacto corporativo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#50756C]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Visual ecosystem signal */}
        <div className="pt-4 border-t border-[#EAE5DC] max-w-4xl">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EAE5DC] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] shrink-0" aria-hidden="true">
                <JivoteckIcon size={32} className="w-8 h-10" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#13262F]">
                    Iniciativa activa en el ecosistema:
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F4F1EA] text-[#2E4846] border border-[#D8D2C6]">
                    Industrialpedia
                  </span>
                </div>
                <p className="text-xs text-[#4A635B] font-sans">
                  Tecnología e información para la industria con identidad y desarrollo propios.
                </p>
              </div>
            </div>

            <a
              href={siteConfig.industrialpedia.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#F4F1EA] text-[#13262F] text-xs font-mono font-bold transition-colors border border-[#D8D2C6] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
              title="Abrir Industrialpedia en nueva pestaña"
            >
              <span>industrialpedia.com.mx</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#2E4846]" aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
