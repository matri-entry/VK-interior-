import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { publishedProjects } from "@/data/projects";
import { siteMeta } from "@/data/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return publishedProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = publishedProjects.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.brief || `${project.title} — ${project.categoryLabel} by VK Interior, Bengaluru`,
    alternates: {
      canonical: `${siteMeta.siteUrl}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = publishedProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  const projectIndex = publishedProjects.findIndex((p) => p.slug === slug);
  const nextProject = publishedProjects[projectIndex + 1] || publishedProjects[0];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end pb-14 bg-charcoal overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.heroAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,26,26,0.88) 0%, rgba(26,26,26,0.35) 55%, rgba(26,26,26,0.25) 100%)",
          }}
        />

        {/* Asset type badge */}
        {project.assetType !== "photography" && (
          <div className="absolute top-24 left-5 md:left-12 bg-ivory/90 backdrop-blur-sm px-4 py-2 rounded-sm z-10">
            <span className="font-body text-[10px] font-500 tracking-[0.15em] uppercase text-charcoal/60">
              {project.assetType === "render" ? "Design Visualisation" : "Site Progress — Under Execution"}
            </span>
          </div>
        )}

        <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-8 lg:px-12 w-full">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-ivory/60 hover:text-ivory text-sm font-body mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft
              size={14}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            All Projects
          </Link>
          <SectionLabel text={project.categoryLabel} light className="mb-5" />
          <h1 className="text-display-md font-display font-400 text-ivory max-w-3xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Disclaimer for non-photography */}
      {project.renderNote && (
        <div className="bg-stone/60 border-y border-stone px-5 md:px-12 py-4">
          <div className="max-w-8xl mx-auto">
            <p className="font-body text-xs text-charcoal/60 italic">
              <strong className="font-500 not-italic">Note:</strong> {project.renderNote}
            </p>
          </div>
        </div>
      )}

      {/* Project info + story */}
      <section className="section-padding bg-ivory">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Story */}
            <div className="lg:col-span-7">
              <SectionLabel text="Design Story" className="mb-6" />
              {project.brief ? (
                <p className="font-body text-base text-charcoal/70 leading-relaxed">
                  {project.brief}
                </p>
              ) : (
                <p className="font-body text-base text-charcoal/40 italic">
                  Project description coming soon.
                </p>
              )}
            </div>

            {/* Meta */}
            <div className="lg:col-span-5">
              <div className="bg-stone/40 rounded-sm p-7">
                <dl className="space-y-5">
                  <div>
                    <dt className="font-body text-[10px] font-500 tracking-[0.2em] uppercase text-charcoal/40 mb-1">
                      Category
                    </dt>
                    <dd className="font-body text-sm text-charcoal">
                      {project.categoryLabel}
                    </dd>
                  </div>
                  {project.location && (
                    <div>
                      <dt className="font-body text-[10px] font-500 tracking-[0.2em] uppercase text-charcoal/40 mb-1">
                        Location
                      </dt>
                      <dd className="font-body text-sm text-charcoal">
                        {project.location}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="font-body text-[10px] font-500 tracking-[0.2em] uppercase text-charcoal/40 mb-1">
                      Asset Type
                    </dt>
                    <dd className="font-body text-sm text-charcoal capitalize">
                      {project.assetType === "photography"
                        ? "Completed Project Photography"
                        : project.assetType === "render"
                        ? "Design Visualisation / Concept"
                        : "Site Progress — Under Execution"}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 pt-6 border-t border-stone space-y-3">
                  <Link
                    href="/contact#estimation"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-charcoal text-ivory font-body font-500 text-sm tracking-wide rounded-sm hover:bg-walnut transition-colors duration-300"
                  >
                    Discuss a Similar Project
                    <ArrowRight size={14} strokeWidth={2} />
                  </Link>
                  <WhatsAppButton
                    message={`Hi VK Interior, I saw your "${project.title}" project and would like to discuss something similar for my home.`}
                    label="Ask About This Project"
                    variant="full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      {project.images.length > 0 && (
        <section className="section-padding bg-plaster">
          <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
            <SectionLabel text="Gallery" className="mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-sm ${
                    i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center"
                    sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                  />
                  {img.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-charcoal/60">
                      <p className="font-body text-xs text-ivory/80">{img.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next project */}
      {nextProject && nextProject.slug !== project.slug && (
        <section className="section-padding bg-ivory border-t border-stone">
          <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/40 mb-6">
              Next Project
            </p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-between gap-6 hover:text-walnut transition-colors duration-200"
            >
              <div>
                <p className="font-body text-xs tracking-wide uppercase text-charcoal/40 mb-1">
                  {nextProject.categoryLabel}
                </p>
                <h2 className="text-display-sm font-display font-400 text-charcoal group-hover:text-walnut transition-colors duration-200">
                  {nextProject.title}
                </h2>
              </div>
              <ArrowRight
                size={24}
                strokeWidth={1.5}
                className="shrink-0 text-charcoal/40 group-hover:text-walnut transition-all duration-200 group-hover:translate-x-2"
              />
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
