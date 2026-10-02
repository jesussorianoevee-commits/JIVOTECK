import React from 'react';
import { ExternalLink, Layers, Search, Database, Globe, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const StatementSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] text-[#13262F] border-b border-[#EAE5DC] relative overflow-hidden">
      
      {/* Subtle organic ambient glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#638379]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#E2DDD4]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-white text-[#2E4846] border border-[#D8D2C6] shadow-2xs">
          <Layers className="w-3.5 h-3.5 text-[#50756C]" />
          <span>PROYECTO DESTACADO • PLATAFORMA TECNOLÓGICA</span>
        </div>

        {/* Big headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.18] max-w-3xl font-serif text-[#13262F]">
          Estructuración de información para la industria: <span className="italic font-normal text-[#2E4846]">el caso Industrialpedia.</span>
        </h2>

        {/* Narrative paragraphs */}
        <div className="space-y-4 text-[#3E5C54] text-base sm:text-lg leading-relaxed max-w-3xl font-sans font-normal">
          <p>
            <strong>Industrialpedia</strong> es una marca y plataforma tecnológica desarrollada y operada dentro del ecosistema de JIVOTECK. Su propósito es estructurar, organizar, comparar y facilitar la consulta técnica de componentes y refacciones industriales multi-fabricante.
          </p>
          <p className="text-sm sm:text-base text-[#4A635B]">
            Como iniciativa propia del corporativo, representa una demostración viva de nuestra capacidad para diseñar arquitecturas de datos complejas, desarrollar software escalable y operar plataformas digitales con impacto real en la industria.
          </p>
        </div>

        {/* Technical Architecture Modules */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#EAE5DC] shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE5DC] pb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2E4846]">
              Pilares de la Plataforma Industrialpedia
            </span>
            <span className="text-xs font-mono text-[#638379]">
              Desarrollo tecnológico propio
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col justify-between space-y-2">
              <div className="flex items-center gap-1.5 text-[#13262F] font-bold">
                <Database className="w-4 h-4 text-[#50756C]" />
                <span>Datos Normalizados</span>
              </div>
              <p className="text-[11px] text-[#4A635B] font-sans leading-relaxed">
                Catálogo multi-fabricante con estandarización de atributos de ingeniería y especificaciones técnicas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col justify-between space-y-2">
              <div className="flex items-center gap-1.5 text-[#13262F] font-bold">
                <Search className="w-4 h-4 text-[#2E4846]" />
                <span>Búsqueda Inteligente</span>
              </div>
              <p className="text-[11px] text-[#4A635B] font-sans leading-relaxed">
                Motor de consulta por parámetros técnicos, códigos de parte, fabricantes y familias de producto.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col justify-between space-y-2">
              <div className="flex items-center gap-1.5 text-[#13262F] font-bold">
                <Layers className="w-4 h-4 text-[#50756C]" />
                <span>Cruce de Referencias</span>
              </div>
              <p className="text-[11px] text-[#4A635B] font-sans leading-relaxed">
                Identificación de piezas equivalentes, sustitutos directos y componentes compatibles entre marcas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#D8D2C6] flex flex-col justify-between space-y-2">
              <div className="flex items-center gap-1.5 text-[#2E4846] font-bold">
                <Globe className="w-4 h-4 text-[#2E4846]" />
                <span>Plataforma Activa</span>
              </div>
              <p className="text-[11px] text-[#2E4846] font-sans font-medium leading-relaxed">
                Proyecto en evolución continua con acceso y presencia digital independiente para el sector industrial.
              </p>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-2 text-xs text-[#638379]">
            <CheckCircle2 className="w-4 h-4 text-[#50756C] shrink-0" />
            <span>
              <strong>Independencia operativa:</strong> Industrialpedia opera como marca y plataforma con identidad propia dentro del holding corporativo JIVOTECK.
            </span>
          </div>
        </div>

        {/* Interactive Link Area to Industrialpedia.com.mx */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#EAE5DC]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-wider uppercase font-bold text-[#13262F]">
              <span>INDUSTRIALPEDIA — PROYECTO DEL ECOSISTEMA JIVOTECK</span>
            </div>
            <div className="text-xs text-[#638379] font-mono mt-1">
              Plataforma funcional · evolución continua
            </div>
          </div>

          <a
            href={siteConfig.industrialpedia.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-sm w-fit"
          >
            <span>Explorar industrialpedia.com.mx</span>
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
};
