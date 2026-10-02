import type { Metadata } from "next";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { CraftsmanshipStrip } from "@/components/sections/CraftsmanshipStrip";
import { SpaceExplorer } from "@/components/sections/SpaceExplorer";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { VKMethodPreview } from "@/components/sections/VKMethodPreview";
import { CollectionsSection } from "@/components/sections/CollectionsSection";
import { WhyVKSection } from "@/components/sections/WhyVKSection";
import { EstimationCTASection } from "@/components/sections/EstimationCTASection";
import { siteMeta } from "@/data/seo";

export const metadata: Metadata = {
  title: `${siteMeta.siteName} — Premium Residential Interior Design, Bengaluru`,
  description:
    "VK Interior designs and executes premium residential interiors in Bengaluru. Complete homes, modular kitchens, bespoke furniture, wardrobes, and smart home solutions — with a 10-Year Warranty. Based in JP Nagar.",
  alternates: {
    canonical: siteMeta.siteUrl,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured data — LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
            name: "VK Interior",
            description: siteMeta.description,
            url: siteMeta.siteUrl,
            telephone: siteMeta.contact.phone,
            email: siteMeta.contact.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: `${siteMeta.contact.address.line1}, ${siteMeta.contact.address.line2}, ${siteMeta.contact.address.line3}`,
              addressLocality: siteMeta.contact.address.city,
              addressRegion: siteMeta.contact.address.state,
              postalCode: siteMeta.contact.address.pincode,
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "12.9122",
              longitude: "77.5855",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "19:00",
            },
            serviceArea: {
              "@type": "City",
              name: "Bengaluru",
            },
            knowsAbout: [
              "Residential Interior Design",
              "Modular Kitchens",
              "Custom Furniture",
              "Wardrobes",
              "Smart Home Integration",
              "Turnkey Interiors",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "VK Interior Services",
            },
            priceRange: "₹₹₹",
          }),
        }}
      />

      <HeroSection />
      <TrustBar />
      <PhilosophySection />
      <CraftsmanshipStrip />
      <SpaceExplorer />
      <FeaturedProjects />
      <VKMethodPreview />
      <CollectionsSection />
      <WhyVKSection />
      <EstimationCTASection />
    </>
  );
}
