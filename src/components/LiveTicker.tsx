import { PROVIDERS } from "@/lib/data";
import LiveDate from "@/components/LiveDate";

const SEP = <span className="live-ticker-sep" key="sep">•</span>;

function TickerItems({ keyPrefix }: { keyPrefix: string }) {
  const top = PROVIDERS[0];
  const totalReviews = PROVIDERS.reduce((sum, p) => sum + p.reviewCount, 0);

  const items = [
    <span className="live-ticker-item" key="updated">
      <span className="live-ticker-dot" aria-hidden="true"></span>
      Ranking atualizado em <strong><LiveDate /></strong>
    </span>,
    <span className="live-ticker-item" key="top">
      Nº 1 <strong>{top.name}</strong> · nota {top.rating.toFixed(1)}
    </span>,
    <span className="live-ticker-item" key="providers">
      <strong>Dezenas</strong> de provedores auditados
    </span>,
    <span className="live-ticker-item" key="reviews">
      <strong>{totalReviews.toLocaleString("pt-BR")}+</strong> avaliações verificadas
    </span>,
    <span className="live-ticker-item" key="criteria">
      <strong>5</strong> critérios de avaliação
    </span>,
    <span className="live-ticker-item" key="trial">
      <strong>100%</strong> com teste grátis
    </span>,
    <span className="live-ticker-item" key="coverage">
      Cobertura Brasil — todas as regiões
    </span>,
  ];

  return (
    <>
      {items.map((item, i) => (
        <span className="live-ticker-group" key={`${keyPrefix}-${i}`}>
          {item}
          {SEP}
        </span>
      ))}
    </>
  );
}

export default function LiveTicker() {
  return (
    <div className="live-ticker" aria-hidden="true">
      <div className="live-ticker-track">
        <TickerItems keyPrefix="a" />
        <TickerItems keyPrefix="b" />
      </div>
    </div>
  );
}
