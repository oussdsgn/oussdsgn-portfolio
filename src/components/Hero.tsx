"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { site } from "@/data/site";

export function Hero() {
  const media = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  // Image slowly zooms and content drifts up as you scroll away.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const h = window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / h));
      if (media.current) media.current.style.transform = `translate3d(0, ${p * 18}vh, 0) scale(${1 + p * 0.12})`;
      if (content.current) {
        content.current.style.transform = `translate3d(0, ${p * -10}vh, 0)`;
        content.current.style.opacity = String(1 - p * 1.2);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" data-header-dark aria-labelledby="hero-title">
      <div ref={media} className="hero__media">
        <Image className="hero__img" src={site.images.hero} alt="" fill priority placeholder="blur" sizes="(max-aspect-ratio: 16/9) 178vh, 100vw" quality={90} />
      </div>
      <div ref={content} className="hero__inner container">
        <p className="hero__services">
          <span className="line"><span>Brand Design</span></span>
          <span className="line"><span>Packaging &amp; Print</span></span>
          <span className="line"><span>Graphic Design</span></span>
        </p>
        <p className="hero__tagline">
          <span className="line"><span>Multidisciplinary by nature.</span></span>
          <span className="line"><span>Obsessive about detail.</span></span>
        </p>
        <h1 id="hero-title" className="hero__title">
          <span className="line"><span>Senior Graphic</span></span>
          <span className="line"><span>Designer</span></span>
        </h1>
        <div className="hero__scroll" aria-hidden="true"><span>Scroll</span><i /></div>
      </div>
    </section>
  );
}
