import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tournesolarchitecture.fr"),
  title: "Tournesol Architecture",
  description:
    "Agence d'architecture. Le site est en préparation — écrivez-nous à contact@tournesolarchitecture.fr.",
  openGraph: {
    title: "Tournesol Architecture",
    description: "Le site est en préparation. Écrivez-nous.",
    locale: "fr_FR",
    type: "website",
    url: "https://tournesolarchitecture.fr",
    images: [
      {
        url: "/architecture.jpg",
        width: 2400,
        height: 1600,
        alt: "Maison contemporaine — Tournesol Architecture",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${outfit.variable} bg-paper font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
