import { Star, ExternalLink, X, Quote, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export type TestimonialItem = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating?: number;
  category?: string;
  projectUrl?: string;
  highlight?: string;
};

/**
 * Testimonial card matching user reference image:
 * - Hanging double quote mark at top-left
 * - Circular avatar popping out on top-right
 * - 4-line clamped testimonial content with click-to-expand popup
 * - 5 gold stars on bottom-left
 * - White background author pill badge with black text for name and role
 * - Full popup modal portaled to document.body (matching Home page behavior)
 */
export function TestimonialCard({ item }: { item: TestimonialItem }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const rating = item.rating ?? 5;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal on Escape key press and lock background scroll
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <article
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        aria-label={`Read testimonial by ${item.name} from ${item.company}`}
        className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 pb-5 pt-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-elegant)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer select-none"
      >
        {/* Top Left Quote Mark */}
        <div className="flex items-start justify-between">
          <svg
            className="h-8 w-8 sm:h-9 sm:w-9 fill-foreground text-foreground transition-transform duration-300 group-hover:scale-105"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>

          {/* Circular Avatar popping out on top right */}
          <div className="absolute -top-5 right-5 sm:right-6">
            <div className="relative">
              <img
                src={item.avatar}
                alt={item.name}
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover ring-4 ring-card shadow-md transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {item.projectUrl && (
                <span
                  title={`Live website: ${item.company}`}
                  className="absolute bottom-0 right-0 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md"
                >
                  <ExternalLink className="h-3 w-3" />
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 4 Line Clamped Testimonial Content */}
        <div className="mt-4 pr-12 sm:pr-14">
          <p className="line-clamp-4 text-xs sm:text-sm font-normal leading-relaxed text-muted-foreground">
            "{item.quote}"
          </p>

          {/* Clickable "Read full review →" Trigger */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all hover:gap-1.5 hover:underline focus-visible:outline-none"
          >
            Read full review →
          </button>
        </div>

        {/* Bottom Section: Stars on Left, White Background Author Badge on Right */}
        <div className="mt-5 flex items-end justify-between border-t border-border/40 pt-3">
          {/* 5 Gold Stars */}
          <div className="flex items-center gap-1 text-amber-400 pb-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Author Badge: White Background & Black Text */}
          <div className="flex flex-col items-center">
            <div className="rounded-full border border-neutral-300/80 bg-white px-3.5 py-1 text-xs sm:text-[13px] font-bold text-black shadow-xs tracking-tight whitespace-nowrap">
              {item.name}
            </div>
            <div className="-mt-0.5 rounded-b-md border-x border-b border-neutral-300/80 bg-white px-2.5 py-0.5 text-[9px] sm:text-[11px] font-medium tracking-tight text-neutral-800 whitespace-nowrap">
              {item.role ? `${item.role} · ${item.company}` : item.company}
            </div>
          </div>
        </div>
      </article>

      {/* POPUP MODAL: Portaled to document.body matching Home page exactly */}
      {mounted &&
        open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`dialog-title-${item.id}`}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setOpen(false)}
          >
            <div
              className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button at top right */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close testimonial pop-up"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:bg-accent hover:text-foreground active:scale-95"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header: Avatar, Name, Company, Rating */}
              <div className="flex items-start gap-4 pr-8">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover ring-2 ring-primary/40 shadow-md shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3
                      id={`dialog-title-${item.id}`}
                      className="text-lg sm:text-xl font-bold text-foreground"
                    >
                      {item.name}
                    </h3>
                    <CheckCircle2
                      className="h-4 w-4 text-primary shrink-0"
                      title="Verified Client"
                    />
                  </div>
                  <p className="mt-0.5 text-xs sm:text-sm font-semibold text-primary">
                    {item.role}
                  </p>
                  <p className="text-xs font-medium text-muted-foreground">{item.company}</p>

                  {/* Rating stars */}
                  <div className="mt-2 flex items-center gap-1 text-amber-400">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-xs font-bold text-foreground">5.0 / 5.0</span>
                  </div>
                </div>
              </div>

              {/* Highlight badge if available */}
              {item.highlight && (
                <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-accent px-3 py-1 text-xs font-semibold text-primary">
                  <span>✦ {item.highlight}</span>
                </div>
              )}

              {/* Full Un-clamped Testimonial Content */}
              <div className="relative mt-5 rounded-xl border border-border/60 bg-muted/30 p-5">
                <Quote className="mb-2 h-6 w-6 text-primary/40" />
                <p className="text-sm sm:text-base font-normal leading-relaxed text-foreground">
                  "{item.quote}"
                </p>
              </div>

              {/* Footer with Project Link & Close button */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
                {item.projectUrl ? (
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    Visit live website <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-muted-foreground">Verified Client Review</span>
                )}

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow transition-transform hover:-translate-y-0.5 active:scale-95"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
