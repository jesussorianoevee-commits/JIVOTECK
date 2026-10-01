import React, { useState, useMemo } from 'react';
import { 
  ArrowUpRight, 
  Search, 
  Info,
  Database
} from 'lucide-react';
import { ProjectDetailModal, ServiceDetail } from './ProjectDetailModal';

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
      status: 'Servicio Principal',
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
      status: 'A la Medida',
      badgeColor: 'bg-[#FAF8F5] text-[#13262F] border-[#D8D2C6]',
      description: 'Herramientas privadas adaptadas al flujo de trabajo real de tu equipo: catálogos técnicos internos, portales de consulta y dashboards.',
      overview: 'Cuando las plataformas comerciales genéricas no encajan con los procesos internos de planta, diseñamos y construimos software propio adaptado exactamente a las necesidades de tu organización. No vendemos un SaaS rígido; entregamos herramientas privadas con propiedad total de la solución.',
      deliverables: [
        'Catálogos técnicos internos y portales privados de consulta',
        'Buscadores internos por parámetros técnicos y familias de refacciones',
        'Dashboards operativos para supervisión de inventario crítico y compras',
        'Flujos de validación técnica y autorización de nuevos registros',
        'Módulos de administración y actualización continua de información industrial'
      ],
      specs: [
        { label: 'Entorno de despliegue', value: 'Nube dedicada o servidor interno / intranet de la empresa' },
        { label: 'Propiedad del sistema', value: 'Código fuente y base de datos 100% propiedad del cliente' },
        { label: 'Seguridad y control', value: 'Gestión de usuarios por roles y permisos de acceso' },
        { label: 'Adaptabilidad', value: 'Diseño modular según el proceso específico de tu planta' }
      ]
    },
    {
      id: 'JVT-AUT-03',
      title: 'Automatización Industrial & Control de Procesos',
      subtitle: 'Soluciones para procesos industriales, integración de controladores, sensórica y supervisión operativa.',
      category: 'Automatización',
      status: 'Activo',
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
      status: 'Disponible',
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
      title: 'Marketing Tecnológico & Comunicación B2B',
      subtitle: 'Estrategias de comunicación y presencia técnica para empresas del sector industrial y de ingeniería.',
      category: 'Marketing',
      status: 'Especialidad B2B',
      badgeColor: 'bg-[#F4F1EA] text-[#3E5C54] border-[#D8D2C6]',
      description: 'Estructuración de información comercial y técnica para presentar capacidades de ingeniería ante tomadores de decisión.',
      overview: 'Ayudamos a empresas técnicas y de manufactura a comunicar con claridad sus soluciones industriales mediante fichas de producto rigurosas, catálogos estructurados y presencia digital profesional orientada a tomadores de decisión B2B.',
      deliverables: [
        'Estructuración técnica de catálogos y hojas de especificación',
        'Narrativa de ingeniería para propuestas comerciales y técnicas',
        'Diseño de presencia web orientada al sector industrial',
        'Contenidos claros para directores de mantenimiento y compras'
      ],
      specs: [
        { label: 'Enfoque', value: 'Sector industrial, manufactura e ingeniería B2B' },
        { label: 'Lenguaje', value: 'Técnico, riguroso y libre de clichés comerciales' },
        { label: 'Entregables', value: 'Fichas técnicas, catálogos digitales y sitios web' }
      ]
    },
    {
      id: 'JVT-PRD-06',
      title: 'Industrialpedia Platform',
      subtitle: 'The Industrial Information Platform. Plataforma B2B para estructurar, consultar y comparar información técnica de componentes.',
      category: 'Industrialpedia',
      status: 'Plataforma funcional · evolución continua',
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
        { label: 'Aislamiento', value: 'Entorno 100% separado de las bases privadas de clientes' }
      ],
      isIndustrialpedia: true
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'Datos Industriales', label: 'Información y Datos' },
    { id: 'Software', label: 'Software Privado' },
    { id: 'Automatización', label: 'Automatización' },
    { id: 'Consultoría', label: 'Consultoría' },
    { id: 'Marketing', label: 'Marketing B2B' },
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
    <section id="servicios" className="py-16 sm:py-24 bg-white text-[#13262F] relative border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EAE5DC] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase bg-[#FAF8F5] text-[#2E4846] border border-[#D8D2C6] mb-2 shadow-2xs">
              <Database className="w-3.5 h-3.5 text-[#50756C]" />
              <span>CATÁLOGO DE SOLUCIONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13262F] tracking-tight font-serif">
              Capacidades & Servicios
            </h2>
            <p className="text-sm text-[#4A635B] mt-1 max-w-xl font-sans">
              Soluciones diseñadas para estructurar datos industriales, desarrollar software interno adaptado y brindar soporte técnico a la operación.
            </p>
          </div>

          <span className="text-xs font-mono text-[#638379]">
            Mostrando <strong>{filteredItems.length}</strong> de {capabilities.length} soluciones
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group bg-white rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between hover:shadow-md cursor-pointer relative overflow-hidden ${
                item.category === 'Datos Industriales'
                  ? 'border-[#2E4846] bg-gradient-to-b from-white to-[#FAF8F5] shadow-xs'
                  : item.isIndustrialpedia 
                    ? 'border-[#D8D2C6] hover:border-[#13262F] bg-gradient-to-b from-white to-[#F4F1EA]/30' 
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
