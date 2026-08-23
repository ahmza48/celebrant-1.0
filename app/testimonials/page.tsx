import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { SectionDivider, PatternLayer } from "@/components/Ornaments";
import { testimonials } from "@/lib/content";
import { photo, fallbackPhoto } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "What Families Say",
  description:
    "Words from Muslim couples and families across Sydney about their Nikah, legal marriage registration and ceremony experience.",
  alternates: { canonical: `${site.url}/testimonials` },
  openGraph: {
    type: "website",
    url: `${site.url}/testimonials`,
    title: "What Families Say About Qazi Marriage Celebrant",
    description:
      "Words from Muslim couples and families across Sydney about their Nikah and legal marriage ceremony.",
    siteName: site.name,
    locale: "en_AU",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="◆ Words from Families"
        title="What Families Say"
        sub="Couples, parents and grandparents, in their own words."
        crumb="Testimonials"
        variant="light"
      />

      <section className="section bg-ivory">
        <div className="container">
          <div className="grid grid-3">
            {testimonials.map((item, i) => (
              <figure
                key={item.who}
                className="quote-card reveal"
                style={{ transitionDelay: `${(i % 3) * 120}ms`, margin: 0 }}
              >
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>
                  <div className="who">{item.who}</div>
                  <div className="kind">{item.kind}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Video placeholder ---------- */}
      <section className="section video-band">
        <div className="video-bg" aria-hidden="true">
          <Photo
            src={photo("arabic wedding family", "testimonial-video", 1600, 900)}
            fallback={fallbackPhoto("testimonial-video", 1600, 900)}
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
          <h2 className="section-heading">Video Testimonials</h2>
          <p className="lead prose">
            Families have offered to record a few words about their day. Their
            videos will be added here.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* ---------- Enquiry CTA ---------- */}
      <section className="section bg-cream pattern cert-border">
        <PatternLayer onLight />
        <div className="container center">
          <p className="eyebrow reveal">◆ Planning Your Ceremony?</p>
          <h2 className="section-heading reveal">
            Talk Through Your Nikah or Legal Marriage Plans
          </h2>
          <p className="lead prose reveal" style={{ transitionDelay: "120ms" }}>
            Send your date, suburb and ceremony type. You will receive clear
            guidance on availability and next steps.
          </p>
          <div className="btn-row reveal" style={{ marginTop: "2.25rem" }}>
            <Link href="/contact" className="btn btn-gold">
              Contact Us
            </Link>
            <a
              className="btn btn-outline"
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="lead prose reveal" style={{ marginTop: "2.5rem" }}>
            Planning your own ceremony? Send your date to {site.phoneDisplay} on
            WhatsApp.
          </p>
        </div>
      </section>
    </>
  );
}
