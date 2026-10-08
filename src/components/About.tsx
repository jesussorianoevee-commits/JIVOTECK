import React from 'react';
import { Leaf, LayoutGrid, Users, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Leaf,
      title: 'Visión',
      subtitle: 'de largo plazo',
      description: 'Construimos cimientos sólidos para proyectos tecnológicos diseñados para perdurar y evolucionar de manera sostenible.',
    },
    {
      icon: LayoutGrid,
      title: 'Iniciativas',
      subtitle: 'con identidad propia',
      description: 'Cada producto o marca en el ecosistema cuenta con su propio enfoque, posicionamiento y modelo operativo.',
    },
    {
      icon: Users,
      title: 'Colaboración',
      subtitle: 'con la industria',
      description: 'Conectamos conocimiento técnico, procesos reales y personas para resolver problemas complejos con rigor.',
    },
    {
      icon: TrendingUp,
      title: 'Crecimiento',
      subtitle: 'sostenido',
      description: 'Desarrollo escalonado que prioriza la viabilidad económica, la seguridad jurídica y el impacto tangible.',
    },
  ];

  return (
    <section id="quienes-somos" className="py-20 sm:py-28 bg-[#F8F6F1] text-[#0E2433] border-t border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading & Platform Definition */}
          <div className="lg:col-span-6 space-y-6">
            {/* Kicker */}
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-0.5 bg-[#FF6B35] rounded-full" aria-hidden="true"></span>
              <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0E2433]/70 uppercase">
                JIVOTECK
              </span>
            </div>

            {/* Title with Serif & Italic */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.2rem] text-[#0E2433] leading-[1.14] tracking-tight font-medium">
              Más que una empresa, <br />
              una plataforma <span className="italic font-normal">para crear</span>.
            </h2>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-[#0E2433]/80 leading-relaxed font-normal max-w-xl">
              Administración, estrategia y desarrollo de iniciativas tecnológicas con visión de largo plazo.
            </p>

            {/* Institutional Summary */}
            <div className="pt-2 border-t border-[#D8D2C6]/60">
              <p className="font-sans text-sm text-[#0E2433]/70 leading-relaxed max-w-lg">
                JIVOTECK opera como casa corporativa matriz desde México, articulando gobierno corporativo, capacidad técnica y soporte estratégico para los proyectos del ecosistema.
              </p>
            </div>
          </div>

          {/* Right Column: 2x2 Grid with Green Icons matching Mockup */}
          <div className="lg:col-span-6 lg:pl-10 lg:border-l lg:border-[#D8D2C6]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="space-y-3 group">
                    {/* Green Line Icon matching #2F5F50 */}
                    <div className="w-12 h-12 rounded-2xl bg-[#2F5F50]/10 flex items-center justify-center text-[#2F5F50] transition-colors group-hover:bg-[#2F5F50] group-hover:text-white">
                      <Icon className="w-6 h-6 stroke-[1.8]" aria-hidden="true" />
                    </div>

                    {/* Title + Subtitle */}
                    <div>
                      <h3 className="font-sans font-bold text-lg text-[#0E2433] tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="font-sans text-xs text-[#0E2433]/65 font-medium -mt-0.5">
                        {pillar.subtitle}
                      </p>
                    </div>

                    <p className="font-sans text-xs text-[#0E2433]/70 leading-relaxed">
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
