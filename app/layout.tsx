import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://klushulpnoord.nl"),
  title: "KlusHulp Noord | Betaalbaar vakwerk voor iedereen",
  description: "Betaalbare en betrouwbare klushulp in Noord-Nederland.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nl"><body>{children}</body></html>;
}
