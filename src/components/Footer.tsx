import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ArrowUp, ExternalLink, MapPin, Mail, Sparkles } from 'lucide-react';
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
    <footer className="bg-[#FAF8F5] border-t border-[#EAE5DC] text-[#4A635B] font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top brand row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#EAE5DC]">
          <div className="space-y-2">
            <JivoteckLogo size="lg" darkText={true} showSubtitle={true} />
            <p className="text-sm text-[#4A635B] max-w-md font-sans">
              Ingeniería en automatización de procesos, desarrollo de software a la medida y creadores de Industrialpedia.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="px-5 py-2.5 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              Iniciar Proyecto
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white border border-[#D8D2C6] text-[#2E4846] hover:text-[#13262F] hover:bg-[#F4F1EA] transition-colors shadow-2xs"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Col 1: SOLUCIONES */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#13262F] font-bold">
              SOLUCIONES
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono text-[#3E5C54]">
              <a href="#servicios" className="hover:text-[#13262F] hover:underline transition-colors">Automatización Industrial</a>
              <a href="#servicios" className="hover:text-[#13262F] hover:underline transition-colors">Software a la Medida</a>
              <a href="#servicios" className="hover:text-[#13262F] hover:underline transition-colors">Consultoría Técnica</a>
              <a href="#servicios" className="hover:text-[#13262F] hover:underline transition-colors">Marketing B2B Tech</a>
            </div>
          </div>

          {/* Col 2: INDUSTRIALPEDIA */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#13262F] font-bold">
              INNOVACIÓN & I+D
            </h4>
            <div className="space-y-2 text-xs font-mono text-[#3E5C54]">
              <a 
                href={siteConfig.industrialpedia.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#2E4846] hover:underline flex items-center gap-1 font-bold"
              >
                <span>Industrialpedia.com.mx</span>
                <ExternalLink className="w-3 h-3 text-[#2E4846]" />
              </a>
              <p className="text-[11px] text-[#638379] font-sans leading-relaxed">
                Plataforma de comparación técnica de componentes industriales desarrollada 100% por JIVOTECK.
              </p>
            </div>
          </div>

          {/* Col 3: EMPRESA */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#13262F] font-bold">
              EMPRESA
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono text-[#3E5C54]">
              <a href="#nosotros" className="hover:text-[#13262F] hover:underline transition-colors">Sobre JIVOTECK</a>
              <a href="#faq" className="hover:text-[#13262F] hover:underline transition-colors">Preguntas Frecuentes</a>
              <a href="#contacto" className="hover:text-[#13262F] hover:underline transition-colors">Contacto Oficial</a>
              <span className="text-[#8FA89B]">Aguascalientes, México</span>
            </div>
          </div>

          {/* Col 4: CANALES & CONTACTO */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#13262F] font-bold">
              ATENCIÓN OFICIAL
            </h4>
            <div className="space-y-2.5 text-xs font-mono text-[#3E5C54]">
              <a 
                href={`mailto:${siteConfig.contact.primaryEmail}`} 
                className="text-[#2E4846] hover:underline flex items-center gap-1.5 font-bold break-all"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 text-[#2E4846]" />
                <span>{siteConfig.contact.primaryEmail}</span>
              </a>
              <div className="flex items-center gap-1.5 text-[#4A635B] font-sans text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#2E4846] shrink-0" />
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
                      className="w-8 h-8 rounded-lg bg-white border border-[#D8D2C6] flex items-center justify-center text-[#2E4846] hover:text-[#13262F] hover:border-[#13262F] transition-colors shadow-2xs"
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

        {/* Philosophy Motto Banner */}
        <div className="pt-6 border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#638379]">
          <div className="flex items-center gap-2 font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#50756C]" />
            <span>IDEAS QUE TAMBIÉN CONSTRUYEN MUNDOS</span>
          </div>
          <div className="text-[11px] uppercase tracking-wider text-[#4A635B]">
            TECNOLOGÍA CON PROPÓSITO. SIEMPRE CONTIGO.
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-4 border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8FA89B]">
          <div>
            &copy; 2026 JIVOTECK — Todos los derechos reservados.
          </div>
          <div className="text-[11px]">
            JIVOTECK STARTUP • AGUASCALIENTES, MÉXICO
          </div>
        </div>

      </div>
    </footer>
  );
};
