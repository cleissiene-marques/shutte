import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos e condições de uso do site Shutte: natureza do ranking, relação com provedores listados, responsabilidades e limitações.",
  alternates: { canonical: "/termos-de-uso/" },
  openGraph: {
    url: "/termos-de-uso/",
    title: "Termos de Uso | Shutte",
    description: "Termos e condições de uso do site Shutte: natureza do ranking, relação com provedores listados, responsabilidades e limitações.",
  },
  twitter: {
    title: "Termos de Uso | Shutte",
    description: "Termos e condições de uso do site Shutte: natureza do ranking, relação com provedores listados, responsabilidades e limitações.",
  },
};

export default function TermosDeUsoPage() {
  return (
    <>
      <section className="section page-hero" style={{ paddingTop: "64px" }} aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Legal</div>
          <h1 className="hero-title" id="hero-heading" style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>Termos de Uso</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">Última atualização: 4 de setembro de 2026</p>

            <h2>1. Aceitação dos termos</h2>
            <p>Ao utilizar este site, você concorda com os termos descritos abaixo. Se não concordar com algum ponto, recomendamos não utilizar o serviço.</p>

            <h2>2. Descrição do serviço</h2>
            <p>A Shutte é um diretório de conteúdo que compara e avalia provedores de IPTV no Brasil, com base em critérios próprios descritos na página de{" "}
              <Link href="/sobre/" style={{ color: "var(--accent)" }}>metodologia</Link>. A Shutte não vende, revende nem opera diretamente nenhum serviço de IPTV.
            </p>

            <h2>3. Natureza informativa do ranking</h2>
            <p>As notas, posições e análises publicadas neste site refletem uma avaliação própria da Shutte, baseada em testes e no histórico de avaliações de assinantes reportadas pelos provedores. Não garantimos que a experiência individual de cada usuário corresponda exatamente à nota publicada.</p>

            <h2>4. Relação com provedores listados</h2>
            <p>Conforme informado na página de metodologia, parte dos provedores listados pertence ao mesmo grupo empresarial que mantém a Shutte. Essa relação não altera os critérios de avaliação aplicados.</p>

            <h2>5. Contratação com terceiros</h2>
            <p>A contratação de qualquer plano, o pagamento e o suporte técnico são realizados diretamente com o provedor escolhido, em seu próprio site e sob seus próprios termos. A Shutte não é parte nessa relação e não se responsabiliza por problemas na prestação do serviço pelo provedor.</p>

            <h2>6. Propriedade intelectual</h2>
            <p>A marca Shutte, o layout, os textos e as análises deste site são de uso exclusivo da empresa. É proibida a reprodução total ou parcial sem autorização prévia.</p>

            <h2>7. Limitação de responsabilidade</h2>
            <p>O conteúdo deste site tem caráter informativo. Não nos responsabilizamos por decisões de contratação tomadas exclusivamente com base no ranking, nem por mudanças posteriores na qualidade dos provedores listados.</p>

            <h2>8. Alterações nos termos</h2>
            <p>Estes termos podem ser atualizados periodicamente. A data da última atualização está indicada no topo desta página.</p>

            <h2>9. Legislação aplicável</h2>
            <p>Estes termos são regidos pelas leis da República Federativa do Brasil, incluindo o Código de Defesa do Consumidor e a LGPD, sendo eleito o foro do domicílio do usuário para dirimir eventuais controvérsias, quando aplicável.</p>

            <div className="legal-note">Este documento é um modelo inicial de termos de uso e deve ser revisado por um profissional jurídico antes da publicação oficial, considerando as regras de publicidade e comparação de serviços aplicáveis ao negócio.</div>
          </div>
        </div>
      </section>
    </>
  );
}
