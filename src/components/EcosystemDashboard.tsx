import React, { useState } from 'react';
import { 
  Cpu, 
  Code2, 
  Compass, 
  TrendingUp, 
  CheckCircle2, 
  ArrowUpRight, 
  ExternalLink,
  Layers,
  BarChart3
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const EcosystemDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hitos' | 'validacion'>('hitos');
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      name: 'Automatización Industrial',
      percentage: 35,
      color: '#00D4FF',
      lightColor: '#E0F2FE',
      icon: Cpu,
      status: 'Activo',
      desc: 'Control de procesos industriales, sistemas SCADA, sensórica avanzada e integración de celdas robóticas.'
    },
    {
      name: 'Desarrollo de Software',
      percentage: 30,
      color: '#0284C7',
      lightColor: '#BAE6FD',
      icon: Code2,
      status: 'Activo',
      desc: 'Plataformas SaaS, arquitecturas web escalables y APIs de interconexión fabril.'
    },
    {
      name: 'Consultoría Técnica',
      percentage: 20,
      color: '#F59E0B',
      lightColor: '#FEF3C7',
      icon: Compass,
      status: 'Disponible',
      desc: 'Diagnóstico de viabilidad tecnológica, auditoría de planta y modernización de equipos.'
    },
    {
      name: 'Marketing & Estrategia',
      percentage: 15,
      color: '#8B5CF6',
      lightColor: '#EDE9FE',
      icon: TrendingUp,
      status: 'Activo',
      desc: 'Posicionamiento para el sector B2B técnico y lanzamiento de productos industriales.'
    }
  ];

  const milestones = [
    {
      phase: 'FASE 1',
      title: 'Industrialpedia: Motor de Homologación',
      category: 'Software & Datos',
      date: '2026',
      status: 'En desarrollo',
      statusColor: 'bg-amber-100 text-amber-800 border-amber-200',
      desc: 'Indexación unificada y arquitectura de comparativa técnica para componentes neumáticos y eléctricos.'
    },
    {
      phase: 'FASE 2',
      title: 'Celdas de Automatización Aguascalientes',
      category: 'Ingeniería en Planta',
      date: 'ACTIVO',
      status: 'Operativo',
      statusColor: 'bg-emerald-100 text-[#006254] border-emerald-200',
      desc: 'Integración y programación de controladores industriales con protocolos industriales estándar.'
    },
    {
      phase: 'FASE 3',
      title: 'Lanzamiento Beta Público Industrialpedia',
      category: 'Plataforma Web',
      date: 'PRÓXIMO',
      status: 'Planificado',
      statusColor: 'bg-sky-100 text-sky-800 border-sky-200',
      desc: 'Acceso directo a la plataforma oficial para ingenieros, integradores y departamentos de compras.'
    }
  ];

  const validationChecks = [
    {
      label: 'Auditoría de Requisitos en Planta',
      status: 'Validado',
      score: '100%',
      desc: 'Levantamiento exhaustivo de señales, condiciones térmicas y especificaciones del cliente.'
    },
    {
      label: 'Cumplimiento Normativo Industrial',
      status: 'Certificado',
      score: '99.5%',
      desc: 'Alineación con protocolos de seguridad en máquinas y estándares de ingeniería eléctrica.'
    },
    {
      label: 'Transferencia de Código & Confidencialidad',
      status: 'Cumplimiento Total',
      score: '100%',
      desc: 'Propiedad intelectual absoluta del cliente y contratos de confidencialidad estrictos.'
    }
  ];

  return (
    <section className="py-12 bg-[#F8FAFC] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header with Upstream Aesthetic */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-[#007362] border border-emerald-200/70 mb-2">
              <Layers className="w-3.5 h-3.5 text-[#00D4B2]" />
              <span>ECOSISTEMA INTEGRAL JIVOTECK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
              Panel de Control Tecnológico
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Monitoreo visual de nuestras 4 divisiones de ingeniería y estado de desarrollo de proyectos estratégicos.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-slate-500">Sede central:</span>
            <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs">
              Aguascalientes, Ags. México
            </span>
          </div>
        </div>

        {/* 3-Card Grid Matching Upstream Reference (Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Capabilities Distribution (Donut Chart Visual) - 4 cols */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-upstream flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                    Capacidades JIVOTECK
                  </h3>
                  <p className="text-xs text-slate-500">Distribución de especialidad técnica</p>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-emerald-50 text-[#007362] rounded border border-emerald-200/60">
                  4 PILARES
                </span>
              </div>

              {/* Donut Chart Visual */}
              <div className="flex items-center justify-center py-4 relative">
                <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 120 120">
                  {/* Background Circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="#F1F5F9"
                    strokeWidth="14"
                    fill="transparent"
                  />
                  {/* Segment 1: Automatización 35% */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="#00D4FF"
                    strokeWidth="14"
                    strokeDasharray="105.5 301.6"
                    strokeDashoffset="0"
                    fill="transparent"
                    className="transition-all duration-300 hover:opacity-90"
                  />
                  {/* Segment 2: Software 30% */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="#0284C7"
                    strokeWidth="14"
                    strokeDasharray="90.5 301.6"
                    strokeDashoffset="-105.5"
                    fill="transparent"
                    className="transition-all duration-300 hover:opacity-90"
                  />
                  {/* Segment 3: Consultoría 20% */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="#F59E0B"
                    strokeWidth="14"
                    strokeDasharray="60.3 301.6"
                    strokeDashoffset="-196"
                    fill="transparent"
                    className="transition-all duration-300 hover:opacity-90"
                  />
                  {/* Segment 4: Marketing 15% */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="#8B5CF6"
                    strokeWidth="14"
                    strokeDasharray="45.2 301.6"
                    strokeDashoffset="-256.3"
                    fill="transparent"
                    className="transition-all duration-300 hover:opacity-90"
                  />
                </svg>

                {/* Center Donut Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl font-black text-slate-900 font-sans tracking-tight">
                    100%
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Cobertura
                  </span>
                </div>
              </div>

              {/* Legend with interactive selection */}
              <div className="space-y-2 pt-2">
                {pillars.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = selectedPillar === idx;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setSelectedPillar(idx)}
                      className={`w-full text-left p-2 rounded-xl transition-all flex items-center justify-between text-xs border ${
                        isSelected 
                          ? 'bg-slate-50 border-slate-300 shadow-2xs' 
                          : 'bg-transparent border-transparent hover:bg-slate-50/60'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-2.5 h-2.5 rounded-full shrink-0" 
                          style={{ backgroundColor: item.color }}
                        ></span>
                        <Icon className="w-3.5 h-3.5 text-slate-500" />
                        <span className="font-medium text-slate-800">{item.name}</span>
                      </div>
                      <span className="font-mono font-bold text-slate-700">{item.percentage}%</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Description box of active selection */}
            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed font-sans">
              <span className="font-semibold text-slate-900 block mb-0.5">
                {pillars[selectedPillar].name}:
              </span>
              {pillars[selectedPillar].desc}
            </div>
          </div>

          {/* Card 2: Technical Pipeline & Milestones (Middle Card in Upstream) - 5 cols */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-upstream flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                    Hitos & Pipeline Técnico
                  </h3>
                  <p className="text-xs text-slate-500">Cronograma de innovación continua</p>
                </div>
                
                {/* Tab Switcher */}
                <div className="flex rounded-lg p-0.5 bg-slate-100 border border-slate-200">
                  <button
                    onClick={() => setActiveTab('hitos')}
                    className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md transition-all ${
                      activeTab === 'hitos' 
                        ? 'bg-white text-slate-900 shadow-2xs' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Hitos
                  </button>
                  <button
                    onClick={() => setActiveTab('validacion')}
                    className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md transition-all ${
                      activeTab === 'validacion' 
                        ? 'bg-white text-slate-900 shadow-2xs' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Verificación
                  </button>
                </div>
              </div>

              {/* Tab Content 1: Milestones */}
              {activeTab === 'hitos' ? (
                <div className="space-y-3">
                  {milestones.map((m) => (
                    <div 
                      key={m.phase}
                      className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#007362]/50 hover:shadow-2xs transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                            {m.phase}
                          </span>
                          <span className="text-xs font-bold text-slate-900 font-sans">
                            {m.title}
                          </span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border shrink-0 ${m.statusColor}`}>
                          {m.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-sans leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                /* Tab Content 2: Validation Checks */
                <div className="space-y-3">
                  {validationChecks.map((v) => (
                    <div 
                      key={v.label}
                      className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#007362]/50 transition-all"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900">
                          {v.label}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-emerald-50 text-[#006254] border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                          {v.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-sans">
                        {v.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Industrialpedia Direct Link Box */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                Plataforma insigne:
              </span>
              <a
                href={siteConfig.industrialpedia.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#007362] hover:text-[#00584B] hover:underline"
              >
                <span>industrialpedia.com.mx</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 3: Impact & Operational Metrics (Bar Chart Visual) - 3 cols */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-upstream flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                    Impacto Operativo
                  </h3>
                  <p className="text-xs text-slate-500">Ventajas de integración</p>
                </div>
                <BarChart3 className="w-4 h-4 text-[#007362]" />
              </div>

              {/* Stat 1 */}
              <div className="space-y-1 mb-4">
                <span className="text-[11px] font-mono uppercase text-slate-500">
                  Agilidad de Entrega
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900 font-sans tracking-tight">
                    -40%
                  </span>
                  <span className="text-xs font-mono text-emerald-600 font-bold">
                    vs método tradicional
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Arquitecturas modulares para puesta en marcha acelerada.
                </p>
              </div>

              {/* Visual Bars like Upstream Image 1 */}
              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-[11px] font-mono mb-1">
                    <span className="text-slate-600">Disponibilidad / Confiabilidad</span>
                    <span className="font-bold text-[#007362]">99.8%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#00584B] to-[#00D4B2] rounded-full" style={{ width: '99.8%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-mono mb-1">
                    <span className="text-slate-600">Estandarización de Código</span>
                    <span className="font-bold text-[#0D9488]">100%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#0D9488] to-[#10B981] rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-mono mb-1">
                    <span className="text-slate-600">Soporte y Respuesta</span>
                    <span className="font-bold text-[#F59E0B]">&lt; 24h</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#F59E0B] to-[#FDE68A] rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="mt-6 pt-3 border-t border-slate-100">
              <a
                href="#contacto"
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Solicitar Diagnóstico</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00D4B2]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
