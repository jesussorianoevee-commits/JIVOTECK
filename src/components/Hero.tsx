import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ExternalLink, Bell, Check } from 'lucide-react';
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
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top small kicker link */}
        <div className="flex items-center justify-between">
          <a 
            href="#servicios" 
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase font-semibold text-slate-500 hover:text-slate-950 transition-colors group"
          >
            <span>VIEW ALL</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
            JIVOTECK STARTUP LABS
          </span>
        </div>

        {/* Featured Card matching Screenshot 1 - NOW FULLY CLICKABLE TO INDUSTRIALPEDIA.COM.MX */}
        <a
          href={siteConfig.industrialpedia.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Visitar sitio oficial de Industrialpedia (industrialpedia.com.mx)"
          className="group block relative rounded-xl border border-sky-200/70 bg-sky-gradient-card p-10 sm:p-16 lg:p-20 text-center shadow-xs hover:shadow-xl hover:shadow-sky-100 hover:border-[#00D4FF] transition-all duration-300 cursor-pointer overflow-hidden"
        >
          {/* Subtle hover indicator in top right */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#0099CC] flex items-center gap-1.5 font-mono text-xs font-semibold">
            <span className="hidden sm:inline">industrialpedia.com.mx</span>
            <ExternalLink className="w-4 h-4" />
          </div>

          <div className="space-y-6 max-w-xl mx-auto">
            {/* Top label */}
            <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
              DEVELOPMENT PHASE
            </div>

            {/* Industrialpedia title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0F2844] font-sans group-hover:text-[#0C2340] transition-colors">
              Industrialpedia
            </h1>

            {/* Boxed pill badge */}
            <div className="pt-2 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-[#00D4FF] bg-white/80 backdrop-blur-sm text-[#0099CC] font-mono text-xs tracking-wider uppercase font-semibold shadow-xs group-hover:bg-[#00D4FF] group-hover:text-slate-950 transition-all duration-200">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF] group-hover:bg-slate-950"></span>
                <span>COMING SOON</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-slate-500 group-hover:text-[#0099CC] transition-colors">
              Haz clic para visitar la web oficial ↗
            </div>
          </div>

        </a>

        {/* Below Card Detail Section matching Screenshot 1 */}
        <div className="space-y-4 pt-2">
          
          {/* Status line */}
          <div className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase font-semibold text-[#0099CC]">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]"></span>
            <span>COMING SOON</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-slate-950 font-sans">
            INDUSTRIALPEDIA
          </h2>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl font-sans font-normal">
            Industrialpedia is an industrial information platform designed to help users find, compare and understand technical information related to industrial components and applications.
          </p>

          {/* Interactive Action Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={siteConfig.industrialpedia.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Ir a Industrialpedia.com.mx</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00D4FF]" />
            </a>

            {/* Quick Notify Interactive Input */}
            <div className="flex-1">
              {subscribed ? (
                <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono rounded flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>¡Listo! Te notificaremos en cuanto lance la plataforma.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Tu correo para avisarte del lanzamiento..."
                    value={emailSub}
                    onChange={(e) => setEmailSub(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded font-sans focus:outline-none focus:border-slate-800"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-semibold rounded transition-colors whitespace-nowrap flex items-center gap-1.5 border border-slate-300"
                  >
                    <Bell className="w-3.5 h-3.5 text-[#0099CC]" />
                    <span>Avisarme</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Ownership Badge */}
          <div className="pt-1 p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between gap-3">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0099CC] shrink-0" />
              <span><strong>Propiedad Oficial:</strong> Proyecto concebido, desarrollado y respaldado al 100% por <strong>JIVOTECK</strong>.</span>
            </span>
            <a 
              href={siteConfig.industrialpedia.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0099CC] font-semibold hover:underline font-mono text-xs whitespace-nowrap"
            >
              industrialpedia.com.mx &rarr;
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
