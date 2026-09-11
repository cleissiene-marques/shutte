import type { Metadata } from "next";
import Link from "next/link";
import { PROVIDERS, whatsappLink } from "@/lib/data";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/Icons";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Listas IPTV com Teste Grátis: Passo a Passo Antes de Assinar",
  description:
    "Como testar uma lista IPTV de graça e sem cartão de crédito antes de assinar: passo a passo, o que observar durante o teste e acesso rápido à classificação com teste grátis da Shutte.",
  keywords: [
    "classificação de listas com teste grátis IPTV",
    "lista IPTV com teste grátis",
    "teste grátis de lista IPTV",
  ],
  alternates: { canonical: "/listas-iptv-teste-gratis/" },
  openGraph: {
    url: "/listas-iptv-teste-gratis/",
    title: "Listas IPTV com Teste Grátis: Passo a Passo Antes de Assinar",
    description:
      "Como testar uma lista IPTV de graça e sem cartão de crédito antes de assinar, com acesso rápido às opções avaliadas pela Shutte.",
  },
  twitter: {
    title: "Listas IPTV com Teste Grátis: Passo a Passo Antes de Assinar",
    description:
      "Como testar uma lista IPTV de graça e sem cartão de crédito antes de assinar, com acesso rápido às opções avaliadas pela Shutte.",
  },
};

const testeFaqs = [
  {
    pergunta: "Preciso de cartão de crédito para testar uma lista IPTV?",
    resposta:
      "Não, em nenhuma das opções avaliadas pela Shutte. Todas oferecem período de teste sem exigir dados de pagamento antecipados — se algum site pedir cartão só para liberar o teste, é sinal de alerta.",
  },
  {
    pergunta: "Quanto tempo dura o teste grátis?",
    resposta:
      "Varia por provedor, geralmente entre algumas horas e um dia. O ideal é pedir o teste em horário de pico (à noite ou durante um jogo) para avaliar a estabilidade nas condições reais de uso, e não só num momento tranquilo.",
  },
  {
    pergunta: "Posso testar mais de uma lista antes de decidir?",
    resposta:
      "Sim, e recomendamos. Como o teste não exige cartão nem fidelidade, dá para comparar duas ou três opções da classificação no mesmo dia antes de assinar qualquer plano.",
  },
  {
    pergunta: "O teste grátis tem o catálogo completo ou é limitado?",
    resposta:
      "Nos provedores avaliados pela Shutte, o teste dá acesso ao mesmo catálogo do plano pago, para você avaliar a experiência real antes de contratar — sem versão reduzida.",
  },
];

export default function ListasIptvTesteGratisPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: testeFaqs.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Teste antes de assinar</div>
          <h1 className="hero-title" id="hero-heading">Listas IPTV com teste grátis: o passo a passo antes de assinar</h1>
          <p className="hero-desc">
            Testar antes de pagar é a forma mais segura de saber se uma lista IPTV realmente entrega o que promete. Veja como pedir o teste, o que observar nas primeiras horas de uso e onde encontrar as opções com teste grátis já avaliadas pela Shutte.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Como testar uma lista IPTV grátis">
        <div className="container">
          <div className="legal-content">
            <h2>Como testar uma lista IPTV grátis em 4 passos</h2>
            <ol>
              <li>Escolha uma opção da classificação e solicite o teste pelo WhatsApp ou site oficial, sem informar dados de cartão.</li>
              <li>Instale o aplicativo indicado no seu Smart TV, TV Box, celular ou computador.</li>
              <li>Use o teste em horário de pico — à noite ou durante um jogo — para simular a condição real de uso, não só um momento tranquilo.</li>
              <li>Confirme suporte, catálogo e estabilidade antes de assinar qualquer plano mensal ou anual.</li>
            </ol>

            <h2>O que observar durante o teste</h2>
            <ul>
              <li>Se a imagem trava ou perde qualidade em horário de pico</li>
              <li>Se o catálogo de canais, filmes e séries bate com o anunciado</li>
              <li>Se o suporte responde no WhatsApp em tempo razoável</li>
              <li>Se o preço informado depois do teste é o mesmo anunciado, sem taxa extra</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section how-bg" aria-labelledby="acesso-heading">
        <div className="container">
          <div className="label">Acesso rápido</div>
          <h2 className="section-heading" id="acesso-heading" style={{ marginTop: "16px" }}>
            Listas IPTV com teste grátis avaliadas pela Shutte
          </h2>
          <p className="section-subtext">Todas oferecem teste sem cartão de crédito — clique para ver a análise completa antes de pedir o seu.</p>

          <div className="card" style={{ marginTop: "40px", padding: "8px 24px" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {PROVIDERS.map((p) => (
                <li
                  key={p.slug}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: "1px solid var(--brd)",
                    flexWrap: "wrap",
                  }}
                >
                  <span>
                    <strong style={{ color: "var(--t1)" }}>#{p.rank} {p.name}</strong>{" "}
                    <span style={{ color: "var(--t2)" }}>— a partir de {p.priceFrom}</span>
                  </span>
                  <Link href={`/analises/${p.slug}/`} style={{ color: "var(--accent)" }}>
                    Ver análise e pedir teste →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <div className="label">FAQ</div>
            <h2 className="section-heading" id="faq-heading" style={{ marginTop: "16px" }}>
              Dúvidas sobre o teste grátis
            </h2>
          </div>
          <FaqAccordion items={testeFaqs} />
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Comparativo completo</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>
            Veja nota, preço e destaque de cada lista
          </h2>
          <p className="section-subtext">Compare todas as opções lado a lado antes de pedir o seu teste.</p>
          <div className="final-actions">
            <Link href="/comparativo/" className="btn btn-primary">
              Ver comparativo
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
