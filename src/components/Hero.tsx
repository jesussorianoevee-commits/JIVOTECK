import React, { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Bell, 
  Check, 
  CheckCircle2, 
  Eye,
  BookOpen,
  Leaf,
  Mountain,
  Sparkles
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

  const pillars = [
    {
      icon: Eye,
      title: 'ESCUCHAMOS',
      desc: 'Entendemos tus necesidades.'
    },
    {
      icon: BookOpen,
      title: 'ANALIZAMOS',
      desc: 'Encontramos la mejor solución.'
    },
    {
      icon: Leaf,
      title: 'CONSTRUIMOS',
      desc: 'Herramientas que realmente sirven.'
    },
    {
      icon: Mountain,
      title: 'IMPULSAMOS',
      desc: 'Tu crecimiento, sin complicaciones.'
    }
  ];

  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#FAF8F5] text-[#13262F] relative overflow-hidden border-b border-[#EAE5DC]">
      
      {/* Subtle warm organic background glows */}
      <div className="absolute top-10 left-1/4 w-[480px] h-[480px] bg-[#638379]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-[#2E4846]/5 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#E2DDD4]/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top Header Pill Row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-white border border-[#D8D2C6] text-[#2E4846] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#50756C]" />
            <span>TECNOLOGÍA CON PROPÓSITO • GESTIÓN QUE IMPULSA</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white border border-[#EAE5DC] text-[#4A635B] shadow-2xs">
              ● AGUASCALIENTES, MÉXICO
            </span>
            <a 
              href="#servicios" 
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase font-semibold text-[#2E4846] hover:text-[#13262F] transition-colors"
            >
              <span>EXPLORAR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Hero Headline & Brand Identity Core */}
        <div className="max-w-4xl space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#638379] font-bold">
            <span className="w-5 h-[1.5px] bg-[#638379]"></span>
            <span>JIVOTECK • FILOSOFÍA DE INGENIERÍA</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-serif text-[#13262F] leading-[1.15]">
            Ideas que también <span className="italic font-normal text-[#2E4846]">construyen mundos.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#3E5C54] leading-relaxed font-sans max-w-3xl font-normal">
            En <strong>JIVOTECK</strong> convergen la ingeniería de control, la automatización de procesos industriales y el desarrollo de software a la medida con una sola premisa: <em>Tecnología con propósito. Siempre contigo.</em>
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="px-6 py-3 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
            >
              <span>Hablemos de tu Proyecto</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
            <a
              href="#servicios"
              className="px-6 py-3 rounded-xl bg-white hover:bg-[#F4F1EA] text-[#13262F] font-mono text-xs font-semibold uppercase tracking-wider transition-all border border-[#D5DDD8] shadow-2xs"
            >
              <span>Ver Soluciones</span>
            </a>
          </div>
        </div>

        {/* 4 Official Methodological Pillars from the Brand Guide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#EAE5DC] shadow-xs flex flex-col justify-between hover:border-[#638379] hover:shadow-md transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F4F1EA] flex items-center justify-center text-[#13262F] mb-4 group-hover:scale-105 transition-transform border border-[#E5E0D5]">
                    <Icon className="w-5 h-5 text-[#2E4846]" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#13262F] block">
                    {p.title}
                  </span>
                  <div className="w-6 h-[1.5px] bg-[#8FA89B] my-2"></div>
                  <p className="text-xs text-[#4A635B] leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Heart & Industrialpedia Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2">
          
          {/* Card 1: Official JIVOTECK Monogram & Brand Card (5 cols) */}
          <div className="md:col-span-5 bg-white border border-[#EAE5DC] rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2E4846]">
                  EL CORAZÓN DE JIVOTECK
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F1EA] text-[#4A635B] border border-[#E5E0D5]">
                  Identidad Oficial
                </span>
              </div>

              {/* Central Emblem Showcase */}
              <div className="py-4 flex flex-col items-center justify-center text-center">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] shadow-2xs mb-3">
                  <JivoteckIcon size={56} className="w-14 h-16" />
                </div>

                <div className="text-2xl font-bold font-serif text-[#13262F] tracking-[0.2em] uppercase flex items-center justify-center">
                  <span>J</span><span>I</span><span>V</span>
                  <span className="inline-flex items-center justify-center relative mx-[2px] w-5 h-5">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <ellipse cx="12" cy="12" rx="7.5" ry="9.5" stroke="#13262F" strokeWidth="2.2" />
                      <path d="M 12 6 Q 12 12 16 12 Q 12 12 12 18 Q 12 12 8 12 Q 12 12 12 6 Z" fill="#13262F" />
                    </svg>
                  </span>
                  <span>T</span><span>E</span><span>C</span><span>K</span>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] font-semibold uppercase text-[#3E5C54] mt-1.5">
                  <span className="w-4 h-[1px] bg-[#8FA89B]"></span>
                  <span>GESTIÓN QUE IMPULSA</span>
                  <span className="w-4 h-[1px] bg-[#8FA89B]"></span>
                </div>
              </div>

              {/* Official Palette Swatches & Brand Motto */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#13262F] border border-white shadow-2xs" title="#13262F Midnight Pine"></div>
                  <div className="w-4 h-4 rounded-full bg-[#2E4846] border border-white shadow-2xs" title="#2E4846 Forest Sage"></div>
                  <div className="w-4 h-4 rounded-full bg-[#638379] border border-white shadow-2xs" title="#638379 Eucalyptus"></div>
                  <div className="w-4 h-4 rounded-full bg-[#E2DDD4] border border-white shadow-2xs" title="#E2DDD4 Alabaster"></div>
                </div>
                <div className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#2E4846] text-center sm:text-right">
                  TECNOLOGÍA CON PROPÓSITO. SIEMPRE CONTIGO.
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs font-mono text-[#4A635B]">
              <span>Sede de I+D:</span>
              <span className="text-[#13262F] font-bold">Aguascalientes, México</span>
            </div>
          </div>

          {/* Card 2: Industrialpedia Flagship Bento (7 cols) */}
          <div className="md:col-span-7 bg-white border border-[#EAE5DC] rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            
            {/* Subtle soft eucalyptus glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#638379]/15 via-[#2E4846]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-5">
              
              {/* Kicker & Coming Soon Pill */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#F4F1EA] text-[#2E4846] border border-[#D8D2C6]">
                  <span className="w-2 h-2 rounded-full bg-[#50756C] animate-pulse"></span>
                  <span>EN DESARROLLO ACTIVO • COMING SOON</span>
                </div>

                <span className="text-[11px] font-mono text-[#2E4846] font-bold">
                  industrialpedia.com.mx ↗
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13262F] tracking-tight font-serif">
                  Industrialpedia
                </h2>
                <p className="text-sm sm:text-base font-mono font-semibold text-[#50756C] mt-1">
                  The Industrial Information Platform
                </p>
              </div>

              <p className="text-sm text-[#3E5C54] leading-relaxed font-sans font-normal">
                Plataforma de comparación técnica, homologación y consulta inteligente de componentes industriales, neumáticos y eléctricos.
              </p>

              {/* Percentage / Spec Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] shadow-2xs flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#638379] block">Módulo de Homologación</span>
                    <span className="text-xs font-bold text-[#13262F] font-sans">Cruce Multi-marca</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white text-[#2E4846] border border-[#D8D2C6]">
                    +100% Preciso
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] shadow-2xs flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#638379] block">Arquitectura de Datos</span>
                    <span className="text-xs font-bold text-[#13262F] font-sans">Estandarización 4.0</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white text-[#2E4846] border border-[#D8D2C6]">
                    Propiedad JVT
                  </span>
                </div>
              </div>

              {/* Official Ownership Note */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs text-[#2E4846] flex items-center gap-2 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#50756C] shrink-0" />
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
                  className="px-6 py-3 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Ir a Industrialpedia.com.mx</span>
                  <ExternalLink className="w-4 h-4 text-white" />
                </a>

                {/* Email subscription */}
                <div className="flex-1">
                  {subscribed ? (
                    <div className="p-3 bg-[#F4F1EA] border border-[#D8D2C6] text-[#2E4846] text-xs font-mono rounded-xl flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#50756C]" />
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
                        className="flex-1 px-3 py-2 text-xs bg-white border border-[#D8D2C6] rounded-xl text-[#13262F] placeholder-[#8FA89B] focus:outline-none focus:border-[#2E4846]"
                      />
                      <button
                        type="submit"
                        className="px-3.5 py-2 bg-[#2E4846] hover:bg-[#13262F] text-white text-xs font-mono font-bold rounded-xl transition-colors whitespace-nowrap flex items-center gap-1.5 shadow-xs"
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

        </div>

      </div>
    </section>
  );
};
