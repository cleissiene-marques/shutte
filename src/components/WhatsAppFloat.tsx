import { WhatsAppIcon } from "@/components/Icons";
import { whatsappLink } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Olá! Vim pelo ranking da Shutte e quero saber mais.")}
      className="wpp-float"
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon width={28} height={28} />
      <span className="wpp-float-tooltip">Fale com a gente</span>
    </a>
  );
}
