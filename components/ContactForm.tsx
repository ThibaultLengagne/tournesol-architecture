"use client";

import { FormEvent, useEffect, useState } from "react";

type Status = "idle" | "sending" | "sent" | "confirm" | "error";

const CONTACT_EMAIL = "contact@tournesolarchitecture.fr";
const FORMSUBMIT = `https://formsubmit.co/${CONTACT_EMAIL}`;
const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
const LIVE_THANKS = "https://tournesol-architecture-gules.vercel.app/?envoye=1";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [nextUrl, setNextUrl] = useState(LIVE_THANKS);

  useEffect(() => {
    setNextUrl(`${window.location.origin}/?envoye=1`);
    if (new URLSearchParams(window.location.search).get("envoye") === "1") {
      setStatus("sent");
    }
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("_honey")) {
      setStatus("sent");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(FORMSUBMIT_AJAX, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _subject: "Nouveau message — Tournesol Architecture",
          _template: "table",
          _captcha: "false",
        }),
      });

      const json = (await response.json().catch(() => null)) as {
        success?: string | boolean;
        message?: string;
      } | null;

      const message = String(json?.message ?? "");
      const failed =
        !response.ok || json?.success === "false" || json?.success === false;

      if (isConfirmation(message)) {
        setStatus("confirm");
        return;
      }

      if (failed) {
        throw new Error(message || "FormSubmit a échoué");
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p
        className="animate-fade-up border-t border-line pt-8 font-sans text-[0.95rem] leading-relaxed text-ink/80"
        role="status"
      >
        Merci. Votre message est bien parti, nous vous répondrons rapidement.
      </p>
    );
  }

  if (status === "confirm") {
    return (
      <p
        className="animate-fade-up border-t border-line pt-8 font-sans text-[0.95rem] leading-relaxed text-ink/80"
        role="status"
      >
        Pour activer le formulaire, ouvrez l&apos;e-mail envoyé à{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="underline decoration-gold/70 underline-offset-4 hover:text-gold"
        >
          {CONTACT_EMAIL}
        </a>{" "}
        et cliquez le lien une fois. Ensuite, les messages arriveront.
      </p>
    );
  }

  return (
    <form
      action={FORMSUBMIT}
      method="POST"
      onSubmit={onSubmit}
      className="flex flex-col gap-7"
    >
      <input type="hidden" name="_subject" value="Nouveau message — Tournesol Architecture" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      />

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
        disabled={status === "sending"}
        className="mt-2 w-full cursor-pointer bg-ink px-6 py-4 font-sans text-[0.7rem] font-medium tracking-[0.28em] text-paper uppercase transition-colors duration-300 hover:bg-gold disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Envoi…" : "Envoyer"}
      </button>

      {status === "error" && (
        <p className="font-sans text-sm leading-relaxed text-ink/75" role="alert">
          L&apos;envoi n&apos;a pas abouti. Écrivez-nous directement à{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline decoration-gold/70 underline-offset-4 hover:text-gold"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function isConfirmation(message: string) {
  return /confirm|activation|check your email|vérif/i.test(message);
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
