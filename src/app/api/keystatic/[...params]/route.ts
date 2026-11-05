import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

// The GitHub login keys are read when the dashboard is used, not at build time,
// so the site still builds (and stays online) before they are set on Vercel.
type Handler = (req: Request) => Promise<Response>;
let handlers: { GET: Handler; POST: Handler } | null = null;

const ready = () =>
  process.env.NODE_ENV === "development" ||
  (process.env.KEYSTATIC_GITHUB_CLIENT_ID && process.env.KEYSTATIC_GITHUB_CLIENT_SECRET && process.env.KEYSTATIC_SECRET);

function get() {
  if (!ready()) return null;
  handlers ??= makeRouteHandler({ config }) as { GET: Handler; POST: Handler };
  return handlers;
}

const notSetUp = () =>
  new Response(
    "The dashboard isn't connected to GitHub yet. Add KEYSTATIC_GITHUB_CLIENT_ID, KEYSTATIC_GITHUB_CLIENT_SECRET, KEYSTATIC_SECRET and NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG in Vercel (see DASHBOARD.md).",
    { status: 503 }
  );

export async function GET(req: Request) {
  const h = get();
  return h ? h.GET(req) : notSetUp();
}

export async function POST(req: Request) {
  const h = get();
  return h ? h.POST(req) : notSetUp();
}
