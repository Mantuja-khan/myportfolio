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
      <div className="relative w-full overflow-hidden min-h-[360px] sm:min-h-[420px] lg:min-h-[480px]">
        {/* Desktop Right-Side Photo: clipped along the exact diagonal slant line (64% top -> 38% bottom). Hidden on small screens */}
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

        {/* Slanted Banners: unified style across all screen sizes (small & large) */}
        <div className="relative z-10 flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-7 py-4 sm:py-6 w-full">
          {/* 1. VISION BANNER */}
          <ScrollReveal direction="left" className="relative w-[95%] sm:w-[86%] lg:w-[63%]">
            <div
              className="group relative flex items-center bg-[#409a80] py-5 sm:py-6 lg:py-7 pl-5 sm:pl-10 lg:pl-16 xl:pl-24 pr-12 sm:pr-16 lg:pr-24 text-white shadow-lg transition-transform duration-300 hover:translate-x-1"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 88% 100%, 0% 100%)",
              }}
            >
              <div className="max-w-xl pr-2 sm:pr-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide">Vision</h3>
                <p className="mt-2 text-xs sm:text-sm lg:text-base font-normal italic leading-relaxed text-emerald-50/95">
                  To craft accessible, high-performance web applications that empower businesses,
                  simplify digital workflows, and deliver transformative user experiences across the
                  modern web.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. MISSION BANNER (shorter to follow the slant curve down-left) */}
          <ScrollReveal
            direction="left"
            delay={130}
            className="relative w-[88%] sm:w-[76%] lg:w-[52%]"
          >
            <div
              className="group relative flex items-center bg-[#9e5365] py-5 sm:py-6 lg:py-7 pl-5 sm:pl-10 lg:pl-16 xl:pl-24 pr-12 sm:pr-16 lg:pr-24 text-white shadow-lg transition-transform duration-300 hover:translate-x-1"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 86% 100%, 0% 100%)",
              }}
            >
              <div className="max-w-md pr-2 sm:pr-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide">
                  Mission
                </h3>
                <p className="mt-2 text-xs sm:text-sm lg:text-base font-normal italic leading-relaxed text-rose-50/95">
                  To bridge visionary design with resilient MERN engineering, delivering scalable,
                  secure, and maintainable software with clean architecture and relentless client
                  dedication.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
