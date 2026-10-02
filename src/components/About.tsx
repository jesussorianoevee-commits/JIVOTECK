import React from 'react';
import { Users, MapPin, Compass, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-white text-[#13262F] border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-[#FAF8F5] text-[#2E4846] border border-[#D8D2C6] shadow-2xs">
            <Users className="w-3.5 h-3.5 text-[#50756C]" aria-hidden="true" />
            <span>NOSOTROS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13262F] tracking-tight font-serif">
            Construimos proyectos con vida propia.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#3E5C54] leading-relaxed font-sans font-normal pt-2">
            <p>
              JIVOTECK es un corporativo tecnológico mexicano con sede en Aguascalientes. Integramos estrategia, tecnología, gestión y desarrollo de marca para dar estructura y continuidad a proyectos propios.
            </p>
            <p className="text-sm sm:text-base text-[#4A635B]">
              Cada iniciativa del ecosistema mantiene una identidad y una propuesta de valor independientes, mientras JIVOTECK aporta la visión corporativa que las conecta y respalda.
            </p>
            <p className="text-sm sm:text-base text-[#4A635B]">
              Industrialpedia es actualmente la iniciativa tecnológica activa del ecosistema.
            </p>
          </div>
        </div>

        {/* 3 Balanced Institutional Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#D8D2C6] flex items-center justify-center text-[#2E4846]" aria-hidden="true">
              <MapPin className="w-5 h-5 text-[#50756C]" />
            </div>
            <h3 className="text-base font-bold text-[#13262F] font-serif">
              Sede en Aguascalientes
            </h3>
            <p className="text-xs sm:text-sm text-[#4A635B] leading-relaxed font-sans">
              Operamos y coordinamos nuestras iniciativas tecnológicas desde Aguascalientes, México, con proyección y enfoque a largo plazo.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#D8D2C6] flex items-center justify-center text-[#2E4846]" aria-hidden="true">
              <Compass className="w-5 h-5 text-[#50756C]" />
            </div>
            <h3 className="text-base font-bold text-[#13262F] font-serif">
              Visión y Continuidad
            </h3>
            <p className="text-xs sm:text-sm text-[#4A635B] leading-relaxed font-sans">
              Damos solidez a cada proyecto asegurando coherencia estratégica, procesos ordenados y visión sostenible desde su concepción.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#D8D2C6] flex items-center justify-center text-[#2E4846]" aria-hidden="true">
              <Layers className="w-5 h-5 text-[#50756C]" />
            </div>
            <h3 className="text-base font-bold text-[#13262F] font-serif">
              Identidad Independiente
            </h3>
            <p className="text-xs sm:text-sm text-[#4A635B] leading-relaxed font-sans">
              Cada marca del ecosistema cuenta con su propio espacio, nombre y propuesta de valor orientada a su sector específico.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
