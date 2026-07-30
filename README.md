# Qazi Marriage Celebrant

Marketing site for an Islamic marriage celebrant in Punchbowl, Sydney — a qazi who
is also registered under the Marriage Act 1961, so the Nikah and the legal
Australian marriage happen in one ceremony.

Built with Next.js (App Router) and hand-written CSS. No UI framework.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Layout

```
app/
  layout.tsx        shared header, footer, mobile action bar, scroll reveals
  globals.css       the whole design system, in one file
  page.tsx          home
  services/  about/  gallery/  testimonials/  faq/  contact/
  not-found.tsx
components/
  Header, Footer, Seal, Ornaments, Photo, PageHero, VerseBand,
  Particles, HeroParallax, ScrollReveal, MobileActionBar,
  GalleryBrowser, FaqAccordion, ContactForm
lib/
  site.ts       business details, nav, which routes have a dark hero
  content.ts    nikah inclusions, journey steps, testimonials, gallery
  services.ts   the seven services and the pricing tiers
  faq.ts        four groups of five questions
  images.ts     seed -> image mapping
public/assets/  celebrant.jpg
```

`globals.css` runs tokens → base → layout → ornaments → components → pages →
motion. Colours, type and spacing are all custom properties in `:root`.

## Things worth knowing

**The arch.** A pointed Islamic arch, not a rounded one. Two forms:

- `--arch-mask` stretches to its box. Used for photographs (`.arch`,
  `.arch-inner`, `.tile`), paired with `<ArchOutline />` for a gold edge.
- `--arch-cap` is a crown that keeps a 100:72 ratio and sits on a rectangle.
  Used for cards (`.arch-card`) via `<ArchSurface />` + `<ArchCapOutline />`.
  Card top padding is `calc(72% + 1.5rem)` — a percentage, so it always clears
  the point no matter how wide the card gets.

Masked elements clip `box-shadow`, so hover lift uses `filter: drop-shadow()`
on the element or its parent instead.

**Images.** `lib/images.ts` maps a seed to a specific free Unsplash photo on
their CDN. The brief called for `source.unsplash.com`, which Unsplash retired,
and random placeholders looked wrong for a wedding site. To use the client's own
photography, point the entry at a file in `/public/assets`. `<Photo>` falls back
to picsum if a request fails, so nothing renders broken.

**The contact form.** Set `FORM_ENDPOINT` in `components/ContactForm.tsx` to a
form service URL. While it is empty the form validates client-side and then
opens a pre-filled `mailto:` to the celebrant.

**Quranic text.** Rendered as real text in Amiri Quran, never as an image, always
`dir="rtl" lang="ar"`, never with `letter-spacing` or `text-transform`. Three
placements only: the homepage band, the About band, and the footer. Every
occurrence is marked `[VERIFY WITH CLIENT]` in the source — the client is the
scholar and should approve the Arabic and the translation before launch.

**Motion.** All of it is disabled under `prefers-reduced-motion: reduce`.

## Before going live

Search the source for `[CONFIRM WITH CLIENT]`. Outstanding items:

- Celebrant's full name, BDM NSW registration number, qazi credentials
- Years of experience and languages ceremonies are conducted in
- Pricing for all three tiers, what the fee covers, payment methods
- Google Business review link (`app/testimonials/page.tsx`)
- Real testimonials — all twelve are placeholders, marked in `lib/content.ts`
- Real photography to replace the Unsplash placeholders
- Approval of the Quranic text and English translations
- Whether pre-marriage guidance is included in the fee or charged separately
- `site.url` in `lib/site.ts` — the real domain, for canonical and OG tags
