export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  badge: string;
  date: string;
  readTime: string;
  excerpt: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "como-comparar-provedores-de-iptv",
    title: "Como comparar provedores de IPTV sem cair em promessa vazia",
    description:
      "Um roteiro prático para comparar provedores de IPTV além do preço: estabilidade, suporte, transparência e o que perguntar antes de testar.",
    badge: "Guia de comparação",
    date: "2026-08-20",
    readTime: "6 min",
    excerpt:
      "Quase todo provedor promete 'estabilidade' e 'qualidade 4K'. A diferença real só aparece quando você sabe exatamente o que testar.",
    sections: [
      {
        paragraphs: [
          "Anúncio de IPTV costuma se parecer muito entre si: catálogo grande, transmissão estável, suporte via WhatsApp. Como quase todo mundo promete a mesma coisa, comparar de verdade exige olhar para critérios específicos — não só para o texto do anúncio.",
        ],
      },
      {
        heading: "1. Peça o teste e use nos horários certos",
        paragraphs: [
          "Qualquer serviço funciona bem numa tarde de terça-feira. O teste só é útil se for feito à noite, em fins de semana e, se possível, durante um evento ao vivo — é nesse momento que a infraestrutura de cada provedor se revela.",
        ],
      },
      {
        heading: "2. Compare o tempo de resposta do suporte",
        paragraphs: [
          "Envie uma dúvida técnica real durante o período de teste (não só 'quero saber o preço') e cronometre o tempo até uma resposta útil. Isso diz mais sobre a experiência pós-contratação do que qualquer lista de canais.",
        ],
      },
      {
        heading: "3. Confira se o preço publicado é o preço final",
        paragraphs: [
          "Provedores transparentes deixam claro se há taxa de adesão, se existe fidelidade e o que acontece quando o plano vence. Se essa informação não estiver visível no site, pergunte diretamente antes de pagar qualquer coisa.",
        ],
      },
      {
        heading: "4. Leve em conta o volume de avaliações, não só a nota",
        paragraphs: [
          "Uma nota 5,0 com poucas avaliações tem menos peso do que uma nota 4,8 com milhares de avaliações reais. Prefira sempre olhar os dois números juntos.",
        ],
      },
      {
        paragraphs: [
          "No nosso ranking, aplicamos esses mesmos critérios a cada provedor analisado — veja a comparação completa na página inicial da Shutte.",
        ],
      },
    ],
  },
  {
    slug: "sinais-de-que-um-iptv-e-confiavel",
    title: "5 sinais de que um provedor de IPTV é confiável",
    description:
      "Sinais práticos para identificar um provedor de IPTV sério antes de contratar: transparência, suporte, teste grátis e reputação.",
    badge: "Antes de contratar",
    date: "2026-08-05",
    readTime: "5 min",
    excerpt:
      "Nenhum desses sinais, isolado, garante nada. Mas quando vários aparecem juntos, a chance de boa experiência sobe bastante.",
    sections: [
      {
        paragraphs: [
          "Não existe um selo universal de 'IPTV confiável'. Mas alguns sinais práticos ajudam bastante a filtrar antes de gastar tempo testando provedor por provedor.",
        ],
      },
      {
        heading: "1. Teste grátis sem pedir cartão de crédito",
        paragraphs: [
          "Provedores que pedem dados de pagamento completos só para 'testar' costumam ter algo a esconder sobre a real qualidade do serviço.",
        ],
      },
      {
        heading: "2. Preço publicado com clareza",
        paragraphs: [
          "Site que mostra o valor de cada plano sem precisar 'chamar no WhatsApp para saber o preço' tende a ser mais transparente no restante da relação.",
        ],
      },
      {
        heading: "3. Suporte responde antes da compra",
        paragraphs: [
          "Se o atendimento demora ou ignora perguntas técnicas antes de você pagar, a tendência é piorar depois que o pagamento já foi feito.",
        ],
      },
      {
        heading: "4. Avaliações consistentes ao longo do tempo",
        paragraphs: [
          "Desconfie de provedores com avaliações concentradas todas no mesmo mês. Um histórico de avaliações espalhado ao longo de vários meses costuma ser mais confiável.",
        ],
      },
      {
        heading: "5. Compatibilidade explicada antes da contratação",
        paragraphs: [
          "Provedores sérios confirmam a compatibilidade com o seu aparelho específico antes do pagamento, em vez de deixar essa dúvida para depois.",
        ],
      },
    ],
  },
  {
    slug: "perguntas-para-fazer-antes-de-assinar-iptv",
    title: "7 perguntas para fazer no WhatsApp antes de assinar um IPTV",
    description:
      "Um checklist de perguntas diretas para mandar no WhatsApp de qualquer provedor de IPTV antes de fechar negócio.",
    badge: "Checklist",
    date: "2026-07-18",
    readTime: "4 min",
    excerpt:
      "As respostas a essas sete perguntas revelam mais sobre o serviço do que qualquer página de vendas.",
    sections: [
      {
        paragraphs: [
          "Antes de contratar qualquer provedor listado no nosso ranking (ou fora dele), vale mandar essas sete perguntas diretas no WhatsApp e prestar atenção não só na resposta, mas na velocidade dela.",
        ],
      },
      {
        list: [
          "Existe fidelidade ou multa de cancelamento?",
          "O que acontece quando o plano vence — renovação é automática ou manual?",
          "Quantas telas simultâneas o plano contratado permite?",
          "O teste grátis tem prazo? Quantos dias?",
          "Qual o tempo médio de resposta do suporte em dias úteis e fins de semana?",
          "O serviço funciona bem no meu aparelho específico? (informe o modelo)",
          "Quais formas de pagamento são aceitas?",
        ],
      },
      {
        heading: "Por que isso importa mais que o preço",
        paragraphs: [
          "Praticamente todos os provedores analisados no nosso ranking ficam na mesma faixa de preço. A experiência real de quem assina depende muito mais dessas respostas do que de uma diferença de poucos reais entre planos.",
        ],
      },
    ],
  },
  {
    slug: "internet-ideal-para-testar-iptv",
    title: "Quanto de internet você precisa para testar um IPTV com justiça",
    description:
      "Entenda a velocidade de internet recomendada para cada resolução antes de avaliar se um provedor de IPTV é bom ou ruim.",
    badge: "Internet",
    date: "2026-06-30",
    readTime: "5 min",
    excerpt:
      "Testar IPTV com internet fraca é a forma mais comum de julgar errado um provedor que, na verdade, é bom.",
    sections: [
      {
        paragraphs: [
          "Um erro comum ao comparar provedores de IPTV é testar todos com a mesma internet fraca e concluir que 'nenhum funciona bem'. Antes de avaliar qualquer serviço, vale confirmar se a sua conexão está na faixa recomendada.",
        ],
      },
      {
        heading: "Referência por resolução",
        list: [
          "HD (720p): 3 a 5 Mbps por tela.",
          "Full HD (1080p): 6 a 10 Mbps por tela.",
          "4K: 15 a 25 Mbps por tela, em conteúdo bem otimizado.",
        ],
      },
      {
        heading: "Teste por cabo antes de julgar o provedor",
        paragraphs: [
          "Se possível, conecte o aparelho por cabo de rede durante o período de teste grátis. Isso elimina a variável do Wi-Fi e permite avaliar a estabilidade real do serviço, não da sua rede doméstica.",
        ],
      },
      {
        heading: "Compare todos os provedores nas mesmas condições",
        paragraphs: [
          "Para uma comparação justa, teste cada provedor no mesmo aparelho, no mesmo horário do dia e na mesma qualidade de rede. É assim que construímos as avaliações do nosso ranking.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
