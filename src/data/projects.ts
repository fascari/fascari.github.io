export interface Project {
  name: string;
  description: string;
  descriptionPt: string;
  url: string;
  tag: string;
}

export const projects: Project[] = [
  {
    name: 'cashback-platform',
    description:
      'Go monorepo issuing cashback as ERC-20 tokens on Ethereum. Uses go-ethereum, Solidity, NATS JetStream for idempotent minting, and gRPC for wallet operations.',
    descriptionPt:
      'Monorepo Go que emite cashback como tokens ERC-20 no Ethereum. Usa go-ethereum, Solidity, NATS JetStream para minting idempotente e gRPC para operações de carteira.',
    url: 'https://github.com/fascari/cashback-platform',
    tag: 'Go',
  },
  {
    name: 'tcp-message-processor',
    description:
      'Stateful TCP-based message processing system with job distribution, cryptographic validation, and async statistics processing.',
    descriptionPt:
      'Sistema de processamento de mensagens TCP com distribuição de tarefas, validação criptográfica e processamento assíncrono de estatísticas.',
    url: 'https://github.com/fascari/tcp-message-processor',
    tag: 'Go',
  },
  {
    name: 'exchange-crypto-service-api',
    description:
      'Service API for crypto exchange operations and integrations.',
    descriptionPt:
      'API de serviço para operações e integrações de exchange de criptomoedas.',
    url: 'https://github.com/fascari/exchange-crypto-service-api',
    tag: 'Go',
  },
  {
    name: 'kv-store',
    description:
      'Simple key-value storage implementation focused on correctness and internal behavior.',
    descriptionPt:
      'Implementação de armazenamento chave-valor focada em correção e comportamento interno.',
    url: 'https://github.com/fascari/kv-store',
    tag: 'Go',
  },
  {
    name: 'go-runtime-demo',
    description:
      'Educational project focused on runtime and blockchain concepts, keeping the implementation intentionally simple.',
    descriptionPt:
      'Projeto educacional focado em conceitos de runtime e blockchain, com implementação intencionalmente simples.',
    url: 'https://github.com/fascari/go-runtime-demo',
    tag: 'Go',
  },
  {
    name: 'offer-eligibility-service',
    description:
      'Service responsible for evaluating offer eligibility based on business rules and constraints.',
    descriptionPt:
      'Serviço responsável por avaliar elegibilidade de ofertas com base em regras de negócio e restrições.',
    url: 'https://github.com/fascari/offer-eligibility-service',
    tag: 'Go',
  },
];
