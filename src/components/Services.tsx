import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Services: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'live' | 'future'>('all');

  const launches = [
    {
      label: 'CAPABILITY 01',
      status: 'AVAILABLE NOW',
      isLive: true,
      title: 'Programación & Software a la Medida',
      subtitle: 'Desarrollo web moderno, plataformas en la nube, APIs seguras y arquitectura de software escalable.',
      tags: ['SaaS & Web Apps', 'Cloud Architecture', 'APIs & Backend', 'Dashboards Operativos'],
      link: '#contacto'
    },
    {
      label: 'CAPABILITY 02',
      status: 'AVAILABLE NOW',
      isLive: true,
      title: 'Automatización Inteligente de Procesos',
      subtitle: 'Ingeniería de control, programación de PLCs, integración de sensórica, robótica y telemetría.',
      tags: ['Control PLC & SCADA', 'Sensórica Industrial', 'Optimización de Ciclo', 'Redes de Campo'],
      link: '#contacto'
    },
    {
      label: 'CAPABILITY 03',
      status: 'AVAILABLE NOW',
      isLive: true,
      title: 'Orientación & Consultoría Estratégica',
      subtitle: 'Diagnóstico técnico de sistemas, auditoría de procesos y hojas de ruta para modernización tecnológica.',
      tags: ['Diagnóstico Técnico', 'Selección de Tecnologías', 'Acompañamiento Continuo', 'Mitigación de Riesgos'],
      link: '#contacto'
    },
    {
      label: 'CAPABILITY 04',
      status: 'AVAILABLE NOW',
      isLive: true,
      title: 'Marketing Tecnológico B2B',
      subtitle: 'Posicionamiento estratégico de marca, narrativa de ingeniería y generación de demanda para soluciones tech.',
      tags: ['Narrativa de Producto', 'Estrategia B2B Tech', 'Generación de Leads', 'Posicionamiento Digital'],
      link: '#contacto'
    },
    {
      label: 'FUTURE PRODUCT 01',
      status: 'COMING SOON',
      isLive: false,
      title: 'Industrialpedia Platform',
      subtitle: 'La plataforma unificada de comparación, homologación técnica y especificaciones de componentes industriales.',
      tags: ['Homologador Multi-marca', 'Catálogo de Especificaciones', 'Mantenimiento 4.5'],
      link: siteConfig.industrialpedia.websiteUrl,
      isExternal: true
    },
    {
      label: 'FUTURE PRODUCT 02',
      status: 'COMING SOON',
      isLive: false,
      title: 'JIVOTECK Telemetry & IoT Suite',
      subtitle: 'Suite modular de adquisición de datos en planta y sincronización directa con infraestructura cloud.',
      tags: ['Edge Gateways', 'Telemetría Segura', 'In development'],
      link: '#contacto'
    }
  ];

  const filteredLaunches = launches.filter((item) => {
    if (filter === 'live') return item.isLive;
    if (filter === 'future') return !item.isLive;
    return true;
  });

  return (
    <section id="servicios" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-slate-500 font-semibold">
              CAPABILITIES & FUTURE LAUNCHES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-sans">
              Servicios y Productos
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-lg text-xs font-mono">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded transition-all font-semibold ${
                filter === 'all' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Todos ({launches.length})
            </button>
            <button
              onClick={() => setFilter('live')}
              className={`px-3 py-1.5 rounded transition-all font-semibold ${
                filter === 'live' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Disponibles (4)
            </button>
            <button
              onClick={() => setFilter('future')}
              className={`px-3 py-1.5 rounded transition-all font-semibold ${
                filter === 'future' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Próximos (2)
            </button>
          </div>
        </div>

        {/* List of Cards matching Screenshot 3 */}
        <div className="space-y-5">
          {filteredLaunches.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-lg border transition-all duration-200 p-6 sm:p-8 shadow-xs ${
                item.isExternal 
                  ? 'border-sky-200 hover:border-[#00D4FF] hover:shadow-md' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Top status bar */}
              <div className="flex items-center justify-between font-mono text-xs pb-4 border-b border-slate-100">
                <span className="uppercase tracking-widest text-slate-400 font-semibold">
                  {item.label}
                </span>
                <span className={`inline-flex items-center gap-1.5 uppercase tracking-wider font-semibold ${
                  item.isLive ? 'text-emerald-600' : 'text-[#0099CC]'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    item.isLive ? 'bg-emerald-500' : 'bg-[#00D4FF]'
                  }`}></span>
                  <span>{item.status}</span>
                </span>
              </div>

              {/* Title & subtitle */}
              <div className="pt-4 space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight flex items-center justify-between">
                  <span>{item.title}</span>
                  {item.isExternal && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#0099CC] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span className="hidden sm:inline">Visitar web oficial</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {item.subtitle}
                </p>
              </div>

              {/* Tags and CTA */}
              <div className="pt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 bg-slate-50 text-slate-700 text-xs font-mono rounded border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.isExternal ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-sky-50 border border-sky-200 text-xs font-mono uppercase font-semibold text-[#0099CC] hover:bg-[#00D4FF] hover:text-slate-950 transition-all"
                  >
                    <span>industrialpedia.com.mx</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : item.isLive ? (
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-1 text-xs font-mono uppercase font-semibold text-slate-900 hover:text-[#0099CC] transition-colors"
                  >
                    <span>Cotizar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    In development
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
