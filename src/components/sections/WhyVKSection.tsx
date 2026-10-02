import { SectionLabel } from "@/components/ui/SectionLabel";

const reasons = [
  {
    number: "01",
    title: "Design & Execution — One Team",
    description:
      "We handle both design and execution. No gaps, no miscommunication between agencies. One team, one standard of quality, start to finish.",
  },
  {
    number: "02",
    title: "Truly Bespoke Approach",
    description:
      "Every VK Interior project is designed specifically for your home and your life. We don't adapt templates — we design from understanding.",
  },
  {
    number: "03",
    title: "10-Year Warranty",
    description:
      "We stand behind our work with a 10-Year Warranty on applicable work — because quality built right lasts.",
  },
  {
    number: "04",
    title: "Smart Home Ready",
    description:
      "Smart doors, digital locks, and home automation are integrated at the design stage — not added as an afterthought.",
  },
  {
    number: "05",
    title: "Transparent Process",
    description:
      "From the first consultation to handover, you are informed at every stage. No surprises — only clarity.",
  },
  {
    number: "06",
    title: "Bengaluru Specialists",
    description:
      "Based in J.P. Nagar, we understand Bengaluru homes — the architecture, the climate, the lifestyle, and the requirements of the city's homeowners.",
  },
];

export function WhyVKSection() {
  return (
    <section
      className="section-padding-lg bg-plaster"
      aria-labelledby="why-vk-heading"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <SectionLabel text="Why VK Interior" className="mb-5" />
            <h2
              id="why-vk-heading"
              className="text-display-md font-display font-400 text-charcoal"
            >
              What Makes Us
              <br />
              <em className="italic font-300">Different</em>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <p className="font-body text-base text-charcoal/65 leading-relaxed max-w-xl">
              VK Interior is a residential interior design and execution company
              built around a single principle: your home should feel like it was
              designed only for you. Here is how we make that happen.
            </p>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {reasons.map((reason) => (
            <div key={reason.number} className="flex gap-5">
              <div
                className="font-body text-[10px] font-500 tabular-nums text-charcoal/25 mt-1 shrink-0 tracking-wider"
                aria-hidden="true"
              >
                {reason.number}
              </div>
              <div>
                <h3 className="font-body text-sm font-600 text-charcoal mb-2 tracking-wide">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
