import React, { useState } from 'react';
import { ArrowUp, ExternalLink, Mail, MapPin, Sparkles, ShieldCheck, X } from 'lucide-react';
import { JivoteckLogo } from './JivoteckLogo';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE5DC] text-[#4A635B] font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top brand row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#EAE5DC]">
          <div className="space-y-2">
            <JivoteckLogo size="lg" darkText={true} showSubtitle={true} />
            <p className="text-sm text-[#4A635B] max-w-md font-sans">
              Corporativo tecnolÃ³gico mexicano. Casa corporativa de Industrialpedia y nuevas iniciativas tecnolÃ³gicas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
            >
              Contacto
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-white border border-[#D8D2C6] text-[#2E4846] hover:text-[#13262F] hover:bg-[#F4F1EA] transition-colors shadow-2xs flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
              title="Volver al inicio"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Col 1: CORPORATIVO */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#13262F] font-bold">
              CORPORATIVO
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono text-[#3E5C54]">
              <a href="#nosotros" className="hover:text-[#13262F] hover:underline transition-colors py-0.5">Nosotros</a>
              <a href="#como-construimos" className="hover:text-[#13262F] hover:underline transition-colors py-0.5">CÃ³mo construimos</a>
              <a href="#contacto" className="hover:text-[#13262F] hover:underline transition-colors py-0.5">Contacto</a>
            </div>
          </div>

          {/* Col 2: ECOSISTEMA */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#13262F] font-bold">
              ECOSISTEMA
            </h4>
            <div className="space-y-2 text-xs font-mono text-[#3E5C54]">
              <a
                href={siteConfig.industrialpedia.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2E4846] hover:underline flex items-center gap-1 font-bold py-0.5"
              >
                <span>Industrialpedia</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#2E4846]" aria-hidden="true" />
              </a>
              <p className="text-[11px] text-[#638379] font-sans leading-relaxed">
                TecnologÃ­a e informaciÃ³n para la industria.
              </p>
            </div>
          </div>

          {/* Col 3: RELACIONES */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#13262F] font-bold">
              RELACIONES
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono text-[#3E5C54]">
              <a href="#prensa" className="hover:text-[#13262F] hover:underline transition-colors py-0.5">Prensa</a>
              <a href="#contacto" className="hover:text-[#13262F] hover:underline transition-colors py-0.5">Alianzas</a>
              <a href="#contacto" className="hover:text-[#13262F] hover:underline transition-colors py-0.5">Talento</a>
            </div>
          </div>

          {/* Col 4: LEGAL & CANAL OFICIAL */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#13262F] font-bold">
              LEGAL & ATENCIÃ“N
            </h4>
            <div className="space-y-2 text-xs font-mono text-[#3E5C54]">
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(true)}
                className="text-left text-[#3E5C54] hover:text-[#13262F] hover:underline transition-colors py-0.5 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846] rounded"
              >
                Aviso de Privacidad
              </button>
              <a
                href={`mailto:${siteConfig.contact.primaryEmail}`}
                className="text-[#2E4846] hover:underline flex items-center gap-1.5 font-bold break-all pt-1"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 text-[#2E4846]" aria-hidden="true" />
                <span>{siteConfig.contact.primaryEmail}</span>
              </a>
              <div className="flex items-center gap-1.5 text-[#4A635B] font-sans text-xs pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#2E4846] shrink-0" aria-hidden="true" />
                <span>Aguascalientes, MÃ©xico</span>
              </div>
            </div>
          </div>

        </div>

        {/* Philosophy Motto Banner */}
        <div className="pt-6 border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#638379]">
          <div className="flex items-center gap-2 font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#50756C]" aria-hidden="true" />
            <span>IDEAS QUE TAMBIÃ‰N CONSTRUYEN MUNDOS</span>
          </div>
          <div className="text-[11px] uppercase tracking-wider text-[#4A635B]">
            Aguascalientes, MÃ©xico.
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-4 border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8FA89B]">
          <div>
            &copy; 2026 JIVOTECK. Todos los derechos reservados.
          </div>
          <div className="text-[11px] text-[#638379]">
            Corporativo tecnolÃ³gico
          </div>
        </div>

      </div>

      {/* Accessible Privacy Notice Modal */}
      {privacyModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="footer-privacy-modal-title"
        >
          <div className="bg-white rounded-3xl border border-[#EAE5DC] max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#50756C]" aria-hidden="true" />
                <h3 id="footer-privacy-modal-title" className="text-base font-bold font-serif text-[#13262F]">
                  Aviso de Privacidad
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="min-h-[40px] min-w-[40px] p-2 rounded-xl text-[#638379] hover:text-[#13262F] hover:bg-[#FAF8F5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846] flex items-center justify-center"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#4A635B] font-sans leading-relaxed">
              <p>
                <strong>JIVOTECK</strong> (Aguascalientes, MÃ©xico) es responsable del tratamiento de los datos de contacto que proporciones voluntariamente mediante comunicaciÃ³n por correo electrÃ³nico oficial.
              </p>
              <p>
                Los datos recabados serÃ¡n utilizados exclusivamente para atender y dar seguimiento a tu solicitud de informaciÃ³n, vinculaciÃ³n, prensa, alianzas o asuntos corporativos. No se cederÃ¡n a terceros ni se emplearÃ¡n con fines comerciales no solicitados.
              </p>
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] text-[11px] text-[#638379]">
                <strong>Nota institucional:</strong> La formalizaciÃ³n registral completa y datos fiscales especÃ­ficos se proporcionan de manera individual en los instrumentos contractuales correspondientes. Para ejercer tus derechos ARCO o dudas de privacidad, escribe a <code>contacto@jivoteck.com</code>.
              </div>
            </div>

            <div className="pt-2 border-t border-[#EAE5DC] flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="min-h-[40px] px-4 py-2 bg-[#13262F] hover:bg-[#1D3845] text-white text-xs font-mono font-bold rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
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
