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
      question: "¿Qué es JIVOTECK?",
      answer: "JIVOTECK es un corporativo tecnológico mexicano enfocado en crear, desarrollar y operar proyectos y marcas empresariales con propósito. Actuamos como la empresa matriz que respalda con estrategia, tecnología, gestión y desarrollo de negocio iniciativas como Industrialpedia y nuevos proyectos en gestación."
    },
    {
      question: "¿Qué relación existe entre JIVOTECK e Industrialpedia?",
      answer: "Industrialpedia es una marca y plataforma tecnológica desarrollada y operada 100% por JIVOTECK. Es una plataforma B2B para estructurar, consultar y comparar información técnica de componentes y refacciones industriales multi-fabricante. Su sitio oficial es industrialpedia.com.mx."
    },
    {
      question: "¿JIVOTECK vende servicios de software como agencia?",
      answer: "No funcionamos como una agencia tradicional ni ofrecemos un catálogo genérico de servicios. Las capacidades tecnológicas, de estructuración de información y desarrollo de software se articulan principalmente a través de iniciativas y productos propios del ecosistema, como Industrialpedia, o mediante alianzas y proyectos estratégicos del corporativo."
    },
    {
      question: "¿Cuál es la entidad legal y de facturación?",
      answer: "JIVOTECK es la empresa corporativa y la entidad jurídica y de facturación oficial para todos los proyectos, marcas y acuerdos comerciales del ecosistema."
    },
    {
      question: "¿Dónde está ubicada la empresa?",
      answer: "Nuestra sede principal se encuentra en Aguascalientes, México. Desde aquí dirigimos, desarrollamos y operamos nuestras iniciativas tecnológicas con alcance y proyección nacional e internacional."
    },
    {
      question: "¿Cómo puedo establecer contacto o presentar una propuesta de colaboración?",
      answer: `Puedes comunicarte directamente con nuestro equipo directivo a través del formulario de vinculación en esta página o escribiéndonos a ${siteConfig.contact.primaryEmail}. Estamos abiertos a dialogar sobre propuestas empresariales, alianzas y vinculación con nuestro ecosistema.`
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
            Claridad sobre el rol corporativo de JIVOTECK, nuestro ecosistema de proyectos y modelo operativo.
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
