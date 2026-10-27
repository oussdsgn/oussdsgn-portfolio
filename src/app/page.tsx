import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { RevealWords } from "@/components/RevealWords";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { WorkGallery } from "@/components/WorkGallery";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { ArticleCard } from "@/components/ArticleCard";
import { Cta } from "@/components/Cta";
import { Arrow } from "@/components/Logo";
import { Phone } from "@/components/DeviceMockup";
import { articles, process, selectedWorks, services, site, stats } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={site.marquee} />

      <section className="intro">
        <div className="container">
          <RevealWords as="h2" className="intro__heading" text="I create thoughtful, high-impact visuals and structured digital experiences built to leave a lasting impression." />
          <div className="intro__grid">
            <Reveal className="intro__photo">
              <Image src={site.images.portrait} alt={`Portrait of ${site.owner}`} placeholder="blur" sizes="230px" />
            </Reveal>
            <Reveal as="p" className="intro__text" delay={80}>
              I’m {site.owner}, a creative focused on shaping bold visuals and purposeful digital experiences. My work sits at the intersection of clarity and expression—where strong ideas meet clean execution.
            </Reveal>
            <Reveal as="p" className="intro__text" delay={160}>
              I approach every project with intention, crafting solutions that not only look refined but communicate effectively and leave a lasting impression.
            </Reveal>
            <Link className="btn intro__cta" href="/about">Read more <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="works">
        <div className="container">
          <SectionLabel index="03" title="Selected Works" />
          <WorkGallery items={selectedWorks} />
          <div className="works__more"><Link className="btn" href="/projects">All works <Arrow /></Link></div>
        </div>
      </section>

      <section className="services dark">
        <div className="container">
          <SectionLabel index="04" title="Services" />
          <Reveal as="h2" className="services__heading">Thoughtful, high-impact visuals and structured digital experiences built for your brand</Reveal>
          <div className="services__list">
            {services.map((s, i) => (
              <Reveal key={s.title} className="service">
                <span className="service__num">{String(i + 1).padStart(2, "0")}</span>
                <div className="service__img">
                  {s.image && <Image src={s.image} alt="" placeholder="blur" sizes="210px" />}
                  {s.phone && <Phone image={s.phone} alt="Website design shown on a phone" className="service__phone" />}
                </div>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__text">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <SectionLabel index="05" title="Process" />
          <ol className="process__list">
            {process.map((step, i) => (
              <Reveal as="li" key={step.title} className="step" delay={i * 60}>
                <h3 className="step__title"><span>({String(i + 1).padStart(2, "0")})</span>{step.title}</h3>
                <p className="step__text">{step.text}</p>
                <span className="step__dash" aria-hidden="true" />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <SectionLabel index="06" title="Testimonials" />
          <Reveal><Testimonials /></Reveal>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <SectionLabel index="07" title="Stats & Facts" />
          <Stats items={stats} />
        </div>
      </section>

      <section className="articles">
        <div className="container">
          <SectionLabel index="08" title="Articles" />
          <div className="articles__grid">
            {articles.map((a, i) => <ArticleCard key={a.slug} {...a} delay={i * 80} />)}
          </div>
          <div className="articles__more"><Link className="link-arrow" href="/assets-store#journal">View all articles <Arrow /></Link></div>
        </div>
      </section>

      <Cta />
    </>
  );
}
