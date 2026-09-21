import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Check, 
  Bell, 
  ArrowRight,
  Sliders
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const IndustrialpediaTeaser: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<'cylinder' | 'valve'>('cylinder');
  const [earlyEmail, setEarlyEmail] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (earlyEmail.trim()) {
      setRegistered(true);
    }
  };

  return (
    <section id="industrialpedia" className="py-24 relative overflow-hidden bg-slate-950/90 border-y border-brand-border/60">
      {/* Background glow accents */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Ownership Guarantee */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Ownership Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/40 text-brand-cyan text-xs font-mono tracking-wider uppercase font-semibold shadow-sm shadow-cyan-500/10">
            <ShieldCheck className="w-4 h-4 text-brand-cyan" />
            <span>Proyecto Oficial de JIVOTECK • Propiedad y Creación Exclusiva</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="px-3 py-1 text-xs font-mono uppercase tracking-widest font-bold bg-amber-500/20 text-amber-300 rounded-md border border-amber-500/30">
              {siteConfig.industrialpedia.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Industrialpedia
          </h2>

          <p className="text-lg text-slate-300 font-medium">
            {siteConfig.industrialpedia.subtitle}
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {siteConfig.industrialpedia.ownershipNote} Una solución integral nacida para acelerar la sustitución, homologación y digitalización técnica en plantas de manufactura y automatización.
          </p>
        </div>

        {/* Highlight Card: Interactive Visualizer & Platform Sneak Peek */}
        <div className="bg-gradient-to-b from-slate-900/90 to-[#0B1220]/90 border border-brand-border/80 rounded-2xl p-6 lg:p-8 shadow-2xl backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Product Overview & Features */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan">
                  <Cpu className="w-4 h-4" />
                  <span>SISTEMA DE HOMOLOGACIÓN MULTI-MARCA</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Comparativa y Equivalencias Industriales en Tiempo Real
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  ¿FESTO, SMC u otros fabricantes? Industrialpedia analiza automáticamente tolerancias, presiones, carreras y conectores para recomendar la pieza idéntica o equivalente sin alterar la ingeniería de tu línea de producción.
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-3 pt-2">
                {siteConfig.industrialpedia.teaserFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-md bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Early Access Notification Form */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-medium">
                  <Bell className="w-4 h-4" />
                  <span>¿Deseas acceso prioritario a la versión Beta?</span>
                </div>

                {registered ? (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>¡Registro recibido! Te avisaremos antes del lanzamiento oficial.</span>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Ingresa tu correo para recibir novedades..."
                      value={earlyEmail}
                      onChange={(e) => setEarlyEmail(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan font-mono"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gradient-to-r from-brand-cyan to-sky-400 text-black text-xs font-semibold rounded-lg font-mono hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 whitespace-nowrap"
                    >
                      <span>Avisarme</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
                <p className="text-[11px] text-slate-400">
                  Desarrollado y respaldado 100% por JIVOTECK. Cero spam, solo actualizaciones de ingeniería.
                </p>
              </div>

            </div>

            {/* Right: Interactive Comparator Simulation Teaser */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 sm:p-5 space-y-4 font-mono">
                
                {/* Visualizer header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
                    <span className="text-xs text-white font-bold">Módulo Simulador de Homologación</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded border border-slate-800 text-[10px] text-slate-400">
                    <Sliders className="w-3 h-3 text-brand-cyan" />
                    <span>Demo Interactivo</span>
                  </div>
                </div>

                {/* Switch Component */}
                <div className="flex gap-2 text-xs">
                  <button
                    onClick={() => setSelectedDemo('cylinder')}
                    className={`flex-1 py-1.5 px-3 rounded-lg border text-center transition-all ${
                      selectedDemo === 'cylinder'
                        ? 'bg-brand-blue/20 border-brand-cyan text-brand-cyan font-semibold'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Cilindro Neumático ISO 15552
                  </button>
                  <button
                    onClick={() => setSelectedDemo('valve')}
                    className={`flex-1 py-1.5 px-3 rounded-lg border text-center transition-all ${
                      selectedDemo === 'valve'
                        ? 'bg-brand-blue/20 border-brand-cyan text-brand-cyan font-semibold'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Válvula Direccional 5/2
                  </button>
                </div>

                {/* Comparison Specs Display */}
                {selectedDemo === 'cylinder' ? (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3 text-[11px]">
                      {/* Brand 1: Festo */}
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-sky-500/30">
                        <div className="text-sky-400 font-bold mb-1 flex items-center justify-between">
                          <span>FESTO</span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-sky-500/20">Ref. Base</span>
                        </div>
                        <div className="text-white font-semibold text-xs">DNC-32-100-PPV-A</div>
                        <div className="mt-2 space-y-1 text-slate-400">
                          <div>Ø Émbolo: <span className="text-white">32 mm</span></div>
                          <div>Carrera: <span className="text-white">100 mm</span></div>
                          <div>Presión: <span className="text-white">0.6 - 12 bar</span></div>
                          <div>Amortiguación: <span className="text-white">PPV regulable</span></div>
                        </div>
                      </div>

                      {/* Brand 2: SMC */}
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-amber-500/30">
                        <div className="text-amber-400 font-bold mb-1 flex items-center justify-between">
                          <span>SMC</span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400">Homólogo 100%</span>
                        </div>
                        <div className="text-white font-semibold text-xs">CP96SDB32-100C</div>
                        <div className="mt-2 space-y-1 text-slate-400">
                          <div>Ø Émbolo: <span className="text-white">32 mm</span></div>
                          <div>Carrera: <span className="text-white">100 mm</span></div>
                          <div>Presión: <span className="text-white">0.5 - 10 bar</span></div>
                          <div>Amortiguación: <span className="text-white">Neumática doble</span></div>
                        </div>
                      </div>
                    </div>

                    {/* Compatibility Result Bar */}
                    <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-between text-xs text-emerald-300">
                      <span className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-400" />
                        Compatibilidad Dimensional y Funcional:
                      </span>
                      <span className="font-bold text-emerald-400">100% REEMPLAZO DIRECTO</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3 text-[11px]">
                      {/* Valve Festo */}
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-sky-500/30">
                        <div className="text-sky-400 font-bold mb-1 flex items-center justify-between">
                          <span>FESTO</span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-sky-500/20">Ref. Base</span>
                        </div>
                        <div className="text-white font-semibold text-xs">VUVG-L10-M52-M-M5</div>
                        <div className="mt-2 space-y-1 text-slate-400">
                          <div>Función: <span className="text-white">5/2 monoestable</span></div>
                          <div>Caudal: <span className="text-white">360 l/min</span></div>
                          <div>Voltaje: <span className="text-white">24 V DC</span></div>
                          <div>Conexión: <span className="text-white">M5 / G1/8</span></div>
                        </div>
                      </div>

                      {/* Valve SMC */}
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-amber-500/30">
                        <div className="text-amber-400 font-bold mb-1 flex items-center justify-between">
                          <span>SMC</span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400">Homólogo 100%</span>
                        </div>
                        <div className="text-white font-semibold text-xs">SY3120-5LOZ-M5</div>
                        <div className="mt-2 space-y-1 text-slate-400">
                          <div>Función: <span className="text-white">5/2 monoestable</span></div>
                          <div>Caudal: <span className="text-white">350 l/min</span></div>
                          <div>Voltaje: <span className="text-white">24 V DC</span></div>
                          <div>Conexión: <span className="text-white">M5 estándar</span></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-between text-xs text-emerald-300">
                      <span className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-400" />
                        Compatibilidad Eléctrica y Neumática:
                      </span>
                      <span className="font-bold text-emerald-400">100% REEMPLAZO DIRECTO</span>
                    </div>
                  </div>
                )}

                {/* Footer of visualizer */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Engine: Industrialpedia Algorithmic Matcher</span>
                  <span className="text-brand-cyan">Propiedad de JIVOTECK</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
