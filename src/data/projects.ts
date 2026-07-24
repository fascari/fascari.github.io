export interface Project {
  name: string;
  description: string;
  descriptionPt: string;
  url: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: 'ai-config',
    description:
      'Shared AI coding rules, workflow skills, and provider configs behind every agentic workflow I run, portable across Copilot, Claude Code, Codex, and opencode.',
    descriptionPt:
      'Regras de código, skills de workflow e configurações de provider compartilhadas por trás de cada fluxo agêntico que uso, portáteis entre Copilot, Claude Code, Codex e opencode.',
    url: 'https://github.com/fascari/ai-config',
    tags: ['AI'],
  },
  {
    name: 'vehicle-loan-apr-service',
    description:
      'Stateless HTTP service that calculates a vehicle loan annual percentage rate (APR) from loan terms, credit profile, and vehicle attributes.',
    descriptionPt:
      'Serviço HTTP stateless que calcula a taxa anual (APR) de um empréstimo veicular a partir dos termos do empréstimo, perfil de crédito e atributos do veículo.',
    url: 'https://github.com/fascari/vehicle-loan-apr-service',
    tags: ['TypeScript'],
  },
  {
    name: 'go-concurrency-patterns',
    description:
      'Go concurrency primitives explored through minimal, race-tested examples, benchmarks, and canonical literature references, from goroutines to atomics.',
    descriptionPt:
      'Primitivas de concorrência em Go exploradas com exemplos mínimos testados contra race conditions, benchmarks e referências da literatura canônica, de goroutines a atomics.',
    url: 'https://github.com/fascari/go-concurrency-patterns',
    tags: ['Go'],
  },
  {
    name: 'cashback-platform',
    description:
      'Go monorepo issuing cashback as ERC-20 tokens on Ethereum. Uses go-ethereum, Solidity, NATS JetStream for idempotent minting, and gRPC for wallet operations.',
    descriptionPt:
      'Monorepo Go que emite cashback como tokens ERC-20 no Ethereum. Usa go-ethereum, Solidity, NATS JetStream para minting idempotente e gRPC para operações de carteira.',
    url: 'https://github.com/fascari/cashback-platform',
    tags: ['Go'],
  },
  {
    name: 'tcp-message-processor',
    description:
      'Stateful TCP-based message processing system with job distribution, cryptographic validation, and async statistics processing.',
    descriptionPt:
      'Sistema de processamento de mensagens TCP com distribuição de tarefas, validação criptográfica e processamento assíncrono de estatísticas.',
    url: 'https://github.com/fascari/tcp-message-processor',
    tags: ['Go'],
  },
  {
    name: 'exchange-crypto-service-api',
    description:
      'Service API for crypto exchange operations and integrations.',
    descriptionPt:
      'API de serviço para operações e integrações de exchange de criptomoedas.',
    url: 'https://github.com/fascari/exchange-crypto-service-api',
    tags: ['Go'],
  },
  {
    name: 'go-runtime-demo',
    description:
      'Educational project focused on runtime and blockchain concepts, keeping the implementation intentionally simple.',
    descriptionPt:
      'Projeto educacional focado em conceitos de runtime e blockchain, com implementação intencionalmente simples.',
    url: 'https://github.com/fascari/go-runtime-demo',
    tags: ['Go'],
  },
  {
    name: 'offer-eligibility-service',
    description:
      'Service responsible for evaluating offer eligibility based on business rules and constraints.',
    descriptionPt:
      'Serviço responsável por avaliar elegibilidade de ofertas com base em regras de negócio e restrições.',
    url: 'https://github.com/fascari/offer-eligibility-service',
    tags: ['Go'],
  },
  {
    name: 'token-swap-workbench',
    description:
      'Go + React workbench for quoting, submitting, and orchestrating bot transactions against a simulated Rust chain service.',
    descriptionPt:
      'Workbench em Go + React para cotação, submissão e orquestração de transações de bots contra um serviço de chain Rust simulado.',
    url: 'https://github.com/fascari/token-swap-workbench',
    tags: ['Go', 'React'],
  },
];
