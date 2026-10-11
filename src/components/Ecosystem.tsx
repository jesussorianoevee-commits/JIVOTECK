import React from 'react';
import { ArrowUpRight, Search, SlidersHorizontal, Scale, Eye, FileText, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Ecosystem: React.FC = () => {
  const industrialpediaCapabilities = [
    {
      icon: Search,
      title: 'Búsqueda técnica precisa',
      desc: 'Búsqueda estructurada por fabricante y número de parte de componentes.',
    },
    {
      icon: FileText,
      title: 'Consulta de especificaciones',
      desc: 'Consulta organizada de características técnicas y hojas de datos.',
    },
    {
      icon: Scale,
      title: 'Comparación técnica',
      desc: 'Comparación directa de parámetros entre componentes industriales.',
    },
    {
      icon: SlidersHorizontal,
      title: 'Evaluación de alternativas',
      desc: 'Análisis de equivalencias y opciones compatibles para continuidad operativa.',
    },
    {
      icon: Eye,
      title: 'Herramientas de visualización',
      desc: 'Visualización clara de datos técnicos para agilizar la toma de decisiones.',
    },
  ];

  const inDevelopmentProjects = [
    {
      name: 'DC3',
      status: 'En desarrollo',
      tag: '// ESTRUCTURACIÓN TÉCNICA',
      description:
        'Iniciativa tecnológica propia en fase de desarrollo y diseño funcional dentro del ecosistema JIVOTECK.',
      scope:
        'Estructura digital orientada al soporte de procesos industriales. Proyecto en fase interna de validación; no emite constancias ni certificaciones de capacitación.',
    },
    {
      name: 'Calculadora de precios',
      status: 'En desarrollo',
      tag: '// ANÁLISIS OPERATIVO',
      description:
        'Herramienta digital en etapa de diseño y estructuración para la estimación y apoyo analítico en decisiones industriales.',
      scope:
        'Arquitectura de cálculo en fase de prototipado técnico; no establece modelos comerciales definitivos hasta su validación formal.',
    },
  ];

  return (
    <section id="ecosistema" className="py-20 sm:py-28 bg-[#F8F6F1] text-[#0E2433] border-t border-[#EAE5DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-0.5 bg-[#FF6B35] rounded-full" aria-hidden="true" />
              <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0E2433]/70 uppercase">
                DESARROLLOS TECNOLÓGICOS PROPIOS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0E2433] tracking-tight leading-[1.18]">
              Ecosistema de iniciativas JIVOTECK
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[#D8D2C6] space-y-3">
            <p className="font-sans text-sm sm:text-base text-[#0E2433]/75 leading-relaxed">
              Desarrollamos, estructuramos e impulsamos proyectos con identidad y funciones propias, enfocados en facilitar el acceso a la información y optimizar la toma de decisiones en el sector industrial.
            </p>
          </div>
        </div>

        {/* Featured Showcase: Industrialpedia */}
        <div className="bg-white rounded-3xl border border-[#E5E0D5] shadow-jivo-card overflow-hidden hover:shadow-jivo-hover transition-all duration-300 relative group p-6 sm:p-8 lg:p-10 space-y-8">
          
          {/* Top Row: Brand Badge + Headline + CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Navy Square Badge */}
            <div className="lg:col-span-3 flex justify-start sm:justify-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#0E2433] flex items-center justify-center overflow-hidden shadow-md shrink-0">
                <div 
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#FF6B35] transform rotate-45 pointer-events-none" 
                  aria-hidden="true" 
                />
                <div 
                  className="absolute -top-6 -right-6 w-12 h-12 bg-[#FF6B35] transform rotate-45 pointer-events-none" 
                  aria-hidden="true" 
                />
                <img
                  src="/assets/jivoteck_logo_dark.png"
                  alt="JIVOTECK"
                  className="w-20 sm:w-24 h-auto object-contain drop-shadow relative z-10"
                />
              </div>
            </div>

            {/* Center Content */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#D8D2C6] text-[10px] font-mono font-bold tracking-widest text-[#0E2433]/80 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" aria-hidden="true" />
                  <span>INICIATIVA ACTIVA DEL ECOSISTEMA</span>
                </div>
                <span className="text-[10px] font-mono text-[#2F5F50] font-semibold tracking-wider">
                  INFORMACIÓN & CONSULTA
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0E2433] tracking-tight">
                Industrialpedia
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#0E2433]/80 leading-relaxed">
                Plataforma tecnológica especializada en la organización y consulta de información técnica industrial. Centraliza información de componentes y refacciones para facilitar su búsqueda, comparación y evaluación.
              </p>

              <div className="p-3.5 rounded-2xl bg-[#F8F6F1] border border-[#EAE5DC] text-xs text-[#0E2433]/75 font-sans leading-relaxed">
                <strong className="text-[#0E2433] font-semibold">Utilidad operativa:</strong> Diseñada especialmente para optimizar la labor técnica del personal de mantenimiento, ingeniería de planta y compras industriales.
              </div>
            </div>

            {/* Right Action & External Indicator */}
            <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between h-full space-y-4">
              <div className="text-left lg:text-right space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#0E2433]/50 block">
                  Plataforma web oficial
                </span>
                <span className="text-xs font-mono font-bold text-[#0E2433] block">
                  industrialpedia.com.mx
                </span>
              </div>

              <a
                href={siteConfig.industrialpedia.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#FF6B35] hover:bg-[#E85A24] text-white px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center justify-center gap-2 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
              >
                <span>Conocer Industrialpedia</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

          </div>

          {/* Capabilities Grid (Sujetas a verificación en el producto) */}
          <div className="pt-6 border-t border-[#EAE5DC] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0E2433]/70">
                Capacidades de la plataforma
              </span>
              <span className="text-[10px] font-mono text-[#0E2433]/50">
                Sujetas a verificación en producto
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industrialpediaCapabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="p-4 rounded-2xl bg-[#F8F6F1] border border-[#EAE5DC] flex items-start gap-3 transition-colors hover:bg-neutral-50"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white border border-[#D8D2C6] flex items-center justify-center shrink-0 text-[#2F5F50]">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-sans font-bold text-xs text-[#0E2433]">
                        {cap.title}
                      </h4>
                      <p className="font-sans text-[11px] text-[#0E2433]/70 leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Subsection: Proyectos en Desarrollo (Separados claramente de Industrialpedia) */}
        <div className="space-y-6 pt-4">
          
          {/* Header of Subsection */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#D8D2C6]/80 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0E2433]/70 uppercase">
                  ROADMAP TECNOLÓGICO
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0E2433] tracking-tight">
                Proyectos en desarrollo
              </h3>
            </div>
            <p className="text-xs font-sans text-[#0E2433]/65 max-w-md leading-relaxed">
              Iniciativas tecnológicas en fase de estructuración interna dentro de JIVOTECK. No cuentan con fechas de lanzamiento comerciales ni funciones públicas habilitadas.
            </p>
          </div>

          {/* Development Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {inDevelopmentProjects.map((proj) => (
              <div
                key={proj.name}
                className="p-6 sm:p-7 rounded-3xl bg-white/80 border border-[#E5E0D5] space-y-4 shadow-2xs relative"
              >
                {/* Top Row: Tag + Status badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#FF6B35]">
                    {proj.tag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#D8D2C6] text-[10px] font-mono font-bold text-[#0E2433]/70 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" aria-hidden="true" />
                    <span>Estado: {proj.status}</span>
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#0E2433] tracking-tight">
                    {proj.name}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#0E2433]/80 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE5DC] text-[11px] font-sans text-[#0E2433]/65 leading-relaxed bg-[#F8F6F1]/80 p-3 rounded-2xl border border-[#EAE5DC]/80">
                  <strong className="text-[#0E2433] font-semibold">Alcance actual:</strong> {proj.scope}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
