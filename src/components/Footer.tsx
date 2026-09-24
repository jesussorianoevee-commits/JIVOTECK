import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ArrowUp, ExternalLink, MapPin, Mail } from 'lucide-react';
import { JivoteckLogo } from './JivoteckLogo';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: siteConfig.social.github },
    { name: 'LinkedIn', icon: Linkedin, href: siteConfig.social.linkedin },
    { name: 'X / Twitter', icon: Twitter, href: siteConfig.social.twitter },
    { name: 'Instagram', icon: Instagram, href: siteConfig.social.instagram },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#081512] to-[#040C0A] border-t border-emerald-950/80 text-slate-400 font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top brand row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="space-y-2">
            <JivoteckLogo size="lg" darkText={false} showSubtitle={true} />
            <p className="text-sm text-slate-400 max-w-md font-sans">
              Ingeniería en automatización de procesos, desarrollo de software a la medida y creadores de Industrialpedia.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="px-5 py-2.5 rounded-xl bg-[#007362] hover:bg-[#00584B] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow"
            >
              Iniciar Proyecto
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Col 1: SERVICIOS */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              SOLUCIONES
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono text-slate-300">
              <a href="#servicios" className="hover:text-white transition-colors">Automatización Industrial</a>
              <a href="#servicios" className="hover:text-white transition-colors">Software a la Medida</a>
              <a href="#servicios" className="hover:text-white transition-colors">Consultoría Técnica</a>
              <a href="#servicios" className="hover:text-white transition-colors">Marketing B2B Tech</a>
            </div>
          </div>

          {/* Col 2: INDUSTRIALPEDIA */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              INNOVACIÓN & I+D
            </h4>
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <a 
                href={siteConfig.industrialpedia.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#00D4B2] hover:underline flex items-center gap-1 font-bold"
              >
                <span>Industrialpedia.com.mx</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                Plataforma de comparación técnica de componentes industriales desarrollada 100% por JIVOTECK.
              </p>
            </div>
          </div>

          {/* Col 3: EMPRESA */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              EMPRESA
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono text-slate-300">
              <a href="#nosotros" className="hover:text-white transition-colors">Sobre JIVOTECK</a>
              <a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a>
              <a href="#contacto" className="hover:text-white transition-colors">Contacto Oficial</a>
              <span className="text-slate-600">Aguascalientes, México</span>
            </div>
          </div>

          {/* Col 4: CANALES & CONTACTO */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              ATENCIÓN OFICIAL
            </h4>
            <div className="space-y-2.5 text-xs font-mono text-slate-300">
              <a 
                href={`mailto:${siteConfig.contact.primaryEmail}`} 
                className="text-[#00D4B2] hover:underline flex items-center gap-1.5 font-bold break-all"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>{siteConfig.contact.primaryEmail}</span>
              </a>
              <div className="flex items-center gap-1.5 text-slate-400 font-sans text-xs">
                <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Aguascalientes, Ags. México</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-600 transition-colors"
                      title={s.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            &copy; 2026 JIVOTECK — Todos los derechos reservados.
          </div>
          <div className="text-[11px] text-slate-400">
            JIVOTECK STARTUP • AGUASCALIENTES, MÉXICO
          </div>
        </div>

      </div>
    </footer>
  );
};
