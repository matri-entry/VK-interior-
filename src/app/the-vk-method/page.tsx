import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { vkMethodSteps } from "@/data/process";
import { siteMeta } from "@/data/seo";

export const metadata: Metadata = {
  title: "The VK Method — Our Design Process",
  description:
    "Discover The VK Method — VK Interior's proven 5-stage process from Discovery through Design Concept, Material Curation, Execution to Handover. End-to-end interior design for Bengaluru homes.",
  alternates: {
    canonical: `${siteMeta.siteUrl}/the-vk-method`,
  },
};

export default function VKMethodPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-charcoal relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/projects/staircase-concept.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(26,26,26,0.7) 0%, rgba(26,26,26,0.95) 100%)" }}
        />

        <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <SectionLabel text="Our Process" light className="mb-6" />
          <h1 className="text-display-lg font-display font-400 text-ivory mb-6 max-w-3xl">
            The VK Method
          </h1>
          <p className="font-body text-base text-ivory/65 max-w-2xl leading-relaxed">
            From the first conversation to the final handover, every VK Interior
            project follows a structured, transparent five-stage process.
            No guesswork. No surprises. Just exceptional interiors — delivered.
          </p>
        </div>
      </section>

      {/* Process steps — full detail */}
      <section className="section-padding-lg bg-plaster" aria-label="The VK Method process steps">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="space-y-0 divide-y divide-stone">
            {vkMethodSteps.map((step) => (
              <div
                key={step.number}
                className="py-14 md:py-18 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 group"
              >
                {/* Number + title */}
                <div className="lg:col-span-4">
                  <div className="font-body text-[10px] font-500 tracking-[0.25em] uppercase text-charcoal/30 mb-5">
                    {step.number}
                  </div>
                  <h2 className="text-display-sm font-display font-400 text-charcoal mb-2">
                    {step.title}
                  </h2>
                  <p className="font-body text-sm text-walnut font-500">
                    {step.subtitle}
                  </p>
                </div>

                {/* Description + detail */}
                <div className="lg:col-span-8 lg:pt-10">
                  <p className="font-body text-base text-charcoal/70 leading-relaxed mb-8 max-w-2xl">
                    {step.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.detail.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div
                          className="w-1 h-1 rounded-full bg-walnut/50 mt-2 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="font-body text-sm text-charcoal/65">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + promise */}
      <section className="section-padding bg-ivory">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-stone">
              <Image
                src="/images/projects/entrance-door-hero.jpg"
                alt="Bespoke arched entrance door — a completed VK Interior project"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Text */}
            <div>
              <SectionLabel text="Our Promise" className="mb-6" />
              <h2 className="text-display-sm font-display font-400 text-charcoal mb-6">
                Complete Ownership.
                <br />
                <em className="italic font-300">End-to-End.</em>
              </h2>
              <p className="font-body text-base text-charcoal/65 leading-relaxed mb-5">
                Unlike many interior firms, VK Interior doesn&apos;t stop at
                design drawings and hand you over to a contractor. We manage
                the entire journey — from concept through execution to handover.
              </p>
              <p className="font-body text-base text-charcoal/65 leading-relaxed mb-8">
                That means one point of accountability, one standard of quality,
                and a 10-Year Warranty on applicable work when we hand your home back.
              </p>
              <Link
                href="/contact#estimation"
                className="inline-flex items-center gap-2 px-7 py-4 bg-charcoal text-ivory font-body font-500 text-sm tracking-wide rounded-sm hover:bg-walnut transition-colors duration-300"
              >
                Start Your Project
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
