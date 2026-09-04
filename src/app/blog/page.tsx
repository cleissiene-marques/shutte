import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/data";
import { blogPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Como escolher e comparar provedores de IPTV",
  description: "Artigos práticos sobre como comparar provedores de IPTV, identificar sinais de confiança e aproveitar o teste grátis antes de assinar.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    url: "/blog/",
    title: "Blog Shutte — Como escolher e comparar provedores de IPTV",
    description: "Artigos práticos sobre como comparar provedores de IPTV, identificar sinais de confiança e aproveitar o teste grátis antes de assinar.",
  },
  twitter: {
    title: "Blog Shutte — Como escolher e comparar provedores de IPTV",
    description: "Artigos práticos sobre como comparar provedores de IPTV, identificar sinais de confiança e aproveitar o teste grátis antes de assinar.",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Blog</div>
          <h1 className="hero-title" id="hero-heading">Guias para escolher o IPTV certo</h1>
          <p className="hero-desc">
            Artigos sobre como comparar provedores, reconhecer sinais de confiança e aproveitar o período de teste grátis — escritos para ajudar na decisão, não para vender um serviço específico.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="posts-heading">
        <div className="container">
          <div className="label">Artigos</div>
          <h2 className="section-heading" id="posts-heading" style={{ marginTop: "16px" }}>Últimas publicações</h2>

          <div className="blog-grid" style={{ marginTop: "48px" }}>
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}/`} className="card blog-card animate-on-scroll" key={post.slug}>
                <span className="blog-card-badge">{post.badge}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </Link>
            ))}
          </div>

          <p className="blog-notice">
            Quer sugerir um tema? Mande a ideia pelo{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>WhatsApp</a>.
          </p>
        </div>
      </section>
    </>
  );
}
