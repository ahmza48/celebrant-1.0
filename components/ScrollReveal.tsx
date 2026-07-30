"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR =
  ".reveal:not(.is-visible), .rule-draw:not(.is-visible), .journey:not(.is-visible), .verse-arabic:not(.is-visible)";

/**
 * One observer for the whole page. Elements opt in with a class and reveal
 * once. Mounted in the layout, re-scanned on route change.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));

    if (reduce || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => {
      // anything already in view on load reveals immediately
      const box = el.getBoundingClientRect();
      if (box.top < window.innerHeight && box.bottom > 0) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
