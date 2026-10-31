import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Clapperboard, Code2, Globe } from "lucide-react";
import { PageHeading } from "@/components/site-layout";

const roles = [
  {
    title: "Full Stack Developer",
    company: "SS Production House",
    period: "Present",
    location: "Currently working",
    type: "Full-time",
    responsibilities: [
      "Currently building and maintaining the production house's web projects",
      "Working across the full stack: interfaces, APIs and deployments",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Web Developer",
    company: "Meta Web Kit",
    period: "Freelance",
    location: "Alwar Bypass, Alwar",
    type: "Freelance projects",
    responsibilities: [
      "Picked up the firm's client projects through freelancing",
      "Designed and delivered complete websites for those clients",
    ],
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Full Stack Developer",
    company: "Prerna Infotech",
    period: "Sep-2024 – Present",
    location: "Full Time",
    type: "Full-time",
    responsibilities: [
      "Built responsive user interfaces using React.js and modern CSS",
      "Worked on UI/UX improvements and component optimization",
      "Participated in code reviews and agile development processes",
    ],
    technologies: ["React.js", "JavaScript", "CSS3", "Git"],
  },
  {
    title: "Frontend Developer",
    company: "VM Solutions",
    period: "Jan-2024 – Apr-2024",
    location: "Alwar, Rajasthan",
    type: "Remote",
    responsibilities: [
      "Developed and maintained 6+ responsive web applications using MERN stack",
      "Collaborated with cross-functional teams to deliver high-quality products",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
  },
];

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Mantuja Khan, Full Stack Developer" },
      {
        name: "description",
        content:
          "Mantuja Khan's professional experience: SS Production House, Meta Web Kit (Alwar Bypass), Full Stack Developer at Prerna Infotech and Frontend Developer at VM Solutions.",
      },
      { property: "og:title", content: "Experience — Mantuja Khan" },
      {
        property: "og:description",
        content: "Full Stack Developer and Frontend Developer roles since 2024, MERN stack.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div>
      <PageHeading
        eyebrow="Career"
        title="Experience"
        description="Where I've worked and what I built along the way."
      />

      <section className="mx-auto mt-12 grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        {roles.map((r, index) => {
          const Icon = [Clapperboard, Globe, Briefcase, Code2][index % 4];
          return (
            <article key={r.company} className="experience-step relative isolate flex items-start gap-5">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-accent text-primary"><Icon className="h-8 w-8" /></span>
              <div className="min-w-0 bg-background">
                <p className="text-xs font-semibold text-primary">{r.period}</p>
                <h2 className="mt-2 text-lg font-bold">{r.title}</h2>
                <p className="mt-2 text-sm font-semibold text-primary">{r.company}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.location} · {r.type}</p>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                  {r.responsibilities.map((d) => <li key={d}>• {d}</li>)}
                </ul>
                <p className="mt-4 text-sm font-semibold text-primary">{r.technologies.join(" / ")}</p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
