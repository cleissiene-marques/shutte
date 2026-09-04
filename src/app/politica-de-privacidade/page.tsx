import type { Metadata } from "next";
import { whatsappLink, CONTACT_EMAIL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Saiba como a Shutte coleta, usa e protege dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: "/politica-de-privacidade/" },
  openGraph: {
    url: "/politica-de-privacidade/",
    title: "Política de Privacidade | Shutte",
    description: "Saiba como a Shutte coleta, usa e protege dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  },
  twitter: {
    title: "Política de Privacidade | Shutte",
    description: "Saiba como a Shutte coleta, usa e protege dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <section className="section page-hero" style={{ paddingTop: "64px" }} aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Legal</div>
          <h1 className="hero-title" id="hero-heading" style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>Política de Privacidade</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">Última atualização: 4 de setembro de 2026</p>

            <h2>1. Quem somos</h2>
            <p>Esta política explica como a Shutte (shutte.com.br) coleta, usa e protege os dados pessoais de quem visita o site ou entra em contato conosco, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).</p>

            <h2>2. Quais dados coletamos</h2>
            <ul>
              <li>Nome e número de WhatsApp, quando enviados voluntariamente ao entrar em contato;</li>
              <li>E-mail, quando enviado voluntariamente por esse canal;</li>
              <li>Dados de navegação anônimos e agregados, coletados via Google Analytics, para entender como o ranking e os artigos são utilizados.</li>
            </ul>

            <h2>3. Para que usamos esses dados</h2>
            <ul>
              <li>Responder dúvidas sobre o ranking e a metodologia;</li>
              <li>Avaliar sugestões de inclusão de provedores;</li>
              <li>Entender o desempenho do site de forma agregada, sem identificar visitantes individualmente.</li>
            </ul>

            <h2>4. Links para sites de terceiros</h2>
            <p>A Shutte contém links para os sites oficiais dos provedores listados no ranking. Não somos responsáveis pelas práticas de privacidade, coleta de dados ou políticas desses sites de terceiros — recomendamos consultar a política de privacidade de cada provedor antes de fornecer dados a ele.</p>

            <h2>5. Compartilhamento com terceiros</h2>
            <p>Não vendemos nem compartilhamos seus dados de contato com terceiros para fins de marketing.</p>

            <h2>6. Seus direitos, conforme a LGPD</h2>
            <p>Você pode, a qualquer momento, solicitar confirmação de tratamento, acesso, correção, exclusão ou portabilidade dos seus dados, além de revogar consentimento dado anteriormente. Para exercer qualquer um desses direitos, envie um e-mail para{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--accent)" }}>{CONTACT_EMAIL}</a>.
            </p>

            <h2>7. Cookies</h2>
            <p>Este site utiliza cookies do Google Analytics para medir audiência de forma agregada. Não utilizamos cookies de rastreamento de terceiros para publicidade personalizada.</p>

            <h2>8. Alterações desta política</h2>
            <p>Podemos atualizar esta política periodicamente. A data da última atualização estará sempre indicada no topo desta página.</p>

            <h2>9. Contato</h2>
            <p>
              Dúvidas sobre esta política podem ser enviadas para{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--accent)" }}>{CONTACT_EMAIL}</a> ou pelo{" "}
              <a href={whatsappLink()} target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>WhatsApp</a>.
            </p>

            <div className="legal-note">Este documento é um modelo inicial de política de privacidade e deve ser revisado por um profissional jurídico antes da publicação oficial, para garantir aderência total à LGPD.</div>
          </div>
        </div>
      </section>
    </>
  );
}
