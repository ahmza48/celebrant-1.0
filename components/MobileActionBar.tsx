"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/** Appears once the hero has scrolled out of view. Under 768px only (CSS). */
export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>(".hero");
      const threshold = hero
        ? hero.offsetTop + hero.offsetHeight - 120
        : window.innerHeight * 0.6;
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`action-bar${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <a
        className="ab-whatsapp"
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
      <a className="ab-call" href={site.phoneHref}>
        Call Now
      </a>
    </div>
  );
}
