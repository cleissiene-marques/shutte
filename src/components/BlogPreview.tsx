import Link from "next/link";
import { blogPosts } from "@/lib/posts";
import { ArrowRightIcon } from "@/components/Icons";

export default function BlogPreview() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="section" aria-labelledby="blog-preview-heading">
      <div className="container">
        <div className="label">Blog</div>
        <h2 className="section-heading" id="blog-preview-heading" style={{ marginTop: "16px" }}>
          Guias para escolher melhor
        </h2>
        <p className="section-subtext">
          Artigos sobre como comparar provedores, identificar sinais de confiança e aproveitar o teste grátis.
        </p>

        <div className="blog-grid">
          {featured.map((post) => (
            <Link href={`/blog/${post.slug}/`} className="card blog-card animate-on-scroll" key={post.slug}>
              <span className="blog-card-badge">{post.badge}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/blog/" className="btn btn-outline">
            Ver todos os artigos do blog
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
