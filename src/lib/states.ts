export type Region = "Norte" | "Nordeste" | "Centro-Oeste" | "Sudeste" | "Sul";

export type StateInfo = {
  slug: string;
  name: string;
  uf: string;
  capital: string;
  region: Region;
  /** ex: "em São Paulo", "na Bahia", "no Rio de Janeiro" */
  em: string;
  /** ex: "de São Paulo", "da Bahia", "do Rio de Janeiro" */
  de: string;
  /** frase única sobre o estado, usada na página de estado */
  localNote: string;
};

export const REGION_INTROS: Record<Region, string> = {
  Norte:
    "No Norte do Brasil, as grandes distâncias e os desafios de infraestrutura tornam o streaming por internet uma alternativa prática à TV por assinatura tradicional, que nem sempre chega com a mesma qualidade a todas as cidades da região.",
  Nordeste:
    "No Nordeste, a demanda por canais abertos, futebol regional e conteúdo ao vivo se mantém alta o ano inteiro, com picos em datas festivas e nos jogos dos principais clubes da região.",
  "Centro-Oeste":
    "No Centro-Oeste, cidades em expansão e um público cada vez mais conectado fazem do streaming por internet uma opção natural para quem quer canais ao vivo, filmes e séries sem depender de antena ou parabólica.",
  Sudeste:
    "O Sudeste concentra o maior mercado de streaming do país, com forte concorrência entre provedores e alta exigência por estabilidade em horário de pico, especialmente durante grandes jogos e eventos ao vivo.",
  Sul: "No Sul, com invernos mais rigorosos e mais tempo em casa, a demanda por entretenimento ao vivo cresce nos meses mais frios — o que torna a estabilidade da transmissão ainda mais importante.",
};

export const STATES: StateInfo[] = [
  {
    slug: "acre",
    name: "Acre",
    uf: "AC",
    capital: "Rio Branco",
    region: "Norte",
    em: "no Acre",
    de: "do Acre",
    localNote:
      "Rio Branco e o interior acreano têm ampliado o acesso à internet fixa nos últimos anos, o que impulsiona a migração de moradores para o IPTV como alternativa à TV a cabo tradicional.",
  },
  {
    slug: "alagoas",
    name: "Alagoas",
    uf: "AL",
    capital: "Maceió",
    region: "Nordeste",
    em: "em Alagoas",
    de: "de Alagoas",
    localNote:
      "Com o litoral de Maceió entre os mais procurados do país, cresce em Alagoas a demanda por streaming que acompanhe o morador também fora de casa, em celular e tablet.",
  },
  {
    slug: "amapa",
    name: "Amapá",
    uf: "AP",
    capital: "Macapá",
    region: "Norte",
    em: "no Amapá",
    de: "do Amapá",
    localNote:
      "Macapá, cortada pela Linha do Equador, é uma das capitais brasileiras onde a conexão por internet vem substituindo rapidamente a antena parabólica como principal forma de assistir TV.",
  },
  {
    slug: "amazonas",
    name: "Amazonas",
    uf: "AM",
    capital: "Manaus",
    region: "Norte",
    em: "no Amazonas",
    de: "do Amazonas",
    localNote:
      "Em Manaus e no interior amazonense, onde a TV a cabo tradicional tem cobertura limitada, o IPTV por internet se tornou uma das poucas formas práticas de acessar canais ao vivo com qualidade.",
  },
  {
    slug: "bahia",
    name: "Bahia",
    uf: "BA",
    capital: "Salvador",
    region: "Nordeste",
    em: "na Bahia",
    de: "da Bahia",
    localNote:
      "A Bahia, terra do carnaval mais tradicional do país e de torcidas apaixonadas, tem alta demanda por canais esportivos e de variedades durante o ano inteiro.",
  },
  {
    slug: "ceara",
    name: "Ceará",
    uf: "CE",
    capital: "Fortaleza",
    region: "Nordeste",
    em: "no Ceará",
    de: "do Ceará",
    localNote:
      "Fortaleza, com uma das torcidas mais apaixonadas do Nordeste, mantém forte procura por canais esportivos em horário de jogo.",
  },
  {
    slug: "distrito-federal",
    name: "Distrito Federal",
    uf: "DF",
    capital: "Brasília",
    region: "Centro-Oeste",
    em: "no Distrito Federal",
    de: "do Distrito Federal",
    localNote:
      "Em Brasília, sede do governo federal, o público costuma valorizar canais de notícia e conteúdo informativo ao lado do entretenimento, e testa a estabilidade da conexão com atenção redobrada.",
  },
  {
    slug: "espirito-santo",
    name: "Espírito Santo",
    uf: "ES",
    capital: "Vitória",
    region: "Sudeste",
    em: "no Espírito Santo",
    de: "do Espírito Santo",
    localNote:
      "No Espírito Santo, com forte presença de condomínios e prédios residenciais em Vitória e Vila Velha, o IPTV se popularizou como alternativa mais barata à TV por assinatura tradicional.",
  },
  {
    slug: "goias",
    name: "Goiás",
    uf: "GO",
    capital: "Goiânia",
    region: "Centro-Oeste",
    em: "em Goiás",
    de: "de Goiás",
    localNote:
      "Goiânia, uma das capitais que mais cresceu no país nas últimas décadas, tem visto o streaming por internet ganhar espaço rápido entre moradores de condomínios e apartamentos novos.",
  },
  {
    slug: "maranhao",
    name: "Maranhão",
    uf: "MA",
    capital: "São Luís",
    region: "Nordeste",
    em: "no Maranhão",
    de: "do Maranhão",
    localNote:
      "São Luís, com forte tradição em festas populares como o Bumba Meu Boi, mantém interesse constante por canais de variedades e transmissões ao vivo de eventos culturais.",
  },
  {
    slug: "mato-grosso",
    name: "Mato Grosso",
    uf: "MT",
    capital: "Cuiabá",
    region: "Centro-Oeste",
    em: "no Mato Grosso",
    de: "do Mato Grosso",
    localNote:
      "Em Mato Grosso, estado com forte presença do agronegócio, o streaming por internet chegou às fazendas e às cidades do interior graças à expansão da fibra óptica nos últimos anos.",
  },
  {
    slug: "mato-grosso-do-sul",
    name: "Mato Grosso do Sul",
    uf: "MS",
    capital: "Campo Grande",
    region: "Centro-Oeste",
    em: "no Mato Grosso do Sul",
    de: "do Mato Grosso do Sul",
    localNote:
      "Campo Grande e as cidades do interior sul-mato-grossense têm acompanhado a mesma tendência nacional de migração da TV por assinatura tradicional para o streaming via internet.",
  },
  {
    slug: "minas-gerais",
    name: "Minas Gerais",
    uf: "MG",
    capital: "Belo Horizonte",
    region: "Sudeste",
    em: "em Minas Gerais",
    de: "de Minas Gerais",
    localNote:
      "Minas Gerais, um dos maiores mercados consumidores do país e lar de torcidas gigantes como Cruzeiro e Atlético Mineiro, mantém forte demanda por canais esportivos o ano todo.",
  },
  {
    slug: "para",
    name: "Pará",
    uf: "PA",
    capital: "Belém",
    region: "Norte",
    em: "no Pará",
    de: "do Pará",
    localNote:
      "Belém, porta de entrada da Amazônia e sede de torcidas tradicionais como Paysandu e Remo, tem no streaming uma alternativa importante onde a cobertura de TV a cabo é mais limitada.",
  },
  {
    slug: "paraiba",
    name: "Paraíba",
    uf: "PB",
    capital: "João Pessoa",
    region: "Nordeste",
    em: "na Paraíba",
    de: "da Paraíba",
    localNote:
      "João Pessoa, uma das capitais mais litorâneas do país, acompanha o crescimento nacional do streaming como alternativa mais flexível à TV por assinatura tradicional.",
  },
  {
    slug: "parana",
    name: "Paraná",
    uf: "PR",
    capital: "Curitiba",
    region: "Sul",
    em: "no Paraná",
    de: "do Paraná",
    localNote:
      "No Paraná, com Curitiba entre as capitais com melhor infraestrutura de internet do país, os moradores costumam ter alta exigência por estabilidade e qualidade de imagem em Full HD e 4K.",
  },
  {
    slug: "pernambuco",
    name: "Pernambuco",
    uf: "PE",
    capital: "Recife",
    region: "Nordeste",
    em: "em Pernambuco",
    de: "de Pernambuco",
    localNote:
      "Recife, um dos polos de tecnologia do Nordeste com o Porto Digital, tem um público bastante conectado e exigente com a qualidade de streaming e a velocidade de internet.",
  },
  {
    slug: "piaui",
    name: "Piauí",
    uf: "PI",
    capital: "Teresina",
    region: "Nordeste",
    em: "no Piauí",
    de: "do Piauí",
    localNote:
      "Teresina, uma das capitais mais quentes do país, tem no streaming por internet uma opção cada vez mais popular de entretenimento em casa, especialmente durante o dia.",
  },
  {
    slug: "rio-de-janeiro",
    name: "Rio de Janeiro",
    uf: "RJ",
    capital: "Rio de Janeiro",
    region: "Sudeste",
    em: "no Rio de Janeiro",
    de: "do Rio de Janeiro",
    localNote:
      "O Rio de Janeiro, estado com algumas das torcidas mais apaixonadas do Brasil, tem enorme demanda por canais esportivos em horário de jogo, o que torna a estabilidade do provedor ainda mais decisiva.",
  },
  {
    slug: "rio-grande-do-norte",
    name: "Rio Grande do Norte",
    uf: "RN",
    capital: "Natal",
    region: "Nordeste",
    em: "no Rio Grande do Norte",
    de: "do Rio Grande do Norte",
    localNote:
      "Natal, com um dos climas mais estáveis do país, mantém forte procura por streaming em segunda residência e casas de temporada, especialmente na alta temporada turística.",
  },
  {
    slug: "rio-grande-do-sul",
    name: "Rio Grande do Sul",
    uf: "RS",
    capital: "Porto Alegre",
    region: "Sul",
    em: "no Rio Grande do Sul",
    de: "do Rio Grande do Sul",
    localNote:
      "No Rio Grande do Sul, com a histórica rivalidade entre Grêmio e Internacional e invernos mais rigorosos, a demanda por canais esportivos e de entretenimento cresce nos meses mais frios.",
  },
  {
    slug: "rondonia",
    name: "Rondônia",
    uf: "RO",
    capital: "Porto Velho",
    region: "Norte",
    em: "em Rondônia",
    de: "de Rondônia",
    localNote:
      "Porto Velho e o interior rondoniense têm ampliado o acesso à fibra óptica nos últimos anos, o que facilita a adoção do IPTV como alternativa à antena parabólica.",
  },
  {
    slug: "roraima",
    name: "Roraima",
    uf: "RR",
    capital: "Boa Vista",
    region: "Norte",
    em: "em Roraima",
    de: "de Roraima",
    localNote:
      "Boa Vista, a capital mais ao norte do país, tem no streaming por internet uma das formas mais práticas de acessar canais ao vivo, dada a cobertura limitada de TV a cabo na região.",
  },
  {
    slug: "santa-catarina",
    name: "Santa Catarina",
    uf: "SC",
    capital: "Florianópolis",
    region: "Sul",
    em: "em Santa Catarina",
    de: "de Santa Catarina",
    localNote:
      "Santa Catarina, com Florianópolis entre as capitais com melhor qualidade de vida do país, tem um público bastante exigente com estabilidade e qualidade de imagem em Full HD e 4K.",
  },
  {
    slug: "sao-paulo",
    name: "São Paulo",
    uf: "SP",
    capital: "São Paulo",
    region: "Sudeste",
    em: "em São Paulo",
    de: "de São Paulo",
    localNote:
      "São Paulo, o maior mercado consumidor do país e lar de torcidas gigantes como Corinthians, Palmeiras, São Paulo e Santos, concentra a maior concorrência entre provedores de IPTV do Brasil.",
  },
  {
    slug: "sergipe",
    name: "Sergipe",
    uf: "SE",
    capital: "Aracaju",
    region: "Nordeste",
    em: "em Sergipe",
    de: "de Sergipe",
    localNote:
      "Aracaju, uma das capitais mais compactas do país, acompanha a mesma tendência nacional de crescimento do streaming como alternativa à TV por assinatura tradicional.",
  },
  {
    slug: "tocantins",
    name: "Tocantins",
    uf: "TO",
    capital: "Palmas",
    region: "Norte",
    em: "no Tocantins",
    de: "do Tocantins",
    localNote:
      "Palmas, uma das capitais mais jovens do Brasil, tem visto o streaming por internet crescer rápido junto com a expansão da fibra óptica nos últimos anos.",
  },
];

export function getStateBySlug(slug: string): StateInfo | undefined {
  return STATES.find((s) => s.slug === slug);
}

export const REGIONS_ORDER: Region[] = ["Sudeste", "Nordeste", "Sul", "Norte", "Centro-Oeste"];
