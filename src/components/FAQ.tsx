import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
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
      answer: "Los dueños, fundadores y desarrolladores directos de Industrialpedia somos nosotros en JIVOTECK. Es un producto tecnológico propio de nuestra startup, concebido para revolucionar la búsqueda y homologación técnica de componentes industriales. Actualmente se encuentra en fase de desarrollo activo ('Coming Soon') y su sitio oficial es industrialpedia.com.mx."
    },
    {
      question: "¿Qué servicios y áreas cubre JIVOTECK como startup?",
      answer: "Nuestras capacidades abarcan 4 pilares: Automatización Industrial (control de procesos, sensórica avanzada, robótica y sistemas SCADA), Desarrollo de Software a la Medida (plataformas web, cloud y APIs seguras), Orientación & Consultoría Técnica (auditoría en planta y dirección de proyectos), y Marketing Tecnológico B2B (narrativa y posicionamiento para soluciones de ingeniería)."
    },
    {
      question: "¿Dónde están ubicados y cuál es su alcance de trabajo?",
      answer: "Nuestra sede principal se encuentra en Aguascalientes, México. Atendemos proyectos de manera presencial en la región y de forma remota/en línea para clientes y empresas en todo México e internacionalmente."
    },
    {
      question: "¿Cómo puedo solicitar una cotización o hablar con el equipo?",
      answer: `Puedes enviarnos un mensaje mediante el formulario de contacto en esta página o escribirnos directamente a ${siteConfig.contact.primaryEmail}. Te responderemos a la brevedad para entender tus requerimientos y diseñar una propuesta sin costo inicial.`
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#EAE5DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-2 border-b border-[#EAE5DC] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-white text-[#2E4846] border border-[#D8D2C6] shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#50756C]" />
            <span>RESPUESTAS FRECUENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#13262F] tracking-tight font-serif">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm text-[#4A635B] font-sans">
            Claridad sobre nuestro modelo de trabajo, propiedad de proyectos y alcance tecnológico.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#2E4846] bg-[#F4F1EA]/60 shadow-xs' 
                    : 'border-[#EAE5DC] bg-white hover:border-[#D8D2C6]'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors font-sans ${
                    isOpen ? 'text-[#13262F]' : 'text-[#3E5C54] hover:text-[#13262F]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#13262F] text-white' : 'bg-[#F4F1EA] text-[#2E4846]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-[#4A635B] text-xs sm:text-sm leading-relaxed border-t border-[#EAE5DC] font-sans">
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
