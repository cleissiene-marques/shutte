import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROVIDERS, SITE_URL, whatsappLink } from "@/lib/data";
import { STATES, REGION_INTROS, getStateBySlug } from "@/lib/states";
import ProviderCard from "@/components/ProviderCard";
import FaqAccordion from "@/components/FaqAccordion";
import { ArrowRightIcon, WhatsAppIcon, CheckIcon, HelpCircleIcon } from "@/components/Icons";

type Props = {
  params: Promise<{ estado: string }>;
};

export function generateStaticParams() {
  return STATES.map((s) => ({ estado: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { estado } = await params;
  const state = getStateBySlug(estado);
  if (!state) return {};

  const title = `Classificação de IPTV ${state.em} 2026: Compare e Teste Grátis`;
  const description = `Classificação independente de provedores de IPTV ${state.em}: compare estabilidade, suporte e preço, com teste grátis sem cartão de crédito, na classificação atualizada da Shutte.`;

  return {
    title,
    description,
    alternates: { canonical: `/iptv/${state.slug}/` },
    openGraph: { url: `/iptv/${state.slug}/`, title, description },
    twitter: { title, description },
  };
}

export default async function StatePage({ params }: Props) {
  const { estado } = await params;
  const state = getStateBySlug(estado);
  if (!state) notFound();

  const topProvider = PROVIDERS[0];
  const cheapest = [...PROVIDERS].sort((a, b) => a.priceFrom.localeCompare(b.priceFrom, "pt-BR", { numeric: true }))[0];

  const stateFaqs = [
    {
      pergunta: `Como funciona o teste grátis de IPTV ${state.em}?`,
      resposta: `Todos os provedores da classificação Shutte liberam um período de teste sem custo ${state.em}, sem exigir cartão de crédito. Basta escolher um provedor, solicitar o teste pelo site oficial e assistir aos canais ao vivo antes de decidir se vale a pena assinar.`,
    },
    {
      pergunta: `O teste grátis de IPTV ${state.em} tem algum custo escondido?`,
      resposta: `Não. Nos provedores analisados pela Shutte, o teste é gratuito e sem fidelidade — você só paga se decidir continuar depois do período de avaliação. Desconfie de quem pedir dados de cartão só para liberar o teste.`,
    },
    {
      pergunta: `IPTV funciona bem ${state.em}?`,
      resposta: `Sim. Como o IPTV funciona por internet, ele funciona em qualquer cidade ${state.de} com conexão estável — de ${state.capital} ao interior. Recomendamos pelo menos 15 Mbps para HD e 25 Mbps para assistir com folga em Full HD ou 4K.`,
    },
    {
      pergunta: `Existe provedor de IPTV exclusivo ${state.em}?`,
      resposta: `Não. Os provedores da classificação Shutte atendem o Brasil inteiro, incluindo todas as cidades ${state.de}. O catálogo de canais ao vivo, filmes e séries é o mesmo para assinantes de qualquer estado — o que muda é a qualidade da internet de cada casa.`,
    },
    {
      pergunta: `Qual o melhor provedor de IPTV ${state.em} agora?`,
      resposta: `No momento, a ${topProvider.name} lidera a classificação geral da Shutte, com nota ${topProvider.rating.toFixed(1)}/5 e a menor taxa de reclamação por travamento entre os provedores testados. Veja a análise completa antes de decidir.`,
    },
    {
      pergunta: `Quanto custa um plano de IPTV ${state.em} depois do teste grátis?`,
      resposta: `Os planos dos provedores da classificação começam em ${cheapest.priceFrom}, sem fidelidade — o mesmo preço praticado em todo o Brasil, incluindo ${state.em}.`,
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Shutte", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "IPTV por estado", item: `${SITE_URL}/iptv/` },
      { "@type": "ListItem", position: 3, name: state.name, item: `${SITE_URL}/iptv/${state.slug}/` },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Classificação Shutte de provedores de IPTV ${state.em}`,
    itemListElement: PROVIDERS.map((p) => ({
      "@type": "ListItem",
      position: p.rank,
      url: `${SITE_URL}/analises/${p.slug}/`,
      name: p.name,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: stateFaqs.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">
            {state.region} · {state.uf}
          </div>
          <h1 className="hero-title" id="hero-heading">
            <span className="hl-1">Classificação de IPTV</span> {state.em}: teste grátis 2026
          </h1>
          <p className="hero-desc">
            Todos os provedores da classificação oferecem teste grátis de IPTV {state.em}, sem cartão de crédito e sem fidelidade. Compare estabilidade, suporte e preço antes de assinar — classificação atualizada da Shutte para assinantes {state.de}, de {state.capital} ao interior.
          </p>
          <div className="page-hero-actions">
            <a href="#ranking-estado" className="btn btn-primary">
              Quero testar grátis
              <ArrowRightIcon />
            </a>
            <Link href="/comparativo/" className="btn btn-outline">Comparar lado a lado</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-label={`Contexto de IPTV ${state.em}`}>
        <div className="container">
          <div className="legal-content">
            <p>
              Quer testar <strong style={{ color: "var(--t1)" }}>IPTV grátis {state.em}</strong> antes de assinar? Todos os provedores da classificação Shutte liberam um período de teste sem custo e sem exigir cartão de crédito, para você avaliar a estabilidade e a qualidade de imagem na prática antes de decidir.
            </p>
            <p>{REGION_INTROS[state.region]}</p>
            <p>{state.localNote}</p>
            <p>
              Nenhum provedor da classificação é exclusivo {state.de} — todos atendem o país inteiro pela internet, com o mesmo catálogo de canais ao vivo, filmes, séries e esportes. A diferença entre eles está na estabilidade em horário de pico, na qualidade do suporte e no volume de avaliações de assinantes reais, os mesmos critérios usados na{" "}
              <Link href="/sobre/" style={{ color: "var(--accent)" }}>metodologia da Shutte</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section how-bg" id="ranking-estado" aria-labelledby="ranking-heading" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="label">Classificação e teste grátis {state.em}</div>
          <h2 className="section-heading" id="ranking-heading" style={{ marginTop: "16px" }}>
            Provedores de IPTV recomendados para {state.capital} e demais cidades {state.de}
          </h2>
          <p className="section-subtext">
            Mesma classificação nacional da Shutte, com teste grátis disponível em todos os provedores para qualquer assinante {state.de}.
          </p>

          <div className="ranking-list">
            {PROVIDERS.map((provider) => (
              <ProviderCard key={provider.slug} provider={provider} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <div className="label">FAQ</div>
            <h2 className="section-heading" id="faq-heading" style={{ marginTop: "16px" }}>
              Dúvidas sobre IPTV {state.em}
            </h2>
          </div>

          <FaqAccordion items={stateFaqs} />

          <p className="faq-footer">
            Ainda com dúvida sobre qual escolher?{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener">Pergunte direto no WhatsApp</a>.
          </p>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Outros estados</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>
            Veja a classificação de IPTV em outros estados
          </h2>
          <p className="section-subtext">A classificação é nacional — confira também o comparativo completo ou fale direto com a Shutte.</p>
          <div className="final-actions">
            <Link href="/iptv/" className="btn btn-primary">
              Ver todos os estados
              <ArrowRightIcon />
            </Link>
            <a href={whatsappLink()} className="btn btn-outline" target="_blank" rel="noopener">
              <WhatsAppIcon width={20} height={20} />
              Falar com a Shutte
            </a>
          </div>
          <div className="final-trust">
            <span className="trust-item"><CheckIcon width={16} height={16} />Mesmo catálogo em todo o Brasil</span>
            <span className="trust-item"><HelpCircleIcon width={16} height={16} />Teste grátis antes de contratar</span>
          </div>
        </div>
      </section>
    </>
  );
}
