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
  tagline: "Corporativo Tecnológico",
  description: "JIVOTECK es un corporativo mexicano que crea, desarrolla y opera proyectos tecnológicos con propósito. Casa de Industrialpedia y futuras iniciativas.",
  contact: {
    primaryEmail: "contacto@jivoteck.com",
    supportEmail: "contacto@jivoteck.com",
    location: "Aguascalientes, México",
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
    status: "Producto activo · evolución continua",
    badge: "Proyecto Tecnológico",
    title: "Industrialpedia",
    subtitle: "Tecnología e información para la industria",
    description: "Plataforma tecnológica desarrollada dentro de JIVOTECK para estructurar, consultar y aprovechar información técnica industrial.",
    ownershipNote: "Marca y proyecto tecnológico desarrollado y operado dentro del corporativo JIVOTECK.",
    teaserFeatures: [
      "Normalización y homologación técnica multi-fabricante",
      "Cruce de especificaciones y números de parte industriales",
      "Búsqueda y consulta técnica estructurada",
      "Directorio de fabricantes y parámetros de ingeniería"
    ]
  }
};
