import type { Metadata } from "next";
import { whatsappLink } from "@/lib/data";
import { CheckIcon, WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Anuncie seu site",
  description: "Quer que seu provedor de IPTV seja avaliado e listado na classificação da Shutte? Veja os critérios de inclusão e como enviar sua sugestão.",
  alternates: { canonical: "/anuncie/" },
  openGraph: {
    url: "/anuncie/",
    title: "Anuncie seu site na Shutte",
    description: "Quer que seu provedor de IPTV seja avaliado e listado na classificação da Shutte? Veja os critérios de inclusão e como enviar sua sugestão.",
  },
  twitter: {
    title: "Anuncie seu site na Shutte",
    description: "Quer que seu provedor de IPTV seja avaliado e listado na classificação da Shutte? Veja os critérios de inclusão e como enviar sua sugestão.",
  },
};

const criteria = [
  "Site próprio com informações claras de preço e planos",
  "Teste grátis disponível, sem exigir cartão de crédito",
  "Canal de suporte ativo (WhatsApp, e-mail ou chat)",
  "Disposição para passar por um período de teste da nossa equipe",
];

export default function AnunciePage() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Para provedores</div>
          <h1 className="hero-title" id="hero-heading">Quer aparecer na classificação da Shutte?</h1>
          <p className="hero-desc">Avaliamos provedores de IPTV com base em critérios objetivos de estabilidade, suporte e transparência. Veja os requisitos antes de enviar sua sugestão.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="criteria-heading">
        <div className="container">
          <div className="legal-content">
            <h2 id="criteria-heading">Critérios mínimos de inclusão</h2>
            <ul>
              {criteria.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <h2>Como funciona o processo</h2>
            <p>Depois de receber a sugestão pelo WhatsApp, aplicamos os mesmos cinco critérios usados em toda a classificação — estabilidade, qualidade de imagem, suporte, transparência de preço e volume de avaliações. O processo pode levar algumas semanas, já que parte da avaliação depende de observar o serviço em diferentes horários.</p>

            <div className="legal-note">Esta página descreve o processo de sugestão de inclusão na classificação. A decisão final sobre publicação, posição e manutenção na classificação é da equipe da Shutte.</div>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Envie sua sugestão</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>Fale com a gente pelo WhatsApp</h2>
          <p className="section-subtext">Envie o nome e o site do provedor para começarmos a avaliação.</p>
          <div className="final-actions">
            <a href={whatsappLink("Olá! Quero sugerir um provedor de IPTV para a classificação da Shutte.")} className="btn btn-primary" target="_blank" rel="noopener">
              <WhatsAppIcon width={20} height={20} />
              Enviar sugestão no WhatsApp
            </a>
          </div>
          <div className="final-trust">
            <span className="trust-item"><CheckIcon width={16} height={16} />Critérios iguais para todos</span>
            <span className="trust-item"><CheckIcon width={16} height={16} />Sem custo para consultar a classificação</span>
          </div>
        </div>
      </section>
    </>
  );
}
