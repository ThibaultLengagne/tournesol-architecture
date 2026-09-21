import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="grid min-h-dvh overflow-hidden lg:grid-cols-[minmax(22rem,42%)_1fr]">
      <section className="relative order-2 flex flex-col px-7 py-10 sm:px-12 sm:py-14 lg:order-1 lg:px-16 lg:py-16">
        <header className="animate-fade-up">
          <SunMark />
          <h1 className="mt-6 font-serif text-[2.7rem] leading-none tracking-tight text-ink sm:text-6xl">
            Tournesol
          </h1>
          <p className="mt-3 font-sans text-[0.72rem] tracking-[0.42em] text-ink/60 uppercase">
            Architecture
          </p>
          <span className="mt-6 block h-px w-12 bg-gold" aria-hidden="true" />
        </header>

        <p className="animate-fade-up mt-10 max-w-sm font-serif text-xl leading-relaxed text-ink/80 sm:text-[1.35rem]">
          Le site est en préparation.
          <br />
          Pour un projet ou une question — écrivez-nous.
        </p>

        <div className="animate-fade-up mt-12 max-w-md">
          <ContactForm />
        </div>

        <footer className="mt-16 flex flex-col gap-2 font-sans text-[0.72rem] tracking-[0.08em] text-ink/55 lg:mt-auto lg:pt-16">
          <a
            href="mailto:contact@tournesolarchitecture.fr"
            className="w-fit transition-colors hover:text-gold"
          >
            contact@tournesolarchitecture.fr
          </a>
          <p>© {new Date().getFullYear()} Tournesol Architecture</p>
        </footer>
      </section>

      <section className="relative order-1 h-[46vh] min-h-[16rem] overflow-hidden lg:order-2 lg:h-auto lg:min-h-dvh">
        <Image
          src="/architecture.jpg"
          alt="Maison contemporaine en bois, éclairée à la tombée du jour"
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="animate-kenburns object-cover object-[center_70%]"
        />
        <p className="pointer-events-none absolute right-8 bottom-10 hidden origin-right rotate-[-90deg] font-sans text-[0.65rem] tracking-[0.38em] text-white/80 uppercase lg:block">
          Tournesol Architecture
        </p>
      </section>
    </main>
  );
}

function SunMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-8 w-8 text-gold"
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
