import React from 'react';
import { 
  Bot, 
  Code2, 
  Compass, 
  TrendingUp, 
  Check, 
  ArrowRight,
  Layers
} from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      id: 'programacion',
      title: 'Programación & Software',
      subtitle: 'Desarrollo a la Medida, Escalable y Moderno',
      description: 'Construimos plataformas web, aplicaciones en la nube, APIs y software empresarial diseñados para resolver los retos operativos de tu organización con la máxima velocidad y seguridad.',
      icon: Code2,
      color: 'from-indigo-500/20 to-blue-500/20',
      textColor: 'text-indigo-400',
      badgeColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
      badge: 'Software & Cloud',
      tags: [
        'Desarrollo Web & SaaS a la Medida',
        'Arquitecturas Cloud Escalables y Seguras',
        'APIs RESTful y Conectores de Datos',
        'Dashboards Operativos en Tiempo Real',
        'Código Limpio y Mantenimiento Garantizado'
      ]
    },
    {
      id: 'automatizacion',
      title: 'Automatización Inteligente',
      subtitle: 'Ingeniería de Control y Procesos Eficientes',
      description: 'Integramos sistemas de control y automatización para optimizar tus procesos operativos. Desde programación de PLCs y sensórica hasta supervisión digital para reducir costos y tiempos muertos.',
      icon: Bot,
      color: 'from-blue-500/20 to-cyan-500/20',
      textColor: 'text-blue-400',
      badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
      badge: 'Control & IoT',
      tags: [
        'Programación de PLCs y Sistemas SCADA',
        'Integración de Sensórica y Redes Industriales',
        'Optimización y Reducción de Tiempos de Ciclo',
        'Monitoreo y Telemetría en Tiempo Real',
        'Gemelos Digitales y Simulación de Procesos'
      ]
    },
    {
      id: 'orientacion',
      title: 'Orientación & Consultoría',
      subtitle: 'Dirección Técnica y Acompañamiento Estratégico',
      description: 'Acompañamos a directores y equipos en la toma de decisiones tecnológicas clave. Diagnosticamos tu infraestructura, identificamos oportunidades y trazamos planes de ejecución viables y rentables.',
      icon: Compass,
      color: 'from-sky-500/20 to-indigo-500/20',
      textColor: 'text-sky-400',
      badgeColor: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
      badge: 'Estrategia & Asesoría',
      tags: [
        'Diagnóstico y Auditoría de Sistemas',
        'Hojas de Ruta para Transformación Digital',
        'Selección Óptima de Tecnologías y Proveedores',
        'Estimación y Mitigación de Riesgos Técnicos',
        'Acompañamiento y Soporte Técnico Continuo'
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing Tecnológico',
      subtitle: 'Posicionamiento y Tracción para Negocios B2B',
      description: 'Sabemos cómo comunicar productos técnicos y de ingeniería. Desarrollamos la propuesta de valor, posicionamiento digital y estrategias de adquisición que conectan tu empresa con clientes de alto valor.',
      icon: TrendingUp,
      color: 'from-purple-500/20 to-indigo-500/20',
      textColor: 'text-purple-400',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      badge: 'Crecimiento B2B',
      tags: [
        'Posicionamiento y Narrativa de Marca Tech',
        'Marketing Especializado para Industria y B2B',
        'Estrategias de Lanzamiento de Productos',
        'Captación de Clientes y Leads Calificados',
        'Contenido Técnico que Genera Confianza'
      ]
    }
  ];

  return (
    <section id="servicios" className="py-24 relative bg-[#0E131F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-white/[0.08] text-xs font-medium text-slate-300">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>SOLUCIONES Y SERVICIOS INTEGRALES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Nuestros 4 Pilares de Especialización
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Una propuesta de valor única en el mercado: un solo socio tecnológico capaz de abarcar desde el software hasta el control físico y la comercialización.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div 
                key={srv.id}
                className="startup-card rounded-2xl p-7 sm:p-8 border border-white/[0.08] transition-all duration-300 hover:scale-[1.01] hover:border-indigo-500/30 flex flex-col justify-between"
              >
                <div>
                  {/* Header of card */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className={`w-13 h-13 p-3.5 rounded-xl bg-gradient-to-br ${srv.color} border border-white/[0.08] flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${srv.textColor}`} />
                    </div>
                    <span className={`px-2.5 py-1 text-[11px] font-medium rounded-full border ${srv.badgeColor}`}>
                      {srv.badge}
                    </span>
                  </div>

                  {/* Title & description */}
                  <h3 className="text-2xl font-bold text-white mb-1.5">
                    {srv.title}
                  </h3>
                  <h4 className={`text-xs font-semibold mb-3 ${srv.textColor}`}>
                    {srv.subtitle}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {srv.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                    <div className="text-[11px] font-medium uppercase text-slate-400 tracking-wider mb-2">
                      Lo que incluye el servicio:
                    </div>
                    <div className="space-y-2">
                      {srv.tags.map((tag, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                          <Check className={`w-3.5 h-3.5 ${srv.textColor} shrink-0`} />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <span>Cotizar proyecto en {srv.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
