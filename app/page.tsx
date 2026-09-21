import { ContactForm } from "@/components/ContactForm";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-7 py-16 sm:px-10 sm:py-20">
      <div className="flex w-full max-w-md flex-col">
        <header className="animate-fade-up flex flex-col items-center text-center">
          <h1>
            <span className="sr-only">Tournesol Architecture</span>
            <Logo />
          </h1>
          <span className="mt-8 block h-px w-12 bg-gold" aria-hidden="true" />
          <p className="mt-8 max-w-sm font-sans text-xl leading-relaxed text-ink/80 sm:text-[1.35rem]">
            Le site est en préparation.
            <br />
            Pour un projet ou une question, écrivez-moi.
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
