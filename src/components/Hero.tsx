import React, { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Bell, 
  Check, 
  CheckCircle2, 
  Activity, 
  Layers, 
  Cpu 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Hero: React.FC = () => {
  const [emailSub, setEmailSub] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSub.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section id="inicio" className="pt-28 pb-14 md:pt-36 md:pb-20 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] text-slate-900 relative overflow-hidden">
      
      {/* Subtle organic ambient gradient glow matching Upstream & Bento 3 */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Header Row with Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white border border-emerald-200/80 text-[#006254] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>JIVOTECK STARTUP LABS • AGUASCALIENTES, MÉXICO</span>
          </div>

          <a 
            href="#servicios" 
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase font-semibold text-slate-600 hover:text-[#007362] transition-colors group"
          >
            <span>Explorar Divisiones</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#007362]" />
          </a>
        </div>

        {/* Hero Headline & Intro */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-sans leading-[1.12]">
            Tecnología, Software y Automatización para la <span className="bg-gradient-to-r from-[#00584B] via-[#007362] to-[#0D9488] bg-clip-text text-transparent">Industria Conectada</span>.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-3xl">
            En <strong>JIVOTECK</strong> convergen la ingeniería de automatización industrial, el desarrollo de software a medida, la consultoría técnica de alto nivel y el marketing estratégico para empresas que lideran la transformación productiva.
          </p>
          
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00584B] to-[#007362] hover:from-[#00483D] hover:to-[#00584B] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Hablemos de tu Proyecto</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#servicios"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-mono text-xs font-semibold uppercase tracking-wider transition-all border border-slate-200 shadow-2xs flex items-center gap-2"
            >
              <span>Ver Capacidades</span>
            </a>
          </div>
        </div>

        {/* Bento Featured Card: INDUSTRIALPEDIA (Combines Upstream Image 1 & Glowing Bento Image 3) */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-amber-500/20 shadow-xl transition-all duration-300">
          <div className="rounded-[22px] bg-white border border-slate-200/80 p-6 sm:p-10 lg:p-12 overflow-hidden relative">
            
            {/* Ambient Aura Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100/50 via-sky-50/30 to-transparent rounded-full blur-2xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Brand, Status & Value Prop */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Status Pill matching Image 1 */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                    <span>EN DESARROLLO ACTIVO</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-[#006254] border border-emerald-200/60">
                    ECOSISTEMA INDUSTRIAL 4.0
                  </span>
                </div>

                {/* Industrialpedia Title */}
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-sans">
                    Industrialpedia
                  </h2>
                  <p className="text-sm sm:text-base font-mono font-semibold text-[#007362] mt-1">
                    The Industrial Information Platform
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  Plataforma concebida para la consulta, homologación técnica y comparación inteligente de componentes de automatización industrial, neumáticos y electrónicos.
                </p>

                {/* Key feature pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <Cpu className="w-3.5 h-3.5 text-[#007362]" />
                    <span>Homologador de Componentes</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <Layers className="w-3.5 h-3.5 text-[#007362]" />
                    <span>Matriz de Especificaciones</span>
                  </div>
                </div>

                {/* Action Buttons & Ownership */}
                <div className="pt-2 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Primary direct link to official platform */}
                    <a
                      href={siteConfig.industrialpedia.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#007362] hover:bg-[#00584B] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-sm hover:shadow"
                      title="Abrir industrialpedia.com.mx"
                    >
                      <span>Ir a Industrialpedia.com.mx</span>
                      <ExternalLink className="w-4 h-4 text-[#00D4B2]" />
                    </a>

                    <a
                      href="#servicios"
                      className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-semibold rounded-xl transition-colors"
                    >
                      Conocer más
                    </a>
                  </div>

                  {/* Official Ownership Declaration */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#007362] shrink-0" />
                    <span>
                      <strong>Propiedad Intelectual:</strong> Proyecto concebido, desarrollado y respaldado al 100% por <strong>JIVOTECK</strong>.
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Telemetry Card (Inspired directly by Image 3 Bento & Image 1 Dashboard) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#0A121E] via-[#0E1726] to-[#0A121E] rounded-2xl p-6 border border-slate-800 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
                
                {/* Radial Glow Aura from Image 3 */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#00D4B2]/15 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#00D4B2]" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                        Telemetría & Datos
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800">
                      Mantenimiento 4.5
                    </span>
                  </div>

                  {/* Simulated telemetry chart like Image 3 */}
                  <div className="space-y-2 py-2">
                    <div className="flex justify-between text-[11px] font-mono text-slate-400">
                      <span>Monitoreo de Componentes</span>
                      <span className="text-[#00D4B2] font-bold">En Línea</span>
                    </div>

                    <div className="h-24 w-full relative flex items-end gap-1.5 pt-4">
                      {/* Vertical grid lines */}
                      <div className="absolute inset-0 grid grid-rows-3 border-b border-slate-800/80">
                        <div className="border-t border-slate-800/40"></div>
                        <div className="border-t border-slate-800/40"></div>
                        <div className="border-t border-slate-800/40"></div>
                      </div>

                      {/* Animated wave bars */}
                      {[40, 65, 50, 75, 60, 85, 70, 95, 80, 90, 85, 100].map((val, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end h-full relative z-10">
                          <div 
                            className="w-full bg-gradient-to-t from-[#006254] via-[#0D9488] to-[#00D4B2] rounded-t-sm transition-all duration-500 hover:brightness-125"
                            style={{ height: `${val}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between text-[10px] font-mono text-slate-500">
                      <span>Tiempo real</span>
                      <span>Algoritmo de Homologación</span>
                    </div>
                  </div>

                  {/* Interactive Notification subscription */}
                  <div className="pt-2">
                    {subscribed ? (
                      <div className="p-3 bg-emerald-950/80 border border-emerald-700/80 text-emerald-300 text-xs font-mono rounded-xl flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>¡Suscrito! Te avisaremos el día del lanzamiento oficial.</span>
                      </div>
                    ) : (
                      <form onSubmit={handleSubscribe} className="space-y-2">
                        <label className="text-[11px] font-mono text-slate-400 block">
                          Recibe invitación prioritaria a la beta:
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="email"
                            required
                            placeholder="tu.correo@empresa.com"
                            value={emailSub}
                            onChange={(e) => setEmailSub(e.target.value)}
                            className="flex-1 px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4B2]"
                          />
                          <button
                            type="submit"
                            className="px-3.5 py-2 bg-gradient-to-r from-[#007362] to-[#0D9488] hover:brightness-110 text-white text-xs font-mono font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 shadow"
                          >
                            <Bell className="w-3.5 h-3.5 text-[#00D4B2]" />
                            <span>Avisarme</span>
                          </button>
                        </div>
                      </form>
                    )}
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
