import { GraduationCap } from "lucide-react";

const experiences = [
  {
    period: "2026 — Present",
    role: "Full-Stack Developer",
    company: "Marofex Technologies",
    type: "Company / Professional Experience",
    description:
      "Building and maintaining full-stack web applications and digital solutions, working across frontend, backend, databases, APIs, and deployment.",
    responsibilities: [
      "Develop full-stack web applications using React, Next.js, Node.js, Express.js, and TypeScript.",
      "Build and integrate REST APIs with frontend applications.",
      "Work with PostgreSQL and MongoDB for application data and database management.",
      "Implement authentication, authorization, dashboards, business logic, and responsive user interfaces.",
      "Deploy and maintain applications using platforms such as Vercel and Netlify.",
      "Build software solutions tailored to client and business requirements.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    period: "2025 — Present",
    role: "WordPress Developer",
    company: "Elimekom Technologies",
    type: "Professional Experience",
    description:
      "Designing, developing, and maintaining WordPress websites with a focus on responsive layouts, functionality, SEO, and client requirements.",
    responsibilities: [
      "Build and customize WordPress websites for different business needs.",
      "Configure themes, plugins, pages, forms, and website functionality.",
      "Create responsive layouts that work across desktop, tablet, and mobile devices.",
      "Integrate third-party plugins and services based on project requirements.",
      "Apply SEO and performance best practices to improve website usability.",
      "Communicate with clients and translate requirements into functional websites.",
    ],
    technologies: [
      "WordPress",
      "Elementor",
      "WooCommerce",
      "SEO",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    period: "2025",
    role: "UI/UX Design Intern",
    company: "GAO Tek Inc.",
    type: "Internship",
    description:
      "Gained practical experience in UI/UX design, user-centered design principles, and creating digital interfaces with usability and visual consistency in mind.",
    responsibilities: [
      "Worked on UI/UX design tasks and digital interface concepts.",
      "Applied user-centered design principles to improve usability.",
      "Created and refined interface designs based on project requirements.",
      "Collaborated within a remote team environment.",
      "Developed practical understanding of design workflows and digital product development.",
    ],
    technologies: [
      "UI/UX Design",
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Experience",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* HERO */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Experience
          </p>

          <h1 className="font-[var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Where I've worked
            <span className="text-[var(--accent)]">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            My professional journey has taken me through web development,
            WordPress development, UI/UX design, and full-stack engineering.
            Each experience has helped me build stronger technical and
            problem-solving skills.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8 lg:px-10">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 hidden h-full w-px bg-[var(--foreground)]/10 md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border-4 border-[var(--background)] bg-[var(--accent)] md:block" />

                <div className="grid gap-8 rounded-2xl border border-[var(--foreground)]/10 bg-[var(--surface)] p-6 transition duration-300 hover:border-[var(--accent)]/40 sm:p-8 lg:grid-cols-[180px_1fr]">
                  {/* Date */}
                  <div>
                    <p className="text-sm font-semibold text-[var(--accent)]">
                      {experience.period}
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
                      {experience.type}
                    </p>
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className="font-[var(--font-space-grotesk)] text-2xl font-bold tracking-tight">
                      {experience.role}
                    </h2>

                    <p className="mt-1 text-base font-medium text-[var(--accent)]">
                      {experience.company}
                    </p>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {experience.description}
                    </p>

                    <div className="mt-6">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]/60">
                        What I did
                      </h3>

                      <ul className="mt-4 space-y-3">
                        {experience.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
                          >
                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-[var(--foreground)]/10 bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile index */}
                <div className="mb-3 flex items-center gap-2 md:hidden">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                    Experience {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-[var(--foreground)]/10 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Growing every day
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
            Still learning. Still building. Still getting better.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            I'm always looking for opportunities to work on meaningful products,
            collaborate with great teams, and continue growing as a software
            developer.
          </p>
        </div>
      </section>
    </main>
  );
}
