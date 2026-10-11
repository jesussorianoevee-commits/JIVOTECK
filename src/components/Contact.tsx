import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Send, ShieldCheck, X, Linkedin, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Contact: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('Alianzas y colaboraciones');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState<boolean>(false);

  const contactCategories = [
    'Soluciones para empresas',
    'Industrialpedia',
    'Alianzas y colaboraciones',
    'Relaciones institucionales',
    'Prensa y comunicación',
    'Administración / facturación',
    'Proveedores',
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
    <section id="contacto" className="py-20 sm:py-28 bg-[#F8F6F1] border-t border-[#EAE5DC] text-[#0E2433]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-0.5 bg-[#FF6B35] rounded-full" aria-hidden="true"></span>
            <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#0E2433]/70 uppercase">
              VINCULACIÓN CORPORATIVA
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0E2433] tracking-tight leading-[1.15]">
            Contacto directo
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#0E2433]/75 leading-relaxed">
            Para alianzas estratégicas, relaciones institucionales, prensa, proveedores o vinculación con las iniciativas del ecosistema JIVOTECK.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Cards: Official Email & Location */}
          <div className="lg:col-span-5 space-y-5">

            {/* Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E5E0D5] space-y-5 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0E2433]/60 font-bold block">
                Canal Oficial de Atención
              </span>

              <div className="flex items-center justify-between gap-2 p-3 bg-[#F8F6F1] rounded-2xl border border-[#D8D2C6]">
                <span className="font-mono text-xs sm:text-sm font-bold text-[#0E2433] truncate select-all pl-2">
                  {siteConfig.contact.primaryEmail}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="min-h-[40px] px-3.5 py-1.5 bg-white hover:bg-neutral-100 text-[#0E2433] rounded-full text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors shrink-0 border border-[#D8D2C6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
                  title="Copiar correo corporativo"
                  aria-label="Copiar correo corporativo al portapapeles"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2F5F50]" aria-hidden="true" />
                      <span className="text-[#2F5F50]">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#0E2433]/60" aria-hidden="true" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={mailtoHref}
                className="w-full py-3.5 px-6 bg-[#FF6B35] hover:bg-[#E85A24] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
              >
                <Mail className="w-4 h-4 text-white" aria-hidden="true" />
                <span>Escribir Correo Corporativo</span>
              </a>
            </div>

            {/* Sede Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E0D5] space-y-2 shadow-sm">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#2F5F50] font-bold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2F5F50]" aria-hidden="true" />
                <span>Sede Corporativa</span>
              </div>
              <div className="text-base font-bold text-[#0E2433] font-serif">
                Aguascalientes, México
              </div>
              <p className="text-xs text-[#0E2433]/70 leading-relaxed font-sans">
                Atención y vinculación corporativa para alianzas, iniciativas tecnológicas e información institucional.
              </p>
            </div>

            {/* LinkedIn Corporativo Card */}
            {siteConfig.social.linkedin && (
              <div className="p-6 rounded-3xl bg-white border border-[#E5E0D5] space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#0E2433]/70 font-bold flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" aria-hidden="true" />
                    <span>Red Corporativa</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#2F5F50]" aria-hidden="true" />
                </div>
                <div className="text-base font-bold text-[#0E2433] font-serif">
                  LinkedIn Oficial
                </div>
                <p className="text-xs text-[#0E2433]/70 leading-relaxed font-sans">
                  Comunicados institucionales, avances del ecosistema y vinculación profesional directa.
                </p>
                <div className="pt-1">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#FF6B35] hover:text-[#E85A24] uppercase transition-colors"
                  >
                    <span>Conectar en LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}

          </div>

          {/* Right Interactive Email Assistant */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E0D5] shadow-sm space-y-6">

              <div>
                <h3 className="text-lg font-bold font-serif text-[#0E2433]">
                  Selecciona el motivo de tu comunicación
                </h3>
                <p className="text-xs text-[#0E2433]/70 font-sans mt-1">
                  Tu cliente de correo se abrirá con el asunto debidamente preconfigurado para canalizar tu mensaje.
                </p>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-category-select"
                  className="block text-xs font-mono uppercase tracking-wider text-[#0E2433] font-semibold"
                >
                  Motivo de contacto:
                </label>
                <select
                  id="contact-category-select"
                  name="contactCategory"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full min-h-[44px] px-4 py-2.5 text-xs bg-[#F8F6F1] border border-[#D8D2C6] rounded-2xl text-[#0E2433] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] transition-all font-sans"
                >
                  {contactCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pre-formatted mail preview */}
              <div className="p-4 rounded-2xl bg-[#F8F6F1] border border-[#D8D2C6] space-y-2 text-xs">
                <div className="flex items-center justify-between text-[#0E2433]/70 font-mono text-[11px]">
                  <span>Destinatario:</span>
                  <span className="font-bold text-[#0E2433]">{siteConfig.contact.primaryEmail}</span>
                </div>
                <div className="flex items-center justify-between text-[#0E2433]/70 font-mono text-[11px]">
                  <span>Asunto configurado:</span>
                  <span className="font-bold text-[#FF6B35] truncate max-w-[260px] sm:max-w-none">
                    [JIVOTECK] {selectedSubject}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={mailtoHref}
                  className="w-full py-3.5 px-6 bg-[#0E2433] hover:bg-[#132E40] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
                >
                  <Send className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                  <span>Redactar correo: {selectedSubject}</span>
                </a>

                {/* Privacy agreement notice */}
                <p className="text-[11px] text-[#0E2433]/65 font-sans text-center leading-relaxed">
                  Al enviar una comunicación a través de este canal, confirmas que has leído el{' '}
                  <button
                    type="button"
                    onClick={() => setPrivacyModalOpen(true)}
                    className="underline text-[#FF6B35] hover:text-[#E85A24] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] rounded p-0.5"
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
          className="fixed inset-0 z-50 bg-[#0E2433]/70 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
        >
          <div className="bg-white rounded-3xl border border-[#EAE5DC] max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2F5F50]" aria-hidden="true" />
                <h3 id="privacy-modal-title" className="text-base font-bold font-serif text-[#0E2433]">
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
                <strong>Nota institucional:</strong> La formalización registral completa y datos fiscales específicos se proporcionan de manera individual en los instrumentos contractuales correspondientes. Para ejercer tus derechos ARCO o dudas de privacidad, escribe a <code>contacto@jivoteck.com</code>.
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
    </section>
  );
};
