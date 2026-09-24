import React from 'react';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const StatementSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] text-[#13262F] border-y border-[#EAE5DC] relative overflow-hidden">
      
      {/* Subtle organic ambient glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#638379]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#E2DDD4]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Kicker in warm brand styling */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-white text-[#2E4846] border border-[#D8D2C6] shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#50756C]" />
          <span>VISIÓN TECNOLÓGICA • MANTENIMIENTO 4.5</span>
        </div>

        {/* Big headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.18] max-w-3xl font-serif text-[#13262F]">
          Estamos transformando la industria con <span className="italic text-[#2E4846]">Industrialpedia</span>.
        </h2>

        {/* Narrative paragraphs */}
        <div className="space-y-4 text-[#3E5C54] text-base sm:text-lg leading-relaxed max-w-3xl font-sans font-normal">
          <p>
            Al integrar los principios de <strong>Mantenimiento 4.5</strong> con bases de conocimiento técnico abiertas y homologación de componentes entre fabricantes mundiales, en JIVOTECK estamos sentando las bases de una nueva era para los equipos de ingeniería, mantenimiento y compras técnicas.
          </p>
          <p className="text-[#638379] text-sm sm:text-base">
            Diseñamos soluciones donde el software contemporáneo y el hardware de piso de fábrica trabajan sincronizados, reduciendo tiempos muertos y habilitando una manufactura predictiva y conectada.
          </p>
        </div>

        {/* Interactive Link Area to Industrialpedia.com.mx */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#EAE5DC]">
          <div>
            <a
              href={siteConfig.industrialpedia.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-[#2E4846] hover:text-[#13262F] transition-colors"
            >
              <span>INDUSTRIALPEDIA — COMING SOON</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="text-xs text-[#638379] font-mono mt-1">
              PROYECTO PROPIEDAD EXCLUSIVA Y DESARROLLADO POR JIVOTECK
            </div>
          </div>

          <a
            href={siteConfig.industrialpedia.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-sm w-fit"
          >
            <span>industrialpedia.com.mx</span>
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
};
