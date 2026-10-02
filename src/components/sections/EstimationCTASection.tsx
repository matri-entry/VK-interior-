import Link from "next/link";
import { ArrowRight, MapPin, Phone, MessageCircle } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteMeta, callUrl } from "@/data/seo";

export function EstimationCTASection() {
  return (
    <>
      {/* Full-width estimation CTA */}
      <section
        className="section-padding-lg bg-walnut relative overflow-hidden"
        aria-labelledby="estimation-cta-heading"
      >
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 30px,
              rgba(255,255,255,0.15) 30px,
              rgba(255,255,255,0.15) 31px
            )`,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel text="Ready to Begin" light className="justify-center mb-6" />
            <h2
              id="estimation-cta-heading"
              className="text-display-md font-display font-400 text-ivory mb-6"
            >
              Let&apos;s Talk About
              <br />
              <em className="italic font-300">Your Home.</em>
            </h2>
            <p className="font-body text-base text-ivory/70 mb-10 leading-relaxed">
              Tell us about your home and what you envision. We&apos;ll schedule a free
              consultation and walk you through the possibilities — at no cost, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#estimation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ivory text-charcoal font-body font-500 text-sm tracking-wide rounded-sm hover:bg-stone transition-colors duration-300"
              >
                Get Free Estimation
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
              <WhatsAppButton
                message="Hi VK Interior, I would like to get a free estimation for my home interiors."
                label="WhatsApp Us"
                className="px-8 py-4 rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bengaluru consultation strip */}
      <section
        className="section-padding bg-charcoal"
        aria-labelledby="bengaluru-cta-heading"
      >
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
            {/* Address */}
            <div>
              <SectionLabel text="Our Location" light className="mb-5" />
              <h2
                id="bengaluru-cta-heading"
                className="font-display text-2xl font-400 text-ivory mb-5"
              >
                Based in Bengaluru
              </h2>
              <address className="not-italic space-y-3">
                <div className="flex gap-3">
                  <MapPin size={15} strokeWidth={1.5} className="shrink-0 mt-0.5 text-walnut-light" aria-hidden="true" />
                  <div className="font-body text-sm text-ivory/65 leading-relaxed">
                    <div>{siteMeta.contact.address.line1}</div>
                    <div>{siteMeta.contact.address.line2}</div>
                    <div>{siteMeta.contact.address.line3}</div>
                    <div className="mt-1 text-ivory/45">
                      {siteMeta.contact.address.city} — {siteMeta.contact.address.pincode}
                    </div>
                  </div>
                </div>
              </address>
            </div>

            {/* Contact */}
            <div>
              <SectionLabel text="Get in Touch" light className="mb-5" />
              <div className="space-y-4 mt-0.5">
                <a
                  href={callUrl}
                  className="flex items-center gap-3 font-body text-sm text-ivory/70 hover:text-ivory transition-colors duration-200 group"
                >
                  <Phone size={15} strokeWidth={1.5} className="text-walnut-light group-hover:text-ivory transition-colors" aria-hidden="true" />
                  {siteMeta.contact.phoneDisplay}
                </a>
                <a
                  href={`mailto:${siteMeta.contact.email}`}
                  className="flex items-center gap-3 font-body text-sm text-ivory/70 hover:text-ivory transition-colors duration-200 group"
                >
                  <MessageCircle size={15} strokeWidth={1.5} className="text-walnut-light group-hover:text-ivory transition-colors" aria-hidden="true" />
                  {siteMeta.contact.email}
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="md:col-span-2 lg:col-span-1">
              <SectionLabel text="Free Consultation" light className="mb-5" />
              <p className="font-body text-sm text-ivory/60 leading-relaxed mb-6">
                We serve homeowners across Bengaluru. Schedule your free design
                consultation today.
              </p>
              <Link
                href="/contact#estimation"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-walnut text-ivory font-body font-500 text-sm tracking-wide rounded-sm hover:bg-walnut-light transition-colors duration-300"
              >
                Book Free Consultation
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
