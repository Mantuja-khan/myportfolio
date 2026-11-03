import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { LetterReveal } from "@/components/letter-reveal";
import { ScrollReveal } from "@/components/scroll-reveal";

import logoFull from "@/assets/logo-full.png";
import logoFullDark from "@/assets/logo-full-dark.png";
import logoMark from "@/assets/logo-mark.png";
import logoMarkDark from "@/assets/logo-mark-dark.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/skills", label: "Skills" },
  { to: "/work", label: "Work" },
  { to: "/experience", label: "Experience" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" data-brand-anchor className="flex items-center gap-2.5 py-1 text-left group">
          <img
            src={logoFull}
            alt="Web Craft Hub"
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-105 dark:hidden"
          />
          <img
            src={logoFullDark}
            alt="Web Craft Hub"
            className="hidden h-9 w-auto transition-transform duration-300 group-hover:scale-105 dark:block"
          />
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Let's Talk
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-md border border-border md:hidden"
          >
            <span className="h-0.5 w-4 bg-foreground" />
            <span className="h-0.5 w-4 bg-foreground" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="py-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function TopCta() {
  return (
    <div className="border-b border-border/60 bg-[image:var(--gradient-warm)]">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium">
          <span className="font-semibold text-primary">Available for new projects</span> — full
          stack web apps, dashboards and product work.
        </p>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
        >
          Start a project <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="sculpted-footer relative mt-24 overflow-hidden bg-foreground text-background">
      <span
        aria-hidden
        className="dot-grid pointer-events-none absolute left-6 top-8 h-24 w-24 opacity-25"
      />
      <span
        aria-hidden
        className="dot-grid pointer-events-none absolute right-10 bottom-16 h-28 w-28 opacity-20"
      />
      <span
        aria-hidden
        className="dot-grid pointer-events-none absolute left-1/2 bottom-4 h-16 w-16 opacity-15"
      />
      <div className="relative border-b border-background/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <ScrollReveal direction="left">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-75">
              Have an idea in mind?
            </p>
            <h2 className="mt-1 text-2xl font-bold uppercase sm:text-4xl">
              Let’s turn it into a working product.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={100}>
            <Link
              to="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Start your project <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-[1.2fr_0.7fr_1fr]">
        <ScrollReveal direction="left">
          <Link to="/" className="inline-flex items-center gap-3 text-left">
            <img src={logoFullDark} alt="Web Craft Hub" className="h-10 w-auto" />
          </Link>
          <h2 className="mt-6 text-2xl font-bold leading-snug md:text-3xl">
            Let's build something
            <br />
            meaningful <span className="text-primary">together.</span>
          </h2>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <p className="text-xs font-semibold uppercase tracking-widest text-background">Explore</p>
          <nav className="mt-4 grid gap-3 text-sm text-background/70">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="w-fit transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={150}>
          <p className="text-xs font-semibold uppercase tracking-widest text-background">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-background/70">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <a
                href="mailto:acc.webcraffthub@gmail.com"
                className="transition-colors hover:text-primary"
              >
                acc.webcraffthub@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+917665556786" className="transition-colors hover:text-primary">
                +91 76655 56786
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" /> Alwar, Rajasthan
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social profile"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-background/20 text-background/70 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <div className="border-t border-background/15 px-5 py-5 text-center text-xs text-background/55">
        © {new Date().getFullYear()} Web Craft Hub — A Marketing Agency. Designed &amp; built by
        Mantuja Khan.
      </div>
    </footer>
  );
}

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <ScrollReveal direction="left" className="mx-auto max-w-6xl px-5 pt-14">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      )}
      <h1 className="mt-2 text-3xl font-bold uppercase underline-accent md:text-4xl">
        <LetterReveal text={title.toUpperCase()} />
      </h1>
      {description && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
