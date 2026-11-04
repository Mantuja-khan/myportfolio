import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  Star,
  ExternalLink,
  X,
  Quote,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MoveHorizontal,
} from "lucide-react";
import { testimonialsData } from "@/lib/testimonials-data";
import type { TestimonialItem } from "@/components/testimonial-card";

/**
 * TestimonialsInfiniteCarousel:
 * - Continuously and automatically glides testimonials from right to left in a seamless infinite loop.
 * - Supports interactive dragging (mouse + touch) with wrap-around.
 * - Left/Right manual nudge controls.
 * - Clicking "Read full review →" or clicking a card opens the popup modal directly in document.body via Portal.
 * - Flawless popup display with verified client badge, full review quote, star ratings, and project link.
 */
export function TestimonialsInfiniteCarousel() {
  const [selectedItem, setSelectedItem] = useState<TestimonialItem | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [mounted, setMounted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Offset & animation state kept in refs for smooth 60fps performance
  const offsetRef = useRef(0);
  const isInteractingRef = useRef(false);
  const dragStartRef = useRef<{
    startX: number;
    startOffset: number;
    moved: number;
    pointerId?: number;
  }>({
    startX: 0,
    startOffset: 0,
    moved: 0,
  });

  const animFrameIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Client mounted check for safe createPortal
  useEffect(() => {
    setMounted(true);
  }, []);

  // 3 duplicate sets of testimonials to ensure seamless infinite looping
  const items = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  // Calculate the width of one single set of items
  const getSingleSetWidth = useCallback(() => {
    if (!trackRef.current) {
      return testimonialsData.length * 384; // fallback estimation (360 card + 24 gap)
    }
    const children = trackRef.current.children;
    if (children.length >= testimonialsData.length) {
      let width = 0;
      for (let i = 0; i < testimonialsData.length; i++) {
        const el = children[i] as HTMLElement;
        width += el.offsetWidth + 24; // 24px is gap-6
      }
      if (width > 100) return width;
    }
    const totalScrollWidth = trackRef.current.scrollWidth;
    return totalScrollWidth > 0 ? totalScrollWidth / 3 : testimonialsData.length * 384;
  }, []);

  // Apply transform with modulo wrap-around
  const updateTrackTransform = useCallback(() => {
    if (!trackRef.current) return;
    const singleSet = getSingleSetWidth();
    if (singleSet > 0) {
      while (offsetRef.current <= -singleSet) {
        offsetRef.current += singleSet;
      }
      while (offsetRef.current > 0) {
        offsetRef.current -= singleSet;
      }
    }
    trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  }, [getSingleSetWidth]);

  // Automatic right-to-left glide loop
  useEffect(() => {
    const speedPixelsPerSecond = 42; // Constant smooth right-to-left speed

    const tick = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }
      const deltaMs = Math.min(time - lastTimeRef.current, 100); // clamp delta to avoid huge jumps
      lastTimeRef.current = time;

      // Automatically glide right-to-left when not actively dragging
      if (!isInteractingRef.current) {
        // When hovered, slow down by 75% for reading comfort without stopping abruptly
        const currentSpeed = isHovered ? speedPixelsPerSecond * 0.25 : speedPixelsPerSecond;
        const deltaPx = (currentSpeed * deltaMs) / 1000;
        offsetRef.current -= deltaPx;
        updateTrackTransform();
      }

      animFrameIdRef.current = requestAnimationFrame(tick);
    };

    animFrameIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameIdRef.current !== null) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isHovered, updateTrackTransform]);

  // Lock body scroll and listen for Escape key when popup is open
  useEffect(() => {
    if (!selectedItem) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedItem]);

  // Manual Drag Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return; // Only main click/touch

    isInteractingRef.current = true;
    dragStartRef.current = {
      startX: e.clientX,
      startOffset: offsetRef.current,
      moved: 0,
      pointerId: e.pointerId,
    };

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isInteractingRef.current) return;

    const dx = e.clientX - dragStartRef.current.startX;
    dragStartRef.current.moved += Math.abs(dx);

    // Only engage active dragging visuals if user moved more than 4px
    if (Math.abs(dx) > 4 && !isDragging) {
      setIsDragging(true);
      try {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      } catch {
        // Ignored
      }
    }

    if (Math.abs(dx) > 4) {
      offsetRef.current = dragStartRef.current.startOffset + dx;
      updateTrackTransform();
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isInteractingRef.current) return;
    isInteractingRef.current = false;
    setIsDragging(false);

    try {
      if (dragStartRef.current.pointerId !== undefined) {
        (e.currentTarget as HTMLElement).releasePointerCapture(dragStartRef.current.pointerId);
      }
    } catch {
      // Ignored
    }

    resumeTimeoutRef.current = setTimeout(() => {
      lastTimeRef.current = performance.now();
    }, 1000);
  };

  // Nudge Left / Right helper buttons
  const nudge = (direction: "left" | "right") => {
    const amount = direction === "left" ? -340 : 340;
    offsetRef.current += amount;
    updateTrackTransform();
  };

  const handleCardClick = (item: TestimonialItem) => {
    // If the pointer dragged more than 8px, do not treat as a click
    if (dragStartRef.current.moved > 8) return;
    setSelectedItem(item);
  };

  return (
    <div className="relative w-full py-2 select-none">
      {/* Top Controls: Drag/Glide Status & Arrow Controls */}
      <div className="mb-4 flex items-center justify-between px-1 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3.5 py-1 font-medium shadow-xs backdrop-blur">
          <MoveHorizontal className="h-3.5 w-3.5 text-primary animate-pulse" />
          <span>Auto-moving right to left • Drag freely</span>
        </span>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => nudge("right")}
            aria-label="Scroll testimonials left"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => nudge("left")}
            aria-label="Scroll testimonials right"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Carousel Track Container with edge fades */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`relative overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y ${
          isDragging ? "cursor-grabbing" : ""
        }`}
        style={{
          maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-6 py-6 will-change-transform"
          style={{ width: "max-content" }}
        >
          {items.map((item, idx) => (
            <article
              key={`${item.id}-${idx}`}
              onClick={() => handleCardClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              aria-label={`Read testimonial by ${item.name} from ${item.company}`}
              className="group relative flex w-[295px] sm:w-[370px] shrink-0 flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 pt-7 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-elegant)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
            >
              {/* Top Left Quote Mark */}
              <div className="flex items-start justify-between">
                <svg
                  className="h-8 w-8 fill-foreground text-foreground transition-transform duration-300 group-hover:scale-105"
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

                {/* Explicit Clickable "Read full review →" Trigger */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem(item);
                  }}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all hover:gap-1.5 hover:underline focus-visible:outline-none"
                >
                  Read full review →
                </button>
              </div>

              {/* Bottom Section: Stars on Left, Author Badge on Right */}
              <div className="mt-5 flex items-end justify-between border-t border-border/40 pt-3">
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-amber-400 pb-1">
                  {Array.from({ length: item.rating ?? 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400"
                    />
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
          ))}
        </div>
      </div>

      {/* 
        POPUP MODAL: Portaled directly into document.body
        Guarantees proper display, perfect viewport centering, and immunity to parent styles or overflows
      */}
      {mounted &&
        selectedItem &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`dialog-title-${selectedItem.id}`}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button at top right */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close testimonial pop-up"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:bg-accent hover:text-foreground active:scale-95"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header: Avatar, Name, Company, Rating */}
              <div className="flex items-start gap-4 pr-8">
                <img
                  src={selectedItem.avatar}
                  alt={selectedItem.name}
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover ring-2 ring-primary/40 shadow-md shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3
                      id={`dialog-title-${selectedItem.id}`}
                      className="text-lg sm:text-xl font-bold text-foreground"
                    >
                      {selectedItem.name}
                    </h3>
                    <CheckCircle2
                      className="h-4 w-4 text-primary shrink-0"
                      title="Verified Client"
                    />
                  </div>
                  <p className="mt-0.5 text-xs sm:text-sm font-semibold text-primary">
                    {selectedItem.role}
                  </p>
                  <p className="text-xs font-medium text-muted-foreground">
                    {selectedItem.company}
                  </p>

                  {/* Rating stars */}
                  <div className="mt-2 flex items-center gap-1 text-amber-400">
                    {Array.from({ length: selectedItem.rating ?? 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-xs font-bold text-foreground">5.0 / 5.0</span>
                  </div>
                </div>
              </div>

              {/* Highlight badge if available */}
              {selectedItem.highlight && (
                <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-accent px-3 py-1 text-xs font-semibold text-primary">
                  <span>✦ {selectedItem.highlight}</span>
                </div>
              )}

              {/* Full Un-clamped Testimonial Content */}
              <div className="relative mt-5 rounded-xl border border-border/60 bg-muted/30 p-5">
                <Quote className="mb-2 h-6 w-6 text-primary/40" />
                <p className="text-sm sm:text-base font-normal leading-relaxed text-foreground">
                  "{selectedItem.quote}"
                </p>
              </div>

              {/* Footer with Project Link & Close button */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
                {selectedItem.projectUrl ? (
                  <a
                    href={selectedItem.projectUrl}
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
                  onClick={() => setSelectedItem(null)}
                  className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow transition-transform hover:-translate-y-0.5 active:scale-95"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
