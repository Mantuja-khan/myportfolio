import { useEffect, useRef, useState } from "react";
import pieceEmblemFrame from "@/assets/piece-emblem-frame.png";
import pieceEmblemFrameDark from "@/assets/piece-emblem-frame-dark.png";
import pieceEmblemSlash from "@/assets/piece-emblem-slash.png";
import pieceEb from "@/assets/piece-eb.png";
import pieceRafthub from "@/assets/piece-rafthub.png";
import pieceRafthubDark from "@/assets/piece-rafthub-dark.png";

type Stage = "intro" | "toNav" | "fade" | "gone";

/**
 * Animated Brand Loading Intro for Web Craft Hub.
 * - The main logo is split into separate pieces/fragments.
 * - Each piece flies in from different angles/corners and seamlessly assembles in the center.
 * - Accompanying content (badge, category, tagline) glides in from top and bottom.
 * - Once unified in the center with a glowing burst, it glides into the navbar brand anchor slot.
 */
export function BrandIntro() {
  const [mounted, setMounted] = useState(false);
  const [stage, setStage] = useState<Stage>("intro");
  const [fly, setFly] = useState<{ x: number; y: number; scale: number } | null>(null);
  const markRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage("gone");
      return;
    }
    // Allow intro fragments to assemble in the center and pause so the user sees the complete logo
    const t = setTimeout(() => setStage("toNav"), 2200);
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
    const scale = Math.max(0.18, Math.min(0.42, (a.height * 1.1) / m.height));
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
      {/* Background ambient lighting */}
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
        {/* Top Content: glides down from above */}

        {/* LOGO FRAGMENT ASSEMBLY ARENA */}
        {/* All 4 piece PNGs share 1024x488 coordinates, snapping into 100% pixel-perfect union */}
        <div className="relative w-[320px] sm:w-[440px] md:w-[540px] aspect-[1024/488] flex items-center justify-center select-none">
          {/* Blue radial flare that bursts when pieces meet in the center */}
          <div
            className="logo-joined-pulse pointer-events-none absolute -inset-8 rounded-full bg-[#003399]/30 blur-3xl"
            aria-hidden="true"
          />

          {/* Piece 1: Emblem Outer Frame (flies in from Top-Left) */}
          <img
            src={pieceEmblemFrame}
            alt=""
            className="piece-fly-tl absolute inset-0 h-full w-full object-contain pointer-events-none dark:hidden"
          />
          <img
            src={pieceEmblemFrameDark}
            alt=""
            className="piece-fly-tl absolute inset-0 hidden h-full w-full object-contain pointer-events-none dark:block"
          />

          {/* Piece 2: Emblem Blue Slash (streaks in from Bottom-Left) */}
          <img
            src={pieceEmblemSlash}
            alt=""
            className="piece-fly-bl absolute inset-0 h-full w-full object-contain pointer-events-none drop-shadow-[0_0_18px_rgba(0,51,153,0.7)]"
          />

          {/* Piece 3: EB Blue Angular Letters (glides in from Top-Right) */}
          <img
            src={pieceEb}
            alt=""
            className="piece-fly-tr absolute inset-0 h-full w-full object-contain pointer-events-none drop-shadow-[0_0_14px_rgba(0,51,153,0.5)]"
          />

          {/* Piece 4: RAFTHUB Black Letters (glides in from Bottom-Right) */}
          <img
            src={pieceRafthub}
            alt=""
            className="piece-fly-br absolute inset-0 h-full w-full object-contain pointer-events-none dark:hidden"
          />
          <img
            src={pieceRafthubDark}
            alt=""
            className="piece-fly-br absolute inset-0 hidden h-full w-full object-contain pointer-events-none dark:block"
          />
        </div>

        {/* Bottom Content: glides up from below */}
        <div className="content-enter-up mt-6 flex flex-col items-center">
          <p className="text-xs font-bold tracking-[0.35em] uppercase text-muted-foreground sm:text-sm">
            A Marketing Agency
          </p>
        </div>
      </div>
    </div>
  );
}
