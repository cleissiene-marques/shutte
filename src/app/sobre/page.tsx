import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink, RANKING_METHOD } from "@/lib/data";

export const metadata: Metadata = {
  title: "Metodologia e Transparência",
  description: "Entenda como a Shutte avalia provedores de IPTV e quais critérios usamos para montar a classificação.",
  alternates: { canonical: "/sobre/" },
  openGraph: {
    url: "/sobre/",
    title: "Metodologia e Transparência | Shutte",
    description: "Entenda como a Shutte avalia provedores de IPTV e quais critérios usamos para montar a classificação.",
  },
  twitter: {
    title: "Metodologia e Transparência | Shutte",
    description: "Entenda como a Shutte avalia provedores de IPTV e quais critérios usamos para montar a classificação.",
  },
};

export default function SobrePage() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Metodologia e transparência</div>
          <h1 className="hero-title" id="hero-heading">Como a Shutte avalia cada provedor</h1>
          <p className="hero-desc">Nascemos para resolver um problema simples: é difícil comparar provedores de IPTV quando todos prometem a mesma coisa. Aqui explicamos os critérios usados em cada avaliação.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="story-heading">
        <div className="container">
          <div className="label">Por que existimos</div>
          <h2 className="section-heading" id="story-heading" style={{ marginTop: "16px" }}>Uma classificação pensada para facilitar a escolha</h2>
          <div className="legal-content" style={{ marginTop: "32px" }}>
            <p>A Shutte nasceu para organizar num único lugar a comparação entre provedores de IPTV no Brasil, que costumam anunciar praticamente as mesmas promessas: estabilidade, catálogo amplo e suporte via WhatsApp. Em vez de confiar só no anúncio, aplicamos os mesmos critérios a cada provedor e publicamos o resultado.</p>
            <p>Preferimos uma classificação pequena e bem avaliada a uma lista enorme sem critério. Por isso, cada provedor listado passa pelos cinco critérios abaixo antes de receber uma posição.</p>
          </div>
        </div>
      </section>

      <section className="section how-bg" aria-labelledby="method-heading">
        <div className="container">
          <div className="label">Critérios de avaliação</div>
          <h2 className="section-heading" id="method-heading" style={{ marginTop: "16px" }}>Os cinco pilares da nota</h2>

          <div className="diff-grid" style={{ marginTop: "48px" }}>
            {RANKING_METHOD.map((item, i) => (
              <article className="card diff-card animate-on-scroll" key={item.title}>
                <div className="diff-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="transparency-heading">
        <div className="container">
          <div className="label">Transparência</div>
          <h2 className="section-heading" id="transparency-heading" style={{ marginTop: "16px" }}>Como garantimos uma classificação imparcial</h2>
          <div className="legal-content" style={{ marginTop: "32px" }}>
            <p>Nenhum provedor paga para subir de posição na classificação. Aplicamos os mesmos cinco pilares — estabilidade, qualidade de imagem, suporte, transparência de preço e volume de avaliações — a todos os provedores analisados, sem exceção. As notas refletem testes reais e o histórico de avaliações de assinantes, não uma ordem arbitrária.</p>
            <p>Ainda assim, recomendamos usar a classificação como ponto de partida da sua pesquisa, não como única fonte de decisão. Todos os provedores listados oferecem teste grátis — use-o antes de contratar qualquer plano.</p>
            <p>
              Se você notar alguma informação desatualizada ou tiver dúvidas sobre um provedor específico, fale com a gente pelo{" "}
              <a href={whatsappLink()} target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>WhatsApp</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Classificação Shutte</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>Veja a classificação completa</h2>
          <p className="section-subtext">Compare os provedores mais bem avaliados com base nesses critérios.</p>
          <div className="final-actions">
            <Link href="/#ranking" className="btn btn-primary">Ver classificação completa</Link>
            <Link href="/comparativo/" className="btn btn-outline">Ver comparativo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
