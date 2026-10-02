import React from 'react';
import {
  Compass,
  Code2,
  FolderGit2,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export const HowWeBuild: React.FC = () => {
  const capabilities = [
    {
      icon: Compass,
      title: 'DirecciÃ³n estratÃ©gica',
      desc: 'Definimos propÃ³sito, prioridades y rumbo para cada iniciativa.'
    },
    {
      icon: Code2,
      title: 'Producto y tecnologÃ­a',
      desc: 'AcompaÃ±amos la construcciÃ³n y evoluciÃ³n de productos digitales desde una visiÃ³n integral.'
    },
    {
      icon: FolderGit2,
      title: 'GestiÃ³n corporativa',
      desc: 'Coordinamos operaciÃ³n, recursos y procesos para que los proyectos puedan avanzar con orden.'
    },
    {
      icon: TrendingUp,
      title: 'Marca y desarrollo',
      desc: 'Construimos identidad, comunicaciÃ³n y relaciones que permitan a cada proyecto encontrar su lugar en el mercado.'
    }
  ];

  return (
    <section id="como-construimos" className="py-16 sm:py-24 bg-[#FAF8F5] text-[#13262F] border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-white text-[#2E4846] border border-[#D8D2C6] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#50756C]" aria-hidden="true" />
            <span>CAPACIDADES INTERNAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13262F] tracking-tight font-serif">
            CÃ³mo construimos
          </h2>
          <p className="text-base sm:text-lg text-[#4A635B] font-sans leading-relaxed">
            JIVOTECK reÃºne las capacidades necesarias para dar estructura y continuidad a cada proyecto de su ecosistema.
          </p>
        </div>

        {/* 4 Internal Capabilities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EAE5DC] shadow-xs flex flex-col justify-between hover:border-[#638379] hover:shadow-md transition-all"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#F4F1EA] border border-[#E5E0D5] flex items-center justify-center text-[#2E4846] mb-5" aria-hidden="true">
                    <Icon className="w-5 h-5 text-[#2E4846]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#13262F] font-serif tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A635B] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
