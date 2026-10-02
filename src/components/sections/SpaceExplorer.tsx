import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { allServices } from "@/data/services";

export function SpaceExplorer() {
  return (
    <section
      className="section-padding-lg bg-plaster"
      aria-labelledby="spaces-heading"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <SectionLabel text="Our Spaces" className="mb-5" />
            <h2
              id="spaces-heading"
              className="text-display-sm font-display font-400 text-charcoal"
            >
              Explore Your Space
            </h2>
          </div>
          <Link
            href="/spaces"
            className="inline-flex items-center gap-2 font-body text-sm font-500 text-charcoal hover:text-walnut transition-colors duration-200 group shrink-0"
          >
            View All Services
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {allServices.map((service, i) => (
            <Link
              key={service.slug}
              href={`/spaces/${service.slug}`}
              className="group block relative overflow-hidden rounded-sm bg-stone aspect-[3/4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut focus-visible:ring-offset-2"
              aria-label={`Explore ${service.title}`}
            >
              {/* Background image or placeholder */}
              {service.heroImage ? (
                <Image
                  src={service.heroImage}
                  alt={service.heroAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              ) : (
                <div className="absolute inset-0 img-placeholder" aria-hidden="true">
                  {/* Warm gradient placeholder */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, 
                        hsl(${30 + i * 8}, 20%, ${85 - i * 2}%) 0%, 
                        hsl(${20 + i * 6}, 15%, ${90 - i * 2}%) 100%
                      )`,
                    }}
                  />
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl opacity-30" aria-hidden="true">
                      {service.icon}
                    </span>
                  </div>
                </div>
              )}

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26,26,26,0.8) 0%, rgba(26,26,26,0.2) 50%, transparent 100%)",
                }}
              />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="font-body text-[11px] md:text-xs font-500 tracking-wide text-ivory/90 uppercase leading-tight">
                  {service.shortTitle}
                </p>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-ivory/0 group-hover:bg-ivory/20 transition-all duration-300 flex items-center justify-center">
                <ArrowRight
                  size={12}
                  strokeWidth={2}
                  className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
