/**
 * Image sources.
 *
 * The brief specified `source.unsplash.com/[W]x[H]/?[term]`, which Unsplash has
 * retired. Instead each image is pinned to a specific free Unsplash photo on
 * their CDN, sized through the same imgix parameters. That keeps the subject
 * matter on theme and stable, rather than random.
 *
 * Replace these with the client's own photography as it comes in: drop files in
 * /public/assets and point the entry at "/assets/your-file.jpg".
 *
 * Any seed with no entry falls back to picsum, and <Photo> swaps to picsum if a
 * request fails, so no broken images either way.
 */

/** seed -> Unsplash photo id (free licence, hotlinking permitted). */
const LIBRARY: Record<string, string> = {
  // heroes and posters
  "hero-home": "photo-1584551246679-0daf3d275d0f",
  "services-hero": "photo-1590273089302-ebbc53986b6e",
  "gallery-hero": "photo-1512632578888-169bbbc64f33",
  "faq-hero": "photo-1537181534458-45dcee76ae90",
  "page-hero": "photo-1554110838-816383ce7956",
  "video-poster": "photo-1600814832809-579119f47045",
  "testimonial-video": "photo-1673073220743-ee78b02eb029",

  // services
  "svc-nikah": "photo-1610425303802-f09737e52e28",
  "svc-combined": "photo-1542920069-e414a9af448d",
  "svc-existing": "photo-1603801571246-be066de0c73b",
  "svc-mahr": "photo-1601480905449-90fca867ad37",
  "svc-guidance": "photo-1589002213012-6ec134d3f8ae",
  "svc-overseas": "photo-1520854221256-17451cc331bf",
  "svc-noim": "photo-1564287531351-815cc2d36011",

  // gallery — the client's own ceremony photography leads the set
  "client-nikah-ceremony": "/assets/ceremony-2.jpg",
  "client-mosque-certificate": "/assets/ceremony-1.jpg",
  "client-office-signing": "/assets/ceremony-3.jpg",
  "client-marriage-register": "/assets/mosque-nikah-ceremony.jpeg",
  "client-khutbah": "/assets/indoor-nikah-ceremony.jpeg",
  "client-rings": "/assets/nikah-ring-ceremony.jpeg",
  "client-groom-party": "/assets/outdoor-nikah-ceremony.jpeg",
  "client-paperwork-couple": "/assets/paperwork-with-bride-and-groom.jpg",
  "client-certificate-handover":
    "/assets/handing-registration-certificate-to-groom.jpg",
  "client-family-after-nikah": "/assets/after-nikah-groom-and-family.jpg",
  "client-with-groom": "/assets/celebrant-with-groom.jpg",
  "witnesses-08": "photo-1646229227468-ba6eb534d368",
  "lantern-09": "photo-1644337111604-aa1816b542a1",
  "family-prayer-10": "photo-1652943055585-0b932b58b7ea",
  "home-garden-11": "photo-1595231712612-754e8fe9d29b",
  "mahr-12": "photo-1630198908899-fc1226ddbac4",
  "quran-rings-13": "photo-1586190052777-28599a0facc9",
  "minaret-14": "photo-1623241087673-632acaa0e995",
  "elders-15": "photo-1667210205546-8b21c276a3fe",
  "certificate-16": "photo-1731405717211-00dc10f91792",
  "home-tea-17": "photo-1673073206031-5294044a9433",
  "arch-light-18": "photo-1535117423468-de0ff056882e",
  "calligraphy-19": "photo-1662202999685-1a6ca73ef526",
  "couple-silhouette-20": "photo-1493728695749-5a3603bd6908",
};

export function photo(term: string, seed: string, w: number, h: number) {
  const id = LIBRARY[seed];
  if (!id) return fallbackPhoto(seed, w, h);
  // an entry pointing at /public is the client's own photography — serve as is
  if (id.startsWith("/")) return id;
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=70`;
}

export function fallbackPhoto(seed: string, w: number, h: number) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}

/** The client's own ceremony film — a vertical (9:16) clip, ~53 seconds. */
export const CEREMONY_VIDEO = "/assets/nikah-ceremony-video.mp4";

/**
 * The arch slots on the home, about and contact pages are all 4:5, and this
 * file is cut to 4:5, so it fills them with no crop at all.
 *
 * It is derived from /assets/celebrant.jpg, which is a circular avatar cutout
 * on flat grey: cropping that to 4:5 left the subject a third of the way across
 * rather than on the centre line, and put grey wedges in the bottom corners of
 * the arch. This one is re-cut around the face with the eyes a third down, and
 * the little that falls outside the cutout circle is filled by extending the
 * photograph past its own edge. Rebuild it from the original if the framing
 * ever needs to change — better still, replace both with the uncropped
 * photograph, which needs none of this.
 */
export const CELEBRANT_PORTRAIT = "/assets/celebrant-portrait.jpg";
export const CELEBRANT_PORTRAIT_FALLBACK = fallbackPhoto(
  "qazi-portrait",
  400,
  500,
);
