import React, { useState } from 'react';
import { 
  Database, 
  Code2, 
  Cpu, 
  Compass, 
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
      name: 'Información Industrial',
      sub: 'Estructuración y normalización',
      badge: 'Servicio Principal',
      color: '#13262F',
      lightColor: '#FAF8F5',
      icon: Database,
      desc: 'Normalización de catálogos MRO, depuración de registros duplicados, clasificación técnica y cruce de números de parte.'
    },
    {
      name: 'Software Privado',
      sub: 'Sistemas adaptados a procesos internos',
      badge: 'A la Medida',
      color: '#2E4846',
      lightColor: '#FAF8F5',
      icon: Code2,
      desc: 'Portales de consulta técnica, buscadores internos, dashboards y herramientas privadas adaptadas a cada empresa.'
    },
    {
      name: 'Automatización Industrial',
      sub: 'Soluciones para procesos industriales',
      badge: 'Ingeniería en Planta',
      color: '#50756C',
      lightColor: '#FAF8F5',
      icon: Cpu,
      desc: 'Control de procesos industriales, monitoreo operativo, sensórica y acompañamiento técnico en planta.'
    },
    {
      name: 'Consultoría Técnica',
      sub: 'Análisis y definición de soluciones',
      badge: 'Diagnóstico & Viabilidad',
      color: '#8FA89B',
      lightColor: '#FAF8F5',
      icon: Compass,
      desc: 'Diagnóstico inicial de la calidad y consistencia de datos, evaluación de requerimientos y hojas de ruta técnicas.'
    }
  ];

  const milestones = [
    {
      phase: 'PRODUCTO PROPIO',
      title: 'Industrialpedia: Plataforma B2B',
      category: 'Información Industrial',
      status: 'Funcional · Evolución',
      statusColor: 'bg-[#F4F1EA] text-[#2E4846] border-[#D8D2C6]',
      desc: 'Estructuración, consulta y comparación técnica de componentes y refacciones industriales multi-fabricante.'
    },
    {
      phase: 'SOLUCIONES PRIVADAS',
      title: 'Sistemas Internos de Consulta',
      category: 'Software a la Medida',
      status: 'Desarrollo Adaptado',
      statusColor: 'bg-[#FAF8F5] text-[#13262F] border-[#D8D2C6]',
      desc: 'Desarrollo de buscadores y catálogos privados adaptados a la información técnica de cada cliente.'
    },
    {
      phase: 'INGENIERÍA',
      title: 'Normalización de Catálogos MRO',
      category: 'Datos Industriales',
      status: 'Servicio Activo',
      statusColor: 'bg-[#E2DDD4] text-[#2E4846] border-[#D8D2C6]',
      desc: 'Estandarización de fabricantes, números de parte y preparación para integraciones con ERP / CMMS.'
    }
  ];

  const validationChecks = [
    {
      label: 'Diagnóstico de Calidad de Datos',
      status: 'Metodología Técnica',
      desc: 'Revisión preliminar de consistencia, campos duplicados y atributos faltantes antes del desarrollo.'
    },
    {
      label: 'Confidencialidad y Entornos Seguros',
      status: 'Acuerdo NDA',
      desc: 'Bases de datos privadas y aisladas. La información técnica de los clientes nunca alimenta entornos públicos.'
    },
    {
      label: 'Arquitectura Preparada para ERP/CMMS',
      status: 'Diseño Compatible',
      desc: 'Estructuración ordenada para facilitar futuras conexiones o exportaciones con sistemas empresariales.'
    }
  ];

  return (
    <section className="py-16 bg-[#FAF8F5] border-y border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-white text-[#2E4846] border border-[#D8D2C6] mb-2 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#50756C]" />
              <span>ECOSISTEMA INTEGRAL JIVOTECK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#13262F] tracking-tight font-serif">
              Especialidades & Modelo de Trabajo
            </h2>
            <p className="text-sm text-[#4A635B] mt-1 max-w-xl font-sans">
              Capacidades técnicas complementarias para estructurar información, crear herramientas privadas y dar soporte a la operación industrial.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-[#638379]">Sede:</span>
            <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-white border border-[#D8D2C6] text-[#13262F] shadow-2xs">
              Aguascalientes, México
            </span>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Qualitative Capabilities Distribution (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-[#EAE5DC] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3 mb-4">
                <div>
                  <h3 className="text-sm font-bold text-[#13262F] uppercase tracking-[0.15em] font-mono">
                    Capacidades JIVOTECK
                  </h3>
                  <p className="text-xs text-[#638379]">Especialidades de ingeniería</p>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#F4F1EA] text-[#2E4846] rounded border border-[#D8D2C6]">
                  4 ÁREAS
                </span>
              </div>

              {/* Qualitative Quadrant Graphic (Replacing arbitrary percentages) */}
              <div className="flex items-center justify-center py-4 relative">
                <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 120 120">
                  {/* Quadrant 1: Información Industrial */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="#13262F"
                    strokeWidth="12"
                    strokeDasharray="72 301.6"
                    strokeDashoffset="0"
                    fill="transparent"
                  />
                  {/* Quadrant 2: Software Privado */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="#2E4846"
                    strokeWidth="12"
                    strokeDasharray="72 301.6"
                    strokeDashoffset="-75.4"
                    fill="transparent"
                  />
                  {/* Quadrant 3: Automatización */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="#50756C"
                    strokeWidth="12"
                    strokeDasharray="72 301.6"
                    strokeDashoffset="-150.8"
                    fill="transparent"
                  />
                  {/* Quadrant 4: Consultoría Técnica */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="#8FA89B"
                    strokeWidth="12"
                    strokeDasharray="72 301.6"
                    strokeDashoffset="-226.2"
                    fill="transparent"
                  />
                </svg>

                {/* Center Badge */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-sm font-bold font-serif text-[#13262F] tracking-wide uppercase">
                    JIVOTECK
                  </span>
                  <span className="text-[9px] font-mono text-[#638379] uppercase tracking-wider">
                    Ecosistema
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
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between text-xs border ${
                        isSelected 
                          ? 'bg-[#F4F1EA] border-[#D8D2C6] shadow-2xs' 
                          : 'bg-transparent border-transparent hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-2.5 h-2.5 rounded-full shrink-0" 
                          style={{ backgroundColor: item.color }}
                        ></span>
                        <Icon className="w-3.5 h-3.5 text-[#50756C]" />
                        <div>
                          <span className="font-semibold text-[#13262F] block leading-tight">{item.name}</span>
                          <span className="text-[10px] text-[#638379] font-sans block">{item.sub}</span>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] font-semibold text-[#2E4846] bg-white px-2 py-0.5 rounded border border-[#EAE5DC]">
                        {item.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Pillar Brief */}
            <div className="mt-4 pt-3 border-t border-[#EAE5DC] text-xs text-[#4A635B] font-sans">
              <span className="font-mono font-bold text-[#13262F] block mb-0.5">
                {pillars[selectedPillar].name} — {pillars[selectedPillar].sub}:
              </span>
              {pillars[selectedPillar].desc}
            </div>
          </div>

          {/* Card 2: Technical Pipeline & Qualitative Verification - 5 cols */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-[#EAE5DC] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3 mb-4">
                <div>
                  <h3 className="text-sm font-bold text-[#13262F] uppercase tracking-[0.15em] font-mono">
                    Alcance & Verificación
                  </h3>
                  <p className="text-xs text-[#638379]">Metodología y estado de proyectos</p>
                </div>
                
                {/* Tab Switcher */}
                <div className="flex rounded-lg p-0.5 bg-[#FAF8F5] border border-[#D8D2C6]">
                  <button
                    onClick={() => setActiveTab('hitos')}
                    className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md transition-all ${
                      activeTab === 'hitos' 
                        ? 'bg-[#13262F] text-white shadow-2xs' 
                        : 'text-[#4A635B] hover:text-[#13262F]'
                    }`}
                  >
                    Soluciones
                  </button>
                  <button
                    onClick={() => setActiveTab('validacion')}
                    className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md transition-all ${
                      activeTab === 'validacion' 
                        ? 'bg-[#13262F] text-white shadow-2xs' 
                        : 'text-[#4A635B] hover:text-[#13262F]'
                    }`}
                  >
                    Verificación
                  </button>
                </div>
              </div>

              {/* Tab Content 1: Soluciones & Pipeline */}
              {activeTab === 'hitos' ? (
                <div className="space-y-3">
                  {milestones.map((m, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl border border-[#EAE5DC] bg-[#FAF8F5] hover:border-[#2E4846] transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white text-[#13262F] border border-[#D8D2C6]">
                            {m.phase}
                          </span>
                          <span className="text-xs font-bold text-[#13262F] font-sans">
                            {m.title}
                          </span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border shrink-0 ${m.statusColor}`}>
                          {m.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#4A635B] font-sans leading-relaxed">
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
                      className="p-3.5 rounded-xl border border-[#EAE5DC] bg-[#FAF8F5] hover:border-[#2E4846] transition-all"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-[#13262F]">
                          {v.label}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-white text-[#2E4846] border border-[#D8D2C6]">
                          <CheckCircle2 className="w-3 h-3 text-[#50756C]" />
                          {v.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#4A635B] font-sans">
                        {v.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Industrialpedia Direct Link Box */}
            <div className="mt-4 pt-3 border-t border-[#EAE5DC] flex items-center justify-between">
              <span className="text-xs font-mono text-[#638379]">
                Demostración de arquitectura:
              </span>
              <a
                href={siteConfig.industrialpedia.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#2E4846] hover:text-[#13262F] hover:underline"
              >
                <span>industrialpedia.com.mx</span>
                <ExternalLink className="w-3 h-3 text-[#2E4846]" />
              </a>
            </div>
          </div>

          {/* Card 3: Enfoque Operativo (Qualitative, no invented numbers) - 3 cols */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 border border-[#EAE5DC] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3 mb-4">
                <div>
                  <h3 className="text-sm font-bold text-[#13262F] uppercase tracking-[0.15em] font-mono">
                    Enfoque Operativo
                  </h3>
                  <p className="text-xs text-[#638379]">Principios de solución</p>
                </div>
                <BarChart3 className="w-4 h-4 text-[#2E4846]" />
              </div>

              {/* Core Feature 1 */}
              <div className="space-y-1 mb-4 p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#638379] block">
                  Modelo de Software
                </span>
                <div className="text-base font-bold font-serif text-[#13262F]">
                  Privado & Adaptado
                </div>
                <p className="text-xs text-[#4A635B] font-sans">
                  Herramientas creadas para resolver tu flujo particular, sin ataduras a SaaS genéricos.
                </p>
              </div>

              {/* Qualitative Points */}
              <div className="space-y-3 pt-1">
                <div className="p-2.5 rounded-xl border border-[#EAE5DC] bg-white">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-[#3E5C54] font-medium">Calidad de Datos</span>
                    <span className="font-mono text-[10px] font-bold text-[#2E4846] bg-[#F4F1EA] px-1.5 py-0.5 rounded">
                      Normalizado
                    </span>
                  </div>
                  <p className="text-[11px] text-[#638379]">Depuración de inconsistencias y duplicados.</p>
                </div>

                <div className="p-2.5 rounded-xl border border-[#EAE5DC] bg-white">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-[#3E5C54] font-medium">Propiedad Intelectual</span>
                    <span className="font-mono text-[10px] font-bold text-[#2E4846] bg-[#F4F1EA] px-1.5 py-0.5 rounded">
                      100% Cliente
                    </span>
                  </div>
                  <p className="text-[11px] text-[#638379]">Código y datos bajo control total de tu empresa.</p>
                </div>

                <div className="p-2.5 rounded-xl border border-[#EAE5DC] bg-white">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-[#3E5C54] font-medium">Atención Técnica</span>
                    <span className="font-mono text-[10px] font-bold text-[#2E4846] bg-[#F4F1EA] px-1.5 py-0.5 rounded">
                      Directa
                    </span>
                  </div>
                  <p className="text-[11px] text-[#638379]">Comunicación directa con los ingenieros a cargo.</p>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="mt-5 pt-3 border-t border-[#EAE5DC]">
              <a
                href="#contacto"
                className="w-full py-2.5 px-3 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Solicitar Diagnóstico</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
