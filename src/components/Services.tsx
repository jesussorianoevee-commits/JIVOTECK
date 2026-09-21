import React from 'react';
import { 
  Bot, 
  Code2, 
  Compass, 
  TrendingUp, 
  Check, 
  ArrowRight,
  Workflow
} from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      id: 'automatizacion',
      title: 'Automatización',
      subtitle: 'Ingeniería de Control & Procesos Industriales',
      description: 'Diseño e implementación de sistemas de control inteligente, programación de PLCs, integración de sensórica, buses de campo y gemelos digitales para maximizar la eficiencia y seguridad en planta.',
      icon: Bot,
      color: 'from-cyan-500/20 to-brand-blue/20',
      borderColor: 'group-hover:border-brand-cyan',
      textColor: 'text-brand-cyan',
      badge: 'Hardware & Control',
      tags: [
        'Programación de PLC & SCADA',
        'Protocolos (Modbus, Profinet, EtherNet/IP)',
        'Sensórica e Integración IoT',
        'Optimización de Tiempos de Ciclo',
        'Gemelos Digitales y Simulación'
      ]
    },
    {
      id: 'programacion',
      title: 'Programación',
      subtitle: 'Desarrollo de Software Moderno & Escalable',
      description: 'Construcción de software a medida, aplicaciones web de alto rendimiento, microservicios, bases de datos optimizadas y dashboards en tiempo real diseñados con estándares de código de nivel mundial.',
      icon: Code2,
      color: 'from-sky-500/20 to-indigo-500/20',
      borderColor: 'group-hover:border-sky-400',
      textColor: 'text-sky-400',
      badge: 'Full-Stack & Cloud',
      tags: [
        'Desarrollo Web & SaaS a la Medida',
        'Arquitectura Cloud & Microservicios',
        'APIs RESTful & Conectores de Datos',
        'Dashboards Operativos en Tiempo Real',
        'Seguridad y Alta Concurrencia'
      ]
    },
    {
      id: 'orientacion',
      title: 'Orientación & Consultoría',
      subtitle: 'Estrategia Tecnológica & Dirección Técnica',
      description: 'Acompañamos a tu empresa en la toma de decisiones tecnológicas críticas. Auditamos infraestructura existente, evaluamos viabilidad técnica y trazamos hojas de ruta claras para acelerar tus proyectos.',
      icon: Compass,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'group-hover:border-emerald-400',
      textColor: 'text-emerald-400',
      badge: 'Estrategia & Mentoring',
      tags: [
        'Diagnóstico y Auditoría Tecnológica',
        'Hojas de Ruta de Transformación Digital',
        'Selección de Arquitectura & Componentes',
        'Optimización de Costos y Recursos',
        'Supervisión y Asesoría Continuada'
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing Tecnológico',
      subtitle: 'Posicionamiento & Tracción para Startups y B2B',
      description: 'El marketing para soluciones de tecnología e ingeniería requiere rigor y conocimiento técnico. Desarrollamos la narrativa de tu producto, generamos canales de adquisición B2B y posicionamos tu propuesta de valor.',
      icon: TrendingUp,
      color: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'group-hover:border-amber-400',
      textColor: 'text-amber-400',
      badge: 'Crecimiento & Mercado',
      tags: [
        'Marketing Especializado B2B & Tech',
        'Posicionamiento de Marca y Autoridad',
        'Estrategias de Lanzamiento de Producto',
        'Generación de Leads Cualificados',
        'Contenido Técnico de Alto Valor'
      ]
    }
  ];

  return (
    <section id="servicios" className="py-24 relative bg-[#080C15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
            <Workflow className="w-3.5 h-3.5 text-brand-cyan" />
            <span>NUESTRO ECOSISTEMA INTEGRAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Los 4 Pilares de <span className="text-brand-cyan font-mono">JIVOTECK</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Una startup única porque unimos la ingeniería física de control con el desarrollo de software moderno, la orientación estratégica y el posicionamiento de mercado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div 
                key={srv.id}
                className={`group glass-panel rounded-2xl p-7 sm:p-8 border border-brand-border transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-cyan-950/20 ${srv.borderColor}`}
              >
                {/* Header of card */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${srv.color} border border-slate-700 flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <Icon className={`w-7 h-7 ${srv.textColor}`} />
                  </div>
                  <span className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md bg-slate-900 border border-slate-800 ${srv.textColor}`}>
                    {srv.badge}
                  </span>
                </div>

                {/* Title & description */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {srv.title}
                </h3>
                <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold mb-3 ${srv.textColor}`}>
                  {srv.subtitle}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {srv.description}
                </p>

                {/* Tag list */}
                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-2">
                    Capacidades Clave:
                  </div>
                  <div className="space-y-1.5">
                    {srv.tags.map((tag, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className={`w-3.5 h-3.5 ${srv.textColor} shrink-0`} />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 group-hover:text-white hover:underline"
                  >
                    <span>Cotizar proyecto en {srv.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-cyan group-hover:translate-x-1 transition-transform" />
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
