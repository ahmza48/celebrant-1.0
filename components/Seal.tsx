import type { CSSProperties } from "react";

type Props = {
  /** Unique per instance — the SVG defs use it for the curved text paths. */
  id: string;
  size?: number;
  animate?: boolean;
  className?: string;
  title?: string;
};

/**
 * The circular seal mark. Inline SVG so the rings can be stroke-drawn on load.
 * "Qazi" sits inside a thin gold circle, the practice name curves over the
 * crown, "Est. Australia" runs along the base.
 */
export default function Seal({
  id,
  size = 44,
  animate = false,
  className,
  title,
}: Props) {
  const arcId = `${id}-arc`;
  const baseId = `${id}-base`;

  return (
    <svg
      className={`seal${animate ? " seal-draw" : ""}${className ? ` ${className}` : ""}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <defs>
        {/* over the crown, left to right */}
        <path id={arcId} d="M 11.5 60 A 48.5 48.5 0 0 1 108.5 60" fill="none" />
        {/* along the base, left to right */}
        <path id={baseId} d="M 20 60 A 40 40 0 0 0 100 60" fill="none" />
      </defs>

      <g className="seal-stroke" style={{ "--dash": 780 } as CSSProperties}>
        <circle cx="60" cy="60" r="57" strokeWidth="1" opacity="0.55" />
        <circle cx="60" cy="60" r="40" strokeWidth="1.4" />
        <path d="M 60 78 L 63.5 82 L 60 86 L 56.5 82 Z" strokeWidth="0.9" />
      </g>

      <g className="seal-text">
        <text
          className="seal-word"
          x="60"
          y="70"
          textAnchor="middle"
          fontSize="27"
        >
          Qazi
        </text>
        <text className="seal-arc" fontSize="7.2">
          <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
            MARRIAGE CELEBRANT · SYDNEY
          </textPath>
        </text>
        <text className="seal-base" fontSize="5.6">
          <textPath href={`#${baseId}`} startOffset="50%" textAnchor="middle">
            EST. AUSTRALIA
          </textPath>
        </text>
      </g>
    </svg>
  );
}
