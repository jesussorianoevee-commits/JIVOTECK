import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "¿Quiénes son los dueños y desarrolladores de Industrialpedia?",
      answer: "Los dueños, fundadores y desarrolladores directos de Industrialpedia somos nosotros en JIVOTECK. Es un producto tecnológico propio de nuestra startup, diseñado para revolucionar el acceso y homologación de información de componentes industriales. Actualmente se encuentra en fase de desarrollo activo ('Coming Soon')."
    },
    {
      question: "¿Qué servicios y áreas cubre JIVOTECK como startup?",
      answer: "Nuestras capacidades abarcan 4 pilares: Programación & Software a la Medida (plataformas web, cloud, APIs), Automatización Inteligente (PLCs, control de procesos, sensórica, IoT), Orientación & Consultoría Técnica (diagnóstico y dirección estratégica), y Marketing Tecnológico B2B (narrativa y posicionamiento para empresas de tecnología e ingeniería)."
    },
    {
      question: "¿Dónde están ubicados y cuál es su alcance de trabajo?",
      answer: "Nuestra sede principal se encuentra en Aguascalientes, México. Atendemos proyectos de manera presencial en la región y de forma remota/en línea para clientes y empresas en todo México e internacionalmente."
    },
    {
      question: "¿Cómo puedo solicitar una cotización o hablar con el equipo?",
      answer: `Puedes enviarnos un mensaje mediante el formulario de contacto oficial o escribirnos directamente a ${siteConfig.contact.primaryEmail}. Te responderemos a la brevedad para entender tus requerimientos sin costo inicial.`
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-2 border-b border-slate-200 pb-6">
          <div className="font-mono text-xs uppercase tracking-widest text-slate-500 font-semibold">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-sans">
            Preguntas Frecuentes
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className={`text-base sm:text-lg font-semibold transition-colors ${
                    isOpen ? 'text-[#0099CC]' : 'text-slate-900 hover:text-slate-950'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0099CC]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 font-normal">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
