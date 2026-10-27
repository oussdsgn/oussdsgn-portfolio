import type { Metadata } from "next";
import Image from "next/image";
import { RevealWords } from "@/components/RevealWords";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Stats } from "@/components/Stats";
import { Cta } from "@/components/Cta";
import { about, clients, education, experience, explorations, site, stats } from "@/data/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="about-hero" data-header-dark aria-hidden="true">
        <Image src={site.images.hero} alt="" fill priority placeholder="blur" sizes="(max-aspect-ratio: 16/9) 178vh, 100vw" quality={90} style={{ objectFit: "cover", objectPosition: "center 18%" }} />
      </section>

      <section className="about-intro">
        <div className="container">
          <RevealWords as="h1" className="about-intro__text" text={about.intro} />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="approach">
            <Reveal as="h2" className="approach__label">Approach</Reveal>
            <Reveal as="p" className="approach__text" delay={100}>{about.approach}</Reveal>
          </div>
          <div className="about-stats"><Stats items={stats} /></div>
        </div>
      </section>

      <section className="timeline">
        <div className="container">
          <SectionLabel index="01" title="Experience" />
          <ol className="timeline__list">
            {experience.map((job) => (
              <Reveal as="li" key={job.company + job.role} className="job">
                <p className="job__period">{job.period}</p>
                <div className="job__head">
                  <h3 className="job__company">
                    {job.href ? <a href={job.href} target="_blank" rel="noopener noreferrer">{job.company} <span aria-hidden="true">↗</span></a> : job.company}
                  </h3>
                  <p className="job__role">{job.role}</p>
                </div>
                {job.points.length > 0 && (
                  <ul className="job__points">{job.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="timeline timeline--edu">
        <div className="container">
          <SectionLabel index="02" title="Education & Tools" />
          <div className="edu">
            <ol className="edu__list">
              {education.map((e) => (
                <Reveal as="li" key={e.title} className="edu__item">
                  <p className="job__period">{e.period}</p>
                  <div>
                    <h3 className="edu__title">{e.title}</h3>
                    <p className="edu__school">{e.school}</p>
                    {e.note && <p className="edu__note">{e.note}</p>}
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal className="tools" delay={120}>
              <h3 className="tools__title">Toolkit</h3>
              <ul className="tools__list">{about.tools.map((t) => <li key={t}>{t}</li>)}</ul>
              <h3 className="tools__title tools__title--next">AI & generative tools</h3>
              <ul className="tools__list">{about.aiTools.map((t) => <li key={t}>{t}</li>)}</ul>
              <h3 className="tools__title tools__title--next">Languages</h3>
              <ul className="tools__list">{about.languages.map((t) => <li key={t}>{t}</li>)}</ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="explorations">
        <div className="container">
          <div className="explorations__head">
            <h2 className="clients__title">Visual explorations</h2>
            <p className="explorations__note">Personal image-making — light, colour and portraiture.</p>
          </div>
          <div className="explorations__grid">
            {explorations.map((img, i) => (
              <Reveal key={i} className={`exploration exploration--${i + 1}`} delay={i * 70}>
                <Image src={img} alt="" placeholder="blur" sizes="(max-width: 760px) 50vw, 20vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="clients">
        <div className="container">
          <div className="explorations__head">
            <h2 className="clients__title">Brands I’ve worked with</h2>
            <p className="explorations__note">{clients.length} brands across healthcare, tech, retail, logistics and more.</p>
          </div>
          <ul className="clients__grid">
            {clients.map((c, i) => (
              <Reveal as="li" key={c.name} className="client" delay={(i % 7) * 50}>
                <Image src={c.image} alt={c.name} sizes="(max-width: 760px) 40vw, 14vw" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Cta />
    </>
  );
}
