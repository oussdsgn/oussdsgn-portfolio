"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import type { Product } from "@/data/site";

/** Product cards on the Store page; clicking one opens a pop-up with its pictures, description and download button. */
export function Products({ products }: { products: Product[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="products">
        {products.map((pr, i) => (
          <Reveal key={`${pr.name}-${i}`} delay={(i % 3) * 80}>
            <button type="button" className="product" onClick={() => setOpen(i)} data-cursor="View" aria-haspopup="dialog">
              <span className="product__media">
                <Image src={pr.image} alt="" placeholder="blur" sizes="(max-width: 760px) 100vw, 30vw" />
              </span>
              <span className="product__meta">
                <span className="product__name">{pr.name}</span>
                {pr.price !== undefined && <span className="product__price">${pr.price}</span>}
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <ProductDialog product={open === null ? null : products[open]} onClose={() => setOpen(null)} />
    </>
  );
}

function ProductDialog({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [pic, setPic] = useState(0);
  const pics = product ? [product.image, ...product.images] : [];
  const many = pics.length > 1;
  const go = (dir: 1 | -1) => setPic((p) => (p + dir + pics.length) % pics.length);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (product && !d.open) {
      setPic(0);
      d.showModal();
    }
    if (!product && d.open) d.close();
  }, [product]);

  useEffect(() => {
    if (!product || !many) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <dialog
      ref={ref}
      className="pdialog"
      aria-label={product?.name}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      data-lenis-prevent
    >
      {product && (
        <div className="pdialog__inner">
          <button className="round-btn pdialog__close" onClick={onClose} aria-label="Close">✕</button>
          <div className="pdialog__gallery">
            <div className="pdialog__stage" style={{ aspectRatio: `${product.image.width} / ${product.image.height}` }}>
              <Image
                key={pic}
                src={pics[pic]}
                alt={`${product.name}, picture ${pic + 1} of ${pics.length}`}
                placeholder="blur"
                quality={90}
                sizes="(max-width: 760px) 100vw, 760px"
              />
              {many && (
                <>
                  <button className="round-btn pdialog__nav pdialog__nav--prev" onClick={() => go(-1)} aria-label="Previous picture">←</button>
                  <button className="round-btn pdialog__nav pdialog__nav--next" onClick={() => go(1)} aria-label="Next picture">→</button>
                </>
              )}
            </div>
            {many && (
              <div className="pdialog__thumbs">
                {pics.map((p, i) => (
                  <button key={i} className="pdialog__thumb" aria-pressed={i === pic} aria-label={`Picture ${i + 1}`} onClick={() => setPic(i)}>
                    <Image src={p} alt="" sizes="96px" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="pdialog__info">
            <div className="pdialog__head">
              <h2 className="pdialog__name">{product.name}</h2>
              {product.price !== undefined && <span className="product__price">${product.price}</span>}
            </div>
            {product.description && <p className="pdialog__text">{product.description}</p>}
            {product.href && (
              <a className="btn pdialog__btn" href={product.href} target="_blank" rel="noopener noreferrer">
                {product.button}
              </a>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
