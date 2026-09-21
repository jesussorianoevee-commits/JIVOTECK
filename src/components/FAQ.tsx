import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FAQItem {
  question: string;
  answer: string;
  isImportant?: boolean;
}

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First one open by default

  const faqs: FAQItem[] = [
    {
      question: "¿Quiénes son los dueños y creadores de Industrialpedia?",
      answer: "Los dueños, fundadores y desarrolladores directos de Industrialpedia somos nosotros en JIVOTECK. Es un proyecto propio de nuestra startup, concebido para revolucionar la homologación y comparación técnica entre fabricantes de automatización como FESTO, SMC y otras marcas líderes. Actualmente está en desarrollo bajo la modalidad 'Próximamente'.",
      isImportant: true
    },
    {
      question: "¿Qué es JIVOTECK y cuál es su propuesta como startup?",
      answer: "JIVOTECK es una startup tecnológica integral que ofrece soluciones en cuatro áreas esenciales: Programación de software moderno, Automatización de procesos, Orientación técnica estratégica y Marketing para negocios de base tecnológica. Conectamos el rigor de la ingeniería con la agilidad y calidad del desarrollo digital."
    },
    {
      question: "¿Qué tipo de soluciones en software y automatización desarrollan?",
      answer: "Desarrollamos aplicaciones web a la medida, plataformas en la nube, sistemas de gestión, APIs e integraciones de bases de datos. En el área de automatización programamos PLCs, pantallas de control, sistemas SCADA, redes industriales y telemetría de procesos."
    },
    {
      question: "¿En qué consiste el servicio de Orientación y Consultoría?",
      answer: "Es una asesoría cercana donde analizamos tus retos operativos o de sistemas, evaluamos la viabilidad técnica de tus ideas y te presentamos una propuesta clara con tecnologías recomendadas, tiempos y costos transparentes para tu proyecto."
    },
    {
      question: "¿Cómo funciona el área de Marketing Tecnológico?",
      answer: "Ayudamos a empresas de tecnología, ingeniería e industria a comunicar su propuesta de valor con un lenguaje profesional y técnico adecuado. Desarrollamos estrategias digitales, posicionamiento y captación de clientes B2B que generan resultados comprobables."
    },
    {
      question: "¿Cómo puedo solicitar una cotización o platicar con el equipo?",
      answer: `Puedes enviarnos un mensaje mediante el formulario de contacto en esta página o escribirnos directamente a ${siteConfig.contact.primaryEmail}. Nos pondremos en contacto contigo en menos de 24 horas para agendar una sesión inicial sin costo.`
    }
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#0E131F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-white/[0.08] text-xs font-medium text-slate-300">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span>RESPUESTAS CLARAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-slate-300">
            Conoce más sobre cómo trabajamos, nuestros servicios y el proyecto Industrialpedia.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-slate-900/90 border-indigo-500/40 shadow-xl shadow-indigo-950/20' 
                    : 'bg-slate-900/50 border-white/[0.08] hover:border-white/[0.15]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-semibold transition-colors flex items-center gap-2.5 ${
                    isOpen ? 'text-indigo-300' : 'text-slate-200 hover:text-white'
                  }`}>
                    {faq.isImportant && (
                      <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                    )}
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-indigo-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/[0.06] font-normal">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/30 border border-white/[0.08] text-center space-y-3">
          <h3 className="text-lg font-bold text-white">¿Tienes alguna duda específica sobre tu proyecto?</h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Estamos disponibles para analizar tus requerimientos y orientarte sin compromiso.
          </p>
          <div className="pt-2">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all"
            >
              <span>Escribir al Equipo</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
