export type Lang = 'en' | 'pt';

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    stack: string;
    work: string;
    projects: string;
    articles: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    bio: string;
  };
  about: {
    label: string;
    title: string;
    bio: string;
  };
  techStack: {
    label: string;
    title: string;
  };
  experience: {
    label: string;
    title: string;
    current: string;
  };
  projects: {
    label: string;
    title: string;
  };
  articles: {
    label: string;
    title: string;
    minRead: string;
    error: string;
    locale: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
  };
  footer: {
    builtWith: string;
  };
}

export const translations: Record<Lang, Translations> = {
  en: {
    meta: {
      title: 'Felipe Ascari | Backend Engineer',
      description: 'Senior Backend Engineer specializing in Go and distributed systems.',
    },
    nav: {
      about: 'About',
      stack: 'Stack',
      work: 'Work',
      projects: 'Projects',
      articles: 'Articles',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Senior Backend Engineer · Go',
      bio: "15+ years building backend systems. Go engineer since 2022, focused on distributed systems and scale.",
    },
    about: {
      label: 'Background',
      title: 'About me',
      bio: "Started with Dataflex, building ERP and logistics software for freight companies. A decade in Java, mostly in public accounting: municipal tax systems, fiscal documents, the kind of software that has to be right. Then logistics at Ambev, and high-volume shipment systems at Mercado Livre, building Go microservices for the delivery pipeline under tight latency. Now at McGraw Hill, building an offer pricing orchestrator that ties together the full pricing chain for products and services across one of the largest edtech e-commerce platforms in the US. 15+ years in, still finding new things to break and fix.",
    },
    techStack: {
      label: 'Toolkit',
      title: 'Tech stack',
    },
    experience: {
      label: 'Career',
      title: 'Work experience',
      current: 'Current',
    },
    projects: {
      label: 'Code',
      title: 'Selected projects',
    },
    articles: {
      label: 'Writing',
      title: 'Recent articles',
      minRead: 'min read',
      error: 'Could not load articles.',
      locale: 'en-US',
    },
    contact: {
      label: 'Connect',
      title: 'Get in touch',
      subtitle: 'Inbox open. Working on something interesting or building at scale? Reach out.',
    },
    footer: {
      builtWith: 'Built with Astro · Hosted on GitHub Pages',
    },
  },

  pt: {
    meta: {
      title: 'Felipe Ascari | Engenheiro Backend',
      description: 'Engenheiro Backend Sênior especializado em Go e sistemas distribuídos.',
    },
    nav: {
      about: 'Sobre',
      stack: 'Tecnologias',
      work: 'Experiência',
      projects: 'Projetos',
      articles: 'Artigos',
      contact: 'Contato',
    },
    hero: {
      eyebrow: 'Engenheiro Backend Sênior · Go',
      bio: '15+ anos construindo sistemas backend. Engenheiro Go desde 2022, focado em sistemas distribuídos e escala.',
    },
    about: {
      label: 'Sobre',
      title: 'Sobre mim',
      bio: 'A primeira linguagem foi Dataflex, desenvolvendo sistemas de ERP e logística para transportadoras. Depois uma década em Java, com foco em contabilidade pública: tributação municipal, documentos fiscais, software que não tem margem para erro. Na sequência, logística na Ambev e sistemas de alto volume no Mercado Livre, onde construí microsserviços em Go para a operação de entregas com exigências rígidas de latência. Hoje na McGraw Hill, desenvolvendo um orquestrador de preços de ofertas que integra toda a cadeia de precificação de produtos e serviços do e-commerce de uma das maiores edtechs dos EUA. 15+ anos de carreira, ainda com coisas novas para quebrar e consertar.',
    },
    techStack: {
      label: 'Ferramentas',
      title: 'Tecnologias',
    },
    experience: {
      label: 'Carreira',
      title: 'Experiência profissional',
      current: 'Atual',
    },
    projects: {
      label: 'Código',
      title: 'Projetos',
    },
    articles: {
      label: 'Escrita',
      title: 'Artigos recentes',
      minRead: 'min de leitura',
      error: 'Não foi possível carregar os artigos.',
      locale: 'pt-BR',
    },
    contact: {
      label: 'Contato',
      title: 'Entre em contato',
      subtitle: 'Inbox aberto. Construindo algo interessante ou trabalhando em escala? Manda uma mensagem.',
    },
    footer: {
      builtWith: 'Feito com Astro · Hospedado no GitHub Pages',
    },
  },
};

export function getTranslations(lang: Lang): Translations {
  return translations[lang];
}
