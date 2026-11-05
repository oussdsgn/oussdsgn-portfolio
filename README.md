# oussdsgn — portfolio (Next.js)

Live at **https://oussdsgn.vercel.app**

Built with Next.js 16 (App Router), React 19 and TypeScript. Smooth scrolling uses [Lenis](https://github.com/darkroomengineering/lenis); the content dashboard is [Keystatic](https://keystatic.com).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing content

Use the dashboard at **https://oussdsgn.vercel.app/keystatic** (Keystatic). It edits every project, article, page text, image and setting, and each save republishes the site. See **[DASHBOARD.md](DASHBOARD.md)** for what's where and the one-time GitHub setup.

Things that stay in code:
- **Logo:** `src/components/Logo.tsx` (inline SVG) and `src/app/icon.svg` (favicon).
- **Colors and fonts:** CSS variables at the top of `src/app/globals.css`. The red accent is `--accent`.

## Structure

```
content/                 everything the dashboard edits (JSON + images)
public/media/            videos uploaded from the dashboard
keystatic.config.tsx     the dashboard's sections and fields
scripts/build-content.mjs  content/ -> src/data/generated/ (runs before dev/build)
src/data/site.ts         reads the generated content for the components
src/app/                 routes: / /projects /about /journal /store /contact, /keystatic, plus 404
src/components/          Header, Footer, Hero, WorkGallery (+ Lightbox), Testimonials, ...
```

## Deploy

Vercel deploys `main` automatically. The dashboard needs four environment variables on Vercel; see [DASHBOARD.md](DASHBOARD.md).
