import Link from "next/link";
import { GoldRule } from "@/components/Ornaments";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="hero page-hero is-light cert-border">
      <div className="container hero-content">
        <p className="eyebrow">◆ Page Not Found</p>
        <h1>This page has moved on</h1>
        <GoldRule style={{ width: "min(100%, 260px)", marginBlock: "1.5rem" }} />
        <p className="hero-sub">
          The page you were looking for is not here. Everything else is one tap
          away.
        </p>
        <div className="btn-row" style={{ marginTop: "2rem" }}>
          <Link href="/" className="btn btn-solid">
            Back to Home
          </Link>
          <Link href="/contact" className="btn btn-outline-dark">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
