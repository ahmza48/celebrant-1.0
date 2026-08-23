import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Islamic Nikah & Legal Marriage Celebrant Sydney",
    template: `%s | ${site.name}`,
  },
  description:
    "Qazi Marriage Celebrant provides Islamic Nikah ceremonies and Australian legal marriage registration for Muslim couples across Sydney and NSW.",
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.name,
    url: site.url,
    title: "Islamic Nikah & Legal Marriage Celebrant Sydney",
    description:
      "Islamic Nikah ceremonies and Australian legal marriage registration for Muslim couples across Sydney and NSW.",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@400;500&family=Amiri+Quran&display=swap"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
        <ScrollReveal />
      </body>
    </html>
  );
}
