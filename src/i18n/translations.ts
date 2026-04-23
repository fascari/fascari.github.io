export type Lang = 'en' | 'pt';

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
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
      title: 'Felipe Ascari — Senior Backend Engineer',
      description: 'Senior Backend Engineer specializing in Go and distributed systems.',
    },
    nav: {
      stack: 'Stack',
      work: 'Work',
      projects: 'Projects',
      articles: 'Articles',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Senior Backend Engineer · Go',
      bio: "Started in desktop apps with Dataflex, writing logistics software for transportation companies when barely anyone outside niche ERP circles had heard of the language. Moved to Java for a decade, mostly in public accounting, covering municipal tax systems, fiscal documents, the kind of software that has to be right. Then back to logistics at Ambev, and eventually into fintech, where I've been since 2022. These days it's Go, distributed systems, and the occasional blockchain experiment. More than 15 years in, still finding new things to break and fix.",
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
      title: 'Felipe Ascari — Engenheiro Backend Sênior',
      description: 'Engenheiro Backend Sênior especializado em Go e sistemas distribuídos.',
    },
    nav: {
      stack: 'Tecnologias',
      work: 'Experiência',
      projects: 'Projetos',
      articles: 'Artigos',
      contact: 'Contato',
    },
    hero: {
      eyebrow: 'Engenheiro Backend Sênior · Go',
      bio: 'Comecei em apps desktop com Dataflex, escrevendo software de logística para transportadoras quando quase ninguém fora de nichos de ERP conhecia a linguagem. Migrei para Java por uma década, principalmente em contabilidade pública, abrangendo sistemas tributários municipais, documentos fiscais, o tipo de software que precisa estar certo. Depois logística na Ambev, e finalmente fintech, onde estou desde 2022. Hoje é Go, sistemas distribuídos e algum experimento com blockchain. Mais de 15 anos, ainda encontrando coisas novas para quebrar e consertar.',
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
