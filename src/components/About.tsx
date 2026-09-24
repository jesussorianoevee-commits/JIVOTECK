import React from 'react';
import { ShieldCheck, MapPin, Code2, Users, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: MapPin,
      title: 'Sede en Aguascalientes, México',
      description: 'Ubicados en el corazón del corredor industrial del Bajío, con capacidad de despliegue en planta local y proyectos remotos a nivel nacional e internacional.'
    },
    {
      icon: Code2,
      title: 'Desarrollo e Innovación Propia',
      description: 'No somos solo integradores; creamos tecnología propia y productos de software como Industrialpedia, la plataforma de homologación industrial.'
    },
    {
      icon: ShieldCheck,
      title: 'Propiedad Intelectual y Código Abierto',
      description: 'Todo el código fuente desarrollado para tu empresa, los esquemáticos y la documentación técnica son 100% propiedad de tu organización.'
    },
    {
      icon: HeartHandshake,
      title: 'Conexión Directa con el Cliente',
      description: 'Comunicación fluida entre ingenieros, sin intermediarios ni burocracia, con entregas estructuradas por hitos verificables.'
    }
  ];

  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-[#007362] border border-emerald-200/70">
            <Users className="w-3.5 h-3.5 text-[#00D4B2]" />
            <span>SOBRE NOSOTROS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-sans">
            Ingeniería que conecta con tus metas productivas.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            <strong>JIVOTECK</strong> es una startup mexicana de base tecnológica fundada con la convicción de que los sistemas de automatización industrial y el software moderno deben operar en perfecta armonía.
          </p>
        </div>

        {/* Bento Grid Layout (Image 3 inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-upstream hover:shadow-upstream-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-[#007362] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-sans tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {item.description}
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
