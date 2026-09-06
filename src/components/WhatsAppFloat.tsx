import { MedalIcon } from "@/components/Icons";
import { PROVIDERS } from "@/lib/data";

const topProvider = PROVIDERS[0];

export default function WhatsAppFloat() {
  return (
    <a
      href={topProvider.url}
      className="wpp-float"
      target="_blank"
      rel="noopener nofollow sponsored"
      aria-label={`Visitar ${topProvider.name}, nº1 da classificação`}
      data-provider-outbound={topProvider.slug}
    >
      <MedalIcon width={26} height={26} />
      <span className="wpp-float-tooltip">Ver o nº1 da classificação</span>
    </a>
  );
}
