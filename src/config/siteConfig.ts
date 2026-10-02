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
  tagline: "Corporativo Tecnológico",
  description: "JIVOTECK es un corporativo tecnológico mexicano que crea y da estructura a proyectos tecnológicos con visión de largo plazo.",
  contact: {
    primaryEmail: "contacto@jivoteck.com",
    location: "Aguascalientes, México"
  },
  social: {
    // Redes sociales sin URL corporativa verificada permanecen inactivas
  },
  industrialpedia: {
    websiteUrl: "https://industrialpedia.com.mx/",
    title: "Industrialpedia",
    subtitle: "Tecnología e información para la industria",
    description: "Industrialpedia es la iniciativa tecnológica activa del ecosistema JIVOTECK. Opera con identidad propia y concentra el desarrollo de software e información orientados al entorno industrial."
  }
};
