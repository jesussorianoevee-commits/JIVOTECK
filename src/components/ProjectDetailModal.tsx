import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Code2, Compass, TrendingUp, Layers, ArrowRight, Database } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  category: 'Datos Industriales' | 'Software' | 'Automatización' | 'Consultoría' | 'Marketing' | 'Industrialpedia';
  status: string;
  badgeColor: string;
  description: string;
  overview: string;
  deliverables: string[];
  specs: { label: string; value: string }[];
  isIndustrialpedia?: boolean;
}

interface ProjectDetailModalProps {
  item: ServiceDetail | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ item, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'deliverables' | 'specs'>('overview');

  if (!item) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Datos Industriales': return Database;
      case 'Software': return Code2;
      case 'Automatización': return Cpu;
      case 'Consultoría': return Compass;
      case 'Marketing': return TrendingUp;
      default: return Layers;
    }
  };

  const IconComponent = getCategoryIcon(item.category);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#EAE5DC] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner with Brand Pine & Sage aesthetic */}
        <div className="relative bg-gradient-to-r from-[#13262F] via-[#1D3845] to-[#2E4846] p-6 sm:p-8 text-white">
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8FA89B_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#8FA89B] mb-3">
            <span>JIVOTECK</span>
            <span>/</span>
            <span>SOLUCIONES</span>
            <span>/</span>
            <span className="text-white font-bold">{item.id}</span>
          </div>

          {/* Title & Status */}
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans">
              {item.title}
            </h2>
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${item.badgeColor}`}>
              ● {item.status}
            </span>
          </div>

          <p className="text-sm text-[#E2DDD4] max-w-xl font-sans">
            {item.subtitle}
          </p>

          {/* Category Tag & Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 text-[#E2DDD4] backdrop-blur-xs">
              <IconComponent className="w-3.5 h-3.5" />
              <span>{item.category}</span>
            </span>
            <span className="text-[#8FA89B]">
              ID: {item.id}
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#EAE5DC] px-6 sm:px-8 bg-[#FAF8F5] gap-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all font-mono ${
              activeTab === 'overview'
                ? 'border-[#2E4846] text-[#13262F]'
                : 'border-transparent text-[#638379] hover:text-[#13262F]'
            }`}
          >
            Visión General
          </button>
          <button
            onClick={() => setActiveTab('deliverables')}
            className={`py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all font-mono ${
              activeTab === 'deliverables'
                ? 'border-[#2E4846] text-[#13262F]'
                : 'border-transparent text-[#638379] hover:text-[#13262F]'
            }`}
          >
            Alcance & Entregables
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all font-mono ${
              activeTab === 'specs'
                ? 'border-[#2E4846] text-[#13262F]'
                : 'border-transparent text-[#638379] hover:text-[#13262F]'
            }`}
          >
            Parámetros de Trabajo
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 font-sans">
          
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC]">
                <h4 className="text-xs font-mono font-bold uppercase text-[#638379] mb-1">
                  Resumen Ejecutivo
                </h4>
                <p className="text-sm text-[#3E5C54] leading-relaxed">
                  {item.overview}
                </p>
              </div>

              {item.isIndustrialpedia && (
                <div className="p-5 rounded-2xl bg-[#F4F1EA] border border-[#D8D2C6] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2E4846] uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#50756C]"></span>
                    <span>PRODUCTO PROPIO DE JIVOTECK</span>
                  </div>
                  <h4 className="text-base font-bold text-[#13262F]">
                    Industrialpedia: The Industrial Information Platform
                  </h4>
                  <p className="text-xs text-[#3E5C54] leading-relaxed">
                    Industrialpedia es una plataforma B2B desarrollada por JIVOTECK para estructurar, consultar y comparar información técnica de componentes y refacciones industriales. La experiencia tecnológica desarrollada para Industrialpedia sirve como base de conocimiento para crear soluciones privadas adaptadas a cada empresa.
                  </p>
                  <p className="text-xs text-[#638379] font-mono leading-relaxed">
                    * Principio de arquitectura: Las soluciones privadas para clientes se diseñan como entornos independientes. La información privada de una empresa no se incorpora automáticamente a Industrialpedia.
                  </p>
                  <a
                    href={siteConfig.industrialpedia.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#13262F] hover:bg-[#1D3845] text-white text-xs font-mono font-bold rounded-xl transition-all shadow-xs"
                  >
                    <span>Explorar industrialpedia.com.mx</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          )}

          {activeTab === 'deliverables' && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase text-[#638379] mb-2">
                Alcance y Capacidades Incluidas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.deliverables.map((d, index) => (
                  <div key={index} className="p-3 rounded-xl border border-[#EAE5DC] bg-[#FAF8F5] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E4846] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#3E5C54] font-medium">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase text-[#638379] mb-2">
                Especificaciones & Parámetros
              </h4>
              <div className="divide-y divide-[#EAE5DC] border border-[#EAE5DC] rounded-2xl overflow-hidden bg-white">
                {item.specs.map((s, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3.5 text-xs">
                    <span className="font-mono text-[#638379]">{s.label}</span>
                    <span className="font-semibold text-[#13262F]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#FAF8F5] border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-[#638379] text-center sm:text-left">
            ¿Deseas evaluar este requerimiento para tu empresa?
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-mono font-semibold text-[#3E5C54] hover:bg-[#EAE5DC] rounded-xl border border-[#D8D2C6] transition-colors"
            >
              Cerrar
            </button>
            <a
              href="#contacto"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#13262F] hover:bg-[#1D3845] rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>Platicar sobre mi proyecto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
