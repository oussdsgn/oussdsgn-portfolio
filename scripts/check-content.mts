import { createReader } from "@keystatic/core/reader";
import cfgMod from "../keystatic.config";
const config = ((cfgMod as any).default ?? cfgMod) as typeof cfgMod;
const r = createReader(process.cwd(), config);
let n = 0;
for (const c of ["projects", "articles"] as const) {
  for (const slug of await r.collections[c].list()) { await r.collections[c].readOrThrow(slug, { resolveLinkedFiles: true }); n++; }
}
for (const s of Object.keys(config.singletons!) as (keyof typeof config.singletons)[]) { await (r.singletons as any)[s].readOrThrow(); n++; }
console.log("entries parsed OK:", n);
