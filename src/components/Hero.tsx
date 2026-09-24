import React, { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Bell, 
  Check, 
  CheckCircle2, 
  Activity, 
  Layers, 
  Cpu,
  Send
} from 'lucide-react';
import { JivoteckIcon } from './JivoteckLogo';
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
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-sky-50/70 via-white to-slate-50 text-slate-900 relative overflow-hidden">
      
      {/* Subtle modern architectural grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none"></div>

      {/* Luminous light ambient auras (Light Cyan, Sky Blue, Soft Amber) */}
      <div className="absolute top-10 left-1/4 w-[480px] h-[480px] bg-[#00D4FF]/12 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-sky-300/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-200/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top Header Row with Luminous Light Pill */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          <div className="relative group">
            {/* Soft luminous light-blue glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF]/40 via-sky-400/30 to-[#8AE3EA]/40 rounded-full blur-sm opacity-80 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white border border-sky-200/80 text-[#0284C7] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]"></span>
              <span>EMPOWERING INDUSTRIAL TECHNOLOGY</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white border border-slate-200 text-slate-600 shadow-2xs">
              ● AGUASCALIENTES, MÉXICO
            </span>
            <a 
              href="#servicios" 
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
            >
              <span>EXPLORAR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Hero Headline & Intro */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-sans text-slate-950 leading-[1.12]">
            Tecnología, Software y Control para la <span className="bg-gradient-to-r from-[#0284C7] via-[#00A3FF] to-[#00D4FF] bg-clip-text text-transparent">Industria del Futuro</span>.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-3xl font-normal">
            En <strong className="text-slate-900 font-semibold">JIVOTECK</strong> convergen la ingeniería de control y automatización de procesos, el desarrollo de software industrial a medida, la consultoría técnica y el marketing estratégico de base tecnológica.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="px-6 py-3 rounded-xl bg-[#00D4FF] hover:bg-[#38BDF8] text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/35 flex items-center gap-2"
            >
              <span>Hablemos de tu Proyecto</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>
            <a
              href="#servicios"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-mono text-xs font-semibold uppercase tracking-wider transition-all border border-slate-200 shadow-xs"
            >
              <span>Ver Soluciones</span>
            </a>
          </div>
        </div>

        {/* BENTO GRID (Clean, Light, High-Tech Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2">
          
          {/* Card 1: Telemetry & Monitoring Graph - 5 cols */}
          <div className="md:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            {/* Top telemetry coords */}
            <div className="space-y-1 pb-4 border-b border-slate-100">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="text-slate-800 font-bold">Telemetría de Planta</span>
                <span className="text-[#0284C7] font-bold">Tiempo Real</span>
              </div>
              <div className="flex items-baseline gap-3 text-xs font-mono">
                <span className="text-slate-500">Score de Operación:</span>
                <span className="text-slate-900 font-bold">98.4 / 100</span>
                <span className="text-slate-400">Vol: 45K ops/h</span>
              </div>
            </div>

            {/* Glowing Spline Graph with Indicator Cursor Beam */}
            <div className="h-44 w-full relative my-4 flex items-center justify-center">
              {/* Grid Lines */}
              <div className="absolute inset-0 grid grid-rows-4 border-b border-slate-100">
                <div className="border-t border-slate-100"></div>
                <div className="border-t border-slate-100"></div>
                <div className="border-t border-slate-100"></div>
              </div>

              {/* Glowing SVG Waveform curve in light blues */}
              <svg className="w-full h-full relative z-10 overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 120">
                <defs>
                  <linearGradient id="cyanLineGlowLight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0284C7" stopOpacity="0.7" />
                    <stop offset="60%" stopColor="#00D4FF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="cyanAreaLight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 Q30,60 60,75 T120,45 T180,65 T230,30 T300,50 L300,120 L0,120 Z"
                  fill="url(#cyanAreaLight)"
                />
                <path
                  d="M0,80 Q30,60 60,75 T120,45 T180,65 T230,30 T300,50"
                  fill="none"
                  stroke="url(#cyanLineGlowLight)"
                  strokeWidth="2.5"
                />
                {/* Vertical Scanning Beam at cursor */}
                <line x1="230" y1="0" x2="230" y2="120" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                {/* Glowing Dot on Line */}
                <circle cx="230" cy="30" r="4.5" fill="#0284C7" />
                <circle cx="230" cy="30" r="8" fill="#00D4FF" opacity="0.4" className="animate-ping" />
              </svg>

              {/* Floating Pill on Graph */}
              <div className="absolute right-4 top-4 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#00D4FF] text-slate-950 shadow-xs">
                +14.8% Eficiencia
              </div>
            </div>

            {/* Bottom time selector / metadata */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="text-[#0284C7] font-semibold">● Mantenimiento 4.5</span>
              <span>Monitoreo Activo</span>
            </div>
          </div>

          {/* Card 2: Industrialpedia Flagship Bento - 7 cols */}
          <div className="md:col-span-7 bg-gradient-to-br from-white via-sky-50/40 to-cyan-50/30 border border-slate-200/90 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            
            {/* Soft Cyan Light Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#00D4FF]/15 via-sky-300/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-5">
              
              {/* Kicker & Coming Soon Pill */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                  <span>EN DESARROLLO ACTIVO • COMING SOON</span>
                </div>

                <span className="text-[11px] font-mono text-[#0284C7] font-bold">
                  industrialpedia.com.mx ↗
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-sans">
                  Industrialpedia
                </h2>
                <p className="text-sm sm:text-base font-mono font-semibold text-[#0284C7] mt-1">
                  The Industrial Information Platform
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-sans font-normal">
                Plataforma de comparación técnica, homologación y consulta inteligente de componentes industriales, neumáticos y eléctricos.
              </p>

              {/* Percentage / Spec Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">Módulo de Homologación</span>
                    <span className="text-xs font-bold text-slate-900 font-sans">Cruce Multi-marca</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-50 text-[#0284C7] border border-sky-200">
                    +100% Preciso
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">Arquitectura de Datos</span>
                    <span className="text-xs font-bold text-slate-900 font-sans">Estandarización 4.0</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-50 text-[#0284C7] border border-cyan-200">
                    Propiedad JVT
                  </span>
                </div>
              </div>

              {/* Official Ownership Note */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center gap-2 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>
                  <strong>Propiedad Intelectual:</strong> Proyecto concebido, desarrollado y respaldado al 100% por <strong>JIVOTECK</strong>.
                </span>
              </div>

              {/* Direct Link & Notify */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={siteConfig.industrialpedia.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#00D4FF] hover:bg-[#38BDF8] text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-500/25"
                >
                  <span>Ir a Industrialpedia.com.mx</span>
                  <ExternalLink className="w-4 h-4 text-slate-950" />
                </a>

                {/* Email subscription */}
                <div className="flex-1">
                  {subscribed ? (
                    <div className="p-3 bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-mono rounded-xl flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0284C7]" />
                      <span>¡Suscrito para el lanzamiento beta!</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="flex gap-2">
                      <input
                        type="email"
                        required
                        placeholder="tu-correo@empresa.com"
                        value={emailSub}
                        onChange={(e) => setEmailSub(e.target.value)}
                        className="flex-1 px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0284C7]"
                      />
                      <button
                        type="submit"
                        className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold rounded-xl transition-colors whitespace-nowrap flex items-center gap-1.5 shadow-xs"
                      >
                        <Bell className="w-3.5 h-3.5 text-[#00D4FF]" />
                        <span>Avisarme</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Card 3: App Nexus Center Card with New Isometric Logo - 6 cols */}
          <div className="md:col-span-6 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            {/* Subtle Cyan Light Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center py-4 space-y-4">
              {/* JIVOTECK Isometric Emblem Container */}
              <div className="w-16 h-16 rounded-2xl bg-sky-50/80 p-2.5 border border-sky-200 shadow-sm flex items-center justify-center">
                <JivoteckIcon size={44} className="w-11 h-11" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0284C7]">
                  JIVOTECK NEXUS
                </span>
                <h3 className="text-xl font-bold text-slate-950 font-sans mt-1">
                  Arquitectura Integral de Ingeniería
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mt-1 leading-relaxed">
                  Conexión directa entre sensores de planta, controladores de proceso y sistemas en la nube sin fricciones.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-slate-50 border border-slate-200 text-slate-700">
                  SCADA & HMI
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-slate-50 border border-slate-200 text-slate-700">
                  Cloud APIs
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-slate-50 border border-slate-200 text-slate-700">
                  Telemetría Segura
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Sede de I+D:</span>
              <span className="text-slate-900 font-bold">Aguascalientes, México</span>
            </div>
          </div>

          {/* Card 4: Action Toolbar & Quick Capabilities - 6 cols */}
          <div className="md:col-span-6 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  Acceso Rápido a Divisiones
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-50 text-[#0284C7] border border-sky-200">
                  4 Ejes
                </span>
              </div>

              {/* Utility action bar */}
              <div className="grid grid-cols-2 gap-2.5">
                <a 
                  href="#servicios" 
                  className="p-3 rounded-2xl bg-slate-50 hover:bg-sky-50/80 border border-slate-200 hover:border-sky-300 transition-all flex items-center gap-2.5 group"
                >
                  <Cpu className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <div className="truncate">
                    <span className="text-xs font-bold text-slate-900 block group-hover:text-[#0284C7] transition-colors">
                      Automatización
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Control de procesos</span>
                  </div>
                </a>

                <a 
                  href="#servicios" 
                  className="p-3 rounded-2xl bg-slate-50 hover:bg-sky-50/80 border border-slate-200 hover:border-sky-300 transition-all flex items-center gap-2.5 group"
                >
                  <Layers className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <div className="truncate">
                    <span className="text-xs font-bold text-slate-900 block group-hover:text-[#0284C7] transition-colors">
                      Software a Medida
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Cloud & APIs</span>
                  </div>
                </a>

                <a 
                  href="#servicios" 
                  className="p-3 rounded-2xl bg-slate-50 hover:bg-sky-50/80 border border-slate-200 hover:border-sky-300 transition-all flex items-center gap-2.5 group"
                >
                  <Activity className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <div className="truncate">
                    <span className="text-xs font-bold text-slate-900 block group-hover:text-[#0284C7] transition-colors">
                      Consultoría Técnica
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Auditoría en planta</span>
                  </div>
                </a>

                <a 
                  href="#contacto" 
                  className="p-3 rounded-2xl bg-slate-50 hover:bg-sky-50/80 border border-slate-200 hover:border-sky-300 transition-all flex items-center gap-2.5 group"
                >
                  <Send className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <div className="truncate">
                    <span className="text-xs font-bold text-slate-900 block group-hover:text-[#0284C7] transition-colors">
                      Contacto Directo
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Iniciar cotización</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Soporte Técnico:</span>
              <a href={`mailto:${siteConfig.contact.primaryEmail}`} className="text-[#0284C7] hover:underline font-bold">
                {siteConfig.contact.primaryEmail}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
