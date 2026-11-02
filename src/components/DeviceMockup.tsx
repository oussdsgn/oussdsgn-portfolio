import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";

/** A laptop with an optional phone beside it, drawn in CSS around real screenshots. */
export function DeviceScene({ desktop, mobile, name, background }: { desktop: StaticImageData; mobile?: StaticImageData; name: string; background: string }) {
  return (
    <div className={`device-scene ${mobile ? "has-phone" : ""}`} style={{ "--scene-bg": background } as CSSProperties}>
      <div className="laptop">
        <div className="laptop__screen">
          <div className="laptop__display">
            <Image src={desktop} alt={`${name} website on a laptop`} placeholder="blur" sizes="(max-width: 760px) 90vw, 45vw" quality={85} />
          </div>
        </div>
        <div className="laptop__base" aria-hidden="true"><span /></div>
      </div>
      {mobile && <Phone image={mobile} alt={`${name} website on a phone`} className="device-scene__phone" />}
    </div>
  );
}

/** A phone; with `feed`, the image is shown as a post inside a social feed. */
export function Phone({ image, alt, className = "", feed = false }: { image: StaticImageData; alt: string; className?: string; feed?: boolean }) {
  return (
    <div className={`phone ${className}`}>
      <div className={`phone__display ${feed ? "phone__display--feed" : ""}`}>
        {feed && <span className="feed__head" aria-hidden="true"><i /><b /></span>}
        <Image src={image} alt={alt} placeholder="blur" sizes="(max-width: 760px) 40vw, 14vw" quality={85} />
        {feed && <span className="feed__foot" aria-hidden="true"><i /><i /><i /><b /><b /></span>}
      </div>
    </div>
  );
}
