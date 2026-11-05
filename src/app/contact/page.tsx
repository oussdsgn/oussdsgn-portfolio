import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Clock } from "@/components/Clock";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="contact dark" data-header-dark>
      <div className="container contact__inner">
        <div className="contact__aside">
          <h1 className="contact__title"><span className="line"><span>Get in touch</span></span></h1>
          <Reveal className="contact__info" delay={150}>
            <div>
              <p className="contact__key">Email</p>
              <a className="contact__value contact__mail" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div>
              <p className="contact__key">Phone / WhatsApp</p>
              <a className="contact__value contact__mail" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </div>
            <div>
              <p className="contact__key">Based in</p>
              <p className="contact__value">{site.city}, <Clock showCity={false} /> local time</p>
            </div>
            <div>
              <p className="contact__key">Follow</p>
              <ul className="contact__social">
                {site.socials.map((s) => (
                  <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label} ↗</a></li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={100}><ContactForm /></Reveal>
      </div>
    </section>
  );
}
