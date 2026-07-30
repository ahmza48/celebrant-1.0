import Link from "next/link";
import Photo from "./Photo";
import { GoldRule } from "./Ornaments";
import { photo, fallbackPhoto } from "@/lib/images";

type Props = {
  eyebrow: string;
  title: string;
  sub?: string;
  /** Current page name for the breadcrumb trail. */
  crumb: string;
  variant?: "dark" | "light";
  imageTerm?: string;
  imageSeed?: string;
  imageAlt?: string;
};

export default function PageHero({
  eyebrow,
  title,
  sub,
  crumb,
  variant = "dark",
  imageTerm = "mosque interior light",
  imageSeed = "page-hero",
  imageAlt = "",
}: Props) {
  const dark = variant === "dark";

  return (
    <section
      className={`hero page-hero cert-border${dark ? "" : " is-light"}`}
    >
      {dark && (
        <>
          <div className="hero-media">
            <Photo
              src={photo(imageTerm, imageSeed, 1600, 900)}
              fallback={fallbackPhoto(imageSeed, 1600, 900)}
              alt={imageAlt}
              width={1600}
              height={900}
              priority
              sizes="100vw"
            />
          </div>
          <div className="hero-scrim" />
          <div className="hero-texture" />
        </>
      )}

      <div className="container hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <GoldRule style={{ width: "min(100%, 260px)", marginBlock: "1.5rem" }} />
        {sub && <p className="hero-sub">{sub}</p>}
        <p className="breadcrumb" style={{ marginTop: "1.5rem" }}>
          <Link href="/">Home</Link>
          <span className="sep" aria-hidden="true">
            ◆
          </span>
          {crumb}
        </p>
      </div>
    </section>
  );
}
