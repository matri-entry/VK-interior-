import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { publishedProjects } from "@/data/projects";
import { siteMeta } from "@/data/seo";

export const metadata: Metadata = {
  title: "Interior Design Projects",
  description:
    "Explore VK Interior's completed residential interior design projects in Bengaluru — bespoke entrance doors, custom furniture, wardrobes, staircases, and more.",
  alternates: {
    canonical: `${siteMeta.siteUrl}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 bg-plaster border-b border-stone">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <SectionLabel text="Our Portfolio" className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h1 className="text-display-lg font-display font-400 text-charcoal">
              Selected
              <br />
              <em className="italic font-300">Projects.</em>
            </h1>
            <div>
              <p className="font-body text-base text-charcoal/65 leading-relaxed mb-4 max-w-lg">
                A curated view of completed VK Interior work — showing the range
                of craft, material and design thinking we bring to every project.
              </p>
              <p className="font-body text-xs text-charcoal/40 italic">
                * Design visualisations and site-progress images are labelled accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects grid — editorial layout */}
      <section className="section-padding-lg bg-plaster">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          {publishedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
              {publishedProjects.map((project, i) => {
                // Alternate large/small positions for editorial feel
                const isLarge = i % 3 === 0;
                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className={`group block relative overflow-hidden rounded-sm bg-stone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut ${
                      isLarge ? "md:col-span-8" : "md:col-span-4"
                    }`}
                    style={{ minHeight: isLarge ? "500px" : "360px" }}
                    aria-label={`View project: ${project.title}`}
                  >
                    <Image
                      src={project.heroImage}
                      alt={project.heroAlt}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      sizes={
                        isLarge
                          ? "(max-width: 768px) 100vw, 65vw"
                          : "(max-width: 768px) 100vw, 35vw"
                      }
                    />

                    {/* Asset type badge */}
                    {project.assetType !== "photography" && (
                      <div className="absolute top-4 left-4 bg-ivory/90 backdrop-blur-sm px-3 py-1 rounded-sm">
                        <span className="font-body text-[10px] font-500 tracking-[0.15em] uppercase text-charcoal/60">
                          {project.assetType === "render"
                            ? "Design Concept"
                            : "Site Progress"}
                        </span>
                      </div>
                    )}

                    {/* Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(26,26,26,0.8) 0%, rgba(26,26,26,0.1) 55%, transparent 100%)",
                      }}
                    />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <p className="font-body text-[10px] font-500 tracking-[0.2em] uppercase text-ivory/55 mb-2">
                        {project.categoryLabel}
                      </p>
                      <h2 className="font-display text-2xl md:text-3xl font-400 text-ivory leading-tight mb-3">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-2 text-ivory/50 group-hover:text-ivory/80 transition-colors duration-200">
                        <span className="font-body text-xs">View Project</span>
                        <ArrowRight
                          size={12}
                          strokeWidth={2}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}

              {/* Coming soon placeholder cards */}
              {[1, 2].map((i) => (
                <div
                  key={`placeholder-${i}`}
                  className="md:col-span-6 rounded-sm img-placeholder relative overflow-hidden"
                  style={{ minHeight: "360px" }}
                  aria-label="Future project — coming soon"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-10 h-10 border border-charcoal/20 rounded-full flex items-center justify-center mb-4">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-charcoal/25">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21,15 16,10 5,21" />
                      </svg>
                    </div>
                    <p className="font-display text-xl font-400 italic text-charcoal/25">
                      More projects coming soon
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="font-display text-2xl font-400 italic text-charcoal/40">
                Project portfolio launching soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ivory border-t border-stone">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 text-center">
          <h2 className="text-display-sm font-display font-400 text-charcoal mb-4">
            Interested in a project for your home?
          </h2>
          <p className="font-body text-sm text-charcoal/60 mb-8 max-w-md mx-auto leading-relaxed">
            Start with a free design consultation and estimation. We&apos;ll discuss
            your space, your vision, and what&apos;s possible.
          </p>
          <Link
            href="/contact#estimation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory font-body font-500 text-sm tracking-wide rounded-sm hover:bg-walnut transition-colors duration-300"
          >
            Get Free Estimation
            <ArrowRight size={15} strokeWidth={2} />
          </Link>
        </div>
      </section>
    </>
  );
}
