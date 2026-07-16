import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://klushulpnoord.nl"),
  title: { default: "KlusHulp Noord | Betaalbare en betrouwbare klushulp", template: "%s | KlusHulp Noord" },
  description: "KlusHulp Noord helpt met montage, herstelwerk, schilderwerk, kleine verbouwingen, tuinwerk en praktisch onderhoud in Noord-Nederland.",
  keywords: ["klushulp", "klusbedrijf", "Noord-Nederland", "montage", "timmerwerk", "schilderwerk", "sociaal tarief"],
  alternates: { canonical: "/" },
  icons: { icon: "/logo-klushulp-noord.svg" },
  openGraph: {
    title: "KlusHulp Noord",
    description: "Betaalbaar • Betrouwbaar • Voor Iedereen",
    url: "/",
    siteName: "KlusHulp Noord",
    locale: "nl_NL",
    type: "website",
    images: [{ url: "/logo-klushulp-noord.svg", width: 1246, height: 565, alt: "KlusHulp Noord" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nl"><body>{children}</body></html>;
}