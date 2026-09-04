"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WhatsAppIcon, LogoMarkIcon, CloseIcon } from "@/components/Icons";
import { whatsappLink } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Ranking" },
  { href: "/comparativo/", label: "Comparativo" },
  { href: "/blog/", label: "Blog" },
  { href: "/faq/", label: "FAQ" },
  { href: "/sobre/", label: "Metodologia" },
  { href: "/contato/", label: "Contato" },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuAberto(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  return (
    <>
      <div className="announcement-bar" role="region" aria-label="Aviso">
        Ranking atualizado com testes reais de estabilidade e suporte ·{" "}
        <Link href="/#ranking">Ver os provedores mais bem avaliados →</Link>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="logo" aria-label="Shutte — página inicial">
            <div className="logo-mark" aria-hidden="true">
              <LogoMarkIcon width={20} height={20} />
            </div>
            <span className="logo-name">Shutte</span>
          </Link>

          <nav className="nav-links" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={pathname === link.href ? "active" : ""}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <a href={whatsappLink()} className="btn btn-primary" target="_blank" rel="noopener">
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
          </div>

          <button
            className="hamburger"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <nav className={`mobile-nav${menuAberto ? " open" : ""}`} aria-label="Menu mobile">
        <div className="mobile-nav-head">
          <Link href="/" className="logo" onClick={() => setMenuAberto(false)}>
            <div className="logo-mark" aria-hidden="true">
              <LogoMarkIcon width={20} height={20} />
            </div>
            <span className="logo-name">Shutte</span>
          </Link>
          <button aria-label="Fechar menu" onClick={() => setMenuAberto(false)}>
            <CloseIcon />
          </button>
        </div>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMenuAberto(false)}>
            {link.label}
          </Link>
        ))}
        <a href={whatsappLink()} className="btn btn-primary" target="_blank" rel="noopener">
          Falar no WhatsApp
        </a>
      </nav>
    </>
  );
}
