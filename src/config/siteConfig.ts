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
    linkedin: "#", // Preparado para integrar enlace oficial
    twitter: "#",  // Preparado para integrar enlace oficial
    instagram: "#" // Preparado para integrar enlace oficial
  },
  industrialpedia: {
    status: "En desarrollo activo",
    badge: "Próximamente",
    title: "Industrialpedia",
    subtitle: "La Plataforma Inteligente de Componentes y Automatización Industrial",
    description: "Ecosistema de homologación, comparativa técnica multi-marca (FESTO, SMC y más) y simulación digital de componentes industriales.",
    ownershipNote: "Proyecto de desarrollo original concebido, desarrollado y respaldado al 100% por JIVOTECK.",
    teaserFeatures: [
      "Homologador Inteligente de Componentes Neumáticos y Electrónicos",
      "Simulador de Gemelos Digitales y Curvas de Rendimiento",
      "Matriz de Comparativa Técnica en Tiempo Real",
      "Directorio Unificado de Fabricantes y Especificaciones de Automatización"
    ]
  }
};
