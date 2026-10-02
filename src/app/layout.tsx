import { Cormorant_Garamond, Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { siteMeta } from "@/data/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.siteUrl),
  title: {
    default: `${siteMeta.siteName} — ${siteMeta.tagline}`,
    template: `%s | ${siteMeta.siteName}`,
  },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  authors: [{ name: siteMeta.siteName }],
  creator: siteMeta.siteName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteMeta.siteUrl,
    siteName: siteMeta.siteName,
    title: `${siteMeta.siteName} — ${siteMeta.tagline}`,
    description: siteMeta.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VK Interior — Premium Residential Interior Design, Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.siteName} — ${siteMeta.tagline}`,
    description: siteMeta.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteMeta.siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="font-body bg-plaster text-charcoal antialiased">
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
