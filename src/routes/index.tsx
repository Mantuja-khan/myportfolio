import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Clapperboard,
  Code2,
  Download,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";
import aboutImg from "@/assets/about-illustration.png";
import logoMark from "@/assets/logo-mark.png";
import logoMarkDark from "@/assets/logo-mark-dark.png";
import tsImg from "@/assets/typescript.png";
import nodeImg from "@/assets/nodejs.png";
import expressImg from "@/assets/epressjs.png";
import mongoImg from "@/assets/mongodb.png";
import restapiImg from "@/assets/restapi.png";
import responsiveImg from "@/assets/responsivedesign.png";
import ssLogo from "@/assets/company-ss.png";
import metaLogo from "@/assets/company-meta.png";
import prernaLogo from "@/assets/company-prerna.png";
import vmLogo from "@/assets/company-vm.png";
import { LetterReveal } from "@/components/letter-reveal";
import { RoleRotator } from "@/components/role-rotator";
import { Button } from "@/components/ui/button";
import { SkillCircle } from "@/components/skill-circle";
import { WorkImageCard, workProjects } from "@/components/work-image-card";
import { TestimonialsInfiniteCarousel } from "@/components/testimonials-infinite-carousel";
import { ScrollReveal } from "@/components/scroll-reveal";

const stats = [
  { value: "15+", label: "Projects completed" },
  { value: "2+", label: "Years experience" },
  { value: "100%", label: "Client commitment" },
];

/* Skill chips floating around the hero illustration */
const orbitSkills = [
  { name: "React", mark: "⚛", pos: "left-[3%] top-[12%]" },
  { name: "Node.js", mark: "N", pos: "right-[2%] top-[5%]" },
  { name: "JavaScript", mark: "JS", pos: "left-[-1%] top-[45%]" },
  { name: "MongoDB", mark: "M", pos: "right-[-1%] top-[42%]" },
  { name: "Tailwind", mark: "≈", pos: "left-[7%] bottom-[7%]" },
  { name: "Express", mark: "ex", pos: "right-[3%] bottom-[8%]" },
  { name: "Git", mark: "⌁", pos: "left-[45%] top-[1%]" },
  { name: "TypeScript", mark: "TS", pos: "left-[43%] bottom-[-1%]" },
];

const aboutPoints = [
  "Full Stack Developer with expertise in the MERN stack",
  "15+ responsive, user-friendly web applications shipped",
  "Specialised in React.js and modern JavaScript",
  "Strong background in UI/UX design principles",
];

const skills = [
  { name: "TypeScript", level: 88, image: tsImg },
  { name: "Node.js", level: 85, image: nodeImg },
  { name: "Express.js", level: 85, image: expressImg },
  { name: "MongoDB", level: 82, image: mongoImg },
  { name: "REST API", level: 90, image: restapiImg },
  { name: "Responsive Design", level: 95, image: responsiveImg },
];

const experience = [
  {
    role: "Full Stack Developer & Digital Marketer",
    company: "SS Production House",
    period: "Present",
    logo: ssLogo,
    blurb:
      "Full-stack web development, digital marketing, ad campaigns (Meta & Google Ads), and social media post management.",
  },
  {
    role: "Web Developer",
    company: "Meta Web Kit · Alwar Bypass",
    period: "Freelance",
    logo: metaLogo,
    blurb: "Took the firm's client projects through freelancing and delivered them full stack.",
  },
  {
    role: "Full Stack Developer",
    company: "Prerna Infotech",
    period: "Sep 2024 — Present",
    logo: prernaLogo,
    blurb: "Building React interfaces and Node APIs for production products.",
  },
  {
    role: "Frontend Developer & Digital Marketing",
    company: "VM Solutions",
    period: "Jan 2024 — Apr 2024",
    logo: vmLogo,
    blurb:
      "Delivered responsive MERN interfaces, managed digital marketing, and handled social media post campaigns.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mantuja Khan — Software Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Mantuja Khan, a software engineer and full-stack developer building digital products from idea to deployment.",
      },
      { property: "og:title", content: "Mantuja Khan — Software Engineer & Full-Stack Developer" },
      {
        property: "og:description",
        content: "I build digital products that solve real problems and create meaningful impact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold uppercase underline-accent md:text-3xl">
        <LetterReveal text={title.toUpperCase()} />
      </h2>
    </>
  );
}

function Index() {
  return (
    <div className="pb-4">
      {/* HERO */}
      <section className="hero-stage relative overflow-hidden border-b border-border/60">
        <span
          aria-hidden
          className="hero-arc absolute -top-32 left-[22%] h-64 w-[38rem] rounded-[50%] border border-primary/20"
        />
        <span
          aria-hidden
          className="dot-grid pointer-events-none absolute left-0 top-14 h-28 w-20 opacity-50"
        />
        <span
          aria-hidden
          className="dot-grid pointer-events-none absolute bottom-12 right-0 h-28 w-24 opacity-45"
        />
        <div className="relative w-full grid min-h-[640px] items-center gap-8 px-5 sm:px-10 lg:px-16 xl:px-24 py-8 lg:py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal direction="left" className="z-20 max-w-xl order-2 lg:order-1">
            <p className="mt-4 lg:mt-7 text-lg font-medium text-muted-foreground">Hi, I'm</p>
            <h1 className="mt-1 font-cursive text-5xl font-bold tracking-wide capitalize leading-[1.08] text-foreground sm:text-6xl lg:text-7xl">
              <LetterReveal text="Mantuja Khan" gradientWords={["Khan"]} />
            </h1>
            <RoleRotator />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Passionate about crafting pixel-perfect digital experiences that blend innovative
              design with robust functionality. I specialize in building scalable web applications
              using modern technologies and best practices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-7 shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                <Link to="/work">
                  View My Work <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-primary/35 bg-card px-7 transition-transform hover:-translate-y-0.5"
              >
                <a href="mailto:acc.webcraffthub@gmail.com?subject=CV%20request">
                  Request CV <Download className="text-primary" />
                </a>
              </Button>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-border">
              {stats.map((s) => (
                <div key={s.label} className="px-4 first:pl-0">
                  <p className="text-2xl font-bold text-primary sm:text-3xl">{s.value}</p>
                  <p className="mt-1 text-[10px] leading-4 text-muted-foreground sm:text-xs">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Hero Illustration: displays on TOP on small screens (order-1), right on desktop (order-2) */}
          <ScrollReveal
            direction="right"
            delay={140}
            className="relative mx-auto w-full max-w-2xl pb-4 pt-4 lg:pt-8 lg:pb-0 order-1 lg:order-2"
          >
            <span
              aria-hidden
              className="hero-sun absolute inset-x-[8%] bottom-[3%] top-[18%] rounded-[45%]"
            />
            <img
              src={heroImg}
              alt="Illustration of Mantuja Khan coding on a laptop in an orange bean bag chair"
              width={1024}
              height={896}
              className="ken-burns relative z-10 w-full drop-shadow-[var(--shadow-hero)]"
            />
            {orbitSkills.map((s, i) => (
              <span
                key={s.name}
                style={{ animationDelay: `${i * 0.35}s` }}
                className={`float-chip absolute z-20 inline-flex items-center rounded-full bg-card/90 px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold text-foreground shadow-md backdrop-blur select-none ${s.pos}`}
              >
                {s.name}
              </span>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ABOUT (short) */}
      <section className="relative w-full mt-20 grid items-center gap-10 px-5 sm:px-10 lg:px-16 xl:px-24 md:grid-cols-2">
        <span
          aria-hidden
          className="dot-grid pointer-events-none absolute left-2 top-0 h-20 w-20 opacity-40"
        />
        <ScrollReveal direction="left" className="w-full max-w-sm justify-self-center">
          <img
            src={aboutImg}
            alt="Illustration of Mantuja Khan holding a coffee mug"
            className="ken-burns w-full max-w-sm justify-self-center"
          />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={120}>
          <div>
            <SectionTitle eyebrow="About me" title="A little about me" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              I'm a full stack developer from Alwar, Rajasthan, working with the MERN stack since
              2024. I enjoy turning ideas into clean, fast and accessible web products.
            </p>
            <ul className="mt-5 space-y-2.5">
              {aboutPoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-base text-muted-foreground">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:gap-2.5"
            >
              Read full story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* SKILLS (short) */}
      <section className="w-full mt-24 px-5 sm:px-10 lg:px-16 xl:px-24">
        <ScrollReveal direction="left">
          <SectionTitle eyebrow="What I work with" title="Skills at a glance" />
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-5 lg:grid-cols-6">
          {skills.map((s, index) => (
            <ScrollReveal
              key={s.name}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={(index % 6) * 50}
            >
              <SkillCircle name={s.name} level={s.level} image={s.image} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal direction="left" delay={100}>
          <Link
            to="/skills"
            className="mt-8 inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:gap-2.5"
          >
            See all skills <ArrowUpRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </section>

      {/* WORK (short) */}
      <section className="w-full mt-24 px-5 sm:px-10 lg:px-16 xl:px-24">
        <ScrollReveal direction="left">
          <SectionTitle eyebrow="Portfolio" title="Selected work" />
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {workProjects.map((p, index) => (
            <ScrollReveal
              key={p.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={(index % 4) * 80}
              className="mx-auto w-full max-w-[195px] sm:max-w-none"
            >
              <WorkImageCard project={p} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal direction="left" delay={100}>
          <Link
            to="/work"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-base font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            View more work <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </section>

      {/* EXPERIENCE (short) */}
      <section className="w-full mt-24 px-5 sm:px-10 lg:px-16 xl:px-24">
        <ScrollReveal direction="left">
          <SectionTitle eyebrow="Career" title="Experience so far" />
        </ScrollReveal>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {experience.map((e, i) => {
            const Icon = [Clapperboard, Globe, Briefcase, Code2][i % 4];
            return (
              <ScrollReveal
                key={e.company}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={(i % 2) * 100}
              >
                <div className="experience-step relative isolate flex gap-0 sm:gap-5 overflow-hidden rounded-2xl border-0 bg-card/60 p-5 sm:p-6 shadow-xs backdrop-blur-xs transition-all hover:shadow-md">
                  {/* Low-light background company logo watermark */}
                  {e.logo && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-6 right-6 sm:right-10 z-0 select-none opacity-[0.08] dark:opacity-[0.11] transition-opacity duration-300"
                    >
                      <img
                        src={e.logo}
                        alt=""
                        className="h-36 w-36 sm:h-44 sm:w-44 object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <span className="relative z-10 hidden sm:flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div className="relative z-10 min-w-0 w-full">
                    <p className="text-xs font-semibold text-primary">{e.period}</p>
                    <h3 className="mt-2 text-lg font-bold">{e.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{e.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.blurb}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal direction="left" delay={100}>
          <Link
            to="/experience"
            className="mt-8 inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:gap-2.5"
          >
            Full experience <ArrowUpRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </section>

      {/* TESTIMONIALS (short) */}
      <section className="w-full mt-24 px-5 sm:px-10 lg:px-16 xl:px-24">
        <ScrollReveal direction="left">
          <SectionTitle eyebrow="Client Feedback" title="What people say" />
        </ScrollReveal>
        <div className="mt-6">
          <TestimonialsInfiniteCarousel />
        </div>
        <ScrollReveal direction="left" delay={100}>
          <Link
            to="/testimonials"
            className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:gap-2.5"
          >
            View all testimonials <ArrowUpRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </section>

      {/* CONTACT (short) */}
      <section className="w-full mt-24 px-5 sm:px-10 lg:px-16 xl:px-24">
        <ScrollReveal direction="left">
          <SectionTitle eyebrow="Say hello" title="Get in touch" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have a project in mind or just want to talk shop? I usually reply within a day.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="left" delay={100}>
          <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-4 text-base">
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-primary" />
              <a
                href="mailto:acc.webcraffthub@gmail.com"
                className="transition-colors hover:text-primary"
              >
                acc.webcraffthub@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+917665556786" className="transition-colors hover:text-primary">
                +91 76655 56786
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-primary" /> Alwar, Rajasthan
            </li>
          </ul>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={150}>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
          >
            Send a message <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
