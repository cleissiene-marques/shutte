import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROVIDERS, getProviderBySlug, whatsappLink } from "@/lib/data";
import { ArrowRightIcon, CheckIcon, HelpCircleIcon, StarIcon, WhatsAppIcon } from "@/components/Icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROVIDERS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider) return {};

  const title = `${provider.name} vale a pena? Análise e nota no ranking Shutte`;
  const description = `Análise da Shutte sobre a ${provider.name}: nota ${provider.rating.toFixed(1)}/5, estabilidade, suporte, preço a partir de ${provider.priceFrom} e o que observamos nos testes.`;

  return {
    title,
    description,
    alternates: { canonical: `/analises/${provider.slug}/` },
    openGraph: { url: `/analises/${provider.slug}/`, title, description, type: "article" },
    twitter: { title, description },
  };
}

export default async function ProviderReviewPage({ params }: Props) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider) notFound();

  const others = PROVIDERS.filter((p) => p.slug !== provider.slug).slice(0, 3);

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "Service", name: provider.name, url: provider.url },
    reviewRating: { "@type": "Rating", ratingValue: provider.rating, bestRating: "5" },
    author: { "@type": "Organization", name: "Shutte" },
    reviewBody: provider.description,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">#{provider.rank} no ranking Shutte</div>
          <h1 className="hero-title" id="hero-heading">{provider.name}: vale a pena?</h1>
          <p className="hero-desc">{provider.tagline}</p>
          <div className="page-hero-actions">
            <a href={provider.url} className="btn btn-primary" target="_blank" rel="noopener nofollow sponsored" data-provider-outbound={provider.slug}>
              Visitar {provider.name}
              <ArrowRightIcon />
            </a>
            <Link href="/comparativo/" className="btn btn-outline">Comparar com outros</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-label={`Análise de ${provider.name}`}>
        <div className="container">
          <div className="legal-content">
            <div className="card" style={{ marginBottom: "32px" }}>
              <div className="provider-rating-row" style={{ marginTop: 0 }}>
                <div className="stars" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} width={16} height={16} className={i < Math.round(provider.rating) ? "star-on" : "star-off"} />
                  ))}
                </div>
                <span className="provider-rating-val" style={{ fontSize: "1.1rem" }}>{provider.rating.toFixed(1)}/5</span>
                <span className="provider-rating-count">{provider.reviewCount.toLocaleString("pt-BR")} avaliações consideradas</span>
              </div>
              <p style={{ marginTop: "16px", marginBottom: 0 }}>
                Preço a partir de <strong style={{ color: "var(--t1)" }}>{provider.priceFrom}</strong>, com teste grátis disponível antes da contratação.
              </p>
            </div>

            <h2>Nossa análise</h2>
            <p>{provider.description}</p>

            <h2>Pontos fortes</h2>
            <ul>
              {provider.pros.map((pro) => (
                <li key={pro}>{pro}</li>
              ))}
            </ul>

            <h2>Pontos de atenção</h2>
            <ul>
              {provider.watchFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Como testar antes de contratar</h2>
            <p>
              Assim como os demais provedores do ranking, a {provider.name} oferece teste grátis sem exigir cartão de crédito. Recomendamos testar em horário de pico (à noite ou durante eventos ao vivo) antes de decidir — veja nosso{" "}
              <Link href="/blog/como-comparar-provedores-de-iptv/" style={{ color: "var(--accent)" }}>guia de comparação</Link>{" "}
              para saber exatamente o que observar.
            </p>

            <div className="legal-note">
              A {provider.name} pode fazer parte do mesmo grupo que mantém a Shutte. Isso não altera os critérios de avaliação, que são os mesmos aplicados a todos os provedores do ranking — veja detalhes na página de{" "}
              <Link href="/sobre/" style={{ color: "var(--accent)" }}>metodologia e transparência</Link>.
            </div>
          </div>
        </div>
      </section>

      <section className="section how-bg" aria-labelledby="others-heading">
        <div className="container">
          <div className="label">Compare também</div>
          <h2 className="section-heading" id="others-heading" style={{ marginTop: "16px" }}>Outros provedores do ranking</h2>

          <div className="blog-grid" style={{ marginTop: "48px" }}>
            {others.map((p) => (
              <Link href={`/analises/${p.slug}/`} className="card blog-card animate-on-scroll" key={p.slug}>
                <span className="blog-card-badge">#{p.rank} · {p.rating.toFixed(1)}/5</span>
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Teste antes de contratar</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>
            Pronto para testar a {provider.name}?
          </h2>
          <p className="section-subtext">Visite o site oficial para solicitar o teste grátis, ou fale com a Shutte se tiver dúvidas sobre o ranking.</p>
          <div className="final-actions">
            <a href={provider.url} className="btn btn-primary" target="_blank" rel="noopener nofollow sponsored" data-provider-outbound={provider.slug}>
              Visitar {provider.name}
              <ArrowRightIcon />
            </a>
            <a href={whatsappLink()} className="btn btn-outline" target="_blank" rel="noopener">
              <WhatsAppIcon width={20} height={20} />
              Falar com a Shutte
            </a>
          </div>
          <div className="final-trust">
            <span className="trust-item"><CheckIcon width={16} height={16} />Teste grátis sem cartão</span>
            <span className="trust-item"><HelpCircleIcon width={16} height={16} />Dúvidas? Fale com a Shutte</span>
          </div>
        </div>
      </section>
    </>
  );
}
