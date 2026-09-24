import React from 'react';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const StatementSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#061814] via-[#09221C] to-[#04100D] text-white relative overflow-hidden">
      
      {/* Subtle glowing ambient auras matching Image 3 */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#00D4B2]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
          <Sparkles className="w-3.5 h-3.5 text-[#00D4B2]" />
          <span>VISIÓN TECNOLÓGICA • MANTENIMIENTO 4.5</span>
        </div>

        {/* Big headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.18] max-w-3xl font-sans">
          Estamos transformando la industria con <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-200 bg-clip-text text-transparent">Industrialpedia</span>.
        </h2>

        {/* Narrative paragraphs */}
        <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl font-sans font-light">
          <p>
            Al integrar los principios de <strong>Mantenimiento 4.5</strong> con bases de conocimiento técnico abiertas y homologación de componentes entre fabricantes mundiales, en JIVOTECK estamos sentando las bases de una nueva era para los equipos de ingeniería, mantenimiento y compras técnicas.
          </p>
          <p className="text-slate-400 text-sm sm:text-base">
            Diseñamos soluciones donde el software contemporáneo y el hardware de piso de fábrica trabajan sincronizados, reduciendo tiempos muertos y habilitando una manufactura predictiva y conectada.
          </p>
        </div>

        {/* Interactive Link Area to Industrialpedia.com.mx */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-emerald-900/60">
          <div>
            <a
              href={siteConfig.industrialpedia.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-widest uppercase font-bold text-[#00D4B2] hover:text-white transition-colors"
            >
              <span>INDUSTRIALPEDIA — COMING SOON</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="text-xs text-slate-400 font-mono mt-1">
              PROYECTO PROPIEDAD EXCLUSIVA Y DESARROLLADO POR JIVOTECK
            </div>
          </div>

          <a
            href={siteConfig.industrialpedia.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#007362] hover:bg-[#00584B] border border-emerald-500/40 text-xs font-mono font-bold text-white transition-all shadow-md w-fit"
          >
            <span>industrialpedia.com.mx</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#00D4B2]" />
          </a>
        </div>

      </div>
    </section>
  );
};
