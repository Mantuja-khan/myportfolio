import bombayImage from "@/assets/work-bombaydrycleaners.png";
import trivoxoImage from "@/assets/work-trivoxotoys.png";
import ojasImage from "@/assets/work-ojaspharma.png";
import aureviaImage from "@/assets/work-aureviaorganics.png";

export type WorkProject = { title: string; url: string; image: string; alt: string };

export const workProjects: WorkProject[] = [
  {
    title: "Bombay Dry Cleaners",
    url: "https://bombaydrycleaners.com",
    image: bombayImage,
    alt: "Full page preview of the Bombay Dry Cleaners website",
  },
  {
    title: "Trivoxo Toys",
    url: "https://trivoxotoys.com",
    image: trivoxoImage,
    alt: "Full page preview of the Trivoxo Toys website",
  },
  {
    title: "Ojas Pharma",
    url: "https://ojaspharma.in",
    image: ojasImage,
    alt: "Full page preview of the Ojas Pharma website",
  },
  {
    title: "Aurevia Organics",
    url: "https://aureviaorganicss.com",
    image: aureviaImage,
    alt: "Full page preview of the Aurevia Organics website",
  },
];

export function WorkImageCard({
  project,
  plain = false,
}: {
  project: WorkProject;
  /** Plain variant: no border, no rounded corners (used on the home page). */
  plain?: boolean;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.title} website`}
      className={`work-a4 relative block aspect-[1/1.414] overflow-hidden bg-card outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring ${
        plain
          ? ""
          : "rounded-xl border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)]"
      }`}
    >
      <img src={project.image} alt={project.alt} loading="lazy" className="work-a4-img w-full" />
    </a>
  );
}
