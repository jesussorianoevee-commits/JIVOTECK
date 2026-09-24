import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Code2, Compass, TrendingUp, Layers, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  category: 'Automatización' | 'Software' | 'Consultoría' | 'Marketing' | 'Industrialpedia';
  status: 'Activo' | 'En desarrollo' | 'Disponible';
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
      case 'Automatización': return Cpu;
      case 'Software': return Code2;
      case 'Consultoría': return Compass;
      case 'Marketing': return TrendingUp;
      default: return Layers;
    }
  };

  const IconComponent = getCategoryIcon(item.category);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner with Upstream / Image 2 aesthetic */}
        <div className="relative bg-gradient-to-r from-[#00483D] via-[#006254] to-[#0A2E28] p-6 sm:p-8 text-white">
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 mb-3">
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

          <p className="text-sm text-emerald-100 max-w-xl font-sans">
            {item.subtitle}
          </p>

          {/* Category Tag & Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 text-emerald-200 backdrop-blur-xs">
              <IconComponent className="w-3.5 h-3.5" />
              <span>{item.category}</span>
            </span>
            <span className="text-slate-300">
              ID: {item.id}
            </span>
          </div>
        </div>

        {/* Tab Navigation (Inspired directly by Image 2: Overview, Documents, Events) */}
        <div className="flex border-b border-slate-200 px-6 sm:px-8 bg-slate-50 gap-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all font-mono ${
              activeTab === 'overview'
                ? 'border-[#007362] text-[#007362]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Visión General
          </button>
          <button
            onClick={() => setActiveTab('deliverables')}
            className={`py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all font-mono ${
              activeTab === 'deliverables'
                ? 'border-[#007362] text-[#007362]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Alcance & Entregables
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all font-mono ${
              activeTab === 'specs'
                ? 'border-[#007362] text-[#007362]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Especificaciones Técnicas
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 font-sans">
          
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-500 mb-1">
                  Resumen Ejecutivo
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {item.overview}
                </p>
              </div>

              {item.isIndustrialpedia && (
                <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 via-emerald-50 to-white border border-amber-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-800 uppercase">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>PROYECTO PROPIEDAD DE JIVOTECK</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Industrialpedia: The Industrial Information Platform
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Industrialpedia es una plataforma de software desarrollada 100% por el equipo de JIVOTECK orientada a la ingeniería de compras, mantenimiento y proyectos para comparar y seleccionar componentes de automatización industrial.
                  </p>
                  <a
                    href={siteConfig.industrialpedia.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#007362] hover:bg-[#00584B] text-white text-xs font-mono font-bold rounded-xl transition-all shadow-sm"
                  >
                    <span>Abrir industrialpedia.com.mx</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          )}

          {activeTab === 'deliverables' && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-500 mb-2">
                Entregables de Ingeniería Incluidos
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.deliverables.map((d, index) => (
                  <div key={index} className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#007362] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-500 mb-2">
                Ficha Técnica & Parámetros
              </h4>
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-white">
                {item.specs.map((s, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3.5 text-xs">
                    <span className="font-mono text-slate-500">{s.label}</span>
                    <span className="font-semibold text-slate-900">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate-500 text-center sm:text-left">
            ¿Requieres este desarrollo para tu planta o empresa?
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-mono font-semibold text-slate-700 hover:bg-slate-200/70 rounded-xl border border-slate-300 transition-colors"
            >
              Cerrar
            </button>
            <a
              href="#contacto"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#007362] hover:bg-[#00584B] rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Cotizar con JIVOTECK</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
