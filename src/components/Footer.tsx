import React from 'react';
import { 
  Layers, 
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
    { name: 'X / Twitter', icon: Twitter, href: siteConfig.social.twitter, label: 'Comunidad' },
    { name: 'Instagram', icon: Instagram, href: siteConfig.social.instagram, label: 'Galería' },
  ];

  return (
    <footer className="bg-[#070A10] border-t border-white/[0.08] text-slate-400 font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
                <Layers className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {siteConfig.tagline}. Unimos el desarrollo de software a la medida, la automatización de procesos, consultoría técnica y marketing estratégico.
            </p>

            <div className="p-3 bg-slate-900/50 rounded-xl border border-white/[0.06] text-xs text-slate-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Creadores y Propietarios oficiales de <strong>Industrialpedia</strong>.</span>
            </div>

            {/* Social Media Icons */}
            <div className="pt-2">
              <div className="text-xs text-slate-400 mb-2">Canales de Conexión:</div>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-900/80 border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-slate-800 transition-all"
                      title={`${social.name} - ${social.label}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
                <a
                  href={`mailto:${siteConfig.contact.primaryEmail}`}
                  className="w-9 h-9 rounded-lg bg-slate-900/80 border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-slate-800 transition-all"
                  title="Enviar Correo Oficial"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Navegación */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-indigo-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-indigo-400 transition-colors">Servicios & Pilares</a></li>
              <li><a href="#industrialpedia" className="hover:text-indigo-400 transition-colors">Industrialpedia (Próx)</a></li>
              <li><a href="#nosotros" className="hover:text-indigo-400 transition-colors">Nosotros</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="hover:text-indigo-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Col 4: Servicios */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Especialidades
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Programación a la Medida</li>
              <li>Automatización de Procesos</li>
              <li>Orientación & Consultoría</li>
              <li>Marketing Tecnológico B2B</li>
              <li>Plataformas Cloud & APIs</li>
            </ul>
          </div>

          {/* Col 5: Contacto Directo */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Sede y Contacto
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="text-indigo-400 font-semibold font-mono break-all">
                {siteConfig.contact.primaryEmail}
              </div>
              <div className="text-slate-400 flex items-start gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Aguascalientes, México</span>
              </div>
              <div className="text-slate-500 text-[11px]">
                Atención remota global y proyectos presenciales.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </div>
          
          <div className="text-slate-400">
            Sede en Aguascalientes, México • Tecnología y Soluciones Confiables
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-400 hover:text-white hover:border-indigo-500/30 transition-colors"
          >
            <span>Subir</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
