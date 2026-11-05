import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

interface Milestone {
  number: string;
  title: string;
  period: string;
  description: string;
}

const educationMilestones: Milestone[] = [
  {
    number: "1",
    title: "10th Secondary School",
    period: "Tagore Sr. Sec. School · 2017 (74.17%)",
    description:
      "Completed 10th standard from Tagore Sr. Sec. School in 2017 with 74.17%, building a solid grounding in analytical reasoning, mathematics, and science.",
  },
  {
    number: "2",
    title: "12th Senior Secondary",
    period: "Happy Convent School · 88.67%",
    description:
      "Completed 12th standard with an outstanding 88.67% from Happy Convent School, excelling in Physics, Chemistry, and Advanced Mathematics.",
  },
  {
    number: "3",
    title: "B.Tech in Computer Science / IT",
    period: "MITRC College, Alwar · 6.9 CGPA",
    description:
      "Graduated with a Bachelor of Technology (B.Tech) from MITRC College, Alwar with 6.9 CGPA, mastering Software Engineering, Data Structures, and MERN full-stack development.",
  },
];

/**
 * Education Journey section matching the user's reference image:
 * - Free of enclosing boxes and allows full width
 * - Eyebrow in coral/orange ("ACADEMIC & LEARNING PATHWAY")
 * - Left side: bold heading, descriptive subtitle, and coral "Get in touch" CTA button
 * - Wavy coral ribbon line (#f2644e) traveling across 3 milestones
 * - Giant watermark numbers "1", "2", "3" behind each milestone
 * - Node markers with white pill capsules and soft drop shadows on the path
 */
export function EducationJourneySection() {
  return (
    <section
      className="w-full mt-24 sm:mt-32 px-5 sm:px-10 lg:px-16 xl:px-24"
      aria-labelledby="education-heading"
    >
      {/* Background ambient lighting */}
      <div className="relative w-full">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#f2644e]/5 blur-3xl"
        />

        {/* Top / Left Header Block - unboxed */}
        <ScrollReveal direction="left" className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest text-[#f2644e] uppercase">
            Academic &amp; Learning Pathway
          </p>
          <h2
            id="education-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            My Education Journey &amp; Growth
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            A continuous progression combining rigorous computer science fundamentals, analytical
            problem solving, and hands-on full-stack engineering mastery.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#f2644e] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#f2644e]/25 transition-all duration-300 hover:bg-[#e0533d] hover:shadow-lg hover:-translate-y-0.5"
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/skills"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              Explore Technical Skills
            </Link>
          </div>
        </ScrollReveal>

        {/* Desktop Wavy Timeline spanning full width (visible on lg screens) */}
        <div className="relative mt-16 hidden lg:block min-h-[400px] w-full">
          {/* Updated Smooth S-Curve SVG Line connecting all three milestone points */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none overflow-visible"
            viewBox="0 0 1000 400"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Curved Timeline Line */}
            <path
              d="
      M 44 165
      C 115 165, 130 75, 220 75
      C 300 75, 325 165, 407 165
      C 490 165, 515 65, 590 65
      C 680 65, 710 80, 820 80
    "
              stroke="#f2644e"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
              className="drop-shadow-[0_4px_14px_rgba(242,100,78,0.4)]"
            />

            {/* Circles directly on the line */}
            <circle cx="44" cy="165" r="11" fill="white" stroke="#f2644e" strokeWidth="4" />
            <circle cx="407" cy="165" r="11" fill="white" stroke="#f2644e" strokeWidth="4" />
            <circle cx="753" cy="80" r="11" fill="white" stroke="#f2644e" strokeWidth="4" />
          </svg>
          {/* 3 Milestone Stations placed along the wave */}
          <div className="relative z-10 grid grid-cols-3 gap-10 pt-4">
            {/* MILESTONE 1 (Bottom Left / Center) */}
            <ScrollReveal direction="left" className="relative pt-48">
              {/* Watermark Number '1' */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-28 text-[140px] font-black text-slate-400/15 dark:text-slate-600/15 select-none leading-none"
              >
                1
              </span>

              {/* Text Content */}
              <div className="relative pr-6">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#f2644e]">
                  {educationMilestones[0].period}
                </span>
                <h3 className="mt-1 text-lg font-bold text-foreground">
                  {educationMilestones[0].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {educationMilestones[0].description}
                </p>
              </div>
            </ScrollReveal>

            {/* MILESTONE 2 (Center) */}
            <ScrollReveal direction="up" delay={120} className="relative pt-24">
              {/* Watermark Number '2' */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-2 text-[140px] font-black text-slate-400/15 dark:text-slate-600/15 select-none leading-none"
              >
                2
              </span>

              {/* Text Content */}
              <div className="relative pr-6 mt-20">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#f2644e]">
                  {educationMilestones[1].period}
                </span>
                <h3 className="mt-1 text-lg font-bold text-foreground">
                  {educationMilestones[1].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {educationMilestones[1].description}
                </p>
              </div>
            </ScrollReveal>

            {/* MILESTONE 3 (Top Right) */}
            <ScrollReveal direction="right" delay={240} className="relative pt-0">
              {/* Watermark Number '3' */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-2 -top-8 text-[160px] font-black text-slate-400/15 dark:text-slate-600/15 select-none leading-none"
              >
                3
              </span>

              {/* Text Content */}
              <div className="relative pr-4 mt-24">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#f2644e]">
                  {educationMilestones[2].period}
                </span>
                <h3 className="mt-1 text-lg font-bold text-foreground">
                  {educationMilestones[2].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {educationMilestones[2].description}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Mobile / Tablet Timeline - completely unboxed */}
        <div className="mt-12 space-y-10 lg:hidden">
          {educationMilestones.map((item, idx) => (
            <ScrollReveal
              key={item.number}
              direction={idx % 2 === 0 ? "left" : "right"}
              delay={idx * 80}
            >
              <div className="relative overflow-hidden pl-4 border-l-2 border-[#f2644e]/40">
                {/* Giant watermark number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 -bottom-4 text-8xl font-black text-slate-400/15 dark:text-slate-600/15 select-none"
                >
                  {item.number}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f2644e] text-xs font-bold text-white shadow-sm">
                    {item.number}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#f2644e]">
                    {item.period}
                  </span>
                </div>

                <h3 className="mt-2 text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
