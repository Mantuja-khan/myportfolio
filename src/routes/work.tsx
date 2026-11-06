import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/site-layout";
import { WorkImageCard, workProjects } from "@/components/work-image-card";
import { ScrollReveal } from "@/components/scroll-reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Mantuja Khan Portfolio" },
      {
        name: "description",
        content:
          "Websites delivered by Mantuja Khan: Bombay Dry Cleaners, Trivoxo Toys, Ojas Pharma, Aurevia Organics, Beneto, Desert Journey DXB, Prerna Vastu, Rengo Automotives, and Sunshine Opticals.",
      },
      { property: "og:title", content: "Selected Work — Mantuja Khan" },
      {
        property: "og:description",
        content: "Business websites designed and developed end to end.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div>
      <PageHeading
        fullWidth
        eyebrow="Portfolio"
        title="Selected Work"
        description="Websites I've designed, built and shipped — click any preview to open the live site."
      />

      <section className="w-full mt-10 grid grid-cols-3 gap-2.5 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-10 lg:px-16 xl:px-24">
        {workProjects.map((p, index) => (
          <ScrollReveal
            key={p.title}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={(index % 4) * 80}
          >
            <WorkImageCard project={p} />
          </ScrollReveal>
        ))}
      </section>
    </div>
  );
}
