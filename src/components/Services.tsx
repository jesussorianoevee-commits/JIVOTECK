import React, { useState, useMemo } from 'react';
import { 
  ArrowUpRight, 
  Search, 
  Info
} from 'lucide-react';
import { ProjectDetailModal, ServiceDetail } from './ProjectDetailModal';

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<ServiceDetail | null>(null);

  const capabilities: ServiceDetail[] = [
    {
      id: 'JVT-AUT-01',
      title: 'Automatización & Control de Procesos',
      subtitle: 'Ingeniería de control industrial, integración de sensórica, robótica y sistemas SCADA.',
      category: 'Automatización',
      status: 'Activo',
      badgeColor: 'bg-sky-50 text-[#0284C7] border-sky-200',
      description: 'Soluciones integrales de hardware y control para líneas de ensamble, celdas robotizadas y plantas de manufactura.',
      overview: 'Diseñamos e implementamos arquitecturas de automatización completas desde Aguascalientes para clientes en México e internacionalmente. Nos enfocamos en reducción de tiempos muertos, seguridad operativa y trazabilidad total.',
      deliverables: [
        'Lógica de control de procesos industriales e interconexión',
        'Diseño de interfaces HMI y sistemas SCADA de supervisión',
        'Diagramas unifilares y esquemáticos eléctricos normalizados',
        'Puesta en marcha y capacitación técnica del personal'
      ],
      specs: [
        { label: 'Controladores soportados', value: 'Siemens, Rockwell Automation, Omron' },
        { label: 'Protocolos de red', value: 'Profinet, Ethernet/IP, Modbus TCP, IO-Link' },
        { label: 'Ubicación de atención', value: 'Presencial en Bajío/México y soporte remoto' },
        { label: 'Entrega de código', value: 'Código fuente abierto y documentado al cliente' }
      ]
    },
    {
      id: 'JVT-SFT-02',
      title: 'Desarrollo de Software a la Medida',
      subtitle: 'Plataformas web empresariales, dashboards operativos, microservicios cloud y APIs seguras.',
      category: 'Software',
      status: 'Activo',
      badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200',
      description: 'Ingeniería de software moderna para digitalizar operaciones de planta, logística, inventarios y analítica técnica.',
      overview: 'Construimos software con tecnologías de última generación (React, TypeScript, Node.js, Python, PostgreSQL, Cloud). Cada sistema es escalable, seguro y optimizado para funcionar en entornos industriales exigentes.',
      deliverables: [
        'Aplicaciones web y portales de clientes de alto rendimiento',
        'Integración con bases de datos SQL y almacenes en la nube',
        'APIs REST / GraphQL para conectar ERPs y sistemas de piso',
        'Despliegue automatizado CI/CD y monitoreo 24/7'
      ],
      specs: [
        { label: 'Stack frontend', value: 'React, TypeScript, Tailwind CSS, Next.js' },
        { label: 'Stack backend', value: 'Node.js, Express, Python FastAPI, PostgreSQL' },
        { label: 'Seguridad', value: 'Autenticación JWT, RBAC, cifrado TLS 1.3' },
        { label: 'Propiedad', value: '100% código propiedad del cliente' }
      ]
    },
    {
      id: 'JVT-CON-03',
      title: 'Orientación & Consultoría Técnica',
      subtitle: 'Diagnóstico de sistemas en planta, auditoría de viabilidad tecnológica y modernización de equipos obsoletos.',
      category: 'Consultoría',
      status: 'Disponible',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      description: 'Asesoría especializada para empresas que requieren definir inversiones en tecnología, modernizar maquinaria o auditar código industrial.',
      overview: 'Analizamos a fondo los cuellos de botella en procesos de manufactura o software interno. Entregamos un diagnóstico imparcial con estimaciones de costos, riesgos y retorno de inversión claro.',
      deliverables: [
        'Informe exhaustivo de diagnóstico de infraestructura en planta',
        'Matriz de riesgos técnicos y alternativas de sustitución',
        'Hoja de ruta por fases con cronograma y presupuesto',
        'Acompañamiento en licitaciones o selección de proveedores'
      ],
      specs: [
        { label: 'Metodología', value: 'Auditoría en sitio + Levantamiento de señales' },
        { label: 'Tiempo de diagnóstico', value: 'Reporte ejecutivo en 5 a 10 días hábiles' },
        { label: 'Modalidad', value: 'Presencial o híbrida (Remota)' },
        { label: 'Confidencialidad', value: 'NDA firmado previo a cualquier levantamiento' }
      ]
    },
    {
      id: 'JVT-MKT-04',
      title: 'Marketing Tecnológico & B2B',
      subtitle: 'Posicionamiento estratégico para productos y servicios del sector industrial y tecnológico.',
      category: 'Marketing',
      status: 'Activo',
      badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
      description: 'Estrategias de comunicación orientadas a ingenieros, directores de compras y tomadores de decisiones industriales.',
      overview: 'El marketing industrial requiere lenguaje técnico riguroso y credibilidad. Diseñamos la presencia digital, la narrativa de ventas y la generación de oportunidades para empresas que venden tecnología a otras empresas.',
      deliverables: [
        'Estrategia de posicionamiento de marca y catálogo digital',
        'Narrativa técnica para fichas de producto y whitepapers',
        'Campañas dirigidas a tomadores de decisión B2B',
        'Optimización de embudos y captura de prospectos calificados'
      ],
      specs: [
        { label: 'Enfoque', value: 'B2B Técnico, Ingeniería y Manufactura' },
        { label: 'Canales', value: 'LinkedIn B2B, Búsqueda Técnica, Email Outreach' },
        { label: 'Materiales', value: 'Hojas técnicas, decks comerciales, landing pages' }
      ]
    },
    {
      id: 'JVT-PRD-05',
      title: 'Industrialpedia Platform',
      subtitle: 'The Industrial Information Platform. Plataforma inteligente de comparación y homologación de componentes industriales.',
      category: 'Industrialpedia',
      status: 'En desarrollo',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300 font-bold',
      description: 'Proyecto insignia de JIVOTECK en desarrollo activo para transformar la forma en que los ingenieros eligen componentes de automatización.',
      overview: 'Industrialpedia es una plataforma de software creada y desarrollada exclusivamente por JIVOTECK. Permite cruzar especificaciones técnicas entre marcas líderes mundiales, encontrar reemplazos directos y acceder a fichas técnicas estandarizadas.',
      deliverables: [
        'Motor de búsqueda y comparación de actuadores y válvulas',
        'Directorio unificado de fabricantes industriales',
        'Fichas técnicas normalizadas descargables',
        'Módulo de telemetría y gemelos digitales en fase de desarrollo'
      ],
      specs: [
        { label: 'Estado', value: 'En desarrollo activo (Coming Soon)' },
        { label: 'Web Oficial', value: 'https://industrialpedia.com.mx' },
        { label: 'Propiedad', value: '100% Creada y Desarrollada por JIVOTECK' },
        { label: 'Lanzamiento previsto', value: 'Fase Beta 2026' }
      ],
      isIndustrialpedia: true
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'Automatización', label: 'Automatización' },
    { id: 'Software', label: 'Software' },
    { id: 'Consultoría', label: 'Consultoría' },
    { id: 'Marketing', label: 'Marketing' },
    { id: 'Industrialpedia', label: 'Industrialpedia' },
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

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7] block mb-1">
              CATÁLOGO DE SOLUCIONES & PRODUCTOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
              Servicios e Innovación
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Explora las especialidades de ingeniería que ofrecemos para transformar tu planta y optimizar tus operaciones.
            </p>
          </div>

          <span className="text-xs font-mono text-slate-500">
            Mostrando <strong>{filteredItems.length}</strong> de {capabilities.length} soluciones
          </span>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-slate-50 p-3 rounded-2xl border border-slate-200">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#0284C7] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
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
              placeholder="Filtrar por palabra clave..."
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-white rounded-xl border border-slate-200 focus:border-[#0284C7] focus:outline-none focus:ring-1 focus:ring-[#0284C7] text-slate-700 placeholder-slate-400 font-sans"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          </div>

        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group bg-white rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between hover:shadow-md cursor-pointer relative overflow-hidden ${
                item.isIndustrialpedia 
                  ? 'border-amber-200 hover:border-amber-400 bg-gradient-to-b from-white to-amber-50/20' 
                  : 'border-slate-200 hover:border-[#0284C7]'
              }`}
            >
              {/* Top Meta & Status */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <span className="font-mono text-[11px] font-semibold text-slate-400">
                    {item.id}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${item.badgeColor}`}>
                    ● {item.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors font-sans tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3 mb-4">
                  {item.subtitle}
                </p>

                {/* Key deliverables pills */}
                <div className="space-y-1.5">
                  {item.deliverables.slice(0, 2).map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-[11px] font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]"></span>
                      <span className="truncate">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1 group-hover:text-[#0284C7] transition-colors">
                  <Info className="w-3.5 h-3.5" />
                  <span>Ver Ficha Técnica</span>
                </span>

                <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-[#0284C7] group-hover:text-white text-slate-500 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

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
