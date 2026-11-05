import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Clapperboard, Code2, Globe } from "lucide-react";
import { PageHeading } from "@/components/site-layout";
import { ScrollReveal } from "@/components/scroll-reveal";

import ssLogo from "@/assets/company-ss.png";
import metaLogo from "@/assets/company-meta.png";
import prernaLogo from "@/assets/company-prerna.png";
import vmLogo from "@/assets/company-vm.png";

const roles = [
  {
    title: "Full Stack Developer & Digital Marketer",
    company: "SS Production House",
    period: "Present",
    location: "Currently working",
    type: "Full-time",
    logo: ssLogo,
    responsibilities: [
      "Building and maintaining the production house's web platforms and digital presence",
      "Managing digital marketing, running targeted ads (Meta & Google Ads), and driving social media campaigns",
      "Working across the full stack: React interfaces, Node/Express APIs, MongoDB, and deployments",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Digital Marketing",
      "Meta & Google Ads",
      "Social Media Management",
    ],
  },
  {
    title: "Web Developer",
    company: "Meta Web Kit",
    period: "Freelance",
    location: "Alwar Bypass, Alwar",
    type: "Freelance projects",
    logo: metaLogo,
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
    logo: prernaLogo,
    responsibilities: [
      "Built responsive user interfaces using React.js and modern CSS",
      "Worked on UI/UX improvements and component optimization",
      "Participated in code reviews and agile development processes",
    ],
    technologies: ["React.js", "JavaScript", "CSS3", "Git"],
  },
  {
    title: "Frontend Developer & Digital Marketing",
    company: "VM Solutions",
    period: "Jan-2024 – Apr-2024",
    location: "Alwar, Rajasthan",
    type: "Remote",
    logo: vmLogo,
    responsibilities: [
      "Developed and maintained 6+ responsive web applications using MERN stack",
      "Handled digital marketing initiatives, social media post creation & management, and ad campaigns",
      "Collaborated with cross-functional teams to deliver high-quality products",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Digital Marketing",
      "Social Media Marketing",
    ],
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
    <div className="w-full pb-16">
      <PageHeading
        fullWidth
        eyebrow="Career"
        title="Experience"
        description="Where I've worked and what I built along the way."
      />

      <section className="w-full mt-12 grid gap-10 px-5 sm:px-10 lg:px-16 xl:px-24 md:grid-cols-2">
        {roles.map((r, index) => {
          const Icon = [Clapperboard, Globe, Briefcase, Code2][index % 4];
          return (
            <ScrollReveal
              key={r.company}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={(index % 2) * 100}
            >
              <article className="experience-step relative isolate flex items-start gap-0 sm:gap-5 overflow-hidden rounded-2xl border-0 bg-card/60 p-5 sm:p-7 shadow-xs backdrop-blur-xs transition-all hover:shadow-md">
                {/* Low-light background company logo watermark */}
                {r.logo && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-6 right-6 sm:right-10 z-0 select-none opacity-[0.08] dark:opacity-[0.11] transition-opacity duration-300"
                  >
                    <img
                      src={r.logo}
                      alt=""
                      className="h-44 w-44 sm:h-56 sm:w-56 object-contain"
                      loading="lazy"
                    />
                  </div>
                )}

                <span className="relative z-10 hidden sm:flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                </span>

                <div className="relative z-10 min-w-0 w-full">
                  <p className="text-xs font-semibold text-primary">{r.period}</p>
                  <h2 className="mt-2 text-lg sm:text-xl font-bold">{r.title}</h2>
                  <p className="mt-1 text-sm font-semibold text-primary">{r.company}</p>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                    {r.location} · {r.type}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {r.responsibilities.map((d) => (
                      <li key={d}>• {d}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs sm:text-sm font-semibold text-primary">
                    {r.technologies.join(" / ")}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </section>
    </div>
  );
}
