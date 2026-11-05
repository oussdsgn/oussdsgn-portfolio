import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Cta } from "@/components/Cta";
import { pageText, products, site } from "@/data/site";
import { StoreLogo } from "@/components/StoreLogo";
import { Products } from "@/components/Products";

export const metadata: Metadata = { title: "Store" };

export default function StorePage() {
  return (
    <>
      <div className="page-top">
        <div className="container">
          <div className="page-head">
            <h1 className="page-title"><span className="line"><span>Store</span></span></h1>
          </div>
          <Reveal as="p" className="store__intro">
            {pageText.storeIntro}
          </Reveal>
          <div className="store__cards">
            {site.stores.map((st, i) => (
              <Reveal key={st.id} delay={i * 90}>
                <a className={`store-card store-card--${st.id}`} href={st.href} target="_blank" rel="noopener noreferrer" data-cursor="Visit">
                  <StoreLogo id={st.id} className="store-card__logo" />
                  <span className="store-card__name">{st.name} <span aria-hidden="true">↗</span></span>
                  <span className="store-card__handle">{st.handle}</span>
                  <span className="store-card__note">{st.note}</span>
                  <span className="store-card__cta">{st.cta}</span>
                </a>
              </Reveal>
            ))}
          </div>
          {products.length > 0 && <Products products={products} />}
        </div>
      </div>
      <Cta />
    </>
  );
}
