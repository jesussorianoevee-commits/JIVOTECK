import React from 'react';
import { 
  Compass, 
  Code2, 
  FolderGit2, 
  TrendingUp, 
  Sparkles,
  Building2,
  Layers,
  ArrowRight
} from 'lucide-react';

export const CorporateBlock: React.FC = () => {
  const corporateCapabilities = [
    {
      icon: Compass,
      title: 'Estrategia',
      desc: 'Definimos dirección, modelo y objetivos claros para cada iniciativa o marca del ecosistema.'
    },
    {
      icon: Code2,
      title: 'Tecnología',
      desc: 'Convertimos conceptos en productos digitales funcionales, arquitecturas de datos e infraestructura digital sólida.'
    },
    {
      icon: FolderGit2,
      title: 'Gestión',
      desc: 'Coordinamos el desarrollo, administración operativa y evolución continua de cada proyecto.'
    },
    {
      icon: TrendingUp,
      title: 'Marca & Desarrollo Comercial',
      desc: 'Desarrollamos el posicionamiento, comunicación y estrategia comercial de los proyectos que forman parte del ecosistema JIVOTECK.'
    },
    {
      icon: Sparkles,
      title: 'Desarrollo de Negocio',
      desc: 'Exploramos necesidades reales y oportunidades de mercado para convertirlas en proyectos sostenibles.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-[#13262F] border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-[#FAF8F5] text-[#2E4846] border border-[#D8D2C6] shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-[#50756C]" />
            <span>CÓMO CONSTRUIMOS • CAPACIDADES DEL CORPORATIVO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-[#13262F] leading-tight">
            De la idea a iniciativas sostenibles.
          </h2>
          <p className="text-base sm:text-lg text-[#3E5C54] leading-relaxed font-sans font-normal">
            En JIVOTECK articulamos cada iniciativa desde la concepción estratégica hasta la operación y escalamiento, integrando tecnología, gestión y desarrollo comercial bajo una misma visión.
          </p>
        </div>

        {/* 5 Corporate Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {corporateCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
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
                    {cap.title}
                  </h3>
                  <p className="text-xs text-[#4A635B] leading-relaxed font-sans">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Architecture / Holding Model Box */}
        <div className="rounded-3xl bg-[#FAF8F5] border border-[#EAE5DC] p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#638379] block">
                ARQUITECTURA DE MARCA & GOBERNANZA
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#13262F] tracking-tight">
                Una casa matriz que conecta y respalda proyectos.
              </h3>
              <p className="text-sm text-[#3E5C54] leading-relaxed font-sans font-normal">
                JIVOTECK opera como la entidad corporativa y administrativa desde la cual nacen, se estructuran y se formalizan marcas y soluciones tecnológicas independientes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#3E5C54]">
                <div className="p-3 bg-white rounded-xl border border-[#EAE5DC] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#13262F] font-mono">
                    <Building2 className="w-3.5 h-3.5 text-[#50756C]" />
                    <span>Entidad Corporativa</span>
                  </div>
                  <p className="text-[11px] text-[#638379] font-sans">
                    Administración, dirección estratégica y formalización jurídica centralizada.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#EAE5DC] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#13262F] font-mono">
                    <Layers className="w-3.5 h-3.5 text-[#50756C]" />
                    <span>Marcas con Propósito</span>
                  </div>
                  <p className="text-[11px] text-[#638379] font-sans">
                    Iniciativas tecnológicas creadas para resolver necesidades de mercado concretas.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="#ecosistema"
                  className="px-5 py-2.5 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
                >
                  <span>Explorar proyectos activos</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </a>
              </div>
            </div>

            {/* Right Visual Architecture Concept (5 cols) */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#EAE5DC] space-y-4 shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2E4846]">
                  Estructura del Ecosistema
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F1EA] text-[#4A635B]">
                  Esquema Matriz
                </span>
              </div>

              {/* Hierarchy Tree */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* Level 1: JIVOTECK */}
                <div className="p-3 rounded-xl bg-[#13262F] text-white flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-[#A3BFB5]" />
                    <div>
                      <span className="font-bold block text-sm">JIVOTECK</span>
                      <span className="text-[10px] text-[#A3BFB5]">Corporativo / Empresa Matriz</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold bg-white/10 px-2 py-0.5 rounded text-white">
                    Gobernanza
                  </span>
                </div>

                <div className="flex justify-center">
                  <span className="text-[#8FA89B] text-xs">│ Desarrolla y opera</span>
                </div>

                {/* Level 2: Brands / Projects */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#D8D2C6] flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-[#50756C] block uppercase tracking-wider">
                        Proyecto Activo
                      </span>
                      <span className="text-xs font-bold text-[#13262F]">
                        Industrialpedia
                      </span>
                    </div>
                    <span className="text-[10px] text-[#4A635B] mt-1">
                      Tecnología Industrial
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-[#8FA89B] block uppercase tracking-wider">
                        I+D Interno
                      </span>
                      <span className="text-xs font-bold text-[#13262F]">
                        Nuevos Proyectos
                      </span>
                    </div>
                    <span className="text-[10px] text-[#638379] mt-1">
                      En Evaluación
                    </span>
                  </div>
                </div>

              </div>

              <p className="text-[11px] text-[#638379] font-sans pt-2 border-t border-[#EAE5DC]">
                * Las marcas e iniciativas operan con respaldo corporativo, legal y administrativo centralizado.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
