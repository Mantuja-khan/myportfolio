import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Character reveal — animates each letter in with a fade + rise,
 * staggered left to right, when it scrolls into view.
 */
export function LetterReveal({
  text,
  className,
  gradientWords = [],
  delay = 0,
  stagger = 40,
}: {
  text: string;
  className?: string;
  /** Words rendered with the gradient text style */
  gradientWords?: string[];
  /** Base delay before the first letter (ms) */
  delay?: number;
  /** Delay between letters (ms) */
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let letterIndex = 0;

  return (
    <span ref={ref} className={cn("inline-block", className)} aria-label={text}>
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden>
          {word.split("").map((ch, ci) => {
            const i = letterIndex++;
            const isGradient = gradientWords.includes(word);
            return (
              <span
                key={ci}
                className={cn(
                  "inline-block transition-all duration-500 ease-out will-change-transform",
                  isGradient && "text-gradient",
                )}
                style={{
                  transitionDelay: `${delay + i * stagger}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateY(0) rotate(0deg)"
                    : "translateY(0.6em) rotate(6deg)",
                  filter: visible ? "blur(0)" : "blur(4px)",
                }}
              >
                {ch}
              </span>
            );
          })}
          {wi < text.split(" ").length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
