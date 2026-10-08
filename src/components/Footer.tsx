import React, { useState } from 'react';
import { Linkedin, Youtube, Mail, ShieldCheck, X } from 'lucide-react';
import { JivoteckLogo } from './JivoteckLogo';

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const footerLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes somos', href: '#quienes-somos' },
    { name: 'Ecosistema', href: '#ecosistema' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-[#0E2433] text-white relative overflow-hidden border-t border-white/10">
      {/* Background technical doodle / blueprint grid overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 space-y-10">

        {/* Main Footer Row matching Mockup */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Left: Brand Logo & Copyright */}
          <div className="space-y-3">
            <a
              href="#inicio"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] rounded-lg"
              aria-label="JIVOTECK Inicio"
            >
              <JivoteckLogo size="md" variant="dark" />
            </a>

            <div className="space-y-0.5 text-xs text-white/60 font-sans">
              <p className="font-mono text-white/70">© 2026 JIVOTECK</p>
              <p>Corporativo tecnológico.</p>
            </div>
          </div>

          {/* Center: Clean Inline Navigation Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80" aria-label="Navegación del pie">
            {footerLinks.map((link, idx) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-white hover:text-[#FF6B35] transition-colors font-medium text-xs sm:text-sm"
                >
                  {link.name}
                </a>
                {idx < footerLinks.length - 1 && (
                  <span className="text-white/20 select-none" aria-hidden="true">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Right: Social & Direct Channels */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:contacto@jivoteck.com"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6B35] flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
              title="Contacto por Correo"
              aria-label="Escribir correo a JIVOTECK"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6B35] flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
              title="LinkedIn corporativo"
              aria-label="LinkedIn de JIVOTECK"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6B35] flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
              title="Canal de YouTube"
              aria-label="YouTube de JIVOTECK"
            >
              <Youtube className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Privacy & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50 font-sans">
          <p>
            Aguascalientes, México · Gestión y desarrollo de iniciativas tecnológicas con visión de largo plazo.
          </p>

          <button
            type="button"
            onClick={() => setPrivacyModalOpen(true)}
            className="hover:text-white underline transition-colors"
          >
            Aviso de Privacidad
          </button>
        </div>

      </div>

      {/* Accessible Privacy Notice Modal */}
      {privacyModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0E2433]/70 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="footer-privacy-modal-title"
        >
          <div className="bg-white rounded-3xl border border-[#EAE5DC] max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-xl text-[#0E2433]">
            <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2F5F50]" aria-hidden="true" />
                <h3 id="footer-privacy-modal-title" className="text-base font-bold font-serif text-[#0E2433]">
                  Aviso de Privacidad
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="min-h-[40px] min-w-[40px] p-2 rounded-full text-[#0E2433]/60 hover:text-[#0E2433] hover:bg-[#F8F6F1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] flex items-center justify-center"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#0E2433]/80 font-sans leading-relaxed">
              <p>
                <strong>JIVOTECK</strong> (Aguascalientes, México) es responsable del tratamiento de los datos de contacto que proporciones voluntariamente mediante comunicación por correo electrónico oficial.
              </p>
              <p>
                Los datos recabados serán utilizados exclusivamente para atender y dar seguimiento a tu solicitud de información, vinculación, prensa, alianzas o asuntos corporativos. No se cederán a terceros ni se emplearán con fines comerciales no solicitados.
              </p>
              <div className="p-3 rounded-2xl bg-[#F8F6F1] border border-[#EAE5DC] text-[11px] text-[#0E2433]/70">
                <strong>Nota institucional:</strong> Para ejercer tus derechos ARCO o resolver dudas sobre privacidad, escribe a <code>contacto@jivoteck.com</code>.
              </div>
            </div>

            <div className="pt-2 border-t border-[#EAE5DC] flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="px-5 py-2.5 bg-[#0E2433] hover:bg-[#132E40] text-white text-xs font-mono font-bold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
