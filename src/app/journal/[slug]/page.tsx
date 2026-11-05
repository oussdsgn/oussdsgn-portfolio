import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { Reveal } from "@/components/Reveal";
import { Cta } from "@/components/Cta";
import { articles, getArticle } from "@/data/site";

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
