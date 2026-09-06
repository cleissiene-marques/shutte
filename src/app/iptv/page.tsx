import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/data";
import { STATES, REGIONS_ORDER } from "@/lib/states";

export const metadata: Metadata = {
  title: "Classificação de IPTV por Estado: Compare e Teste Grátis",
  description: "Classificação independente de provedores de IPTV separada por estado: estabilidade, suporte e preço, com teste grátis sem cartão de crédito, para assinantes de todas as regiões do Brasil.",
  alternates: { canonical: "/iptv/" },
  openGraph: {
    url: "/iptv/",
    title: "Classificação de IPTV por Estado: Compare e Teste Grátis",
    description: "Classificação independente de provedores de IPTV separada por estado: estabilidade, suporte e preço, com teste grátis sem cartão de crédito, para assinantes de todas as regiões do Brasil.",
  },
  twitter: {
    title: "Classificação de IPTV por Estado: Compare e Teste Grátis",
    description: "Classificação independente de provedores de IPTV separada por estado: estabilidade, suporte e preço, com teste grátis sem cartão de crédito, para assinantes de todas as regiões do Brasil.",
  },
};

export default function IptvPorEstadoPage() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Classificação por estado</div>
          <h1 className="hero-title" id="hero-heading">
            A <span className="hl-1">classificação de IPTV</span> em cada estado do Brasil
          </h1>
          <p className="hero-desc">
            A classificação da Shutte é nacional e todos os provedores avaliados oferecem teste grátis, sem cartão de crédito. Escolha seu estado para ver a classificação com contexto local, preços e perguntas frequentes específicas.
          </p>
        </div>
      </section>

      {REGIONS_ORDER.map((region) => {
        const statesInRegion = STATES.filter((s) => s.region === region).sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
        return (
          <section className="section" key={region} aria-labelledby={`region-${region}-heading`} style={{ paddingBottom: 0 }}>
            <div className="container">
              <div className="label">{region}</div>
              <h2 className="section-heading" id={`region-${region}-heading`} style={{ marginTop: "16px" }}>
                Estados do {region}
              </h2>

              <div className="blog-grid" style={{ marginTop: "48px" }}>
                {statesInRegion.map((state) => (
                  <Link href={`/iptv/${state.slug}/`} className="card blog-card animate-on-scroll" key={state.slug}>
                    <span className="blog-card-badge">{state.uf}</span>
                    <h3>{state.name}</h3>
                    <p>Capital: {state.capital} — ver classificação de IPTV {state.em} →</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section" aria-label="Contato">
        <div className="container">
          <p className="blog-notice">
            Não encontrou seu estado ou tem dúvida sobre a classificação?{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>Fale no WhatsApp</a>.
          </p>
        </div>
      </section>
    </>
  );
}
