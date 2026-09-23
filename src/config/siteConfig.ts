export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  contact: {
    primaryEmail: string;
    supportEmail: string;
    location: string;
    schedule: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  industrialpedia: {
    websiteUrl: string;
    status: string;
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    ownershipNote: string;
    teaserFeatures: string[];
  };
}

export const siteConfig: SiteConfig = {
  name: "JIVOTECK",
  tagline: "Startup de Soluciones en Software, Automatización & Marketing",
  description: "Convergencia de alta ingeniería de automatización, desarrollo de software a medida, consultoría técnica y marketing estratégico. Creadores y propietarios oficiales de Industrialpedia.",
  contact: {
    primaryEmail: "contacto@jivoteck.com",
    supportEmail: "contacto@jivoteck.com",
    location: "Aguascalientes, México • Cobertura Nacional e Internacional",
    schedule: "Lunes a Viernes de 9:00 a 18:00 (Hora Centro de México)"
  },
  social: {
    github: "https://github.com/jesussorianoevee-commits/JIVOTECK",
    linkedin: "#",
    twitter: "#",
    instagram: "#"
  },
  industrialpedia: {
    websiteUrl: "https://industrialpedia.com.mx",
    status: "En desarrollo activo",
    badge: "Coming Soon",
    title: "Industrialpedia",
    subtitle: "The Industrial Information Platform",
    description: "Plataforma de información y comparación técnica inteligente para componentes de automatización industrial.",
    ownershipNote: "Proyecto de desarrollo original concebido, desarrollado y respaldado al 100% por JIVOTECK.",
    teaserFeatures: [
      "Homologador Inteligente de Componentes Neumáticos y Electrónicos",
      "Simulador de Gemelos Digitales y Curvas de Rendimiento",
      "Matriz de Comparativa Técnica en Tiempo Real",
      "Directorio Unificado de Fabricantes y Especificaciones de Automatización"
    ]
  }
};
