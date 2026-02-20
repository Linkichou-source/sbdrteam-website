import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "SBDR Team — Modernisation Commerciale B2B",
  description: "Cabinet spécialisé dans la modernisation commerciale B2B. Coaching, formation et structuration pour restaurer une machine commerciale performante. +70 entreprises accompagnées, +35% de conversion moyenne.",
  keywords: "coaching commercial, formation B2B, prospection, performance commerciale, vente B2B",
  authors: [{ name: "SBDR Team" }],
  openGraph: {
    title: "SBDR Team — Modernisation Commerciale B2B",
    description: "Coaching, formation et structuration pour les entreprises B2B en transformation.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
