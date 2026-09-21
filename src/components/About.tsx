import React from 'react';
import { Target, Users, Zap, Shield, Sparkles, Rocket } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 relative bg-slate-950/60 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
            <Rocket className="w-3.5 h-3.5 text-brand-cyan" />
            <span>CONOCE NUESTRA STARTUP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Acerca de <span className="text-brand-cyan font-mono">{siteConfig.name}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Una empresa de tecnología fundada para romper las barreras tradicionales entre la automatización industrial física y el desarrollo de software moderno.
          </p>
        </div>

        {/* Two Column Layout: Manifesto & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Manifesto Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-brand-border space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2.5">
                <Sparkles className="w-6 h-6 text-brand-cyan" />
                <span>Nuestra Visión y Compromiso</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                En el panorama actual, las plantas y empresas suelen enfrentarse a un dilema: contratar ingenieros de control que desconocen la arquitectura de software contemporánea, o programadores web que nunca han interactuado con un sensor o un PLC.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                <strong className="text-white">JIVOTECK</strong> nació para resolver esa desconexión. Proveemos una solución integral de 360 grados que abarca desde la lógica de automatización y el código a la medida, hasta la consultoría estratégica y el posicionamiento de mercado que una solución tecnológica requiere para tener éxito.
              </p>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-brand-cyan/20 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2 shrink-0"></div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white">Creación de Producto Propio:</strong> No solo prestamos servicios; desarrollamos tecnología propia como <strong className="text-brand-cyan">Industrialpedia</strong>, demostrando en la práctica nuestra capacidad técnica de ingeniería y desarrollo.
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Right */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-1">Rigor Técnico y Confiabilidad</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tratamos cada línea de código y cada parámetro de control con precisión matemática y apego a estándares industriales.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-1">Agilidad y Velocidad de Startup</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sin burocracia pesada. Desarrollamos prototipos rápidos, soluciones funcionales y despliegues ágiles.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-1">Orientación al Retorno de Inversión</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Cada proyecto de automatización o software debe traducirse en ahorro de costos, aumento de producción o nuevos ingresos.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-1">Cercanía y Transparencia Radical</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Comunicación constante, sin tecnicismos innecesarios y con total apertura sobre el progreso de cada fase.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
