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
      answer: "Los dueños, fundadores y desarrolladores directos de Industrialpedia somos nosotros en JIVOTECK. Industrialpedia es un producto tecnológico propietario de nuestra startup, diseñado para revolucionar la homologación, comparación técnica y simulación de componentes industriales (como FESTO, SMC y otros fabricantes líderes). Actualmente se encuentra en etapa de desarrollo activo bajo la etiqueta 'Próximamente'.",
      isImportant: true
    },
    {
      question: "¿Qué es JIVOTECK y cuál es su propuesta de valor como startup?",
      answer: "JIVOTECK es una startup tecnológica multidisciplinaria centrada en cuatro pilares: Automatización industrial, Programación de software moderno, Orientación y consultoría estratégica, y Marketing para tecnología e ingeniería. Combinamos la precisión del control físico con la agilidad del desarrollo web y cloud para resolver problemas complejos de empresas e industrias."
    },
    {
      question: "¿Qué tipo de soluciones de automatización y programación desarrollan?",
      answer: "En automatización cubrimos programación de PLCs, pantallas HMI, sistemas SCADA, integración de sensórica, robótica, redes industriales y telemetría en tiempo real. En programación desarrollamos plataformas web completas, aplicaciones a la medida, software SaaS, microservicios, bases de datos optimizadas e integraciones con APIs externas."
    },
    {
      question: "¿En qué consiste el servicio de Orientación y Consultoría?",
      answer: "Es un acompañamiento estratégico en el que evaluamos tu infraestructura tecnológica actual, identificamos cuellos de botella en tus procesos o software, y te proporcionamos una hoja de ruta con recomendaciones viables de tecnología, arquitecturas y proveedores para asegurar que tu inversión tenga un retorno medible."
    },
    {
      question: "¿Cómo ayuda su área de Marketing a empresas de tecnología?",
      answer: "A diferencia de agencias convencionales, nuestro equipo de marketing comprende el lenguaje de la ingeniería y el software. Traducimos especificaciones técnicas complejas en propuestas de valor irresistibles, posicionamiento SEO especializado y estrategias de captación B2B para comercializar productos y servicios de alta tecnología."
    },
    {
      question: "¿Cómo puedo solicitar una cotización o iniciar un proyecto?",
      answer: `Puedes enviarnos un mensaje a través del formulario de contacto en esta página o escribirnos directamente a nuestro correo oficial ${siteConfig.contact.primaryEmail} (o a ${siteConfig.contact.supportEmail}). Te responderemos para agendar una sesión inicial y analizar las necesidades de tu proyecto.`
    }
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#080C15]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
            <HelpCircle className="w-3.5 h-3.5 text-brand-cyan" />
            <span>RESPUESTAS CLARAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-slate-400">
            Todo lo que necesitas saber sobre JIVOTECK, nuestros servicios y el proyecto Industrialpedia.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-slate-900/90 border-brand-cyan/40 shadow-lg shadow-cyan-950/20' 
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-semibold transition-colors flex items-center gap-2 ${
                    isOpen ? 'text-brand-cyan' : 'text-slate-200 hover:text-white'
                  }`}>
                    {faq.isImportant && (
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    )}
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-cyan' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80 font-normal">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra contact callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 to-brand-navy/90 border border-brand-border text-center space-y-3">
          <h3 className="text-lg font-bold text-white">¿Tienes otra consulta específica?</h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Estamos disponibles para responder dudas técnicas, cotizaciones y oportunidades de colaboración.
          </p>
          <div className="pt-2">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-brand-cyan font-mono text-xs font-semibold border border-brand-cyan/30 hover:border-brand-cyan transition-all"
            >
              <span>Escribirnos Directamente</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
