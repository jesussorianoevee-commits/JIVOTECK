import React from 'react';
import { MapPin, Users, Building2, Target, Sparkles, Layers } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Building2,
      title: 'Corporativo Tecnológico Mexicano',
      description: 'Sede en Aguascalientes, México. Concebimos, estructuramos y respaldamos proyectos tecnológicos y empresariales con visión nacional y global.'
    },
    {
      icon: Target,
      title: 'Proyectos con Propósito & Sostenibilidad',
      description: 'Desarrollamos soluciones enfocadas en resolver necesidades reales con visión de largo plazo, combinando rigor técnico y viabilidad empresarial.'
    },
    {
      icon: Layers,
      title: 'Ecosistema de Marcas Propias',
      description: 'Industrialpedia es una muestra tangible de nuestro modelo. A ella se suman nuevas iniciativas en incubación e investigación continua.'
    },
    {
      icon: Sparkles,
      title: 'Construir Proyectos, No Solo Productos',
      description: 'Integramos estrategia, tecnología, gestión y desarrollo comercial para que cada iniciativa cuente con fundamentos sólidos y vida propia.'
    }
  ];

  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-white text-[#2E4846] border border-[#D8D2C6] shadow-2xs">
            <Users className="w-3.5 h-3.5 text-[#50756C]" />
            <span>SOBRE EL CORPORATIVO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13262F] tracking-tight font-serif">
            Construimos proyectos, no solamente productos.
          </h2>
          <p className="text-base sm:text-lg text-[#3E5C54] leading-relaxed font-sans font-normal">
            <strong>JIVOTECK</strong> es un corporativo tecnológico mexicano con sede en Aguascalientes. Nos enfocamos en crear, desarrollar y gestionar proyectos tecnológicos y empresariales con propósito, sostenibilidad y visión de largo plazo.
          </p>
          <p className="text-sm sm:text-base text-[#4A635B] leading-relaxed font-sans font-normal">
            Creemos que la tecnología adquiere su verdadero valor cuando está respaldada por una dirección estratégica clara, una adecuada gestión de recursos y un desarrollo comercial orientado al impacto real. Dentro de nuestro ecosistema conviven iniciativas activas como Industrialpedia y nuevas marcas en proceso de desarrollo e incubación.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#EAE5DC] shadow-xs hover:shadow-md hover:border-[#638379] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F4F1EA] border border-[#E5E0D5] flex items-center justify-center text-[#2E4846] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#13262F] font-sans tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A635B] leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Sede Sub-strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#638379]">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#50756C]" />
            <span>Sede corporativa: Aguascalientes, México</span>
          </div>
          <span className="text-[11px] text-[#4A635B] font-sans">
            Entidad legal y de facturación oficial de los proyectos del ecosistema.
          </span>
        </div>

      </div>
    </section>
  );
};
