"use client";

import Image from "next/image";
import { useCallback, useMemo, useState, type CSSProperties } from "react";
import type { ProjectBlock } from "@/data/site";
import { Lightbox, type LightboxItem } from "./Lightbox";
import { Reveal } from "./Reveal";
import { Copy, isTodo, Slot } from "./Placeholder";
import { showDrafts } from "@/data/env";

const SIZES = { 1: "(max-width: 760px) 100vw, 1440px", 2: "(max-width: 760px) 100vw, 50vw", 3: "(max-width: 760px) 100vw, 33vw", 4: "(max-width: 760px) 50vw, 25vw" };

/** Renders a case study's blocks; every image opens full-size in a lightbox. */
export function CaseStudyBlocks({ blocks, title }: { blocks: ProjectBlock[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);

  const items: LightboxItem[] = useMemo(
    () => blocks.flatMap((b) => (b.type === "gallery" ? b.images.map((im) => ({ image: im.image, title, caption: im.alt })) : [])),
    [blocks, title]
  );
  const nav = useCallback((dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)), [items.length]);

  let n = 0;
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === "text")
          return (
            <section key={i} className="cs-row cs-text">
              <Reveal as="h2" className="cs-label">{b.title}</Reveal>
              <Reveal className="cs-copy" delay={80}>
                {b.paragraphs.map((p) => <Copy key={p} text={p} />)}
              </Reveal>
            </section>
          );
        if (b.type === "placeholder")
          return !showDrafts ? null : (
            <div key={i} className={`cs-gallery cs-gallery--${b.cols}`}>
              {b.labels.map((l, j) => <Slot key={j} label={l} ratio={b.ratio} />)}
            </div>
          );
        if (b.type === "specs") {
          const rows = b.items.filter((it) => showDrafts || !isTodo(it.value));
          if (!rows.length) return null;
          return (
            <section key={i} className="cs-row cs-text">
              <Reveal as="h2" className="cs-label">{b.title}</Reveal>
              <Reveal as="dl" className="cs-specs" delay={80}>
                {rows.map((it) => (
                  <div key={it.label} className="cs-specs__row">
                    <dt>{it.label}</dt>
                    <dd className={isTodo(it.value) ? "is-todo" : undefined}>{it.value}</dd>
                  </div>
                ))}
              </Reveal>
            </section>
          );
        }
        if (b.type === "compare")
          return (
            <div key={i} className="cs-compare">
              {b.pairs.map((pair, j) => (
                <Reveal key={j} className="cs-compare__pair" delay={(j % 2) * 90}>
                  {(["before", "after"] as const).map((side) => {
                    const shot = pair[side];
                    return (
                      <figure key={side} className="cs-compare__side">
                        {shot ? (
                          <Image src={shot.image} alt={shot.alt} placeholder="blur" sizes="(max-width: 760px) 50vw, 25vw" quality={90} />
                        ) : (
                          <Slot label={side === "before" ? "Original thumbnail" : "My redesign"} ratio="16 / 9" />
                        )}
                        <figcaption>{side === "before" ? "Original" : "Redesign"}</figcaption>
                      </figure>
                    );
                  })}
                  <p className={`cs-compare__label ${isTodo(pair.label) ? "is-todo" : ""}`}>{pair.label}</p>
                </Reveal>
              ))}
            </div>
          );
        if (b.type === "video")
          return (
            <Reveal key={i} className="cs-video">
              {b.src ? (
                <video src={b.src} poster={b.poster?.src} autoPlay muted loop playsInline preload="metadata" aria-label={b.title} />
              ) : (
                <Slot label={`${b.title} — video file (MP4) and poster image`} ratio="16 / 9" />
              )}
            </Reveal>
          );
        return (
          <div
            key={i}
            className={`cs-gallery cs-gallery--${b.cols} ${b.ratio ? "is-cropped" : ""}`}
            style={b.ratio ? ({ "--ratio": b.ratio } as CSSProperties) : undefined}
          >
            {b.images.map((im, j) => {
              const idx = n++;
              return (
                <Reveal key={j} delay={j * 90}>
                  <button className="cs-media" data-cursor="Zoom" onClick={() => setOpen(idx)} aria-label={`Enlarge: ${im.alt}`}>
                    <Image src={im.image} alt={im.alt} placeholder="blur" sizes={SIZES[b.cols]} quality={85} />
                  </button>
                </Reveal>
              );
            })}
          </div>
        );
      })}
      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onNav={nav} />
    </>
  );
}
