import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Code2,
  Compass,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'solutions' | 'industrialpedia' | 'approach'>('solutions');

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-startup-glow">
      {/* Soft ambient light blurs (modern SaaS style) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[320px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="font-semibold tracking-wide">Startup Tecnológica</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">Soluciones en Software & Automatización</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14]">
              Desarrollo tecnológico que conecta con <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-sky-300">
                los objetivos de tu empresa.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              En <strong className="text-white font-semibold">JIVOTECK</strong> transformamos ideas complejas en productos y sistemas eficientes. Combinamos 
              <span className="text-indigo-300 font-medium"> programación a la medida</span>, 
              <span className="text-blue-300 font-medium"> automatización de procesos</span>, 
              <span className="text-sky-300 font-medium"> consultoría técnica</span> y 
              <span className="text-purple-300 font-medium"> marketing estratégico</span> para crear soluciones confiables y de alto impacto.
            </p>

            {/* Trust pills */}
            <div className="pt-1 flex flex-wrap justify-center lg:justify-start gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/[0.08]">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Atención Personalizada</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/[0.08]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Rigor Técnico & Claridad</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/[0.08]">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Dueños de Industrialpedia</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contacto"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition-all duration-200 shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2 group text-sm"
              >
                <span>Hablemos de tu Proyecto</span>
                <MessageSquare className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>

              <a
                href="#industrialpedia"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-white/[0.1] hover:border-indigo-500/30 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
              >
                <span>Conoce Industrialpedia</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Reassurance Banner */}
            <div className="pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.08] flex items-center gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>
                  <strong className="text-white font-medium">Garantía JIVOTECK:</strong> Desarrollos propios y a la medida con soporte continuo, transparencia y código seguro.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Tech Hub Visualizer */}
          <div className="lg:col-span-5">
            <div className="startup-card rounded-2xl p-5 border border-white/[0.1] shadow-2xl shadow-indigo-950/20">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block"></span>
                  <span className="ml-2 text-xs text-slate-300 font-medium font-sans">
                    Ecosistema JIVOTECK Hub
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-medium text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Disponible</span>
                </div>
              </div>

              {/* Sub-tabs */}
              <div className="grid grid-cols-3 gap-1.5 my-3 p-1 bg-slate-950/60 rounded-xl border border-white/[0.06] text-xs">
                <button
                  onClick={() => setActiveTab('solutions')}
                  className={`py-1.5 px-2 rounded-lg font-medium transition-all ${
                    activeTab === 'solutions' 
                      ? 'bg-indigo-600 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Servicios
                </button>
                <button
                  onClick={() => setActiveTab('industrialpedia')}
                  className={`py-1.5 px-2 rounded-lg font-medium transition-all ${
                    activeTab === 'industrialpedia' 
                      ? 'bg-indigo-600 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Industrialpedia
                </button>
                <button
                  onClick={() => setActiveTab('approach')}
                  className={`py-1.5 px-2 rounded-lg font-medium transition-all ${
                    activeTab === 'approach' 
                      ? 'bg-indigo-600 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Metodología
                </button>
              </div>

              {/* Tab Contents */}
              {activeTab === 'solutions' && (
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-slate-900/70 rounded-xl border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Programación & Software</div>
                        <div className="text-[11px] text-slate-400">Web, APIs, Apps en la Nube</div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-medium">
                      A la Medida
                    </span>
                  </div>

                  <div className="p-3 bg-slate-900/70 rounded-xl border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Automatización de Procesos</div>
                        <div className="text-[11px] text-slate-400">Control Inteligente y Sensores</div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 font-medium">
                      Precisión
                    </span>
                  </div>

                  <div className="p-3 bg-slate-900/70 rounded-xl border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Orientación & Consultoría</div>
                        <div className="text-[11px] text-slate-400">Acompañamiento Tecnológico</div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 font-medium">
                      Estratégico
                    </span>
                  </div>

                  <div className="p-3 bg-slate-900/70 rounded-xl border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Marketing Tecnológico</div>
                        <div className="text-[11px] text-slate-400">Posicionamiento y Tracción B2B</div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 font-medium">
                      Crecimiento
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'industrialpedia' && (
                <div className="p-4 bg-slate-950/70 rounded-xl border border-white/[0.06] space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                      Proyecto Propio en Marcha
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium border border-indigo-500/30">
                      Próximamente
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans text-[11px]">
                    Industrialpedia es una plataforma digital desarrollada por JIVOTECK para la comparación y homologación técnica inteligente de componentes industriales.
                  </p>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-white/[0.06] flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Estatus de desarrollo:</span>
                    <span className="text-emerald-400 font-medium">Fase Beta Activa</span>
                  </div>
                </div>
              )}

              {activeTab === 'approach' && (
                <div className="p-4 bg-slate-950/70 rounded-xl border border-white/[0.06] space-y-2.5 text-xs font-sans">
                  <div className="font-semibold text-white">¿Cómo trabajamos contigo?</div>
                  <div className="space-y-1.5 text-slate-300 text-[11px]">
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                      <span><strong>Diagnóstico Inicial:</strong> Entendemos tu necesidad sin costo.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                      <span><strong>Propuesta Clara:</strong> Alcance, plazos y costos transparentes.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</span>
                      <span><strong>Desarrollo & Entrega:</strong> Entregas ágiles y soporte garantizado.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Status footer */}
              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <span>Respuesta en menos de 24 horas</span>
                <a href="#contacto" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1">
                  <span>Solicitar asesoría</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
