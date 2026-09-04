import Link from "next/link";
import { Provider, whatsappLink } from "@/lib/data";
import { ArrowRightIcon, CheckIcon, StarIcon, WhatsAppIcon } from "@/components/Icons";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="stars" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} width={15} height={15} className={i < full ? "star-on" : "star-off"} />
      ))}
    </div>
  );
}

export default function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <article className={`card provider-card animate-on-scroll${provider.featured ? " provider-featured" : ""}`}>
      <div className="provider-rank" aria-hidden="true">#{provider.rank}</div>

      <div className="provider-head">
        <div>
          <span className="provider-badge">{provider.badge}</span>
          <h3 className="provider-name">{provider.name}</h3>
          <div className="provider-rating-row">
            <Stars rating={provider.rating} />
            <span className="provider-rating-val">{provider.rating.toFixed(1)}</span>
            <span className="provider-rating-count">({provider.reviewCount.toLocaleString("pt-BR")} avaliações)</span>
          </div>
        </div>
        <div className="provider-price">
          <span className="provider-price-lbl">a partir de</span>
          <span className="provider-price-val">{provider.priceFrom}</span>
        </div>
      </div>

      <p className="provider-tagline">{provider.tagline}</p>

      <ul className="provider-pros">
        {provider.pros.slice(0, 3).map((pro) => (
          <li key={pro}><CheckIcon width={14} height={14} />{pro}</li>
        ))}
      </ul>

      <div className="provider-actions">
        <a
          href={provider.url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener nofollow sponsored"
          data-provider-outbound={provider.slug}
        >
          Visitar site
          <ArrowRightIcon />
        </a>
        <Link href={`/analises/${provider.slug}/`} className="btn btn-outline">
          Ver análise completa
        </Link>
      </div>

      <a href={whatsappLink()} className="provider-wpp-mini" target="_blank" rel="noopener">
        <WhatsAppIcon width={14} height={14} />
        Falar com a Shutte sobre este provedor
      </a>
    </article>
  );
}
