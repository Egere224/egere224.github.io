import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--foreground)]/10 bg-[var(--surface)] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-[var(--font-space-grotesk)] text-lg font-bold text-[var(--foreground)]"
            >
              Ofejiro<span className="text-[var(--accent)]">.</span>
            </Link>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Full-Stack Developer building modern web products.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
            <Link
              href="/about"
              className="transition hover:text-[var(--accent)]"
            >
              About
            </Link>

            <Link
              href="/projects"
              className="transition hover:text-[var(--accent)]"
            >
              Projects
            </Link>

            <Link
              href="/services"
              className="transition hover:text-[var(--accent)]"
            >
              Services
            </Link>

            <Link
              href="/experience"
              className="transition hover:text-[var(--accent)]"
            >
              Experience
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-[var(--accent)]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-[var(--foreground)]/10 pt-6 text-center text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Egere Ofejiro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
