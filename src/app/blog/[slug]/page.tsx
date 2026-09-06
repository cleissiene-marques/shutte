import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      url: `/blog/${post.slug}/`,
      title: post.title,
      description: post.description,
      type: "article",
    },
    twitter: {
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">{post.badge}</div>
          <h1 className="hero-title" id="hero-heading">{post.title}</h1>
          <p className="hero-desc">{post.excerpt}</p>
          <p className="legal-updated" style={{ marginTop: "16px" }}>
            Publicado em {formatDate(post.date)} · {post.readTime} de leitura
          </p>
        </div>
      </section>

      <section className="section" aria-label={post.title}>
        <div className="container">
          <div className="legal-content">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs?.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section how-bg" aria-labelledby="related-heading">
        <div className="container">
          <div className="label">Continue lendo</div>
          <h2 className="section-heading" id="related-heading" style={{ marginTop: "16px" }}>Outros artigos</h2>

          <div className="blog-grid" style={{ marginTop: "48px" }}>
            {related.map((r) => (
              <Link href={`/blog/${r.slug}/`} className="card blog-card animate-on-scroll" key={r.slug}>
                <span className="blog-card-badge">{r.badge}</span>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Classificação Shutte</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>Veja quem está no topo da classificação</h2>
          <p className="section-subtext">Compare os provedores mais bem avaliados e leia a análise completa de cada um.</p>
          <div className="final-actions">
            <Link href="/#ranking" className="btn btn-primary">Ver classificação completa</Link>
            <Link href="/comparativo/" className="btn btn-outline">Ver comparativo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
