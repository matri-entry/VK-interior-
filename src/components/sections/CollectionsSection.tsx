import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const collections = [
  {
    name: "Signature",
    tagline: "Refined. Considered. Complete.",
    description:
      "A beautifully designed home interior with curated materials, quality execution, and the full VK Interior experience.",
    highlights: [
      "Complete space design",
      "Curated material palette",
      "Standard woodwork",
      "10-Year Warranty on applicable work",
    ],
    note: "Pricing on consultation",
  },
  {
    name: "Luxury",
    tagline: "Elevated in every detail.",
    description:
      "For homeowners who expect the highest standard of materials, finishes, and architectural detail throughout every space.",
    highlights: [
      "Everything in Signature",
      "Premium materials & hardware",
      "Bespoke storage solutions",
      "Enhanced architectural detailing",
      "Smart home integration",
    ],
    note: "Pricing on consultation",
    featured: true,
  },
  {
    name: "Bespoke",
    tagline: "Entirely, uniquely yours.",
    description:
      "A completely custom engagement — for clients who want interiors that are a true extension of their personal vision and taste.",
    highlights: [
      "Everything in Luxury",
      "Full custom design process",
      "Bespoke furniture & joinery",
      "Exclusive material sourcing",
      "White-glove handover",
    ],
    note: "Pricing on consultation",
  },
];

export function CollectionsSection() {
  return (
    <section
      className="section-padding-lg bg-ivory"
      aria-labelledby="collections-heading"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <SectionLabel text="Interior Collections" className="mb-5" />
          <h2
            id="collections-heading"
            className="text-display-sm font-display font-400 text-charcoal mb-5"
          >
            Choose Your Level
            <br />
            <em className="italic font-300">of Craft</em>
          </h2>
          <p className="font-body text-sm text-charcoal/60 leading-relaxed">
            All pricing is consultation-based. Every VK Interior project is
            scoped to your specific home and requirements.
          </p>
        </div>

        {/* Collection cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className={`relative p-8 md:p-10 rounded-sm border transition-all duration-300 ${
                collection.featured
                  ? "bg-charcoal text-ivory border-charcoal"
                  : "bg-plaster text-charcoal border-stone hover:border-stone-dark"
              }`}
            >
              {collection.featured && (
                <div className="absolute -top-3 left-8">
                  <span className="inline-block px-3 py-1 bg-walnut text-ivory font-body text-[10px] font-500 tracking-[0.2em] uppercase rounded-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`font-body text-[10px] font-500 tracking-[0.2em] uppercase mb-6 ${
                  collection.featured ? "text-ivory/40" : "text-charcoal/40"
                }`}
              >
                Collection
              </div>

              <h3 className="font-display text-4xl font-400 mb-2">
                {collection.name}
              </h3>
              <p
                className={`font-body text-xs font-500 tracking-wide mb-5 ${
                  collection.featured ? "text-ivory/60" : "text-walnut"
                }`}
              >
                {collection.tagline}
              </p>
              <p
                className={`font-body text-sm leading-relaxed mb-8 ${
                  collection.featured ? "text-ivory/65" : "text-charcoal/65"
                }`}
              >
                {collection.description}
              </p>

              <ul className="space-y-3 mb-10">
                {collection.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className={`w-1 h-1 rounded-full mt-2 shrink-0 ${
                        collection.featured ? "bg-ivory/50" : "bg-walnut/60"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`font-body text-sm ${
                        collection.featured ? "text-ivory/70" : "text-charcoal/70"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact#estimation"
                className={`inline-flex items-center gap-2 w-full justify-center py-3.5 rounded-sm font-body font-500 text-sm tracking-wide transition-all duration-300 ${
                  collection.featured
                    ? "bg-ivory text-charcoal hover:bg-stone"
                    : "bg-charcoal text-ivory hover:bg-walnut"
                }`}
              >
                Request Consultation
                <ArrowRight size={14} strokeWidth={2} />
              </Link>

              <p
                className={`mt-3 text-center font-body text-[10px] ${
                  collection.featured ? "text-ivory/30" : "text-charcoal/30"
                }`}
              >
                {collection.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
