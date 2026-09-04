export const SITE_URL = "https://shutte.com.br";
export const SITE_NAME = "Shutte";
export const WHATSAPP_NUMBER = "5589981175065";
export const CONTACT_EMAIL = "contato@shutte.com.br";
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export function whatsappLink(mensagem?: string, number: string = WHATSAPP_NUMBER): string {
  if (!mensagem) return `https://wa.me/${number}`;
  return `https://wa.me/${number}?text=${encodeURIComponent(mensagem)}`;
}

export type Provider = {
  slug: string;
  rank: number;
  name: string;
  url: string;
  rating: number;
  reviewCount: number;
  badge: string;
  tagline: string;
  description: string;
  pros: string[];
  watchFor: string[];
  priceFrom: string;
  featured?: boolean;
};

export const PROVIDERS: Provider[] = [
  {
    slug: "rockbrasil-iptv",
    rank: 1,
    name: "RockBrasil IPTV",
    url: "https://rockbrasil40anos.com.br",
    rating: 4.9,
    reviewCount: 2300,
    badge: "Melhor avaliado",
    tagline: "Transmissão estável em HD, Full HD e 4K com suporte humano todos os dias.",
    description:
      "A RockBrasil lidera o nosso ranking pela combinação entre estabilidade em horários de pico, catálogo bem organizado e suporte via WhatsApp que responde de verdade. É o provedor com maior volume de avaliações analisadas e a menor taxa de reclamação por travamento entre os que testamos.",
    pros: [
      "Maior nota média entre os provedores analisados (4,9/5)",
      "Zero travamentos registrados nos testes em horário de pico",
      "Suporte humano no WhatsApp, 7 dias por semana",
      "Planos a partir de R$ 25/mês, sem fidelidade",
    ],
    watchFor: [
      "Alta procura em grandes eventos esportivos — vale pedir o teste com antecedência",
    ],
    priceFrom: "R$ 25,00/mês",
    featured: true,
  },
  {
    slug: "filme-fiel-iptv",
    rank: 2,
    name: "Filme Fiel IPTV",
    url: "https://filmefiel.com.br",
    rating: 4.8,
    reviewCount: 1450,
    badge: "Melhor para famílias",
    tagline: "Catálogo family-friendly com canais ao vivo, filmes, séries e conteúdo infantil.",
    description:
      "O Filme Fiel se destaca pela organização do catálogo e pela área infantil, o que facilita bastante quando várias pessoas da casa usam a mesma assinatura. A estabilidade fica muito próxima da líder do ranking, com pequenas variações em horários de altíssima demanda.",
    pros: [
      "Catálogo bem organizado, fácil de navegar em família",
      "Boa cobertura de conteúdo infantil e educativo",
      "Suporte técnico personalizado via WhatsApp",
      "Preços idênticos aos praticados pelo restante do mercado analisado",
    ],
    watchFor: [
      "Pequena variação de estabilidade em picos extremos, como grandes finais",
    ],
    priceFrom: "R$ 25,00/mês",
  },
  {
    slug: "festin-cine-jp-iptv",
    rank: 3,
    name: "Festin Cine JP IPTV",
    url: "https://festincinejp.com.br",
    rating: 4.8,
    reviewCount: 1120,
    badge: "Instalação mais rápida",
    tagline: "IPTV estável em HD, Full HD e 4K, com instalação acompanhada em minutos.",
    description:
      "O Festin Cine JP se sobressai no quesito onboarding: o suporte acompanha a instalação do início ao fim, o que reduz bastante o tempo até a primeira sessão. A qualidade de imagem é consistente, com o mesmo padrão técnico observado nos provedores mais bem avaliados.",
    pros: [
      "Onboarding acompanhado, do pedido à primeira imagem na tela",
      "Boa estabilidade em HD e Full HD",
      "Atendimento humano em português",
      "Compatível com os principais aparelhos (Smart TV, TV Box, celular)",
    ],
    watchFor: [
      "Base de avaliações menor que a líder do ranking — ainda em consolidação",
    ],
    priceFrom: "R$ 25,00/mês",
  },
  {
    slug: "filter-makers-iptv",
    rank: 4,
    name: "Filter Makers IPTV",
    url: "https://filtermakers.com.br",
    rating: 4.7,
    reviewCount: 980,
    badge: "Bom custo-benefício",
    tagline: "Canais ao vivo, filmes, séries, esportes e conteúdo infantil em múltiplas resoluções.",
    description:
      "Filter Makers entrega a mesma base de conteúdo dos primeiros colocados, com destaque para o suporte via WhatsApp e a política de teste sem cartão de crédito. Fica um pouco atrás em volume de avaliações analisadas até o momento.",
    pros: [
      "Teste grátis sem exigir cartão de crédito",
      "Suporte técnico em português via WhatsApp",
      "Planos a partir de R$ 25/mês",
      "Compatível com os principais dispositivos do mercado",
    ],
    watchFor: [
      "Volume de avaliações ainda em crescimento",
    ],
    priceFrom: "R$ 25,00/mês",
  },
  {
    slug: "festa-np-iptv",
    rank: 5,
    name: "Festa NP IPTV",
    url: "https://festanacionaldopirao.com.br",
    rating: 4.7,
    reviewCount: 890,
    badge: "Foco em esportes",
    tagline: "Transmissão firme, com prioridade de estabilidade em grandes eventos esportivos.",
    description:
      "A Festa NP aposta em estabilidade técnica focada em horários de pico e eventos esportivos, com planos que vão do mensal ao anual. O padrão de qualidade acompanha os concorrentes mais bem avaliados do ranking.",
    pros: [
      "Ênfase em estabilidade durante jogos e eventos ao vivo",
      "Teste grátis sem necessidade de cartão de crédito",
      "Planos flexíveis, de mensal a anual",
      "Suporte via WhatsApp",
    ],
    watchFor: [
      "Menor volume de avaliações analisadas até o momento",
    ],
    priceFrom: "R$ 25,00/mês",
  },
  {
    slug: "festemp-iptv",
    rank: 6,
    name: "Festemp IPTV",
    url: "https://festemp.com.br",
    rating: 4.6,
    reviewCount: 640,
    badge: "Em ascensão",
    tagline: "Streaming com ênfase em estabilidade e suporte genuíno em português.",
    description:
      "A Festemp fecha o nosso ranking atual com uma proposta consistente: mesmo catálogo, mesmo padrão de suporte e preços alinhados ao restante do mercado analisado. É a marca mais nova entre as que acompanhamos, ainda construindo seu histórico de avaliações.",
    pros: [
      "Teste grátis antes de qualquer contratação",
      "Suporte em português, focado em resolver problemas reais",
      "Mesma faixa de preço dos demais provedores do ranking",
    ],
    watchFor: [
      "Histórico de avaliações mais curto que os demais colocados",
    ],
    priceFrom: "R$ 25,00/mês",
  },
];

export function getProviderBySlug(slug: string): Provider | undefined {
  return PROVIDERS.find((p) => p.slug === slug);
}

export const RANKING_METHOD = [
  {
    title: "Estabilidade em horário de pico",
    detail: "Testamos cada provedor durante horários de maior audiência e eventos ao vivo, quando a infraestrutura é mais exigida.",
  },
  {
    title: "Qualidade de imagem entregue",
    detail: "Comparamos a resolução prometida (HD, Full HD, 4K) com o que realmente chega na tela, sem depender só do rótulo do plano.",
  },
  {
    title: "Velocidade e qualidade do suporte",
    detail: "Avaliamos o tempo de resposta no WhatsApp e se o atendimento é feito por pessoas reais, capazes de resolver o problema.",
  },
  {
    title: "Transparência de preço e condições",
    detail: "Conferimos se o preço publicado é o preço final, sem letras miúdas, taxas escondidas ou fidelidade não informada.",
  },
  {
    title: "Volume e consistência das avaliações",
    detail: "Consideramos o número de avaliações de assinantes reais e se a nota se mantém estável ao longo do tempo.",
  },
];
