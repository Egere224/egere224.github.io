import Image from "next/image";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
const strengths = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, user-friendly interfaces with React, Next.js, JavaScript, TypeScript, HTML and CSS.",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Creating REST APIs, authentication systems, server-side functionality and database-driven applications with Node.js and Express.",
  },
  {
    number: "03",
    title: "Database & APIs",
    description:
      "Working with PostgreSQL and MongoDB to structure, store and retrieve application data and connect frontend applications to backend services.",
  },
  {
    number: "04",
    title: "Problem Solving",
    description:
      "Breaking complex requirements into smaller problems and turning ideas into practical, functional digital products.",
  },
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Socket.io",
  "Git",
  "GitHub",
  "WordPress",
];

const education = [
  {
    school: "University of Benin, Nigeria",
    period: "— 2024",
    detail: "B.Sc. in Physiology",
    note: "Strengthened analytical thinking and attention to detail.",
  },
  {
    school: "GAO Tek Inc.",
    period: "June 2026 — Present",
    detail: "UI/UX Design Internship",
    note: "Hands-on training in user research, wireframing and prototyping.",
  },
  {
    school: "National Youth Service Corps (NYSC)",
    period: "2026",
    detail: "Lagos State",
    note: "Completed national service.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* PANEL 1 — HEADER / HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_360px] lg:gap-16 lg:px-10 lg:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              About Me
            </p>
            <h1 className="font-[var(--font-space-grotesk)] text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Developer, problem solver,
              <span className="text-[var(--accent)]"> lifelong learner.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              A little more about who I am, what I build, and the skills I bring
              to every project.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[320px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--foreground)]/10 bg-[var(--background)] shadow-xl">
              <Image
                src="/portfolioPhoto.jpeg"
                alt="Egere Ofejiro"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PANEL 2 — INTRODUCTION (oval photo, like the reference) */}
      <section className="relative overflow-hidden border-t border-[var(--foreground)]/10 bg- bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_340px] lg:gap-20 lg:px-10 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Introduction
            </p>
            <h2 className="mt-3 font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
              Building with curiosity and purpose.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-[var(--muted)]">
              <div>
                <h3 className="mb-1 font-semibold text-[var(--foreground)]">
                  About me
                </h3>
                <p>
                  I'm{" "}
                  <strong className="text-[var(--foreground)]">
                    Egere Ofejiro
                  </strong>
                  , a frontend and full-stack developer based in Lagos, Nigeria.
                  I enjoy building digital products that are useful, intuitive
                  and reliable — my journey started with HTML, CSS and
                  JavaScript before expanding into React, Node.js, Express,
                  databases and REST APIs.
                </p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-[var(--foreground)]">
                  Personal projects
                </h3>
                <p>
                  I've worked on projects ranging from business websites and
                  WordPress solutions to full-stack SaaS applications and
                  real-time systems — taking ideas from initial concept through
                  development into a working product used by real clients.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
                📍 Lagos, Nigeria
              </span>
              <span className="rounded-full border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
                🎓 B.Sc. Physiology
              </span>
              <span className="rounded-full border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
                💼 Open to opportunities
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[300px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-full border border-[var(--foreground)]/10 bg-[var(--surface)] shadow-lg">
              <Image
                src="/portfolioPhoto.jpeg"
                alt="Egere Ofejiro portrait"
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PANEL 3 — EDUCATION */}
      <section className="relative overflow-hidden border-t border-[var(--foreground)]/10 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Background
          </p>
          <h2 className="mt-3 font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
            Education
          </h2>

          <div className="mt-10 space-y-6">
            {education.map((item) => (
              <div key={item.school} className="flex items-start gap-4">
                <GraduationCap className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--accent)]" />

                <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">
                      {item.detail}
                    </p>
                    <p className="text-sm text-[var(--muted)]">{item.school}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {item.note}
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-sm font-medium text-[var(--accent)]">
                    {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL 4 — STRENGTHS */}
      <section className="border-t border-[var(--foreground)]/10 bg-[var(--accent)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--background)]">
              What I Bring
            </p>
            <h2 className="mt-3 font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-[var(--background)] sm:text-4xl">
              Skills I use to build products.
            </h2>
            <p className="mt-5 leading-7 text-[var(--background)]/80">
              From creating interfaces to building the systems behind them, I
              enjoy working across different parts of the development process.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength.number}
                className="group rounded-2xl border border-[var(--background)]/15 bg-[var(--background)] p-7 transition duration-200 hover:-translate-y-1 hover:border-[var(--background)]/40"
              >
                <span className="text-sm font-semibold text-[var(--accent)]">
                  {strength.number}
                </span>
                <h3 className="mt-5 font-[var(--font-space-grotesk)] text-xl font-semibold text-[var(--foreground)]">
                  {strength.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL 5 — TECHNOLOGIES */}
      <section className="border-t border-[var(--foreground)]/10 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              My Toolkit
            </p>
            <h2 className="mt-3 font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
              Technologies I work with.
            </h2>
          </div>

          <div className="mt-10 flex max-w-5xl flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-[var(--foreground)]/10 bg-[var(--background)] px-4 py-2.5 text-sm font-medium text-[var(--muted)] transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL 6 — CTA */}
      <section className="border-t border-[var(--foreground)]/10 bg-[var(--accent)]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:px-10 lg:py-24">
          <h2 className="font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-[var(--background)] sm:text-4xl">
            Want to see what I've built?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-[var(--background)]/85">
            Explore some of my projects or get in touch if you'd like to work
            together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-[var(--background)] px-6 py-3 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--surface)]"
            >
              View My Projects →
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-[var(--background)]/40 px-6 py-3 text-sm font-semibold text-[var(--background)] transition hover:border-[var(--background)] hover:bg-[var(--background)]/10"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
