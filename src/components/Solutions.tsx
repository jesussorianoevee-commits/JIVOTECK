import React from 'react';
import { Target, Factory, Users, CheckCircle2, Clock } from 'lucide-react';

export const Solutions: React.FC = () => {
  const solutions = [
    {
      index: '01',
      tag: 'COMUNICACIÓN INDUSTRIAL',
      icon: Target,
      title: 'Publicidad no invasiva',
      description:
        'Soluciones publicitarias integradas en el entorno industrial que facilitan el contacto directo con los tomadores de decisiones del sector.',
      details: [
        'Anuncios contextuales y relevantes que respetan la experiencia de consulta técnica.',
        'Información comercial útil que conecta necesidades operativas con proveedores idóneos.',
      ],
      status: 'Disponible en plataformas del ecosistema',
      statusType: 'active' as const,
    },
    {
      index: '02',
      tag: 'INTEGRACIÓN OPERATIVA',
      icon: Factory,
      title: 'Implementación tecnológica en planta',
      description:
        'Integramos nuestras tecnologías en entornos industriales para mejorar la conexión entre herramientas digitales y procesos operativos.',
      details: [
        'Desarrollos propios adaptados al flujo de trabajo real de manufactura y mantenimiento.',
        'Herramientas digitales base activas · Servicios de despliegue en planta en preparación.',
      ],
      status: 'Capacidades base activas · Despliegue integral en preparación',
      statusType: 'roadmap' as const,
    },
    {
      index: '03',
      tag: 'ACCESIBILIDAD & EXPERIENCIA',
      icon: Users,
      title: 'Tecnología inclusiva',
      description:
        'Desarrollamos soluciones accesibles y fáciles de utilizar, con el objetivo de que todas las personas que las necesiten dentro de la industria puedan aprovechar sus beneficios.',
      details: [
        'Interfaces claras e intuitivas que reducen de forma tangible la barrera tecnológica.',
        'Herramientas pensadas para especialistas, técnicos y compradores por igual.',
      ],
      status: 'Principio rector en todas nuestras iniciativas',
      statusType: 'active' as const,
    },
  ];

  return (
    <section id="soluciones" className="py-20 sm:py-28 bg-[#F8F6F1] text-[#0E2433] border-t border-[#EAE5DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-0.5 bg-[#FF6B35] rounded-full" aria-hidden="true" />
            <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0E2433]/70 uppercase">
              PROPUESTA DE VALOR INDUSTRIAL
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0E2433] tracking-tight leading-[1.18]">
            Nuestras soluciones para empresas
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#0E2433]/75 leading-relaxed font-normal">
            Desarrollamos y estructuramos tecnologías propias orientadas a resolver retos concretos de la industria, priorizando la utilidad técnica, la facilidad de adopción y el respeto a la privacidad del usuario.
          </p>
        </div>

        {/* 3 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E0D5] hover:border-[#FF6B35]/40 transition-all duration-300 shadow-sm flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Monospace Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#0E2433] text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                      <Icon className="w-5 h-5 text-[#FF6B35]" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#0E2433]/40">
                      // {item.index}
                    </span>
                  </div>

                  {/* Tag + Title */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-[#FF6B35] uppercase block">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#0E2433] tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Main Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#0E2433]/80 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet details */}
                  <ul className="space-y-2 pt-2 border-t border-[#EAE5DC]/70">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#0E2433]/70 leading-relaxed font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2F5F50] shrink-0 mt-1.5" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Status Badge Footer */}
                <div className="pt-4 border-t border-[#EAE5DC] flex items-center gap-2 text-[11px] font-mono">
                  {item.statusType === 'active' ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2F5F50] shrink-0" aria-hidden="true" />
                  ) : (
                    <Clock className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" aria-hidden="true" />
                  )}
                  <span className="text-[#0E2433]/65 leading-tight">{item.status}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
