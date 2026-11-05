import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { Reveal } from "@/components/Reveal";
import { Cta } from "@/components/Cta";
import { ShareInstagram } from "@/components/ShareInstagram";
import { articles, getArticle, type Article } from "@/data/site";

const SITE = "https://oussdsgn.vercel.app";

/** External links, credits and share buttons at the end of an article. */
function ArticleFoot({ a }: { a: Article }) {
  const url = encodeURIComponent(`${SITE}/journal/${a.slug}`);
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  return (
    <footer className="ja-foot">
      {a.links && (
        <ul className="ja-links">
          {a.links.map((l) => (
            <li key={l.href}><a href={l.href} {...ext}>{l.label} <span aria-hidden="true">↗</span></a></li>
          ))}
        </ul>
      )}
      <dl className="ja-credits">
        {a.credits?.map((c) => (
          <div key={c.role} className="ja-credits__row">
            <dt>{c.role}</dt>
            <dd>{c.href ? <a className="ja-credits__name" href={c.href} {...ext}>{c.name}</a> : c.name}</dd>
          </div>
        ))}
        <div className="ja-credits__row">
          <dt>Share</dt>
          <dd className="ja-share">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} {...ext} aria-label="Share on Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-4.5v-7.2h2.4l.4-2.8h-2.8v-1.8c0-.8.2-1.4 1.4-1.4h1.5V6.3c-.3 0-1.1-.1-2.2-.1-2.2 0-3.6 1.3-3.6 3.7V12H10.2v2.8h2.4V22H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /></svg>
            </a>
            <a href={`https://x.com/intent/post?url=${url}&text=${encodeURIComponent(a.title)}`} {...ext} aria-label="Share on X">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.48l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.3 19.5h2.04L6.49 3.24H4.3L17.6 20.65z" /></svg>
            </a>
            <ShareInstagram url={`${SITE}/journal/${a.slug}`} title={a.title} />
          </dd>
        </div>
      </dl>
    </footer>
  );
}

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  const first = a.body.find((b) => "p" in b) as { p: string } | undefined;
  return { title: a.title, description: a.dek ?? first?.p };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const others = articles.filter((x) => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      <article className="page-top journal-article">
        <div className="container">
          <Link className="cs-back" href="/assets-store#journal"><span aria-hidden="true">←</span> Journal</Link>
          <header className="ja-head">
            <p className="article__meta">{a.category} / {a.date}</p>
            <h1 className="ja-title"><span className="line"><span>{a.title}</span></span></h1>
            {a.dek && <p className="ja-dek">{a.dek}</p>}
          </header>
          <Reveal className="ja-cover">
            <Image src={a.image} alt="" placeholder="blur" priority sizes="(max-width: 760px) 100vw, 1440px" />
          </Reveal>
          <div className="ja-body">
            {a.body.map((b, i) =>
              "p" in b ? (
                <Reveal as="p" key={i} className="ja-p">{b.p}</Reveal>
              ) : "video" in b ? (
                <Reveal key={i} className="ja-img ja-video">
                  <video src={b.video} poster={b.poster.src} width={b.poster.width} height={b.poster.height} autoPlay muted loop playsInline preload="metadata" aria-label={b.alt} />
                </Reveal>
              ) : (
                <Reveal key={i} className="ja-img">
                  <Image src={b.img} alt={b.alt} placeholder="blur" sizes="(max-width: 760px) 100vw, 900px" />
                </Reveal>
              )
            )}
            {a.source && (
              <a className="cs-link ja-source" href={a.source.href} target="_blank" rel="noopener noreferrer">
                {a.source.label} <span aria-hidden="true">↗</span>
              </a>
            )}
            {(a.links || a.credits) && <ArticleFoot a={a} />}
          </div>

          <section className="ja-next" aria-labelledby="ja-next-title">
            <h2 id="ja-next-title" className="ja-next__title">Next articles</h2>
            <div className="grid-2">
              {others.map((o, i) => <ArticleCard key={o.slug} {...o} wide delay={i * 90} />)}
            </div>
          </section>
        </div>
      </article>
      <Cta />
    </>
  );
}
