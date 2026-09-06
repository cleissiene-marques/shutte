import Link from "next/link";
import { WhatsAppIcon, LogoMarkIcon } from "@/components/Icons";
import { whatsappLink, CONTACT_EMAIL, PROVIDERS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="Shutte — página inicial">
              <div className="logo-mark" aria-hidden="true">
                <LogoMarkIcon width={20} height={20} />
              </div>
              <span className="logo-name">Shutte</span>
            </Link>
            <p>Diretório independente que testa e compara provedores de IPTV no Brasil por estabilidade, suporte e transparência de preço.</p>
          </div>

          <nav className="footer-col" aria-label="Navegação do site">
            <h4>Classificação</h4>
            <ul>
              <li><Link href="/">Classificação completa</Link></li>
              <li><Link href="/comparativo/">Comparativo lado a lado</Link></li>
              <li><Link href="/iptv/">IPTV por estado</Link></li>
              {PROVIDERS.slice(0, 3).map((p) => (
                <li key={p.slug}><Link href={`/analises/${p.slug}/`}>{p.name}</Link></li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Links de ajuda">
            <h4>Conteúdo</h4>
            <ul>
              <li><Link href="/blog/">Blog</Link></li>
              <li><Link href="/faq/">Perguntas Frequentes</Link></li>
              <li><Link href="/sobre/">Metodologia</Link></li>
              <li><Link href="/contato/">Contato</Link></li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Informações legais">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/politica-de-privacidade/">Política de Privacidade</Link></li>
              <li><Link href="/termos-de-uso/">Termos de Uso</Link></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Shutte · shutte.com.br · Todos os direitos reservados.
            <br />
            <small style={{ color: "var(--t3)" }}>
              Diretório independente de comparação de provedores de IPTV. Veja nossa{" "}
              <Link href="/sobre/" style={{ color: "var(--t3)", textDecoration: "underline" }}>metodologia de avaliação</Link>.
            </small>
          </p>
          <a href={whatsappLink()} className="footer-wpp" target="_blank" rel="noopener">
            <WhatsAppIcon width={18} height={18} />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
