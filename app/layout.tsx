import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avenirNext = localFont({
  src: [
    {
      path: "./fonts/AvenirNext-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNext-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNext-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
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
        url: "/logo.svg",
        width: 1182,
        height: 1182,
        alt: "Tournesol Architecture",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body
        className={`${avenirNext.className} ${avenirNext.variable} bg-paper font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
