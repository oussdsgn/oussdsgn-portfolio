import Link from "next/link";
import { footerLinks, site } from "@/data/site";
import { LogoMark } from "./Logo";
import { BackToTop } from "./BackToTop";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <Link className="footer__logo" href="/" aria-label={`${site.name}, home`}>
          <LogoMark />
        </Link>
        <ul className="footer__links">
          {footerLinks.map((l) => (
            <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
          ))}
        </ul>
        <a className="footer__email" href={`mailto:${site.email}`}>{site.email}</a>
        <p className="footer__copy">© {site.year} {site.name}</p>
        <ul className="footer__social">
          {site.socials.map((s) => (
            <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
          ))}
        </ul>
        <BackToTop />
      </div>
    </footer>
  );
}
