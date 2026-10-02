import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CraftsmanshipStrip() {
  return (
    <section
      className="section-padding bg-ivory overflow-hidden"
      aria-labelledby="craftsmanship-heading"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-stone">
              <Image
                src="/images/projects/display-cabinet-living.jpg"
                alt="Custom teak display cabinet with glass doors and brass fittings — bespoke woodwork by VK Interior"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-walnut/10 rounded-sm hidden md:block" aria-hidden="true" />
          </div>

          {/* Text side */}
          <div>
            <SectionLabel text="Craftsmanship" className="mb-6" />
            <h2
              id="craftsmanship-heading"
              className="text-display-md font-display font-400 text-charcoal mb-6"
            >
              From Design
              <br />
              <em className="italic font-300">to Execution.</em>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-body text-base text-charcoal/65 leading-relaxed">
                The gap between a beautiful design and a beautiful home is
                execution. VK Interior bridges both — we design and we build,
                maintaining quality control at every stage of the process.
              </p>
              <p className="font-body text-base text-charcoal/65 leading-relaxed">
                Every piece of carpentry, every detail of finish, every
                hardware choice reflects the same standard of care that
                informed the original design.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { label: "Bespoke Woodwork", desc: "Made to your space, not adapted from stock" },
                { label: "End-to-End", desc: "Design, material, execution — one team" },
                { label: "Quality Supervised", desc: "Regular site inspections through execution" },
                { label: "10-Year Warranty", desc: "On applicable work, post handover" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-body text-xs font-600 text-charcoal tracking-wide mb-1">
                    {item.label}
                  </div>
                  <div className="font-body text-xs text-charcoal/50 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/the-vk-method"
              className="inline-flex items-center gap-2 font-body text-sm font-500 text-charcoal hover:text-walnut transition-colors duration-200 group"
            >
              Discover The VK Method
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
