import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink, CONTACT_EMAIL } from "@/lib/data";
import { WhatsAppIcon, EmailIcon, HelpCircleIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Shutte pelo WhatsApp ou e-mail para tirar dúvidas sobre o ranking, sugerir um provedor ou reportar uma informação desatualizada.",
  alternates: { canonical: "/contato/" },
  openGraph: {
    url: "/contato/",
    title: "Contato | Shutte",
    description: "Fale com a Shutte pelo WhatsApp ou e-mail para tirar dúvidas sobre o ranking, sugerir um provedor ou reportar uma informação desatualizada.",
  },
  twitter: {
    title: "Contato | Shutte",
    description: "Fale com a Shutte pelo WhatsApp ou e-mail para tirar dúvidas sobre o ranking, sugerir um provedor ou reportar uma informação desatualizada.",
  },
};

export default function ContatoPage() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Contato</div>
          <h1 className="hero-title" id="hero-heading">Fale com a Shutte</h1>
          <p className="hero-desc">Dúvidas sobre o ranking, sugestão de provedor ou informação desatualizada — é o mesmo canal.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-heading">
        <div className="container">
          <div className="contact-grid">
            <article className="card contact-card animate-on-scroll">
              <div className="benefit-icon"><WhatsAppIcon width={22} height={22} /></div>
              <h3>WhatsApp</h3>
              <p>Canal mais rápido para dúvidas sobre o ranking e sugestões de provedores.</p>
              <a href={whatsappLink()} className="btn btn-primary" target="_blank" rel="noopener">Chamar no WhatsApp</a>
            </article>
            <article className="card contact-card animate-on-scroll">
              <div className="benefit-icon"><EmailIcon /></div>
              <h3>E-mail</h3>
              <p>Para assuntos que preferem registro por escrito, como questões de privacidade.</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-outline">{CONTACT_EMAIL}</a>
            </article>
            <article className="card contact-card animate-on-scroll">
              <div className="benefit-icon"><HelpCircleIcon /></div>
              <h3>Central de dúvidas</h3>
              <p>Veja se sua pergunta já está respondida na nossa página de FAQ.</p>
              <Link href="/faq/" className="btn btn-outline">Ver perguntas frequentes</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Quer aparecer no ranking?</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>Envie seu provedor para avaliação</h2>
          <p className="section-subtext">Veja os critérios de inclusão na página de anuncie seu site.</p>
          <div className="final-actions">
            <Link href="/anuncie/" className="btn btn-primary">Anuncie seu site</Link>
          </div>
        </div>
      </section>
    </>
  );
}
