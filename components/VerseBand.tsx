import { GoldRule } from "./Ornaments";

const ARABIC =
  "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً";

/**
 * Placement 1 — the full verse band (homepage and About).
 * [VERIFY WITH CLIENT] Arabic text and English translation.
 * Arabic never carries letter-spacing or text-transform; words are split only
 * so each can fade in, which does not affect letter joining.
 */
export default function VerseBand() {
  const words = ARABIC.split(" ");

  return (
    <section className="section verse bg-sand cert-border" aria-label="Quranic verse">
      <div className="container">
        <div className="verse-inner">
          <p className="eyebrow">◆ A Verse for Every Nikah</p>

          <p className="verse-arabic" dir="rtl" lang="ar">
            {words.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="w"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {word}
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </p>

          <GoldRule style={{ width: "min(100%, 300px)" }} />

          <p className="verse-en">
            “And among His signs is that He created for you spouses from among
            yourselves, so that you may find tranquillity in them, and He placed
            between you love and mercy.”
          </p>
          <p className="verse-ref">Surah Ar-Rum · 30:21</p>
        </div>
      </div>
    </section>
  );
}
