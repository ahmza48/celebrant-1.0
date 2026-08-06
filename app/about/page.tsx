import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import VerseBand from "@/components/VerseBand";
import {
  SectionDivider,
  PatternLayer,
  CornerOrnaments,
  GoldRule,
  ArchOutline,
} from "@/components/Ornaments";
import { site } from "@/lib/site";
import { CELEBRANT_PORTRAIT, CELEBRANT_PORTRAIT_FALLBACK } from "@/lib/images";

export const metadata: Metadata = {
  title: "Meet the Qazi",
  description:
    "A qazi and registered Australian marriage celebrant based in Punchbowl, Sydney — conducting the Nikah with full Islamic integrity and registering your marriage under the Marriage Act 1961.",
  alternates: { canonical: "/about" },
};

const badges = [
  "Registered Marriage Celebrant · Marriage Act 1961",
  "BDM NSW Registration No. [CONFIRM WITH CLIENT]",
  "Qazi — Islamic scholar [CONFIRM WITH CLIENT]",
  "Serving Sydney since [CONFIRM WITH CLIENT]",
  "Based in Punchbowl, NSW",
];

const values = [
  {
    name: "Dignity",
    body: "Your ceremony is not a booking slot. It is treated as the most important day in your family's year, because that is what it is.",
  },
  {
    name: "Clarity",
    body: "You will always know what is required, what it costs and what happens next. Nothing important is left until the day.",
  },
  {
    name: "Compliance",
    body: "Every marriage is conducted to the letter of the Marriage Act 1961 and registered with Births, Deaths and Marriages NSW.",
  },
];

const communities = [
  "Lebanese",
  "Pakistani",
  "Indian",
  "Bangladeshi",
  "Fijian",
  "Afghan",
  "Turkish",
  "Indonesian",
  "Somali",
  "Iraqi",
  "and every other Muslim family in Sydney",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="◆ Your Celebrant"
        title="Meet the Qazi"
        sub="A trained Islamic scholar and a registered Australian marriage celebrant — both, in one person."
        crumb="About"
        variant="light"
      />

      {/* ---------- Bio ---------- */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="bio">
            <div className="bio-portrait reveal">
              <div className="arch-frame corner-ornaments">
                <CornerOrnaments />
                <ArchOutline />
                <div className="arch-inner media ratio-4x5 portrait-vignette portrait-reveal">
                  <Photo
                    src={CELEBRANT_PORTRAIT}
                    fallback={CELEBRANT_PORTRAIT_FALLBACK}
                    alt={`${site.celebrant}, qazi and registered Australian marriage celebrant`}
                    width={560}
                    height={700}
                    priority
                    sizes="(max-width: 900px) 80vw, 36vw"
                  />
                </div>
              </div>
              <p className="quiet center" style={{ marginTop: "1.5rem" }}>
                {site.celebrant}
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: "120ms" }}>
              <p className="eyebrow">◆ In His Own Words</p>
              <h2 style={{ marginBottom: "1.5rem" }}>
                “I wanted families to stop having to choose.”
              </h2>

              <p>
                I trained as a qazi, and for years I conducted Nikah ceremonies
                the way I was taught — carefully, with the khutbah, the consent
                of both parties sought properly, the Mahr agreed openly in front
                of witnesses. That work has never changed. What changed was how
                often I saw the same problem afterwards. A couple would come to
                me two or three years later, needing to prove their marriage for
                a visa or a bank, and they had nothing an Australian office
                would accept.
              </p>
              <p>
                So I registered as a marriage celebrant under the Marriage Act
                1961. Now I can do both in the same gathering. Your family sees
                the Nikah they came for. Quietly, inside that same ceremony, the
                legal words are said and the certificates are signed, and your
                marriage is registered with Births, Deaths and Marriages NSW.
                You leave married in both senses, on the same afternoon, without
                booking a second celebrant.
              </p>
              <p>
                The Nikah itself I will not rush or shorten. The khutbah is
                given, consent is sought from the bride clearly and in her own
                voice, the Mahr is agreed openly in front of the witnesses and
                written down, and the wali and witnesses know their part before
                anyone sits down. Where a family follows a particular madhhab or
                a particular order of du'a, that is what I follow. It is their
                marriage, not my ceremony.
              </p>
              <p>
                I am based in Punchbowl and I travel across Sydney and greater
                New South Wales. If English is not your first language, or if
                the paperwork feels overwhelming, please do not let that stop
                you from calling. Explaining it slowly, more than once if
                needed, is part of the job. It is how it should be done.
              </p>

              <div className="badges">
                {badges.map((badge) => (
                  <span key={badge} className="badge">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Verse band (Placement 2) ---------- */}
      <VerseBand />

      {/* ---------- Values ---------- */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="center">
            <p className="eyebrow reveal">◆ What Guides the Work</p>
            <h2 className="section-heading reveal">Three Things, Every Time</h2>
            <GoldRule
              style={{ width: "min(100%, 260px)", marginBlock: "2rem 3.5rem" }}
            />
          </div>

          <div className="values">
            {values.map((value, i) => (
              <div
                key={value.name}
                className="reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <h3>{value.name}</h3>
                <p>{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ---------- Community ---------- */}
      <section className="section bg-sand pattern cert-border">
        <PatternLayer onLight />
        <div className="container center">
          <p className="eyebrow reveal">◆ The Families We Serve</p>
          <h2 className="section-heading reveal">
            The Ummah in Sydney is Not One Community
          </h2>
          <p className="lead prose reveal" style={{ transitionDelay: "120ms" }}>
            Every week brings a different family, a different language at the
            table and a different way of doing things — different customs before
            the Nikah, different du'a afterwards, different expectations of the
            two families. All of it is honoured. If your community is not listed
            here, it is only because the list would never end.
          </p>

          <div
            className="pill-row reveal"
            style={{ marginBlock: "2.5rem", transitionDelay: "240ms" }}
          >
            {communities.map((community) => (
              <span key={community} className="pill">
                {community}
              </span>
            ))}
          </div>

          <p className="lead prose reveal">
            Ceremonies are conducted in [CONFIRM WITH CLIENT — languages
            spoken]. If you need a particular language on the day, ask when you
            enquire and it will be arranged where possible.
          </p>

          <div className="btn-row reveal" style={{ marginTop: "2.5rem" }}>
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
          </div>
        </div>
      </section>
    </>
  );
}
