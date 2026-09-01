import Image from "next/image";
import Link from "next/link";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
];

const projects = [
  {
    title: "H.emi Fragrance — Scent Consultation Platform",
    description:
      "A deployed client-facing questionnaire that assesses personality and lifestyle to generate a personalised fragrance profile, with a protected admin area for submissions.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    href: "https://h-emi-scent-profile-questionnaire.vercel.app/",
    status: "Live",
    image: "/hemi.png",
  },
  {
    title: "URL Shortener & Analytics Platform",
    description:
      "Full-stack link shortener with auth, session management, Zod-validated APIs, and click analytics — device, browser, OS, and referrer breakdowns.",
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "Zod"],
    href: "https://link-shortener-red-alpha.vercel.app/",
    status: "Live",
    image: "/shortLink2.png",
  },
  {
    title: "BizManager — Multi-Tenant Business SaaS",
    description:
      "A SaaS platform for small business owners to manage inventory, customers, sales, customer debt, and subscription payments, with a separate platform-level admin panel.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Express"],
    href: "#",
    status: "In progress",
    image: "/bizDashboardScreenshot.png",
  },
];

const stats = [
  { value: "1+", label: "Year of experience" },
  { value: "6", label: "Projects shipped" },
  { value: "6+", label: "Core technologies" },
];

export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* HERO */}
      <section className="min-h-[calc(100vh-5rem)]">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-10">
          <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            {/* LEFT */}
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                <span className="text-sm font-medium text-[var(--muted)]">
                  Available for work
                </span>
              </div>

              <h1 className="font-[var(--font-space-grotesk)] text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                Hi, I'm{" "}
                <span className="text-[var(--accent)]">Egere Ofejiro.</span>
                <br />I build for the web.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                I'm a frontend and full-stack developer based in Lagos, Nigeria.
                I build responsive, scalable and production-ready web
                applications that turn ideas into useful digital products.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition hover:bg-[var(--accent-hover)]"
                >
                  View My Work
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  href="/contact"
                  className="rounded-lg border border-[var(--foreground)]/15 px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Get In Touch
                </Link>
              </div>

              <div className="mt-12 border-t border-[var(--foreground)]/10 pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-sm font-medium text-[var(--muted)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-8 rounded-[2.5rem] bg-[var(--accent)]/10 blur-3xl" />

                {/* Image */}
                <div className="relative h-[420px] w-[320px] overflow-hidden rounded-2xl border-10 border-[var(--accent)] bg-[var(--surface)] shadow-2xl sm:h-[500px] sm:w-[380px]">
                  <Image
                    src="/portfolioPhoto.jpeg"
                    alt="Egere Ofejiro"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 320px, 380px"
                  />
                </div>

                {/* Location */}
                <div className="absolute -bottom-5 -left-5 rounded-xl border border-[var(--foreground)]/10 bg-[var(--surface)] px-5 py-3 shadow-xl">
                  <p className="text-xs text-[var(--muted)]">Based in</p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--foreground)]">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-[var(--foreground)]/10 bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-6 px-6 py-10 sm:px-8 lg:px-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[var(--font-space-grotesk)] text-3xl font-bold text-[var(--accent)] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-[var(--muted)] sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Selected work
            </p>
            <h2 className="font-[var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={
                project.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group overflow-hidden rounded-2xl border border-[var(--foreground)]/10 bg-[var(--surface)] transition hover:border-[var(--accent)]/40"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-[var(--background)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition duration-300 group-hover:scale-105"
                />

                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${
                    project.status === "Live" || project.status === "Deployed"
                      ? "bg-[var(--accent)] text-[var(--background)]"
                      : "bg-[var(--surface)] text-[var(--muted)]"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-[var(--font-space-grotesk)] text-lg font-bold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--background)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-10">
        <div className="rounded-3xl bg-[var(--accent)] px-8 py-16 text-center sm:px-16">
          <h2 className="font-[var(--font-space-grotesk)] text-3xl font-bold text-[var(--background)] sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--background)]/85">
            I'm currently open to full-stack roles and freelance work. Let's
            talk about what you're building.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[var(--background)] px-8 py-3 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--surface)]"
          >
            Get In Touch →
          </Link>
        </div>
      </section>
    </main>
  );
}
