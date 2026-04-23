export interface ExperienceEntry {
  company: string;
  role: string;
  rolePt: string;
  period: string;
  description: string;
  descriptionPt: string;
  current?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    company: 'McGraw Hill Educational',
    role: 'Senior Engineer',
    rolePt: 'Engenheiro Sênior',
    period: 'Sep 2024 - Present',
    description:
      'Led the design of a Go API consolidating pricing rules across internal systems using DDD and Clean Architecture. Designed serverless workflows on AWS (Lambda, Step Functions, SQS/SNS) replacing manual financial processes, and instrumented services with New Relic. Also contributed to the Angular admin UI consuming the service.',
    descriptionPt:
      'Liderou o design de uma API Go consolidando regras de precificação entre sistemas internos usando DDD e Clean Architecture. Projetou fluxos serverless na AWS (Lambda, Step Functions, SQS/SNS) substituindo processos financeiros manuais, e instrumentou os serviços com New Relic. Também contribuiu para a interface Angular consumindo o serviço.',
    current: true,
  },
  {
    company: 'Mercado Livre',
    role: 'Senior Engineer',
    rolePt: 'Engenheiro Sênior',
    period: 'Jan 2022 - Sep 2024',
    description:
      'Built high-volume event-driven Go microservices for logistics under a p99 budget of 100-200ms. Worked on daily delivery plan optimizations reducing carrier contract mismatch costs, and contributed to Mercado Pago flows around Meli Dolar (MUSD), a cashback stablecoin, handling consistency requirements of money movement at scale.',
    descriptionPt:
      'Construiu microsserviços Go orientados a eventos de alto volume para logística com orçamento p99 de 100-200ms. Trabalhou em otimizações do plano de entregas diário reduzindo custos por incompatibilidade de contratos de transportadoras, e contribuiu para os fluxos do Mercado Pago relacionados ao Meli Dolar (MUSD), uma stablecoin de cashback, tratando requisitos de consistência para movimentação de dinheiro em escala.',
  },
  {
    company: 'Ambev Tech',
    role: 'Software Architect',
    rolePt: 'Arquiteto de Software',
    period: 'May 2021 - Jan 2022',
    description:
      'Delivered CT-e and MDFe transportation document systems supporting nationwide logistics for the AB InBev group. Led the migration from on-premises infrastructure to Microsoft Azure, including on-call support for issuance flows during peak distribution windows.',
    descriptionPt:
      'Entregou sistemas de documentos de transporte CT-e e MDFe para logística em todo o território nacional para o grupo AB InBev. Liderou a migração da infraestrutura on-premises para Microsoft Azure, incluindo suporte on-call para fluxos de emissão durante janelas de pico de distribuição.',
  },
  {
    company: 'Betha Systems',
    role: 'Software Architect / Senior Developer',
    rolePt: 'Arquiteto de Software / Desenvolvedor Sênior',
    period: 'Jan 2010 - May 2021',
    description:
      'Led migration of fiscal and tax systems for municipal clients from legacy monoliths to Spring Boot microservices on PostgreSQL, moving deploy cadence from monthly to daily. Worked full-stack on AngularJS UIs over the Java backend. Earlier work covered financial and ERP modules with Oracle query optimization.',
    descriptionPt:
      'Liderou a migração de sistemas fiscais e tributários para clientes municipais de monolitos legados para microsserviços Spring Boot no PostgreSQL, evoluindo o ciclo de deploy de mensal para diário. Atuou full-stack em interfaces AngularJS sobre o backend Java. Trabalhos anteriores abrangeram módulos financeiros e ERP com otimização de consultas Oracle.',
  },
];
