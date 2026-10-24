"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

export type LightboxItem = { image: StaticImageData; title: string; caption?: string };

type Props = { items: LightboxItem[]; index: number | null; onClose: () => void; onNav: (dir: 1 | -1) => void };

export function Lightbox({ items, index, onClose, onNav }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const item = index === null ? null : items[index];
  const many = items.length > 1;

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item && !d.open) d.showModal();
    if (!item && d.open) d.close();
  }, [item]);

  useEffect(() => {
    if (!item || !many) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, many, onNav]);

  return (
    <dialog ref={ref} className="lightbox" aria-label={item?.title} onClose={onClose} onClick={(e) => e.target === e.currentTarget && onClose()}>
      {item && (
        <div className="lightbox__inner" key={index}>
          <div className="lightbox__media">
            <Image
              src={item.image}
              alt={item.caption ?? item.title}
              placeholder="blur"
              sizes="(max-width: 760px) 100vw, 80vw"
              quality={90}
              // never enlarge past the file's real size, so small pieces stay sharp
              style={{ maxWidth: `min(100%, ${item.image.width}px)` }}
            />
          </div>
          <div className="lightbox__bar">
            <div>
              <p className="lightbox__title">{item.title}</p>
              {item.caption && <p className="lightbox__tags">{item.caption}</p>}
            </div>
            <div className="lightbox__controls">
              {many && (
                <>
                  <span className="lightbox__count">{String(index! + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
                  <button className="round-btn" onClick={() => onNav(-1)} aria-label="Previous image">←</button>
                  <button className="round-btn" onClick={() => onNav(1)} aria-label="Next image">→</button>
                </>
              )}
              <button className="round-btn round-btn--light" onClick={onClose} aria-label="Close">✕</button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
