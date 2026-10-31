import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
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

const services: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Website Designing",
    description: "Clear, modern interfaces shaped around your brand and customers.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Website Development",
    description: "Responsive, reliable websites built for speed and easy use.",
    icon: Code2,
  },
  {
    title: "E-commerce",
    description: "Online stores with smooth product discovery, checkout, and management.",
    icon: ShoppingBag,
  },
  {
    title: "SEO Optimization",
    description: "Search-friendly structure and content that helps customers find you.",
    icon: SearchCheck,
  },
  {
    title: "Google Ads",
    description: "Focused campaigns designed to reach people ready to take action.",
    icon: Megaphone,
  },
  {
    title: "Instagram Ads",
    description: "Creative campaigns that introduce your offer to the right audience.",
    icon: Instagram,
  },
  {
    title: "Product Catalogue Design",
    description: "Professional catalogues that make products easy to browse and compare.",
    icon: BookOpenCheck,
  },
  {
    title: "Domain Registration & Renewal",
    description: "Domain setup and timely renewals to keep your business online.",
    icon: Globe2,
  },
  {
    title: "Google Map Address Listing",
    description: "Accurate business listings that help nearby customers discover you.",
    icon: MapPinned,
  },
  {
    title: "Google Map Address Update",
    description: "Business address corrections and updates across your Maps presence.",
    icon: BadgeCheck,
  },
  {
    title: "Facebook Ads",
    description: "Targeted Facebook campaigns built around reach, leads, or sales.",
    icon: Facebook,
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Web & Digital Services — Mantuja Khan" },
      {
        name: "description",
        content:
          "Website design, development, e-commerce, SEO, advertising, catalogue design, domain and Google Maps services by Mantuja Khan.",
      },
      { property: "og:title", content: "Web & Digital Services — Mantuja Khan" },
      {
        property: "og:description",
        content: "Eleven practical web, advertising, domain, catalogue and local business services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="pb-6">
      <PageHeading
        eyebrow="What I can do"
        title="Services"
        description="From a new website to growing your visibility, I provide practical digital services for businesses at every stage."
      />

      <section className="mx-auto mt-12 max-w-6xl px-5">
        <div className="grid border-t border-border md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="service-row group relative flex gap-4 border-b border-border py-7 md:px-6 md:odd:border-r"
                style={{ animationDelay: `${index * 65}ms` }}
              >
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-accent text-primary transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                  <span className="absolute -right-2 -top-2 text-[9px] font-bold text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                <div>
                  <h2 className="text-lg font-bold transition-colors group-hover:text-primary">
                    {service.title}
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="relative mt-14 overflow-hidden border-y border-border py-10 text-center">
          <span aria-hidden className="dot-grid absolute left-4 top-3 h-20 w-20 opacity-35" />
          <span aria-hidden className="dot-grid absolute bottom-3 right-4 h-20 w-20 opacity-35" />
          <h2 className="relative text-2xl font-bold md:text-3xl">Have a project in mind?</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Tell me what you need and I’ll help turn it into a clear, effective digital solution.
          </p>
          <Link
            to="/contact"
            className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
          >
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}