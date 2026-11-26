"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Mail } from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type Fields = { name: string; email: string; phone: string; service: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", phone: "", service: "", message: "" };
const serviceOptions = ["Introductory Call", ...services.map((s) => s.title), "General Inquiry"];

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.phone && !/^[\d\s()+.-]{7,}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number or leave it blank.";
  if (!f.service) e.service = "Please choose the service you're interested in.";
  if (f.message.trim().length < 10) e.message = "Please share a few words about how we can help (at least 10 characters).";
  return e;
}

/**
 * Frontend-only contact form. It validates input, then opens the visitor's
 * email app with a pre-filled draft addressed to the business. Nothing is sent
 * or stored by this website — the visitor completes sending in their email app.
 */
export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(`cf-${firstError}`)?.focus();
      return;
    }
    const subject = `Inquiry: ${fields.service} — ${fields.name.trim()}`;
    const body = [
      `Name: ${fields.name.trim()}`,
      `Email: ${fields.email.trim()}`,
      fields.phone.trim() ? `Phone: ${fields.phone.trim()}` : null,
      `Service: ${fields.service}`,
      "",
      fields.message.trim(),
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const inputBase =
    "mt-2 block w-full rounded-2xl border bg-cream/60 px-4 py-3.5 text-base text-charcoal placeholder:text-charcoal/40 transition focus:border-purple focus:bg-white focus:outline-none focus:ring-4 focus:ring-lavender";
  const field = (key: keyof Fields) => ({
    id: `cf-${key}`,
    name: key,
    value: fields[key],
    onChange: update(key),
    "aria-invalid": Boolean(errors[key]) || undefined,
    "aria-describedby": errors[key] ? `cf-${key}-error` : undefined,
    className: cn(inputBase, errors[key] ? "border-red-400" : "border-plum/15"),
  });
  const ErrorText = ({ k }: { k: keyof Fields }) =>
    errors[k] ? (
      <p id={`cf-${k}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-700">
        <AlertCircle aria-hidden className="size-4" /> {errors[k]}
      </p>
    ) : null;
  const Label = ({ k, children, optional }: { k: keyof Fields; children: React.ReactNode; optional?: boolean }) => (
    <label htmlFor={`cf-${k}`} className="text-sm font-semibold text-plum">
      {children} {optional ? <span className="font-normal text-charcoal/50">(optional)</span> : <span aria-hidden className="text-purple">*</span>}
    </label>
  );

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5" aria-describedby="cf-help">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label k="name">Full Name</Label>
          <input type="text" autoComplete="name" required placeholder="Your full name" {...field("name")} />
          <ErrorText k="name" />
        </div>
        <div>
          <Label k="email">Email Address</Label>
          <input type="email" autoComplete="email" required placeholder="you@example.com" {...field("email")} />
          <ErrorText k="email" />
        </div>
        <div>
          <Label k="phone" optional>Phone Number</Label>
          <input type="tel" autoComplete="tel" placeholder="(555) 555-5555" {...field("phone")} />
          <ErrorText k="phone" />
        </div>
        <div>
          <Label k="service">Service Interested In</Label>
          <select required {...field("service")}>
            <option value="" disabled>Select an option</option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <ErrorText k="service" />
        </div>
      </div>
      <div>
        <Label k="message">Message</Label>
        <textarea rows={5} required placeholder="Share a little about what you're looking for..." {...field("message")} />
        <ErrorText k="message" />
      </div>

      <p id="cf-help" className="rounded-2xl bg-lavender/50 p-4 text-sm text-charcoal/75">
        Clicking the button below opens your email app with your message ready to send to{" "}
        <span className="font-semibold text-plum">{site.email}</span>. Your message is only sent once you press
        &ldquo;Send&rdquo; in your email app. Choose &ldquo;Introductory Call&rdquo; to request your first conversation.
      </p>

      <button
        type="submit"
        className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-olive px-8 py-4 font-semibold text-white shadow-[0_10px_30px_-10px_rgb(88_106_54/0.6)] transition-all hover:-translate-y-0.5 hover:bg-olive-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum sm:w-auto"
      >
        <Mail aria-hidden className="size-5" />
        Open Email to Send
      </button>

      <div aria-live="polite">
        {opened && (
          <p className="flex gap-3 rounded-2xl border border-sage/40 bg-sage/10 p-4 text-sm text-charcoal/85">
            <CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0 text-olive" />
            <span>
              Your email app should now be open with your message. Please press <strong>Send</strong> there to complete
              it. If nothing opened, email us directly at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-plum underline">{site.email}</a> or call{" "}
              <a href={site.phoneHref} className="font-semibold text-plum underline">{site.phoneDisplay}</a>.
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
