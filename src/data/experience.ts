export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    company: 'McGraw Hill Educational',
    role: 'Senior Engineer',
    period: 'Sep 2024 — present',
    description:
      'Led the design of a Go API consolidating pricing rules across internal systems using DDD and Clean Architecture. Designed serverless workflows on AWS (Lambda, Step Functions, SQS/SNS) replacing manual financial processes, and instrumented services with New Relic. Also contributed to the Angular admin UI consuming the service.',
    current: true,
  },
  {
    company: 'Mercado Livre',
    role: 'Senior Engineer',
    period: 'Jan 2022 — Sep 2024',
    description:
      'Built high-volume event-driven Go microservices for logistics under a p99 budget of 100–200ms. Worked on daily delivery plan optimizations reducing carrier contract mismatch costs, and contributed to Mercado Pago flows around Meli Dolar (MUSD), a cashback stablecoin, handling consistency requirements of money movement at scale.',
  },
  {
    company: 'Ambev Tech',
    role: 'Software Architect',
    period: 'May 2021 — Jan 2022',
    description:
      'Delivered CT-e and MDFe transportation document systems supporting nationwide logistics for the AB InBev group. Led the migration from on-premises infrastructure to Microsoft Azure, including on-call support for issuance flows during peak distribution windows.',
  },
  {
    company: 'Betha Systems',
    role: 'Software Architect / Senior Developer',
    period: 'Jan 2010 — May 2021',
    description:
      'Led migration of fiscal and tax systems for municipal clients from legacy monoliths to Spring Boot microservices on PostgreSQL, moving deploy cadence from monthly to daily. Worked full-stack on AngularJS UIs over the Java backend. Earlier work covered financial and ERP modules with Oracle query optimization.',
  },
];
