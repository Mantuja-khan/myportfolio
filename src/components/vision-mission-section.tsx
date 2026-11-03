import visionMissionRef from "@/assets/vision-mission-ref.png";
import { ScrollReveal } from "@/components/scroll-reveal";

/**
 * Vision and Mission section designed to match the user's reference image:
 * - Free of enclosing boxes and takes full width
 * - Top: Header "Our Vision And Mission" with dual-color accent underline
 * - Banners and Right Photo aligned along the EXACT same diagonal slant line:
 *   - The slant line travels from top-right (~64%) down to bottom-left (~38%)
 *   - Vision green bar (#409a80) spans to 63% width, cut at the slant angle
 *   - Mission maroon bar (#9e5365) spans to 52% width, cut at the slant angle
 *   - Both circular badges (Eye & Mountain Summit) sit centered on the slant boundary
 *   - The tech photo fills everything from the slant line to the right screen edge
 */
export function VisionMissionSection() {
  return (
    <section className="w-full mt-20 sm:mt-28" aria-labelledby="vision-mission-heading">
      {/* Top Header */}
      <ScrollReveal direction="left" className="w-full px-5 sm:px-10 lg:px-16 xl:px-24 pb-6">
        <h2
          id="vision-mission-heading"
          className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Our Vision And Mission
        </h2>
        {/* Dual-color accent line matching reference */}
        <div className="mt-3 flex h-1 w-24 items-center gap-1.5" aria-hidden="true">
          <span className="h-full w-8 rounded-full bg-[#9e5365]" />
          <span className="h-full w-14 rounded-full bg-[#409a80]" />
        </div>
      </ScrollReveal>

      {/* Main Full-Width Visual Area */}
      <div className="relative w-full overflow-hidden min-h-[440px] sm:min-h-[460px] lg:min-h-[480px]">
        {/* Desktop Right-Side Photo: clipped along the exact diagonal slant line (64% top -> 38% bottom) */}
        <ScrollReveal
          direction="right"
          className="absolute inset-0 hidden h-full w-full overflow-hidden lg:block pointer-events-none"
          style={{
            clipPath: "polygon(64% 0%, 100% 0%, 100% 100%, 38% 100%)",
          }}
          aria-hidden="true"
        >
          <div
            className="h-full w-full bg-no-repeat"
            style={{
              backgroundImage: `url(${visionMissionRef})`,
              backgroundSize: "35% auto",
              backgroundPosition: "right center",
              filter: "brightness(0.96) contrast(1.05)",
            }}
          />
          {/* Subtle depth gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/25" />
        </ScrollReveal>

        {/* Desktop Left-Side Slanted Banners (lg and above) */}
        <div className="relative z-10 hidden lg:flex flex-col justify-center space-y-7 py-6 w-full">
          {/* 1. VISION BANNER */}
          <ScrollReveal direction="left" className="relative w-[63%]">
            <div
              className="group relative flex items-center bg-[#409a80] py-7 pl-5 sm:pl-10 lg:pl-16 xl:pl-24 pr-24 text-white shadow-lg transition-transform duration-300 hover:translate-x-1"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 86% 100%, 0% 100%)",
              }}
            >
              <div className="max-w-xl pr-6">
                <h3 className="text-3xl font-bold tracking-wide lg:text-4xl">Vision</h3>
                <p className="mt-2 text-sm lg:text-base font-normal italic leading-relaxed text-emerald-50/95">
                  To craft accessible, high-performance web applications that empower businesses,
                  simplify digital workflows, and deliver transformative user experiences across the
                  modern web.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. MISSION BANNER (shorter to follow the slant curve down-left) */}
          <ScrollReveal direction="left" delay={130} className="relative w-[52%]">
            <div
              className="group relative flex items-center bg-[#9e5365] py-7 pl-5 sm:pl-10 lg:pl-16 xl:pl-24 pr-24 text-white shadow-lg transition-transform duration-300 hover:translate-x-1"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 84% 100%, 0% 100%)",
              }}
            >
              <div className="max-w-md pr-6">
                <h3 className="text-3xl font-bold tracking-wide lg:text-4xl">Mission</h3>
                <p className="mt-2 text-sm lg:text-base font-normal italic leading-relaxed text-rose-50/95">
                  To bridge visionary design with resilient MERN engineering, delivering scalable,
                  secure, and maintainable software with clean architecture and relentless client
                  dedication.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Mobile / Tablet View (< lg screens) */}
        <div className="relative z-10 lg:hidden space-y-6 py-4 pr-6 sm:pr-10">
          {/* Vision */}
          <ScrollReveal direction="left" className="relative w-[92%] sm:w-[88%]">
            <div className="rounded-r-3xl bg-[#409a80] py-6 pl-5 pr-14 text-white shadow-md">
              <h3 className="text-2xl font-bold">Vision</h3>
              <p className="mt-2 text-xs sm:text-sm font-normal italic leading-relaxed text-emerald-50/95">
                To craft accessible, high-performance web applications that empower businesses,
                simplify digital workflows, and deliver transformative user experiences across the
                modern web.
              </p>
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-20">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-4 border-background bg-[#409a80] text-white shadow-xl">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7 sm:h-8 sm:w-8"
                >
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3.5" />
                  <line x1="12" y1="12" x2="16" y2="8" strokeWidth="2" />
                  <polyline points="13 8 16 8 16 11" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal direction="right" delay={100} className="relative w-[86%] sm:w-[80%]">
            <div className="rounded-r-3xl bg-[#9e5365] py-6 pl-5 pr-14 text-white shadow-md">
              <h3 className="text-2xl font-bold">Mission</h3>
              <p className="mt-2 text-xs sm:text-sm font-normal italic leading-relaxed text-rose-50/95">
                To bridge visionary design with resilient MERN engineering, delivering scalable,
                secure, and maintainable software with clean architecture and relentless client
                dedication.
              </p>
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-20">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-4 border-background bg-[#9e5365] text-white shadow-xl">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7 sm:h-8 sm:w-8"
                >
                  <path d="M3 20l7-10 4 5 7-9" />
                  <path d="M3 20h18" />
                  <circle cx="14" cy="7" r="1.5" fill="currentColor" />
                  <path d="M14 8.5v3.5" />
                  <path d="M14 9.5l3-2v3l-3 1" fill="currentColor" fillOpacity="0.3" />
                </svg>
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile Graphic Strip */}
          <ScrollReveal
            direction="up"
            delay={150}
            className="relative mt-6 h-52 w-full overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={visionMissionRef}
              alt="Technology growth charts and connectivity visualization"
              className="h-full w-full object-cover object-right"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
