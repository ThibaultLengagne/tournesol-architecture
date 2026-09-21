import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-7 py-16 sm:px-10 sm:py-20">
      <div className="flex w-full max-w-md flex-col">
        <header className="animate-fade-up flex flex-col items-center text-center">
          <SunMark />
          <h1 className="mt-7 font-serif text-[2.7rem] leading-none tracking-tight text-ink sm:text-6xl">
            Tournesol
          </h1>
          <p className="mt-3 font-sans text-[0.72rem] tracking-[0.42em] text-ink/60 uppercase">
            Architecture
          </p>
          <span className="mt-6 block h-px w-12 bg-gold" aria-hidden="true" />
          <p className="mt-8 max-w-sm font-serif text-xl leading-relaxed text-ink/80 sm:text-[1.35rem]">
            Le site est en préparation.
            <br />
            Pour un projet ou une question — écrivez-nous.
          </p>
        </header>

        <div className="animate-fade-up mt-14 w-full">
          <ContactForm />
        </div>

        <footer className="mt-16 flex flex-col items-center gap-2 text-center font-sans text-[0.72rem] tracking-[0.08em] text-ink/55">
          <a
            href="mailto:contact@tournesolarchitecture.fr"
            className="w-fit transition-colors hover:text-gold"
          >
            contact@tournesolarchitecture.fr
          </a>
          <p>© {new Date().getFullYear()} Tournesol Architecture</p>
        </footer>
      </div>
    </main>
  );
}

function SunMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-9 w-9 text-gold"
      aria-hidden="true"
    >
      <g fill="currentColor">
        <circle cx="16" cy="16" r="3.2" />
        <ellipse cx="16" cy="7.4" rx="2.1" ry="4.4" />
        <ellipse cx="16" cy="24.6" rx="2.1" ry="4.4" />
        <ellipse cx="7.4" cy="16" rx="4.4" ry="2.1" />
        <ellipse cx="24.6" cy="16" rx="4.4" ry="2.1" />
        <ellipse
          cx="9.9"
          cy="9.9"
          rx="4.4"
          ry="2.1"
          transform="rotate(-45 9.9 9.9)"
        />
        <ellipse
          cx="22.1"
          cy="22.1"
          rx="4.4"
          ry="2.1"
          transform="rotate(-45 22.1 22.1)"
        />
        <ellipse
          cx="22.1"
          cy="9.9"
          rx="4.4"
          ry="2.1"
          transform="rotate(45 22.1 9.9)"
        />
        <ellipse
          cx="9.9"
          cy="22.1"
          rx="4.4"
          ry="2.1"
          transform="rotate(45 9.9 22.1)"
        />
      </g>
    </svg>
  );
}
