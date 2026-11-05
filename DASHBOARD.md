# Dashboard

Everything on the site is edited at **https://oussdsgn.vercel.app/keystatic**:

| Section | What it controls |
|---|---|
| **Projects** | Every case study: title, URL, order, tags, thumbnail/cover, services, year, intro, link, draft flag and the page content (text sections, image rows, details lists, before/after, video). |
| **Journal articles** | Title, URL, date, category, cover, subtitle, body (paragraphs, images, videos), source button, links, credits. |
| **Home page** | Selected works (picked from your projects, in order), services, process steps, testimonials, numbers. |
| **About page** | Intro, approach, tools, languages, visual explorations, client logos, experience, education. |
| **Work page** | Category filters, the extra-pieces archive (logos, posts, posters, mockups) and the websites list. |
| **Store page** | Products under the store cards. |
| **Page text** | Hero lines, home intro, services heading, contact banner, Journal/Store intros, contact title, 404 text. |
| **Site settings** | Name, job title, city, time zone, email, phone, contact-form key, hero and portrait images, marquee words, social links, header and footer menus, store cards. |

Each time you press **Save**, the dashboard commits the change to GitHub and Vercel republishes the site. It's live in about a minute.

Tips:
- **Adding a project:** Projects → Add. A new project gets order 0, so it shows first on the Work page. Tick **Draft** to keep it off the live site while you work on it.
- **Showing it on the home page:** Home page → Selected works.
- **Images:** upload JPG or PNG at the size you want shown (2000–2800 px wide is plenty). The site makes the smaller versions.
- **Videos:** MP4, muted, under ~5 MB.

## One-time setup (connect the dashboard to GitHub)

The dashboard signs you in with GitHub and saves through a small GitHub App you own. You only do this once.

### 1. Create the GitHub App

Open https://github.com/settings/apps/new and fill in:

- **GitHub App name:** `oussdsgn Keystatic` (any name GitHub accepts)
- **Homepage URL:** `https://oussdsgn.vercel.app/keystatic`
- **Callback URL:** `https://oussdsgn.vercel.app/api/keystatic/github/oauth/callback`
- Tick **Request user authorization (OAuth) during installation**
- **Webhook:** untick **Active**
- **Repository permissions:**
  - **Contents:** Read and write
  - **Pull requests:** Read-only
  - **Metadata:** Read-only (set automatically)
- **Where can this GitHub App be installed?** Only on this account

Click **Create GitHub App**, then on the app's page:

- Copy the **Client ID**.
- Click **Generate a new client secret** and copy it (GitHub shows it only once).
- Note the app's **slug**: the last part of its public link, `https://github.com/apps/<slug>`.
- In the left menu, open **Install App**, install it on your account, choose **Only select repositories** and pick **oussdsgn-portfolio**.

### 2. Add four environment variables in Vercel

Vercel → your project → **Settings → Environment Variables**. Add these for **Production** (and Preview, if you want the dashboard on preview links too):

| Name | Value |
|---|---|
| `KEYSTATIC_GITHUB_CLIENT_ID` | the Client ID |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | the client secret |
| `KEYSTATIC_SECRET` | any long random string, 40+ characters (for example from a password generator) |
| `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` | the app slug |

Then **Deployments → ⋯ → Redeploy** the latest deployment so the variables take effect.

### 3. Sign in

Open https://oussdsgn.vercel.app/keystatic and click **Sign in with GitHub**.

## For developers

- Content lives in `content/` as JSON, with images next to each entry. Videos live in `public/media/`.
- `scripts/build-content.mjs` turns `content/` into `src/data/generated/`, which `src/data/site.ts` reads. It runs automatically before `npm run dev` and `npm run build`.
- The dashboard's fields are defined in `keystatic.config.tsx`. `npm run lint` typechecks the code and validates every entry against that config.
- When run locally with `npm run dev`, the dashboard edits the files on disk instead of GitHub.
