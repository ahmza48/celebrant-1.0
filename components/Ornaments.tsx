import type { CSSProperties } from "react";

/** Geometric star texture layer. Drop inside an element with `.pattern`. */
export function PatternLayer({ onLight = false }: { onLight?: boolean }) {
  return (
    <span
      className={`pattern-layer${onLight ? " on-light" : ""}`}
      aria-hidden="true"
    />
  );
}

/** Double gold rule with a centred diamond. Replaces every <hr> on the site. */
export function GoldRule({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`rule rule-draw ${className}`.trim()}
      style={style}
      aria-hidden="true"
    >
      <span className="diamond">◆</span>
    </div>
  );
}

/** Section divider: 2px rule plus the 1px hairline 5px beneath it. */
export function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <div className="container">
        <div className="rule rule-draw rule-double">
          <span className="diamond">◆</span>
          <span className="hairline" />
        </div>
      </div>
    </div>
  );
}

/** Thin gold outline tracing a stretched pointed arch. Pair with `.arch`. */
export function ArchOutline() {
  return (
    <svg
      className="arch-outline"
      viewBox="0 0 100 160"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 160 L0 100 A100 100 0 0 1 50 13.4 A100 100 0 0 1 100 100 L100 160"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Gold outline for a card arch: the crown, then straight sides down. */
export function ArchCapOutline() {
  return (
    <span className="arch-stack arch-outline-cap" aria-hidden="true">
      <span className="cap">
        <svg viewBox="0 0 100 72" preserveAspectRatio="none">
          <path
            d="M0 72 A76.84 76.84 0 0 1 50 0 A76.84 76.84 0 0 1 100 72"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </span>
      <span className="body" />
    </span>
  );
}

/** Small eight-pointed star sitting inside the crown of a card arch. */
export function CrownMark() {
  return (
    <span className="crown-mark" aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none">
        <rect
          x="8.5"
          y="8.5"
          width="23"
          height="23"
          stroke="currentColor"
          strokeWidth="1"
        />
        <rect
          x="8.5"
          y="8.5"
          width="23"
          height="23"
          stroke="currentColor"
          strokeWidth="1"
          transform="rotate(45 20 20)"
        />
        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="0.9" />
      </svg>
    </span>
  );
}

/** Filled background for a card arch. Colour comes from --surface-bg. */
export function ArchSurface() {
  return (
    <span className="arch-stack arch-surface" aria-hidden="true">
      <span className="cap" />
      <span className="body" />
    </span>
  );
}

function ArabesqueCorner() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M1 39V13C1 6.4 6.4 1 13 1h26"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M8 32V16c0-4.4 3.6-8 8-8h16"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.6"
      />
      <path
        d="M16 8c0 4-2 6-6 7 4 1 6 3 7 7 1-4 3-6 7-7-4-1-6-3-8-7z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

/** Four manuscript-style corner marks. Parent needs `.corner-ornaments`. */
export function CornerOrnaments() {
  return (
    <>
      {(["tl", "tr", "bl", "br"] as const).map((pos) => (
        <span key={pos} className={`corner ${pos}`} aria-hidden="true">
          <ArabesqueCorner />
        </span>
      ))}
    </>
  );
}

/** Quiet floral mark used at section transitions. */
export function Arabesque({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`arabesque ${className}`.trim()}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M32 6c0 12-6 18-18 20 12 2 18 8 18 20 0-12 6-18 18-20-12-2-18-8-18-20z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="32" cy="26" r="3.5" stroke="currentColor" strokeWidth="0.8" />
      <path
        d="M14 52c8 0 12-3 18-9 6 6 10 9 18 9"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.7"
      />
    </svg>
  );
}
