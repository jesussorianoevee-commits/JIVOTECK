import React from 'react';
import { Hexagon, Network, TrendingUp } from 'lucide-react';

export const PillarsBar: React.FC = () => {
  const pillars = [
    {
      icon: Hexagon,
      title: 'Estructuramos proyectos',
      subtitle: 'De la idea al producto con base sólida.',
    },
    {
      icon: Network,
      title: 'Conectamos oportunidades',
      subtitle: 'Tecnología, industria y personas.',
    },
    {
      icon: TrendingUp,
      title: 'Impulsamos crecimiento',
      subtitle: 'Para hoy y para lo que viene.',
    },
  ];

  return (
    <section className="bg-[#0E2433] text-white relative overflow-hidden py-10 sm:py-14 border-y border-[#0E2433]">
      {/* Background technical doodle / blueprint grid overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`flex items-start gap-4 ${
                  idx === 0
                    ? 'pb-6 md:pb-0 md:pr-8'
                    : idx === 1
                    ? 'py-6 md:py-0 md:px-8'
                    : 'pt-6 md:pt-0 md:pl-8'
                }`}
              >
                {/* Hexagonal / Orange Line Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FF6B35]">
                  <Icon className="w-6 h-6 stroke-[1.8]" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="font-sans font-bold text-base sm:text-lg text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-white/65 leading-relaxed">
                    {pillar.subtitle}
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
