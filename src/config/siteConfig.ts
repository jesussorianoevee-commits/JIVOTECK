export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  contact: {
    primaryEmail: string;
    location: string;
  };
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  industrialpedia: {
    websiteUrl: string;
    title: string;
    subtitle: string;
    description: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "JIVOTECK",
  tagline: "Casa de Innovación Tecnológica",
  description: "JIVOTECK es una casa corporativa de innovación tecnológica mexicana. Desarrollamos, estructuramos e impulsamos tecnologías e iniciativas propias que facilitan el acceso a la información, mejoran procesos y ayudan a las personas y empresas a resolver problemas.",
  contact: {
    primaryEmail: "contacto@jivoteck.com",
    location: "Aguascalientes, México"
  },
  social: {
    linkedin: "https://www.linkedin.com/company/jivoteck/",
  },
  industrialpedia: {
    websiteUrl: "https://industrialpedia.com.mx/",
    title: "Industrialpedia",
    subtitle: "Organización y consulta de información técnica industrial",
    description: "Plataforma tecnológica especializada en la organización y consulta de información técnica industrial. Centraliza información de componentes y refacciones para facilitar su búsqueda, comparación y evaluación."
  }
};
