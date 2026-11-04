import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/site-layout";
import { SkillCircle } from "@/components/skill-circle";
import { ScrollReveal } from "@/components/scroll-reveal";

import tsImg from "@/assets/typescript.png";
import nodeImg from "@/assets/nodejs.png";
import expressImg from "@/assets/epressjs.png";
import mongoImg from "@/assets/mongodb.png";
import restapiImg from "@/assets/restapi.png";
import responsiveImg from "@/assets/responsivedesign.png";
import reactImg from "@/assets/react.png";
import jsImg from "@/assets/javascript.png";
import htmlImg from "@/assets/html5.png";
import cssImg from "@/assets/css3.png";
import gitImg from "@/assets/git.png";
import githubImg from "@/assets/github.png";

const technologies = [
  { name: "TypeScript", level: 88, image: tsImg },
  { name: "Node.js", level: 85, image: nodeImg },
  { name: "Express.js", level: 85, image: expressImg },
  { name: "MongoDB", level: 82, image: mongoImg },
  { name: "REST API", level: 90, image: restapiImg },
  { name: "Responsive Design", level: 95, image: responsiveImg },
  { name: "React", level: 90, image: reactImg },
  { name: "JavaScript", level: 88, image: jsImg },
  { name: "HTML5", level: 95, image: htmlImg },
  { name: "CSS3", level: 90, image: cssImg },
  { name: "Git", level: 85, image: gitImg },
  { name: "GitHub", level: 85, image: githubImg },
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
        <ScrollReveal direction="left">
          <h2 className="text-center text-sm font-bold uppercase tracking-widest text-primary">
            Technologies
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((t, index) => (
            <ScrollReveal
              key={t.name}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={(index % 4) * 60}
            >
              <SkillCircle name={t.name} level={t.level} image={t.image} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12">
          <ScrollReveal direction="left">
            <h2 className="text-2xl font-bold tracking-tight underline-accent">
              Also working with
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={100}>
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
