/** The six things every Nikah here covers. Replaces a faith-by-faith list. */
export const nikahIncludes = [
  {
    name: "The Nikah",
    blurb:
      "Khutbah, Ijab and Qubool, and du'a — conducted in full by a trained qazi.",
    primary: true,
  },
  {
    name: "Legal Registration",
    blurb:
      "The Marriage Act 1961 ceremony in the same gathering, registered with BDM NSW.",
  },
  {
    name: "Mahr & the Contract",
    blurb:
      "Agreed openly in front of witnesses and written into your Nikah nama.",
  },
  {
    name: "Wali & Witnesses",
    blurb:
      "Who must be present, and what each of them does, explained before the day.",
  },
  {
    name: "NOIM & Documents",
    blurb:
      "Your notice lodged on time and every document checked while there is time to fix it.",
  },
  {
    name: "Your Venue",
    blurb:
      "At home, at the masjid, in a hall or a garden — anywhere across Sydney and NSW.",
  },
] as const;

export const journey = [
  {
    step: "I",
    title: "Reach Out",
    body: "Send a message on WhatsApp or fill in the enquiry form. Tell us your date, where you would like the Nikah, and who will attend.",
  },
  {
    step: "II",
    title: "Prepare Together",
    body: "We complete your Notice of Intended Marriage, agree the Mahr and confirm your wali and witnesses. You will know exactly what to bring.",
  },
  {
    step: "III",
    title: "Your Nikah Day",
    body: "The khutbah, the Ijab and Qubool, and the legal ceremony are conducted together. Your family sees one unbroken ceremony.",
  },
  {
    step: "IV",
    title: "Legally Married",
    body: "You sign the Nikah nama and the marriage certificates with your two witnesses. Your marriage is registered with Births, Deaths and Marriages NSW.",
  },
] as const;

/* PLACEHOLDER — REPLACE WITH REAL REVIEWS */
export const testimonials = [
  {
    quote:
      "He explained every step of the paperwork to my parents in a way they understood. The Nikah felt proper and the legal side was handled quietly in the background.",
    who: "Amina & Yusuf",
    kind: "Nikah + Civil",
  },
  {
    quote:
      "We had our Nikah overseas years ago and never registered it here. He sorted the whole thing without making us feel foolish for leaving it so long.",
    who: "Sadia & Kamran",
    kind: "Registering an Existing Nikah",
  },
  {
    quote:
      "Warm, calm and never rushed. On the day he made my grandmother feel like the most important person in the room.",
    who: "Fatima & Bilal",
    kind: "Islamic Nikah",
  },
  {
    quote:
      "He sat with both fathers and went through the Mahr properly, so it was agreed and written down before the day. That saved a lot of awkwardness.",
    who: "Hafsa & Tariq",
    kind: "Mahr & Contract",
  },
  {
    quote:
      "He answered my messages the same day, every time. When you are planning from overseas that matters more than anything.",
    who: "Nadia & Omar",
    kind: "Overseas Couple",
  },
  {
    quote:
      "The whole Nikah was in our lounge room with about twenty people. It still felt like the most important day of our lives.",
    who: "Ruqayya & Adnan",
    kind: "Nikah at Home",
  },
  {
    quote:
      "My English is not strong. He slowed down, repeated things and made sure I understood what I was signing.",
    who: "Mariam K.",
    kind: "Islamic Nikah",
  },
  {
    quote:
      "We booked six weeks out and thought it was impossible. He lodged our NOIM in time and kept us calm.",
    who: "Khadija & Ismail",
    kind: "NOIM & Documents",
  },
  {
    quote:
      "No pressure, no upselling. He told us exactly what the law required and what was optional.",
    who: "Hassan & Layla",
    kind: "Nikah + Civil",
  },
  {
    quote:
      "I reverted last year and was worried the Nikah would feel like something happening around me. He explained each part as it happened.",
    who: "Aisha & Musa",
    kind: "Islamic Nikah",
  },
  {
    quote:
      "He travelled out to us and did not make a fuss about the distance. The whole family noticed.",
    who: "The Rahman Family",
    kind: "Nikah at Home",
  },
  {
    quote:
      "Everything arrived from Births, Deaths and Marriages without a single problem. He followed up to check.",
    who: "Zainab & Ali",
    kind: "Nikah + Civil",
  },
] as const;

export type GalleryCategory =
  | "nikah"
  | "signing"
  | "mosque"
  | "home"
  | "family";

export type GalleryItem = {
  seed: string;
  term: string;
  caption: string;
  category: GalleryCategory;
  w: number;
  h: number;
};

export const galleryFilters: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "nikah", label: "The Nikah" },
  { id: "signing", label: "Signing" },
  { id: "mosque", label: "At the Masjid" },
  { id: "home", label: "At Home" },
  { id: "family", label: "Families" },
];

export const gallery: GalleryItem[] = [
  { seed: "nikah-signing-01", term: "nikah signing", caption: "Signing the Nikah nama, Punchbowl", category: "signing", w: 1600, h: 700 },
  { seed: "mosque-arch-02", term: "mosque architecture arch", caption: "Nikah at a Western Sydney masjid", category: "mosque", w: 800, h: 600 },
  { seed: "dua-hands-03", term: "hands making dua", caption: "Du'a for the couple", category: "family", w: 800, h: 1100 },
  { seed: "civil-signing-04", term: "wedding signing certificate", caption: "The legal certificates, Bankstown", category: "signing", w: 800, h: 620 },
  { seed: "khutbah-05", term: "islamic ceremony gathering", caption: "The khutbah before the Ijab and Qubool", category: "nikah", w: 800, h: 1000 },
  { seed: "mosque-dome-06", term: "mosque dome interior", caption: "Light through the dome, Lakemba", category: "mosque", w: 800, h: 640 },
  { seed: "home-nikah-07", term: "family gathering home", caption: "A Nikah in the family lounge room", category: "home", w: 800, h: 1050 },
  { seed: "witnesses-08", term: "wedding witnesses signing", caption: "Two witnesses, as the law requires", category: "signing", w: 800, h: 600 },
  { seed: "lantern-09", term: "arabic lanterns gold", caption: "An evening Nikah, Greenacre", category: "nikah", w: 800, h: 1000 },
  { seed: "family-prayer-10", term: "family prayer gathering", caption: "Both families together afterwards", category: "family", w: 800, h: 660 },
  { seed: "home-garden-11", term: "garden ceremony", caption: "A garden Nikah in the backyard", category: "home", w: 800, h: 1080 },
  { seed: "mahr-12", term: "wedding rings gold", caption: "The Mahr, agreed and recorded", category: "nikah", w: 800, h: 620 },
  { seed: "quran-rings-13", term: "wedding rings quran", caption: "Rings beside the Nikah register", category: "nikah", w: 800, h: 980 },
  { seed: "minaret-14", term: "mosque minaret", caption: "Arriving at the masjid", category: "mosque", w: 800, h: 640 },
  { seed: "elders-15", term: "elderly hands family", caption: "The wali gives his consent", category: "family", w: 800, h: 1020 },
  { seed: "certificate-16", term: "marriage certificate documents", caption: "Registered with BDM NSW", category: "signing", w: 800, h: 600 },
  { seed: "home-tea-17", term: "family tea gathering", caption: "Tea after the ceremony, Punchbowl", category: "home", w: 800, h: 1040 },
  { seed: "arch-light-18", term: "mosque arch light", caption: "Waiting for the ceremony to begin", category: "mosque", w: 800, h: 660 },
  { seed: "calligraphy-19", term: "islamic calligraphy gold", caption: "The Nikah nama, hand-ruled", category: "nikah", w: 800, h: 960 },
  { seed: "couple-silhouette-20", term: "muslim couple silhouette", caption: "After the Nikah, Georges River", category: "family", w: 800, h: 620 },
];
