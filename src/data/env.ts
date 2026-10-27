// Kept separate from site.ts, which exports its own `process` (the design-process steps).
/** Draft projects show locally and on preview deployments, never on the production site. */
export const showDrafts = process.env.SHOW_DRAFTS === "1";
