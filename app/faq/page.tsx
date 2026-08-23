import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import { SectionDivider, PatternLayer } from "@/components/Ornaments";
import { faqGroups } from "@/lib/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Islamic Nikah & Marriage FAQ Sydney",
  description:
    "Answers for Sydney couples about Islamic Nikah ceremonies, NOIM timing, legal marriage paperwork, witnesses, documents, bookings and fees.",
  alternates: { canonical: `${site.url}/faq` },
  openGraph: {
    type: "website",
    url: `${site.url}/faq`,
    title: "Islamic Nikah & Marriage FAQ Sydney",
    description:
      "Answers about Islamic Nikah ceremonies, NOIM timing, legal marriage paperwork, witnesses and bookings in Sydney.",
    siteName: site.name,
    locale: "en_AU",
  },
};

const faqSchemaItems = faqGroups
  .flatMap((group) => group.items)
  .map((item) => ({
    question: item.q,
    answer: item.a.map((answer) => answer.trim()).filter(Boolean).join(" "),
  }))
  .filter((item) => item.answer.length > 0);

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${site.url}/faq#faq`,
      mainEntity: faqSchemaItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${site.url}/faq#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "FAQ", item: `${site.url}/faq` },
      ],
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="◆ Before You Book"
        title="Islamic Nikah & Marriage FAQ"
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

      <section className="section bg-sand pattern cert-border">
        <PatternLayer onLight />
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
