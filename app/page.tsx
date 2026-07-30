import Link from "next/link";
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
import { nikahIncludes, journey, testimonials, gallery } from "@/lib/content";
import {
  photo,
  fallbackPhoto,
  CELEBRANT_PORTRAIT,
  CELEBRANT_PORTRAIT_FALLBACK,
} from "@/lib/images";

export const metadata: Metadata = {
  title: "Qazi Marriage Celebrant — Islamic Nikah & Legal Marriage in Sydney",
  description:
    "A qazi and registered Australian marriage celebrant in Punchbowl, Sydney. Your Nikah conducted with full Islamic integrity and your marriage registered legally — in one ceremony.",
  alternates: { canonical: "/" },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.subTagline,
  telephone: "+61475409700",
  email: site.email,
  areaServed: "Sydney and New South Wales, Australia",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Punchbowl",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
};

const previewImages = gallery.slice(1, 7);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
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
            Bringing Hearts Together
            <span className="h1-line2">Through the Blessings of Nikah</span>
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
            <li>Nikah Nama Provided</li>
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

          <ol className="journey">
            {journey.map((item, i) => (
              <li
                key={item.title}
                className="journey-step reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="num" aria-hidden="true">
                  {item.step}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- 6. Gallery preview ---------- */}
      <section className="section bg-emerald pattern">
        <PatternLayer />
        <div className="container">
          <div className="center">
            <p className="eyebrow reveal">◆ Ceremonies Across Sydney</p>
            <h2 className="section-heading reveal">Every Ceremony is Unique</h2>
            <p
              className="lead prose reveal"
              style={{ transitionDelay: "120ms", marginBottom: "3.5rem" }}
            >
              Homes in Punchbowl, masjids in Lakemba, gardens on the Georges
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
                style={{ transitionDelay: `${(i % 3) * 120}ms` }}
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

          {/* PLACEHOLDER — REPLACE WITH REAL REVIEWS */}
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
              Read More <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* ---------- 8. Begin Your Journey ---------- */}
      <section className="section bg-emerald pattern cert-border">
        <PatternLayer />
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
