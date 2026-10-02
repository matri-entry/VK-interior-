import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { allServices } from "@/data/services";
import { siteMeta } from "@/data/seo";

export const metadata: Metadata = {
  title: "Interior Design Spaces & Services",
  description:
    "Explore VK Interior's complete range of residential interior design services in Bengaluru — complete homes, modular kitchens, living rooms, bedrooms, wardrobes, bespoke furniture, pooja rooms, and smart home solutions.",
  alternates: {
    canonical: `${siteMeta.siteUrl}/spaces`,
  },
};

export default function SpacesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 bg-ivory border-b border-stone">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <SectionLabel text="Our Services" className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h1 className="text-display-lg font-display font-400 text-charcoal">
              Every Space,
              <br />
              <em className="italic font-300">Considered.</em>
            </h1>
            <p className="font-body text-base text-charcoal/65 leading-relaxed max-w-lg">
              VK Interior designs and executes interiors across every room and
              space in your home — from statement entrance doors to complete
              home transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding-lg bg-plaster">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allServices.map((service) => (
              <Link
                key={service.slug}
                href={`/spaces/${service.slug}`}
                className="group block bg-ivory rounded-sm overflow-hidden border border-stone hover:border-stone-dark transition-all duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {service.heroImage ? (
                    <Image
                      src={service.heroImage}
                      alt={service.heroAlt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <ImagePlaceholder
                      aspectRatio=""
                      label={service.title}
                      className="absolute inset-0"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-display text-2xl font-400 text-charcoal mb-2">
                    {service.title}
                  </h2>
                  <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 font-body text-xs font-500 text-walnut group-hover:text-charcoal transition-colors duration-200">
                    Explore
                    <ArrowRight
                      size={12}
                      strokeWidth={2}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ivory border-t border-stone">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 text-center">
          <h2 className="text-display-sm font-display font-400 text-charcoal mb-4">
            Not sure where to begin?
          </h2>
          <p className="font-body text-sm text-charcoal/60 mb-8 max-w-md mx-auto leading-relaxed">
            We&apos;ll help you scope the right project for your home and budget.
            Start with a free estimation conversation.
          </p>
          <Link
            href="/contact#estimation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory font-body font-500 text-sm tracking-wide rounded-sm hover:bg-walnut transition-colors duration-300"
          >
            Get Free Estimation
            <ArrowRight size={15} strokeWidth={2} />
          </Link>
        </div>
      </section>
    </>
  );
}
