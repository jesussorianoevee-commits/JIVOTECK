import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Check, 
  Bell, 
  ArrowRight,
  Sliders,
  Sparkles
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
    <section id="industrialpedia" className="py-24 relative overflow-hidden bg-[#0A0D14] border-y border-white/[0.06]">
      {/* Background glow accents */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Ownership Guarantee */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Ownership Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium tracking-wide">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Proyecto Oficial de JIVOTECK • Creación y Propiedad Exclusiva</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="px-3 py-1 text-xs font-medium bg-indigo-500/15 text-indigo-300 rounded-full border border-indigo-500/25">
              {siteConfig.industrialpedia.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Industrialpedia
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium">
            {siteConfig.industrialpedia.subtitle}
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {siteConfig.industrialpedia.ownershipNote} Una plataforma inteligente que digitaliza la selección, homologación multi-marca y sustitución de refacciones industriales con máxima precisión.
          </p>
        </div>

        {/* Highlight Card: Modern Digital Platform Preview */}
        <div className="startup-card rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/[0.08]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Product Overview & Features */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-indigo-400">
                  <Cpu className="w-4 h-4" />
                  <span>PLATAFORMA DE INTELIGENCIA INDUSTRIAL</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Comparativa y Equivalencias Técnicas en Segundos
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  ¿FESTO, SMC u otros fabricantes líderes? Industrialpedia analiza automáticamente especificaciones, presiones, carreras y conectores para recomendar el reemplazo exacto o compatible sin frenar tu operación.
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-3 pt-2">
                {siteConfig.industrialpedia.teaserFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Early Access Notification Form */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 text-xs text-indigo-300 font-medium">
                  <Bell className="w-4 h-4 text-indigo-400" />
                  <span>¿Te interesa tener acceso anticipado a la plataforma?</span>
                </div>

                {registered ? (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>¡Listo! Te avisaremos de primera mano cuando esté disponible.</span>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Ingresa tu correo profesional..."
                      value={earlyEmail}
                      onChange={(e) => setEarlyEmail(e.target.value)}
                      className="flex-1 px-3.5 py-2 text-xs bg-slate-950/80 border border-white/[0.1] rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-md shadow-indigo-600/20"
                    >
                      <span>Notificarme</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
                <p className="text-[11px] text-slate-400">
                  Desarrollado y respaldado 100% por JIVOTECK. Privacidad garantizada.
                </p>
              </div>

            </div>

            {/* Right: Modern SaaS Comparator Simulation Preview */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950/90 rounded-xl border border-white/[0.08] p-5 space-y-4">
                
                {/* Visualizer header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-xs text-white font-semibold">Simulador de Homologación Digital</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-lg border border-white/[0.06] text-[10px] text-slate-300 font-medium">
                    <Sliders className="w-3 h-3 text-indigo-400" />
                    <span>Vista Previa Interactiva</span>
                  </div>
                </div>

                {/* Switch Component */}
                <div className="flex gap-2 text-xs">
                  <button
                    onClick={() => setSelectedDemo('cylinder')}
                    className={`flex-1 py-1.5 px-3 rounded-lg border text-center transition-all ${
                      selectedDemo === 'cylinder'
                        ? 'bg-indigo-600/20 border-indigo-400 text-indigo-300 font-semibold'
                        : 'bg-slate-900/60 border-white/[0.06] text-slate-400 hover:text-white'
                    }`}
                  >
                    Cilindro Neumático ISO
                  </button>
                  <button
                    onClick={() => setSelectedDemo('valve')}
                    className={`flex-1 py-1.5 px-3 rounded-lg border text-center transition-all ${
                      selectedDemo === 'valve'
                        ? 'bg-indigo-600/20 border-indigo-400 text-indigo-300 font-semibold'
                        : 'bg-slate-900/60 border-white/[0.06] text-slate-400 hover:text-white'
                    }`}
                  >
                    Válvula Direccional 5/2
                  </button>
                </div>

                {/* Comparison Specs Display */}
                {selectedDemo === 'cylinder' ? (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      {/* Brand 1: Festo */}
                      <div className="p-3 bg-slate-900/90 rounded-xl border border-indigo-500/20">
                        <div className="text-indigo-400 font-bold mb-1 flex items-center justify-between text-[11px]">
                          <span>FESTO</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300">Modelo Base</span>
                        </div>
                        <div className="text-white font-semibold text-xs truncate">DNC-32-100-PPV-A</div>
                        <div className="mt-2 space-y-1 text-slate-400 text-[11px]">
                          <div>Ø Émbolo: <span className="text-white">32 mm</span></div>
                          <div>Carrera: <span className="text-white">100 mm</span></div>
                          <div>Presión: <span className="text-white">0.6 - 12 bar</span></div>
                          <div>Amortiguación: <span className="text-white">PPV regulable</span></div>
                        </div>
                      </div>

                      {/* Brand 2: SMC */}
                      <div className="p-3 bg-slate-900/90 rounded-xl border border-blue-500/20">
                        <div className="text-blue-400 font-bold mb-1 flex items-center justify-between text-[11px]">
                          <span>SMC</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-medium">Equivalente 100%</span>
                        </div>
                        <div className="text-white font-semibold text-xs truncate">CP96SDB32-100C</div>
                        <div className="mt-2 space-y-1 text-slate-400 text-[11px]">
                          <div>Ø Émbolo: <span className="text-white">32 mm</span></div>
                          <div>Carrera: <span className="text-white">100 mm</span></div>
                          <div>Presión: <span className="text-white">0.5 - 10 bar</span></div>
                          <div>Amortiguación: <span className="text-white">Neumática doble</span></div>
                        </div>
                      </div>
                    </div>

                    {/* Compatibility Result Bar */}
                    <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/25 rounded-lg flex items-center justify-between text-xs text-emerald-300">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Check className="w-4 h-4 text-emerald-400" />
                        Compatibilidad Verificada:
                      </span>
                      <span className="font-semibold text-emerald-400">100% REEMPLAZO DIRECTO</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      {/* Valve Festo */}
                      <div className="p-3 bg-slate-900/90 rounded-xl border border-indigo-500/20">
                        <div className="text-indigo-400 font-bold mb-1 flex items-center justify-between text-[11px]">
                          <span>FESTO</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300">Modelo Base</span>
                        </div>
                        <div className="text-white font-semibold text-xs truncate">VUVG-L10-M52-M-M5</div>
                        <div className="mt-2 space-y-1 text-slate-400 text-[11px]">
                          <div>Función: <span className="text-white">5/2 monoestable</span></div>
                          <div>Caudal: <span className="text-white">360 l/min</span></div>
                          <div>Voltaje: <span className="text-white">24 V DC</span></div>
                          <div>Conexión: <span className="text-white">M5 / G1/8</span></div>
                        </div>
                      </div>

                      {/* Valve SMC */}
                      <div className="p-3 bg-slate-900/90 rounded-xl border border-blue-500/20">
                        <div className="text-blue-400 font-bold mb-1 flex items-center justify-between text-[11px]">
                          <span>SMC</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-medium">Equivalente 100%</span>
                        </div>
                        <div className="text-white font-semibold text-xs truncate">SY3120-5LOZ-M5</div>
                        <div className="mt-2 space-y-1 text-slate-400 text-[11px]">
                          <div>Función: <span className="text-white">5/2 monoestable</span></div>
                          <div>Caudal: <span className="text-white">350 l/min</span></div>
                          <div>Voltaje: <span className="text-white">24 V DC</span></div>
                          <div>Conexión: <span className="text-white">M5 estándar</span></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/25 rounded-lg flex items-center justify-between text-xs text-emerald-300">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Check className="w-4 h-4 text-emerald-400" />
                        Compatibilidad Eléctrica y Funcional:
                      </span>
                      <span className="font-semibold text-emerald-400">100% REEMPLAZO DIRECTO</span>
                    </div>
                  </div>
                )}

                {/* Footer of visualizer */}
                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Motor de Equivalencias Inteligente</span>
                  </span>
                  <span className="text-indigo-400 font-medium">Desarrollo Oficial de JIVOTECK</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
