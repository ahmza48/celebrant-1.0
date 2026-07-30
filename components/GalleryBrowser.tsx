"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Photo from "./Photo";
import Seal from "./Seal";
import { photo, fallbackPhoto } from "@/lib/images";
import {
  gallery,
  galleryFilters,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/content";

type Filter = GalleryCategory | "all";

const FADE_MS = 350;

export default function GalleryBrowser() {
  const [filter, setFilter] = useState<Filter>("all");
  const [shown, setShown] = useState<string[]>(() => gallery.map((g) => g.seed));
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const matches = useCallback(
    (item: GalleryItem) => filter === "all" || item.category === filter,
    [filter],
  );

  // fade the leaving tiles out first, then remove them from the flow
  useEffect(() => {
    const next = gallery.filter(matches).map((g) => g.seed);
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(() => setShown(next), reduce ? 0 : FADE_MS);
    return () => clearTimeout(timer);
  }, [matches]);

  // the list the lightbox arrows walk through
  const visible = useMemo(
    () => gallery.filter((g) => shown.includes(g.seed) && matches(g)),
    [shown, matches],
  );

  const close = useCallback(() => {
    setLightbox(null);
    lastFocused.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setLightbox((current) => {
        if (current === null || visible.length === 0) return current;
        return (current + delta + visible.length) % visible.length;
      });
    },
    [visible.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    document.body.classList.add("is-locked");
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("is-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, step]);

  // a filter change must not leave the lightbox pointing at a removed tile
  useEffect(() => {
    setLightbox((current) =>
      current !== null && current >= visible.length ? null : current,
    );
  }, [visible.length]);

  const open = (seed: string, event: React.MouseEvent<HTMLButtonElement>) => {
    const index = visible.findIndex((g) => g.seed === seed);
    if (index < 0) return;
    lastFocused.current = event.currentTarget;
    setLightbox(index);
  };

  const chunks = [gallery.slice(0, 10), gallery.slice(10)];
  const active = lightbox !== null ? visible[lightbox] : null;

  return (
    <>
      <div className="gallery-filters">
        <div className="container">
          <div
            className="filter-row"
            role="group"
            aria-label="Filter ceremonies by type"
          >
            {galleryFilters.map((option) => (
              <button
                key={option.id}
                type="button"
                className="filter-btn"
                aria-pressed={filter === option.id}
                onClick={() => setFilter(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {chunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex}>
          {chunkIndex === 1 && (
            <section className="pull-quote">
              <p>
                “Every family arrives with its own way of doing things. My job
                is to learn it, not to change it.”
              </p>
            </section>
          )}

          <section className="section section-tight bg-ivory">
            <div className="container">
              <div className="masonry">
                {chunk.map((item) => {
                  const isShown = shown.includes(item.seed);
                  const isFading = isShown && !matches(item);
                  return (
                    <div
                      key={item.seed}
                      className={`masonry-item${!isShown ? " is-hidden" : ""}${
                        isFading ? " is-fading" : ""
                      }`}
                      data-category={item.category}
                    >
                      <button
                        type="button"
                        className="tile"
                        onClick={(e) => open(item.seed, e)}
                        aria-label={`Open image: ${item.caption}`}
                      >
                        <Photo
                          src={photo(item.term, item.seed, item.w, item.h)}
                          fallback={fallbackPhoto(item.seed, item.w, item.h)}
                          alt={item.caption}
                          width={item.w}
                          height={item.h}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <span className="tile-overlay">
                          <span className="brass" />
                          <span>{item.caption}</span>
                        </span>
                        <Seal
                          id={`wm-${item.seed}`}
                          size={46}
                          className="seal-watermark"
                        />
                      </button>
                    </div>
                  );
                })}
              </div>

              {visible.length === 0 && (
                <p className="center quiet">
                  No ceremonies of that type yet. Choose “All” to see everything.
                </p>
              )}
            </div>
          </section>
        </div>
      ))}

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            type="button"
            className="lb-btn lb-close"
            onClick={close}
            aria-label="Close image viewer"
            ref={closeRef}
          >
            ✕
          </button>
          <button
            type="button"
            className="lb-btn lb-prev"
            onClick={() => step(-1)}
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            type="button"
            className="lb-btn lb-next"
            onClick={() => step(1)}
            aria-label="Next image"
          >
            →
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo(active.term, active.seed, 1200, 1500)}
            alt={active.caption}
            width={1200}
            height={1500}
            onError={(e) => {
              const el = e.currentTarget;
              const fb = fallbackPhoto(active.seed, 1200, 1500);
              if (el.src !== fb) el.src = fb;
            }}
          />
          <p className="lb-caption">
            {active.caption}
            <span className="kind">
              {galleryFilters.find((f) => f.id === active.category)?.label}
              {lightbox !== null && ` · ${lightbox + 1} of ${visible.length}`}
            </span>
          </p>
        </div>
      )}
    </>
  );
}
