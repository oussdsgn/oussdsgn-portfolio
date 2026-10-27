"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function Cta() {
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bg.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.parentElement!.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight));
      el.style.transform = `translate3d(0, ${p * -90}px, 0) scale(1.1)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="cta" data-header-dark aria-labelledby="cta-title">
      <div ref={bg} className="cta__bg">
        <Image src={site.images.hero} alt="" fill sizes="(max-aspect-ratio: 16/9) 178vh, 100vw" quality={90} placeholder="blur" style={{ objectFit: "cover", objectPosition: "center 20%" }} />
      </div>
      <Reveal className="cta__inner">
        <h2 id="cta-title" className="cta__title">Let’s make something<br />amazing together.</h2>
        <Link className="btn-outline" href="/contact">Contact</Link>
      </Reveal>
    </section>
  );
}
