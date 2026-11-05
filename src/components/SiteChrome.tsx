"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SmoothScroll } from "./SmoothScroll";
import { Cursor } from "./Cursor";

/** The site's header, footer, cursor and smooth scroll, left off the dashboard (/keystatic). */
export function SiteChrome({ header, footer, children }: { header: ReactNode; footer: ReactNode; children: ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/keystatic")) return <>{children}</>;
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SmoothScroll />
      <Cursor />
      {header}
      <main id="main">{children}</main>
      {footer}
    </>
  );
}
