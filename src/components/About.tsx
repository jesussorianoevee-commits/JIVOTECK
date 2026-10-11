import React from 'react';
import { Compass, Users, ShieldCheck, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  const officialValues = [
    {
      index: '01',
      title: 'Innovación',
      icon: Compass,
      description:
        'Nos mueve la curiosidad, el deseo de resolver problemas y la posibilidad de hacer las cosas de una mejor manera. Escuchamos las necesidades de la industria y buscamos convertirlas en soluciones que realmente sean útiles.',
    },
    {
      index: '02',
      title: 'Inclusividad',
      icon: Users,
      description:
        'La tecnología debe ser para todos, no solo para expertos. Creemos que todas las personas deben tener acceso a herramientas que faciliten su trabajo y sus actividades diarias.',
    },
    {
      index: '03',
      title: 'Respeto',
      icon: ShieldCheck,
      description:
        'La confianza de nuestros usuarios se respeta. Valoramos su tiempo, su privacidad y sus decisiones. Por eso, creemos en una publicidad útil y no invasiva, que informe sin interrumpir. Protegemos los datos personales y no los utilizamos para fines ajenos a aquellos para los que fueron proporcionados.',
    },
  ];

  return (
    <section id="quienes-somos" className="py-20 sm:py-28 bg-[#F8F6F1] text-[#0E2433] border-t border-[#EAE5DC] relative">
      
      {/* Subtle background tech dot accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0E2433_1px,transparent_1px)] [background-size:28px_28px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">

        {/* Top Section: Corporate Definition & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading & Official Definition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-0.5 bg-[#FF6B35] rounded-full" aria-hidden="true" />
              <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0E2433]/70 uppercase">
                QUIÉNES SOMOS · IDENTIDAD
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.2rem] text-[#0E2433] leading-[1.20] tracking-tight font-medium">
              JIVOTECK — Innovación tecnológica con propósito.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#0E2433]/85 leading-relaxed font-normal">
              Somos una casa de innovación tecnológica mexicana. Desarrollamos iniciativas propias para facilitar el acceso a la tecnología y crear soluciones que respondan a las necesidades de las personas y la industria.
            </p>

            <div className="pt-2 text-xs font-mono text-[#0E2433]/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2F5F50]" aria-hidden="true" />
              <span>CASA DE INNOVACIÓN · AGUASCALIENTES, MÉXICO</span>
            </div>
          </div>

          {/* Right Column: Nuestra Filosofía */}
          <div className="lg:col-span-6 lg:pl-10 lg:border-l lg:border-[#D8D2C6] space-y-5">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E5E0D5] space-y-5 shadow-sm">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#2F5F50]" aria-hidden="true" />
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2F5F50] uppercase">
                  Nuestra filosofía
                </span>
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl text-[#0E2433] font-medium leading-snug tracking-tight">
                «Conectamos la tecnología y la innovación para hacerlas accesibles a todos.»
              </blockquote>

              <p className="font-sans text-xs sm:text-sm text-[#0E2433]/75 leading-relaxed">
                En JIVOTECK creemos que la tecnología debe facilitar el trabajo de las personas. Desarrollamos soluciones pensando en las necesidades de la industria y en quienes las utilizan todos los días.
              </p>

              <div className="pt-3 border-t border-[#EAE5DC] text-[11px] font-mono text-[#0E2433]/55">
                // COMPROMISO DE DESARROLLO HUMANO Y TÉCNICO
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Nuestros Valores (Exclusively Innovación, Inclusividad, Respeto) */}
        <div className="space-y-8 pt-4">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D8D2C6]/80 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#FF6B35] uppercase block">
                COMPROMISOS DE LA ORGANIZACIÓN
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#0E2433] tracking-tight">
                Nuestros valores
              </h3>
            </div>
            <p className="text-xs font-sans text-[#0E2433]/65 max-w-md leading-relaxed">
              Principios institucionales que orientan el desarrollo de nuestras soluciones, el trato con los usuarios y el respeto a la privacidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {officialValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E0D5] hover:border-[#2F5F50]/40 transition-all duration-300 shadow-sm flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon + Index */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-[#0E2433] text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                        <Icon className="w-5 h-5 text-[#FF6B35]" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-[#0E2433]/40">
                        // {val.index}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#0E2433] tracking-tight">
                      {val.title}
                    </h4>

                    <p className="font-sans text-xs sm:text-sm text-[#0E2433]/80 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EAE5DC] text-[10px] font-mono text-[#2F5F50] uppercase tracking-wider font-semibold">
                    Compromiso JIVOTECK
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
