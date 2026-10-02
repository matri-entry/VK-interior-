import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteMeta } from "@/data/seo";

export const metadata: Metadata = {
  title: "About VK Interior — Bengaluru's Interior Design Specialists",
  description:
    "Learn about VK Interior — a premium residential interior design and execution company based in JP Nagar, Bengaluru. We design and execute complete homes, kitchens, bedrooms, and bespoke furniture.",
  alternates: {
    canonical: `${siteMeta.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 bg-ivory border-b border-stone">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <SectionLabel text="About Us" className="mb-6" />
          <h1 className="text-display-lg font-display font-400 text-charcoal max-w-2xl">
            Interiors That
            <br />
            <em className="italic font-300">Belong to You.</em>
          </h1>
        </div>
      </section>

      {/* Brand story */}
      <section className="section-padding-lg bg-plaster">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-stone">
                <Image
                  src="/images/projects/display-cabinet-living.jpg"
                  alt="Custom teak display cabinet — completed VK Interior project"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-7 lg:pt-4">
              <SectionLabel text="Who We Are" className="mb-6" />
              <div className="space-y-6">
                <p className="text-display-sm font-display font-400 text-charcoal leading-[1.2]">
                  VK Interior is a residential interior design and execution
                  company based in J.P. Nagar, Bengaluru.
                </p>
                <p className="font-body text-base text-charcoal/65 leading-relaxed">
                  We work with homeowners across Bengaluru to create complete
                  interior environments that are designed around their specific
                  lives, aesthetics, and aspirations — not adapted from a
                  catalogue or a template.
                </p>
                <p className="font-body text-base text-charcoal/65 leading-relaxed">
                  From the first consultation through material selection, site
                  execution, and final handover, we take complete responsibility
                  for your interior — delivering both the design thinking and the
                  craft to realise it.
                </p>
                <p className="font-body text-base text-charcoal/65 leading-relaxed">
                  We cover complete home interiors, modular and custom kitchens,
                  living rooms, bedrooms, wardrobes, pooja spaces, bespoke
                  furniture, architectural details — and smart home integration.
                  Every project carries a 10-Year Warranty on applicable work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-ivory">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <SectionLabel text="What We Believe" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Personal above generic.",
                description:
                  "Every home is different because every life is different. We start from understanding before we start designing.",
              },
              {
                title: "Craft over convenience.",
                description:
                  "We do not cut corners. The quality of execution is as important as the quality of the design.",
              },
              {
                title: "Transparency in everything.",
                description:
                  "Clear communication, honest timelines, and no surprises. You should always know exactly where your project stands.",
              },
            ].map((value) => (
              <div key={value.title}>
                <h2 className="font-display text-2xl md:text-3xl font-400 text-charcoal mb-4 italic">
                  {value.title}
                </h2>
                <p className="font-body text-sm text-charcoal/65 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip with architectural render */}
      <section className="section-padding bg-stone/40">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/projects/entrance-door-hero.jpg"
                alt="Bespoke arched entrance door crafted by VK Interior"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/projects/staircase-concept.png"
                alt="Architectural staircase design concept by VK Interior"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Render label */}
              <div className="absolute bottom-4 left-4 bg-ivory/90 backdrop-blur-sm px-3 py-1 rounded-sm">
                <span className="font-body text-[10px] font-500 tracking-[0.15em] uppercase text-charcoal/60">
                  Design Concept
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location + CTA */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel text="Where We Are" light className="mb-5" />
              <h2 className="text-display-sm font-display font-400 text-ivory mb-5">
                J.P. Nagar, Bengaluru
              </h2>
              <address className="not-italic font-body text-sm text-ivory/65 leading-relaxed mb-8">
                {siteMeta.contact.address.line1},<br />
                {siteMeta.contact.address.line2},<br />
                {siteMeta.contact.address.line3},<br />
                {siteMeta.contact.address.city} — {siteMeta.contact.address.pincode}
              </address>
              <p className="font-body text-sm text-ivory/60 leading-relaxed">
                Serving homeowners across Bengaluru — from Whitefield and Indiranagar
                to Jayanagar, Koramangala, Electronic City, and beyond.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-display-sm font-display font-400 text-ivory mb-5">
                Ready to discuss your home?
              </h2>
              <p className="font-body text-sm text-ivory/65 leading-relaxed mb-8">
                Every great interior begins with a conversation. Start with a
                free estimation — no commitment required.
              </p>
              <Link
                href="/contact#estimation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-walnut text-ivory font-body font-500 text-sm tracking-wide rounded-sm hover:bg-walnut-light transition-colors duration-300"
              >
                Get Free Estimation
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
