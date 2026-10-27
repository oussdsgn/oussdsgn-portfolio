import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyBlocks } from "@/components/CaseStudyMedia";
import { Copy, isTodo } from "@/components/Placeholder";
import { showDrafts } from "@/data/env";
import { Reveal } from "@/components/Reveal";
import { Cta } from "@/components/Cta";
import { Arrow } from "@/components/Logo";
import { getProject, projects } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.info?.[0] ?? `${project.title} — ${project.tags.join(", ")}`,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const i = projects.indexOf(project);
  const next = projects[(i + 1) % projects.length];
  const services = project.services ?? project.tags;

  return (
    <>
      <article className="page-top case-study">
        <div className="container">
          <Link className="cs-back" href="/projects"><span aria-hidden="true">←</span> All works</Link>
          {project.draft && (
            <p className="cs-draft" role="note">Draft — placeholder content. This page is hidden on the live site until the real content is added.</p>
          )}
          <h1 className="cs-title"><span className="line"><span>{project.title}</span></span></h1>

          <Reveal className="cs-cover">
            <Image src={project.cover ?? project.image} alt={`${project.title} — cover`} placeholder="blur" priority sizes="(max-width: 760px) 100vw, 1440px" />
          </Reveal>

          <section className="cs-row cs-meta">
            <Reveal className="cs-facts">
              <div>
                <h2 className="cs-label">Services</h2>
                <ul className="cs-list">{services.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
              {project.year && (showDrafts || !isTodo(project.year)) && (
                <div>
                  <h2 className="cs-label">Year</h2>
                  <p className={`cs-list ${isTodo(project.year) ? "is-todo" : ""}`}>{project.year}</p>
                </div>
              )}
              {project.link && (
                <a className="cs-link" href={project.link.href} target="_blank" rel="noopener noreferrer">
                  {project.link.label} <span aria-hidden="true">↗</span>
                </a>
              )}
            </Reveal>
            {project.info && (
              <Reveal className="cs-info" delay={80}>
                <h2 className="cs-label">Info</h2>
                <div className="cs-copy">{project.info.map((p) => <Copy key={p} text={p} />)}</div>
              </Reveal>
            )}
          </section>

          {project.blocks && <CaseStudyBlocks blocks={project.blocks} title={project.title} />}

          <nav className="cs-next" aria-label="Next project">
            <Link href={`/projects/${next.slug}`} data-cursor="Next">
              <span className="cs-next__kicker">Next project</span>
              <span className="cs-next__row">
                <span className="cs-next__title">{next.title}</span>
                <Arrow className="cs-next__arrow" />
              </span>
              <span className="cs-next__media">
                <Image src={next.image} alt="" placeholder="blur" sizes="(max-width: 760px) 100vw, 1440px" />
              </span>
            </Link>
          </nav>
        </div>
      </article>
      <Cta />
    </>
  );
}
