export const site = {
  name: "Qazi Marriage Celebrant",
  // [CONFIRM WITH CLIENT] — celebrant's full name
  celebrant: "Sheikh M. Hanieh [CONFIRM WITH CLIENT]",
  tagline: "We Cater for All Your Marriage Needs",
  subTagline:
    "Islamic Marriage Celebrant · Legal Civil Marriage Registered in Australia",
  phoneDisplay: "+61 475 409 700",
  phoneHref: "tel:+61475409700",
  whatsapp: "https://wa.me/61475409700",
  email: "mhm.hanieh@gmail.com",
  emailHref: "mailto:mhm.hanieh@gmail.com",
  suburb: "Punchbowl",
  region: "NSW",
  addressLine: "Punchbowl, Sydney NSW",
  serviceArea: "All Sydney and Greater NSW",
  responseTime: "Within 24 hours",
  url: "https://qazimarriagecelebrant.com.au",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

/** Routes whose hero is dark, so the fixed header can start transparent. */
export const darkHeroRoutes = ["/", "/services", "/gallery", "/faq"];
