import React from 'react';
import { Leaf, LayoutGrid, Users, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      index: '01',
      tag: 'GOBERNANZA',
      icon: Leaf,
      title: 'Visión',
      subtitle: 'de largo plazo',
      description: 'Construimos cimientos sólidos para proyectos tecnológicos diseñados para perdurar y evolucionar de manera sostenible.',
    },
    {
      index: '02',
      tag: 'DESARROLLO',
      icon: LayoutGrid,
      title: 'Iniciativas',
      subtitle: 'con identidad propia',
      description: 'Cada producto o marca en el ecosistema cuenta con su propio enfoque, posicionamiento y modelo operativo.',
    },
    {
      index: '03',
      tag: 'VINCULACIÓN',
      icon: Users,
      title: 'Colaboración',
      subtitle: 'con la industria',
      description: 'Conectamos conocimiento técnico, procesos reales y personas para resolver problemas complejos con rigor.',
    },
    {
      index: '04',
      tag: 'DESPLIEGUE',
      icon: TrendingUp,
      title: 'Crecimiento',
      subtitle: 'sostenido',
      description: 'Desarrollo escalonado que prioriza la viabilidad económica, la seguridad jurídica y el impacto tangible.',
    },
  ];

  return (
    <section id="quienes-somos" className="py-20 sm:py-28 bg-[#F8F6F1] text-[#0E2433] border-t border-[#EAE5DC] relative">
      
      {/* Subtle tech dot accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0E2433_1px,transparent_1px)] [background-size:28px_28px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading & Platform Definition */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Kicker + Tech Tag */}
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-0.5 bg-[#FF6B35] rounded-full" aria-hidden="true" />
              <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0E2433]/70 uppercase">
                JIVOTECK · PLATAFORMA
              </span>
            </div>

            {/* Title with Serif & Italic with generous line-height */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.3rem] text-[#0E2433] leading-[1.20] tracking-tight font-medium">
              Más que una empresa, <br />
              una plataforma <span className="italic font-normal">para crear</span>.
            </h2>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-[#0E2433]/80 leading-relaxed font-normal max-w-xl">
              Administración, estrategia y desarrollo de iniciativas tecnológicas con visión de largo plazo.
            </p>

            {/* Institutional Summary */}
            <div className="pt-3 border-t border-[#D8D2C6]/60">
              <p className="font-sans text-sm text-[#0E2433]/70 leading-relaxed max-w-lg">
                JIVOTECK opera como casa corporativa matriz desde México, articulando gobierno corporativo, capacidad técnica y soporte estratégico para los proyectos del ecosistema.
              </p>
            </div>
          </div>

          {/* Right Column: 2x2 Bento Tech Grid with Green Icons matching #2F5F50 */}
          <div className="lg:col-span-6 lg:pl-10 lg:border-l lg:border-[#D8D2C6]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={pillar.title} 
                    className="p-5 rounded-2xl bg-white/70 border border-[#E5E0D5] hover:border-[#2F5F50]/40 hover:bg-white hover:shadow-xs transition-all duration-200 space-y-3 group"
                  >
                    {/* Top Row: Tech Tag + Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#2F5F50]/10 flex items-center justify-center text-[#2F5F50] transition-colors group-hover:bg-[#2F5F50] group-hover:text-white">
                        <Icon className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
                      </div>
                      <span className="text-[10px] font-mono text-[#0E2433]/40 tracking-wider">
                        // {pillar.index}
                      </span>
                    </div>

                    {/* Title + Subtitle (clean non-overlapping vertical rhythm) */}
                    <div className="space-y-0.5">
                      <h3 className="font-sans font-bold text-base sm:text-lg text-[#0E2433] tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="font-sans text-xs text-[#0E2433]/65 font-medium">
                        {pillar.subtitle}
                      </p>
                    </div>

                    <p className="font-sans text-xs text-[#0E2433]/70 leading-relaxed pt-1">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
