import React from 'react';
import { ExternalLink, Layers, CheckCircle2, Search, Database, Globe } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const StatementSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] text-[#13262F] border-y border-[#EAE5DC] relative overflow-hidden">
      
      {/* Subtle organic ambient glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#638379]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#E2DDD4]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-white text-[#2E4846] border border-[#D8D2C6] shadow-2xs">
          <Layers className="w-3.5 h-3.5 text-[#50756C]" />
          <span>PRODUCTO PROPIO & DEMOSTRACIÓN TÉCNICA</span>
        </div>

        {/* Big headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.18] max-w-3xl font-serif text-[#13262F]">
          Estructuración técnica a escala real: <span className="italic font-normal text-[#2E4846]">el caso Industrialpedia.</span>
        </h2>

        {/* Narrative paragraphs */}
        <div className="space-y-4 text-[#3E5C54] text-base sm:text-lg leading-relaxed max-w-3xl font-sans font-normal">
          <p>
            <strong>Industrialpedia</strong> es una plataforma B2B desarrollada por JIVOTECK para estructurar, consultar y comparar información técnica de componentes y refacciones industriales. Es la demostración tangible de nuestra experiencia resolviendo problemas de información técnica compleja y catálogos multi-fabricante.
          </p>
          <p className="text-sm sm:text-base text-[#4A635B]">
            La experiencia tecnológica acumulada en Industrialpedia sirve como base de conocimiento para desarrollar soluciones privadas adaptadas a los procesos de mantenimiento, ingeniería y compras de cada empresa.
          </p>
        </div>

        {/* Conceptual Integration Example Box */}
        <div className="p-6 rounded-2xl bg-white border border-[#EAE5DC] shadow-xs space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2E4846] block">
            Ejemplo Conceptual de Complementariedad (Entornos Separados)
          </span>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[#13262F] font-bold mb-1">
                <Database className="w-3.5 h-3.5 text-[#638379]" />
                <span>Paso 1</span>
              </div>
              <p className="text-[11px] text-[#4A635B] font-sans">
                Catálogo privado desarrollado por JIVOTECK para la empresa.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[#13262F] font-bold mb-1">
                <Search className="w-3.5 h-3.5 text-[#2E4846]" />
                <span>Paso 2</span>
              </div>
              <p className="text-[11px] text-[#4A635B] font-sans">
                Búsqueda interna por número de parte o parámetro técnico.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[#13262F] font-bold mb-1">
                <Layers className="w-3.5 h-3.5 text-[#50756C]" />
                <span>Paso 3</span>
              </div>
              <p className="text-[11px] text-[#4A635B] font-sans">
                Si la pieza no existe en almacén o está descontinuada...
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#D8D2C6] flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[#2E4846] font-bold mb-1">
                <Globe className="w-3.5 h-3.5 text-[#2E4846]" />
                <span>Paso 4</span>
              </div>
              <p className="text-[11px] text-[#2E4846] font-sans font-medium">
                Consulta técnica complementaria en Industrialpedia.
              </p>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-2 text-xs text-[#638379]">
            <CheckCircle2 className="w-4 h-4 text-[#50756C] shrink-0" />
            <span>
              <strong>Principio de arquitectura:</strong> Las soluciones privadas para clientes se diseñan como entornos independientes. La información privada de una empresa no se incorpora automáticamente a Industrialpedia.
            </span>
          </div>
        </div>

        {/* Interactive Link Area to Industrialpedia.com.mx */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#EAE5DC]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-wider uppercase font-bold text-[#13262F]">
              <span>INDUSTRIALPEDIA — PRODUCTO PROPIO JIVOTECK</span>
            </div>
            <div className="text-xs text-[#638379] font-mono mt-1">
              Plataforma funcional · evolución continua
            </div>
          </div>

          <a
            href={siteConfig.industrialpedia.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-sm w-fit"
          >
            <span>Explorar industrialpedia.com.mx</span>
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
};
