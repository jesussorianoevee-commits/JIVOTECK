import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="font-mono text-xs uppercase tracking-widest text-slate-500 font-semibold">
            ABOUT {siteConfig.name}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans">
            Technology for the future of industry.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
            JIVOTECK es una startup de base tecnológica fundada en <strong>Aguascalientes, México</strong>, orientada a transformar los procesos industriales y el desarrollo de software moderno.
          </p>
        </div>

        {/* Narrative & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="text-lg font-bold text-slate-900 font-sans">
              Nuestra Misión
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Conectar la ingeniería de control físico y la automatización con la agilidad y escalabilidad del software contemporáneo, creando soluciones fiables y productos propios como Industrialpedia.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="text-lg font-bold text-slate-900 font-sans">
              Compromiso y Conexión al Cliente
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Trato directo, comunicación clara sin tecnicismos innecesarios, transparencia en costos y acompañamiento continuo en cada fase del proyecto.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
