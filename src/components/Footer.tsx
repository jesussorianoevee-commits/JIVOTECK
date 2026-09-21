import React from 'react';
import { 
  Cpu, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  ArrowUp, 
  ShieldCheck, 
  MapPin 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: siteConfig.social.github, label: 'Repositorio Oficial' },
    { name: 'LinkedIn', icon: Linkedin, href: siteConfig.social.linkedin, label: 'Perfil Profesional' },
    { name: 'X / Twitter', icon: Twitter, href: siteConfig.social.twitter, label: 'Comunidad Tech' },
    { name: 'Instagram', icon: Instagram, href: siteConfig.social.instagram, label: 'Contenido Visual' },
  ];

  return (
    <footer className="bg-[#05080E] border-t border-brand-border/80 text-slate-400 font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-blue/30 border border-brand-cyan/40 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-brand-cyan" />
              </div>
              <span className="text-xl font-bold tracking-wider text-white font-mono">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {siteConfig.tagline}. Fusionamos la ingeniería de automatización industrial con el desarrollo de software moderno, consultoría técnica y marketing especializado.
            </p>

            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Creadores y Propietarios oficiales de <strong>Industrialpedia</strong>.</span>
            </div>

            {/* Social Media Icons (Prepared for direct links) */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400 mb-2">Redes Oficiales y Conectividad:</div>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/40 hover:bg-slate-800 transition-all"
                      title={`${social.name} - ${social.label}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
                <a
                  href={`mailto:${siteConfig.contact.primaryEmail}`}
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/40 hover:bg-slate-800 transition-all"
                  title="Enviar Correo Oficial"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Navegación */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-brand-cyan transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-cyan transition-colors">Servicios & Pilares</a></li>
              <li><a href="#industrialpedia" className="hover:text-brand-cyan transition-colors">Industrialpedia (Próx)</a></li>
              <li><a href="#nosotros" className="hover:text-brand-cyan transition-colors">Nosotros</a></li>
              <li><a href="#faq" className="hover:text-brand-cyan transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="hover:text-brand-cyan transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Col 4: Servicios */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Automatización Industrial</li>
              <li>Programación a la Medida</li>
              <li>Orientación & Consultoría</li>
              <li>Marketing Tecnológico B2B</li>
              <li>Simulación y Gemelos Digitales</li>
            </ul>
          </div>

          {/* Col 5: Contacto Directo */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Sede y Contacto
            </h4>
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="text-brand-cyan font-bold break-all">
                {siteConfig.contact.primaryEmail}
              </div>
              <div className="text-slate-400 flex items-start gap-1.5 pt-1 font-sans">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                <span>Aguascalientes, México</span>
              </div>
              <div className="text-slate-500 text-[11px] font-sans">
                Atención presencial y remota a nivel nacional e internacional.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center gap-1 text-slate-400">
            <span>Sede en Aguascalientes, México • Tecnología de Alta Precisión</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          >
            <span>Subir</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
