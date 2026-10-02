import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  const [first, second, ...rest] = featuredProjects;

  return (
    <section
      className="section-padding-lg bg-stone/40"
      aria-labelledby="featured-projects-heading"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <SectionLabel text="Our Work" className="mb-5" />
            <h2
              id="featured-projects-heading"
              className="text-display-sm font-display font-400 text-charcoal"
            >
              Selected Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-body text-sm font-500 text-charcoal hover:text-walnut transition-colors duration-200 group shrink-0"
          >
            View All Projects
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Asymmetric editorial grid */}
        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Large featured card */}
            {first && (
              <Link
                href={`/projects/${first.slug}`}
                className="md:col-span-7 group block relative overflow-hidden rounded-sm bg-stone aspect-[4/3] md:aspect-auto md:h-[560px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut"
                aria-label={`View project: ${first.title}`}
              >
                <Image
                  src={first.heroImage}
                  alt={first.heroAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                {first.assetType === "render" && (
                  <div className="absolute top-4 left-4 bg-ivory/90 backdrop-blur-sm px-3 py-1 rounded-sm">
                    <span className="font-body text-[10px] font-500 tracking-[0.15em] uppercase text-charcoal/60">
                      Design Concept
                    </span>
                  </div>
                )}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.1) 55%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="font-body text-[10px] font-500 tracking-[0.2em] uppercase text-ivory/60 mb-2">
                    {first.categoryLabel}
                  </p>
                  <h3 className="text-display-sm font-display font-400 text-ivory leading-tight mb-3">
                    {first.title}
                  </h3>
                  <div className="flex items-center gap-2 text-ivory/60 group-hover:text-ivory/90 transition-colors duration-200">
                    <span className="font-body text-xs">View Project</span>
                    <ArrowRight size={12} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )}

            {/* Right column — two stacked */}
            <div className="md:col-span-5 flex flex-col gap-4 md:gap-5">
              {[second, ...(rest || [])].filter(Boolean).slice(0, 2).map((project) => (
                project && (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group block relative overflow-hidden rounded-sm bg-stone flex-1 aspect-[4/3] md:aspect-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut"
                    aria-label={`View project: ${project.title}`}
                    style={{ minHeight: "260px" }}
                  >
                    <Image
                      src={project.heroImage}
                      alt={project.heroAlt}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    {project.assetType !== "photography" && (
                      <div className="absolute top-3 left-3 bg-ivory/90 backdrop-blur-sm px-2.5 py-1 rounded-sm">
                        <span className="font-body text-[9px] font-500 tracking-[0.15em] uppercase text-charcoal/60">
                          {project.assetType === "render" ? "Design Concept" : "Site Progress"}
                        </span>
                      </div>
                    )}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.1) 60%, transparent 100%)",
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <p className="font-body text-[9px] font-500 tracking-[0.2em] uppercase text-ivory/60 mb-1.5">
                        {project.categoryLabel}
                      </p>
                      <h3 className="font-display text-xl font-400 text-ivory leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-charcoal/40 font-display text-xl italic">
            Project portfolio coming soon.
          </div>
        )}
      </div>
    </section>
  );
}
