import { useState, useEffect, useRef } from "react";

export function SkillCircle({
  name,
  level,
  icon,
  image,
}: {
  name: string;
  level: number;
  icon?: string;
  image?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      setDisplayCount(level);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);

  // Smooth counting animation from 0 to level
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1300; // 1.3s smooth counting
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic curve
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(ease * level);

      setDisplayCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayCount(level);
      }
    };

    const animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isVisible, level]);

  return (
    <div
      ref={containerRef}
      className="group flex flex-col items-center gap-1.5 py-1.5 sm:gap-3 sm:py-3 select-none"
    >
      <div className="relative flex h-22 w-22 items-center justify-center xs:h-26 xs:w-26 sm:h-32 sm:w-32">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full -rotate-90"
          aria-hidden="true"
        >
          {/* Background circle track */}
          <circle cx="50" cy="50" r="45" fill="none" stroke="var(--border)" strokeWidth="4" />
          {/* Animated fill circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="4"
            strokeLinecap="round"
            pathLength="100"
            strokeDasharray={isVisible ? `${level} 100` : `0 100`}
            style={{
              transition: "stroke-dasharray 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </svg>

        {/* Inner Circle: displays larger technology image */}
        <span
          title={name}
          className="flex h-18 w-18 items-center justify-center rounded-full bg-accent text-primary transition-transform duration-300 group-hover:scale-105 xs:h-21 xs:w-21 sm:h-24 sm:w-24 p-2 sm:p-2.5"
        >
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 object-contain drop-shadow-xs"
              loading="lazy"
            />
          ) : icon ? (
            <span className="text-xl font-bold">{icon}</span>
          ) : (
            <span className="text-[11px] font-semibold">{name}</span>
          )}
        </span>
      </div>

      {/* Animated counting percentage */}
      <p className="text-base font-semibold text-primary sm:text-xl tabular-nums">
        {displayCount}
        <span className="ml-0.5 text-[10px] sm:text-xs">%</span>
      </p>
    </div>
  );
}
