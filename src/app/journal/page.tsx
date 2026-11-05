import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Reveal } from "@/components/Reveal";
import { Cta } from "@/components/Cta";
import { articles } from "@/data/site";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on design — my own concepts and work from other studios that caught my eye.",
};

export default function JournalPage() {
  return (
    <>
      <div className="page-top">
        <div className="container">
          <div className="page-head">
            <h1 className="page-title"><span className="line"><span>Journal</span></span></h1>
          </div>
          <Reveal as="p" className="store__intro">
            Notes on design — my own concepts and work from other studios that caught my eye.
          </Reveal>
          <div className="grid-2 journal__grid">
            {articles.map((a, i) => <ArticleCard key={a.slug} {...a} wide delay={(i % 2) * 90} />)}
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
}
