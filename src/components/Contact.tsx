import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Send, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'programacion',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.primaryEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-white border-t border-slate-200 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-3 border-b border-slate-200 pb-6">
          <div className="font-mono text-xs uppercase tracking-widest text-slate-500 font-semibold">
            GET IN TOUCH WITH JIVOTECK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans">
            Contacto Directo
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
            Ponte en contacto con nuestro equipo para cotizar un proyecto, solicitar orientación técnica o conocer más sobre el avance de Industrialpedia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct channels left */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                Correo Electrónico Oficial
              </div>

              <div className="flex items-center justify-between gap-2 p-3 bg-white rounded border border-slate-200">
                <span className="font-mono text-xs sm:text-sm font-semibold text-slate-900 truncate select-all">
                  {siteConfig.contact.primaryEmail}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-mono font-medium flex items-center gap-1 transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copiado</span>
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
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Escribir Correo</span>
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0099CC]" />
                <span>Sede Principal</span>
              </div>
              <div className="text-sm font-bold text-slate-900 font-sans">
                Aguascalientes, México
              </div>
              <div className="text-xs text-slate-600 leading-relaxed font-normal">
                Atención remota a nivel global y reuniones presenciales para proyectos en la región.
              </div>
            </div>

            {/* Trust badge */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Respuesta garantizada en menos de 24 horas hábiles.</span>
            </div>

          </div>

          {/* Form right */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg bg-slate-50 border border-slate-200">
              
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-sans">
                    ¡Mensaje Recibido!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Gracias <strong>{formData.name}</strong>. Hemos registrado tu consulta para el área de <strong>{formData.service}</strong>. Un especialista de JIVOTECK se comunicará contigo a la brevedad.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', company: '', service: 'programacion', message: '' });
                    }}
                    className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-mono rounded font-semibold"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-mono uppercase text-slate-600 font-medium">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Ing. Carlos Mendoza"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-mono uppercase text-slate-600 font-medium">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tu-correo@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-mono uppercase text-slate-600 font-medium">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="Ej. +52 449 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-mono uppercase text-slate-600 font-medium">
                        Empresa / Organización
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Planta Bajío"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase text-slate-600 font-medium">
                      Área o Servicio de Interés *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-slate-800"
                    >
                      <option value="programacion">Programación & Software a la Medida</option>
                      <option value="automatizacion">Automatización Inteligente de Procesos</option>
                      <option value="orientacion">Orientación & Consultoría Técnica</option>
                      <option value="marketing">Marketing Tecnológico B2B</option>
                      <option value="industrialpedia">Proyecto Industrialpedia (Acceso Anticipado / Alianzas)</option>
                      <option value="cotizacion">Cotización General de Proyecto</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase text-slate-600 font-medium">
                      Mensaje o Descripción del Requerimiento *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Platícanos sobre tus necesidades u objetivos técnicos..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Mensaje a JIVOTECK</span>
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
