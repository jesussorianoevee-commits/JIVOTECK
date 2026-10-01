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
  tagline: "Soluciones Tecnológicas para Información Industrial & Software a la Medida",
  description: "Estructuración, normalización y aprovechamiento de información técnica y catálogos MRO, con desarrollo de software privado adaptado a las necesidades de cada empresa. Creadores de Industrialpedia.",
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
    status: "Plataforma funcional · evolución continua",
    badge: "Producto propio de JIVOTECK",
    title: "Industrialpedia",
    subtitle: "The Industrial Information Platform",
    description: "Plataforma B2B desarrollada por JIVOTECK para estructurar, consultar y comparar información técnica de componentes y refacciones industriales.",
    ownershipNote: "Producto tecnológico propio concebido, desarrollado y respaldado al 100% por JIVOTECK como demostración de nuestras capacidades en estructuración técnica multi-fabricante.",
    teaserFeatures: [
      "Normalización y homologación técnica multi-fabricante",
      "Cruce de especificaciones y números de parte industriales",
      "Búsqueda y consulta técnica estructurada",
      "Directorio de fabricantes y parámetros de ingeniería"
    ]
  }
};
