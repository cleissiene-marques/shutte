import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink, PROVIDERS, RANKING_METHOD } from "@/lib/data";
import ProviderCard from "@/components/ProviderCard";
import LiveDate from "@/components/LiveDate";
import {
  WhatsAppIcon,
  ArrowRightIcon,
  CheckIcon,
  GaugeIcon,
  ShieldCheckIcon,
  HeadsetIcon,
  ScaleIcon,
  ListCheckIcon,
} from "@/components/Icons";
import FaqAccordion from "@/components/FaqAccordion";
import BlogPreview from "@/components/BlogPreview";

export const metadata: Metadata = {
  title: "Shutte – Classificação de IPTV 2026: Compare e Teste Grátis",
  description:
    "A Shutte é um diretório independente que classifica provedores de IPTV por estabilidade, suporte e transparência de preço. Compare a classificação atualizada e escolha com segurança — não vendemos IPTV.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Shutte – Classificação de IPTV 2026: Compare e Teste Grátis",
    description:
      "Diretório independente que classifica provedores de IPTV por estabilidade, suporte e preço. Compare antes de escolher.",
  },
  twitter: {
    title: "Shutte – Classificação de IPTV 2026: Compare e Teste Grátis",
    description: "Diretório independente que classifica provedores de IPTV por estabilidade, suporte e preço. Compare antes de escolher.",
  },
};

const homeFaqs = [
  {
    pergunta: "Como a Shutte monta a classificação de provedores de IPTV?",
    resposta:
      "Avaliamos cada provedor por cinco critérios: estabilidade em horário de pico, qualidade de imagem entregue, velocidade e qualidade do suporte, transparência de preço e volume/consistência das avaliações de assinantes. Veja o detalhe completo na página de metodologia.",
  },
  {
    pergunta: "A Shutte vende IPTV diretamente?",
    resposta:
      "Não. A Shutte é um diretório de comparação: nós avaliamos os provedores e direcionamos você para o site oficial de cada um para testar e contratar. A contratação e o suporte pós-venda são sempre com o provedor escolhido.",
  },
  {
    pergunta: "A classificação muda com o tempo?",
    resposta:
      "Sim. Reavaliamos periodicamente estabilidade, suporte e avaliações de assinantes, então a posição de cada provedor pode mudar conforme novos dados chegam.",
  },
  {
    pergunta: "Todos os provedores listados têm teste grátis?",
    resposta: "Sim. Todos os provedores da nossa classificação oferecem período de teste sem custo, sem exigir cartão de crédito, para você avaliar a estabilidade antes de contratar.",
  },
  {
    pergunta: "Como entro em contato sobre um provedor específico?",
    resposta: "Você pode falar direto com a Shutte pelo WhatsApp para tirar dúvidas sobre a classificação, ou visitar o site oficial do provedor escolhido para negociar diretamente com o suporte dele.",
  },
];

export default function HomePage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Classificação Shutte de provedores de IPTV",
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
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  };

  const topThree = PROVIDERS.slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ===== HERO ===== */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="label">Classificação independente, atualizada 2026</span>
              </div>

              <h1 className="hero-title" id="hero-heading">
                A <span className="hl-1">classificação de IPTV</span> mais confiável do Brasil,<br />
                segundo testes <span className="hl-2">reais</span>,<br />
                não anúncio
              </h1>

              <p className="hero-desc">
                A Shutte é um diretório de comparação: testamos provedores de IPTV por estabilidade em horário de pico, qualidade de suporte e transparência de preço — e organizamos tudo numa classificação única, para você comparar antes de escolher. Não vendemos IPTV nem operamos nenhum serviço de streaming.
              </p>

              <div className="hero-actions">
                <a href="#ranking" className="btn btn-primary">
                  Ver classificação completa
                  <ArrowRightIcon />
                </a>
                <Link href="/comparativo/" className="btn btn-outline">
                  Comparar lado a lado
                </Link>
              </div>

              <div className="hero-social-proof">
                <div className="hero-rating">
                  <div>
                    <div className="hero-rating-score">Dezenas de provedores</div>
                    <div className="hero-rating-text">auditados — veja os mais bem avaliados</div>
                  </div>
                </div>
                <div className="hero-divider-v" aria-hidden="true"></div>
                <p className="hero-proof-item"><strong>5</strong> critérios de avaliação</p>
                <div className="hero-divider-v" aria-hidden="true"></div>
                <p className="hero-proof-item">Teste grátis em <strong>100%</strong> dos listados</p>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-mockup">
                <div className="board-bar">
                  <span className="board-live-dot"></span>
                  <span className="board-bar-label">Console Shutte · Top 3</span>
                  <span className="board-bar-status">Ao vivo</span>
                </div>
                <div className="board-body">
                  {topThree.map((p) => (
                    <div className={`board-row${p.rank === 1 ? " is-first" : ""}`} key={p.slug}>
                      <div className="board-row-top">
                        <span className="board-rank">{p.rank}</span>
                        <div className="board-row-info">
                          <strong>{p.name}</strong>
                          <span>{p.reviewCount.toLocaleString("pt-BR")} avaliações</span>
                        </div>
                        <span className="board-row-score">{p.rating.toFixed(1)}</span>
                      </div>
                      <div className="board-row-track">
                        <div className="board-row-fill" style={{ width: `${(p.rating / 5) * 100}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="board-footer">
                  <span className="board-footer-status">
                    <span className="board-live-dot" aria-hidden="true"></span>
                    Verificado em <LiveDate />
                  </span>
                </div>
              </div>
              <div className="hero-floating">
                <div className="hf-icon">
                  <ShieldCheckIcon width={16} height={16} />
                </div>
                <div className="hf-text">
                  <strong>Critérios auditados</strong>
                  <span>estabilidade, suporte e preço</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="stats-strip" aria-label="Números da classificação Shutte">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">Dezenas</div>
              <div className="stat-label">De provedores de IPTV auditados</div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">5</div>
              <div className="stat-label">Critérios objetivos de avaliação</div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">R$ 25</div>
              <div className="stat-label">Menor mensalidade encontrada na classificação</div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">100%</div>
              <div className="stat-label">Dos listados oferecem teste grátis</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RANKING ===== */}
      <section className="section" id="ranking" aria-labelledby="ranking-heading">
        <div className="container">
          <div className="label">Classificação</div>
          <h2 className="section-heading" id="ranking-heading" style={{ marginTop: "16px" }}>
            Os provedores de IPTV mais bem avaliados
          </h2>
          <p className="section-subtext">
            Ordenados pela nota geral, que combina estabilidade, suporte, transparência de preço e volume de avaliações.
          </p>

          <div className="ranking-list">
            {PROVIDERS.map((provider) => (
              <ProviderCard key={provider.slug} provider={provider} />
            ))}
          </div>

          <p className="blog-notice" style={{ textAlign: "left", marginInline: 0 }}>
            Quer ver a classificação com contexto do seu estado?{" "}
            <Link href="/iptv/" style={{ color: "var(--accent)" }}>Veja o IPTV por estado</Link>.
          </p>
        </div>
      </section>

      {/* ===== METHODOLOGY ===== */}
      <section className="section how-bg" aria-labelledby="method-heading" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="diff-intro">
            <div>
              <div className="label">Metodologia</div>
              <h2 className="section-heading" id="method-heading" style={{ marginTop: "16px" }}>
                Como avaliamos cada provedor
              </h2>
            </div>
            <div>
              <p className="section-subtext" style={{ marginTop: 0 }}>
                Nenhum critério isolado decide a posição na classificação. Combinamos testes práticos com o histórico de avaliações de assinantes reais.{" "}
                <Link href="/sobre/" style={{ color: "var(--accent)" }}>Veja a metodologia completa</Link>.
              </p>
            </div>
          </div>

          <div className="diff-grid">
            {RANKING_METHOD.map((item, i) => (
              <article className="card diff-card animate-on-scroll" key={item.title}>
                <div className="diff-icon">
                  {i === 0 && <GaugeIcon width={22} height={22} />}
                  {i === 1 && <ShieldCheckIcon width={22} height={22} />}
                  {i === 2 && <HeadsetIcon width={22} height={22} />}
                  {i === 3 && <ScaleIcon width={22} height={22} />}
                  {i === 4 && <ListCheckIcon width={22} height={22} />}
                </div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BlogPreview />

      {/* ===== FAQ ===== */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <div className="label">FAQ</div>
            <h2 className="section-heading" id="faq-heading" style={{ marginTop: "16px" }}>
              Dúvidas sobre a classificação da Shutte
            </h2>
            <p className="section-subtext" style={{ marginInline: "auto" }}>
              A lista completa de perguntas está na página de{" "}
              <Link href="/faq/" style={{ color: "var(--accent)" }}>FAQ</Link>.
            </p>
          </div>

          <FaqAccordion items={homeFaqs} />

          <p className="faq-footer">
            Não encontrou o que precisava?{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener">Pergunte direto no WhatsApp</a>.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Comparativo completo</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>
            Veja todos os provedores lado a lado
          </h2>
          <p className="section-subtext">
            Preço, nota, suporte e destaque de cada provedor numa única tabela, para comparar em segundos.
          </p>

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

          <div className="final-trust">
            <span className="trust-item"><CheckIcon width={16} height={16} />Testado por horário de pico</span>
            <span className="trust-item"><CheckIcon width={16} height={16} />Critérios iguais para todos</span>
            <span className="trust-item"><CheckIcon width={16} height={16} />Classificação atualizada periodicamente</span>
          </div>
        </div>
      </section>
    </>
  );
}
