import React from 'react';
import { 
  Database, 
  Code2, 
  Cpu, 
  TrendingUp,
  Compass,
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  Search
} from 'lucide-react';

export const CorporateBlock: React.FC = () => {
  const corePillars = [
    {
      icon: Database,
      title: 'Información Industrial',
      desc: 'Estructuración, normalización y aprovechamiento de datos técnicos.'
    },
    {
      icon: Code2,
      title: 'Software',
      desc: 'Herramientas privadas adaptadas a procesos reales.'
    },
    {
      icon: Cpu,
      title: 'Automatización Industrial',
      desc: 'Soluciones de control, supervisión e integración técnica.'
    },
    {
      icon: TrendingUp,
      title: 'Marketing B2B Industrial',
      desc: 'Comunicación, posicionamiento y estrategia comercial para empresas que venden dentro del mercado industrial.'
    },
    {
      icon: Compass,
      title: 'Consultoría Técnica',
      desc: 'Análisis de problemas y definición de soluciones viables.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-[#13262F] border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-[#FAF8F5] text-[#2E4846] border border-[#D8D2C6] shadow-2xs">
            <Database className="w-3.5 h-3.5 text-[#50756C]" />
            <span>POSICIONAMIENTO & CAPACIDADES RAÍZ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-[#13262F] leading-tight">
            Soluciones tecnológicas y estratégicas para la industria.
          </h2>
          <p className="text-base sm:text-lg text-[#3E5C54] leading-relaxed font-sans font-normal">
            Combinamos estructuración de información, desarrollo de software, automatización y estrategia comercial B2B para resolver problemas reales de las empresas con herramientas adaptadas a su operación.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {corePillars.map((pilar, idx) => {
            const Icon = pilar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] hover:border-[#2E4846] hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE5DC] flex items-center justify-center text-[#2E4846] mb-3.5 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#13262F] font-sans tracking-tight mb-2">
                    {pilar.title}
                  </h3>
                  <p className="text-xs text-[#4A635B] leading-relaxed font-sans">
                    {pilar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Typical Use Case Showcase Box */}
        <div className="rounded-3xl bg-[#FAF8F5] border border-[#EAE5DC] p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#638379] block">
                CASO TÍPICO DE APLICACIÓN
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#13262F] tracking-tight">
                ¿Tu empresa tiene cientos o miles de registros dispersos?
              </h3>
              <p className="text-sm text-[#3E5C54] leading-relaxed font-sans font-normal">
                Es común que los catálogos de refacciones, componentes de maquinaria y documentación técnica se encuentren divididos entre hojas de Excel, exportaciones de ERP/CMMS o archivos PDF sin orden homogéneo.
              </p>
              
              <div className="pt-2 space-y-2.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#13262F] block">
                  JIVOTECK desarrolla un sistema privado para:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3E5C54] font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#50756C] shrink-0" />
                    <span>Importar y estructurar datos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#50756C] shrink-0" />
                    <span>Normalizar fabricantes y números de parte</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#50756C] shrink-0" />
                    <span>Clasificar componentes técnicos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#50756C] shrink-0" />
                    <span>Detectar registros duplicados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#50756C] shrink-0" />
                    <span>Relacionar documentación técnica</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#50756C] shrink-0" />
                    <span>Facilitar búsqueda y consulta interna</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="#contacto"
                  className="px-6 py-3 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
                >
                  <span>Platicar sobre mi catálogo</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
                <span className="text-xs font-mono text-[#638379]">
                  Cuando un proyecto implique información confidencial, podemos trabajar bajo acuerdo de confidencialidad (NDA).
                </span>
              </div>
            </div>

            {/* Right Visual Architecture Concept (5 cols) */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#EAE5DC] space-y-4 shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2E4846]">
                  Flujo de Arquitectura
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F1EA] text-[#4A635B]">
                  Entorno Privado
                </span>
              </div>

              {/* Step Flow Diagram */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* Step 1 */}
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <FileSpreadsheet className="w-4 h-4 text-[#638379]" />
                    <span className="text-[#13262F] font-bold">1. Fuentes Dispersas</span>
                  </div>
                  <span className="text-[10px] text-[#4A635B]">Excel / PDF / ERP</span>
                </div>

                <div className="flex justify-center">
                  <span className="text-[#8FA89B] text-xs">↓ Normalización & Depuración</span>
                </div>

                {/* Step 2 */}
                <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#D8D2C6] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Database className="w-4 h-4 text-[#2E4846]" />
                    <span className="text-[#13262F] font-bold">2. Estructura JIVOTECK</span>
                  </div>
                  <span className="text-[10px] text-[#2E4846] font-bold">Datos Claros</span>
                </div>

                <div className="flex justify-center">
                  <span className="text-[#8FA89B] text-xs">↓ Software Privado Adaptado</span>
                </div>

                {/* Step 3 */}
                <div className="p-3 rounded-xl bg-[#13262F] text-white flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <Search className="w-4 h-4 text-[#E2DDD4]" />
                    <span className="font-bold">3. Portal de Consulta Interna</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#E2DDD4]">Uso en Planta</span>
                </div>

              </div>

              <p className="text-[11px] text-[#638379] font-sans pt-2 border-t border-[#EAE5DC]">
                * Compatible para futuras integraciones técnicas con ERP, CMMS o APIs empresariales mediante desarrollos a medida.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
