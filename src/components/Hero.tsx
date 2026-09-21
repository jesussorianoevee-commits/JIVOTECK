import React, { useState } from 'react';
import { 
  ArrowRight, 
  Activity, 
  Terminal, 
  Layers, 
  Sparkles,
  CheckCircle2,
  Share2
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'architecture' | 'twin'>('telemetry');

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-cyan/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-brand-cyan/30 text-xs font-mono text-brand-cyan backdrop-blur-md shadow-sm shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
              <span className="font-semibold tracking-wide uppercase">Startup Tecnológica Oficial</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">Software & Automatización</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Innovación donde la <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-sky-300 to-brand-blue">
                automatización industrial
              </span> <br />
              se une al software moderno.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              En <strong className="text-white font-semibold">JIVOTECK</strong> fusionamos cuatro pilares fundamentales: 
              <span className="text-brand-cyan font-medium"> Automatización</span>, 
              <span className="text-sky-400 font-medium"> Programación</span>, 
              <span className="text-emerald-400 font-medium"> Orientación estratégica</span> y 
              <span className="text-amber-400 font-medium"> Marketing tecnológico</span>. 
              Creamos soluciones fiables, escalables y con alto rigor de ingeniería.
            </p>

            {/* Key feature pills */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                <span>Desarrollo a Medida</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Integración de Procesos</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Fundadores de Industrialpedia</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#industrialpedia"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-black bg-gradient-to-r from-brand-cyan to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group font-mono text-sm"
              >
                <span>Conoce Industrialpedia</span>
                <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
              </a>

              <a
                href="#servicios"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-slate-500 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
              >
                <span>Nuestros Servicios</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Owner banner note */}
            <div className="pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-brand-border flex items-center gap-3 text-xs text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span>
                  <strong className="text-white font-medium">Aviso de Autoría:</strong> JIVOTECK es la empresa dueña y desarrolladora del ecosistema <strong className="text-brand-cyan">Industrialpedia</strong>.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tech Visualizer */}
          <div className="lg:col-span-5">
            <div className="relative glass-panel rounded-2xl p-5 border border-brand-border/80 shadow-2xl shadow-cyan-950/20">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 font-mono text-xs text-slate-400 font-medium tracking-wide">
                    JIVOTECK // Core Visualizer
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Sub-tabs */}
              <div className="grid grid-cols-3 gap-1 my-3 p-1 bg-slate-950/60 rounded-lg border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('telemetry')}
                  className={`py-1.5 px-2 rounded-md transition-all ${
                    activeTab === 'telemetry' 
                      ? 'bg-brand-blue/30 text-brand-cyan border border-brand-cyan/30' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Telemetría
                </button>
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`py-1.5 px-2 rounded-md transition-all ${
                    activeTab === 'architecture' 
                      ? 'bg-brand-blue/30 text-brand-cyan border border-brand-cyan/30' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Arquitectura
                </button>
                <button
                  onClick={() => setActiveTab('twin')}
                  className={`py-1.5 px-2 rounded-md transition-all ${
                    activeTab === 'twin' 
                      ? 'bg-brand-blue/30 text-brand-cyan border border-brand-cyan/30' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Gemelo Digital
                </button>
              </div>

              {/* Tab Contents */}
              {activeTab === 'telemetry' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800/80">
                      <div className="text-slate-400 text-[10px] uppercase">Rendimiento Sistema</div>
                      <div className="text-lg font-bold text-brand-cyan mt-1">99.98%</div>
                      <div className="text-[10px] text-emerald-400">Operatividad industrial</div>
                    </div>
                    <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800/80">
                      <div className="text-slate-400 text-[10px] uppercase">Tiempo de Respuesta</div>
                      <div className="text-lg font-bold text-sky-400 mt-1">&lt; 14 ms</div>
                      <div className="text-[10px] text-slate-400">Latencia en borde</div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 space-y-2">
                    <div className="flex justify-between text-[11px] text-slate-300">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
                        Flujo de Automatización
                      </span>
                      <span className="text-emerald-400 font-semibold">SINCRONIZADO</span>
                    </div>
                    {/* Simulated live telemetry bars */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>Lógica de Control PLC</span>
                        <span className="text-brand-cyan">100% OK</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-brand-cyan h-full w-full rounded-full"></div>
                      </div>

                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>Módulo de Software & API</span>
                        <span className="text-sky-400">Activo</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-sky-400 h-full w-[94%] rounded-full"></div>
                      </div>

                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>Homologador Industrialpedia</span>
                        <span className="text-amber-400">V. Beta Staging</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full w-[88%] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Infraestructura:</span>
                    <span className="text-white font-semibold">React • Node • Cloud • Edge IoT</span>
                  </div>
                </div>
              )}

              {activeTab === 'architecture' && (
                <div className="p-4 bg-slate-950/80 rounded-lg border border-slate-800/80 space-y-3 font-mono text-xs">
                  <div className="text-slate-300 font-semibold text-xs flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-brand-cyan" />
                    Stack Tecnológico de Soluciones
                  </div>
                  <div className="space-y-2 text-[11px] text-slate-400">
                    <div className="p-2 bg-slate-900 rounded border border-slate-800 flex justify-between">
                      <span>Frontend & UX:</span>
                      <span className="text-brand-cyan">React, Next, Tailwind, Mobile</span>
                    </div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800 flex justify-between">
                      <span>Backend & APIs:</span>
                      <span className="text-sky-400">Microservicios, Node, Python, SQL</span>
                    </div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800 flex justify-between">
                      <span>Automatización:</span>
                      <span className="text-emerald-400">PLCs, SCADA, Modbus, Protocolos</span>
                    </div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800 flex justify-between">
                      <span>Crecimiento & MKT:</span>
                      <span className="text-amber-400">SEO B2B, Estrategia Tech, Funnels</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'twin' && (
                <div className="p-4 bg-slate-950/80 rounded-lg border border-slate-800/80 space-y-3 font-mono text-xs">
                  <div className="text-slate-300 font-semibold text-xs flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Share2 className="w-4 h-4 text-amber-400" />
                      Motor de Simulación
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded border border-amber-500/20">
                      Industrialpedia Engine
                    </span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-800 text-[11px] space-y-2">
                    <p className="text-slate-400 font-sans">
                      Algoritmo propietario de comparación de especificaciones neumáticas, eléctricas y mecánicas para sustitución cruzada sin fallos.
                    </p>
                    <div className="flex items-center justify-between text-slate-300 pt-1 border-t border-slate-800">
                      <span>Precisión dimensional:</span>
                      <span className="text-emerald-400 font-bold">100% Homologado</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Status footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Versión: JIVOTECK v1.0</span>
                <a href="#contacto" className="text-brand-cyan hover:underline flex items-center gap-1">
                  <span>Contactar desarrolladores</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
