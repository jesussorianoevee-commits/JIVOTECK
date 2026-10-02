import React from 'react';
import { Building2, ArrowUpRight } from 'lucide-react';

export const CorporateOperations: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5] text-[#13262F] border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EAE5DC] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">

          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-[#FAF8F5] text-[#2E4846] border border-[#D8D2C6]">
              <Building2 className="w-3.5 h-3.5 text-[#50756C]" aria-hidden="true" />
              <span>GESTIÓN INSTITUCIONAL</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#13262F] tracking-tight">
              Operación corporativa
            </h3>

            <p className="text-sm text-[#4A635B] font-sans leading-relaxed">
              JIVOTECK coordina la gestión administrativa y la formalización de los proyectos de su ecosistema.
            </p>

            <p className="text-xs sm:text-sm text-[#638379] font-sans leading-relaxed">
              Las solicitudes relacionadas con documentación corporativa, convenios y facturación se atienden a través de nuestro canal de contacto corporativo.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contacto"
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
            >
              <span>Contacto corporativo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
