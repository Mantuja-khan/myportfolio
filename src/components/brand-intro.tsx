import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import logoMark from "@/assets/logo-mark.png";

type Stage = "intro" | "toNav" | "fade" | "gone";

/**
 * Full-screen loading intro for Web Craft Hub.
 * - Non-cursive, authentic Shrikhand font
 * - Content flies in from random positions/angles with staggered timing
 * - No loading bar beneath
 * - Glides directly into the navbar logo slot upon completion
 */
export function BrandIntro() {
  const [mounted, setMounted] = useState(false);
  const [stage, setStage] = useState<Stage>("intro");
  const [fly, setFly] = useState<{ x: number; y: number; scale: number } | null>(null);
  const markRef = useRef<HTMLDivElement>(null);

  // Generate random off-screen coordinates and rotations for each piece
  const randomStarts = useMemo(() => {
    return {
      mark: {
        x: `${(Math.random() > 0.5 ? 1 : -1) * (45 + Math.random() * 30)}vw`,
        y: `${(Math.random() > 0.5 ? 1 : -1) * (40 + Math.random() * 25)}vh`,
        r: `${(Math.random() - 0.5) * 55}deg`,
      },
      web: {
        x: `${-(40 + Math.random() * 30)}vw`,
        y: `${(Math.random() - 0.5) * 50}vh`,
        r: `${(Math.random() - 0.5) * 45}deg`,
      },
      craft: {
        x: `${40 + Math.random() * 30}vw`,
        y: `${(Math.random() - 0.5) * 50}vh`,
        r: `${(Math.random() - 0.5) * 45}deg`,
      },
      hub: {
        x: `${(Math.random() - 0.5) * 50}vw`,
        y: `${40 + Math.random() * 25}vh`,
        r: `${(Math.random() - 0.5) * 50}deg`,
      },
      tagline: {
        x: "0vw",
        y: "25vh",
        r: "0deg",
      },
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage("gone");
      return;
    }
    // Allow intro to play and settle, then glide up to navbar
    const t = setTimeout(() => setStage("toNav"), 1900);
    return () => clearTimeout(t);
  }, [mounted]);

  useEffect(() => {
    if (stage !== "toNav") return;
    const anchor = document.querySelector("[data-brand-anchor]");
    const mark = markRef.current;
    if (!anchor || !mark) {
      setStage("fade");
      return;
    }
    const a = anchor.getBoundingClientRect();
    const m = mark.getBoundingClientRect();

    // Calculate scale and position to dock right into navbar brand anchor
    const scale = Math.max(0.18, Math.min(0.42, (a.height * 1.05) / m.height));
    setFly({
      x: a.left + a.width / 2 - (m.left + m.width / 2),
      y: a.top + a.height / 2 - (m.top + m.height / 2),
      scale,
    });
    const t = setTimeout(() => setStage("fade"), 850);
    return () => clearTimeout(t);
  }, [stage]);

  useEffect(() => {
    if (stage !== "fade") return;
    const t = setTimeout(() => setStage("gone"), 400);
    return () => clearTimeout(t);
  }, [stage]);

  // Lock scrolling while the intro covers the page
  useEffect(() => {
    if (stage === "gone" || !mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [stage, mounted]);

  if (!mounted || stage === "gone") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background/98 backdrop-blur-xl transition-opacity duration-500 ${
        stage === "fade" ? "opacity-0" : "opacity-100"
      } ${stage === "intro" ? "" : "pointer-events-none"}`}
    >
      <span
        aria-hidden
        className="dot-grid pointer-events-none absolute left-[8%] top-[10%] h-32 w-28 opacity-40"
      />
      <span
        aria-hidden
        className="dot-grid pointer-events-none absolute bottom-[12%] right-[8%] h-36 w-32 opacity-35"
      />
      <span
        aria-hidden
        className="hero-sun pointer-events-none absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-[45%] opacity-75"
      />

      <div
        ref={markRef}
        className="relative flex flex-col items-center justify-center px-6 text-center transition-transform duration-[850ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={
          stage !== "intro" && fly
            ? { transform: `translate(${fly.x}px, ${fly.y}px) scale(${fly.scale})` }
            : undefined
        }
      >
        {/* Animated Emblem flying in from random place */}
        <div
          className="intro-piece-random relative flex items-center justify-center"
          style={
            {
              "--from-x": randomStarts.mark.x,
              "--from-y": randomStarts.mark.y,
              "--from-r": randomStarts.mark.r,
              animationDelay: "0.05s",
            } as CSSProperties
          }
        >
          <div className="absolute -inset-5 rounded-full bg-primary/25 blur-2xl animate-pulse" />
          <img
            src={logoMark}
            alt="Web Craft Hub Logo"
            className="relative h-24 w-auto drop-shadow-xl dark:invert sm:h-32"
          />
        </div>

        {/* Brand Text in Shrikhand Font flying in from random places */}
        <div
          className="font-shrikhand mt-5 flex flex-col items-center select-none"
          style={{ fontFamily: "'Shrikhand', cursive, sans-serif" }}
        >
          {/* Top Line: WEB CRAFT */}
          <div className="flex items-center justify-center gap-3 text-4xl tracking-wider text-foreground sm:text-6xl">
            <span
              className="intro-piece-random inline-block"
              style={
                {
                  "--from-x": randomStarts.web.x,
                  "--from-y": randomStarts.web.y,
                  "--from-r": randomStarts.web.r,
                  animationDelay: "0.18s",
                } as CSSProperties
              }
            >
              WEB
            </span>
            <span
              className="intro-piece-random inline-block"
              style={
                {
                  "--from-x": randomStarts.craft.x,
                  "--from-y": randomStarts.craft.y,
                  "--from-r": randomStarts.craft.r,
                  animationDelay: "0.3s",
                } as CSSProperties
              }
            >
              CRAFT
            </span>
          </div>

          {/* Bottom Line: HUB */}
          <div className="mt-1">
            <span
              className="intro-piece-random inline-block text-4xl tracking-[0.2em] text-primary sm:text-6xl"
              style={
                {
                  "--from-x": randomStarts.hub.x,
                  "--from-y": randomStarts.hub.y,
                  "--from-r": randomStarts.hub.r,
                  animationDelay: "0.42s",
                } as CSSProperties
              }
            >
              HUB
            </span>
          </div>

          {/* Subtitle */}
          <p
            className="intro-piece-random mt-3 text-xs font-semibold tracking-[0.35em] uppercase text-muted-foreground sm:text-sm"
            style={
              {
                fontFamily: "var(--font-sans)",
                "--from-x": randomStarts.tagline.x,
                "--from-y": randomStarts.tagline.y,
                "--from-r": randomStarts.tagline.r,
                animationDelay: "0.55s",
              } as CSSProperties
            }
          >
            A Marketing Agency
          </p>
        </div>
      </div>
    </div>
  );
}
