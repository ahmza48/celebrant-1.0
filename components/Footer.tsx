import Link from "next/link";
import Seal from "./Seal";
import { PatternLayer, GoldRule, Arabesque } from "./Ornaments";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer pattern">
      <PatternLayer />

      <div className="footer-main cert-border">
        <div className="container">
          <div className="footer-seal">
            <Seal id="seal-footer" size={132} title="Qazi Marriage Celebrant" />
          </div>

          <div className="footer-cols">
            <div>
              <h3>Qazi Marriage Celebrant</h3>
              <p>
                Islamic Nikah conducted by a qazi, and your marriage registered
                legally in Australia — in one ceremony, with one celebrant.
                Serving Muslim families across Sydney and NSW.
              </p>
              <div className="btn-row" style={{ marginTop: "1.5rem" }}>
                <a
                  className="btn btn-gold"
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                <a className="btn btn-outline" href={site.phoneHref}>
                  Call Now
                </a>
              </div>
            </div>

            <nav aria-label="Footer">
              <h3>Pages</h3>
              <ul className="footer-links">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3>Contact</h3>
              <ul className="footer-links">
                <li>{site.addressLine}</li>
                <li>
                  <a href={site.phoneHref}>{site.phoneDisplay}</a>
                </li>
                <li>
                  <a href={site.emailHref}>{site.email}</a>
                </li>
                <li>Service area: {site.serviceArea}</li>
                <li>Response time: {site.responseTime}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quranic verse strip — Placement 3.
          Set on the footer's own ground rather than a pale band, so it closes
          the page instead of cutting it in two. */}
      {/* [VERIFY WITH CLIENT] Arabic text and English translation */}
      <section className="footer-verse" aria-label="Closing verse">
        <div className="container">
          <Arabesque className="center-block" />
          <p className="eyebrow">◆ The Verse We Close With</p>

          <p className="arabic-line" dir="rtl" lang="ar">
            وَمِن كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ
          </p>

          <GoldRule style={{ width: "min(100%, 220px)" }} />

          <p className="verse-en">“And of all things We created pairs”</p>
          <p className="verse-ref">Surah Adh-Dhariyat · 51:49</p>
        </div>
      </section>

      <div className="footer-bottom">
        © 2026 {site.name} · All Rights Reserved
      </div>
    </footer>
  );
}
