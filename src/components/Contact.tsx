import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Send, ShieldCheck, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'automatizacion',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketFolio, setTicketFolio] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.primaryEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomFolio = `JVT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketFolio(randomFolio);
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-white border-t border-[#EAE5DC] text-[#13262F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-white text-[#2E4846] border border-[#D8D2C6] shadow-2xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#50756C]" />
            <span>CONTACTO DIRECTO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13262F] tracking-tight font-serif">
            Iniciemos una conversación sobre tu proyecto.
          </h2>
          <p className="text-base text-[#4A635B] leading-relaxed font-sans">
            Comunícate directamente con nuestro equipo de ingeniería para cotizar un desarrollo, agendar una sesión de consultoría técnica o conocer alianzas en torno a Industrialpedia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct channels left (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-4 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#638379] font-bold block">
                Canal Oficial de Atención
              </span>

              <div className="flex items-center justify-between gap-2 p-3 bg-white rounded-xl border border-[#D8D2C6] shadow-2xs">
                <span className="font-mono text-xs sm:text-sm font-bold text-[#13262F] truncate select-all">
                  {siteConfig.contact.primaryEmail}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 bg-[#F4F1EA] hover:bg-[#EAE5DC] text-[#2E4846] rounded-lg text-xs font-mono font-semibold flex items-center gap-1 transition-colors shrink-0 border border-[#D8D2C6]"
                  title="Copiar correo"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2E4846]" />
                      <span className="text-[#2E4846]">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#638379]" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${siteConfig.contact.primaryEmail}`}
                className="w-full py-2.5 px-4 bg-[#13262F] hover:bg-[#1D3845] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-white" />
                <span>Escribir Mensaje Directo</span>
              </a>
            </div>

            {/* Location & Sede Card */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-2 shadow-xs">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#2E4846] font-bold flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#50756C]" />
                <span>Sede Principal</span>
              </div>
              <div className="text-base font-bold text-[#13262F] font-serif">
                Aguascalientes, México
              </div>
              <p className="text-xs text-[#4A635B] leading-relaxed font-sans">
                Atención presencial en plantas de la región Bajío y desarrollo remoto a nivel nacional e internacional.
              </p>
            </div>

            {/* Response Time */}
            <div className="p-4 rounded-2xl bg-[#F4F1EA] border border-[#D8D2C6] flex items-center gap-3 text-xs text-[#2E4846] font-medium font-sans">
              <ShieldCheck className="w-5 h-5 text-[#50756C] shrink-0" />
              <span>
                Atención técnica en menos de 24 horas hábiles con asesoría de un ingeniero especializado.
              </span>
            </div>

          </div>

          {/* Form right (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#EAE5DC] shadow-xs">
              
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#F4F1EA] text-[#2E4846] mx-auto flex items-center justify-center border border-[#D8D2C6]">
                    <Check className="w-7 h-7 text-[#2E4846]" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#F4F1EA] text-[#2E4846] border border-[#D8D2C6]">
                      FOLIO: {ticketFolio}
                    </span>
                    <h3 className="text-2xl font-bold text-[#13262F] font-serif mt-3">
                      ¡Consulta Registrada Exitosamente!
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A635B] max-w-md mx-auto leading-relaxed font-sans">
                    Muchas gracias, <strong>{formData.name}</strong>. Hemos recibido tu solicitud para el área de <strong>{formData.service}</strong>. Un especialista de JIVOTECK te responderá a tu correo <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', company: '', service: 'automatizacion', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 bg-[#13262F] hover:bg-[#1D3845] text-white text-xs font-mono font-bold rounded-xl transition-all shadow-sm"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-[#13262F] font-semibold tracking-wider">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Ing. Roberto Mendoza"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D8D2C6] rounded-xl text-[#13262F] placeholder-[#8FA89B] focus:bg-white focus:outline-none focus:border-[#2E4846] focus:ring-1 focus:ring-[#2E4846] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-[#13262F] font-semibold tracking-wider">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tu-correo@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D8D2C6] rounded-xl text-[#13262F] placeholder-[#8FA89B] focus:bg-white focus:outline-none focus:border-[#2E4846] focus:ring-1 focus:ring-[#2E4846] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-[#13262F] font-semibold tracking-wider">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="Ej. +52 449 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D8D2C6] rounded-xl text-[#13262F] placeholder-[#8FA89B] focus:bg-white focus:outline-none focus:border-[#2E4846] focus:ring-1 focus:ring-[#2E4846] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-[#13262F] font-semibold tracking-wider">
                        Empresa / Organización
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Manufactura Bajío"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D8D2C6] rounded-xl text-[#13262F] placeholder-[#8FA89B] focus:bg-white focus:outline-none focus:border-[#2E4846] focus:ring-1 focus:ring-[#2E4846] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase text-[#13262F] font-semibold tracking-wider">
                      Área o Servicio de Interés *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D8D2C6] rounded-xl text-[#13262F] focus:bg-white focus:outline-none focus:border-[#2E4846] focus:ring-1 focus:ring-[#2E4846] transition-all"
                    >
                      <option value="automatizacion">Automatización & Control de Procesos (SCADA, Robótica, Sensórica)</option>
                      <option value="software">Desarrollo de Software a la Medida (Cloud, APIs, Dashboards)</option>
                      <option value="consultoria">Orientación & Consultoría Técnica (Auditoría y Diagnóstico)</option>
                      <option value="marketing">Marketing Tecnológico B2B (Estrategia y Posicionamiento Industrial)</option>
                      <option value="industrialpedia">Proyecto Industrialpedia (Alianzas y Acceso Beta)</option>
                      <option value="cotizacion">Cotización General de Proyecto</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase text-[#13262F] font-semibold tracking-wider">
                      Descripción del Requerimiento *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe las metas de tu proyecto, maquinaria a integrar o dudas técnicas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D8D2C6] rounded-xl text-[#13262F] placeholder-[#8FA89B] focus:bg-white focus:outline-none focus:border-[#2E4846] focus:ring-1 focus:ring-[#2E4846] transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#13262F] hover:bg-[#1D3845] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow"
                  >
                    <Send className="w-3.5 h-3.5 text-white" />
                    <span>Enviar Consulta a JIVOTECK</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
