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
    rolePt: 'Senior Engineer',
    period: 'Sep 2024 - Present',
    description:
      'Consolidated pricing rules from multiple internal sources into a single Go API, giving the commercial team one place to manage offer logic. Built with DDD and Clean Architecture. Designed serverless workflows on AWS (Lambda, Step Functions, SQS, SNS) to replace manual financial processes. Service runs at Apdex 0.98 with error rate under 0.5%. Also contributed to the Angular admin UI.',
    descriptionPt:
      'Consolidou regras de precificação de diversas fontes internas em uma API Go, dando ao time comercial um ponto para gerenciar a logica de ofertas. Construido com DDD e Clean Architecture. Projetou fluxos serverless na AWS (Lambda, Step Functions, SQS, SNS) substituindo processos financeiros manuais. Servico roda com Apdex 0.98 e taxa de erro abaixo de 0.5%. Tambem contribuiu para a interface Angular.',
    current: true,
  },
  {
    company: 'Mercado Livre',
    role: 'Senior Engineer',
    rolePt: 'Senior Engineer',
    period: 'Jan 2022 - Sep 2024',
    description:
      'Built event-driven Go microservices for the logistics pipeline, operating under the squad\'s p99 budget of 100-200ms. Owned the package-vs-vehicle cost calculation for the daily delivery plan, optimizing carrier contract matching. Wrote a TypeScript BFF unifying multiple backend calls into a single mobile contract. Also worked on Mercado Pago\'s Meli Dolar (MUSD) and Mercado Coin stablecoin flows.',
    descriptionPt:
      'Construiu microsservicos Go orientados a eventos para o pipeline de logistica, operando dentro do orcamento p99 de 100-200ms. Dono do calculo de custo pacote-vs-veiculo no plano de entregas diario, otimizando matching de contratos de transportadoras. Escreveu um BFF TypeScript unificando chamadas de backend em um contrato mobile. Tambem atuou nos fluxos de stablecoin Meli Dolar (MUSD) e Mercado Coin no Mercado Pago.',
  },
  {
    company: 'Ambev Tech',
    role: 'Software Architect / Senior Engineer',
    rolePt: 'Software Architect / Senior Engineer',
    description:
      'Operated fiscal document issuance (CT-e, MDFe) for thousands of daily transportation events across AB InBev\'s nationwide distribution. A single outage once blocked an entire distribution center, queuing trucks until throughput recovered. Led migration from on-premises to Microsoft Azure. On-call for the issuance pipeline.',
    descriptionPt:
      'Operou emissao de documentos fiscais (CT-e, MDFe) para milhares de eventos de transporte diarios na distribuicao nacional da AB InBev. Uma unica interrupcao bloqueou um centro de distribuicao inteiro, enfileirando caminhoes ate a recuperacao. Liderou migracao de on-premises para Microsoft Azure. On-call para o pipeline de emissao.',
  },
  {
    company: 'Betha Systems',
    role: 'Software Architect / Senior Engineer',
    rolePt: 'Software Architect / Senior Engineer',
    description:
      'Migrated fiscal and tax systems serving 850+ municipalities and 3,000+ public agencies from J2EE monoliths on Oracle and Sybase to Spring Boot microservices on PostgreSQL, moving millions of records to a multi-tenant cloud architecture. Used Kafka for high-volume data migration. Built AngularJS and JavaScript frontends that replaced rigid legacy interfaces for public servants. Moved container orchestration from OpenShift to Kubernetes and operated AWS workloads.',
    descriptionPt:
      'Migrou sistemas fiscais e tributarios atendendo 850+ municipios e 3.000+ orgaos publicos de monolitos J2EE em Oracle e Sybase para microsservicos Spring Boot em PostgreSQL, movendo milhoes de registros para uma arquitetura cloud multi-tenant. Usou Kafka para migracao de dados em alto volume. Construiu frontends AngularJS e JavaScript que substituiram interfaces legadas rigidas. Moveu orquestracao de containers de OpenShift para Kubernetes e operou workloads AWS.',
  },
];
