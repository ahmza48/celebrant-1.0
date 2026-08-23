import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import GalleryBrowser from "@/components/GalleryBrowser";
import { SectionDivider, PatternLayer } from "@/components/Ornaments";
import { photo, fallbackPhoto, CEREMONY_VIDEO } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nikah Ceremony Gallery Sydney",
  description:
    "View examples of Nikah and marriage ceremony settings across Sydney and greater NSW, including homes, mosques, halls and gardens.",
  alternates: { canonical: `${site.url}/gallery` },
  openGraph: {
    type: "website",
    url: `${site.url}/gallery`,
    title: "Nikah Ceremony Gallery Sydney",
    description:
      "Examples of Nikah and marriage ceremony settings across Sydney and greater NSW.",
    siteName: site.name,
    locale: "en_AU",
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="◆ Ceremonies Across Sydney"
        title="Nikah Ceremony Gallery Sydney"
        sub="Homes, mosques, halls and gardens — every Nikah prepared for the family in front of us."
        crumb="Gallery"
        imageTerm="islamic wedding"
        imageSeed="gallery-hero"
      />

      <GalleryBrowser />

      {/* ---------- Ceremony film ---------- */}
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
          <p className="eyebrow">◆ Watch a Ceremony</p>
          <h2 className="section-heading">Ceremony Highlight Video</h2>
          <p className="lead prose">
            A short film from a Nikah conducted in Sydney, so you can see how
            the day is run before you enquire.
          </p>
          {/* filmed on a phone, so the source is vertical — the frame is sized
              to its 9:16 shape rather than letterboxing it into a wide band */}
          <div className="video-frame">
            <video
              controls
              playsInline
              preload="metadata"
              width={360}
              height={640}
              aria-label="Highlight film from a Nikah ceremony"
            >
              <source src={CEREMONY_VIDEO} type="video/mp4" />
              Your browser cannot play this video.
            </video>
          </div>
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
