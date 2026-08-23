import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Photo from "@/components/Photo";
import Particles from "@/components/Particles";
import HeroParallax from "@/components/HeroParallax";
import VerseBand from "@/components/VerseBand";
import {
  GoldRule,
  PatternLayer,
  SectionDivider,
  CornerOrnaments,
  Arabesque,
  ArchOutline,
  ArchCapOutline,
  ArchSurface,
  CrownMark,
} from "@/components/Ornaments";
import { site } from "@/lib/site";
import { nikahIncludes, journey, gallery, testimonials } from "@/lib/content";
import { seoServicePages } from "@/lib/seo-pages";
import {
  photo,
  fallbackPhoto,
  CELEBRANT_PORTRAIT,
  CELEBRANT_PORTRAIT_FALLBACK,
} from "@/lib/images";

export const metadata: Metadata = {
  title: "Islamic Nikah & Legal Marriage Celebrant Sydney",
  description:
    "Qazi Marriage Celebrant provides Islamic Nikah ceremonies and Australian legal marriage registration for Muslim couples across Sydney and NSW.",
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    title: "Islamic Nikah & Legal Marriage Celebrant Sydney",
    description:
      "Islamic Nikah ceremonies and Australian legal marriage registration for Muslim couples across Sydney and NSW.",
    siteName: site.name,
    locale: "en_AU",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: "+61475409700",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#localbusiness`,
      name: site.name,
      description:
        "Islamic Nikah ceremonies and Australian legal marriage registration for Muslim couples across Sydney and NSW.",
      url: site.url,
      telephone: "+61475409700",
      email: site.email,
      areaServed: "Sydney and New South Wales, Australia",
      address: {
        "@type": "PostalAddress",
        addressLocality: site.suburb,
        addressRegion: site.region,
        addressCountry: "AU",
      },
      parentOrganization: { "@id": `${site.url}/#organization` },
    },
  ],
};

/* No photograph may appear twice on this page. The service cards below take
   five of the client's photographs; the gallery preview takes the rest — the
   21:9 band uses gallery[0], and these six fill the tile grid. */
const previewSeeds = [
  "client-mosque-certificate",
  "client-office-signing",
  "client-khutbah",
  "client-rings",
  "client-groom-party",
  "client-with-groom",
];
const previewImages = gallery.filter((item) =>
  previewSeeds.includes(item.seed),
);

/* The client's own photography is phone-shot portrait, so a 16:10 card crop
   takes a band out of the middle — focal keeps the faces and the documents in
   it. Only the first card has no client photograph of its own yet. */
const servicePreviewImages: Record<
  string,
  { seed: string; term: string; alt: string; focal?: string }
> = {
  "islamic-nikah-sydney": {
    seed: "svc-nikah",
    term: "islamic nikah ceremony",
    alt: "An Islamic Nikah ceremony",
  },
  "nikah-legal-marriage-sydney": {
    seed: "client-marriage-register",
    term: "australian marriage register",
    alt: "The groom with the Australian marriage register",
  },
  "register-existing-nikah-australia": {
    seed: "client-certificate-handover",
    term: "marriage registration certificate",
    alt: "Handing the marriage registration certificate to the groom",
    focal: "center 18%",
  },
  "noim-marriage-paperwork-sydney": {
    seed: "client-paperwork-couple",
    term: "marriage paperwork bride groom",
    alt: "A bride and groom signing their marriage paperwork at home",
    focal: "center 38%",
  },
  "muslim-marriage-celebrant-sydney": {
    seed: "client-family-after-nikah",
    term: "groom family after nikah",
    alt: "The celebrant with the groom and his family after the Nikah",
    focal: "center 42%",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      {/* ---------- 1. Hero ---------- */}
      <section className="hero hero-home cert-border">
        <div className="hero-media">
          <Photo
            src={photo("mosque dome towers", "hero-home", 1920, 1200)}
            fallback={fallbackPhoto("hero-home", 1920, 1200)}
            alt=""
            width={1920}
            height={1200}
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-texture" />
        <Particles />
        <HeroParallax />

        <div className="container hero-content">
          <p className="eyebrow hero-in">
            ◆ Authorised Marriage Celebrant · Sydney ◆
          </p>

          <h1 className="hero-in">
            Islamic Nikah &amp; Legal Marriage Celebrant in Sydney
            <span className="h1-line2">Faithful Ceremony. Legal Registration.</span>
          </h1>

          <GoldRule
            className="hero-in d1"
            style={{ width: "min(100%, 320px)", marginBlock: "1.75rem" }}
          />

          <p className="hero-sub hero-in d1">
            Religious Nikah and legally registered marriage — one ceremony, one
            celebrant, complete peace of mind.
          </p>

          <div className="btn-row hero-in d2" style={{ marginTop: "2.25rem" }}>
            <Link href="/contact" className="btn btn-gold">
              Book a Consultation
            </Link>
            <a
              className="btn btn-outline"
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
            <a className="btn btn-quiet" href={site.phoneHref}>
              Call Now
            </a>
          </div>

          <ul className="hero-trust hero-in d3" style={{ marginTop: "2.5rem" }}>
            <li>Registered Australian Marriage Celebrant</li>
            <li>Nikah Conducted by a Qazi</li>
            <li>Legal Civil Marriage</li>
            <li>Nikah Certificate Provided</li>
            <li>Sydney &amp; NSW</li>
          </ul>
        </div>

        <span className="scroll-cue" aria-hidden="true" />
      </section>

      {/* ---------- 2. Why Families Choose Us ---------- */}
      <section className="section bg-ivory">
        <div className="container center">
          <p className="eyebrow reveal">◆ Our Promise</p>
          <h2 className="section-heading reveal">
            Your Most Sacred Moment, Handled with Care
          </h2>
          <p className="lead prose reveal" style={{ transitionDelay: "120ms" }}>
            A Nikah is not paperwork. It is the moment two families join. When a
            qazi conducts your ceremony, the words are said properly, the
            conditions of the marriage are met, and nothing is rushed. And
            because he is also registered under the Marriage Act 1961, your
            marriage is recorded with the Australian government on the same day.
            You do not have to arrange two celebrants, or wonder whether the
            legal side has been done.
          </p>

          <GoldRule
            style={{ width: "min(100%, 260px)", marginBlock: "3rem 2.5rem" }}
          />

          <div className="stack-promise">
            {[
              "Every Nikah conducted with sincerity and Islamic integrity",
              "Every couple guided through Australian legal requirements without confusion",
              "Every family made to feel that this day belongs to them",
            ].map((line, i) => (
              <div key={line}>
                {i > 0 && (
                  <span className="promise-mark" aria-hidden="true">
                    ◆
                  </span>
                )}
                <p
                  className="statement reveal"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ---------- 3. What Your Nikah Includes ---------- */}
      <section className="section bg-cream">
        <div className="container center">
          <p className="eyebrow reveal">◆ What Your Nikah Includes</p>
          <h2 className="section-heading reveal">
            One Ceremony. Nothing Left Out.
          </h2>
          <p
            className="lead prose reveal"
            style={{ transitionDelay: "120ms", marginBottom: "3.5rem" }}
          >
            Most couples have to arrange the religious side and the legal side
            separately, and hope the two line up. Here they are the same
            appointment, handled by the same person.
          </p>

          <div className="grid grid-3 grid-arch">
            {nikahIncludes.map((item, i) => (
              <article
                key={item.name}
                className={`arch-card faith-card reveal${"primary" in item && item.primary ? " is-primary" : ""}`}
                style={{ transitionDelay: `${(i % 3) * 120}ms` }}
              >
                <ArchSurface />
                <ArchCapOutline />
                <CrownMark />
                <h3>{item.name}</h3>
                <p>{item.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container">
          <div className="center">
            <p className="eyebrow reveal">Sydney Service Pages</p>
            <h2 className="section-heading reveal">
              Nikah and Marriage Help Across Sydney
            </h2>
            <p className="lead prose reveal" style={{ transitionDelay: "120ms", marginBottom: "3rem" }}>
              Choose the guidance that matches where you are in the marriage process.
            </p>
          </div>
          <div className="service-route-grid">
            {seoServicePages.map((page, i) => {
              const preview = servicePreviewImages[page.slug];
              return (
                <article
                  className="service-route-card reveal"
                  key={page.slug}
                  style={{ transitionDelay: `${(i % 3) * 120}ms` }}
                >
                  <Link
                    href={`/${page.slug}`}
                    className="service-route-image media"
                    aria-label={`Read about ${page.h1}`}
                    style={{ "--focal": preview.focal } as CSSProperties}
                  >
                    <Photo
                      src={photo(preview.term, preview.seed, 720, 450)}
                      fallback={fallbackPhoto(preview.seed, 720, 450)}
                      alt={preview.alt}
                      width={720}
                      height={450}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </Link>
                  <div className="service-route-copy">
                    <h3>
                      <Link href={`/${page.slug}`}>{page.h1}</Link>
                    </h3>
                    <p>{page.intro}</p>
                    <Link href={`/${page.slug}`} className="link-more">
                      Read more <span aria-hidden="true">-&gt;</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- 4. Quranic verse band ---------- */}
      <VerseBand />

      {/* ---------- 5. How Your Day Unfolds ---------- */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="center">
            <p className="eyebrow reveal">◆ Your Ceremony Journey</p>
            <h2 className="section-heading reveal">
              From First Enquiry to Married
            </h2>
            <p
              className="lead prose reveal"
              style={{ transitionDelay: "120ms", marginBottom: "4rem" }}
            >
              Four steps. You will always know what happens next.
            </p>
          </div>

          <ul className="journey">
            {journey.map((item, i) => (
              <li
                key={item.title}
                className="journey-step reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="journey-dot" aria-hidden="true">
                  <span className="num">{item.step}</span>
                </span>
                <div className="journey-copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- 6. Gallery preview ---------- */}
      <section className="section bg-sand pattern">
        <PatternLayer onLight />
        <div className="container">
          <div className="center">
            <p className="eyebrow reveal">◆ Ceremonies Across Sydney</p>
            <h2 className="section-heading reveal">Every Ceremony is Unique</h2>
            <p
              className="lead prose reveal"
              style={{ transitionDelay: "120ms", marginBottom: "3.5rem" }}
            >
              Homes in Punchbowl, mosques in Lakemba, gardens on the Georges
              River. Every family is different, and every ceremony is prepared
              for them.
            </p>
          </div>

          <div className="reveal arch media ratio-21x9" style={{ marginBottom: "1.35rem" }}>
            <Photo
              src={photo(gallery[0].term, gallery[0].seed, 1600, 700)}
              fallback={fallbackPhoto(gallery[0].seed, 1600, 700)}
              alt={gallery[0].caption}
              width={1600}
              height={700}
              sizes="(max-width: 1120px) 100vw, 1120px"
            />
          </div>

          <div className="preview-grid">
            {previewImages.map((item, i) => (
              <div
                key={item.seed}
                className="reveal arch media ratio-4x5"
                style={
                  {
                    transitionDelay: `${(i % 3) * 120}ms`,
                    "--focal": item.focal,
                  } as CSSProperties
                }
              >
                <Photo
                  src={photo(item.term, item.seed, 600, 750)}
                  fallback={fallbackPhoto(item.seed, 600, 750)}
                  alt={item.caption}
                  width={600}
                  height={750}
                  sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          <p className="center" style={{ marginTop: "3rem" }}>
            <Link href="/gallery" className="link-more">
              View Full Gallery <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* ---------- 7. Words from Families ---------- */}
      <section className="section bg-cream">
        <div className="container">
          <div className="center">
            <p className="eyebrow reveal">◆ Words from Families</p>
            <h2 className="section-heading reveal">
              What Families Say Afterwards
            </h2>
            <p
              className="lead prose reveal"
              style={{ transitionDelay: "120ms", marginBottom: "3.5rem" }}
            >
              A few words from couples and parents across Sydney.
            </p>
          </div>

          <div className="grid grid-3">
            {testimonials.slice(0, 3).map((item, i) => (
              <figure
                key={item.who}
                className="quote-card reveal"
                style={{ transitionDelay: `${i * 120}ms`, margin: 0 }}
              >
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>
                  <div className="who">{item.who}</div>
                  <div className="kind">{item.kind}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="center" style={{ marginTop: "3rem" }}>
            <Link href="/testimonials" className="link-more">
              View Testimonials <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* ---------- 8. Begin Your Journey ---------- */}
      <section className="section bg-sand pattern cert-border">
        <PatternLayer onLight />
        <div className="container center">
          <div className="cta-portrait corner-ornaments reveal">
            <CornerOrnaments />
            <div className="arch-frame">
              <ArchOutline />
              <div className="arch-inner media ratio-4x5 portrait-vignette">
                <Photo
                  src={CELEBRANT_PORTRAIT}
                  fallback={CELEBRANT_PORTRAIT_FALLBACK}
                  alt="The celebrant, a qazi and registered Australian marriage celebrant"
                  width={400}
                  height={500}
                  sizes="220px"
                />
              </div>
            </div>
          </div>

          <h2 className="section-heading reveal" style={{ marginTop: "2.5rem" }}>
            Begin Your Journey
          </h2>
          <p className="lead prose reveal" style={{ transitionDelay: "120ms" }}>
            Contact us today. We guide you every step of the way, with faith and
            with care.
          </p>

          <div className="btn-row reveal" style={{ marginTop: "2.25rem" }}>
            <a
              className="btn btn-gold"
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a className="btn btn-outline" href={site.phoneHref}>
              Call Now
            </a>
          </div>

          <div className="reveal" style={{ marginTop: "3rem" }}>
            <Arabesque className="center-block" />
            {/* [VERIFY WITH CLIENT] */}
            <p
              className="arabic-line"
              dir="rtl"
              lang="ar"
              style={{ fontSize: "1.25rem", margin: "1rem 0 0.5rem" }}
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
            <p className="verse-ref">In the name of God, the Most Merciful</p>
          </div>
        </div>
      </section>
    </>
  );
}
