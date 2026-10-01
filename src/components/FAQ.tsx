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
      question: "¿Qué relación tiene JIVOTECK con Industrialpedia?",
      answer: "Industrialpedia es un producto propio desarrollado por JIVOTECK y actualmente es una plataforma funcional en evolución continua. Es una plataforma B2B para estructurar, consultar y comparar información técnica de componentes y refacciones industriales multi-fabricante. Además de operar como plataforma pública, demuestra nuestra capacidad técnica en arquitectura de datos industriales. Su sitio web es industrialpedia.com.mx."
    },
    {
      question: "¿JIVOTECK puede trabajar con información interna de mi empresa?",
      answer: "Sí. JIVOTECK puede desarrollar soluciones privadas para estructurar y consultar catálogos técnicos, información MRO, refacciones y documentación industrial de acuerdo con las necesidades del proyecto. El alcance se define después de analizar la estructura y calidad de los datos disponibles. Cuando un proyecto implique información confidencial, podemos trabajar bajo acuerdo de confidencialidad (NDA)."
    },
    {
      question: "¿Tengo que utilizar Industrialpedia para contratar un proyecto?",
      answer: "No. Las soluciones privadas para clientes se diseñan como entornos independientes. Industrialpedia es un producto propio desarrollado por JIVOTECK que puede utilizarse como fuente complementaria de consulta técnica cuando el proyecto lo requiera. La información privada de una empresa no se incorpora automáticamente a Industrialpedia."
    },
    {
      question: "¿Qué tipo de soluciones ofrece JIVOTECK?",
      answer: "Nos enfocamos en estructuración de datos industriales y catálogos MRO, desarrollo de software privado adaptado a procesos de información (portales de consulta, buscadores y dashboards), automatización industrial y control de procesos en planta, marketing B2B industrial y consultoría técnica para diagnóstico de sistemas."
    },
    {
      question: "¿Dónde están ubicados y cuál es el alcance de sus proyectos?",
      answer: "Nuestra sede principal se encuentra en Aguascalientes, México. Brindamos atención técnica presencial en la región y trabajamos de manera remota para empresas en todo México y el extranjero."
    },
    {
      question: "¿Cómo puedo solicitar un diagnóstico o platicar sobre mi catálogo?",
      answer: `Puedes enviarnos un mensaje mediante el formulario de contacto en esta página o escribirnos directamente a ${siteConfig.contact.primaryEmail}. Analizaremos tus requerimientos técnicos para orientarte sobre la mejor alternativa de solución.`
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
            Claridad sobre nuestro modelo de trabajo, privacidad de datos y alcance de los proyectos.
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
