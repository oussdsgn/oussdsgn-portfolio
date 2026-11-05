import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

// The GitHub login keys are read when the dashboard is used, not at build time,
// so the site still builds (and stays online) before they are set on Vercel.
type Handler = (req: Request) => Promise<Response>;
let handlers: { GET: Handler; POST: Handler } | null = null;

const ready = () =>
  process.env.NODE_ENV === "development" ||
  (process.env.KEYSTATIC_GITHUB_CLIENT_ID && process.env.KEYSTATIC_GITHUB_CLIENT_SECRET && process.env.KEYSTATIC_SECRET);

// TEMP diagnostics: log GitHub's OAuth error code (never tokens or secrets).
let patched = false;
function logGitHubOAuthErrors() {
  if (patched) return;
  patched = true;
  const orig = globalThis.fetch;
  globalThis.fetch = async (input, init) => {
    const res = await orig(input, init);
    const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
    if (url.startsWith("https://github.com/login/oauth/access_token")) {
      const body = await res.clone().json().catch(() => null);
      console.log("[keystatic] github token exchange", res.status, body?.error ?? "ok", body?.error_description ?? "", body && !body.error ? `fields=${Object.keys(body).join(",")}` : "");
    }
    return res;
  };
}

function get() {
  if (!ready()) return null;
  logGitHubOAuthErrors();
  handlers ??= makeRouteHandler({ config }) as { GET: Handler; POST: Handler };
  return handlers;
}

const notSetUp = () =>
  new Response(
    "The dashboard isn't connected to GitHub yet. Add KEYSTATIC_GITHUB_CLIENT_ID, KEYSTATIC_GITHUB_CLIENT_SECRET, KEYSTATIC_SECRET and NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG in Vercel (see DASHBOARD.md).",
    { status: 503 }
  );

async function handle(method: "GET" | "POST", req: Request) {
  const h = get();
  if (!h) return notSetUp();
  const res = await h[method](req);
  const path = new URL(req.url).pathname;
  const cookies = req.headers.get("cookie") ?? "";
  console.log("[keystatic]", method, path, res.status, `cookies: access=${cookies.includes("keystatic-gh-access-token")} refresh=${cookies.includes("keystatic-gh-refresh-token")}`);
  return res;
}

export const GET = (req: Request) => handle("GET", req);
export const POST = (req: Request) => handle("POST", req);
