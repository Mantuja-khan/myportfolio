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
          "Live websites delivered by Mantuja Khan: Bombay Dry Cleaners, Trivoxo Toys, Ojas Pharma and Aurevia Organics.",
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
        eyebrow="Portfolio"
        title="Selected Work"
        description="Websites I've designed, built and shipped — click any preview to open the live site."
      />

      <section className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
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
