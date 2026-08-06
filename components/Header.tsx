"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Seal from "./Seal";
import { PatternLayer } from "./Ornaments";
import { nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // transparent over the hero, solid after 80px — every route opens with a hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the overlay on route change
  useEffect(() => setOpen(false), [pathname]);

  // lock body scroll while the overlay is open, and allow Escape to close
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("is-locked");
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("is-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isSolid = scrolled;

  return (
    <>
      <header className={`site-header${isSolid ? " is-solid" : ""}`}>
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Qazi Marriage Celebrant — home">
            <Seal id="seal-header" size={42} animate />
            <span className="brand-name">
              Qazi
              <span>Marriage Celebrant</span>
            </span>
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "active" : undefined}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="btn btn-solid header-cta">
            Book a Ceremony
          </Link>

          <button
            type="button"
            className="burger"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`nav-overlay pattern${open ? " is-open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <PatternLayer />
        <button
          type="button"
          className="nav-close"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          ref={closeRef}
        >
          ✕
        </button>
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link${pathname === item.href ? " active" : ""}`}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn btn-gold"
          onClick={() => setOpen(false)}
        >
          Book a Ceremony
        </Link>
      </div>
    </>
  );
}
