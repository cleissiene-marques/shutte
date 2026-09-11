import type { Metadata } from "next";
import Link from "next/link";
import { PROVIDERS, whatsappLink } from "@/lib/data";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/Icons";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Ranking de Listas IPTV: Como Escolher sem Cair em Golpe",
  description:
    "Ranking independente de listas IPTV organizado por categoria (estabilidade, suporte, preço e esportes), com teste grátis sem cartão de crédito antes de assinar qualquer plano.",
  keywords: [
    "ranking de listas IPTV",
    "ranking de IPTV",
    "classificação de listas IPTV",
  ],
  alternates: { canonical: "/ranking-de-listas-iptv/" },
  openGraph: {
    url: "/ranking-de-listas-iptv/",
    title: "Ranking de Listas IPTV: Como Escolher sem Cair em Golpe",
    description:
      "Ranking independente de listas IPTV organizado por categoria, com teste grátis sem cartão de crédito antes de assinar.",
  },
  twitter: {
    title: "Ranking de Listas IPTV: Como Escolher sem Cair em Golpe",
    description:
      "Ranking independente de listas IPTV organizado por categoria, com teste grátis sem cartão de crédito antes de assinar.",
  },
};

const listaFaqs = [
  {
    pergunta: "Lista IPTV e provedor de IPTV são a mesma coisa?",
    resposta:
      "No dia a dia, sim: quem procura por \"lista IPTV\" geralmente está atrás do mesmo serviço de canais ao vivo, filmes e séries que chamamos de provedor de IPTV. O termo \"lista\" vem do arquivo de canais (playlist) que o serviço entrega ao seu aplicativo ou Smart TV.",
  },
  {
    pergunta: "Como saber se uma lista IPTV é confiável?",
    resposta:
      "Priorize quem oferece teste grátis sem pedir cartão de crédito, tem canal de suporte ativo (de preferência WhatsApp) e mantém a mesma qualidade em horário de pico. Todas as opções deste ranking passam por esses três filtros antes de entrar na classificação.",
  },
  {
    pergunta: "Por que existem várias categorias em vez de uma lista única?",
    resposta:
      "Porque o \"melhor\" muda com o uso: quem prioriza estabilidade em jogos tem critérios diferentes de quem quer algo family-friendly ou o menor preço. Agrupar por categoria facilita achar a opção certa para o seu caso, sem depender só da posição geral.",
  },
  {
    pergunta: "Esse ranking é o mesmo do comparativo lado a lado?",
    resposta:
      "Os provedores avaliados são os mesmos, mas aqui a organização é por categoria de destaque. Para ver nota, preço e análise de todos numa única tabela, use o nosso comparativo lado a lado.",
  },
];

export default function RankingDeListasIptvPage() {
  const categories = Array.from(new Set(PROVIDERS.map((p) => p.badge)));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ranking de listas IPTV por categoria",
    itemListElement: PROVIDERS.map((p) => ({
      "@type": "ListItem",
      position: p.rank,
      url: `https://shutte.com.br/analises/${p.slug}/`,
      name: p.name,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: listaFaqs.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Ranking por categoria</div>
          <h1 className="hero-title" id="hero-heading">Ranking de listas IPTV: como escolher sem cair em golpe</h1>
          <p className="hero-desc">
            &quot;Lista IPTV&quot; é como muita gente chama o pacote de canais ao vivo, filmes e séries entregue por um provedor de streaming. Organizamos as opções mais bem avaliadas pela Shutte por categoria de destaque, para você achar rápido a que serve para o seu uso — e testar de graça antes de assinar.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-label="O que observar antes de assinar uma lista IPTV">
        <div className="container">
          <div className="legal-content">
            <h2>O que diferencia uma lista IPTV boa de uma arriscada</h2>
            <p>
              Nem toda lista IPTV anunciada por aí passa por avaliação independente. Antes de decidir, confira três sinais básicos: teste grátis oferecido sem exigir cartão de crédito, suporte que responde de verdade (não só um robô) e estabilidade que se mantém em horário de pico, não só na demonstração.
            </p>
            <ul>
              <li>Teste grátis real, sem necessidade de dados de pagamento antecipados</li>
              <li>Suporte humano acessível pelo WhatsApp, com resposta em tempo razoável</li>
              <li>Estabilidade testada em horário de pico e em grandes eventos, não só em condições ideais</li>
              <li>Preço final informado com transparência, sem taxas escondidas</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section how-bg" aria-labelledby="categorias-heading">
        <div className="container">
          <div className="label">Por categoria</div>
          <h2 className="section-heading" id="categorias-heading" style={{ marginTop: "16px" }}>
            As listas IPTV mais bem avaliadas, por categoria
          </h2>
          <p className="section-subtext">
            Cada categoria reúne quem se destacou nesse critério específico dentro da nossa classificação geral.
          </p>

          <div className="diff-grid" style={{ marginTop: "48px" }}>
            {categories.map((categoria) => {
              const providersInCategory = PROVIDERS.filter((p) => p.badge === categoria);
              return (
                <article className="card diff-card animate-on-scroll" key={categoria}>
                  <h3>{categoria}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0" }}>
                    {providersInCategory.map((p) => (
                      <li key={p.slug} style={{ marginBottom: "10px" }}>
                        <Link href={`/analises/${p.slug}/`} style={{ color: "var(--accent)" }}>
                          #{p.rank} {p.name} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <p className="blog-notice" style={{ textAlign: "left", marginInline: 0, maxWidth: "760px" }}>
            Prefere ver todo mundo junto, com nota e preço numa única tabela?{" "}
            <Link href="/comparativo/" style={{ color: "var(--accent)" }}>Veja o comparativo lado a lado</Link>.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <div className="label">FAQ</div>
            <h2 className="section-heading" id="faq-heading" style={{ marginTop: "16px" }}>
              Dúvidas sobre listas IPTV
            </h2>
          </div>
          <FaqAccordion items={listaFaqs} />
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Teste antes de contratar</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>
            Veja a classificação completa da Shutte
          </h2>
          <p className="section-subtext">Todas as listas acima oferecem teste grátis sem cartão de crédito.</p>
          <div className="final-actions">
            <Link href="/" className="btn btn-primary">
              Ver classificação completa
              <ArrowRightIcon />
            </Link>
            <a href={whatsappLink()} className="btn btn-outline" target="_blank" rel="noopener">
              <WhatsAppIcon width={20} height={20} />
              Falar com a Shutte
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
