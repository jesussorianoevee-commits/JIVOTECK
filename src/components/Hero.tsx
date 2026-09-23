import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top small kicker link */}
        <div className="flex items-center justify-between">
          <a 
            href="#servicios" 
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase font-semibold text-slate-500 hover:text-slate-950 transition-colors"
          >
            <span>VIEW ALL</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
            JIVOTECK STARTUP LABS
          </span>
        </div>

        {/* Featured Card matching Screenshot 1 */}
        <div className="relative rounded-xl border border-sky-100 bg-sky-gradient-card p-10 sm:p-16 lg:p-20 text-center shadow-sm overflow-hidden">
          
          <div className="space-y-6 max-w-xl mx-auto">
            {/* Top label */}
            <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] font-medium text-slate-500">
              DEVELOPMENT PHASE
            </div>

            {/* Industrialpedia big clean title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0F2844] font-sans">
              Industrialpedia
            </h1>

            {/* Boxed pill badge */}
            <div className="pt-2 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-[#00D4FF] bg-white/70 backdrop-blur-sm text-[#0099CC] font-mono text-xs tracking-wider uppercase font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]"></span>
                <span>COMING SOON</span>
              </div>
            </div>
          </div>

        </div>

        {/* Below Card Detail Section matching Screenshot 1 */}
        <div className="space-y-4 pt-2">
          
          {/* Status line */}
          <div className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase font-semibold text-[#0099CC]">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]"></span>
            <span>COMING SOON</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-slate-950 font-sans">
            INDUSTRIALPEDIA
          </h2>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl font-sans font-normal">
            Industrialpedia is an industrial information platform designed to help users find, compare and understand technical information related to industrial components and applications.
          </p>

          <div className="pt-2 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-center justify-between gap-3">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0099CC] shrink-0" />
              <span><strong>Propiedad Oficial:</strong> Proyecto concebido, desarrollado y respaldado al 100% por <strong>JIVOTECK</strong>.</span>
            </span>
            <a href="#contacto" className="text-[#0099CC] font-semibold hover:underline font-mono text-xs whitespace-nowrap">
              Contacto Directo &rarr;
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
