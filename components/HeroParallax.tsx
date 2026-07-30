"use client";

import { useEffect } from "react";

/** Moves the hero photograph at 0.4x scroll speed. Subtle depth, not drama. */
export default function HeroParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const media = document.querySelector<HTMLElement>(".hero-home .hero-media");
    if (!media) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      // stop working once the hero is well off screen
      if (y > window.innerHeight * 1.2) return;
      media.style.transform = `translate3d(0, ${y * 0.4}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      media.style.transform = "";
    };
  }, []);

  return null;
}
