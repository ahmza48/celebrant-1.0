import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import { SectionDivider, PatternLayer } from "@/components/Ornaments";
import { faqGroups } from "@/lib/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers on NOIM timing, documents, witnesses, whether a Nikah is legally recognised in Australia, ceremony length, faiths served, bookings and fees.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="◆ Before You Book"
        title="Frequently Asked Questions"
        sub="The questions families ask most, answered plainly."
        crumb="FAQ"
        imageTerm="islamic geometric pattern"
        imageSeed="faq-hero"
      />

      <section className="section bg-ivory">
        <div className="container container-narrow">
          <FaqAccordion groups={faqGroups} />
        </div>
      </section>

      <SectionDivider />

      <section className="section bg-emerald pattern cert-border">
        <PatternLayer />
        <div className="container center">
          <p className="eyebrow reveal">◆ Still Unsure?</p>
          <h2 className="section-heading reveal">Ask Directly</h2>
          <p className="lead prose reveal" style={{ transitionDelay: "120ms" }}>
            If your question is not here, send it on WhatsApp. Straight answers,
            no obligation.
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
