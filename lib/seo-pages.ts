export type SeoServicePage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
};

export const seoServicePages: SeoServicePage[] = [
  {
    slug: "islamic-nikah-sydney",
    title: "Islamic Nikah Celebrant Sydney",
    description: "Islamic Nikah ceremonies in Sydney, conducted with care by a qazi and authorised Australian marriage celebrant. Based in Punchbowl and serving Sydney and NSW.",
    h1: "Islamic Nikah Celebrant in Sydney",
    eyebrow: "Islamic Nikah Sydney",
    intro: "Plan a Nikah that honours your faith, your family and your ceremony plans. Qazi Marriage Celebrant serves couples across Sydney from Punchbowl, with clear guidance from your first enquiry.",
    sections: [
      { heading: "A Nikah conducted with care", body: "Your ceremony is prepared around the people, place and traditions that matter to you. We discuss your plans in advance so your Nikah feels respectful, organised and personal." },
      { heading: "Support for Sydney families", body: "Whether your ceremony is at home, a mosque, a hall or another Sydney venue, you receive practical guidance on timing, documents and next steps before the day." },
      { heading: "Religious and legal guidance", body: "If you want your marriage legally registered in Australia as part of the same journey, ask about the combined Nikah and legal marriage service." }
    ],
    faqs: [
      { question: "Can a Nikah be held anywhere in Sydney?", answer: "Ceremony arrangements depend on the venue and your plans. Share your date and suburb to confirm what is possible." },
      { question: "Can our Nikah and legal marriage be arranged together?", answer: "Yes. Ask about the Nikah and legal marriage service so your religious ceremony and Australian legal requirements can be planned together." }
    ],
    relatedSlugs: ["nikah-legal-marriage-sydney", "noim-marriage-paperwork-sydney"]
  },
  {
    slug: "nikah-legal-marriage-sydney",
    title: "Nikah and Legal Marriage Sydney",
    description: "Combine an Islamic Nikah with legal Australian marriage registration in Sydney. Speak with a qazi and authorised marriage celebrant in Punchbowl.",
    h1: "Nikah and Legal Marriage in Sydney",
    eyebrow: "One Ceremony, Clear Guidance",
    intro: "For couples who want a meaningful Islamic Nikah and an Australian legal marriage plan, Qazi Marriage Celebrant brings the religious and celebrant sides together in Sydney.",
    sections: [
      { heading: "One considered marriage journey", body: "We help you understand the ceremony plan and the legal steps early, so you are not coordinating separate providers or discovering requirements at the last minute." },
      { heading: "Australian marriage paperwork", body: "Australian legal marriage has document and notice requirements. You receive clear guidance on what to prepare and when to provide it." },
      { heading: "For couples across Sydney and NSW", body: "Based in Punchbowl, the service is available across Sydney and greater NSW, subject to ceremony date, venue and travel arrangements." }
    ],
    faqs: [
      { question: "Is a Nikah alone a legal Australian marriage?", answer: "A religious ceremony and a legal Australian marriage involve different requirements. Contact us for guidance specific to your plans." },
      { question: "How early should we enquire?", answer: "Enquire as early as you can, especially where legal notice periods, travel or a preferred ceremony date are involved." }
    ],
    relatedSlugs: ["islamic-nikah-sydney", "noim-marriage-paperwork-sydney"]
  },
  {
    slug: "register-existing-nikah-australia",
    title: "Register an Existing Nikah in Australia",
    description: "Guidance for Sydney couples who already held a Nikah and want to understand Australian legal marriage requirements. Speak with an authorised marriage celebrant.",
    h1: "Register an Existing Nikah in Australia",
    eyebrow: "Existing Nikah Guidance",
    intro: "If you have already held a Nikah and want to understand your legal marriage options in Australia, begin with a confidential conversation about your circumstances.",
    sections: [
      { heading: "Understand the legal position", body: "Every couple's circumstances are different. We explain the celebrant process and the documents that may be relevant before you make any arrangements." },
      { heading: "Plan the next ceremony or registration step", body: "Where a further legal ceremony is appropriate, you can plan it with a clear view of timing, notice requirements and what the day will involve." },
      { heading: "Local help in Sydney", body: "Based in Punchbowl, we support couples and families across Sydney who value straightforward, respectful advice." }
    ],
    faqs: [
      { question: "Can an existing Nikah be registered automatically?", answer: "The answer depends on the details of the original ceremony and Australian marriage law. Contact us so your situation can be considered properly." },
      { question: "What should we bring to an enquiry?", answer: "Share when and where the Nikah took place, any documents you have, and your preferred next step. You will be told what is relevant." }
    ],
    relatedSlugs: ["nikah-legal-marriage-sydney", "noim-marriage-paperwork-sydney"]
  },
  {
    slug: "noim-marriage-paperwork-sydney",
    title: "NOIM Marriage Paperwork Help Sydney",
    description: "Get clear help with Notice of Intended Marriage paperwork and legal marriage preparation in Sydney. Qazi Marriage Celebrant is based in Punchbowl.",
    h1: "NOIM and Marriage Paperwork Help in Sydney",
    eyebrow: "Marriage Documents Sydney",
    intro: "Legal marriage paperwork should be clear, not stressful. Get guidance on your Notice of Intended Marriage and the documents to prepare for a Sydney ceremony.",
    sections: [
      { heading: "Clear paperwork guidance", body: "We explain the information and supporting documents needed for your intended marriage, along with the timing that may apply to your ceremony date." },
      { heading: "Plan around your ceremony date", body: "Early preparation helps prevent avoidable delays. Share your date, location and circumstances so we can explain the practical next steps." },
      { heading: "Support for local and overseas couples", body: "If one or both partners are overseas or travelling, tell us at the start. This can affect document preparation and timing." }
    ],
    faqs: [
      { question: "What is a Notice of Intended Marriage?", answer: "It is a required notice for many Australian legal marriages. The right timing and documents depend on your circumstances." },
      { question: "Can you help if one partner is overseas?", answer: "Yes. Contact us early with your location and ceremony date so you can receive guidance on the available process." }
    ],
    relatedSlugs: ["nikah-legal-marriage-sydney", "register-existing-nikah-australia"]
  },
  {
    slug: "muslim-marriage-celebrant-sydney",
    title: "Muslim Marriage Celebrant Sydney",
    description: "A Muslim marriage celebrant in Sydney for Islamic Nikah ceremonies and Australian legal marriage guidance. Based in Punchbowl, serving Sydney and greater NSW.",
    h1: "Muslim Marriage Celebrant in Sydney",
    eyebrow: "Sydney Muslim Celebrant",
    intro: "Choose a celebrant who understands the importance of a Nikah, family traditions and a well-organised ceremony. Qazi Marriage Celebrant serves Sydney and greater NSW.",
    sections: [
      { heading: "A respectful approach to your ceremony", body: "Your ceremony should feel calm, personal and faithful to your plans. We take time to understand the details that matter to you and your family." },
      { heading: "Guidance from first enquiry", body: "From the initial conversation to ceremony-day preparation, you have a clear contact point for questions about your Nikah and legal marriage options." },
      { heading: "Serving Sydney and greater NSW", body: "The service is based in Punchbowl and available across Sydney and greater NSW, subject to availability and travel arrangements." }
    ],
    faqs: [
      { question: "Do you travel across Sydney?", answer: "Yes, ceremony travel can be discussed when you share your venue and date." },
      { question: "Can I request a quote before booking?", answer: "Yes. Send your date, suburb and ceremony type to receive clear next steps and a quote discussion." }
    ],
    relatedSlugs: ["islamic-nikah-sydney", "nikah-legal-marriage-sydney"]
  }
];

export function getSeoServicePage(slug: string) {
  return seoServicePages.find((page) => page.slug === slug);
}
