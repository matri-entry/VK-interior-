import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { EstimationForm } from "@/components/forms/EstimationForm";
import { siteMeta, callUrl, emailUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Contact & Free Estimation",
  description:
    "Contact VK Interior in Bengaluru for a free interior design estimation. Call, WhatsApp, or fill out our estimation form to discuss your home interior project.",
  alternates: {
    canonical: `${siteMeta.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  const { contact } = siteMeta;

  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 bg-ivory border-b border-stone">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <SectionLabel text="Contact Us" className="mb-6" />
          <h1 className="text-display-lg font-display font-400 text-charcoal max-w-2xl">
            Let&apos;s Talk About
            <br />
            <em className="italic font-300">Your Home.</em>
          </h1>
        </div>
      </section>

      {/* Contact + Form grid */}
      <section id="estimation" className="section-padding-lg bg-plaster">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left: contact info */}
            <div className="lg:col-span-4">
              <SectionLabel text="Get in Touch" className="mb-8" />

              {/* Quick actions */}
              <div className="space-y-4 mb-10">
                <a
                  href={callUrl}
                  className="flex items-center gap-4 p-4 bg-ivory border border-stone rounded-sm hover:border-stone-dark transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-full bg-stone flex items-center justify-center shrink-0 group-hover:bg-walnut/10 transition-colors">
                    <Phone size={16} strokeWidth={1.5} className="text-charcoal" />
                  </div>
                  <div>
                    <div className="font-body text-[10px] font-500 tracking-[0.15em] uppercase text-charcoal/40 mb-0.5">
                      Call Us
                    </div>
                    <div className="font-body text-sm font-500 text-charcoal">
                      {contact.phoneDisplay}
                    </div>
                  </div>
                </a>

                <WhatsAppButton
                  label="Chat on WhatsApp"
                  variant="full"
                  className="py-4 rounded-sm"
                />

                <a
                  href={emailUrl}
                  className="flex items-center gap-4 p-4 bg-ivory border border-stone rounded-sm hover:border-stone-dark transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-full bg-stone flex items-center justify-center shrink-0 group-hover:bg-walnut/10 transition-colors">
                    <Mail size={16} strokeWidth={1.5} className="text-charcoal" />
                  </div>
                  <div>
                    <div className="font-body text-[10px] font-500 tracking-[0.15em] uppercase text-charcoal/40 mb-0.5">
                      Email
                    </div>
                    <div className="font-body text-sm font-500 text-charcoal">
                      {contact.email}
                    </div>
                  </div>
                </a>
              </div>

              {/* Address */}
              <div className="pt-8 border-t border-stone">
                <div className="font-body text-[10px] font-500 tracking-[0.2em] uppercase text-charcoal/40 mb-4">
                  Our Address
                </div>
                <div className="flex gap-3">
                  <MapPin
                    size={15}
                    strokeWidth={1.5}
                    className="shrink-0 mt-0.5 text-walnut"
                    aria-hidden="true"
                  />
                  <address className="not-italic font-body text-sm text-charcoal/70 leading-relaxed">
                    {contact.address.line1},<br />
                    {contact.address.line2},<br />
                    {contact.address.line3},<br />
                    <span className="text-charcoal">{contact.address.city}</span> — {contact.address.pincode}
                  </address>
                </div>
              </div>

              {/* Working hours */}
              <div className="mt-6 pt-6 border-t border-stone">
                <div className="font-body text-[10px] font-500 tracking-[0.2em] uppercase text-charcoal/40 mb-3">
                  Availability
                </div>
                <p className="font-body text-sm text-charcoal/65 leading-relaxed">
                  Monday – Saturday<br />
                  9:00 AM – 7:00 PM IST
                </p>
              </div>
            </div>

            {/* Right: estimation form */}
            <div className="lg:col-span-8">
              <div className="bg-ivory rounded-sm border border-stone p-7 md:p-10">
                <div className="mb-8">
                  <SectionLabel text="Free Estimation" className="mb-3" />
                  <h2 className="text-display-sm font-display font-400 text-charcoal mb-2">
                    Tell Us About Your Home
                  </h2>
                  <p className="font-body text-sm text-charcoal/55 leading-relaxed">
                    Fill in the form and we&apos;ll reach out to schedule your free
                    design consultation. No commitment, no pressure.
                  </p>
                </div>
                <EstimationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
