"use client";

import { useId, useState } from "react";
import type { FaqGroup } from "@/lib/faq";

export default function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  const baseId = useId().replace(/:/g, "");
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      {groups.map((group, gi) => (
        <div className="faq-group" key={group.heading}>
          <h2 className="reveal">{group.heading}</h2>

          {group.items.map((item, ii) => {
            const key = `${gi}-${ii}`;
            const isOpen = open === key;
            const panelId = `${baseId}-panel-${key}`;
            const buttonId = `${baseId}-button-${key}`;

            return (
              <div className="faq-item reveal" key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : key)}
                  >
                    <span>{item.q}</span>
                    <svg
                      className="chev"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 6l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`faq-a${isOpen ? " is-open" : ""}`}
                >
                  <div>
                    <div className="faq-a-inner">
                      {item.a.map((para, pi) => (
                        <p key={pi}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}
