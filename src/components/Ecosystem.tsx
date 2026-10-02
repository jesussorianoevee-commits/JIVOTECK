import React from 'react';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Ecosystem: React.FC = () => {
  return (
    <section id="ecosistema" className="py-16 sm:py-24 bg-white text-[#13262F] relative border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-[#FAF8F5] text-[#2E4846] border border-[#D8D2C6] shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#50756C]" aria-hidden="true" />
            <span>ECOSISTEMA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13262F] tracking-tight font-serif">
            Nuestro ecosistema
          </h2>
          <p className="text-base sm:text-lg text-[#4A635B] font-sans leading-relaxed">
            Cada proyecto de JIVOTECK nace con una identidad y un propósito propios. El corporativo aporta dirección, gestión y continuidad para que cada iniciativa pueda desarrollarse de forma independiente.
          </p>
        </div>

        {/* Ecosystem Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Active Flagship Initiative Card: Industrialpedia */}
          <div className="lg:col-span-8 bg-gradient-to-br from-[#FAF8F5] via-white to-[#F4F1EA] rounded-3xl border border-[#D8D2C6] hover:border-[#13262F] p-8 sm:p-10 transition-all hover:shadow-md flex flex-col justify-between relative overflow-hidden group">

            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#638379]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

            <div className="space-y-6 relative z-10">

              {/* Meta Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EAE5DC]">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#13262F] text-white border border-[#13262F]">
                  INICIATIVA TECNOLÓGICA ACTIVA
                </span>
                <span className="text-xs font-mono text-[#638379]">
                  industrialpedia.com.mx
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#13262F] tracking-tight group-hover:text-[#2E4846] transition-colors">
                  Industrialpedia
                </h3>
                <p className="text-sm sm:text-base font-mono font-semibold text-[#50756C] mt-1">
                  Tecnología e información para la industria
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#4A635B] font-sans leading-relaxed">
                Industrialpedia es la iniciativa tecnológica activa del ecosistema JIVOTECK. Opera con identidad propia y concentra el desarrollo de software e información orientados al entorno industrial.
              </p>

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
                className="min-h-[44px] w-full sm:w-auto px-6 py-3 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
              >
                <span>Explorar Industrialpedia</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              </a>
            </div>

          </div>

          {/* Architecture Card: Future Projects Expansion Capability */}
          <div className="lg:col-span-4 bg-[#FAF8F5] rounded-3xl border border-[#D8D2C6] p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#50756C] font-semibold block">
                Arquitectura del Ecosistema
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-serif text-[#13262F]">
                Estructura para Nuevas Iniciativas
              </h4>
              <p className="text-xs sm:text-sm text-[#4A635B] font-sans leading-relaxed">
                El modelo corporativo de JIVOTECK está concebido para albergar nuevas marcas y proyectos a medida que alcancen su etapa de maduración.
              </p>
              <p className="text-xs text-[#638379] font-sans leading-relaxed">
                Cada desarrollo conserva su propia misión y autonomía técnica, compartiendo la base estratégica y operativa corporativa.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#EAE5DC]">
              <a
                href="#como-construimos"
                className="text-xs font-mono font-semibold text-[#2E4846] hover:text-[#13262F] inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846] rounded-md p-1"
              >
                <span>Conoce cómo construimos</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
