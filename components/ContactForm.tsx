"use client";

import { useEffect, useState } from "react";

const CONTACT_EMAIL = "contact@tournesolarchitecture.fr";
const LIVE_THANKS = "https://tournesol-architecture-gules.vercel.app/?envoye=1";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [nextUrl, setNextUrl] = useState(LIVE_THANKS);

  useEffect(() => {
    setNextUrl(`${window.location.origin}/?envoye=1`);
    if (new URLSearchParams(window.location.search).get("envoye") === "1") {
      setSent(true);
    }
  }, []);

  if (sent) {
    return (
      <p
        className="animate-fade-up border-t border-line pt-8 font-sans text-[0.95rem] leading-relaxed text-ink/80"
        role="status"
      >
        Merci. Votre message est bien parti, nous vous répondrons rapidement.
      </p>
    );
  }

  return (
    <form
      action={`https://formsubmit.co/${CONTACT_EMAIL}`}
      method="POST"
      className="flex flex-col gap-7"
    >
      <input type="hidden" name="_subject" value="Nouveau message — Tournesol Architecture" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <Field label="Nom" name="name" type="text" autoComplete="name" required />
      <Field
        label="Adresse e-mail"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <Field label="Message" name="message" as="textarea" required />

      <button
        type="submit"
        className="mt-2 w-full cursor-pointer bg-ink px-6 py-4 font-sans text-[0.7rem] font-medium tracking-[0.28em] text-paper uppercase transition-colors duration-300 hover:bg-gold"
      >
        Envoyer
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  as,
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "textarea";
  autoComplete?: string;
  required?: boolean;
}) {
  const classes =
    "w-full resize-none border-0 border-b border-line bg-transparent py-3 font-sans text-[0.95rem] text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-gold";

  return (
    <label className="flex flex-col gap-1">
      <span className="font-sans text-[0.68rem] tracking-[0.22em] text-ink/70 uppercase">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={4} className={classes} />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={classes}
        />
      )}
    </label>
  );
}
