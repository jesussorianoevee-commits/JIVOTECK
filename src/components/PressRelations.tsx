import React, { useState } from 'react';
import { Newspaper, Copy, Check, ArrowUpRight, FileText } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const PressRelations: React.FC = () => {
  const [copiedBoilerplate, setCopiedBoilerplate] = useState(false);

  const boilerplateText = "JIVOTECK es un corporativo tecnolÃ³gico mexicano con sede en Aguascalientes enfocado en crear, desarrollar y dar estructura a proyectos tecnolÃ³gicos con identidad propia. Su ecosistema incluye Industrialpedia, una iniciativa de tecnologÃ­a e informaciÃ³n para la industria. JIVOTECK integra direcciÃ³n estratÃ©gica, gestiÃ³n, tecnologÃ­a y desarrollo de marca bajo una visiÃ³n de largo plazo.";

  const handleCopyBoilerplate = () => {
    navigator.clipboard.writeText(boilerplateText);
    setCopiedBoilerplate(true);
    setTimeout(() => setCopiedBoilerplate(false), 2500);
  };

  const pressResources = [
    {
      title: 'Perfil corporativo',
      desc: 'SÃ­ntesis institucional, visiÃ³n de largo plazo y datos de contacto oficial.',
      badge: 'InformaciÃ³n institucional'
    },
    {
      title: 'Identidad de marca',
      desc: 'Directrices del emblema autÃ©ntico, colores corporativos y tipografÃ­a institucional.',
      badge: 'GuÃ­a oficial'
    },
    {
      title: 'InformaciÃ³n sobre Industrialpedia',
      desc: 'Contexto de la iniciativa tecnolÃ³gica activa orientada al entorno industrial.',
      badge: 'Proyecto del ecosistema'
    }
  ];

  return (
    <section id="prensa" className="py-16 sm:py-24 bg-white text-[#13262F] border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE5DC] pb-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-[#FAF8F5] text-[#2E4846] border border-[#D8D2C6]">
              <Newspaper className="w-3.5 h-3.5 text-[#50756C]" aria-hidden="true" />
              <span>COMUNICACIÃ“N & MEDIOS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13262F] tracking-tight font-serif">
              Prensa y relaciones
            </h2>
            <p className="text-base sm:text-lg text-[#4A635B] font-sans leading-relaxed">
              Para consultas de medios, entrevistas, informaciÃ³n institucional o recursos oficiales de marca, comunÃ­cate con el equipo de JIVOTECK.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contacto"
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
            >
              <span>Contacto de prensa</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* 3 Informational Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pressResources.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#50756C] bg-white px-2 py-0.5 rounded border border-[#D8D2C6] inline-block">
                  {item.badge}
                </span>
                <h3 className="text-base font-bold font-serif text-[#13262F] pt-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A635B] font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Boilerplate Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EAE5DC] pb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#50756C]" aria-hidden="true" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#13262F]">
                Boilerplate Oficial (Uso Editorial)
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopyBoilerplate}
              className="min-h-[40px] px-3 py-1.5 bg-white hover:bg-[#F4F1EA] text-[#2E4846] rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors shrink-0 border border-[#D8D2C6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
              title="Copiar texto editorial"
            >
              {copiedBoilerplate ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#2E4846]" aria-hidden="true" />
                  <span>Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#638379]" aria-hidden="true" />
                  <span>Copiar Boilerplate</span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs sm:text-sm text-[#4A635B] font-sans leading-relaxed italic">
            "{boilerplateText}"
          </p>

          <div className="pt-2 text-[11px] font-mono text-[#638379] flex items-center justify-between">
            <span>Canal institucional: {siteConfig.contact.primaryEmail}</span>
            <span>Aguascalientes, MÃ©xico</span>
          </div>
        </div>

      </div>
    </section>
  );
};
