import { SectionLabel } from "@/components/ui/SectionLabel";

export function PhilosophySection() {
  return (
    <section
      className="section-padding-lg bg-plaster"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Label */}
          <div className="lg:col-span-3 lg:pt-2">
            <SectionLabel text="Design Philosophy" />
          </div>

          {/* Right: Large editorial text */}
          <div className="lg:col-span-9">
            <blockquote>
              <p className="text-display-md font-display font-400 text-charcoal leading-[1.15] mb-8 max-w-4xl">
                We believe every home deserves interiors that are as{" "}
                <em className="italic font-300">personal</em> as the lives
                lived within them.
              </p>
            </blockquote>
            <div className="max-w-2xl space-y-5">
              <p className="font-body text-base text-charcoal/65 leading-relaxed">
                At VK Interior, we don&apos;t work from templates. Every project
                begins with understanding your life — your routines, your
                tastes, your aspirations — and translating them into spaces
                that feel entirely, unmistakably yours.
              </p>
              <p className="font-body text-base text-charcoal/65 leading-relaxed">
                From the initial conversation to the final handover, we take
                complete ownership of your interior — handling design,
                material selection, execution, and quality at every stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
