import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHeading } from "@/components/site-layout";
import aboutImg from "@/assets/about-illustration.png";
import { VisionMissionSection } from "@/components/vision-mission-section";
import { EducationJourneySection } from "@/components/education-journey-section";

const highlights = [
  "Full Stack Developer with expertise in MERN Stack",
  "Created 15+ responsive and user-friendly web applications",
  "Specialized in React.js and Modern JavaScript",
  "Strong background in UI/UX design principles",
];

const traits = [
  "Problem Solver",
  "Detail Oriented",
  "Clean Code Advocate",
  "Always Learning",
  "Team Player",
  "Curious Mind",
];

const process = [
  { n: "01", t: "Discover", d: "Understand the problem deeply." },
  { n: "02", t: "Design", d: "Map out simple solutions." },
  { n: "03", t: "Develop", d: "Write clean, tested code." },
  { n: "04", t: "Deploy", d: "Ship fast and iterate." },
  { n: "05", t: "Iterate", d: "Refine, measure, improve." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mantuja Khan — Full Stack MERN Developer" },
      {
        name: "description",
        content:
          "Mantuja Khan is a full stack MERN developer creating beautiful, responsive and user-friendly web applications with clean, efficient code.",
      },
      { property: "og:title", content: "About Mantuja Khan — Full Stack Developer" },
      {
        property: "og:description",
        content: "MERN stack developer with 15+ responsive web applications shipped since 2024.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pb-6">
      <PageHeading eyebrow="Get to know me" title="About Me" />

      <section className="mx-auto mt-10 grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Illustration of Mantuja Khan at her desk holding a coffee mug"
            width={1024}
            height={896}
            loading="lazy"
            className="ken-burns w-full max-w-md"
          />
          <span className="absolute bottom-2 right-2 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] md:right-10">
            Since 2024
          </span>
        </div>
        <div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Hello! I am <span className="font-semibold text-primary">Mantuja Khan</span>. As a
            passionate web developer, I specialize in creating beautiful and functional web
            applications. I combine technical expertise with creative problem-solving to build
            responsive, user-friendly websites that deliver exceptional digital experiences.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            My focus is on writing clean, efficient code and implementing modern design principles
            to create seamless user interfaces.
          </p>

          <ul className="mt-7 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-base">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {traits.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium"
              >
                <span className="mr-2 text-primary">◆</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION (matching user reference design) */}
      <VisionMissionSection />

      {/* EDUCATION JOURNEY (matching user reference design) */}
      <EducationJourneySection />


    </div>
  );
}
