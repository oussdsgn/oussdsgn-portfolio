import { collection, config, fields, singleton } from "@keystatic/core";

/*
 * The dashboard at /keystatic. Everything here is saved as JSON (plus images) in
 * the `content/` folder; `scripts/build-content.mjs` turns it into the data the
 * site reads. In production it commits to GitHub and Vercel redeploys.
 */

const REPO = "oussdsgn/oussdsgn-portfolio";

// ---------- small field helpers ----------
const t = (label: string, description?: string) => fields.text({ label, description });
const area = (label: string, description?: string) => fields.text({ label, description, multiline: true });
const req = (label: string, description?: string) => fields.text({ label, description, validation: { length: { min: 1 } } });
const img = (label: string, description?: string) => fields.image({ label, description });
const reqImg = (label: string, description?: string) => fields.image({ label, description, validation: { isRequired: true } });
const list = (label: string, itemLabel = "Item") =>
  fields.array(fields.text({ label: itemLabel }), { label, itemLabel: (p) => p.value || itemLabel });
const paragraphs = (label: string) =>
  fields.array(fields.text({ label: "Paragraph", multiline: true }), { label, itemLabel: (p) => (p.value || "Paragraph").slice(0, 70) });
const link = (label: string) => fields.object({ label: t("Label"), href: t("URL") }, { label });
const links = (label: string) =>
  fields.array(fields.object({ label: req("Label"), href: req("URL") }), { label, itemLabel: (p) => p.fields.label.value || "Link" });
const video = (label: string) =>
  fields.file({ label, description: "MP4, muted and looping on the site. Keep it small (under ~5 MB).", directory: "public/media", publicPath: "/media/" });
const bg = (label = "Background") =>
  fields.text({ label, description: "Any CSS colour or gradient, e.g. #eeeeee or linear-gradient(140deg, #ff8a65, #2a1a14)" });
const shot = (label = "Image") => fields.object({ image: reqImg("Image"), alt: req("Alt text", "Describe the image") }, { label });
const shots = (label: string) => fields.array(shot(), { label, itemLabel: (p) => p.fields.alt.value || "Image" });
const cols = (label = "Images per row", max = 4) =>
  fields.select({ label, defaultValue: "1", options: Array.from({ length: max }, (_, i) => ({ label: String(i + 1), value: String(i + 1) })) });

// ---------- case-study blocks ----------
const projectBlocks = fields.blocks(
  {
    text: {
      label: "Text section",
      itemLabel: (p) => `Text · ${p.fields.title.value}`,
      schema: fields.object({ title: req("Label", "e.g. Challenge, Solution"), paragraphs: paragraphs("Paragraphs") }),
    },
    gallery: {
      label: "Image row",
      itemLabel: (p) => `Images · ${p.fields.images.elements.length} in a row of ${p.fields.cols.value}`,
      schema: fields.object({
        cols: cols(),
        ratio: t("Crop ratio", "Optional, e.g. 4 / 5 or 16 / 9. Leave empty to show images uncropped."),
        images: shots("Images"),
      }),
    },
    specs: {
      label: "Details list",
      itemLabel: (p) => `Details · ${p.fields.title.value}`,
      schema: fields.object({
        title: req("Title", "e.g. Technical details"),
        items: fields.array(fields.object({ label: req("Label"), value: req("Value") }), { label: "Rows", itemLabel: (p) => p.fields.label.value }),
      }),
    },
    compare: {
      label: "Before / after",
      itemLabel: () => "Before / after",
      schema: fields.object({
        pairs: fields.array(
          fields.object({
            label: req("Caption"),
            before: img("Before image"),
            beforeAlt: t("Before alt text"),
            after: img("After image"),
            afterAlt: t("After alt text"),
          }),
          { label: "Pairs", itemLabel: (p) => p.fields.label.value }
        ),
      }),
    },
    video: {
      label: "Video",
      itemLabel: (p) => `Video · ${p.fields.title.value}`,
      schema: fields.object({ title: req("Title"), src: video("Video file"), poster: img("Poster image", "Shown before the video plays") }),
    },
    placeholder: {
      label: "Placeholder slots (drafts only)",
      itemLabel: () => "Placeholder slots",
      schema: fields.object({
        cols: cols("Slots per row", 3),
        ratio: req("Ratio", "e.g. 4 / 5"),
        labels: list("Slot labels", "Label"),
      }),
    },
  },
  { label: "Page content", description: "The case study, top to bottom. Drag to reorder." }
);

// ---------- article body ----------
const articleBody = fields.blocks(
  {
    paragraph: { label: "Paragraph", itemLabel: (p) => p.fields.text.value.slice(0, 70) || "Paragraph", schema: fields.object({ text: fields.text({ label: "Text", multiline: true }) }) },
    image: { label: "Image", itemLabel: (p) => `Image · ${p.fields.alt.value}`, schema: fields.object({ image: reqImg("Image"), alt: req("Alt text") }) },
    video: {
      label: "Video",
      itemLabel: (p) => `Video · ${p.fields.alt.value}`,
      schema: fields.object({ video: video("Video file"), poster: reqImg("Poster image", "Shown before the video plays"), alt: req("Description") }),
    },
  },
  { label: "Article body", description: "Paragraphs, images and videos, top to bottom. Drag to reorder." }
);

// ---------- Work page mockups ----------
const mocks = fields.blocks(
  {
    photo: { label: "Photo", itemLabel: (p) => p.fields.alt.value, schema: fields.object({ image: reqImg("Image"), alt: req("Caption") }) },
    box: {
      label: "3D box",
      itemLabel: (p) => p.fields.alt.value,
      schema: fields.object({ front: reqImg("Front face"), side: reqImg("Side face"), top: t("Top colour", "e.g. #0b100d"), alt: req("Caption"), bg: bg() }),
    },
    product: { label: "Product cut-out", itemLabel: (p) => p.fields.alt.value, schema: fields.object({ image: reqImg("Image (transparent PNG)"), alt: req("Caption"), bg: bg() }) },
    rollups: {
      label: "Roll-up banners",
      itemLabel: (p) => p.fields.alt.value,
      schema: fields.object({ images: fields.array(reqImg("Banner"), { label: "Banners", itemLabel: () => "Banner" }), alt: req("Caption"), bg: bg() }),
    },
    billboard: { label: "Billboard", itemLabel: (p) => p.fields.alt.value, schema: fields.object({ image: reqImg("Artwork"), alt: req("Caption"), bg: bg() }) },
    browser: {
      label: "Web banner in a browser",
      itemLabel: (p) => p.fields.alt.value,
      schema: fields.object({
        image: reqImg("Banner"),
        alt: req("Caption"),
        layout: fields.select({ label: "Layout", defaultValue: "hero", options: [{ label: "Hero banner", value: "hero" }, { label: "Leaderboard", value: "leaderboard" }] }),
        bg: bg(),
      }),
    },
    phones: {
      label: "Phones",
      itemLabel: (p) => p.fields.alt.value,
      schema: fields.object({ images: fields.array(reqImg("Screen"), { label: "Screens", itemLabel: () => "Screen" }), alt: req("Caption"), bg: bg() }),
    },
    worn: {
      label: "Medal worn on a garment",
      itemLabel: (p) => p.fields.alt.value,
      schema: fields.object({
        medal: reqImg("Medal (transparent PNG)"),
        garment: fields.select({
          label: "Garment",
          defaultValue: "tee",
          options: ["tee", "stripes", "polo", "jacket", "hoodie", "singlet", "kid"].map((v) => ({ label: v, value: v })),
        }),
        color: req("Garment colour"),
        trim: t("Trim colour"),
        ribbon: list("Ribbon colours (left to right)", "Colour"),
        skin: t("Skin colour", "Optional"),
        bg: bg(),
        alt: req("Caption"),
      }),
    },
  },
  { label: "Mockups", description: "Only used by groups shown as mockups." }
);

export default config({
  storage:
    process.env.NODE_ENV === "development"
      ? { kind: "local" }
      : { kind: "github", repo: REPO },
  ui: {
    brand: { name: "oussdsgn" },
    navigation: {
      Content: ["projects", "articles"],
      Pages: ["home", "about", "work", "store", "pageText"],
      Settings: ["settings"],
    },
  },

  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "content/projects/*/",
      format: { data: "json" },
      columns: ["title", "order"],
      entryLayout: "form",
      schema: {
        title: fields.slug({ name: { label: "Title" }, slug: { label: "URL", description: "The page address: /projects/<this>" } }),
        order: fields.integer({ label: "Order", description: "Position on the Work page: lower comes first. New projects start at 0, so they show at the top.", defaultValue: 0 }),
        draft: fields.checkbox({ label: "Draft", description: "Hidden on the live site; visible locally and on preview deployments." }),
        tags: list("Tags", "Tag"),
        image: reqImg("Thumbnail", "Card image on the Work page, also the cover unless a cover is set."),
        cover: img("Cover (optional)", "Large image at the top of the case study."),
        services: list("Services", "Service"),
        year: t("Year"),
        info: paragraphs("Intro paragraphs"),
        link: link("External link (optional)"),
        blocks: projectBlocks,
      },
    }),
    articles: collection({
      label: "Journal articles",
      slugField: "title",
      path: "content/articles/*/",
      format: { data: "json" },
      columns: ["title", "date"],
      entryLayout: "form",
      schema: {
        title: fields.slug({ name: { label: "Title" }, slug: { label: "URL", description: "The page address: /journal/<this>" } }),
        date: fields.date({ label: "Date", validation: { isRequired: true } }),
        category: fields.text({ label: "Category", defaultValue: "Design" }),
        image: reqImg("Cover image"),
        dek: area("Subtitle", "Short line under the title"),
        body: articleBody,
        source: link("Source button (optional)"),
        links: links("Links at the end"),
        credits: fields.array(
          fields.object({ role: req("Role", "e.g. Design"), name: req("Name"), href: t("URL") }),
          { label: "Credits", itemLabel: (p) => `${p.fields.role.value}: ${p.fields.name.value}` }
        ),
      },
    }),
  },

  singletons: {
    settings: singleton({
      label: "Site settings",
      path: "content/settings/",
      format: { data: "json" },
      schema: {
        name: req("Brand name", "e.g. oussdsgn"),
        owner: req("First name"),
        fullName: req("Full name"),
        role: req("Job title"),
        city: req("City"),
        timeZone: req("Time zone", "IANA name, e.g. Africa/Algiers"),
        year: fields.integer({ label: "Copyright year" }),
        email: req("Email"),
        phone: t("Phone / WhatsApp"),
        formKey: req("Web3Forms access key", "Contact form messages go to the inbox this key was created for."),
        hero: reqImg("Hero image"),
        portrait: reqImg("Portrait"),
        marquee: list("Marquee words", "Word"),
        socials: links("Social links"),
        nav: links("Header menu"),
        footer: links("Footer menu"),
        stores: fields.array(
          fields.object({
            id: fields.select({
              label: "Platform (sets the logo)",
              defaultValue: "gumroad",
              options: [{ label: "Gumroad", value: "gumroad" }, { label: "Magnific", value: "magnific" }, { label: "DeviantArt", value: "deviantart" }],
            }),
            name: req("Name"),
            handle: req("Handle"),
            note: t("Description"),
            cta: t("Button text"),
            href: req("URL"),
          }),
          { label: "Store cards", itemLabel: (p) => p.fields.name.value }
        ),
      },
    }),

    pageText: singleton({
      label: "Page text",
      path: "content/page-text/",
      format: { data: "json" },
      schema: {
        heroTitle: list("Hero title lines", "Line"),
        heroLeft: list("Hero: list on the left", "Line"),
        heroRight: list("Hero: lines on the right", "Line"),
        homeIntro: area("Home: big intro sentence"),
        homeIntroText: paragraphs("Home: intro paragraphs"),
        servicesTitle: area("Home: services heading"),
        ctaTitle: list("Contact banner lines", "Line"),
        journalIntro: area("Journal page intro"),
        storeIntro: area("Store page intro"),
        explorationsNote: t("About: visual explorations note"),
        contactTitle: t("Contact page title"),
        notFound: t("404 page text"),
      },
    }),

    home: singleton({
      label: "Home page",
      path: "content/home/",
      format: { data: "json" },
      schema: {
        selectedWorks: fields.multiRelationship({ label: "Selected works", collection: "projects", description: "Shown on the home page, in this order." }),
        services: fields.array(
          fields.object({
            title: req("Title"),
            text: area("Text"),
            image: img("Image"),
            phone: img("Phone screen (shown in a phone instead of an image)"),
          }),
          { label: "Services", itemLabel: (p) => p.fields.title.value }
        ),
        process: fields.array(fields.object({ title: req("Title"), text: area("Text") }), { label: "Process steps", itemLabel: (p) => p.fields.title.value }),
        testimonials: fields.array(
          fields.object({ quote: area("Quote"), name: req("Name"), role: t("Role"), image: img("Photo") }),
          { label: "Testimonials", itemLabel: (p) => p.fields.name.value }
        ),
        stats: fields.array(
          fields.object({
            value: fields.number({ label: "Number", step: 0.1, validation: { isRequired: true } }),
            decimals: fields.integer({ label: "Decimals shown", defaultValue: 0 }),
            suffix: t("Suffix", "e.g. + or K+"),
            label: req("Label"),
            text: t("Text"),
          }),
          { label: "Numbers", itemLabel: (p) => `${p.fields.value.value}${p.fields.suffix.value} ${p.fields.label.value}` }
        ),
      },
    }),

    about: singleton({
      label: "About page",
      path: "content/about/",
      format: { data: "json" },
      schema: {
        intro: area("Intro", "Large text at the top of the page."),
        approach: area("Approach"),
        tools: list("Toolkit", "Tool"),
        aiTools: list("AI & generative tools", "Tool"),
        languages: list("Languages", "Language"),
        explorations: fields.array(reqImg("Image"), { label: "Visual explorations", itemLabel: () => "Image" }),
        clients: fields.array(fields.object({ name: req("Name"), image: reqImg("Logo") }), { label: "Brands I've worked with", itemLabel: (p) => p.fields.name.value }),
        experience: fields.array(
          fields.object({ company: req("Company"), href: t("Website"), role: req("Role"), period: req("Period"), points: list("Highlights", "Point") }),
          { label: "Experience", itemLabel: (p) => `${p.fields.company.value} · ${p.fields.period.value}` }
        ),
        education: fields.array(
          fields.object({ school: req("School"), title: req("Title"), period: req("Period"), note: area("Note") }),
          { label: "Education", itemLabel: (p) => p.fields.title.value }
        ),
      },
    }),

    work: singleton({
      label: "Work page",
      path: "content/work/",
      format: { data: "json" },
      schema: {
        categories: fields.array(
          fields.object({
            label: req("Name"),
            tags: list("Project tags shown here", "Tag"),
            archive: t("Extra pieces group", "Title of a group below, or empty"),
          }),
          { label: "Categories", itemLabel: (p) => p.fields.label.value }
        ),
        archive: fields.array(
          fields.object({
            title: req("Group title"),
            kind: fields.select({
              label: "Presentation",
              defaultValue: "posts",
              options: [
                { label: "Logo cards", value: "logos" },
                { label: "Social posts wall", value: "posts" },
                { label: "Framed posters", value: "posters" },
                { label: "Mockups", value: "mockups" },
                { label: "Websites (uses the list below)", value: "web" },
              ],
            }),
            items: fields.array(
              fields.object({ image: reqImg("Image"), alt: req("Alt text"), bg: bg("Card background (logos)") }),
              { label: "Pieces", itemLabel: (p) => p.fields.alt.value }
            ),
            mocks,
          }),
          { label: "Extra pieces (archive)", itemLabel: (p) => p.fields.title.value }
        ),
        webProjects: fields.array(
          fields.object({
            name: req("Name"),
            note: t("Description"),
            url: t("Website"),
            links: links("Extra links"),
            desktop: reqImg("Desktop screenshot (16:10)"),
            mobile: img("Mobile screenshot"),
            background: bg(),
          }),
          { label: "Websites", itemLabel: (p) => p.fields.name.value }
        ),
      },
    }),

    store: singleton({
      label: "Store page",
      path: "content/store/",
      format: { data: "json" },
      schema: {
        products: fields.array(
          fields.object({
            name: req("Name"),
            image: reqImg("Main picture", "Shown on the Store page; click it to open the product pop-up."),
            images: fields.array(fields.image({ label: "Picture", validation: { isRequired: true } }), {
              label: "More pictures",
              description: "Extra pictures shown in the pop-up, after the main one.",
              itemLabel: (p) => p.value?.filename ?? "Picture",
            }),
            description: area("Description", "A few lines shown in the pop-up."),
            price: fields.number({ label: "Price ($)", description: "Leave empty to hide the price tag.", step: 0.01 }),
            href: fields.url({
              label: "Download link",
              description: "Where the button at the bottom of the pop-up goes, starting with https:// (e.g. your Gumroad product page)",
              validation: { isRequired: true },
            }),
            button: t("Button text", "Leave empty for “Download”."),
          }),
          { label: "Products", itemLabel: (p) => p.fields.name.value }
        ),
      },
    }),
  },
});
