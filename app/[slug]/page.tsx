import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { getSeoServicePage, seoServicePages } from "@/lib/seo-pages";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return seoServicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoServicePage(slug);
  if (!page) return {};
  const url = `${site.url}/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: page.title,
      description: page.description,
      siteName: site.name,
      locale: "en_AU",
    },
  };
}

export default async function SeoServicePage({ params }: Props) {
  const { slug } = await params;
  const page = getSeoServicePage(slug);
  if (!page) notFound();

  const url = `${site.url}/${page.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.h1,
        description: page.description,
        serviceType: page.title,
        areaServed: "Sydney and New South Wales, Australia",
        provider: {
          "@type": "LocalBusiness",
          "@id": `${site.url}/#localbusiness`,
          name: site.name,
          url: site.url,
          telephone: "+61475409700",
        },
        url,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: page.h1, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero eyebrow={page.eyebrow} title={page.h1} sub={page.description} crumb={page.h1} imageTerm="Sydney wedding ceremony" imageSeed={page.slug} />
      <section className="section bg-ivory">
        <div className="container">
          <div className="center">
            <p className="lead prose">{page.intro}</p>
          </div>
          <div className="grid grid-3" style={{ marginTop: "3rem" }}>
            {page.sections.map((section) => (
              <article className="arch-card" key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-cream">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Questions</p>
            <h2 className="section-heading">Plan Your Ceremony with Confidence</h2>
          </div>
          <div className="prose" style={{ marginTop: "2.5rem" }}>
            {page.faqs.map((faq) => (
              <div key={faq.question} style={{ marginBottom: "1.5rem" }}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="center" style={{ marginTop: "2.5rem" }}>
            <Link href="/faq" className="link-more">Read all marriage FAQs <span aria-hidden="true">-&gt;</span></Link>
          </p>
        </div>
      </section>
      <section className="section bg-sand">
        <div className="container center">
          <h2 className="section-heading">Tell Us Your Date and Suburb</h2>
          <p className="lead prose">Get a clear answer about availability, ceremony options and the next practical step.</p>
          <div className="btn-row" style={{ marginTop: "2rem" }}>
            <Link href="/contact" className="btn btn-gold">Request a Consultation</Link>
            <a href={site.phoneHref} className="btn btn-outline">Call {site.phoneDisplay}</a>
          </div>
          <p style={{ marginTop: "2rem" }}>
            {page.relatedSlugs.map((related, index) => {
              const item = getSeoServicePage(related);
              return item ? <span key={related}>{index > 0 ? " | " : ""}<Link href={`/${item.slug}`} className="link-more">{item.h1}</Link></span> : null;
            })}
          </p>
        </div>
      </section>
    </>
  );
}
