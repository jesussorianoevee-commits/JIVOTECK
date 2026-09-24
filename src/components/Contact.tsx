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
    <section id="contacto" className="py-16 sm:py-24 bg-white border-t border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-[#007362] border border-emerald-200/70">
            <MessageSquare className="w-3.5 h-3.5 text-[#00D4B2]" />
            <span>CONTACTO DIRECTO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-sans">
            Iniciemos una conversación sobre tu proyecto.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Comunícate directamente con nuestro equipo de ingeniería para cotizar un desarrollo, agendar una sesión de consultoría técnica o conocer alianzas en torno a Industrialpedia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct channels left (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-upstream">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                Canal Oficial de Atención
              </span>

              <div className="flex items-center justify-between gap-2 p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 truncate select-all">
                  {siteConfig.contact.primaryEmail}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-mono font-semibold flex items-center gap-1 transition-colors shrink-0"
                  title="Copiar correo"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#007362]" />
                      <span className="text-[#007362]">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${siteConfig.contact.primaryEmail}`}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-[#00584B] to-[#007362] hover:from-[#00483D] hover:to-[#00584B] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-[#00D4B2]" />
                <span>Escribir Mensaje Directo</span>
              </a>
            </div>

            {/* Location & Sede Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-upstream">
              <div className="text-xs font-mono uppercase tracking-wider text-[#007362] font-semibold flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#007362]" />
                <span>Sede Principal</span>
              </div>
              <div className="text-base font-bold text-slate-900 font-sans">
                Aguascalientes, México
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Atención presencial en plantas de la región Bajío y desarrollo remoto a nivel nacional e internacional.
              </p>
            </div>

            {/* Response Time & Guarantee */}
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-center gap-3 text-xs text-[#006254] font-medium font-sans">
              <ShieldCheck className="w-5 h-5 text-[#007362] shrink-0" />
              <span>
                Respuesta garantizada en menos de 24 horas hábiles con asesoría de un ingeniero especializado.
              </span>
            </div>

          </div>

          {/* Form right (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-upstream">
              
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#007362] mx-auto flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-[#006254] border border-emerald-200">
                      FOLIO: {ticketFolio}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 font-sans mt-3">
                      ¡Consulta Registrada Exitosamente!
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-sans">
                    Muchas gracias, <strong>{formData.name}</strong>. Hemos recibido tu solicitud para el área de <strong>{formData.service}</strong>. Un especialista de JIVOTECK te responderá a tu correo <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', company: '', service: 'automatizacion', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 bg-[#007362] text-white text-xs font-mono font-bold rounded-xl hover:bg-[#00584B] transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-slate-700 font-semibold">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Ing. Roberto Mendoza"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#007362] focus:ring-1 focus:ring-[#007362] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-slate-700 font-semibold">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tu-correo@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#007362] focus:ring-1 focus:ring-[#007362] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-slate-700 font-semibold">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="Ej. +52 449 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#007362] focus:ring-1 focus:ring-[#007362] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-slate-700 font-semibold">
                        Empresa / Organización
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Manufactura Bajío"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#007362] focus:ring-1 focus:ring-[#007362] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase text-slate-700 font-semibold">
                      Área o Servicio de Interés *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:border-[#007362] focus:ring-1 focus:ring-[#007362] transition-all"
                    >
                      <option value="automatizacion">Automatización & Control de Procesos (PLCs, SCADA, Robótica)</option>
                      <option value="software">Desarrollo de Software a la Medida (Cloud, APIs, Dashboards)</option>
                      <option value="consultoria">Orientación & Consultoría Técnica (Auditoría y Diagnóstico)</option>
                      <option value="marketing">Marketing Tecnológico B2B (Estrategia y Posicionamiento Industrial)</option>
                      <option value="industrialpedia">Proyecto Industrialpedia (Alianzas y Acceso Beta)</option>
                      <option value="cotizacion">Cotización General de Proyecto</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase text-slate-700 font-semibold">
                      Descripción del Requerimiento *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe las metas de tu proyecto, maquinaria a integrar o dudas técnicas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#007362] focus:ring-1 focus:ring-[#007362] transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-[#00584B] to-[#007362] hover:from-[#00483D] hover:to-[#00584B] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Send className="w-3.5 h-3.5 text-[#00D4B2]" />
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
