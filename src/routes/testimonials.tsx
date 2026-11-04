import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeading } from "@/components/site-layout";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonialsData } from "@/lib/testimonials-data";
import { ScrollReveal } from "@/components/scroll-reveal";

const categories = ["All", "E-Commerce", "Web Apps", "Corporate"] as const;

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials & Reviews — Mantuja Khan" },
      {
        name: "description",
        content:
          "Read genuine client feedback and testimonials for Mantuja Khan, Full Stack Web Developer & Software Engineer.",
      },
      { property: "og:title", content: "Client Testimonials — Mantuja Khan" },
      {
        property: "og:description",
        content:
          "Reviews and endorsements from founders and teams who built web apps with Mantuja Khan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredTestimonials =
    activeCategory === "All"
      ? testimonialsData
      : testimonialsData.filter((t) => t.category === activeCategory);

  return (
    <div className="w-full pb-16">
      <PageHeading
        fullWidth
        eyebrow="Client Feedback"
        title="Testimonials"
        description="Authentic feedback and results from founders, companies, and teams I've partnered with to design, build, and deploy full-stack web applications."
      />

      {/* Trust metric badges */}
      <section className="w-full mt-10 px-5 sm:px-10 lg:px-16 xl:px-24">
        <ScrollReveal direction="left">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-4 sm:p-6 shadow-[var(--shadow-soft)]">
            <div className="border-r border-border/60 pr-3 last:border-0 sm:pr-4">
              <p className="text-2xl font-bold text-primary sm:text-3xl">5.0 ★</p>
              <p className="mt-1 text-xs text-muted-foreground">Average Rating</p>
            </div>
            <div className="border-r border-border/60 pr-3 last:border-0 sm:pr-4">
              <p className="text-2xl font-bold text-primary sm:text-3xl">100%</p>
              <p className="mt-1 text-xs text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="border-r border-border/60 pr-3 last:border-0 sm:pr-4">
              <p className="text-2xl font-bold text-primary sm:text-3xl">15+</p>
              <p className="mt-1 text-xs text-muted-foreground">Web Apps Shipped</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary sm:text-3xl">24h</p>
              <p className="mt-1 text-xs text-muted-foreground">Response Time</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter categories */}
        <ScrollReveal direction="left" delay={80}>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Testimonials cards grid matching exact reference design */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pt-4">
          {filteredTestimonials.map((t, index) => (
            <ScrollReveal
              key={t.id}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={(index % 3) * 80}
            >
              <TestimonialCard item={t} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA block */}
        <ScrollReveal direction="up" delay={100}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-10 text-center shadow-[var(--shadow-soft)]">
            <span aria-hidden className="dot-grid absolute left-4 top-3 h-20 w-20 opacity-30" />
            <span aria-hidden className="dot-grid absolute bottom-3 right-4 h-20 w-20 opacity-30" />
            <h2 className="relative text-2xl font-bold md:text-3xl">
              Want to build your next project with me?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              I am available for freelance projects and full-stack contracts. Let’s create an
              exceptional product for your business.
            </p>
            <div className="relative mt-6 flex justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
