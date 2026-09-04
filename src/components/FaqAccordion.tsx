"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/Icons";

export type FaqEntry = {
  pergunta: string;
  resposta: React.ReactNode;
};

export default function FaqAccordion({ items }: { items: FaqEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-grid" role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.pergunta} className={`faq-item${isOpen ? " open" : ""}`} role="listitem">
            <button
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.pergunta}
              <span className="faq-chevron" aria-hidden="true">
                <ChevronDownIcon width={12} height={12} />
              </span>
            </button>
            <div className="faq-a" role="region">
              {item.resposta}
            </div>
          </div>
        );
      })}
    </div>
  );
}
