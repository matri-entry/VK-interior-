import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { allServices } from "@/data/services";
import { siteMeta } from "@/data/seo";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    category: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const service = allServices.find((s) => s.slug === category);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} in Bengaluru`,
    description: `${service.longDescription.slice(0, 155)}...`,
    alternates: {
      canonical: `${siteMeta.siteUrl}/spaces/${service.slug}`,
    },
  };
}

export default async function SpaceCategoryPage({ params }: Props) {
  const { category } = await params;
  const service = allServices.find((s) => s.slug === category);

  if (!service) {
    notFound();
  }

  // Other services for bottom navigation (exclude current)
  const otherServices = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4);

  return (
    <>
      {/* Page hero */}
      <section className="relative pt-20 min-h-[60vh] flex flex-col justify-end pb-14 bg-charcoal overflow-hidden">
        {/* Background */}
        {service.heroImage ? (
          <Image
            src={service.heroImage}
            alt={service.heroAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 100%)",
            }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.4) 60%, rgba(26,26,26,0.3) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-8 lg:px-12 w-full">
          <Link
            href="/spaces"
            className="inline-flex items-center gap-2 text-ivory/60 hover:text-ivory text-sm font-body mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft
              size={14}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            All Spaces
          </Link>
          <SectionLabel text={service.shortTitle} light className="mb-5" />
          <h1 className="text-display-md font-display font-400 text-ivory">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-ivory">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-display-sm font-display font-400 text-charcoal leading-[1.2] mb-8">
                {service.description}
              </p>
              <p className="font-body text-base text-charcoal/65 leading-relaxed">
                {service.longDescription}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-stone/60 rounded-sm p-7 md:p-8">
                <h2 className="font-body text-xs font-600 tracking-[0.2em] uppercase text-charcoal/50 mb-6">
                  What&apos;s Included
                </h2>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className="w-1 h-1 rounded-full bg-walnut/60 mt-2 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-body text-sm text-charcoal/75">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-stone space-y-3">
                  <Link
                    href="/contact#estimation"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-charcoal text-ivory font-body font-500 text-sm tracking-wide rounded-sm hover:bg-walnut transition-colors duration-300"
                  >
                    Get Free Estimation
                    <ArrowRight size={14} strokeWidth={2} />
                  </Link>
                  <WhatsAppButton
                    message={`Hi VK Interior, I'm interested in ${service.title} for my home. Can we discuss?`}
                    label="Discuss on WhatsApp"
                    variant="full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image placeholder for future project images from this category */}
      <section className="section-padding bg-plaster">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-body text-xs font-500 tracking-[0.2em] uppercase text-charcoal/40 mb-8">
            Projects in this Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <ImagePlaceholder
                key={i}
                label={`${service.title} Project`}
                note="Coming soon"
                aspectRatio="aspect-[4/3]"
              />
            ))}
          </div>
          <p className="mt-8 font-body text-sm text-charcoal/40 text-center italic">
            Project photography coming soon. Contact us to discuss completed work in this category.
          </p>
        </div>
      </section>

      {/* Explore other spaces */}
      <section className="section-padding bg-ivory border-t border-stone">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-body text-xs font-500 tracking-[0.2em] uppercase text-charcoal/40 mb-8">
            Explore Other Spaces
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/spaces/${s.slug}`}
                className="group block p-5 bg-stone/40 rounded-sm hover:bg-stone transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut"
              >
                <span className="text-2xl block mb-3" aria-hidden="true">{s.icon}</span>
                <span className="font-body text-sm font-500 text-charcoal group-hover:text-walnut transition-colors duration-200">
                  {s.shortTitle}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
