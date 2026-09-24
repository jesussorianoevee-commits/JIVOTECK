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
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#080C14] text-white relative overflow-hidden">
      
      {/* Ambient background glows matching Image 3 (Electric Blue, Coral, Purple) */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-[#00D4FF]/12 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#FF6B00]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Subtle geometric dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top Header Row with Glowing Pill (Directly from Image 3: 'Empowering' pill) */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          <div className="relative group">
            {/* Soft peach-purple-cyan glow behind pill */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF]/60 via-[#A855F7]/50 to-[#FF6B00]/60 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#0C1322] border border-white/20 text-white shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]"></span>
              <span>EMPOWERING INDUSTRIAL TECHNOLOGY</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/5 border border-white/10 text-slate-300">
              ● AGUASCALIENTES, MÉXICO
            </span>
            <a 
              href="#servicios" 
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase font-semibold text-[#00D4FF] hover:text-white transition-colors"
            >
              <span>EXPLORAR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Hero Headline & Intro */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-sans leading-[1.12]">
            Tecnología, Software y Control para la <span className="bg-gradient-to-r from-[#00D4FF] via-[#38BDF8] to-[#93C5FD] bg-clip-text text-transparent">Industria del Futuro</span>.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-3xl font-light">
            En <strong>JIVOTECK</strong> convergen la ingeniería de control y automatización de procesos, el desarrollo de software industrial a medida, la consultoría técnica y el marketing estratégico de base tecnológica.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="px-6 py-3 rounded-xl bg-[#00D4FF] hover:bg-[#38BDF8] text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] flex items-center gap-2"
            >
              <span>Hablemos de tu Proyecto</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>
            <a
              href="#servicios"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all border border-white/15 backdrop-blur-sm"
            >
              <span>Ver Soluciones</span>
            </a>
          </div>
        </div>

        {/* BENTO GRID (Inspired directly by the layout & visual cards of Image 3) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2">
          
          {/* Card 1: Telemetry & Monitoring Graph (Left card in Image 3) - 5 cols */}
          <div className="md:col-span-5 bg-[#0C1322] border border-slate-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Top telemetry coords */}
            <div className="space-y-1 pb-4 border-b border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-slate-300 font-semibold">Telemetría de Planta</span>
                <span className="text-[#00D4FF] font-bold">Tiempo Real</span>
              </div>
              <div className="flex items-baseline gap-3 text-xs font-mono">
                <span className="text-slate-400">Score de Operación:</span>
                <span className="text-white font-bold">98.4 / 100</span>
                <span className="text-slate-500">Vol: 45K ops/h</span>
              </div>
            </div>

            {/* Glowing Spline Graph with Indicator Cursor Beam (Image 3) */}
            <div className="h-44 w-full relative my-4 flex items-center justify-center">
              {/* Grid Lines */}
              <div className="absolute inset-0 grid grid-rows-4 border-b border-slate-800/80">
                <div className="border-t border-slate-800/40"></div>
                <div className="border-t border-slate-800/40"></div>
                <div className="border-t border-slate-800/40"></div>
              </div>

              {/* Glowing SVG Waveform curve */}
              <svg className="w-full h-full relative z-10 overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 120">
                <defs>
                  <linearGradient id="cyanLineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.4" />
                    <stop offset="60%" stopColor="#00D4FF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="cyanArea" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 Q30,60 60,75 T120,45 T180,65 T230,30 T300,50 L300,120 L0,120 Z"
                  fill="url(#cyanArea)"
                />
                <path
                  d="M0,80 Q30,60 60,75 T120,45 T180,65 T230,30 T300,50"
                  fill="none"
                  stroke="url(#cyanLineGlow)"
                  strokeWidth="2.5"
                />
                {/* Vertical Scanning Beam at cursor (from Image 3) */}
                <line x1="230" y1="0" x2="230" y2="120" stroke="#00D4FF" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
                {/* Glowing Dot on Line */}
                <circle cx="230" cy="30" r="4.5" fill="#00D4FF" className="shadow-[0_0_12px_#00D4FF]" />
                <circle cx="230" cy="30" r="8" fill="#00D4FF" opacity="0.3" className="animate-ping" />
              </svg>

              {/* Floating Pill on Graph */}
              <div className="absolute right-4 top-4 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#00D4FF] text-slate-950 shadow-md">
                +14.8% Eficiencia
              </div>
            </div>

            {/* Bottom time selector / metadata */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="text-[#00D4FF]">● Mantenimiento 4.5</span>
              <span>Monitoreo Activo</span>
            </div>
          </div>

          {/* Card 2: Top Traded / Industrialpedia Flagship Bento (Right card in Image 3) - 7 cols */}
          <div className="md:col-span-7 bg-[#0C1322] border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            
            {/* Electric Blue Radial Glow from Image 3 */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#0066FF]/25 via-[#00D4FF]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-5">
              
              {/* Kicker & Coming Soon Pill */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                  <span>EN DESARROLLO ACTIVO • COMING SOON</span>
                </div>

                <span className="text-[11px] font-mono text-[#00D4FF] font-semibold">
                  industrialpedia.com.mx ↗
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
                  Industrialpedia
                </h2>
                <p className="text-sm sm:text-base font-mono font-semibold text-[#00D4FF] mt-1">
                  The Industrial Information Platform
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
                Plataforma de comparación técnica, homologación y consulta inteligente de componentes industriales, neumáticos y eléctricos.
              </p>

              {/* Percentage / Spec Pills (Inspired by Image 3 ETF pill style) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">Módulo de Homologación</span>
                    <span className="text-xs font-bold text-white font-sans">Cruce Multi-marca</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    +100% Preciso
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">Arquitectura de Datos</span>
                    <span className="text-xs font-bold text-white font-sans">Estandarización 4.0</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/30">
                    Propiedad JVT
                  </span>
                </div>
              </div>

              {/* Official Ownership Note */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D4FF] shrink-0" />
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
                  className="px-6 py-3 rounded-xl bg-[#00D4FF] hover:bg-[#38BDF8] text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.35)]"
                >
                  <span>Ir a Industrialpedia.com.mx</span>
                  <ExternalLink className="w-4 h-4 text-slate-950" />
                </a>

                {/* Email subscription */}
                <div className="flex-1">
                  {subscribed ? (
                    <div className="p-3 bg-emerald-950/80 border border-emerald-700/80 text-emerald-300 text-xs font-mono rounded-xl flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
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
                        className="flex-1 px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]"
                      />
                      <button
                        type="submit"
                        className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-[#00D4FF] text-xs font-mono font-bold rounded-xl border border-white/20 transition-colors whitespace-nowrap flex items-center gap-1.5"
                      >
                        <Bell className="w-3.5 h-3.5" />
                        <span>Avisarme</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Card 3: App Nexus Center Card with Coral Glow Aura (Center of Image 3) - 6 cols */}
          <div className="md:col-span-6 bg-[#0C1322] border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Coral / Orange Aura from Image 3 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#FF6B00]/25 to-[#F97316]/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center py-4 space-y-4">
              {/* Hourglass / Nexus App Icon like Image 3 center */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 p-0.5 border border-white/20 shadow-[0_0_25px_rgba(255,107,0,0.3)]">
                <div className="w-full h-full rounded-[14px] bg-[#0A0F1A] flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="w-7 h-7 border-2 border-[#00D4FF] rounded-sm transform rotate-45"></div>
                    <div className="absolute w-4 h-4 bg-[#FF6B00] rounded-full blur-xs opacity-75"></div>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00D4FF]">
                  JIVOTECK NEXUS
                </span>
                <h3 className="text-xl font-bold text-white font-sans mt-1">
                  Arquitectura Integral de Ingeniería
                </h3>
                <p className="text-xs text-slate-400 max-w-sm mt-1 leading-relaxed">
                  Conexión directa entre sensores de planta, controladores de proceso y sistemas en la nube sin fricciones.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-slate-300">
                  SCADA & HMI
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-slate-300">
                  Cloud APIs
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-slate-300">
                  Telemetría Segura
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Sede de I+D:</span>
              <span className="text-white font-bold">Aguascalientes, México</span>
            </div>
          </div>

          {/* Card 4: Action Toolbar & Quick Capabilities (Bottom right of Image 3) - 6 cols */}
          <div className="md:col-span-6 bg-[#0C1322] border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  Acceso Rápido a Divisiones
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30">
                  4 Ejes
                </span>
              </div>

              {/* Utility action bar like bottom of Image 3 */}
              <div className="grid grid-cols-2 gap-2.5">
                <a 
                  href="#servicios" 
                  className="p-3 rounded-2xl bg-white/5 hover:bg-[#00D4FF]/10 border border-white/10 hover:border-[#00D4FF]/40 transition-all flex items-center gap-2.5 group"
                >
                  <Cpu className="w-4 h-4 text-[#00D4FF] shrink-0" />
                  <div className="truncate">
                    <span className="text-xs font-bold text-white block group-hover:text-[#00D4FF] transition-colors">
                      Automatización
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Control de procesos</span>
                  </div>
                </a>

                <a 
                  href="#servicios" 
                  className="p-3 rounded-2xl bg-white/5 hover:bg-[#00D4FF]/10 border border-white/10 hover:border-[#00D4FF]/40 transition-all flex items-center gap-2.5 group"
                >
                  <Layers className="w-4 h-4 text-[#00D4FF] shrink-0" />
                  <div className="truncate">
                    <span className="text-xs font-bold text-white block group-hover:text-[#00D4FF] transition-colors">
                      Software a Medida
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Cloud & APIs</span>
                  </div>
                </a>

                <a 
                  href="#servicios" 
                  className="p-3 rounded-2xl bg-white/5 hover:bg-[#00D4FF]/10 border border-white/10 hover:border-[#00D4FF]/40 transition-all flex items-center gap-2.5 group"
                >
                  <Activity className="w-4 h-4 text-[#00D4FF] shrink-0" />
                  <div className="truncate">
                    <span className="text-xs font-bold text-white block group-hover:text-[#00D4FF] transition-colors">
                      Consultoría Técnica
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Auditoría en planta</span>
                  </div>
                </a>

                <a 
                  href="#contacto" 
                  className="p-3 rounded-2xl bg-white/5 hover:bg-[#00D4FF]/10 border border-white/10 hover:border-[#00D4FF]/40 transition-all flex items-center gap-2.5 group"
                >
                  <Send className="w-4 h-4 text-[#00D4FF] shrink-0" />
                  <div className="truncate">
                    <span className="text-xs font-bold text-white block group-hover:text-[#00D4FF] transition-colors">
                      Contacto Directo
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Iniciar cotización</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Soporte Técnico:</span>
              <a href={`mailto:${siteConfig.contact.primaryEmail}`} className="text-[#00D4FF] hover:underline font-bold">
                {siteConfig.contact.primaryEmail}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
