import Link from "next/link";

const contactOptions = [
  {
    title: "WhatsApp",
    description: "The quickest way to reach me directly.",
    value: "09079324580",
    href: "https://wa.me/2349079324580",
    icon: "💬",
    label: "Chat on WhatsApp",
  },
  {
    title: "Email",
    description: "For job opportunities, collaborations, or project enquiries.",
    value: "egereofejiro10@gmail.com",
    href: "mailto:egereofejiro10@gmail.com",
    icon: "✉️",
    label: "Send an Email",
  },
  {
    title: "GitHub",
    description: "Take a look at my projects and development work.",
    value: "github.com/egere224",
    href: "https://github.com/egere224",
    icon: "⌘",
    label: "View GitHub",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* HERO */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-14 pt-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Contact
          </p>

          <h1 className="font-[var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s work together
            <span className="text-[var(--accent)]">.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Have a project in mind, a job opportunity, or simply want to
            connect? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          {/* LEFT */}
          <div className="rounded-2xl border border-[var(--foreground)]/10 bg-[var(--surface)] p-7 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-xl">
              👋
            </div>

            <h2 className="mt-6 font-[var(--font-space-grotesk)] text-2xl font-bold">
              Get in touch
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
              I&apos;m currently open to frontend and full-stack developer
              opportunities, freelance projects, collaborations, and other
              interesting opportunities.
            </p>

            <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
              If you have an idea you&apos;d like to discuss or think I could be
              a good fit for your team, feel free to reach out.
            </p>

            {/* Availability */}
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-[var(--foreground)]/10 bg-[var(--background)] p-4">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />

              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Available for work
                </p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">
                  Open to remote opportunities
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2349079324580"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[var(--background)] transition duration-200 hover:bg-[var(--accent-hover)]"
            >
              Chat with me on WhatsApp
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* RIGHT — CONTACT OPTIONS */}
          <div className="grid gap-4">
            {contactOptions.map((option) => (
              <a
                key={option.title}
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  option.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-2xl border border-[var(--foreground)]/10 bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--foreground)]/10 bg-[var(--background)] text-lg">
                      {option.icon}
                    </div>

                    <div>
                      <h2 className="font-[var(--font-space-grotesk)] text-lg font-bold">
                        {option.title}
                      </h2>

                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                        {option.description}
                      </p>

                      <p className="mt-3 break-all text-sm font-medium text-[var(--accent)]">
                        {option.value}
                      </p>
                    </div>
                  </div>

                  <span className="text-lg text-[var(--muted)] transition duration-200 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                    ↗
                  </span>
                </div>

                <div className="mt-5 border-t border-[var(--foreground)]/10 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)] transition group-hover:text-[var(--accent)]">
                  {option.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-[var(--foreground)]/10 bg-[var(--surface)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Have an opportunity?
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Whether you&apos;re hiring, looking for a developer for your
            project, or interested in collaborating, I&apos;m just a message
            away.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/2349079324580"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition hover:bg-[var(--accent-hover)]"
            >
              WhatsApp Me →
            </a>

            <Link
              href="/projects"
              className="rounded-lg border border-[var(--foreground)]/10 px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
