"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/data/site";
import { LogoMark } from "./Logo";
import { Clock } from "./Clock";

export function Header() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);
  const [onDark, setOnDark] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  // Transparent + white over [data-header-dark] zones; hide while scrolling down.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const h = ref.current?.offsetHeight ?? 64;
      const zones = document.querySelectorAll("[data-header-dark]");
      setOnDark([...zones].some((z) => {
        const r = z.getBoundingClientRect();
        return r.top <= h / 2 && r.bottom >= h / 2;
      }));
      const y = window.scrollY;
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 240);
        lastY = y;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    // re-check once the new page has painted
    const t = setTimeout(update, 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const cls = ["header", onDark && "is-on-dark", hidden && !open && "is-hidden", open && "is-open"].filter(Boolean).join(" ");

  return (
    <header ref={ref} className={cls}>
      <div className="header__brand">
        <Link className="logo" href="/" aria-label={`${site.name}, home`}>
          <LogoMark className="logo__mark" />
          <span className="logo__word">{site.name}</span>
        </Link>
      </div>

      <nav className="nav" aria-label="Main">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Clock className="clock" />

      <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
        <span />
      </button>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((item, i) => (
            <Link key={item.href} href={item.href} style={{ transitionDelay: `${80 + i * 60}ms` }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ul className="mobile-menu__social">
          {site.socials.map((s) => (
            <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
          ))}
        </ul>
      </div>
    </header>
  );
}
