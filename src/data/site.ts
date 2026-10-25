// All site content lives here — edit text, links and images in one place.
import type { StaticImageData } from "next/image";
import { behance } from "./behance";
import type { Mock } from "@/components/Mockups";

import hero from "@/assets/images/hero.jpg";
import portrait from "@/assets/images/portrait.jpg";
import ademFitt from "@/assets/images/adem-fitt.jpg";
import heetch from "@/assets/images/heetch.jpg";
import inpha from "@/assets/images/inpha.jpg";
import ultraRapide from "@/assets/images/ultra-rapid.jpg";
import twsel from "@/assets/images/twsel.jpg";
import innovea from "@/assets/images/innovea.jpg";
import servicePackaging from "@/assets/images/service-packaging.jpg";
import w_banner_beko_dishwasher from "@/assets/images/work/banner-beko-dishwasher.jpg";
import w_banner_beko_leaderboard from "@/assets/images/work/banner-beko-leaderboard.jpg";
import w_banner_telecoming_1 from "@/assets/images/work/banner-telecoming-1.jpg";
import w_banner_telecoming_2 from "@/assets/images/work/banner-telecoming-2.jpg";
import w_banner_telecoming_3 from "@/assets/images/work/banner-telecoming-3.jpg";
import w_logo_01 from "@/assets/images/work/logo-01.png";
import w_logo_02 from "@/assets/images/work/logo-02.png";
import w_logo_03 from "@/assets/images/work/logo-03.png";
import w_logo_04 from "@/assets/images/work/logo-04.png";
import w_logo_05 from "@/assets/images/work/logo-05.png";
import w_logo_06 from "@/assets/images/work/logo-06.png";
import w_logo_07 from "@/assets/images/work/logo-07.png";
import w_logo_08 from "@/assets/images/work/logo-08.png";
import w_logo_09 from "@/assets/images/work/logo-09.png";
import w_logo_10 from "@/assets/images/work/logo-10.png";
import w_logo_11 from "@/assets/images/work/logo-11.png";
import w_logo_12 from "@/assets/images/work/logo-12.png";
import w_logo_13 from "@/assets/images/work/logo-13.png";
import w_logo_14 from "@/assets/images/work/logo-14.png";
import w_logo_15 from "@/assets/images/work/logo-15.png";
import w_pack_doubby_mockup from "@/assets/images/work/pack-doubby-mockup.jpg";
import w_pack_infinix_box from "@/assets/images/work/pack-infinix-box.jpg";
import w_post_01 from "@/assets/images/work/post-01.jpg";
import w_post_02 from "@/assets/images/work/post-02.jpg";
import w_post_03 from "@/assets/images/work/post-03.jpg";
import w_post_04 from "@/assets/images/work/post-04.jpg";
import w_post_05 from "@/assets/images/work/post-05.jpg";
import w_post_06 from "@/assets/images/work/post-06.jpg";
import w_post_07 from "@/assets/images/work/post-07.jpg";
import w_post_08 from "@/assets/images/work/post-08.jpg";
import w_post_09 from "@/assets/images/work/post-09.jpg";
import w_post_10 from "@/assets/images/work/post-10.jpg";
import w_post_11 from "@/assets/images/work/post-11.jpg";
import w_post_12 from "@/assets/images/work/post-12.jpg";
import w_post_13 from "@/assets/images/work/post-13.jpg";
import w_post_14 from "@/assets/images/work/post-14.jpg";
import w_post_15 from "@/assets/images/work/post-15.jpg";
import w_post_16 from "@/assets/images/work/post-16.jpg";
import w_post_17 from "@/assets/images/work/post-17.jpg";
import w_post_18 from "@/assets/images/work/post-18.jpg";
import w_post_19 from "@/assets/images/work/post-19.jpg";
import w_post_20 from "@/assets/images/work/post-20.jpg";
import w_post_21 from "@/assets/images/work/post-21.jpg";
import w_post_22 from "@/assets/images/work/post-22.jpg";
import w_post_23 from "@/assets/images/work/post-23.jpg";
import w_post_24 from "@/assets/images/work/post-24.jpg";
import w_post_25 from "@/assets/images/work/post-25.jpg";
import w_poster_car_01 from "@/assets/images/work/poster-car-01.jpg";
import w_poster_car_02 from "@/assets/images/work/poster-car-02.jpg";
import w_poster_car_03 from "@/assets/images/work/poster-car-03.jpg";
import w_poster_car_04 from "@/assets/images/work/poster-car-04.jpg";
import w_poster_car_05 from "@/assets/images/work/poster-car-05.jpg";
import w_poster_car_06 from "@/assets/images/work/poster-car-06.jpg";
import w_poster_car_07 from "@/assets/images/work/poster-car-07.jpg";
import w_poster_car_08 from "@/assets/images/work/poster-car-08.jpg";
import w_poster_car_09 from "@/assets/images/work/poster-car-09.jpg";
import w_poster_car_10 from "@/assets/images/work/poster-car-10.jpg";
import w_poster_space_01 from "@/assets/images/work/poster-space-01.jpg";
import w_poster_space_02 from "@/assets/images/work/poster-space-02.jpg";
import w_poster_space_03 from "@/assets/images/work/poster-space-03.jpg";
import w_poster_space_04 from "@/assets/images/work/poster-space-04.jpg";
import w_poster_space_05 from "@/assets/images/work/poster-space-05.jpg";
import w_poster_space_06 from "@/assets/images/work/poster-space-06.jpg";
import w_poster_space_07 from "@/assets/images/work/poster-space-07.jpg";
import w_poster_space_08 from "@/assets/images/work/poster-space-08.jpg";
import w_poster_space_09 from "@/assets/images/work/poster-space-09.jpg";
import w_poster_space_10 from "@/assets/images/work/poster-space-10.jpg";
import w_poster_space_11 from "@/assets/images/work/poster-space-11.jpg";
import w_print_alaksa_halwa from "@/assets/images/work/print-alaksa-halwa.jpg";
import w_print_alaksa_tartilla from "@/assets/images/work/print-alaksa-tartilla.jpg";
import w_print_netto_banner from "@/assets/images/work/print-netto-banner.jpg";
import w_print_netto_magic from "@/assets/images/work/print-netto-magic.jpg";
import w_print_netto_star from "@/assets/images/work/print-netto-star.jpg";
import boxLtFront from "@/assets/images/work/box-latrasse-front.jpg";
import boxLtSide from "@/assets/images/work/box-latrasse-side.jpg";
import boxDyFront from "@/assets/images/work/box-doubby-y-front.jpg";
import boxDySide from "@/assets/images/work/box-doubby-y-side.jpg";
import boxDgFront from "@/assets/images/work/box-doubby-g-front.jpg";
import boxDgSide from "@/assets/images/work/box-doubby-g-side.jpg";
import cutRivanoBuckets from "@/assets/images/work/cut-pack-rivano-buckets.png";
import cutRivanoPails from "@/assets/images/work/cut-pack-rivano-pails.png";
import cutHoney from "@/assets/images/work/cut-pack-honey-jar.png";
import cutMedal1 from "@/assets/images/work/cut-medal-1.png";
import cutMedal2 from "@/assets/images/work/cut-medal-2.png";
import cutMedal3 from "@/assets/images/work/cut-medal-3.png";
import cutMedal4 from "@/assets/images/work/cut-medal-4.png";
import cutMedal5 from "@/assets/images/work/cut-medal-5.png";
import cutMedal6 from "@/assets/images/work/cut-medal-6.png";
import cutMedal7 from "@/assets/images/work/cut-medal-7.png";
import amsMobile from "@/assets/images/web/ams-mobile.jpg";
import jEllis1 from "@/assets/images/journal/ellis-1.jpg";
import jEllis2 from "@/assets/images/journal/ellis-2.jpg";
import jIkea1 from "@/assets/images/journal/ikea-1.jpg";
import jIkea2 from "@/assets/images/journal/ikea-2.jpg";
import jAlgerian1 from "@/assets/images/journal/algerian-1.jpg";
import jAlgerian2 from "@/assets/images/journal/algerian-2.jpg";
import jFraenk1 from "@/assets/images/journal/fraenk-1.jpg";
import jFraenk2 from "@/assets/images/journal/fraenk-2.jpg";
import citeDesktop from "@/assets/images/web/cite-desktop.jpg";
import citeMobile from "@/assets/images/web/cite-mobile.jpg";
import immoDashboard from "@/assets/images/web/immo-dashboard.jpg";
import immoHome from "@/assets/images/web/immo-home.jpg";
import hichamDesktop from "@/assets/images/web/hicham-desktop.jpg";
import hichamMobile from "@/assets/images/web/hicham-mobile.jpg";
import buzzDesktop from "@/assets/images/web/buzz-desktop.jpg";
import ibDesktop from "@/assets/images/web/ib-digital-desktop.jpg";
import ibMobile from "@/assets/images/web/ib-digital-mobile.jpg";
import kbDesktop from "@/assets/images/web/karin-bastin-desktop.jpg";
import kbMobile from "@/assets/images/web/karin-bastin-mobile.jpg";
import amsDesktop from "@/assets/images/web/ams-desktop.jpg";
import nihad from "@/assets/images/testimonial-nihad.jpg";
import artStandard from "@/assets/images/article-standard.jpg";
import artFraenk from "@/assets/images/article-fraenk.jpg";
import artAlgerian from "@/assets/images/article-algerian.jpg";
import artIkea from "@/assets/images/article-ikea.jpg";
import logo01 from "@/assets/images/clients/logo-01.png";
import logo02 from "@/assets/images/clients/logo-02.png";
import logo03 from "@/assets/images/clients/logo-03.png";
import logo04 from "@/assets/images/clients/logo-04.png";
import logo05 from "@/assets/images/clients/logo-05.png";
import logo06 from "@/assets/images/clients/logo-06.png";
import logo07 from "@/assets/images/clients/logo-07.png";
import logo08 from "@/assets/images/clients/logo-08.png";
import logo09 from "@/assets/images/clients/logo-09.png";
import logo10 from "@/assets/images/clients/logo-10.png";
import logo11 from "@/assets/images/clients/logo-11.png";
import logo12 from "@/assets/images/clients/logo-12.png";
import logo13 from "@/assets/images/clients/logo-13.png";
import logo14 from "@/assets/images/clients/logo-14.png";
import explore1 from "@/assets/images/explorations/exploration-1.jpg";
import explore2 from "@/assets/images/explorations/exploration-2.jpg";
import explore3 from "@/assets/images/explorations/exploration-3.jpg";
import explore4 from "@/assets/images/explorations/exploration-4.jpg";
import explore5 from "@/assets/images/explorations/exploration-5.jpg";

import afLogoNavy from "@/assets/images/projects/adem-fitt/logo-navy.jpg";
import afFamily from "@/assets/images/projects/adem-fitt/brand-family.jpg";
import afStationery from "@/assets/images/projects/adem-fitt/stationery.jpg";
import afStickers from "@/assets/images/projects/adem-fitt/stickers.jpg";
import afMerch from "@/assets/images/projects/adem-fitt/merch.jpg";
import afSocial from "@/assets/images/projects/adem-fitt/social.jpg";
import hePromo from "@/assets/images/projects/heetch/promo-erkeb50.jpg";
import heBillboard from "@/assets/images/projects/heetch/ghardaia-billboard.jpg";
import hePoster from "@/assets/images/projects/heetch/ghardaia-poster.jpg";
import hePhone from "@/assets/images/projects/heetch/promo-phone.jpg";
import heConfort from "@/assets/images/projects/heetch/confort.jpg";
import heWide from "@/assets/images/projects/heetch/ghardaia-wide.jpg";
import inStationery from "@/assets/images/projects/inpha-medis/stationery.jpg";
import inBuilding from "@/assets/images/projects/inpha-medis/building.jpg";
import urTagline from "@/assets/images/projects/ultra-rapide/tagline.jpg";
import urBottle from "@/assets/images/projects/ultra-rapide/bottle.jpg";
import urCap from "@/assets/images/projects/ultra-rapide/cap.jpg";
import urTee from "@/assets/images/projects/ultra-rapide/tee-palette.jpg";
import urKit from "@/assets/images/projects/ultra-rapide/kit.jpg";
import urBillboard from "@/assets/images/projects/ultra-rapide/billboard.jpg";
import twSheet from "@/assets/images/projects/twsel/brand-sheet.jpg";
import twHighway from "@/assets/images/projects/twsel/highway.jpg";
import twTruck from "@/assets/images/projects/twsel/truck.jpg";
import twFlag from "@/assets/images/projects/twsel/flag.jpg";
import twContainer from "@/assets/images/projects/twsel/container.jpg";
import twApps from "@/assets/images/projects/twsel/applications.jpg";
import inoLogo from "@/assets/images/projects/innovea/logo-system.jpg";
import inoEvent from "@/assets/images/projects/innovea/event.jpg";
import inoLaptop from "@/assets/images/projects/innovea/laptop.jpg";
import inoSignage from "@/assets/images/projects/innovea/signage.jpg";
import afGuidelines from "@/assets/images/projects/adem-fitt/guidelines.jpg";

export const site = {
  name: "oussdsgn",
  owner: "Oussama",
  fullName: "Oussama Aba",
  role: "Senior Graphic Designer",
  city: "Algiers",
  timeZone: "Africa/Algiers",
  year: 2026,
  // Where the contact form sends messages (opens the visitor's mail app).
  email: "oussamaaba1@outlook.com",
  phone: "+213 777 58 59 66",
  socials: [
    { label: "Behance", href: "https://behance.net/oussamaaba" },
    { label: "LinkedIn", href: "https://linkedin.com/in/oussama-aba-tlm" },
    { label: "Instagram", href: "https://instagram.com/oussdesigns/" },
    { label: "GitHub", href: "https://github.com/oussdsgn" },
  ],
  /** Where to buy work, shown as cards on the Assets Store page */
  stores: [
    { id: "gumroad", name: "Gumroad", handle: "oussdsgn.gumroad.com", note: "Digital assets & resources", cta: "Shop the store", href: "https://oussdsgn.gumroad.com" },
    { id: "magnific", name: "Magnific", handle: "magnific.com/author/suoliemane123", note: "Stock assets", cta: "Browse assets", href: "https://www.magnific.com/author/suoliemane123" },
    { id: "deviantart", name: "DeviantArt", handle: "deviantart.com/oussdesigns", note: "Artworks & illustration", cta: "See artworks", href: "https://www.deviantart.com/oussdesigns" },
  ] as { id: "gumroad" | "magnific" | "deviantart"; name: string; handle: string; note: string; cta: string; href: string }[],
  images: { hero, portrait },
  marquee: ["Brand Identity", "Social Media", "Packaging", "Print Design", "UI/UX Design", "Motion Graphics"],
};

export const nav = [
  { label: "Works", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Assets Store", href: "/assets-store" },
];

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Assets Store", href: "/assets-store" },
  { label: "Contact", href: "/contact" },
];

/**
 * A case-study page is built from `blocks`, top to bottom:
 *   { type: "text", title, paragraphs }            — label + copy in the right column
 *   { type: "gallery", cols, ratio?, images }      — 1, 2 or 3 images in a row;
 *       `ratio` (e.g. "4 / 5") crops every image in the row to the same shape,
 *       leave it out to show images uncropped.
 * Projects without blocks still get a page (cover + services + next project).
 */
type Shot = { image: StaticImageData; alt: string };

export type ProjectBlock =
  | { type: "text"; title: string; paragraphs: string[] }
  | { type: "gallery"; cols: 1 | 2 | 3 | 4; ratio?: string; images: Shot[] };

export type Project = {
  slug: string;
  title: string;
  /** Short labels shown on the project cards and used by the filters */
  tags: string[];
  /** Card thumbnail, also the case-study cover unless `cover` is set */
  image: StaticImageData;
  cover?: StaticImageData;
  /** Listed under SERVICES on the case study (falls back to `tags`) */
  services?: string[];
  year?: string;
  /** Paragraphs shown under INFO next to the services */
  info?: string[];
  /** Optional external link shown under the services, e.g. the full Behance case study */
  link?: { label: string; href: string };
  blocks?: ProjectBlock[];
};

const text = (title: string, ...paragraphs: string[]): ProjectBlock => ({ type: "text", title, paragraphs });
const row = (cols: 1 | 2 | 3 | 4, images: Shot[], ratio?: string): ProjectBlock => ({ type: "gallery", cols, ratio, images });
/** The images of a Behance project as gallery rows, in the original order. */
const deck = (slug: string, label: string, cols: 1 | 2, from = 0): ProjectBlock[] => {
  const imgs = behance[slug].map((image, i) => ({ image, alt: `${label} — page ${i + 1}` })).slice(from);
  const rows: ProjectBlock[] = [];
  for (let i = 0; i < imgs.length; i += cols) rows.push(row(Math.min(cols, imgs.length - i) as 1 | 2, imgs.slice(i, i + cols)));
  return rows;
};
const be = (path: string) => ({ label: "Full project on Behance", href: `https://www.behance.net/gallery/${path}` });

export const projects: Project[] = [
  {
    slug: "adem-fitt",
    title: "Adem Fitt Group",
    tags: ["Brand Guidelines"],
    image: ademFitt,
    services: ["Art Direction", "Branding", "Brand Identity"],
    year: "2025",
    info: [
      "Adem Fitt Group is a multi-business group bringing together two distinct activities: Adem Fitt Tourism and Adem Fitt Auto X. The brand needed a visual system capable of presenting both businesses as independent entities while clearly communicating their connection to the same parent group.",
      "The identity is built around the AF monogram, supported by a shared navy-and-orange color palette and a consistent visual language. Each sub-brand uses its own adapted mark while retaining recognizable elements from the group identity.",
      "The system is designed to work across multiple touchpoints, from office signage and stationery to badges, tote bags, and staff uniforms, creating a consistent brand experience across physical and professional environments.",
    ],
    blocks: [
      row(1, [{ image: afGuidelines, alt: "Pages from the Adem Fitt brand guidelines: clear space, brand story, logo usage, typography and applications" }]),
      row(2, [
        { image: afLogoNavy, alt: "Adem Fitt Groupe logo in white and orange on navy" },
        { image: afFamily, alt: "The Adem Fitt brand family: group, Tourism and Auto X marks" },
      ], "16 / 9"),
      text(
        "Problem",
        "The challenge was to create a unified identity for multiple businesses with different activities without making them look identical or disconnected.",
        "Adem Fitt Tourism and Adem Fitt Auto X operate in different sectors and therefore require their own visual personalities. At the same time, both needed to be immediately recognizable as part of the Adem Fitt Group.",
        "The identity also needed to remain clear, recognizable, and adaptable across different applications and scales, from small staff badges to large-format signage.",
      ),
      row(1, [{ image: afStationery, alt: "Adem Fitt letterhead, business cards and pencils" }]),
      text(
        "Solution",
        "A flexible brand architecture was developed around a central AF monogram representing the parent group.",
        "Each business received a distinct mark derived from the same visual DNA, allowing the sub-brands to maintain their own identities while remaining visually connected. The shared navy-and-orange palette, typography, proportions, and graphic principles create consistency across the entire family.",
        "The resulting system provides a clear hierarchy: Adem Fitt Group → AF monogram → Tourism / Auto X.",
        "This approach creates a brand identity that is recognizable as one group, flexible across different businesses, and scalable across both digital and physical applications.",
      ),
      row(2, [
        { image: afStickers, alt: "Round Adem Fitt stickers in navy and white" },
        { image: afMerch, alt: "Adem Fitt tote bag, badge, desk flag and staff polo shirts" },
      ], "16 / 10"),
      row(1, [{ image: afSocial, alt: "Adem Fitt Tourism social media posts and app screen" }]),
    ],
  },
  {
    slug: "heetch",
    title: "Heetch",
    tags: ["Campaign", "Social Media"],
    image: heetch,
    services: ["Art Direction", "Campaign Design", "Social Media"],
    year: "2025",
    info: [
      "Heetch is a French ride-hailing platform operating across multiple markets, including Algeria. For this project, the focus was on developing localized promotional and city-launch visuals for the Algerian market.",
      "The campaign covered two objectives: promoting a 50% ride discount using the localized promo code “Erkeb50”, and announcing Heetch’s expansion into Ghardaïa. The visuals needed to remain recognizably Heetch while connecting with Algerian audiences through language, culture, and local visual references.",
    ],
    blocks: [
      row(3, [
        { image: hePromo, alt: "Heetch poster: 50% off with the promo code Erkeb50" },
        { image: heBillboard, alt: "Heetch Ghardaïa launch on a digital billboard in the old town at dusk" },
        { image: hePoster, alt: "Heetch Ghardaïa launch poster with a black car over the M’zab skyline" },
      ], "3 / 4"),
      text(
        "Problem",
        "The challenge was to communicate Heetch’s bold, energetic brand personality while making the campaign feel genuinely relevant to the Algerian market.",
        "The promotional campaign needed to capture attention quickly in crowded social-media feeds, while the Ghardaïa launch required a more location-specific approach that could celebrate the city’s distinctive cultural identity without losing Heetch’s visual language.",
        "The campaign also needed to work across French and Arabic, multiple formats, and different communication purposes while maintaining a coherent visual system.",
      ),
      row(1, [{ image: heWide, alt: "Heetch Ghardaïa launch key visual in magenta" }]),
      text(
        "Solution",
        "I developed a localized campaign system built around Heetch’s signature pink, combining high-contrast magenta-to-black gradients, condensed typography, diagonal graphic accents, and strong product-focused compositions.",
        "For the promotional campaign, the “Erkeb50” code became a central communication element, supported by Arabic treatments such as “Heetch Confort” to strengthen local brand recognition.",
        "For the Ghardaïa launch, I incorporated M’zab architecture, ochre tones, traditional clothing, and the city’s distinctive skyline into the compositions, reinterpreting these cultural elements through Heetch’s pink visual language.",
        "The result was a campaign system that balanced global brand consistency with local cultural relevance, allowing Heetch to communicate both as an established brand and as a service entering a specific Algerian community.",
      ),
      row(2, [
        { image: hePhone, alt: "Erkeb50 promotion shown on an Instagram feed on a phone" },
        { image: heConfort, alt: "“Heetch Confort” poster in Arabic with a passenger in a pink-lit car" },
      ], "4 / 5"),
    ],
  },
  {
    slug: "inpha-medis",
    title: "INPHA-MédiS 25th Anniversary",
    tags: ["Rebrand"],
    image: inpha,
    year: "2025",
    // TODO: the Framer page for this project still has template placeholder text — add the real story here.
    blocks: [
      row(1, [{ image: inStationery, alt: "INPHA-MédiS 25th anniversary stationery, mugs, calendar and tote bag" }]),
      row(1, [{ image: inBuilding, alt: "INPHA-MédiS 25 years banner on a glass office building at dusk" }]),
    ],
  },
  {
    slug: "ultra-rapide",
    title: "Ultra Rapide",
    tags: ["Brand Identity"],
    image: ultraRapide,
    services: ["Art Direction", "Brand Identity"],
    year: "2024",
    info: [
      "Ultra Rapide is an identity built around the idea of speed, movement, and instant action. The brand targets an active, fast-paced audience and uses a visual language designed to communicate velocity at first glance.",
      "The identity combines a dynamic sprinting figure, a bold italicized “ultra rapide” wordmark, and an energetic blue, yellow, and pink color palette. The brand voice reinforces the positioning through the French tagline: “Poussez-vous, ici on court ultra vite.”",
    ],
    blocks: [
      row(3, [
        { image: urTagline, alt: "“Poussez-vous, ici on court ultra vite !” in yellow on a dark motion-blurred background" },
        { image: urBottle, alt: "Blue Ultra Rapide water bottle in motion" },
        { image: urCap, alt: "Cream cap with the pink sprinting-figure icon in a blue bowl of lemons" },
      ], "4 / 5"),
      text(
        "Problem",
        "The challenge was to create a visual identity that could communicate speed and energy immediately, while remaining distinctive, readable, and adaptable across different brand applications.",
        "The brand needed more than simply a “fast” aesthetic. Its identity had to translate movement into a recognizable visual system, giving the business a strong personality while appealing to an audience that values speed, action, and efficiency.",
      ),
      row(1, [{ image: urTee, alt: "Ultra Rapide T-shirt, colour palette and logo on black" }]),
      text(
        "Solution",
        "I developed a speed-driven identity system centered around a sprinting figure that visually represents movement and urgency. The italicized wordmark reinforces this idea through its forward-leaning, energetic character.",
        "An electric blue and yellow foundation, supported by a vivid pink accent, creates a high-energy palette that gives the brand a playful yet highly visible presence. The colors and typography work together to create a sense of acceleration even in static applications.",
        "The tagline “Poussez-vous, ici on court ultra vite” extends the concept into the brand’s communication, giving the identity a confident and playful voice.",
        "The result is a high-velocity brand system where the icon, typography, color, and messaging all reinforce the same central idea: speed you can see.",
      ),
      row(1, [{ image: urKit, alt: "Ultra Rapide running vest, shorts, shoes and race bib on a track" }]),
      row(1, [{ image: urBillboard, alt: "Ultra Rapide tagline on a billboard outside a stadium" }]),
    ],
  },
  {
    slug: "twsel",
    title: "Twsel Express Logistics",
    tags: ["Brand Identity"],
    image: twsel,
    services: ["Art Direction", "Brand Identity"],
    year: "2026",
    info: [
      "Twsel Express is a logistics and delivery brand designed around the idea of movement, reliability, and scalability. The identity needed to function across a wide range of touchpoints, from small-format stationery to large-scale transportation and shipping applications.",
      "The visual system is centered around a “te” monogram enclosed within a square frame, supported by a navy-and-orange color palette. A custom typographic system and recurring wave pattern extend the identity across packaging, uniforms, vehicles, and marketing materials.",
    ],
    blocks: [
      row(2, [
        { image: twSheet, alt: "Twsel Express brand sheet: monogram construction, typeface, app icons and stationery" },
        { image: twHighway, alt: "Twsel Express delivery van on a coastal highway at sunset" },
      ], "3 / 4"),
      text(
        "Problem",
        "The challenge was to create a visual identity that could communicate trust and efficiency while remaining highly recognizable across very different physical scales.",
        "A logistics brand operates across numerous touchpoints, from business cards and documents to delivery vehicles and shipping containers. The identity therefore needed to remain simple, legible, and distinctive, even when reproduced at very large or very small sizes.",
        "It also needed to give Twsel Express a consistent visual language that could be extended beyond the logo itself.",
      ),
      row(1, [{ image: twTruck, alt: "Twsel Express branded truck at a loading dock" }]),
      text(
        "Solution",
        "I developed a scalable identity system built around the square “te” monogram. Its simple geometric construction allows the mark to remain immediately recognizable whether applied to stationery, uniforms, packaging, vehicles, or large freight containers.",
        "The navy-and-orange palette creates a balance between reliability and energy, while the custom typography establishes a consistent brand voice across communication materials.",
        "A recurring wave pattern was introduced as a secondary graphic element, reinforcing the ideas of movement, routes, and continuous flow while giving the brand additional visual recognition beyond the monogram.",
        "The result is a flexible logistics identity designed to travel with the business, maintaining consistency from the smallest piece of stationery to the largest transportation surface.",
      ),
      row(2, [
        { image: twFlag, alt: "Twsel Express flag against a blue sky" },
        { image: twContainer, alt: "Twsel Express label on a shipping container" },
      ], "3 / 4"),
      row(1, [{ image: twApps, alt: "Twsel Express stationery, envelope, truck and containers" }]),
    ],
  },
  {
    slug: "innovea",
    title: "INNOVEA Labs",
    tags: ["Brand Identity", "Brand Guidelines"],
    image: innovea,
    services: ["Art Direction", "Brand Identity", "Event Branding"],
    year: "2025",
    info: [
      "Innovea Laboratoires is a pharmaceutical and healthcare research company requiring a full brand identity to reflect its position in scientific innovation and clinical excellence.",
      "The brief called for a complete visual system — logo, color palette, typography, and brand applications — professional and credible enough for a pharmaceutical audience, while still feeling modern and distinct within a fairly conservative industry.",
    ],
    blocks: [
      row(2, [
        { image: inoEvent, alt: "INNOVEA event stage, roll-up banner and branded cup" },
        { image: inoLaptop, alt: "INNOVEA V monogram on a laptop and on an electric-blue grid" },
      ], "1 / 1"),
      text(
        "Concept",
        "I designed the identity around a refined “V” monogram, rendered as a sharp, faceted mark that reads as both a laboratory instrument and a mark of precision — evoking accuracy, trust, and scientific rigor.",
        "A deep navy and metallic silver-blue palette grounds the brand in credibility and clinical professionalism, while a secondary electric blue adds energy and a more contemporary, tech-forward edge.",
        "The wordmark pairs a clean, confident “INNOVEA” with a lighter tracked “LABORATOIRES” beneath it, keeping the full name legible and formal across all applications. The system was built to move fluidly between corporate, scientific, and event contexts without losing its identity.",
      ),
      row(1, [{ image: inoLogo, alt: "INNOVEA logo system: primary lockup, monogram and colour reversals" }]),
      text(
        "Solution",
        "I developed the identity as a comprehensive brand system, starting with the primary and secondary logo lockups, monogram variations, and full color and reversal guidelines to ensure consistency across dark and light backgrounds alike.",
        "From there, I extended the identity into real-world applications: laboratory and office photography treatments, a branded PowerPoint presentation template for internal and client-facing decks, corporate stationery, and large-scale event branding, including exhibition booth graphics, backlit signage, and digital screens for trade shows and conferences.",
        "Typography and color-coding rules were also defined to keep primary and secondary type usage consistent across every touchpoint, from a printed folder to a laboratory backdrop.",
      ),
      row(1, [{ image: inoSignage, alt: "INNOVEA Laboratoires sign on a textured wall in sunlight" }]),
      text(
        "Guidelines",
        "The system is documented in a full brand book: logo orientation and construction grid, a wordmark based on Poppins and refined to be more geometric, primary and secondary colour palettes, brand patterns, typography, and rules for incorrect logo use.",
      ),
      ...deck("innovea", "INNOVEA brand guidelines", 2),
    ],
  },
  {
    slug: "dikra-madjdouline",
    title: "Dikra Madjdouline",
    tags: ["Brand Identity", "Brand Guidelines"],
    image: behance["dikra-madjdouline"][0],
    services: ["Brand Identity", "Logo Design", "Brand Guidelines"],
    year: "2026",
    info: [
      "A complete, editorial brand identity system for Dikra Madjdouline, a personal lash and brow studio. The identity is built around a delicate “dm” monogram, a warm palette of blush, cream, ink black and gold, and a soft, precise, unmistakably feminine tone.",
      "The 15-page guideline covers the full visual language: logo suite and clear-space rules, colour palette, typography, supporting motifs, photography direction, brand voice, and real-world applications across social media and stationery.",
      "Soft natural light, warm tones and room to breathe — detail over drama throughout. Designed to feel calm, refined and reassuring: where a steady hand becomes quiet beauty.",
    ],
    link: be("252455061/Dikra-Madjdouline-Lash-Brow-Studio-Brand-Identity"),
    blocks: deck("dikra-madjdouline", "Dikra Madjdouline brand guidelines", 2, 1),
  },
  {
    slug: "ariadne",
    title: "Ariadne",
    tags: ["Brand Identity"],
    image: behance.ariadne[0],
    services: ["Brand Identity", "Logo Design"],
    year: "2024",
    info: [
      "Ariadne is a youthful clothing brand. The brief was to create a memorable brand identity with a minimalist, modern logo — simple, effective, and appealing to a young, progressive audience — built on three principles: comfort, relevance to fashion trends, and expression of individuality.",
    ],
    link: be("208883737/Ariadne-Clothing-Brand-Identity"),
    blocks: [
      text(
        "Solution",
        "The wordmark features a distinctive stylized “A”, the first letter of the brand name, while the “R” is drawn in a cursive style that adds a touch of elegance and sophistication. This stylized “R” becomes the key element of the identity — a simple, memorable symbol of the brand’s commitment to quality.",
        "A predominantly monochromatic colour scheme with a single red accent balances individuality with current fashion trends, giving Ariadne a modern, distinctive presence.",
      ),
      ...deck("ariadne", "Ariadne brand identity", 1, 1),
    ],
  },
  {
    slug: "hiba-co",
    title: "Hiba & Co",
    tags: ["Brand Identity", "Packaging"],
    image: behance["hiba-co"][4],
    services: ["Brand Identity", "Logo Design", "Packaging"],
    year: "2023",
    info: [
      "Hiba & Co is a fashion studio that relies solely on natural materials, imported and manufactured with care. Its slogan, “Made with soul”, sets the tone for the whole identity.",
    ],
    link: be("162190171/Hiba-Co-Fashion-Studio-Brand-Identity"),
    blocks: [
      text(
        "Solution",
        "The logotype was fully hand-lettered — simple but elegant, to convey a sense of glamour and refinement — and paired with Playfair Display for supporting typography.",
        "A warm palette of brown, off-white, coral and black carries the identity across shopping bags, garment tags, stickers and apparel, with black, colour and white versions of the logo for every background.",
      ),
      ...deck("hiba-co", "Hiba & Co brand identity", 1),
    ],
  },
  {
    slug: "algerie-poste",
    title: "Algérie Poste — Chlef",
    tags: ["Packaging", "Rebrand"],
    image: behance["algerie-poste"][5],
    services: ["Packaging", "Print Production"],
    year: "2023",
    info: [
      "Algérie Poste is a public establishment of an industrial and commercial nature, operating both as a mail operator and as a financial institution.",
      "Its subsidiary in the Wilaya of Chlef requested a rebrand of their adhesive duct tape: a more detailed version carrying the agency’s name, to distinguish it from the other subsidiaries of the Algerian postal service.",
    ],
    link: be("184022385/Algerian-Postal-Service-Adhesive-Duct-Tape-rebranding"),
    blocks: [
      text(
        "Solution",
        "Blue and yellow ribbons were added beneath the logo, alongside the agency’s name, making the tape unique to Chlef while staying unmistakably Algérie Poste.",
        "Colours were separated and supplied as a production-ready PDF so the printing machine could read and colour each part accurately.",
      ),
      ...deck("algerie-poste", "Algérie Poste duct tape", 1),
    ],
  },
  {
    slug: "power-limb",
    title: "Power Limb",
    tags: ["Packaging"],
    image: behance["power-limb"][7],
    services: ["Packaging", "Illustration"],
    year: "2023",
    info: [
      "Power Limb is an Algerian company that provides and manufactures prosthetic and orthotic limbs for people with disabilities. They requested a design for the adhesive tape they seal their packages with.",
    ],
    link: be("186059523/Power-Limb-Prosthetic-Orthotic-Adhesive-tape-Design"),
    blocks: [
      text(
        "Solution",
        "The tape carries a subtitle explaining the company’s mission and an illustration of Algiers’ Martyrs’ Memorial to represent the company’s Algerian identity.",
        "The logo of Flash Graphic, the tape manufacturer, sits on the inner side as a watermark.",
      ),
      ...deck("power-limb", "Power Limb adhesive tape", 2),
    ],
  },
  {
    slug: "a-plus-english",
    title: "A+ English",
    tags: ["Brand Identity", "Brand Guidelines"],
    image: behance["a-plus-english"][0],
    services: ["Brand Identity", "Brand Guidelines"],
    year: "2023",
    info: ["Brand identity and guidelines for A+ English, a language school."],
    link: be("178029797/A-English-Brand-Identity-and-Guidelines"),
    blocks: deck("a-plus-english", "A+ English brand guidelines", 2, 1),
  },
  {
    slug: "vitasens",
    title: "Vitasens",
    tags: ["Brand Identity", "Brand Guidelines"],
    image: behance.vitasens[0],
    services: ["Brand Identity", "Brand Guidelines"],
    year: "2023",
    info: ["Brand identity and guidelines for Vitasens: logo build-up and grid, colours, patterns and applications."],
    link: be("176829177/Vitasesns-Brand-Identity-and-Guidelines"),
    blocks: deck("vitasens", "Vitasens brand identity", 1, 1),
  },
  {
    slug: "glow-body",
    title: "Glow Body Clinic",
    tags: ["Brand Identity", "Brand Guidelines"],
    image: behance["glow-body"][0],
    services: ["Brand Identity", "Brand Handbook"],
    year: "2023",
    info: ["Brand handbook for Glow Body, a surgery clinic — a brand meant to feel safe, compassionate, efficient, professional and caring. It covers the logo build-up, typography (Magnia and Gotham), colour palette and stationery."],
    link: be("165251291/Glow-Body-Surgery-Clinic-Brand-Handbook"),
    blocks: deck("glow-body", "Glow Body brand handbook", 1, 1),
  },
  {
    slug: "esook",
    title: "eSook",
    tags: ["Brand Identity"],
    image: behance.esook[0],
    services: ["Brand Identity", "UI/UX"],
    year: "2023",
    info: ["Brand identity for eSook, a digital marketplace: logo, icon build-up, Montserrat typography, colours, logo variations and mobile app mock-ups."],
    link: be("161867871/eSook-Digital-Marketplace-brand-identity"),
    blocks: deck("esook", "eSook brand identity", 1, 1),
  },
  {
    slug: "lekna",
    title: "Lekna Space",
    tags: ["Brand Identity"],
    image: behance.lekna[0],
    services: ["Brand Identity", "Logo Design"],
    year: "2022",
    info: ["Brand identity for Lekna Space, a language school: logo and structure, logo variations, colours and gradient, subsidiaries, social media, business cards and T-shirts."],
    link: be("159873283/Lekna-school-Brand-Identity"),
    blocks: deck("lekna", "Lekna Space brand identity", 1, 1),
  },
  {
    slug: "green-burger",
    title: "Green Burger",
    tags: ["Brand Identity"],
    image: behance["green-burger"][0],
    services: ["Logo Design", "Brand Identity"],
    year: "2024",
    info: ["Brand identity for Green Burger, a healthy-snacks restaurant."],
    link: be("197551573/Green-Burger-Restaurent-Brand-Identity"),
    blocks: [],
  },
  {
    slug: "playing-cards",
    title: "Ace — Playing Cards",
    tags: ["Illustration", "Packaging"],
    image: behance["playing-cards"][0],
    services: ["Illustration", "Packaging"],
    year: "2023",
    info: ["A minimal deck of playing cards built from geometric shapes: a logo, gradient colours, suit build-ups, a textured card back and box packaging."],
    link: be("160399265/A-Minimal-playing-cards-deck-Oussama-A"),
    blocks: deck("playing-cards", "Ace playing cards", 1, 1),
  },
  {
    slug: "gradient-lettering",
    title: "Abstract Gradient Lettering",
    tags: ["Illustration"],
    image: behance["gradient-lettering"][2],
    services: ["Lettering", "Illustration"],
    year: "2024",
    info: ["A series of abstract lettering pieces with gradient colour."],
    link: be("195245921/Abstract-Gradient-Lettering"),
    blocks: deck("gradient-lettering", "Abstract gradient lettering", 2),
  },
  {
    slug: "sonatrach-60",
    title: "Sonatrach 60th Anniversary",
    tags: ["Brand Identity"],
    image: behance["sonatrach-60"][0],
    services: ["Brand Identity", "Brand Guidelines"],
    year: "2022",
    info: ["A 60th-anniversary brand identity for Sonatrach, with guidelines covering logo, colours, typography, variations and mock-ups."],
    link: be("158992267/Sonatrach-60th-anniversary-brand-identity"),
    blocks: deck("sonatrach-60", "Sonatrach 60th anniversary identity", 1, 1),
  },
  {
    slug: "sisters",
    title: "Sisters",
    tags: ["Brand Identity", "Packaging"],
    image: behance.sisters[0],
    services: ["Brand Identity", "Packaging"],
    year: "2022",
    info: ["Brand identity for Sisters, a brand sewing Islamic headscarves: logo, fonts, colours, pattern, tags and packaging."],
    link: be("153905643/Sisters-Brand-Sewing-Islamic-Headscarves"),
    blocks: deck("sisters", "Sisters brand identity", 1, 1),
  },
  {
    slug: "faridas-halawiyat",
    title: "Farida’s Halawiyat",
    tags: ["Brand Identity"],
    image: behance["faridas-halawiyat"][0],
    services: ["Brand Identity"],
    year: "2022",
    info: ["Brand identity for Farida’s Halawiyat, a bakery shop."],
    link: be("146785449/Faridas-Halawiyat-Bakery-Shop-Brand-Identity"),
    blocks: deck("faridas-halawiyat", "Farida’s Halawiyat brand identity", 1, 1),
  },
  {
    slug: "scary-cupcake",
    title: "Scary Cupcake",
    tags: ["Brand Identity", "Illustration"],
    image: behance["scary-cupcake"][0],
    services: ["Logo Design", "Illustration"],
    year: "2022",
    info: ["Brand identity for Scary Cupcake, a bakery shop."],
    link: be("143805433/Scary-Cupcake-Bakery-Shop"),
    blocks: deck("scary-cupcake", "Scary Cupcake brand identity", 2, 1),
  },
  {
    slug: "animal-logos",
    title: "Animal Shapes Logos",
    tags: ["Logo Design"],
    image: behance["animal-logos"][0],
    services: ["Logo Design"],
    year: "2022",
    info: ["A set of logo concepts built from animal shapes."],
    link: be("147436869/Animal-shapes-logo-concepts"),
    blocks: deck("animal-logos", "Animal shapes logo concepts", 1, 1),
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/**
 * Categories on the Works page. Each one shows the case studies whose tags match,
 * then the extra pieces from the matching `archive` group.
 */
export const workCategories: { label: string; tags: string[]; archive?: string }[] = [
  { label: "Brand Identity", tags: ["Brand Identity", "Brand Guidelines", "Rebrand", "Logo Design"] },
  { label: "Logofolio", tags: [], archive: "Logofolio" },
  { label: "Packaging", tags: ["Packaging"], archive: "Packaging" },
  { label: "Social Media", tags: ["Social Media", "Campaign"], archive: "Social Media" },
  { label: "Print", tags: ["Print"], archive: "Print & Medals" },
  { label: "UI/UX & Web", tags: ["UI/UX", "Web"], archive: "UI/UX & Web" },
  { label: "Illustration & Posters", tags: ["Illustration"], archive: "Posters & Apparel" },
  { label: "Web Banners", tags: ["Web Banners"], archive: "Web Banners" },
];

export const services = [
  {
    title: "Brand Identity",
    image: afLogoNavy as StaticImageData | null,
    phone: null as StaticImageData | null,
    text: "I develop cohesive brand systems that go beyond logos—defining how your brand looks, feels, and communicates. The result is a distinct, memorable identity that builds trust and stands out in a crowded market.",
  },
  {
    title: "Social Media & Campaigns",
    image: hePromo,
    phone: null,
    text: "I design scroll-stopping social content and campaign visuals—from monthly calendars to product launches and city openings—built on a clear system so every post strengthens the brand and drives engagement.",
  },
  {
    title: "Packaging & Print",
    image: servicePackaging,
    phone: null,
    text: "From dielines and labels to roll-ups, medals and large-format signage, I prepare print-ready work that looks as good on the shelf as it does on screen, with the production know-how to get it printed right.",
  },
  {
    title: "UI/UX & Web Design",
    image: null,
    phone: ibMobile,
    text: "I design intuitive, visually engaging websites that balance aesthetics with functionality. Every experience is tailored to guide users effortlessly while reinforcing your brand and driving meaningful interaction.",
  },
];

export const process = [
  { title: "Discovery", text: "I take time to understand your brand, objectives, and audience, gathering the insights needed to inform a clear and thoughtful direction." },
  { title: "Strategy", text: "I shape a focused plan that aligns ideas, messaging, and structure, ensuring every creative decision is intentional and effective." },
  { title: "Design", text: "I translate strategy into strong visual outcomes, crafting work that is both engaging and purposeful across every touchpoint." },
  { title: "Delivery", text: "I prepare and launch with care, delivering polished assets that are consistent, functional, and ready to perform in the real world." },
];

// Add more testimonials here — the slider arrows enable themselves.
export const testimonials = [
  {
    quote:
      "Working with them was seamless from start to finish. They understood our vision, elevated it with thoughtful design, and delivered results that truly set our brand apart.",
    name: "Nihad Ahmed Bensoltane",
    role: "Head of AMS Agency",
    image: nihad,
  },
];

export type Stat = { value: number; decimals?: number; suffix: string; label: string; text: string };

// Every number here is backed by the CV — update them as they grow.
export const stats: Stat[] = [
  { value: 7, suffix: "+", label: "years of experience", text: "Branding, social media, print and UI/UX design since 2017." },
  { value: 14, suffix: "+", label: "brands & clients", text: "From Heetch and Beko to AMS Groupe and INPHA-MédiS." },
  { value: 2.7, decimals: 1, suffix: "K+", label: "stock assets published", text: "Graphic assets designed for Freepik and Adobe Stock." },
  { value: 85, suffix: "K+", label: "downloads worldwide", text: "Assets downloaded by designers around the world." },
];

// Newest first
export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: StaticImageData;
  /** Short line under the title */
  dek?: string;
  /** Body, top to bottom: paragraphs and images */
  body: ({ p: string } | { img: StaticImageData; alt: string })[];
  source?: { label: string; href: string };
};

export const articles: Article[] = [
  {
    slug: "why-algerian-art-deserves-its-own-magazine",
    title: "Why Algerian Art Deserves Its Own Magazine",
    category: "Design",
    date: "Oct 4, 2026",
    image: artAlgerian,
    dek: "The Algérian is a concept art magazine that puts Algerian paintings and the stories behind them on the cover.",
    body: [
      { img: jAlgerian1, alt: "The Algérian magazine covers" },
      { p: "What if Algeria had its own art magazine? The Algérian is a concept I designed to explore exactly that. It celebrates Algerian art through paintings, artists and the stories behind them, inspired by The Barcelonian Illustrated." },
      { img: jAlgerian2, alt: "The Algérian magazine mock-up" },
      { p: "Every issue is built around a single painting. Issue 001 features a girl with a striped headscarf and a bowl of pomegranates, and Issue 002 features a portrait by Antonio Zeno Shindler. A bold slab serif masthead and a dark spine strip keep the cover simple, so the artwork does the talking." },
      { p: "It is still just an idea, but I wanted to see how it would feel in real life. So I designed the covers and built mockups in a café and on a bookstore shelf. Algerian art deserves to be held, collected and talked about." },
    ],
  },
  {
    slug: "why-discount-doesnt-have-to-mean-boring",
    title: "Why “Discount” Doesn’t Have to Mean “Boring”",
    category: "Design",
    date: "Aug 8, 2026",
    image: artFraenk,
    dek: "How Make Studio’s fraenk rebrand turned a budget mobile tariff into a sharp, memorable identity.",
    body: [
      { img: jFraenk1, alt: "fraenk rebrand by Make Studio" },
      { p: "Fraenk is Deutsche Telekom’s app-only mobile tariff, and Make Studio’s rebrand proves that a discount brand can still have personality. Instead of shouting louder on price, which is the usual discount playbook, they took the brand’s old principle of “radically unspectacular” and made it sharper: “spectacularly simple.”" },
      { img: jFraenk2, alt: "fraenk typography and illustrations" },
      { p: "The logo is no longer the hero. Type is. The “æ” ligature was redrawn to feel like two letters giving each other a warm hug, and a custom headline typeface built on Displaay’s Greed carries the personality across every touchpoint. Icons were replaced with a set of playful illustrated doodles." },
      { p: "The result is more than just prettier. Brand perception rose by more than 30% among people who already knew fraenk, and willingness to recommend more than doubled. It is a great reminder that “simple” and “forgettable” are not the same thing." },
    ],
  },
  {
    slug: "ikea-turned-the-football-wall-into-a-sofa-sale",
    title: "IKEA Turned the Football Wall Into a Sofa Sale",
    category: "Design",
    date: "Jul 16, 2026",
    image: artIkea,
    body: [
      { img: jIkea1, alt: "IKEA FLAT OUT campaign" },
      { p: "On a free kick, one defender lies flat behind the wall to block shots under the jump. IKEA Saudi Arabia looked at that pose and saw a man lounging on an invisible sofa. That became FLAT OUT, a real-time campaign made with local franchisee Alsulaiman and Memac Ogilvy during the World Cup." },
      { img: jIkea2, alt: "IKEA FLAT OUT campaign visual" },
      { p: "The game was simple. Spot the moment a player lies down, take a photo, and send it to IKEA by direct message. You get an instant discount on a sofa, and the percentage matches the player’s shirt number. Number 7 gives 7% off, number 21 gives 21%. Every free kick became a small bet." },
      { p: "The smart part is the cost. No TV rights, no FIFA sponsorship, no star players, so the production costs almost nothing while the visibility is huge. And to claim the voucher, people share their email and phone number right when they want a sofa. IKEA didn’t just give a discount, it collected qualified leads." },
    ],
  },
  {
    slug: "studio-blackburn-ellis-butchers",
    title: "Studio Blackburn Gives Ellis Butchers a Cast of Characters From Meat",
    category: "Design",
    date: "Jan 12, 2026",
    image: artStandard,
    dek: "Ripping up the butcher-branding rulebook.",
    body: [
      { img: jEllis1, alt: "Ellis Butchers identity by Studio Blackburn" },
      { p: "No livestock silhouettes. No cut charts. Studio Blackburn ripped up the butcher-branding rulebook for Ellis Butchers." },
      { img: jEllis2, alt: "Ellis Butchers meat characters" },
      { p: "Instead of humanising the animal, they humanised the meat — giving cuts of meat their own legs, led by a mascot called Meat Ellis, a cast of characters wholesome, unexpected and genuinely fun." },
      { p: "Two shops, one parent brand, two distinct personalities — proof that identity systems can flex by neighbourhood without losing coherence." },
    ],
    source: { label: "Full project", href: "https://lnkd.in/dBnTxXWh" },
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const clients = [
  { name: "Flash Graphic", image: logo01 },
  { name: "Heetch", image: logo02 },
  { name: "INNOVEA Laboratory", image: logo03 },
  { name: "Akyol Medical International", image: logo04 },
  { name: "Pulse", image: logo05 },
  { name: "Buzz", image: logo06 },
  { name: "INPHA-MédiS", image: logo07 },
  { name: "AMS Groupe", image: logo08 },
  { name: "AMS Agency", image: logo09 },
  { name: "Twsel Express", image: logo10 },
  { name: "Hiba & Co", image: logo11 },
  { name: "Beko", image: logo12 },
  { name: "Adem Fitt Groupe", image: logo13 },
  { name: "Telecoming", image: logo14 },
];

// Personal visual explorations shown on the About page
export const explorations = [explore1, explore2, explore3, explore4, explore5];

export const about = {
  intro:
    "Hi, I’m Ouss — a multidisciplinary graphic designer with 7+ years of experience across branding, visual communication, UI/UX design and social media content. I strengthen brand identities, grow engagement and deliver high-impact digital and print work.",
  approach:
    "I believe great design sits at the intersection of function and emotion. Every decision is guided by clarity, usability, and impact—ensuring that the final product communicates effectively while delivering a seamless user experience. AI-assisted tools are part of my process too: they speed up exploration and production, while the craft and the brand always stay in charge.",
  tools: ["Photoshop", "Illustrator", "InDesign", "Premiere Pro", "Figma", "Framer"],
  aiTools: ["Adobe Firefly", "ChatGPT", "Gemini", "Leonardo AI", "Freepik AI", "Higgsfield AI", "Google Whisk", "Google AI Studio", "Nano Banana Pro"],
  languages: ["Arabic", "English", "French", "German"],
};

export const experience = [
  {
    company: "AMS Group SPA",
    href: "https://amsgroupes.com",
    role: "Multidisciplinary Graphic Designer",
    period: "03/2024 — Present",
    points: [
      "Create visual assets for digital and print communication.",
      "Ensure branding consistency across social media and marketing channels.",
      "Support marketing teams with creative concepts and visual execution.",
      "Integrate AI-assisted tools to accelerate concept development, visual exploration and production while maintaining brand integrity.",
    ],
  },
  {
    company: "EURL Flash Graphic",
    href: "https://www.flashgraphic.net",
    role: "Multidisciplinary Graphic Designer & Social Media Manager",
    period: "09/2021 — 03/2024",
    points: [
      "Developed branding materials, packaging designs and marketing visuals.",
      "Designed and managed social media content for Facebook, Instagram and LinkedIn.",
      "Increased customer engagement by 30% within 6 months through targeted campaigns.",
      "Maintained and updated the company website and online store.",
      "Operated Roland large-format printers and handled pre-press preparation.",
    ],
  },
  {
    company: "University of Health Sciences, Algiers",
    role: "Freelance Designer & Design Instructor",
    period: "02/2022 — 11/2024",
    points: [
      "Created visual materials for university programs, events and digital channels.",
      "Delivered workshops on graphic design fundamentals at the Startup Incubator.",
      "Supervised student design projects to ensure professional standards.",
      "Used AI-assisted tools to speed up visual ideation and concept development.",
    ],
  },
  {
    company: "IB Digital (Belgium, remote)",
    href: "https://ib-digital.com",
    role: "UI/UX Designer",
    period: "02/2022 — 11/2022",
    points: [
      "Designed landing pages, website previews and UI components.",
      "Improved usability and interface consistency across digital platforms.",
      "Optimized existing websites for better user experience and brand alignment.",
    ],
  },
  {
    company: "Freepik & Adobe Stock",
    role: "Graphic Assets Designer",
    // TODO: add the year both accounts closed, e.g. "09/2021 — 2025"
    period: "From 09/2021",
    points: [
      "Reached Level 3 contributor on Freepik with 2.7K+ published assets and 85K+ downloads.",
      "Published 500+ assets on Adobe Stock.",
      "Created templates, illustrations, patterns, icons and editable resources.",
      "Now selling digital assets directly on Gumroad.",
    ],
  },
  {
    company: "AIESEC in Algeria (Tlemcen)",
    role: "Graphic Designer & Team Leader",
    period: "02/2019 — 08/2020",
    points: [
      "Led a creative team producing digital and print visual materials.",
      "Designed graphics, event branding and communication assets.",
    ],
  },
  {
    company: "Merch Digger (Merch by Amazon)",
    role: "Graphic Designer",
    period: "10/2018 — 08/2020",
    points: [
      "Designed branding materials and visual content for products and marketing.",
      "Collaborated with team members to maintain a consistent visual identity.",
    ],
  },
  {
    company: "Freelance",
    role: "Graphic Designer",
    period: "2017 — Present",
    points: [
      "Logos, posters, banners, social media content and brand identities.",
      "Identity design for Innovea Labs, A+ English School, Dikra Madjdouline Beauty Salon, Lekna Space Languages School, Pulse University Club Algiers, Stoflish University Club Tlemcen and others.",
      "Motion graphics and social media visuals for Heetch.",
    ],
  },
] as { company: string; href?: string; role: string; period: string; points: string[] }[];

export const education = [
  { school: "International Media Academy", title: "Professional Trainer — Infographic Design", period: "2025", note: "50 hours · MARAS 2025 session. Certified trainer in infographic design and visual information structuring." },
  { school: "University of Tlemcen", title: "Master’s Degree in Sociolinguistics", period: "2018 — 2020", note: "Thesis: Social factors and their effects on language use on the internet." },
  { school: "University of Tlemcen", title: "Bachelor’s Degree in English Language & Literature", period: "2015 — 2018", note: "Thesis: English between social media and language learners." },
] as { school: string; title: string; period: string; note?: string }[];

/**
 * "More work" archive on the Works page. Each discipline picks a presentation:
 *   logos   — logo cards on their brand background
 *   posts   — social posts in a masonry wall
 *   mockups — packaging, print and banners shown as product / roll-up / billboard / screen mockups
 *   posters — framed prints
 *   web     — laptop + phone mockups (see webProjects)
 */
type Piece = { image: StaticImageData; alt: string; bg?: string };
export type ArchiveGroup = { title: string; kind: "logos" | "posts" | "posters" | "web" | "mockups"; items: Piece[]; mocks?: Mock[] };

export const archive: ArchiveGroup[] = [
  { title: "Logofolio", kind: "logos", items: [
    { image: w_logo_01, alt: "Accordons nos violons logo", bg: "#eeeeee" },
    { image: w_logo_02, alt: "Adem Fitt Groupe logo", bg: "#eeeeee" },
    { image: w_logo_03, alt: "Buzz logo", bg: "#eeeeee" },
    { image: w_logo_04, alt: "Twsel Express logo", bg: "#eeeeee" },
    { image: w_logo_05, alt: "INNOVEA Laboratory logo", bg: "#eeeeee" },
    { image: w_logo_06, alt: "Ariadne logo", bg: "#eeeeee" },
    { image: w_logo_07, alt: "AMS Technologie logo", bg: "#eeeeee" },
    { image: w_logo_08, alt: "AMS Modulaires logo", bg: "#eeeeee" },
    { image: w_logo_09, alt: "Medsim logo", bg: "#eeeeee" },
    { image: w_logo_10, alt: "Green Burger logo", bg: "#eeeeee" },
    { image: w_logo_11, alt: "FrancoNet logo", bg: "#eeeeee" },
    { image: w_logo_12, alt: "Citrus Energy Drinks logo", bg: "#eeeeee" },
    { image: w_logo_13, alt: "Crust & Cup logo", bg: "#eeeeee" },
    { image: w_logo_14, alt: "Green Soup logo", bg: "#eeeeee" },
    { image: w_logo_15, alt: "Centella logo", bg: "#eeeeee" },
  ] },
  { title: "Social Media", kind: "posts", items: [
    { image: w_post_01, alt: "AMS Agency end-of-year gifts post" },
    { image: w_post_02, alt: "AMS Agency Movember post" },
    { image: w_post_03, alt: "AMS Agency packaging post" },
    { image: w_post_04, alt: "AMS Agency brand post" },
    { image: w_post_05, alt: "AMS Groupe Mother’s Day post" },
    { image: w_post_06, alt: "AMS Groupe Independence Day post" },
    { image: w_post_07, alt: "AMS Groupe Blue November post" },
    { image: w_post_08, alt: "AMS Groupe 1 November 1954 post" },
    { image: w_post_09, alt: "Capilos Colors product ad" },
    { image: w_post_10, alt: "Capilos Colors hair campaign" },
    { image: w_post_11, alt: "Capilos Colors shades campaign" },
    { image: w_post_12, alt: "Capilos Colors swirl campaign" },
    { image: w_post_13, alt: "Adem Fitt Tourism Algiers trip post" },
    { image: w_post_14, alt: "Adem Fitt Tourism summer post" },
    { image: w_post_15, alt: "Adem Fitt Tourism explore post" },
    { image: w_post_16, alt: "Adem Fitt Tourism travel post" },
    { image: w_post_17, alt: "INPHA-MédiS 1 November post" },
    { image: w_post_18, alt: "INPHA-MédiS disability day post" },
    { image: w_post_19, alt: "INPHA-MédiS world diabetes day post" },
    { image: w_post_20, alt: "INPHA-MédiS screening post" },
    { image: w_post_21, alt: "Flash Graphic roll-up banner post" },
    { image: w_post_22, alt: "Flash Graphic DHL tape post" },
    { image: w_post_23, alt: "Pulse suture training post" },
    { image: w_post_24, alt: "Pulse nursing training post" },
    { image: w_post_25, alt: "AIESEC global aspect post" },
  ] },
  { title: "Packaging", kind: "mockups", items: [], mocks: [
    { kind: "box", front: boxLtFront, side: boxLtSide, top: "#0b100d", alt: "La Trasse Dubai chocolate box", bg: "linear-gradient(160deg, #2f5d4a, #0f2a20)" },
    { kind: "box", front: boxDyFront, side: boxDySide, top: "#9aa42b", alt: "Doubby dôr pistachio chocolate box", bg: "linear-gradient(160deg, #f3f0dc, #d9d3a8)" },
    { kind: "box", front: boxDgFront, side: boxDgSide, top: "#0f5f45", alt: "Doubby dôr chocolate box, green edition", bg: "linear-gradient(160deg, #e1efe8, #b9d6c7)" },
    { kind: "photo", image: w_pack_infinix_box, alt: "Infinix Hot 20S × PUBG Mobile special-edition box" },
    { kind: "photo", image: w_pack_doubby_mockup, alt: "Doubby dôr chocolate bar on a wooden table" },
    { kind: "product", image: cutHoney, alt: "My Honey “secret recipe” jar", bg: "radial-gradient(90% 80% at 50% 30%, #f6d88a, #d79a2b)" },
    { kind: "product", image: cutRivanoBuckets, alt: "Rivano Fix Primer paint buckets", bg: "radial-gradient(90% 80% at 50% 30%, #f1f3f8, #c9d0df)" },
    { kind: "product", image: cutRivanoPails, alt: "Rivano Fix Primer pails", bg: "radial-gradient(90% 80% at 50% 30%, #ffe0dc, #e9a8a0)" },
  ] },
  { title: "Print & Medals", kind: "mockups", items: [], mocks: [
    { kind: "rollups", images: [w_print_netto_magic, w_print_netto_star], alt: "Netto Magic and Netto Star roll-up banners", bg: "linear-gradient(180deg, #f2efe9 0 74%, #ddd6ca 74%)" },
    { kind: "billboard", image: w_print_netto_banner, alt: "Netto Star & Magic billboard", bg: "linear-gradient(180deg, #8fc6ef, #d8eefb 70%, #c9d8c2 70%)" },
    { kind: "billboard", image: w_print_alaksa_halwa, alt: "Al Aksa Halwa Turc billboard", bg: "linear-gradient(180deg, #f6b779, #fbe3c4 70%, #d7c7a8 70%)" },
    { kind: "billboard", image: w_print_alaksa_tartilla, alt: "Al Aksa Tartilla billboard", bg: "linear-gradient(180deg, #6f87b6, #c3d0ea 70%, #b9b5a3 70%)" },
    { kind: "worn", medal: cutMedal1, garment: "singlet", color: "#e2262c", trim: "#fff", ribbon: ["#e2262c", "#f7c600", "#e2262c"], bg: "linear-gradient(160deg, #f6efe4, #e3d6c2)", alt: "COS 2024 race medal" },
    { kind: "worn", medal: cutMedal2, garment: "tee", color: "#f4f4f2", trim: "#1d9ad6", ribbon: ["#1d9ad6", "#ffffff", "#1d9ad6"], bg: "linear-gradient(160deg, #cfe9f8, #8fc6e8)", alt: "CAMA 10 km Kouba medal" },
    { kind: "worn", medal: cutMedal3, garment: "tee", color: "#1b1b1d", trim: "#000", ribbon: ["#006233", "#ffffff", "#d21034", "#ffffff", "#006233"], bg: "linear-gradient(160deg, #e7b48f, #b8643a)", alt: "Algiers Urban Trail medal" },
    { kind: "worn", medal: cutMedal4, garment: "stripes", color: "#1f2f5c", trim: "#f3f1ea", ribbon: ["#1f2f5c", "#ffffff", "#1f2f5c"], bg: "linear-gradient(160deg, #bfe3ef, #5ea6c4)", alt: "Nautical 2024 medal" },
    { kind: "worn", medal: cutMedal5, garment: "jacket", color: "#f07a1a", trim: "#2a2a2a", ribbon: ["#2a2a2a", "#f07a1a", "#2a2a2a"], bg: "linear-gradient(160deg, #cfd3d6, #7d858c)", alt: "Trail Azro N’Thor winner medal" },
    { kind: "worn", medal: cutMedal6, garment: "kid", color: "#4fae4a", trim: "#2c6e2a", ribbon: ["#1aa3d9", "#7bc043", "#1aa3d9"], bg: "linear-gradient(160deg, #e5f6ff, #a9dcf5)", alt: "Kids Trail finisher medal" },
    { kind: "worn", medal: cutMedal7, garment: "polo", color: "#f2c230", trim: "#1b1b1b", ribbon: ["#008751", "#fcd116", "#e8112d", "#000000"], bg: "linear-gradient(160deg, #f8e7c6, #e2b36a)", alt: "ASBAC semi-marathon medal" },
  ] },
  { title: "Posters & Apparel", kind: "posters", items: [
    { image: w_poster_car_01, alt: "Car-culture graphic" },
    { image: w_poster_car_02, alt: "Car-culture graphic" },
    { image: w_poster_car_03, alt: "Car-culture graphic" },
    { image: w_poster_car_04, alt: "Car-culture graphic" },
    { image: w_poster_car_05, alt: "Car-culture graphic" },
    { image: w_poster_car_06, alt: "Car-culture graphic" },
    { image: w_poster_car_07, alt: "Car-culture graphic" },
    { image: w_poster_car_08, alt: "Car-culture graphic" },
    { image: w_poster_car_09, alt: "Car-culture graphic" },
    { image: w_poster_car_10, alt: "Car-culture graphic" },
    { image: w_poster_space_01, alt: "Space & streetwear graphic" },
    { image: w_poster_space_02, alt: "Space & streetwear graphic" },
    { image: w_poster_space_03, alt: "Space & streetwear graphic" },
    { image: w_poster_space_04, alt: "Space & streetwear graphic" },
    { image: w_poster_space_05, alt: "Space & streetwear graphic" },
    { image: w_poster_space_06, alt: "Space & streetwear graphic" },
    { image: w_poster_space_07, alt: "Space & streetwear graphic" },
    { image: w_poster_space_08, alt: "Space & streetwear graphic" },
    { image: w_poster_space_09, alt: "Space & streetwear graphic" },
    { image: w_poster_space_10, alt: "Space & streetwear graphic" },
    { image: w_poster_space_11, alt: "Space & streetwear graphic" },
  ] },
  { title: "UI/UX & Web", kind: "web", items: [] },
  { title: "Web Banners", kind: "mockups", items: [], mocks: [
    { kind: "browser", image: w_banner_beko_dishwasher, alt: "Beko dishwasher web banner", layout: "hero", bg: "linear-gradient(150deg, #1f4c8f, #0b2550)" },
    { kind: "browser", image: w_banner_beko_leaderboard, alt: "Beko leaderboard banner", layout: "leaderboard", bg: "linear-gradient(150deg, #dfe8f5, #b7c7df)" },
    { kind: "phones", images: [w_banner_telecoming_1, w_banner_telecoming_2, w_banner_telecoming_3], alt: "Telecoming × Real Madrid banners", bg: "linear-gradient(150deg, #3b2a7a, #120c2c)" },
  ] },
];

/** Website projects, shown in laptop / phone mockups on the Works page */
export const webProjects = [
  {
    name: "La Cité Asiatique",
    note: "Restaurant website — designed and built",
    url: "https://la-cit-asiatique-rho.vercel.app",
    desktop: citeDesktop,
    mobile: citeMobile,
    background: "linear-gradient(140deg, #e3263f, #6d0b18)",
  },
  {
    name: "IMMO Agency",
    note: "Resident app (Android & web) and agency dashboard — designed and built",
    url: "https://oussdsgn.github.io/immo-agency/",
    desktop: immoDashboard,
    mobile: immoHome,
    background: "linear-gradient(140deg, #f7c7a8, #e0622a)",
  },
  {
    name: "Benyahia Hicham",
    note: "Portfolio website for an art director — designed and built",
    url: "https://hichembenyahia.vercel.app",
    desktop: hichamDesktop,
    mobile: hichamMobile,
    background: "linear-gradient(140deg, #e9e9e9, #bdbdbd)",
  },
  { name: "Buzz", note: "Landing page & app — online services marketplace", desktop: buzzDesktop, background: "linear-gradient(140deg, #ff3b7f, #c3004f)" },
  { name: "IB Digital", note: "Agency website", url: "https://ib-digital.com", desktop: ibDesktop, mobile: ibMobile, background: "linear-gradient(140deg, #e9e5ff, #ffe8df)" },
  { name: "Karin Bastin", note: "Consulting website", url: "https://karinbastin.com", desktop: kbDesktop, mobile: kbMobile, background: "linear-gradient(140deg, #24314a, #0c1220)" },
  { name: "AMS Groupe", note: "Group website & subsidiaries", url: "https://amsgroupes.com", desktop: amsDesktop, mobile: amsMobile, background: "linear-gradient(140deg, #2a63c4, #0a2a66)" },
] as { name: string; note: string; url?: string; links?: { label: string; href: string }[]; desktop: StaticImageData; mobile?: StaticImageData; background: string }[];

/**
 * Products shown under the store cards on the Assets Store page (hidden while empty).
 * Add items like: { name: "…", href: "https://oussdsgn.gumroad.com/l/…", price: 12, image: someImport }
 */
export const products: { name: string; href: string; price: number; image: StaticImageData }[] = [];
