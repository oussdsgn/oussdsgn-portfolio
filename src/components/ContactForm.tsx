"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Errors = Partial<Record<"first_name" | "last_name" | "email" | "message", string>>;

function validate(d: FormData): Errors {
  const e: Errors = {};
  if (!String(d.get("first_name")).trim()) e.first_name = "Please add your first name.";
  if (!String(d.get("last_name")).trim()) e.last_name = "Please add your last name.";
  if (!/^\S+@\S+\.\S+$/.test(String(d.get("email")))) e.email = "That email doesn’t look right.";
  if (String(d.get("message")).trim().length < 10) e.message = "Tell me a little more (10+ characters).";
  return e;
}

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const d = new FormData(form);
    const e = validate(d);
    setErrors(e);
    if (Object.keys(e).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`)?.focus();
      return;
    }
    const name = `${d.get("first_name")} ${d.get("last_name")}`;
    setStatus("sending");
    try {
      // Web3Forms emails the message straight to site.email's inbox.
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.formKey,
          subject: `New project enquiry from ${name}`,
          from_name: "oussdsgn portfolio",
          name,
          email: d.get("email"),
          message: d.get("message"),
          botcheck: d.get("botcheck") ? true : "",
        }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json?.success) throw new Error(json?.message || res.statusText);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const field = (name: keyof Errors, label: string, props: Record<string, string>, full = false, area = false) => (
    <div className={`field ${full ? "field--full" : ""} ${errors[name] ? "has-error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      {area ? (
        <textarea id={name} name={name} aria-invalid={!!errors[name]} aria-describedby={`${name}-err`} {...props} />
      ) : (
        <input id={name} name={name} aria-invalid={!!errors[name]} aria-describedby={`${name}-err`} {...props} />
      )}
      <span id={`${name}-err`} className="field__error">{errors[name]}</span>
    </div>
  );

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {field("first_name", "First name", { placeholder: "Jane", autoComplete: "given-name" })}
      {field("last_name", "Last name", { placeholder: "Doe", autoComplete: "family-name" })}
      {field("email", "Email", { type: "email", placeholder: "you@company.com", autoComplete: "email" }, true)}
      {field("message", "Message", { placeholder: "Tell me about your project, timeline and budget…" }, true, true)}
      {/* honeypot: hidden from people, bots fill it in */}
      <input type="checkbox" name="botcheck" className="form__trap" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="form__submit" type="submit" disabled={status === "sending"}>
        <span>{status === "sending" ? "Sending…" : "Submit"}</span>
      </button>
      <p className={`form__status ${status === "error" ? "is-error" : ""}`} role="status">
        {status === "sent" && "Thanks! Your message has been sent — I’ll get back to you soon."}
        {status === "error" && (
          <>Sorry, the message couldn’t be sent. Please email me directly at <a href={`mailto:${site.email}`}>{site.email}</a>.</>
        )}
      </p>
    </form>
  );
}
