import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/data";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Perguntas Frequentes sobre o ranking Shutte",
  description: "Tire suas dúvidas sobre como a Shutte avalia provedores de IPTV, a relação com as marcas listadas e como usar o ranking para escolher bem.",
  alternates: { canonical: "/faq/" },
  openGraph: {
    url: "/faq/",
    title: "Perguntas Frequentes | Shutte",
    description: "Tire suas dúvidas sobre como a Shutte avalia provedores de IPTV, a relação com as marcas listadas e como usar o ranking para escolher bem.",
  },
  twitter: {
    title: "Perguntas Frequentes | Shutte",
    description: "Tire suas dúvidas sobre como a Shutte avalia provedores de IPTV, a relação com as marcas listadas e como usar o ranking para escolher bem.",
  },
};

const faqs = [
  {
    pergunta: "O que é a Shutte?",
    resposta: "A Shutte é um diretório de comparação de provedores de IPTV no Brasil. Testamos e avaliamos cada provedor por estabilidade, suporte e transparência de preço, e organizamos os resultados num ranking único.",
  },
  {
    pergunta: "A Shutte cobra alguma coisa para aparecer no ranking?",
    resposta: "Não cobramos do consumidor para consultar o ranking. A Shutte pode ter relação comercial ou societária com alguns dos provedores listados — essa relação é informada de forma transparente na página de metodologia.",
  },
  {
    pergunta: "Como são calculadas as notas?",
    resposta: "Cada provedor recebe uma nota que combina cinco critérios: estabilidade em horário de pico, qualidade de imagem entregue, velocidade e qualidade do suporte, transparência de condições e volume/consistência das avaliações de assinantes.",
  },
  {
    pergunta: "Os mesmos critérios valem para todos os provedores?",
    resposta: "Sim. Aplicamos os mesmos cinco critérios a todos os provedores analisados, independentemente de haver ou não relação societária com a Shutte.",
  },
  {
    pergunta: "Posso confiar na nota mesmo sabendo que alguns provedores são do mesmo grupo?",
    resposta: (
      <>
        Recomendamos usar o ranking como ponto de partida, não como decisão final. Sempre solicite o teste grátis do provedor antes de contratar — todos os listados oferecem. Veja também nosso{" "}
        <Link href="/blog/como-comparar-provedores-de-iptv/" style={{ color: "var(--accent)" }}>guia de comparação</Link>{" "}
        para avaliar com seus próprios critérios.
      </>
    ),
    respostaTexto: "Recomendamos usar o ranking como ponto de partida, não como decisão final. Sempre solicite o teste grátis do provedor antes de contratar.",
  },
  {
    pergunta: "Como sugiro um provedor para ser avaliado?",
    resposta: "Envie o nome e o site do provedor pelo WhatsApp da Shutte. Avaliamos a inclusão conforme os mesmos critérios aplicados aos demais.",
  },
  {
    pergunta: "A Shutte oferece suporte técnico do IPTV?",
    resposta: "Não. O suporte técnico, a instalação e o pagamento são sempre feitos diretamente com o provedor escolhido, pelo canal de atendimento dele.",
  },
  {
    pergunta: "Com que frequência o ranking é atualizado?",
    resposta: "Reavaliamos periodicamente com base em novos testes de estabilidade e no histórico de avaliações de assinantes, então a posição de cada provedor pode mudar ao longo do tempo.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: "respostaTexto" in f ? f.respostaTexto : (f.resposta as string),
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">FAQ</div>
          <h1 className="hero-title" id="hero-heading">Perguntas frequentes</h1>
          <p className="hero-desc">Dúvidas comuns sobre o ranking, a metodologia e a relação da Shutte com os provedores listados.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-list-heading">
        <div className="container">
          <h2 className="section-heading" id="faq-list-heading" style={{ textAlign: "center" }}>Dúvidas rápidas sobre a Shutte</h2>
          <FaqAccordion items={faqs} />
          <p className="faq-footer">
            Não encontrou o que precisava? <a href={whatsappLink()} target="_blank" rel="noopener">Pergunte direto no WhatsApp</a>.
          </p>
        </div>
      </section>
    </>
  );
}
