"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { archive, projects, webProjects, workCategories } from "@/data/site";
import { ArchivePieces } from "./Archive";
import { Reveal } from "./Reveal";

const ALL = "All";

/** Works page: one filter for case studies and extra pieces of the same discipline. */
export function WorkExplorer() {
  const [active, setActive] = useState(ALL);

  // remember the category in the URL (?c=Packaging) so it can be shared
  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get("c");
    if (c && workCategories.some((k) => k.label === c)) setActive(c);
  }, []);
  const choose = (label: string) => {
    setActive(label);
    const url = new URL(window.location.href);
    if (label === ALL) url.searchParams.delete("c");
    else url.searchParams.set("c", label);
    window.history.replaceState(null, "", url);
  };

  const cat = workCategories.find((k) => k.label === active);
  const shown = cat ? projects.filter((p) => p.tags.some((t) => cat.tags.includes(t))) : projects;
  const group = cat ? archive.find((g) => g.title === cat.archive) : undefined;
  const pieces = (g?: (typeof archive)[number]) => (g ? (g.kind === "web" ? webProjects.length : g.mocks?.length ?? g.items.length) : 0);
  const count = (k: (typeof workCategories)[number]) =>
    projects.filter((p) => p.tags.some((t) => k.tags.includes(t))).length + pieces(archive.find((g) => g.title === k.archive));

  return (
    <>
      <div className="filters" role="group" aria-label="Filter work">
        <button className="filter" aria-pressed={active === ALL} onClick={() => choose(ALL)}>
          All projects<sup>{projects.length}</sup>
        </button>
        {workCategories.map((k) => (
          <button key={k.label} className="filter" aria-pressed={active === k.label} onClick={() => choose(k.label)}>
            {k.label}<sup>{count(k)}</sup>
          </button>
        ))}
      </div>

      {shown.length > 0 && (
        <div className="grid-2">
          {shown.map((p, i) => (
            <Reveal key={`${active}-${p.slug}`} variant="scale" delay={(i % 2) * 90} className="work">
              <Link className="work__hit" href={`/projects/${p.slug}`} data-cursor="View">
                <div className="work__media">
                  <Image src={p.image} alt="" placeholder="blur" sizes="(max-width: 760px) 100vw, 50vw" />
                </div>
                <div className="work__meta">
                  <h3 className="work__title">{p.title}</h3>
                  <span className="work__tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}

      {group && (
        <section className="more" key={active} aria-labelledby="more-title">
          <div className="more__head">
            <h2 id="more-title" className="more__title">{shown.length ? `More ${cat!.label}` : cat!.label}</h2>
            <p className="more__note">Click any piece to see it full-size.</p>
          </div>
          <ArchivePieces group={group} />
        </section>
      )}
    </>
  );
}
