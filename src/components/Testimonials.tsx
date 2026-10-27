"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const many = testimonials.length > 1;

  return (
    <div className={`testimonial ${t.image ? "" : "testimonial--no-photo"}`}>
      {t.image && (
        <div className="testimonial__media">
          <Image key={t.name} className="fade-swap" src={t.image} alt={t.name} placeholder="blur" sizes="(max-width: 760px) 100vw, 40vw" />
        </div>
      )}
      <figure className="testimonial__body">
        <blockquote key={t.quote} className="testimonial__quote fade-swap">“{t.quote}”</blockquote>
        <figcaption className="testimonial__foot">
          <div>
            <p className="testimonial__name">{t.name}</p>
            <p className="testimonial__role">{t.role}</p>
          </div>
          {many && (
            <div className="slider-arrows">
              <button className="round-btn" onClick={() => setI((n) => (n - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">←</button>
              <button className="round-btn" onClick={() => setI((n) => (n + 1) % testimonials.length)} aria-label="Next testimonial">→</button>
            </div>
          )}
        </figcaption>
      </figure>
    </div>
  );
}
