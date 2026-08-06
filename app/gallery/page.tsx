import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import GalleryBrowser from "@/components/GalleryBrowser";
import { SectionDivider, PatternLayer } from "@/components/Ornaments";
import { photo, fallbackPhoto } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ceremonies Across Sydney",
  description:
    "Nikah ceremonies conducted across Sydney and greater NSW — in homes, masjids, halls and gardens, with the legal signing handled on the day.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="◆ Ceremonies Across Sydney"
        title="Ceremonies Across Sydney"
        sub="Homes, masjids, halls and gardens — every Nikah prepared for the family in front of us."
        crumb="Gallery"
        imageTerm="islamic wedding"
        imageSeed="gallery-hero"
      />

      <GalleryBrowser />

      {/* ---------- Video placeholder ---------- */}
      <section className="section video-band">
        <div className="video-bg" aria-hidden="true">
          <Photo
            src={photo("mosque dome interior", "video-poster", 1600, 900)}
            fallback={fallbackPhoto("video-poster", 1600, 900)}
            alt=""
            width={1600}
            height={900}
            sizes="100vw"
          />
        </div>
        <div className="container video-inner center">
          <span className="play-mark" aria-hidden="true">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
              <path d="M2 2l16 10L2 22V2z" fill="currentColor" />
            </svg>
          </span>
          <p className="eyebrow">◆ Coming Soon</p>
          <h2 className="section-heading">Ceremony Highlight Video</h2>
          <p className="lead prose">
            A short film of a full ceremony, from the arrival of the families to
            the signing of the certificates, is being prepared.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* ---------- CTA ---------- */}
      <section className="section bg-cream pattern cert-border">
        <PatternLayer onLight />
        <div className="container center">
          <p className="eyebrow reveal">◆ Your Ceremony Next</p>
          <h2 className="section-heading reveal">
            Let&rsquo;s Talk About Your Day
          </h2>
          <p className="lead prose reveal" style={{ transitionDelay: "120ms" }}>
            Send your date and your suburb. You will hear back within 24 hours.
          </p>
          <div className="btn-row reveal" style={{ marginTop: "2.25rem" }}>
            <a
              className="btn btn-gold"
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
            <Link href="/contact" className="btn btn-outline">
              Enquiry Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
