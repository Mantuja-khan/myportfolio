import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { PageHeading } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter at least 2 characters.").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(160),
  projectType: z.string().min(1, "Choose a project type."),
  budget: z.string().min(1, "Choose an estimated budget."),
  message: z.string().trim().min(20, "Please share at least 20 characters.").max(1200),
});

type ContactField = keyof z.infer<typeof contactSchema>;
type ContactErrors = Partial<Record<ContactField, string>>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mantuja Khan — Let's Build Something" },
      {
        name: "description",
        content:
          "Get in touch with Mantuja Khan for full-stack web development, dashboards and product work. Based in Alwar, Rajasthan.",
      },
      { property: "og:title", content: "Contact Mantuja Khan" },
      {
        property: "og:description",
        content: "Let's build something meaningful together — reach out for project work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<ContactErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(false);
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const result = contactSchema.safeParse(values);

    if (!result.success) {
      const nextErrors: ContactErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as ContactField;
        if (!nextErrors[field]) nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      const firstInvalid = form.querySelector<HTMLElement>(
        `[name="${result.error.issues[0]?.path[0]}"]`,
      );
      firstInvalid?.focus();
      return;
    }

    setErrors({});
    setSent(true);
    form.reset();
  }

  const fieldClass = (field: ContactField) =>
    `mt-2 w-full rounded-md border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-ring/20 ${errors[field] ? "border-destructive" : "border-input focus:border-primary"}`;

  return (
    <div className="w-full pb-16">
      <PageHeading
        fullWidth
        eyebrow="Say hello"
        title="Contact"
        description="Have a project in mind or just want to talk shop? Drop a message and I'll get back to you."
      />

      <section className="w-full mt-10 grid gap-12 px-5 sm:px-10 lg:px-16 xl:px-24 lg:grid-cols-[0.7fr_1.3fr]">
        <ScrollReveal direction="left">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Tell me what you are building, where you are stuck, and what success looks like. I
            usually reply within one business day.
          </p>
          <ul className="mt-7 space-y-4">
            {[
              {
                Icon: Mail,
                label: "Email",
                value: "acc.webcraffthub@gmail.com",
                href: "mailto:acc.webcraffthub@gmail.com",
              },
              { Icon: Phone, label: "Phone", value: "+91 76655 56786", href: "tel:+917665556786" },
              { Icon: MapPin, label: "Location", value: "Alwar, Rajasthan" },
            ].map(({ Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4 border-b border-border py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                  <Icon className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-base font-medium transition-colors hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-base font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-l-2 border-primary pl-4">
            <p className="text-sm font-semibold">Ready to start?</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Share the essentials now. We can refine the details together.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={120}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Project inquiry
                </p>
                <h2 className="mt-1 text-xl font-bold">LET'S BUILD IT</h2>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary">
                <Send className="h-4 w-4" />
              </span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Your name" error={errors.name}>
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Mantuja Khan"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldClass("name")}
                />
              </FormField>
              <FormField label="Email address" error={errors.email}>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldClass("email")}
                />
              </FormField>
              <FormField label="Project type" error={errors.projectType}>
                <select
                  name="projectType"
                  defaultValue=""
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={errors.projectType ? "projectType-error" : undefined}
                  className={fieldClass("projectType")}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Website design</option>
                  <option>Website development</option>
                  <option>E-commerce</option>
                  <option>SEO or ads</option>
                  <option>Other</option>
                </select>
              </FormField>
              <FormField label="Estimated budget" error={errors.budget}>
                <select
                  name="budget"
                  defaultValue=""
                  aria-invalid={Boolean(errors.budget)}
                  aria-describedby={errors.budget ? "budget-error" : undefined}
                  className={fieldClass("budget")}
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option>Under ₹25,000</option>
                  <option>₹25,000 – ₹75,000</option>
                  <option>₹75,000 – ₹1,50,000</option>
                  <option>₹1,50,000+</option>
                  <option>Not sure yet</option>
                </select>
              </FormField>
              <div className="sm:col-span-2">
                <FormField label="Project details" error={errors.message}>
                  <textarea
                    name="message"
                    rows={5}
                    maxLength={1200}
                    placeholder="What would you like to create, and when do you need it?"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${fieldClass("message")} resize-none`}
                  />
                </FormField>
              </div>
            </div>
            <Button type="submit" size="lg" className="mt-6 h-12 w-full rounded-full">
              Send project inquiry <Send />
            </Button>
            {sent && (
              <div
                role="status"
                className="mt-5 flex items-start gap-3 rounded-md border border-status-complete/30 bg-status-complete/10 p-4 text-sm text-status-complete"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p className="font-semibold">Thanks — your inquiry is ready.</p>
                  <p className="mt-1 text-xs opacity-80">
                    I’ll review the project details and follow up with next steps.
                  </p>
                </div>
              </div>
            )}
          </form>
        </ScrollReveal>
      </section>
    </div>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  const id =
    label === "Your name"
      ? "name"
      : label === "Email address"
        ? "email"
        : label === "Project type"
          ? "projectType"
          : label === "Estimated budget"
            ? "budget"
            : "message";
  return (
    <label className="block text-xs font-semibold text-foreground">
      {label}
      {children}
      {error && (
        <span id={`${id}-error`} className="mt-1.5 block text-[11px] font-medium text-destructive">
          {error}
        </span>
      )}
    </label>
  );
}
