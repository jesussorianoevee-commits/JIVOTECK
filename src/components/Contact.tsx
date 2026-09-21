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
  Phone,
  Sparkles,
  Lock
} from 'lucide-react';
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
    <section id="contacto" className="py-24 relative bg-[#0A0D14] overflow-hidden">
      {/* Soft startup ambient blurs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-medium text-indigo-300">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
            <span>CONTACTO Y ATENCIÓN DIRECTA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Iniciemos una Conversación
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Estamos listos para escuchar tus necesidades técnicas y comerciales. Ya sea un nuevo software, automatización, asesoría o el proyecto Industrialpedia, cuentas con nuestro respaldo.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Trust Info & Official Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Showcase Box */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-indigo-950/20 border border-white/[0.08] shadow-2xl space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">Correo Oficial</h3>
                  <p className="text-xs text-slate-400">Atención rápida y confidencial</p>
                </div>
              </div>

              {/* Main Email Display with Copy */}
              <div className="p-4 bg-slate-950/80 rounded-xl border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="overflow-hidden">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Buzón de entrada oficial</div>
                  <span className="text-sm sm:text-base text-indigo-300 font-semibold font-mono truncate block select-all">
                    {siteConfig.contact.primaryEmail}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(siteConfig.contact.primaryEmail)}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors text-xs font-medium flex items-center gap-1.5 shrink-0"
                  title="Copiar correo"
                >
                  {copiedEmail === siteConfig.contact.primaryEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick direct mail action */}
              <a
                href={`mailto:${siteConfig.contact.primaryEmail}?subject=Consulta%20desde%20sitio%20web%20JIVOTECK`}
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                <Mail className="w-4 h-4" />
                <span>Abrir mi Aplicación de Correo</span>
              </a>
            </div>

            {/* Location & Trust Guarantees */}
            <div className="space-y-3 text-xs">
              
              {/* Location Card: Aguascalientes, Mexico */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Sede en Aguascalientes, México</span>
                </div>
                <div className="text-slate-300 pl-6">
                  {siteConfig.contact.location}
                </div>
                <div className="text-slate-400 text-[11px] pl-6">
                  Atención en línea a cualquier parte del mundo y reuniones presenciales para proyectos en la región.
                </div>
              </div>

              {/* Schedule Card */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Disponibilidad y Horarios</span>
                </div>
                <div className="text-slate-300 pl-6">
                  {siteConfig.contact.schedule}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Respuesta Garantizada en &lt; 24 Horas Hábiles</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Lock className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Confidencialidad industrial y acuerdos de no divulgación (NDA).</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Modern Client Contact Form */}
          <div className="lg:col-span-7">
            <div className="startup-card p-7 sm:p-9 rounded-2xl border border-white/[0.08] shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¡Gracias por Contactarnos!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Hemos recibido tus datos correctamente, <strong className="text-indigo-300">{formData.name}</strong>. Un especialista técnico de JIVOTECK revisará tu mensaje y se comunicará contigo a la brevedad.
                  </p>
                  <div className="p-4 bg-slate-950/80 rounded-xl border border-white/[0.06] max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-400">
                    <div>Folio de atención: <span className="text-indigo-300 font-mono">JIV-AGS-{Math.floor(10000 + Math.random() * 90000)}</span></div>
                    <div>Correo registrado: <span className="text-white font-mono">{formData.email}</span></div>
                    {formData.phone && <div>Teléfono: <span className="text-white font-mono">{formData.phone}</span></div>}
                    <div>Área de interés: <span className="text-white capitalize">{formData.service}</span></div>
                    <div>Estado: <span className="text-emerald-400 font-medium">En cola de atención prioritaria</span></div>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', company: '', service: 'programacion', message: '' });
                      }}
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors"
                    >
                      Enviar otro requerimiento
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-white/[0.08] pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>Cuéntanos sobre tu Proyecto</span>
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Completa tus datos para enviarte una propuesta o agendar una llamada con nuestro equipo.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Nombre y Apellidos *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Ing. Carlos Mendoza"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950/70 border border-white/[0.1] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Correo Electrónico *</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tu-correo@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950/70 border border-white/[0.1] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>Teléfono / WhatsApp</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Ej. +52 449 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950/70 border border-white/[0.1] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>Empresa o Proyecto</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Soluciones Industriales S.A."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950/70 border border-white/[0.1] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-slate-300">
                      Servicio o Área de tu Interés *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950/70 border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-indigo-400 transition-colors"
                    >
                      <option value="programacion">Programación & Software a la Medida (Web, Nube, APIs)</option>
                      <option value="automatizacion">Automatización de Procesos (PLCs, Control, Sensores)</option>
                      <option value="orientacion">Orientación & Consultoría Técnica Estratégica</option>
                      <option value="marketing">Marketing Tecnológico & Posicionamiento B2B</option>
                      <option value="industrialpedia">Proyecto Industrialpedia (Acceso Anticipado / Alianzas)</option>
                      <option value="cotizacion">Cotización General de Proyecto</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-slate-300">
                      Mensaje o Descripción de tu Requerimiento *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Platícanos sobre los objetivos, retos o especificaciones de tu proyecto para orientarte de forma personalizada..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950/70 border border-white/[0.1] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje a JIVOTECK</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tus datos están protegidos y nunca serán compartidos con terceros.</span>
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
