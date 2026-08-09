# Qazi Marriage Celebrant — Complete Project Brief
> Single source of truth for all prompts, design decisions, and build requirements.
> Last updated: July 2026

---

## 1. THE CLIENT

| | |
|---|---|
| **Business name** | Qazi Marriage Celebrant |
| **Celebrant** | Sheikh [CONFIRM FULL NAME WITH CLIENT] |
| **Tagline** | We Cater for All Your Marriage Needs |
| **Sub-tagline** | All Religion Marriage Celebrant · Legal Civil Marriage Registered in Australia |
| **Address** | Punchbowl, Sydney NSW |
| **Phone / WhatsApp** | +61 475 409 700 |
| **Email** | mhm.hanieh@gmail.com |
| **WhatsApp link** | https://wa.me/61475409700 |
| **Service area** | All Sydney and Greater NSW |
| **Portrait** | `/assets/celebrant.jpg` — drop real file in; handle missing-image gracefully |
| **Competitor reference** | alwasilmarriagecelebrant.com.au (Muslim-only; we serve all faiths) |

### Who the client is
A qazi — a trained Islamic scholar — who is also a registered Australian marriage celebrant under the Marriage Act 1961. He can conduct your Nikah with full Islamic integrity AND register your marriage legally with the Australian government in one ceremony. Most celebrants in this market can only do one. He does both.

### Who the visitor is
An engaged couple, or more often a parent or older sibling, searching on a phone, comparing two or three celebrants, deciding within a day. Many are from Sydney's Lebanese, Pakistani, Indian, Bangladeshi, Fijian and Afghan communities. English may be their second language. They need to feel within five seconds: *"This person will make our marriage both religiously proper and legally valid, without us having to figure out the paperwork."*

### The single differentiator
Most celebrants in this market serve one faith only. Qazi Marriage Celebrant conducts Islamic Nikah, Hindu, Sikh, Christian, interfaith and civil ceremonies — and handles Australian legal registration in every case. The competitor at alwasilmarriagecelebrant.com.au is Muslim-only. Our advantage is breadth without losing religious credibility. Every design decision should reinforce this.

### Faiths served
Islamic Nikah · Hindu · Sikh · Christian · Interfaith · Civil (non-religious)

---

## 2. DESIGN PHILOSOPHY

> This is the most important section. Read it before touching any code or design tool.

This website must not feel like a business website. It must feel like the beginning of a sacred moment.

A Nikah is not a transaction. It is one of the most spiritually significant events in a family's life. The website must make visitors feel: *"This is the right person. We are in safe hands."*

**The emotional register of every page:** sacred · warm · elegant · trustworthy · timeless

**The visual world this site belongs to:**
- A luxury Nikah certificate — hand-ruled gold borders, fine calligraphy, ivory paper
- The interior of a grand mosque — geometric light, arched thresholds, warm stone
- A premium Arabic wedding invitation — gold foil on cream, elegant serif, nothing wasted
- An illuminated Quran cover — reverent, beautiful, built to last

**It does not belong to:** SaaS landing pages · law firms · insurance companies · accountants · medical clinics · generic modern business websites

**The emotional experience is the product. Every visual decision must serve the feeling, not the feature list.**

### What to avoid
- Pure white (#FFFFFF) or pure black (#000000) anywhere — page should feel like warm parchment
- Blush pink / script fonts / stock-photo couples in fields (Western bridal cliché)
- Black and heavy gold (tacky luxury wedding cliché)
- Random icons, clip art, generic geometric shapes
- Stats bars with numbers (500+, 10+, 100%) — feels commercial; use trust badges instead
- Corporate section-after-section layout — sections must flow and tell a story

---

## 3. COLOUR PALETTE

Never pure white, never pure black. Every colour should feel like candlelight in a beautifully appointed room.

| Token | Hex | Use |
|---|---|---|
| `--ivory` | `#FAF8F3` | warm page ground |
| `--cream` | `#F2EDE3` | alternate section backgrounds |
| `--sand` | `#E8DFD0` | subtle tint for verse bands and panels |
| `--charcoal` | `#1A1A1A` | primary text — rich, not harsh black |
| `--emerald` | `#1B3A30` | deep Islamic green — headers, footer, primary buttons |
| `--olive` | `#2D4A3E` | secondary dark — hover states, depth |
| `--gold` | `#C9A84C` | muted antique gold — the accent |
| `--bronze` | `#A07840` | deeper gold for rules and ornaments |
| `--muted` | `#7A8C84` | secondary text, captions |
| `--line` | `#DDD8CE` | warm dividers |

**Why this palette:** Deep green and gold reads as authoritative and carries positive resonance across Islamic, Hindu and Sikh visual traditions without picking a side. Green is the one hue that works across all faiths served.

**Contrast rule:** `--gold` on `--ivory` is approx. 2.9:1 — use gold only for rules, seals, borders and display text at 24px+. Never for body text, links or form labels. `--charcoal` on `--ivory` clears 11:1 and carries all small text.

---

## 4. TYPOGRAPHY

Think luxury wedding invitation. Think illuminated manuscript. Think premium editorial.

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / headings | **Cormorant Garamond** | 300–600 | Hero headlines, section headings, pull quotes, verse English. Set large, loose, light. |
| Body / UI | **DM Sans** | 400, 500 | All body text, form fields, navigation, captions, buttons |
| Arabic scripture | **Amiri Quran** | 400 | Quranic verses only. Never substitute. Renders full tashkeel correctly. |
| Eyebrow labels | DM Sans | 400 uppercase | `letter-spacing: 0.2em`, small size, `--gold` colour. Every section has one. |

**Type scale:** 0.75 / 0.875 / 1 / 1.25 / 1.5 / 2.25 / 3.5rem

**Rules:**
- Set headlines large and airy — `line-height: 1.3` on display, `line-height: 1.8` on body
- Massive whitespace between sections — minimum 100px vertical padding per section
- Max content width ~1120px, prose ~66ch
- **Never apply `letter-spacing` or `text-transform` to Arabic text** — it breaks letter joining
- Arabic always: `dir="rtl" lang="ar" style="line-height: 2.2; font-family: 'Amiri Quran', serif"`

---

## 5. ISLAMIC DESIGN LANGUAGE

These visual elements must appear throughout the site. They are the identity, not decoration.

### 5.1 Geometric Pattern Texture
Eight-pointed star (Rub el Hizb) geometry and interlocking hexagons used as background texture on dark sections at 5–8% opacity white. Subtle enough to read as texture, present enough to feel intentional. Used on: hero overlay, footer, CTA banners, mobile menu overlay.

### 5.2 Arch Shapes
Pointed Islamic arch silhouette used for image containers, section frames, gallery cards, faith cards and CTA banners. Not rectangular boxes. The arch top can be CSS `clip-path` or SVG. Faith cards, portrait frames and gallery thumbnails all use arch-top containers.

### 5.3 Gold Rules and Ornaments
- Double-rule divider: 2px solid gold line + 1px hairline 5px below it — used between every major section
- Small diamond or four-pointed star ornament `◆` at the centre of rules or at section ends
- These replace standard `<hr>` dividers everywhere

### 5.4 Circular Seal Mark (The Logo)
A circular emblem in gold line art:
- "Qazi" in Cormorant Garamond inside a thin gold circle
- "Marriage Celebrant · Sydney" as curved text arc around the outside
- "Est. Australia" at the base
- Used: header (left), footer (large, centred), as subtle watermark on gallery images
- This is the most important brand element — it must be an SVG, drawn as a stroke animation on page load

### 5.5 Nikah Certificate Border
A fine double-rule border in gold inset from the edges — referencing the formal ruled borders of a Nikah certificate or marriage certificate. Used on: hero section (inset 40px from viewport edges), and key content panels.

### 5.6 Arabesque Corner Ornaments
Very subtle SVG floral arabesque marks at section transitions and in the footer. Think the corner ornaments of a hand-illuminated manuscript page. Small, quiet, never dominant.

---

## 6. QURANIC VERSES — PLACEMENT AND RULES

The celebrant is a qazi. Verses belong here — but placed so they read as *his* conviction, not as audience targeting.

### Approved placements (maximum 3)

**Placement 1 — Homepage verse band (primary)**
Full-width `--sand` background, Nikah certificate border inset, generous vertical padding (100px+).
- Eyebrow: `◆ A VERSE FOR EVERY NIKAH`
- Arabic (Amiri Quran, 2rem, `dir="rtl" lang="ar"`, `line-height: 2.4`, centred, `--charcoal`):
  `وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً`
- Gold rule below Arabic
- English (Cormorant Garamond italic, 1.3rem, centred, `--muted`):
  *"And among His signs is that He created for you spouses from among yourselves, so that you may find tranquillity in them, and He placed between you love and mercy."*
- Reference: DM Sans small uppercase, gold — `SURAH AR-RUM · 30:21`

**Placement 2 — About page**
Same full design as Placement 1, also on `--sand` background.

**Placement 3 — Footer verse strip**
Cream `--cream` band just above the copyright bar. One Arabic line centred:
`وَمِن كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ`
English below in Cormorant Garamond italic muted: *"And of all things We created pairs"* — Adh-Dhariyat 51:49

**Optional 4th placement — Islamic Nikah service block only**
Surah An-Nur 24:32, reference and one-line English only, no full Arabic band.

### Non-negotiable rules
- Never set Quranic text over a photograph
- Never animate beyond a soft opacity reveal — no stroke animations, no scroll effects
- Never in the hero, header, enquiry form, or as a repeating decorative motif
- Never break a verse across an awkward line — test at 390px width
- Render as real text, never as an image
- Mark Arabic and English with `<!-- [VERIFY WITH CLIENT] -->` — the client is the scholar
- Use only out-of-copyright translations or client-approved text

---

## 7. IMAGES

Source all images from Unsplash. Format: `https://source.unsplash.com/[W]x[H]/?[term]`

Every image must have a unique search term. If Unsplash does not resolve, fallback: `https://picsum.photos/seed/[unique-word]/[W]/[H]`

| Context | Search terms to use |
|---|---|
| Heroes / cinematic | `muslim wedding ceremony` · `mosque interior light` · `islamic wedding` · `arabic wedding elegant` · `nikah ceremony` |
| Warmth and emotion | `hands making dua` · `family prayer` · `wedding rings quran` · `muslim bride modestly dressed` · `wedding signing certificate` |
| Atmosphere / texture | `islamic geometric pattern` · `mosque architecture arch` · `arabic lanterns gold` · `mosque dome interior` · `islamic calligraphy gold` |
| Gallery / editorial | `nikah signing` · `arabic wedding family` · `muslim couple silhouette` · `islamic celebration` · `wedding mosque` |
| Celebrant portrait | `/assets/celebrant.jpg` with fallback to `https://source.unsplash.com/400x500/?portrait,man,formal` |

**Hero image treatment:** Always apply `rgba(27, 58, 48, 0.65)` dark emerald overlay + Islamic geometric pattern texture at 6% opacity over it. Never show the raw photograph.

---

## 8. ANIMATIONS

Slow. Smooth. Luxurious. Nothing bouncy, nothing fast, nothing that reminds the visitor of an app.

| Animation | Spec |
|---|---|
| Page entrance | Hero headline fades in + rises 30px over 1200ms ease-out. Subhead 300ms later. Buttons 300ms after that. |
| Seal SVG draw | Stroke draws on page load over 900ms |
| Gold rule reveal | Horizontal gold rule draws from centre outward over 800ms on scroll-into-view |
| Scroll reveals | `IntersectionObserver` — `opacity: 0; transform: translateY(30px)` → visible, 700ms ease-out. Children stagger 120ms. Fires once only. |
| Parallax | Hero background at 0.4× scroll speed. Subtle depth, not dramatic. |
| Portrait reveal | Soft opacity fade over 900ms with warm vignette expanding from centre |
| Verse reveal | `opacity: 0 → 1` word-by-word on the Arabic, 150ms stagger per word |
| Floating particles | 12–15 tiny gold dots (2px, 40% opacity) drift upward on the dark hero. CSS only. `animation-duration: 8–15s` randomised. Like incense smoke. |
| Card hover | Lift 4px, `box-shadow` deepens. No scale, no bounce. `transition: 400ms ease` |
| Button hover | Gold underline draws left-to-right under 250ms. Background warms slightly. |
| FAQ accordion | `grid-template-rows: 0fr → 1fr`, 350ms ease. Chevron rotates 180°. `aria-expanded` toggled. |
| Mobile sticky bar | Slides up from bottom after hero scrolls past. Smooth entrance. |
| Header on scroll | Becomes solid `--ivory` with border-bottom after 80px. 300ms transition. |
| Stats counter | Numbers count up from 0 when scrolled into view (if stats bar used) |
| Section transitions | Thin gold line draws across full width before next section content fades in |

**All animations must respect `prefers-reduced-motion: reduce` — disable all motion if set.**

---

## 9. PAGES — OVERVIEW

7 separate HTML files. Same header, footer, design system and font imports on every page.

| File | Page |
|---|---|
| `index.html` | Home |
| `services.html` | Services |
| `about.html` | About |
| `gallery.html` | Gallery |
| `testimonials.html` | Testimonials |
| `faq.html` | FAQ |
| `contact.html` | Contact |

---

## 10. NAVIGATION (shared — identical on all 7 pages)

**Desktop:**
- Left: circular seal mark SVG logo
- Centre: Home · Services · About · Gallery · Testimonials · FAQ · Contact — DM Sans, small. Active page has permanent gold underline (detected via `window.location.pathname`)
- Right: "Book a Ceremony" button — `--emerald` background, white DM Sans, gold border

**Behaviour:**
- Transparent over hero sections
- Transitions to solid `--ivory` with warm bottom hairline border after 80px scroll, 300ms
- Active page nav link always shows gold underline

**Mobile:**
- Hamburger icon → full-screen `--emerald` overlay
- Islamic geometric texture behind links
- White nav links centred and stacked, Cormorant Garamond, large
- Close button top-right
- Body scroll locked while open
- Links close the menu on click

---

## 11. FOOTER (shared — identical on all 7 pages)

- `--emerald` background
- Islamic geometric pattern texture at 6% opacity
- Nikah certificate double-rule border inset

**Structure (top to bottom):**
1. Circular seal mark, large, centred, gold
2. Three columns: brand description + WhatsApp/Call buttons · quick links to all 7 pages · full contact details (address, phone, email, service area)
3. Quranic verse strip (Placement 3 from Section 6 above) — `--cream` band
4. Copyright bar: DM Sans small, `--muted`, centred — © 2026 Qazi Marriage Celebrant · All Rights Reserved

---

## 12. HOME PAGE (`index.html`) — SECTION BY SECTION

The homepage tells a story. It does not list services.

**Flow:**
Hero → Why Families Choose Us → Faiths We Honour → Quranic Verse → How Your Day Unfolds → Gallery Preview → Words from Families → Begin Your Journey → Footer

---

### Section 1 — Hero (The Arrival)

Full viewport height. Cinematic. Dark emerald overlay on wedding/mosque image. Islamic geometric texture at 6% opacity over overlay. Nikah certificate double-rule border inset 40px from all viewport edges.

Centred layout, all white:
- Eyebrow: `◆ AUTHORISED MARRIAGE CELEBRANT · SYDNEY ◆` — DM Sans uppercase, gold, small
- Headline line 1: *"Bringing Hearts Together"* — Cormorant Garamond, 5rem, light weight, white, wide tracking. Fade+rise on load.
- Headline line 2: *"Through the Blessings of Nikah"* — same face, italic, slightly smaller, gold. 300ms after line 1.
- Thin gold rule with `◆` ornament
- Subhead: *"Religious Nikah & Legally Registered Marriage — One Ceremony. One Celebrant. Complete Peace of Mind."* — DM Sans, white, 1.1rem
- Three buttons: **Book a Consultation** (gold background, dark text) · **WhatsApp Us** (outlined gold) · **Call Now** (text + white underline)
- Floating gold particles (12–15 dots, upward drift)
- Scroll indicator: thin gold vertical line, 60px, pulsing downward at bottom centre

**Trust strip (below scroll indicator — not a stats bar):**
`✓ Registered Australian Marriage Celebrant · ✓ Islamic Nikah · ✓ Legal Civil Marriage · ✓ All Faiths · ✓ Sydney & NSW`
DM Sans small, white, `opacity: 0.8`

---

### Section 2 — Why Families Choose Us

`--ivory` background. Narrative, not a feature grid.

- Eyebrow: `◆ OUR PROMISE`
- Heading: *"Your Most Sacred Moment, Handled with Care"* — Cormorant Garamond, centred, large
- One warm paragraph (DM Sans body) explaining what it means to have a qazi conduct your Nikah
- Three centred italic statements in Cormorant Garamond, each separated by `◆`:
  - *"Every Nikah conducted with sincerity and Islamic integrity"*
  - *"Every couple guided through Australian legal requirements without confusion"*
  - *"Every family made to feel that this day belongs to them"*

---

### Section 3 — The Faiths We Honour

`--cream` background. Arch-shaped panels.

- Eyebrow: `◆ ALL RELIGIONS WELCOME`
- Heading: *"One Celebrant. Every Faith."*
- Six arch-shaped cards in 3×2 grid (desktop), 2×3 (tablet), 1×6 (mobile)
- Each arch: gold top border, geometric pattern at 4% opacity in background, faith name in Cormorant Garamond, one-line description in DM Sans small
- Islamic Nikah card is primary — slightly larger, gold background tint
- Faiths: Islamic Nikah · Hindu · Sikh · Christian · Interfaith · Civil Ceremony

---

### Section 4 — Quranic Verse Band

Full-width `--sand` background. See Section 6 of this brief (Placement 1). Ar-Rum 30:21.

---

### Section 5 — How Your Day Unfolds

`--ivory` background. This is a story of the day, not a process diagram.

- Eyebrow: `◆ YOUR CEREMONY JOURNEY`
- Heading: *"From First Enquiry to Married"*
- Four steps in horizontal flowing layout — connected by a gold line on desktop, vertical on mobile
- Each step: large Cormorant Garamond gold number, heading in Cormorant Garamond dark, two sentences DM Sans body
- Steps: **Reach Out** · **Prepare Together** · **Your Ceremony Day** · **Legally Married**
- Gold connecting line draws/fills as section scrolls into view

---

### Section 6 — Gallery Preview

`--emerald` background with geometric texture. Editorial, not a uniform grid.

- Eyebrow: `◆ CEREMONIES ACROSS SYDNEY`
- Heading: *"Every Ceremony is Unique"* — white, Cormorant Garamond
- Layout: one large landscape image (full width), then two rows of three images below in arch-top frames
- Hover: warm gold overlay with white caption in DM Sans
- "View Full Gallery →" link to `gallery.html`

---

### Section 7 — Words from Families

`--cream` background. Three testimonial cards. Each: fine gold left border (4px), italic quote in Cormorant Garamond, name in DM Sans small, ceremony type label in gold uppercase. All marked `<!-- PLACEHOLDER — REPLACE WITH REAL REVIEWS -->`.

---

### Section 8 — Begin Your Journey (CTA Closing)

Full-width `--emerald` background, geometric texture, Nikah certificate border inset.

- Arch-framed portrait of the Sheikh (gold-outlined arch shape), centred
- Heading: *"Begin Your Journey"* — Cormorant Garamond, white, large
- Subhead: *"Contact us today. We guide you every step of the way, with faith and with care."* — DM Sans, soft white
- Two buttons: **WhatsApp** (gold) · **Call Now** (outlined)
- Below buttons: `بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ` in Amiri Quran, small — DM Sans muted label below it

---

## 13. SERVICES PAGE (`services.html`)

- **Hero:** 50vh, `--emerald` background, geometric texture, Nikah certificate border, white Cormorant Garamond headline "Our Services", breadcrumb below
- **Each service:** Full alternating two-column layout (arch-framed image one side, content the other, alternating). Between services: full-width gold double-rule with `◆` ornament
- **Content per service:** eyebrow · Cormorant Garamond heading · 3 body paragraphs (150+ words) · gold bullet list of what's included
- **Double-rule between each service**

**Services to cover (in this order):**
1. Islamic Nikah Ceremony — what a Nikah involves, the qazi's role, Mahr, witnesses (wali + two male witnesses or equivalent), Ijab and Qubool. Explain Nikah alone is not legally recognised in Australia. Include Surah An-Nur 24:32 reference (English only, no full band).
2. Nikah + Legal Civil Marriage (Combined) — the most popular package. Both conducted in one ceremony. NOIM required one month + one day prior. Certificate from Births, Deaths & Marriages NSW.
3. Hindu Ceremony — Saat Phere, Mangalsutra, Sindoor. Celebrant works with family to incorporate all rituals.
4. Sikh Anand Karaj — four laavan, Gurdwara traditions respected, legal civil component alongside.
5. Christian Ceremony — vows, readings, exchange of rings. Denominationally flexible.
6. Interfaith & Civil Ceremony — fully customised script, legally binding, no religious requirements imposed.
7. NOIM & Documentation Assistance — standalone: help completing and lodging NOIM, ID documents, witness requirements.

**Pricing section:**
Three arch-topped cards on `--cream`. Centre card in `--emerald` (featured). Each: tier name in Cormorant Garamond, price `[CONFIRM WITH CLIENT]`, feature list with gold checkmarks, CTA button.

---

## 14. ABOUT PAGE (`about.html`)

- **Hero:** `--cream` background, 50vh. Eyebrow: `◆ YOUR CELEBRANT`. Heading: *"Meet the Qazi"*
- **Bio section:** Two columns. Left: large portrait in arch frame with gold corner ornaments. Right: 4 warm paragraphs in first-person voice — background as qazi, commitment to Islamic integrity + Australian legal compliance, breadth of faiths served, Punchbowl base. Credential badges below (pill-shaped, gold border, `--emerald` text). Mark registration numbers and years as `[CONFIRM WITH CLIENT]`.
- **Quranic verse band:** Full Placement 1 design (Ar-Rum 30:21) — `--sand` background
- **Values section:** Three statements in centred Cormorant Garamond italic style — Dignity · Clarity · Compliance. Two-sentence description each.
- **Community section:** `--emerald` background, white text. Lists Sydney communities served — Lebanese, Pakistani, Indian, Bangladeshi, Fijian, Afghan and broader multicultural Sydney. Languages spoken: `[CONFIRM WITH CLIENT]`. Warm, inclusive tone.

---

## 15. GALLERY PAGE (`gallery.html`)

- **Hero:** 50vh dark hero, same style. Heading: *"Ceremonies Across Sydney"*
- **Filter bar:** Sticky below hero — All · Nikah · Civil · Hindu · Sikh · Christian · Interfaith. Active filter: gold underline + `--emerald` text. Gold bottom hairline border. Filtered-out items animate to `opacity: 0; transform: scale(0.95)` then hide.
- **Masonry grid:** CSS `columns: 3` (desktop) / `columns: 2` (tablet) / `columns: 1` (mobile). 18 images minimum. Mixed portrait and landscape. All with arch-top frames and unique Unsplash seeds. Each image: `data-category` attribute for filtering.
- **Hover state:** Dark emerald overlay, white caption in DM Sans, small brass rule above caption
- **Lightbox:** Full-screen `rgba(26, 26, 26, 0.96)` overlay. Image centred. Prev/next arrows in gold circles. Close button top-right. Caption below. Opens with `opacity` 0→1 over 200ms. Keyboard: arrow keys navigate, Escape closes.
- **Editorial breaks:** Between image rows, occasional Cormorant Garamond italic pull quotes on `--cream` background — like a magazine layout.
- **Video placeholder:** `--sand` band with play-button icon in gold circle, "Ceremony highlight video coming soon", Unsplash poster background.

---

## 16. TESTIMONIALS PAGE (`testimonials.html`)

- **Hero:** 50vh `--cream` hero. Heading: *"What Families Say"*
- **Grid:** 3 columns (desktop), 2 (tablet), 1 (mobile). 12 cards. Each card: white `--ivory` background, gold left border (4px), italic quote in Cormorant Garamond, name in DM Sans small, ceremony type label in gold uppercase. All marked `<!-- PLACEHOLDER — REPLACE WITH REAL REVIEWS -->`
- **Google Review CTA band:** `--emerald` background, white text, centred. "Happy with your ceremony? Leave us a Google Review." + placeholder button. Mark href as `[CONFIRM WITH CLIENT — Google Business link]`
- **Video testimonial placeholder:** Same poster + play-button treatment as Gallery

---

## 17. FAQ PAGE (`faq.html`)

- **Hero:** 50vh dark hero. Heading: *"Frequently Asked Questions"*
- **Accordion:** Grouped under 4 headings in Cormorant Garamond. Open items show `--cream` panel with gold left border. Chevron in gold rotates 180°. `aria-expanded` toggled. Keyboard: Enter/Space activates. Animation: `grid-template-rows: 0fr → 1fr`, 350ms ease.

**Legal Requirements (5 questions)**
- Is a Nikah alone legally recognised in Australia? (No — a civil ceremony by an authorised celebrant registered under the Marriage Act 1961 is required.)
- What is a NOIM and when must it be lodged? (At least one month and one day before; valid up to 18 months.)
- What documents are needed? (Birth certificate or passport. If previously married: death certificate or divorce order. Originals required.)
- How many witnesses are required? (Two witnesses aged 18+, present at the ceremony.)
- Can you marry overseas nationals visiting Australia? (Mark uncertain parts `[CONFIRM WITH CLIENT]`)

**The Ceremony (5 questions)**
- Can Nikah and civil marriage happen in the same ceremony? (Yes — most common arrangement.)
- Where can the ceremony take place? (Home, venue, mosque, temple, garden — anywhere across Sydney and NSW.)
- How long does a ceremony take? (15–20 min civil; 45–60 min Nikah + civil with khutbah.)
- Can we customise the ceremony script? (Yes — prepared in consultation with couple and family.)
- What languages are ceremonies conducted in? (`[CONFIRM WITH CLIENT]`)

**Faiths & Inclusivity (5 questions)**
- Do you only conduct Islamic ceremonies? (No — all faiths and civil ceremonies welcomed.)
- What happens in a Hindu / Sikh / Christian ceremony? (Brief answer for each.)
- Can you conduct an interfaith ceremony? (Yes — designed collaboratively to honour both traditions.)
- Is there anything I need to do differently if I am not Muslim? (No — the celebrant adapts entirely to your faith and customs.)
- Do I need to be religious to book a civil ceremony? (No — civil ceremonies have no religious content.)

**Bookings & Fees (5 questions)**
- How far in advance should we book? (As early as possible — minimum one month and one day for NOIM. Popular dates fill quickly.)
- How do we get a quote? (Contact by WhatsApp or enquiry form — provide date, ceremony type, location.)
- What is your service area? (Sydney and all NSW — travel fees may apply for regional.)
- What is included in the fee? (`[CONFIRM WITH CLIENT]`)
- How do we pay? (`[CONFIRM WITH CLIENT]`)

---

## 18. CONTACT PAGE (`contact.html`)

- **Hero:** 50vh `--cream` hero. Heading: *"Get in Touch"*. Subhead: *"We respond within 24 hours."*
- **Layout:** Two-column on desktop, stacked on mobile.

**Left — Enquiry Form:**
Bottom-border-only field style (no box borders — just a warm gold line on focus, replacing the bottom border). Labels in DM Sans uppercase small above each field. All fields validated client-side.

Fields: Full Name · Phone Number · Email Address · Ceremony Type (select: Islamic Nikah / Nikah + Civil / Hindu / Sikh / Christian / Interfaith / Civil / Not sure yet) · Preferred Ceremony Date (date input) · Location / Venue (text) · How did you hear about us? (select: Google / WhatsApp / Referral / Social Media / Other) · Message (textarea)

Validation: brass/gold border on error. Specific inline message per field below it ("Please enter a valid email address" not "This field is required"). On submit: form hides, confirmation message appears with WhatsApp button.

Wire to `const FORM_ENDPOINT = ""` — if empty, `mailto:mhm.hanieh@gmail.com` fallback.

**Right — Info Panel:**
- Arch-framed portrait of Sheikh
- Short personal message in Cormorant Garamond italic: *"I look forward to being part of your most important day."*
- WhatsApp button — large, prominent, gold background (`https://wa.me/61475409700`)
- Call button — outlined, below WhatsApp (`tel:+61475409700`)
- Address: Punchbowl, Sydney NSW
- Email: mhm.hanieh@gmail.com
- Service area: All Sydney and Greater NSW
- Response time: Within 24 hours
- OpenStreetMap embed: `https://www.openstreetmap.org/export/embed.html?bbox=151.04,-33.95,151.07,-33.92&layer=mapnik` — gold arch frame border
- Closing prayer line at very bottom: `بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ` — DM Sans muted label below

---

## 19. MOBILE — STICKY ACTION BAR

Fixed at bottom of screen on all pages, visible only on screens < 768px, appears only after the hero has scrolled out of view.

Two full-width buttons: **WhatsApp** (gold background) · **Call Now** (emerald background). Slides up from bottom with smooth animation on appearance.

---

## 20. TECHNICAL REQUIREMENTS

- 7 separate `.html` files — no build step, no frameworks, no CSS libraries. Pure vanilla HTML, CSS, JS.
- CSS custom properties in `:root` declared identically on every file
- Google Fonts loaded in every file: Cormorant Garamond (300, 300i, 400, 400i, 600), DM Sans (400, 500), Amiri Quran
- Shared CSS structured in order: tokens → base → layout → component → page-specific
- Active nav link: compare `window.location.pathname` to each link's href on page load, add `.active` class
- One `<h1>` per page. Semantic landmarks: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`
- Keyboard accessible: Tab navigates all interactive elements, Enter/Space activates, visible `:focus-visible` ring in gold
- Colour contrast: `--charcoal` on `--ivory` ≥ 11:1. Never use `--gold` for body text below 24px
- Responsive breakpoints: 360px / 768px / 1024px / 1440px
- Lazy-load all images below the fold with `loading="lazy"`
- Arabic text: never `letter-spacing` or `text-transform`. Always `dir="rtl" lang="ar"`. `line-height: 2.2` minimum. Amiri Quran font only.
- SEO on every page: unique `<title>` and `<meta name="description">`
- `index.html` includes `LocalBusiness` JSON-LD: name "Qazi Marriage Celebrant", phone "+61475409700", email "mhm.hanieh@gmail.com", locality "Punchbowl", region "NSW", country "AU". No fake `aggregateRating`.
- Open Graph tags on `index.html`
- `font-display: swap` on all font faces
- Seal mark must be inline SVG (not an image file) so it can be stroke-animated on load

---

## 21. COPY GUIDELINES

- Warm, direct, plain English. Short sentences.
- No "seamless", no "bespoke journey", no em-dash marketing voice
- Write for someone reading on a phone with English as a second language
- Never invent credentials, registration numbers, years of experience or review counts — always mark as `[CONFIRM WITH CLIENT]`
- Testimonials are placeholder — mark with `<!-- PLACEHOLDER — REPLACE WITH REAL REVIEWS -->`
- Never claim a specific aggregate rating or review count in JSON-LD

---

## 22. CLIENT CONFIRMATION CHECKLIST

Before going live, confirm all items marked `[CONFIRM WITH CLIENT]`:

- [ ] Celebrant's full name
- [ ] BDM NSW registration number
- [ ] Islamic / qazi credentials and any formal certifications
- [ ] Languages in which ceremonies are conducted
- [ ] Years of experience
- [ ] Pricing for all three tiers
- [ ] What is included in the fee
- [ ] Payment methods accepted
- [ ] Google Business Review link
- [ ] Real portrait photo (replace `/assets/celebrant.jpg`)
- [ ] Real testimonials (replace all placeholder cards)
- [ ] Approval of Quranic verse text and English translation
- [ ] Confirmation of community languages spoken

