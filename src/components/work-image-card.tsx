import bombayImage from "@/assets/work-bombaydrycleaners.png";
import trivoxoImage from "@/assets/work-triwoxotoys.png";
import ojasImage from "@/assets/work-ojaspharma.png";
import aureviaImage from "@/assets/work-aureviaorganicss.png";
import benetoImage from "@/assets/work-beneto.png";
import desertSafariImage from "@/assets/work-desertsafari.png";
import prernaVastuImage from "@/assets/work-prernavastu.png";
import rengoImage from "@/assets/work-rengoautomotives.png";
import sunshineImage from "@/assets/work-sunshine.png";

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
  {
    title: "Beneto Bath Solution",
    url: "#",
    image: benetoImage,
    alt: "Full page preview of the Beneto Bath Solution website",
  },
  {
    title: "Desert Journey DXB",
    url: "#",
    image: desertSafariImage,
    alt: "Full page preview of the Desert Journey DXB website",
  },
  {
    title: "Prerna Vastu",
    url: "#",
    image: prernaVastuImage,
    alt: "Full page preview of the Prerna Vastu website",
  },
  {
    title: "Rengo Automotives",
    url: "#",
    image: rengoImage,
    alt: "Full page preview of the Rengo Automotives website",
  },
  {
    title: "Sunshine Opticals",
    url: "#",
    image: sunshineImage,
    alt: "Full page preview of the Sunshine Opticals website",
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
  const isExternal = project.url.startsWith("http");

  return (
    <a
      href={project.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      onClick={!isExternal ? (e) => e.preventDefault() : undefined}
      aria-label={`Open ${project.title} website`}
      className={`work-a4 relative block aspect-[1/1.414] overflow-hidden bg-card outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring rounded-none ${
        plain
          ? ""
          : "border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)]"
      }`}
    >
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        className="work-a4-img w-full rounded-none"
      />
    </a>
  );
}
