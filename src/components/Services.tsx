import React, { useState, useMemo } from 'react';
import { 
  ArrowUpRight, 
  Search, 
  Info,
  Database,
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';
import { ProjectDetailModal, ServiceDetail } from './ProjectDetailModal';
import { siteConfig } from '../config/siteConfig';

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<ServiceDetail | null>(null);

  const capabilities: ServiceDetail[] = [
    {
      id: 'JVT-DAT-01',
      title: 'Estructuración de Datos Industriales',
      subtitle: 'Diseñamos soluciones para convertir catálogos de refacciones, información MRO y documentación técnica dispersa en estructuras organizadas, normalizadas y consultables.',
      category: 'Datos Industriales',
      status: 'Servicio Contratable',
      badgeColor: 'bg-[#13262F] text-white border-[#13262F]',
      description: 'Convertimos inventarios desorganizados, hojas de cálculo dispersas y catálogos en bases de datos técnicas normalizadas con búsqueda interna.',
      overview: 'Ayudamos a los departamentos de mantenimiento, ingeniería y compras a tomar el control de su información técnica. Desarrollamos soluciones para depurar registros duplicados, clasificar componentes por familias y atributos técnicos, normalizar marcas y códigos de parte, y vincular planos y hojas de especificaciones.',
      deliverables: [
        'Normalización de fabricantes, marcas y números de parte',
        'Clasificación técnica y organización de atributos de ingeniería',
        'Identificación y depuración de registros duplicados o inconsistentes',
        'Vinculación de manuales, fichas técnicas y esquemáticos',
        'Sistemas internos de búsqueda, consulta y filtrado',
        'Estructuración técnica compatible para futuras integraciones con ERP / CMMS'
      ],
      specs: [
        { label: 'Formatos de origen', value: 'Hojas de Excel, CSV, exportaciones de ERP/CMMS, archivos PDF' },
        { label: 'Diseño de arquitectura', value: 'Sistemas y bases de datos diseñados como entornos independientes' },
        { label: 'Trazabilidad', value: 'Historial de modificaciones y control de cambios de catálogo' },
        { label: 'Confidencialidad', value: 'Disponible bajo acuerdo de confidencialidad (NDA) cuando el proyecto lo requiera' }
      ]
    },
    {
      id: 'JVT-SFT-02',
      title: 'Desarrollo de Software para Procesos de Información',
      subtitle: 'Desarrollamos sistemas internos a la medida cuando el problema de información de una empresa requiere una herramienta propia.',
      category: 'Software',
      status: 'Servicio Contratable',
      badgeColor: 'bg-[#FAF8F5] text-[#13262F] border-[#D8D2C6]',
      description: 'Herramientas privadas adaptadas al flujo de trabajo real de tu equipo: catálogos técnicos internos, portales de consulta y dashboards.',
      overview: 'Desarrollamos sistemas privados adaptados a la realidad operativa y a la información de cada empresa. Diseñamos herramientas a la medida de tus procesos internos, con esquemas de propiedad, licencia y entrega definidos según las necesidades y alcance de cada proyecto.',
      deliverables: [
        'Catálogos técnicos internos y portales privados de consulta',
        'Buscadores internos por parámetros técnicos y familias de refacciones',
        'Dashboards operativos para supervisión de inventario crítico y compras',
        'Flujos de validación técnica y autorización de nuevos registros',
        'Módulos de administración y actualización continua de información industrial'
      ],
      specs: [
        { label: 'Entorno de despliegue', value: 'Nube dedicada o servidor interno / intranet de la empresa' },
        { label: 'Esquema de entrega', value: 'Condiciones de propiedad, licencia y entrega definidas según el alcance del proyecto' },
        { label: 'Seguridad y control', value: 'Gestión de usuarios por roles y permisos de acceso' },
        { label: 'Adaptabilidad', value: 'Diseño modular según el proceso específico de tu planta' }
      ]
    },
    {
      id: 'JVT-AUT-03',
      title: 'Automatización Industrial & Control de Procesos',
      subtitle: 'Soluciones para procesos industriales, integración de controladores, sensórica y supervisión operativa.',
      category: 'Automatización',
      status: 'Servicio Contratable',
      badgeColor: 'bg-[#F4F1EA] text-[#2E4846] border-[#D8D2C6]',
      description: 'Ingeniería aplicada para líneas de producción, monitoreo de variables de proceso y modernización de control.',
      overview: 'Diseñamos e implementamos soluciones de automatización orientadas a la confiabilidad y continuidad operativa. Integramos controladores y sistemas de monitoreo para asegurar la trazabilidad y la eficiencia de los procesos de manufactura.',
      deliverables: [
        'Lógica de control para maquinaria y procesos continuos',
        'Diseño de interfaces HMI y sistemas SCADA de supervisión',
        'Diagramas eléctricos y documentación de ingeniería normalizada',
        'Acompañamiento en puesta en marcha y capacitación técnica'
      ],
      specs: [
        { label: 'Controladores', value: 'Marcas estándar de la industria (Siemens, Rockwell, Omron)' },
        { label: 'Protocolos de comunicación', value: 'Ethernet/IP, Profinet, Modbus TCP, IO-Link' },
        { label: 'Cobertura', value: 'Presencial en región Bajío/México y soporte técnico' },
        { label: 'Documentación', value: 'Planos y manuales de operación entregados al cliente' }
      ]
    },
    {
      id: 'JVT-CON-04',
      title: 'Consultoría Técnica & Diagnóstico',
      subtitle: 'Análisis y definición de soluciones para evaluar calidad de datos, viabilidad de software y modernización de sistemas.',
      category: 'Consultoría',
      status: 'Servicio Contratable',
      badgeColor: 'bg-[#FAF8F5] text-[#50756C] border-[#D8D2C6]',
      description: 'Evaluación técnica imparcial para identificar inconsistencias en catálogos o definir la arquitectura de software necesaria.',
      overview: 'Previo a cualquier desarrollo, realizamos un diagnóstico estructurado de tus fuentes de información actuales. Analizamos la calidad de los registros, identificamos cuellos de botella en la consulta técnica y entregamos una propuesta clara de alcance.',
      deliverables: [
        'Diagnóstico de consistencia y duplicidad de catálogos técnicos',
        'Evaluación de viabilidad para desarrollo de sistemas propios',
        'Definición de requerimientos para mantenimiento e ingeniería',
        'Hoja de ruta por etapas con tiempos y prioridades claras'
      ],
      specs: [
        { label: 'Modalidad de trabajo', value: 'Remota o presencial según el alcance acordado' },
        { label: 'Tiempo de diagnóstico', value: 'Definido en función de la complejidad y volumen de la información' },
        { label: 'Entregable', value: 'Reporte técnico con hallazgos y alternativas de solución' },
        { label: 'Confidencialidad', value: 'Opción de trabajo bajo acuerdo de confidencialidad (NDA)' }
      ]
    },
    {
      id: 'JVT-MKT-05',
      title: 'Marketing B2B Industrial',
      subtitle: 'Desarrollamos estrategias de comunicación y posicionamiento para empresas que venden productos, servicios o soluciones dentro del sector industrial.',
      category: 'Marketing',
      status: 'Servicio Contratable',
      badgeColor: 'bg-[#F4F1EA] text-[#3E5C54] border-[#D8D2C6]',
      description: 'Desarrollamos estrategias de comunicación y posicionamiento para empresas que venden productos, servicios o soluciones dentro del sector industrial.',
      overview: 'Combinamos conocimiento del entorno B2B con comunicación técnica y comercial para ayudar a fabricantes, proveedores y empresas tecnológicas a presentar con claridad qué hacen, qué problema resuelven y por qué su propuesta es relevante para otras empresas.',
      deliverables: [
        'Posicionamiento B2B para empresas industriales',
        'Comunicación técnica y comercial',
        'Desarrollo y estructuración de catálogos comerciales',
        'Presentaciones y materiales para compradores industriales',
        'Estrategia de presencia digital B2B',
        'Comunicación de productos y servicios técnicos',
        'Apoyo para ferias y encuentros de negocio industriales',
        'Identidad y narrativa comercial orientada al mercado industrial'
      ],
      specs: [
        { label: 'Enfoque', value: 'Sector industrial, manufactura, proveedores y empresas tecnológicas B2B' },
        { label: 'Lenguaje', value: 'Técnico y comercial orientado a compradores y tomadores de decisión industriales' },
        { label: 'Capacidad del equipo', value: 'Equipo multidisciplinario de JIVOTECK en tecnología y comunicación comercial' },
        { label: 'Entregables', value: 'Estrategias de posicionamiento, catálogos estructurados, materiales comerciales y presencia digital' }
      ]
    },
    {
      id: 'JVT-PRD-06',
      title: 'Industrialpedia Platform',
      subtitle: 'The Industrial Information Platform. Plataforma B2B para estructurar, consultar y comparar información técnica de componentes.',
      category: 'Industrialpedia',
      status: 'Producto Propio',
      badgeColor: 'bg-[#E2DDD4] text-[#13262F] border-[#D8D2C6] font-bold',
      description: 'Producto propio desarrollado por JIVOTECK que demuestra nuestra experiencia en estructuración de información industrial a gran escala.',
      overview: 'Industrialpedia es una plataforma B2B desarrollada 100% por JIVOTECK para estructurar, consultar y comparar información técnica de componentes y refacciones industriales multi-fabricante. La experiencia técnica acumulada en su creación es la base de conocimiento que nos permite desarrollar sistemas privados adaptados a las empresas.',
      deliverables: [
        'Estructuración de componentes técnicos multi-fabricante',
        'Motor de búsqueda y cruce de números de parte industriales',
        'Fichas técnicas con atributos estandarizados de ingeniería',
        'Demostración práctica de arquitectura de datos aplicada'
      ],
      specs: [
        { label: 'Tipo de solución', value: 'Producto tecnológico propio de JIVOTECK' },
        { label: 'Estado', value: 'Plataforma funcional · evolución continua' },
        { label: 'Web oficial', value: 'https://industrialpedia.com.mx' },
        { label: 'Principio de arquitectura', value: 'Entorno independiente. La información privada de los clientes no alimenta Industrialpedia' }
      ],
      isIndustrialpedia: true
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'Datos Industriales', label: 'Datos Industriales' },
    { id: 'Software', label: 'Software Privado' },
    { id: 'Automatización', label: 'Automatización' },
    { id: 'Consultoría', label: 'Consultoría' },
    { id: 'Marketing', label: 'Marketing B2B' },
    { id: 'Industrialpedia', label: 'Industrialpedia (Producto Propio)' },
  ];

  const filteredItems = useMemo(() => {
    return capabilities.filter(item => {
      const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const clientServices = useMemo(() => {
    return filteredItems.filter(item => !item.isIndustrialpedia);
  }, [filteredItems]);

  const proprietaryProduct = useMemo(() => {
    return filteredItems.find(item => item.isIndustrialpedia);
  }, [filteredItems]);

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-white text-[#13262F] relative border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EAE5DC] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-[#FAF8F5] text-[#2E4846] border border-[#D8D2C6] mb-2 shadow-2xs">
              <Database className="w-3.5 h-3.5 text-[#50756C]" />
              <span>CATÁLOGO DE SOLUCIONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13262F] tracking-tight font-serif">
              Servicios & Capacidades
            </h2>
            <p className="text-sm text-[#4A635B] mt-1 max-w-xl font-sans">
              Servicios privados que tu empresa puede contratar y demostración de arquitectura tecnológica mediante nuestro producto propio.
            </p>
          </div>

          <span className="text-xs font-mono text-[#638379]">
            Mostrando <strong>{filteredItems.length}</strong> soluciones
          </span>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#FAF8F5] p-3 rounded-2xl border border-[#EAE5DC]">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#13262F] text-white shadow-xs'
                    : 'text-[#4A635B] hover:text-[#13262F] hover:bg-[#F4F1EA]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por palabra clave..."
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-white rounded-xl border border-[#D8D2C6] focus:border-[#2E4846] focus:outline-none focus:ring-1 focus:ring-[#2E4846] text-[#13262F] placeholder-[#8FA89B] font-sans"
            />
            <Search className="w-3.5 h-3.5 text-[#8FA89B] absolute left-3 top-2.5 pointer-events-none" />
          </div>

        </div>

        {/* SECTION 1: Servicios que una empresa puede contratar */}
        {clientServices.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#2E4846] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2E4846]"></span>
                <span>Servicios que una empresa puede contratar</span>
              </span>
              <span className="text-[11px] font-mono text-[#8FA89B]">
                Desarrollo privado y adaptado
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientServices.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`group bg-white rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between hover:shadow-md cursor-pointer relative overflow-hidden ${
                    item.category === 'Datos Industriales'
                      ? 'border-[#2E4846] bg-gradient-to-b from-white to-[#FAF8F5] shadow-xs'
                      : 'border-[#EAE5DC] hover:border-[#2E4846]'
                  }`}
                >
                  {/* Top Meta & Status */}
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EAE5DC]">
                      <span className="font-mono text-[11px] font-semibold text-[#8FA89B]">
                        {item.id}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${item.badgeColor}`}>
                        ● {item.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#13262F] group-hover:text-[#2E4846] transition-colors font-sans tracking-tight mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#4A635B] font-sans leading-relaxed line-clamp-3 mb-4">
                      {item.subtitle}
                    </p>

                    {/* Key deliverables pills */}
                    <div className="space-y-1.5">
                      {item.deliverables.slice(0, 2).map((d, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-[11px] font-mono text-[#3E5C54] bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-[#EAE5DC]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#50756C]"></span>
                          <span className="truncate">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="mt-5 pt-3 border-t border-[#EAE5DC] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#638379] flex items-center gap-1 group-hover:text-[#13262F] transition-colors">
                      <Info className="w-3.5 h-3.5" />
                      <span>
                        {item.category === 'Datos Industriales' ? 'Solicitar Diagnóstico' : 'Ver Ficha Técnica'}
                      </span>
                    </span>

                    <div className="w-7 h-7 rounded-full bg-[#F4F1EA] group-hover:bg-[#13262F] group-hover:text-white text-[#2E4846] flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: Producto Propio (Industrialpedia) - Visually Delineated */}
        {proprietaryProduct && (
          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#638379] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#50756C]" />
                <span>Producto Propio • Demostración Tecnológica</span>
              </span>
              <span className="text-[11px] font-mono text-[#8FA89B]">
                Entorno independiente
              </span>
            </div>

            <div 
              onClick={() => setSelectedItem(proprietaryProduct)}
              className="group bg-gradient-to-br from-[#FAF8F5] via-white to-[#F4F1EA] rounded-3xl border border-[#D8D2C6] hover:border-[#13262F] p-6 sm:p-8 transition-all hover:shadow-md cursor-pointer relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left Info (8 cols) */}
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#E2DDD4] text-[#13262F] border border-[#D8D2C6]">
                      ● PRODUCTO PROPIO JIVOTECK
                    </span>
                    <span className="text-xs font-mono text-[#638379]">
                      ID: {proprietaryProduct.id}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#2E4846] border border-[#D8D2C6]">
                      Plataforma funcional · evolución continua
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#13262F] tracking-tight group-hover:text-[#2E4846] transition-colors">
                    {proprietaryProduct.title}
                  </h3>

                  <p className="text-sm text-[#4A635B] font-sans leading-relaxed max-w-2xl">
                    {proprietaryProduct.subtitle}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#3E5C54]">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#EAE5DC]">
                      <Layers className="w-3.5 h-3.5 text-[#50756C]" />
                      <span>Cruce de Referencias Multi-fabricante</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#EAE5DC]">
                      <Database className="w-3.5 h-3.5 text-[#50756C]" />
                      <span>Demostración de Arquitectura de Datos</span>
                    </div>
                  </div>
                </div>

                {/* Right Actions (4 cols) */}
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-stretch lg:border-l lg:border-[#EAE5DC] lg:pl-6">
                  <a
                    href={siteConfig.industrialpedia.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-5 py-3 rounded-xl bg-[#13262F] hover:bg-[#1D3845] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Explorar Industrialpedia</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </a>

                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#F4F1EA] text-[#13262F] text-xs font-mono font-semibold uppercase tracking-wider border border-[#D8D2C6] transition-all flex items-center justify-center gap-1.5"
                  >
                    <Info className="w-3.5 h-3.5 text-[#638379]" />
                    <span>Ver Ficha del Producto</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>

      {/* Interactive Detail Modal */}
      {selectedItem && (
        <ProjectDetailModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
};
