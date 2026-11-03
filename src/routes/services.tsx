import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Facebook,
  Globe2,
  Instagram,
  MapPinned,
  Megaphone,
  SearchCheck,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { PageHeading } from "@/components/site-layout";
import { ScrollReveal } from "@/components/scroll-reveal";

/**
 * 4 Core Service Pillars matching the user's reference image:
 * Alternating layout with giant photo-masked numbers (01, 02, 03, 04)
 * and clear titles, descriptions, and key deliverables.
 */
const mainServicePillars = [
  {
    number: "01",
    title: "Research & Analyze",
    description:
      "Every transformative digital product begins with thorough discovery. I conduct in-depth user research, competitor landscape benchmarking, and technical architecture analysis to establish a rock-solid foundation tailored specifically to your business goals.",
    deliverables: [
      "User research & persona discovery",
      "Competitor benchmarking & market analysis",
      "Information architecture & site mapping",
      "Technical stack feasibility & performance audit",
    ],
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1000&auto=format&fit=crop&q=85",
    reverse: false,
    hasAccentUnderline: false,
  },
  {
    number: "02",
    title: "Concept & Sketch",
    description:
      "Translating research insights into intuitive concepts and interactive flows. Through low-fidelity wireframing and clickable structural prototypes, we validate user journeys and test key interactions before writing a single line of production code.",
    deliverables: [
      "Low-fidelity wireframing & blueprinting",
      "Interactive user flow mapping",
      "Rapid UX prototyping & iteration",
      "Navigation hierarchy & accessibility checks",
    ],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1000&auto=format&fit=crop&q=85",
    reverse: true,
    hasAccentUnderline: false,
  },
  {
    number: "03",
    title: "Design & Brand",
    description:
      "Elevating your business presence through bespoke, visually captivating digital design. I build modern UI/UX design systems, cohesive brand color palettes, modern typography scales, and fluid micro-interactions that inspire trust and conversion.",
    deliverables: [
      "Modern, responsive UI/UX web design",
      "Reusable component design systems",
      "Brand identity, logos & visual guidelines",
      "Subtle micro-animations & interactive styling",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1000&auto=format&fit=crop&q=85",
    reverse: false,
    hasAccentUnderline: true,
  },
  {
    number: "04",
    title: "Market & Advertise",
    description:
      "Ensuring your high-performing web application reaches the right audience and drives measurable results. From SEO search visibility and Google Maps local dominance to targeted Meta and Google ad campaigns that convert visitors into loyal clients.",
    deliverables: [
      "Search Engine Optimization (SEO & technical speed)",
      "High-converting Google & Meta ad campaigns",
      "Google Maps local business optimization",
      "Analytics tracking & conversion rate optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=85",
    reverse: true,
    hasAccentUnderline: false,
  },
];

const specializedServices: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Full-Stack Development",
    description: "Responsive, ultra-fast web apps built with React, Node.js, and TypeScript.",
    icon: Code2,
  },
  {
    title: "E-Commerce Stores",
    description: "High-converting online shops with seamless checkout, cart, and payment gateway.",
    icon: ShoppingBag,
  },
  {
    title: "SEO Optimization",
    description: "Clean semantic markup, metadata, and performance tuning to dominate Google rank.",
    icon: SearchCheck,
  },
  {
    title: "Google Ads Campaigns",
    description: "High-ROI PPC campaigns laser-focused on acquiring paying customers.",
    icon: Megaphone,
  },
  {
    title: "Meta / Instagram Ads",
    description: "Compelling creative ads that introduce your brand to engaged social audiences.",
    icon: Instagram,
  },
  {
    title: "Product Catalogues",
    description:
      "Structured digital product catalogues making your offerings effortlessly browsable.",
    icon: BookOpenCheck,
  },
  {
    title: "Domain & Hosting Setup",
    description: "DNS management, SSL certificates, custom emails, and continuous uptime.",
    icon: Globe2,
  },
  {
    title: "Google Maps Business Listing",
    description:
      "Accurate local Map pin placements that drive nearby footfall and phone inquiries.",
    icon: MapPinned,
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Process — Mantuja Khan" },
      {
        name: "description",
        content:
          "Explore the 4 core phases: Research & Analyze, Concept & Sketch, Design & Brand, and Market & Advertise. Full-stack development and digital solutions by Mantuja Khan.",
      },
      { property: "og:title", content: "Services & Capabilities — Mantuja Khan" },
      {
        property: "og:description",
        content:
          "End-to-end digital solutions: from discovery and wireframes to brand design and growth marketing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="pb-16">
      <PageHeading
        eyebrow="What I can do"
        title="Services & Process"
        description="A proven four-stage methodology combined with technical precision to turn your vision into an exceptional, high-converting digital product."
      />

      {/* CORE 4 SERVICE PILLARS WITH IMAGE-MASKED NUMBERS MATCHING USER REFERENCE */}
      <section className="mx-auto mt-12 max-w-6xl px-5" aria-label="Core Service Phases">
        <div className="divide-y divide-border/70">
          {mainServicePillars.map((service) => (
            <article key={service.number} className="py-12 sm:py-16 lg:py-20 first:pt-4">
              <div
                className={`flex flex-col items-center justify-between gap-8 md:gap-14 lg:gap-16 ${
                  service.reverse ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Text Content Side */}
                <ScrollReveal
                  direction={service.reverse ? "right" : "left"}
                  className="w-full md:w-1/2 flex flex-col justify-center"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Phase {service.number}
                  </span>

                  <h2
                    className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {service.title}
                  </h2>

                  {/* Accent underline if present (matching item 03 in user reference) */}
                  {service.hasAccentUnderline && (
                    <span
                      aria-hidden="true"
                      className="mt-2 block h-1 w-14 rounded-full bg-amber-500/80"
                    />
                  )}

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <ul className="mt-6 space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>

                {/* Stylized Image-Masked Number Side */}
                <ScrollReveal
                  direction={service.reverse ? "left" : "right"}
                  delay={120}
                  className="w-full md:w-1/2 flex items-center justify-center"
                >
                  <div className="relative group transition-transform duration-500 hover:scale-[1.03]">
                    <span
                      className="masked-digit text-[7.5rem] sm:text-[10.5rem] md:text-[12rem] lg:text-[14.5rem]"
                      style={{
                        backgroundImage: `url(${service.image})`,
                      }}
                      aria-label={`Step ${service.number}`}
                    >
                      {service.number}
                    </span>
                  </div>
                </ScrollReveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SPECIALIZED CAPABILITIES GRID */}
      <section className="mx-auto mt-20 max-w-6xl px-5">
        <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)]">
          <ScrollReveal direction="left" className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Full Suite Capabilities
            </span>
            <h2
              className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Specialized Digital Services
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              From responsive frontend architectures and custom e-commerce engines to local Google
              Maps presence and managed DNS hosting.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specializedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal
                  key={service.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={(index % 4) * 60}
                >
                  <div className="group h-full rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-1">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
