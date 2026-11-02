import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/site-layout";
import { SkillCircle } from "@/components/skill-circle";

const technologies = [
  { name: "TypeScript", icon: "TS", level: 88 },
  { name: "Node.js", icon: "⬢", level: 85 },
  { name: "Express.js", icon: "Ex", level: 85 },
  { name: "MongoDB", icon: "🍃", level: 82 },
  { name: "REST API", icon: "⇄", level: 90 },
  { name: "Responsive Design", icon: "📱", level: 95 },
  { name: "React", icon: "⚛", level: 90 },
  { name: "JavaScript", icon: "JS", level: 88 },
  { name: "HTML5", icon: "</>", level: 95 },
  { name: "CSS3", icon: "#", level: 90 },
  { name: "Git", icon: "⑂", level: 85 },
  { name: "GitHub", icon: "◍", level: 85 },
];

const alsoUsing = [
  "Next.js",
  "Tailwind CSS",
  "npm",
  "Redux Toolkit",
  "Vite",
  "Postman",
  "Figma",
  "Linux / Bash",
  "Vercel",
];

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Technologies — Mantuja Khan" },
      {
        name: "description",
        content:
          "Technologies Mantuja Khan works with: HTML, CSS, JavaScript, React, Node.js, Git, npm, GitHub, MongoDB, Express and Tailwind CSS.",
      },
      { property: "og:title", content: "Skills & Technologies — Mantuja Khan" },
      {
        property: "og:description",
        content: "React, Node.js, MongoDB, Express, JavaScript and Tailwind CSS skill levels.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <div>
      <PageHeading
        eyebrow="What I work with"
        title="Skills & Technologies"
        description="Tools and technologies I reach for daily to design, build and ship full-stack products."
      />

      <section className="mx-auto mt-10 max-w-6xl px-5">
        <h2 className="text-center text-sm font-bold uppercase tracking-widest text-primary">
          Technologies
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((t) => <SkillCircle key={t.name} name={t.name} level={t.level} icon={t.icon} />)}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight underline-accent">Also working with</h2>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {alsoUsing.map((a) => (
              <span
                key={a}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium transition-colors hover:border-primary"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
