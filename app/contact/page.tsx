import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import ContactForm from "@/components/ContactForm";
import {
  CornerOrnaments,
  Arabesque,
  ArchOutline,
} from "@/components/Ornaments";
import { site } from "@/lib/site";
import { CELEBRANT_PORTRAIT, CELEBRANT_PORTRAIT_FALLBACK } from "@/lib/images";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Enquire about your Nikah, your legal registration or your NOIM in Sydney. WhatsApp +61 475 409 700 or send the enquiry form — we reply within 24 hours.",
  alternates: { canonical: "/contact" },
};

const MAP_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=151.04,-33.95,151.07,-33.92&layer=mapnik";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="◆ Start the Conversation"
        title="Get in Touch"
        sub="We respond within 24 hours."
        crumb="Contact"
        variant="light"
      />

      <section className="section bg-ivory">
        <div className="container">
          <div className="contact-layout">
            {/* ---------- Enquiry form ---------- */}
            <div className="reveal">
              <p className="eyebrow">◆ Enquiry Form</p>
              <h2 style={{ marginBottom: "2.25rem" }}>Tell Us About Your Day</h2>
              <ContactForm />
            </div>

            {/* ---------- Info panel ---------- */}
            <aside className="reveal" style={{ transitionDelay: "120ms" }}>
              <div className="info-panel">
                <div
                  className="arch-frame corner-ornaments"
                  style={{ width: "min(220px, 60%)", margin: "0 auto" }}
                >
                  <CornerOrnaments />
                  <ArchOutline />
                  <div className="arch-inner media ratio-4x5 portrait-vignette">
                    <Photo
                      src={CELEBRANT_PORTRAIT}
                      fallback={CELEBRANT_PORTRAIT_FALLBACK}
                      alt={`${site.celebrant}, marriage celebrant`}
                      width={400}
                      height={500}
                      sizes="220px"
                    />
                  </div>
                </div>

                <p
                  className="statement center"
                  style={{ marginBlock: "1.75rem" }}
                >
                  “I look forward to being part of your most important day.”
                </p>

                <div className="btn-row" style={{ flexDirection: "column" }}>
                  <a
                    className="btn btn-gold"
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "100%" }}
                  >
                    Message on WhatsApp
                  </a>
                  <a
                    className="btn btn-outline-dark"
                    href={site.phoneHref}
                    style={{ width: "100%" }}
                  >
                    Call {site.phoneDisplay}
                  </a>
                </div>

                <dl className="info-list">
                  <div>
                    <dt>Address</dt>
                    <dd>{site.addressLine}</dd>
                  </div>
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href={site.emailHref}>{site.email}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>Service Area</dt>
                    <dd>{site.serviceArea}</dd>
                  </div>
                  <div>
                    <dt>Response Time</dt>
                    <dd>{site.responseTime}</dd>
                  </div>
                </dl>
              </div>

              <div className="map-frame" style={{ marginTop: "1.5rem" }}>
                <ArchOutline />
                <div className="map-inner arch">
                  <iframe
                    src={MAP_SRC}
                    title="Map showing Punchbowl, Sydney NSW"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="center" style={{ marginTop: "2.5rem" }}>
                <Arabesque className="center-block" />
                {/* [VERIFY WITH CLIENT] */}
                <p
                  className="arabic-line"
                  dir="rtl"
                  lang="ar"
                  style={{ fontSize: "1.2rem", margin: "1rem 0 0.35rem" }}
                >
                  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                </p>
                <p className="verse-ref">
                  In the name of God, the Most Merciful
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
