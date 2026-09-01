import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "H.EMI Scent Profile",
    category: "Client Project",
    status: "Live",
    description:
      "A customer scent consultation platform designed to collect detailed fragrance preferences and customer information. Includes a multi-step questionnaire and an admin dashboard for reviewing customer profiles.",
    image: "/hemi.png",
    technologies: ["Next.js", "TypeScript", "React", "PostgreSQL", "REST API"],
    github: "",
    live: "https://h-emi-scent-profile-questionnaire.vercel.app/",
  },
  {
    title: "Link Shortener",
    category: "Full-Stack Application",
    status: "Live",
    description:
      "A URL shortening application with a dashboard for creating and managing short links. Includes individual link pages, API integration and a clean dashboard interface.",
    image: "/shortLink2.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "REST API"],
    github: "https://github.com/egere224",
    live: "https://link-shortener-red-alpha.vercel.app/",
  },
  {
    title: "Vault — Personal Finance Tracker",
    category: "Full-Stack Application",
    status: "In Progress",
    description:
      "A personal finance tracker styled like a bank account, letting users manually log income and expenses, track balance automatically via database triggers, and review filterable transaction history — built as a simulated finance tool with no real banking integration.",
    image: "/bankingScreenshot.png",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/egere224",
    live: "",
  },
  {
    title: "BizManager — Multi-Tenant Business SaaS",
    category: "Full-Stack Application",
    status: "In Progress",
    description:
      "A full-stack SaaS dashboard for managing businesses, products, sales, payments and customer debts. Includes authentication, inventory tracking, sales records and automatic stock deduction.",
    image: "/bizDashboardScreenshot.png",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "REST API"],
    github: "https://github.com/egere224",
    live: "",
  },
  {
    title: "Responsive Portfolio",
    category: "Frontend Development",
    status: "Live",
    description:
      "A responsive personal portfolio built to showcase my projects, skills and experience, featuring a custom olive-and-cream design system, floating navigation, and a featured projects section with live status tracking.",
    image: "/portfolioS.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/egere224",
    live: "https://egereo224.github.io",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* HEADER */}
      <section className="border-b border-[var(--foreground)]/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Projects
          </p>
          <h1 className="max-w-4xl font-[var(--font-space-grotesk)] text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Things I've <span className="text-[var(--accent)]">built.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            A selection of web applications, client projects and technical
            projects I've designed and developed across frontend and full-stack
            development.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-[var(--foreground)]/10 bg-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40"
              >
                {/* IMAGE */}
                <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--foreground)]/10 bg-[var(--background)]">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <div className="absolute left-4 top-4 rounded-full border border-[var(--foreground)]/10 bg-[var(--surface)]/90 px-3 py-1.5 text-xs font-medium text-[var(--accent)] backdrop-blur">
                    {String(index + 1).padStart(2, "0")} · {project.category}
                  </div>

                  <span
                    className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${
                      project.status === "Live" || project.status === "Deployed"
                        ? "bg-[var(--accent)] text-[var(--background)]"
                        : "bg-[var(--surface)] text-[var(--muted)]"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-7 sm:p-8">
                  <h2 className="font-[var(--font-space-grotesk)] text-2xl font-bold tracking-tight">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-[var(--foreground)]/10 bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  {(project.github || project.live) && (
                    <div className="mt-7 flex flex-wrap gap-5 border-t border-[var(--foreground)]/10 pt-6">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-[var(--foreground)] transition hover:text-[var(--accent)]"
                        >
                          GitHub ↗
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-hover)]"
                        >
                          Live Project ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--foreground)]/10 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Let's Work Together
          </p>
          <h2 className="mt-3 font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-[var(--muted)]">
            I'm open to frontend, full-stack and web development opportunities.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition hover:bg-[var(--accent-hover)]"
          >
            Get In Touch →
          </Link>
        </div>
      </section>
    </main>
  );
}
