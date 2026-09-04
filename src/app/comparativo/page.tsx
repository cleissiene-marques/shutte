import type { Metadata } from "next";
import Link from "next/link";
import { PROVIDERS } from "@/lib/data";
import { StarIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Comparativo de IPTV com Teste Grátis",
  description: "Compare lado a lado os provedores de IPTV do ranking Shutte: nota, preço, teste grátis sem cartão de crédito e link direto para cada um.",
  alternates: { canonical: "/comparativo/" },
  openGraph: {
    url: "/comparativo/",
    title: "Comparativo de IPTV com Teste Grátis | Shutte",
    description: "Compare lado a lado os provedores de IPTV do ranking Shutte: nota, preço, teste grátis sem cartão de crédito e link direto para cada um.",
  },
  twitter: {
    title: "Comparativo de IPTV com Teste Grátis | Shutte",
    description: "Compare lado a lado os provedores de IPTV do ranking Shutte: nota, preço, teste grátis sem cartão de crédito e link direto para cada um.",
  },
};

export default function ComparativoPage() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Comparativo</div>
          <h1 className="hero-title" id="hero-heading">Todos os provedores, lado a lado</h1>
          <p className="hero-desc">Nota, preço e destaque de cada provedor numa única tabela, para comparar em segundos antes de decidir.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Tabela comparativa">
        <div className="container">
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Provedor</th>
                  <th>Nota</th>
                  <th>Destaque</th>
                  <th>A partir de</th>
                  <th>Análise</th>
                </tr>
              </thead>
              <tbody>
                {PROVIDERS.map((p) => (
                  <tr key={p.slug}>
                    <td className="is-name">
                      <span className="compare-rank-pill">{p.rank}</span>
                      {p.name}
                    </td>
                    <td>
                      <span className="cell-rating">
                        <StarIcon width={14} height={14} />
                        {p.rating.toFixed(1)}
                      </span>
                    </td>
                    <td style={{ color: "var(--t2)" }}>{p.badge}</td>
                    <td style={{ color: "var(--t2)" }}>{p.priceFrom}</td>
                    <td className="is-cta">
                      <Link href={`/analises/${p.slug}/`}>Ver análise →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="blog-notice" style={{ textAlign: "left", marginInline: 0, maxWidth: "760px" }}>
            Todos os provedores acima oferecem o mesmo tipo de conteúdo (canais ao vivo, filmes, séries, esportes e infantil) e teste grátis sem cartão de crédito. A diferença entre eles está na estabilidade observada, no suporte e no volume de avaliações — veja os critérios completos na{" "}
            <Link href="/sobre/" style={{ color: "var(--accent)" }}>página de metodologia</Link>.
          </p>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Ainda em dúvida?</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>Leia a análise completa de cada um</h2>
          <p className="section-subtext">Cada provedor tem uma página de análise detalhada, com pontos fortes e pontos de atenção.</p>
          <div className="final-actions">
            <Link href="/#ranking" className="btn btn-primary">
              Ver ranking completo
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
