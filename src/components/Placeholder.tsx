// Shared by server and client components, so no "use client" here.

/** Copy that still needs Oussama's content is shown as a marked placeholder. */
export const isTodo = (t: string) => t.startsWith("TODO");
export function Copy({ text }: { text: string }) {
  return <p className={isTodo(text) ? "is-todo" : undefined}>{text}</p>;
}

/** A visibly empty slot for an image that hasn't been supplied yet. */
export function Slot({ label, ratio }: { label: string; ratio: string }) {
  return (
    <div className="cs-slot" style={{ aspectRatio: ratio }}>
      <span className="cs-slot__tag">Placeholder</span>
      <span className="cs-slot__label">{label}</span>
    </div>
  );
}
