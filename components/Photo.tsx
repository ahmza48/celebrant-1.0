"use client";

import { useState } from "react";

type Props = {
  src: string;
  fallback: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Plain <img> with an explicit fallback. Remote placeholder hosts fail often
 * enough that a broken-image icon is a real risk; this swaps once, then stops.
 */
export default function Photo({
  src,
  fallback,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
}: Props) {
  const [current, setCurrent] = useState(src);
  const [swapped, setSwapped] = useState(false);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={current}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      // eslint-disable-next-line react/no-unknown-property
      fetchPriority={priority ? "high" : undefined}
      onError={() => {
        if (!swapped && fallback && fallback !== current) {
          setSwapped(true);
          setCurrent(fallback);
        }
      }}
    />
  );
}
