export interface Project {
  name: string;
  description: string;
  url: string;
  tag: string;
}

export const projects: Project[] = [
  {
    name: 'cashback-platform',
    description:
      'Go monorepo issuing cashback as ERC-20 tokens on Ethereum. Uses go-ethereum, Solidity, NATS JetStream for idempotent minting, and gRPC for wallet operations.',
    url: 'https://github.com/fascari/cashback-platform',
    tag: 'Go',
  },
  {
    name: 'tcp-message-processor',
    description:
      'Stateful TCP-based message processing system with job distribution, cryptographic validation, and async statistics processing.',
    url: 'https://github.com/fascari/tcp-message-processor',
    tag: 'Go',
  },
  {
    name: 'exchange-crypto-service-api',
    description:
      'Service API for crypto exchange operations and integrations.',
    url: 'https://github.com/fascari/exchange-crypto-service-api',
    tag: 'Go',
  },
  {
    name: 'kv-store',
    description:
      'Simple key-value storage implementation focused on correctness and internal behavior.',
    url: 'https://github.com/fascari/kv-store',
    tag: 'Go',
  },
  {
    name: 'go-runtime-demo',
    description:
      'Educational project focused on runtime and blockchain concepts, keeping the implementation intentionally simple.',
    url: 'https://github.com/fascari/go-runtime-demo',
    tag: 'Go',
  },
  {
    name: 'offer-eligibility-service',
    description:
      'Service responsible for evaluating offer eligibility based on business rules and constraints.',
    url: 'https://github.com/fascari/offer-eligibility-service',
    tag: 'Go',
  },
];
