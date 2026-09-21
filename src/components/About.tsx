import React from 'react';
import { Target, Users, Zap, Shield, Sparkles, Rocket } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 relative bg-[#0A0D14] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-white/[0.08] text-xs font-medium text-slate-300">
            <Rocket className="w-3.5 h-3.5 text-indigo-400" />
            <span>NUESTRA IDENTIDAD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Acerca de <span className="text-indigo-400 font-sans">{siteConfig.name}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Una startup tecnológica comprometida con la excelencia, la cercanía con el cliente y el desarrollo de soluciones de alto impacto.
          </p>
        </div>

        {/* Two Column Layout: Manifesto & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Manifesto Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="startup-card p-8 rounded-2xl border border-white/[0.08] space-y-5">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>Nuestra Visión y Compromiso Contigo</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Frecuentemente las empresas deben lidiar con múltiples proveedores desconectados: una agencia de software que no entiende sus procesos de planta, o técnicos de automatización que no dominan las plataformas digitales contemporáneas.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                En <strong className="text-white">JIVOTECK</strong> unificamos todo el ciclo tecnológico. Desarrollamos software confiable, automatizamos procesos clave y acompañamos a tu empresa en cada etapa con total transparencia y comunicación directa.
              </p>
              
              <div className="p-4 rounded-xl bg-slate-900/80 border border-indigo-500/20 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0"></div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white">Capacidad de Desarrollo Probada:</strong> Somos los creadores y dueños del ecosistema <strong className="text-indigo-300">Industrialpedia</strong>, lo que demuestra nuestra capacidad de diseñar y ejecutar plataformas de ingeniería complejas.
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Right */}
          <div className="lg:col-span-5 space-y-3.5">
            
            <div className="p-5 rounded-xl bg-slate-900/60 border border-white/[0.08] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Confianza y Transparencia</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Trato directo, acuerdos claros sin letras chiquitas y seguimiento cercano en cada hito del proyecto.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-white/[0.08] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Agilidad y Velocidad de Respuesta</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Estructura ágil sin burocracia. Respuestas rápidas, prototipado dinámico y entregas a tiempo.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-white/[0.08] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Enfoque en Resultados Reales</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Diseñamos cada solución con métricas de valor claras: ahorro de tiempo, reducción de costos o aumento de ventas.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-white/[0.08] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Acompañamiento Continuo</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  No te dejamos solo tras la entrega. Brindamos soporte, orientación y capacitación a tu equipo.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
