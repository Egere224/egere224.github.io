"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full bg-[var(--accent)] px-3 pl-6 shadow-lg shadow-black/10">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="font-[var(--font-space-grotesk)] text-lg font-bold tracking-tight text-[var(--background)]"
        >
          OFEJIRO<span className="text-[var(--background)]/60">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--background)]/85 transition-colors hover:text-[var(--background)]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://github.com/egere224"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[var(--background)] px-5 py-2.5 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--surface)] md:block"
        >
          GitHub ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--background)] text-[var(--accent)] transition md:hidden"
        >
          <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl bg-[var(--accent)] px-6 py-5 shadow-lg shadow-black/10 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[var(--background)]/85 transition-colors hover:bg-[var(--background)]/10 hover:text-[var(--background)]"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="https://github.com/egere224"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-[var(--background)] px-4 py-3 text-center text-sm font-semibold text-[var(--accent)]"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
