import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Send, MessageSquare, ShieldCheck, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Contact: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('Alianzas y colaboraciones');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState<boolean>(false);

  const contactCategories = [
    'Alianzas y colaboraciones',
    'Relaciones institucionales',
    'Prensa y comunicaciÃ³n',
    'AdministraciÃ³n / facturaciÃ³n',
    'Proveedores',
    'Industrialpedia',
    'Talento',
    'Otro motivo'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.primaryEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const mailtoHref = `mailto:${siteConfig.contact.primaryEmail}?subject=${encodeURIComponent(`[JIVOTECK] ${selectedSubject}`)}`;

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-white border-t border-[#EAE5DC] text-[#13262F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-[#FAF8F5] text-[#2E4846] border border-[#D8D2C6]">
            <MessageSquare className="w-3.5 h-3.5 text-[#50756C]" aria-hidden="true" />
            <span>VINCULACIÃ“N</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13262F] tracking-tight font-serif">
            Contacto corporativo
          </h2>
          <p className="text-base sm:text-lg text-[#4A635B] leading-relaxed font-sans">
            Para alianzas, relaciones institucionales, prensa, proveedores, documentaciÃ³n corporativa o informaciÃ³n sobre el ecosistema JIVOTECK, utiliza este canal.
          </p>
          <p className="text-xs sm:text-sm text-[#638379] leading-relaxed font-sans">
            Si tu consulta estÃ¡ relacionada directamente con la plataforma o las funcionalidades de Industrialpedia, te orientaremos al canal correspondiente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Direct channels left (5 cols) */}
          <div className="lg:col-span-5 space-y-5">

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-4 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#638379] font-bold block">
                Canal Oficial de AtenciÃ³n
              </span>

              <div className="flex items-center justify-between gap-2 p-3 bg-white rounded-xl border border-[#D8D2C6] shadow-2xs">
                <span className="font-mono text-xs sm:text-sm font-bold text-[#13262F] truncate select-all">
                  {siteConfig.contact.primaryEmail}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="min-h-[44px] px-3.5 py-2 bg-[#F4F1EA] hover:bg-[#EAE5DC] text-[#2E4846] rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors shrink-0 border border-[#D8D2C6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
                  title="Copiar correo corporativo"
                  aria-label="Copiar correo corporativo al portapapeles"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2E4846]" aria-hidden="true" />
                      <span className="text-[#2E4846]">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#638379]" aria-hidden="true" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={mailtoHref}
                className="min-h-[44px] w-full py-3 px-4 bg-[#13262F] hover:bg-[#1D3845] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
              >
                <Mail className="w-4 h-4 text-white" aria-hidden="true" />
                <span>Escribir Correo Corporativo</span>
              </a>
            </div>

            {/* Sede Card */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-2 shadow-xs">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#2E4846] font-bold flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#50756C]" aria-hidden="true" />
                <span>Sede Corporativa</span>
              </div>
              <div className="text-base font-bold text-[#13262F] font-serif">
                Aguascalientes, MÃ©xico
              </div>
              <p className="text-xs text-[#4A635B] leading-relaxed font-sans">
                AtenciÃ³n y vinculaciÃ³n corporativa para alianzas, iniciativas tecnolÃ³gicas e informaciÃ³n institucional.
              </p>
            </div>

          </div>

          {/* Interactive Routing Right (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] shadow-xs space-y-6">

              <div>
                <h3 className="text-lg font-bold font-serif text-[#13262F]">
                  Selecciona el motivo de tu consulta
                </h3>
                <p className="text-xs text-[#4A635B] font-sans mt-1">
                  Tu cliente de correo se abrirÃ¡ con el asunto preconfigurado para canalizar tu mensaje al Ã¡rea adecuada.
                </p>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-category-select"
                  className="block text-xs font-mono uppercase tracking-wider text-[#13262F] font-semibold"
                >
                  Motivo de contacto:
                </label>
                <select
                  id="contact-category-select"
                  name="contactCategory"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2.5 text-xs bg-white border border-[#D8D2C6] rounded-xl text-[#13262F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846] transition-all font-sans"
                >
                  {contactCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pre-formatted mail preview */}
              <div className="p-4 rounded-xl bg-white border border-[#D8D2C6] space-y-2 text-xs">
                <div className="flex items-center justify-between text-[#638379] font-mono text-[11px]">
                  <span>Destinatario:</span>
                  <span className="font-bold text-[#13262F]">{siteConfig.contact.primaryEmail}</span>
                </div>
                <div className="flex items-center justify-between text-[#638379] font-mono text-[11px]">
                  <span>Asunto configurado:</span>
                  <span className="font-bold text-[#2E4846] truncate max-w-[260px] sm:max-w-none">
                    [JIVOTECK] {selectedSubject}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={mailtoHref}
                  className="min-h-[44px] w-full py-3.5 px-6 bg-[#13262F] hover:bg-[#1D3845] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
                >
                  <Send className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                  <span>Redactar correo para: {selectedSubject}</span>
                </a>

                {/* Privacy agreement notice */}
                <p className="text-[11px] text-[#638379] font-sans text-center leading-relaxed">
                  Al enviar una comunicaciÃ³n a travÃ©s de este canal, confirmas que has leÃ­do el{' '}
                  <button
                    type="button"
                    onClick={() => setPrivacyModalOpen(true)}
                    className="underline text-[#2E4846] hover:text-[#13262F] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846] rounded p-0.5"
                  >
                    Aviso de Privacidad
                  </button>{' '}
                  de JIVOTECK.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Accessible Privacy Notice Modal */}
      {privacyModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
        >
          <div className="bg-white rounded-3xl border border-[#EAE5DC] max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#50756C]" aria-hidden="true" />
                <h3 id="privacy-modal-title" className="text-base font-bold font-serif text-[#13262F]">
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
    </section>
  );
};
