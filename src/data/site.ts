// Site content, loaded from the dashboard (/keystatic). Edit content there, or the
// JSON in content/; `scripts/build-content.mjs` regenerates ./generated on dev/build.
import type { StaticImageData } from "next/image";
import type { Mock } from "@/components/Mockups";
import type { Worn } from "@/components/MedalWorn";
import { showDrafts } from "./env";
import raw from "./generated/content.json";
import { images } from "./generated/images";

/* ---------- hydration: image keys → static imports, empty strings → undefined ---------- */
type Json = unknown;
function hydrate(v: Json): Json {
  if (Array.isArray(v)) return v.map(hydrate);
  if (v && typeof v === "object") {
    if ("__img" in v) {
      const img = images[(v as { __img: string }).__img];
      if (!img) throw new Error(`Missing image ${(v as { __img: string }).__img}`);
      return img;
    }
    const out: Record<string, Json> = {};
    for (const [k, x] of Object.entries(v)) {
      const h = hydrate(x);
      if (h !== "" && h !== null && h !== undefined) out[k] = h;
    }
    return out;
  }
  return v;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const C = hydrate(raw) as any;

type Link = { label: string; href: string };
const link = (l?: Partial<Link>): Link | undefined => (l?.href ? { label: l.label ?? l.href, href: l.href } : undefined);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function arr<T = any>(v: any): T[] {
  return Array.isArray(v) ? v : [];
}
const num = (v: unknown) => Number(v);

/* ---------- settings ---------- */
const S = C.settings;
export const site = {
  name: S.name as string,
  owner: S.owner as string,
  fullName: S.fullName as string,
  role: S.role as string,
  city: S.city as string,
  timeZone: S.timeZone as string,
  year: S.year as number,
  email: S.email as string,
  // Web3Forms access key: the contact form delivers to the inbox this key was created for.
  formKey: S.formKey as string,
  phone: (S.phone ?? "") as string,
  socials: arr<Link>(S.socials),
  /** Where to buy work, shown as cards on the Store page */
  stores: arr(S.stores) as { id: "gumroad" | "magnific" | "deviantart"; name: string; handle: string; note: string; cta: string; href: string }[],
  images: { hero: S.hero as StaticImageData, portrait: S.portrait as StaticImageData },
  marquee: arr<string>(S.marquee),
};

export const nav: Link[] = arr(S.nav);
export const footerLinks: Link[] = arr(S.footer);

/** Free text on the pages (hero, intros, headings) */
const T = C.pageText;
export const pageText = {
  heroTitle: arr<string>(T.heroTitle),
  heroLeft: arr<string>(T.heroLeft),
  heroRight: arr<string>(T.heroRight),
  homeIntro: (T.homeIntro ?? "") as string,
  homeIntroText: arr<string>(T.homeIntroText),
  servicesTitle: (T.servicesTitle ?? "") as string,
  ctaTitle: arr<string>(T.ctaTitle),
  journalIntro: (T.journalIntro ?? "") as string,
  storeIntro: (T.storeIntro ?? "") as string,
  explorationsNote: (T.explorationsNote ?? "") as string,
  contactTitle: (T.contactTitle ?? "") as string,
  notFound: (T.notFound ?? "") as string,
};

/* ---------- projects ---------- */
/**
 * A case-study page is built from `blocks`, top to bottom:
 *   text        label + copy in the right column
 *   gallery     1–4 images in a row; `ratio` crops them all to one shape
 *   placeholder marked empty slots (drafts only)
 *   specs       label / value list
 *   compare     before / after pairs
 *   video       muted autoplaying loop
 * Any paragraph or spec value starting with "TODO" is shown as a marked placeholder.
 */
type Shot = { image: StaticImageData; alt: string };

export type ProjectBlock =
  | { type: "text"; title: string; paragraphs: string[] }
  | { type: "gallery"; cols: 1 | 2 | 3 | 4; ratio?: string; images: Shot[] }
  | { type: "placeholder"; cols: 1 | 2 | 3; ratio: string; labels: string[] }
  | { type: "specs"; title: string; items: { label: string; value: string }[] }
  | { type: "compare"; pairs: { before?: Shot; after?: Shot; label: string }[] }
  | { type: "video"; title: string; src?: string; poster?: StaticImageData };

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  image: StaticImageData;
  cover?: StaticImageData;
  services?: string[];
  year?: string;
  info?: string[];
  link?: Link;
  draft?: boolean;
  blocks?: ProjectBlock[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toBlock = ({ discriminant: type, value: v = {} }: any): ProjectBlock => {
  switch (type) {
    case "text": return { type, title: v.title, paragraphs: arr(v.paragraphs) };
    case "gallery": return { type, cols: num(v.cols) as 1, ratio: v.ratio, images: arr(v.images) };
    case "placeholder": return { type, cols: num(v.cols) as 1, ratio: v.ratio, labels: arr(v.labels) };
    case "specs": return { type, title: v.title, items: arr(v.items).map((i: { label: string; value?: string }) => ({ label: i.label, value: i.value ?? "" })) };
    case "compare":
      return {
        type,
        pairs: arr(v.pairs).map((p: { label: string; before?: StaticImageData; beforeAlt?: string; after?: StaticImageData; afterAlt?: string }) => ({
          label: p.label,
          before: p.before && { image: p.before, alt: p.beforeAlt ?? p.label },
          after: p.after && { image: p.after, alt: p.afterAlt ?? p.label },
        })),
      };
    case "video": return { type, title: v.title, src: v.src, poster: v.poster };
    default: throw new Error(`Unknown block ${type}`);
  }
};

const allProjects: Project[] = arr(C.projects)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .map((p: any) => ({ ...p, order: num(p.order ?? 100) }))
  .sort((a: { order: number; title: string }, b: { order: number; title: string }) => a.order - b.order || a.title.localeCompare(b.title))
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .map((p: any): Project => ({
    slug: p.slug,
    title: p.title,
    tags: arr(p.tags),
    image: p.image,
    cover: p.cover,
    services: p.services,
    year: p.year,
    info: p.info,
    link: link(p.link),
    draft: !!p.draft,
    blocks: arr(p.blocks).map(toBlock),
  }));

export const projects: Project[] = allProjects.filter((p) => showDrafts || !p.draft);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/* ---------- home ---------- */
const H = C.home;
/** Home page "Selected works", in this order (draft projects are skipped on the live site). */
export const selectedWorks: Project[] = arr<string>(H.selectedWorks).map(getProject).filter((p): p is Project => !!p);

export const services: { title: string; image: StaticImageData | null; phone: StaticImageData | null; text: string }[] = arr(H.services).map(
  (s: { title: string; text?: string; image?: StaticImageData; phone?: StaticImageData }) => ({ title: s.title, text: s.text ?? "", image: s.image ?? null, phone: s.phone ?? null })
);
export const process: { title: string; text: string }[] = arr(H.process);
export const testimonials: { quote: string; name: string; role: string; image?: StaticImageData }[] = arr(H.testimonials);

export type Stat = { value: number; decimals?: number; suffix: string; label: string; text: string };
export const stats: Stat[] = arr(H.stats).map((s: Stat) => ({ ...s, value: num(s.value), decimals: s.decimals ? num(s.decimals) : undefined, suffix: s.suffix ?? "", text: s.text ?? "" }));

/* ---------- articles (newest first) ---------- */
export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: StaticImageData;
  dek?: string;
  body: ({ p: string } | { img: StaticImageData; alt: string } | { video: string; poster: StaticImageData; alt: string })[];
  source?: Link;
  links?: Link[];
  credits?: { role: string; name: string; href?: string }[];
};

const fmtDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export const articles: Article[] = arr(C.articles)
  .sort((a: { date: string }, b: { date: string }) => b.date.localeCompare(a.date))
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .map((a: any): Article => ({
    slug: a.slug,
    title: a.title,
    category: a.category ?? "Design",
    date: fmtDate(a.date),
    image: a.image,
    dek: a.dek,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: arr(a.body).flatMap(({ discriminant, value: v = {} }: any): Article["body"] =>
      discriminant === "paragraph" ? (v.text ? [{ p: v.text }] : [])
      : discriminant === "image" ? [{ img: v.image, alt: v.alt }]
      : v.video ? [{ video: v.video, poster: v.poster, alt: v.alt }] : []
    ),
    source: link(a.source),
    links: a.links?.length ? a.links : undefined,
    credits: a.credits?.length ? a.credits : undefined,
  }));

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

/* ---------- about ---------- */
const A = C.about;
export const clients: { name: string; image: StaticImageData }[] = arr(A.clients);
export const explorations: StaticImageData[] = arr(A.explorations);
export const about = {
  intro: (A.intro ?? "") as string,
  approach: (A.approach ?? "") as string,
  tools: arr<string>(A.tools),
  aiTools: arr<string>(A.aiTools),
  languages: arr<string>(A.languages),
};
export const experience: { company: string; href?: string; role: string; period: string; points: string[] }[] = arr(A.experience).map(
  (e: any) => ({ ...e, points: arr(e.points) })
);
export const education: { school: string; title: string; period: string; note?: string }[] = arr(A.education);

/* ---------- work page ---------- */
const W = C.work;
/** Categories on the Work page: case studies whose tags match, then the matching archive group. */
export const workCategories: { label: string; tags: string[]; archive?: string }[] = arr(W.categories).map(
  (c: { label: string; tags?: string[]; archive?: string }) => ({ label: c.label, tags: arr(c.tags), archive: c.archive })
);

type Piece = { image: StaticImageData; alt: string; bg?: string };
export type ArchiveGroup = { title: string; kind: "logos" | "posts" | "posters" | "web" | "mockups"; items: Piece[]; mocks?: Mock[] };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toMock = ({ discriminant: kind, value: v = {} }: any): Mock => {
  if (kind === "worn") return { kind, ...v, ribbon: arr(v.ribbon) } as { kind: "worn" } & Worn;
  if (kind === "rollups" || kind === "phones") return { kind, ...v, images: arr(v.images) };
  return { kind, ...v } as Mock;
};

export const archive: ArchiveGroup[] = arr(W.archive).map(
  (g: { title: string; kind: ArchiveGroup["kind"]; items?: Piece[]; mocks?: unknown[] }) => ({
    title: g.title,
    kind: g.kind,
    items: arr(g.items),
    mocks: g.mocks?.length ? g.mocks.map(toMock) : undefined,
  })
);

/** Website projects, shown in laptop / phone mockups on the Work page */
export const webProjects: { name: string; note: string; url?: string; links?: Link[]; desktop: StaticImageData; mobile?: StaticImageData; background: string }[] = arr(
  W.webProjects
).map((w: any) => ({ ...w, note: w.note ?? "", links: w.links?.length ? w.links : undefined, background: w.background ?? "#ddd" }));

/* ---------- store ---------- */
/** Products shown under the store cards on the Store page (hidden while empty). */
// A link that isn't a full web address is dropped, so the card can't lead to a broken page.
export type Product = {
  name: string;
  image: StaticImageData;
  images: StaticImageData[];
  description?: string;
  price?: number;
  href?: string;
  button: string;
};
export const products: Product[] = arr(C.store.products).map(
  (p: any): Product => ({
    name: p.name,
    image: p.image,
    images: arr(p.images),
    description: p.description,
    price: p.price != null && num(p.price) > 0 ? num(p.price) : undefined,
    href: /^https?:\/\//.test(p.href ?? "") ? p.href : undefined,
    button: p.button || "Download",
  })
);
