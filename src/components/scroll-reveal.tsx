import React, { useEffect, useRef, useState } from "react";

export type RevealDirection = "left" | "right" | "up" | "down" | "fade";

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds (default 750)
  distance?: number; // Translate distance in px (default 48)
  threshold?: number; // Intersection threshold 0..1 (default 0.12)
  rootMargin?: string; // Viewport margin (default "0px 0px -50px 0px")
  once?: boolean; // Only animate once when entering view (default true)
  className?: string;
  as?: React.ElementType;
}

/**
 * ScrollReveal Component
 * Fades and slides elements into view from left, right, up, or down when scrolled into the viewport.
 * SSR-safe, accessible with prefers-reduced-motion, and hardware-accelerated.
 */
export function ScrollReveal({
  children,
  direction = "left",
  delay = 0,
  duration = 750,
  distance = 48,
  threshold = 0.12,
  rootMargin = "0px 0px -50px 0px",
  once = true,
  className = "",
  as: Component = "div",
  style,
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const el = ref.current;
    if (!el) return;

    // Respect user's motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  // Before mounting on the client (SSR), render clean HTML without hidden state so SEO & non-JS clients are preserved
  const state = !isMounted ? "idle" : isVisible ? "visible" : "hidden";

  const dynamicStyles: React.CSSProperties = {
    ...style,
    "--reveal-dist": `${distance}px`,
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  } as React.CSSProperties;

  return (
    <Component
      ref={ref}
      data-scroll-reveal=""
      data-direction={direction}
      data-state={state}
      className={`scroll-reveal ${className}`}
      style={dynamicStyles}
      {...rest}
    >
      {children}
    </Component>
  );
}
