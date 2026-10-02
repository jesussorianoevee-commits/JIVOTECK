import React from 'react';
import { 
  ExternalLink,
  Layers,
  Sparkles,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Cpu
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Services: React.FC = () => {
  return (
    <section id="ecosistema" className="py-16 sm:py-24 bg-white text-[#13262F] relative border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE5DC] pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-[#FAF8F5] text-[#2E4846] border border-[#D8D2C6] shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#50756C]" />
              <span>MARCAS & PROYECTOS DEL CORPORATIVO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13262F] tracking-tight font-serif">
              Nuestro Ecosistema
            </h2>
            <p className="text-base text-[#4A635B] font-sans leading-relaxed">
              Proyectos, productos y marcas concebidos, desarrollados y operados desde JIVOTECK como corporativo tecnológico. Un modelo donde la visión estratégica y la capacidad técnica impulsan iniciativas con valor real y sostenibilidad.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-[#638379]">Modelo:</span>
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-[#FAF8F5] border border-[#D8D2C6] text-[#13262F]">
              Holding Tecnológico
            </span>
          </div>
        </div>

        {/* Ecosystem Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Industrialpedia (7 cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#FAF8F5] via-white to-[#F4F1EA] rounded-3xl border border-[#D8D2C6] hover:border-[#13262F] p-8 sm:p-10 transition-all hover:shadow-lg flex flex-col justify-between relative overflow-hidden group">
            
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#638379]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              
              {/* Badge & Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EAE5DC]">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#13262F] text-white border border-[#13262F]">
                    ● MARCA & PRODUCTO PROPIO
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white text-[#2E4846] border border-[#D8D2C6]">
                    Activo · Evolución continua
                  </span>
                </div>
                <span className="text-xs font-mono text-[#638379]">
                  industrialpedia.com.mx
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#50756C] font-semibold block mb-1">
                  The Industrial Information Platform
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#13262F] tracking-tight group-hover:text-[#2E4846] transition-colors">
                  Industrialpedia
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#4A635B] font-sans leading-relaxed">
                Plataforma de tecnología e información para la industria desarrollada 100% dentro del ecosistema de JIVOTECK. Permite estructurar, consultar y cruzar información técnica de componentes y refacciones industriales multi-fabricante.
              </p>

              <p className="text-xs sm:text-sm text-[#638379] font-sans leading-relaxed">
                Industrialpedia es una demostración viva de la capacidad del corporativo para concebir, diseñar la arquitectura de datos y operar soluciones digitales robustas para la industria moderna.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-[#EAE5DC] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#13262F]">
                    <Layers className="w-3.5 h-3.5 text-[#50756C]" />
                    <span>Catálogo Multi-fabricante</span>
                  </div>
                  <p className="text-[11px] text-[#4A635B] font-sans">
                    Estructuración de fichas técnicas y normalización de parámetros de ingeniería.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#EAE5DC] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#13262F]">
                    <Cpu className="w-3.5 h-3.5 text-[#50756C]" />
                    <span>Motor de Búsqueda & Cruces</span>
                  </div>
                  <p className="text-[11px] text-[#4A635B] font-sans">
                    Cruce inteligente de números de parte y equivalencias industriales.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Action */}
            <div className="mt-8 pt-6 border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <span className="text-xs font-mono text-[#638379]">
                Plataforma con presencia y dominio propios
              </span>
              <a
                href={siteConfig.industrialpedia.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Visitar industrialpedia.com.mx</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>
            </div>

          </div>

          {/* Card 2: Nuevos Proyectos & I+D (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] rounded-3xl border border-[#D8D2C6] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-6">
              
              {/* Badge & Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EAE5DC]">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#E2DDD4] text-[#13262F] border border-[#D8D2C6]">
                  ● INCUBACIÓN & I+D
                </span>
                <span className="text-xs font-mono text-[#638379]">
                  Desarrollo Interno
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#50756C] font-semibold block mb-1">
                  Nuevas Iniciativas
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#13262F] tracking-tight">
                  Proyectos con Propósito
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-[#4A635B] font-sans leading-relaxed">
                Dentro de JIVOTECK concebimos y evaluamos de manera continua nuevas iniciativas empresariales y tecnológicas orientadas a resolver problemas reales con visión de largo plazo.
              </p>

              <p className="text-xs text-[#638379] font-sans leading-relaxed">
                Cada proyecto nace con una arquitectura sólida, respaldado por la dirección estratégica, infraestructura y capacidades operativas del corporativo antes de su lanzamiento al mercado.
              </p>

              {/* Development Pillars */}
              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-[#EAE5DC] flex items-start gap-3">
                  <Compass className="w-4 h-4 text-[#50756C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#13262F] block">Evaluación de Viabilidad</span>
                    <span className="text-[11px] text-[#638379] font-sans">Análisis de impacto, sostenibilidad y pertinencia tecnológica.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#EAE5DC] flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#50756C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#13262F] block">Desarrollo de Marcas & Propuestas</span>
                    <span className="text-[11px] text-[#638379] font-sans">Construcción de identidad, tecnología y modelo operativo.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#EAE5DC] flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#50756C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#13262F] block">Respaldo Corporativo</span>
                    <span className="text-[11px] text-[#638379] font-sans">Soporte legal, administrativo, tecnológico y financiero desde la empresa matriz.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Status Box */}
            <div className="mt-8 pt-6 border-t border-[#EAE5DC] flex items-center justify-between text-xs font-mono text-[#638379]">
              <span>Estado actual:</span>
              <span className="px-3 py-1 rounded-lg bg-white border border-[#D8D2C6] text-[#2E4846] font-bold">
                I+D en curso
              </span>
            </div>

          </div>

        </div>

        {/* Corporate Commitment Banner */}
        <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#D8D2C6] flex items-center justify-center text-[#2E4846] shrink-0">
              <Building2 className="w-5 h-5 text-[#50756C]" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#13262F] uppercase tracking-wider block">
                JIVOTECK como Empresa Matriz & Entidad Legal
              </span>
              <p className="text-xs text-[#638379] font-sans">
                JIVOTECK es la entidad jurídica, corporativa y de facturación detrás de Industrialpedia y de cada nuevo proyecto del ecosistema.
              </p>
            </div>
          </div>

          <a
            href="#contacto"
            className="shrink-0 px-4 py-2 rounded-xl bg-white hover:bg-[#F4F1EA] text-[#13262F] text-xs font-mono font-semibold uppercase tracking-wider border border-[#D8D2C6] transition-all flex items-center gap-1.5 shadow-2xs"
          >
            <span>Contacto Corporativo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#50756C]" />
          </a>
        </div>

      </div>
    </section>
  );
};
