import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { vkMethodSteps } from "@/data/process";

export function VKMethodPreview() {
  return (
    <section
      className="section-padding-lg bg-charcoal"
      aria-labelledby="vk-method-heading"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div>
            <SectionLabel text="Our Process" light className="mb-5" />
            <h2
              id="vk-method-heading"
              className="text-display-sm font-display font-400 text-ivory"
            >
              The VK Method
            </h2>
          </div>
          <Link
            href="/the-vk-method"
            className="inline-flex items-center gap-2 font-body text-sm font-500 text-ivory/60 hover:text-ivory transition-colors duration-200 group shrink-0"
          >
            Explore the Process
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-sm overflow-hidden">
          {vkMethodSteps.map((step, i) => (
            <div
              key={step.number}
              className="bg-charcoal p-6 md:p-8 group hover:bg-charcoal-light transition-colors duration-300"
            >
              <div className="font-body text-[10px] font-500 tracking-[0.2em] text-ivory/30 mb-4 uppercase">
                {step.number}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-400 text-ivory mb-3 group-hover:text-ivory transition-colors duration-200">
                {step.title}
              </h3>
              <p className="font-body text-xs text-ivory/50 leading-relaxed">
                {step.subtitle}
              </p>
              {i < vkMethodSteps.length - 1 && (
                <div className="hidden lg:block mt-6">
                  <div className="h-px bg-white/10" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/the-vk-method"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-ivory/20 text-ivory font-body font-500 text-sm tracking-wide rounded-sm hover:bg-ivory/10 transition-all duration-300"
          >
            See How We Work
            <ArrowRight size={15} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
