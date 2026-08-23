import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import {
  SectionDivider,
  PatternLayer,
  CornerOrnaments,
  ArchOutline,
  ArchCapOutline,
  ArchSurface,
  CrownMark,
} from "@/components/Ornaments";
import { services, pricing } from "@/lib/services";
import { seoServicePages } from "@/lib/seo-pages";
import { photo, fallbackPhoto } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Islamic Nikah & Marriage Celebrant Services Sydney",
  description:
    "Islamic Nikah ceremonies, legal Australian marriage registration, existing Nikah guidance, NOIM paperwork help and Muslim celebrant services across Sydney and NSW.",
  alternates: { canonical: `${site.url}/services` },
  openGraph: {
    type: "website",
    url: `${site.url}/services`,
    title: "Islamic Nikah & Marriage Celebrant Services Sydney",
    description:
      "Islamic Nikah ceremonies, legal marriage registration and NOIM paperwork guidance across Sydney and NSW.",
    siteName: site.name,
    locale: "en_AU",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="◆ What We Offer"
        title="Islamic Nikah & Marriage Celebrant Services in Sydney"
        sub="The Nikah conducted with care, and Australian legal registration handled clearly."
        crumb="Services"
        imageTerm="mosque architecture arch"
        imageSeed="services-hero"
      />

      {services.map((service, i) => (
        <div key={service.id}>
          {i > 0 && <SectionDivider />}

          <section
            className={`section ${i % 2 === 0 ? "bg-ivory" : "bg-cream"}`}
            id={service.id}
          >
            <div className="container">
              <div className={`service${i % 2 === 1 ? " is-flipped" : ""}`}>
                <div className="service-media reveal">
                  <div className="arch-frame corner-ornaments">
                    <CornerOrnaments />
                    <ArchOutline />
                    <div className="arch-inner media ratio-3x4">
                      <Photo
                        src={photo(service.term, service.seed, 700, 930)}
                        fallback={fallbackPhoto(service.seed, 700, 930)}
                        alt=""
                        width={700}
                        height={930}
                        sizes="(max-width: 900px) 90vw, 45vw"
                      />
                    </div>
                  </div>
                </div>

                <div className="service-body reveal" style={{ transitionDelay: "120ms" }}>
                  <p className="eyebrow">{service.eyebrow}</p>
                  <h2>{service.title}</h2>
                  {service.paragraphs.map((p, n) => (
                    <p key={n}>{p}</p>
                  ))}

                  {service.verse && (
                    <div className="note-verse">
                      {/* [VERIFY WITH CLIENT] */}
                      <p>{service.verse.text}</p>
                      <p className="verse-ref">{service.verse.ref}</p>
                    </div>
                  )}

                  <ul className="gold-list">
                    {service.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      <section className="section bg-ivory">
        <div className="container">
          <div className="center">
            <p className="eyebrow reveal">Sydney Service Routes</p>
            <h2 className="section-heading reveal">
              Find the Right Nikah or Marriage Service
            </h2>
            <p className="lead prose reveal" style={{ transitionDelay: "120ms", marginBottom: "3rem" }}>
              These focused pages answer the common questions couples ask before booking.
            </p>
          </div>
          <div className="grid grid-3">
            {seoServicePages.map((page, i) => (
              <article
                className="arch-card reveal"
                key={page.slug}
                style={{ transitionDelay: `${(i % 3) * 120}ms` }}
              >
                <h3>{page.h1}</h3>
                <p>{page.description}</p>
                <Link href={`/${page.slug}`} className="link-more">
                  View service <span aria-hidden="true">-&gt;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ---------- Pricing ---------- */}
      <section className="section bg-cream">
        <div className="container">
          <div className="center">
            <p className="eyebrow reveal">◆ Fees</p>
            <h2 className="section-heading reveal">Simple, Stated Up Front</h2>
            <p
              className="lead prose reveal"
              style={{ transitionDelay: "120ms", marginBottom: "3.5rem" }}
            >
              Every quote is confirmed in writing before you commit. Travel
              outside the Sydney metropolitan area may add a fee, and you will
              be told the amount before you book.
            </p>
          </div>

          <div className="grid grid-3">
            {pricing.map((tier, i) => (
              <article
                key={tier.tier}
                className={`arch-card price-card reveal${tier.featured ? " is-featured" : ""}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <ArchSurface />
                <ArchCapOutline />
                <CrownMark />
                {tier.featured && <span className="tag">Most Chosen</span>}
                <h3>{tier.tier}</h3>
                <p className="price">{tier.price}</p>
                <p className="quiet" style={{ margin: 0 }}>
                  {tier.note}
                </p>
                <ul>
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn ${tier.featured ? "btn-gold" : "btn-outline-dark"}`}
                >
                  Request a Quote
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className="section bg-sand pattern cert-border">
        <PatternLayer onLight />
        <div className="container center">
          <p className="eyebrow reveal">◆ Not Sure Which One?</p>
          <h2 className="section-heading reveal">Tell Us Your Date</h2>
          <p className="lead prose reveal" style={{ transitionDelay: "120ms" }}>
            Send your ceremony date, the type of ceremony and the suburb. You
            will get a straight answer about what is possible and what it costs.
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
