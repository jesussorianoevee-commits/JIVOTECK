import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  MapPin, 
  MessageSquare, 
  ShieldCheck,
  Building,
  User,
  Phone
} from 'lucide-react';
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
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 relative bg-slate-950/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
            <MessageSquare className="w-3.5 h-3.5 text-brand-cyan" />
            <span>CANALES DIRECTOS Y OFICIALES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ponte en Contacto con <span className="text-brand-cyan font-mono">{siteConfig.name}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Hablemos de tus necesidades de automatización, desarrollo de software, orientación técnica o sobre la plataforma Industrialpedia.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Official Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Showcase Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-brand-navy to-slate-900 border border-brand-border shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">Correo Electrónico Oficial</h3>
                  <p className="text-xs text-slate-400">Atención técnica y comercial</p>
                </div>
              </div>

              {/* Main Email */}
              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-between gap-2">
                <span className="font-mono text-sm sm:text-base text-brand-cyan font-semibold truncate select-all">
                  {siteConfig.contact.primaryEmail}
                </span>
                <button
                  onClick={() => copyToClipboard(siteConfig.contact.primaryEmail)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copiar correo"
                >
                  {copiedEmail === siteConfig.contact.primaryEmail ? (
                    <div className="flex items-center gap-1 text-emerald-400 text-xs font-mono">
                      <Check className="w-4 h-4" />
                      <span>Copiado</span>
                    </div>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="pt-1">
                <a
                  href={`mailto:${siteConfig.contact.primaryEmail}?subject=Contacto%20desde%20JIVOTECK%20Web`}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-brand-cyan to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-black text-xs font-mono font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-500/10"
                >
                  <Mail className="w-4 h-4" />
                  <span>Escribir Correo Directo</span>
                </a>
              </div>
            </div>

            {/* Additional Contact Info Cards */}
            <div className="space-y-3 font-mono text-xs">
              
              {/* Location Card: Aguascalientes, Mexico */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5 font-sans">
                <div className="flex items-center gap-2 text-xs text-white font-semibold">
                  <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Sede y Alcance Operativo</span>
                </div>
                <div className="text-sm text-slate-300 pl-6">
                  {siteConfig.contact.location}
                </div>
                <div className="text-xs text-slate-400 pl-6">
                  Sede en <strong className="text-white">Aguascalientes, México</strong> con atención a proyectos en toda la república y modalidad remota internacional.
                </div>
              </div>

              {/* Schedule Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5 font-sans">
                <div className="flex items-center gap-2 text-xs text-white font-semibold">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Horario de Atención</span>
                </div>
                <div className="text-sm text-slate-300 pl-6">
                  {siteConfig.contact.schedule}
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2.5 font-sans">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Respuesta prioritaria en menos de 24 horas hábiles.</span>
              </div>

            </div>

          </div>

          {/* Right Column: Complete Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-brand-border shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¡Mensaje y Datos Recibidos!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Gracias <strong className="text-brand-cyan">{formData.name}</strong>. Hemos registrado tu solicitud para el área de <strong className="text-white capitalize">{formData.service}</strong>.
                  </p>
                  <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 max-w-md mx-auto text-left font-mono text-xs space-y-1.5 text-slate-400">
                    <div>Folio: <span className="text-brand-cyan">JIV-AGS-{Math.floor(10000 + Math.random() * 90000)}</span></div>
                    <div>Correo de contacto: <span className="text-white">{formData.email}</span></div>
                    {formData.phone && <div>Teléfono / WhatsApp: <span className="text-white">{formData.phone}</span></div>}
                    {formData.company && <div>Empresa: <span className="text-white">{formData.company}</span></div>}
                    <div>Destino: <span className="text-emerald-400">{siteConfig.contact.primaryEmail}</span></div>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', company: '', service: 'automatizacion', message: '' });
                      }}
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono rounded-lg transition-colors"
                    >
                      Enviar otro formulario
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white">Formulario de Contacto y Solicitud</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Ingresa tus datos a continuación para ponernos en contacto contigo a la brevedad.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>Nombre Completo *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Ing. Carlos Mendoza"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>Correo Electrónico *</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tu-correo@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>Teléfono / WhatsApp</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Ej. +52 449 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan font-sans"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>Empresa / Organización</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Automatizaciones del Bajío"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan font-sans"
                      />
                    </div>
                  </div>

                  {/* Service selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300">
                      Servicio o Área de Interés *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900/90 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-brand-cyan font-sans"
                    >
                      <option value="automatizacion">Automatización (Control PLC, Sensores, Robótica Industrial)</option>
                      <option value="programacion">Programación (Software Web, Plataformas Cloud, APIs a la Medida)</option>
                      <option value="orientacion">Orientación & Consultoría Técnica Integral</option>
                      <option value="marketing">Marketing Tecnológico & Posicionamiento B2B</option>
                      <option value="industrialpedia">Proyecto Industrialpedia (Próximamente / Alianzas)</option>
                      <option value="cotizacion">Cotización General de Proyecto</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300">
                      Mensaje o Descripción de tu Requerimiento *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Platícanos sobre tu proyecto, objetivos técnicos, tiempos o presupuesto estimado..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan font-sans resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-blue text-black font-semibold text-sm rounded-xl font-mono hover:opacity-95 transition-all duration-200 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud a JIVOTECK</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-mono pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tus datos se manejan con estricta confidencialidad.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
