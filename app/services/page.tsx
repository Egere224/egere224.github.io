import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description:
      "I build complete web applications from frontend interfaces to backend APIs and databases. I can work across the entire application to create functional, scalable digital products.",
    image: "/services/full-stack.png",
    features: [
      "React & Next.js applications",
      "Node.js & Express backends",
      "REST API development",
      "Authentication & authorization",
      "Database integration",
    ],
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "I create responsive and modern interfaces that work smoothly across desktop, tablet and mobile devices.",
    image: "/services/frontend.png",
    features: [
      "Responsive web interfaces",
      "React development",
      "Next.js development",
      "JavaScript & TypeScript",
      "API integration",
    ],
  },
  {
    number: "03",
    title: "WordPress Development",
    description:
      "I build and customise WordPress websites for businesses and individuals, focusing on professional presentation, responsiveness and usability.",
    image: "/services/wordpress.png",
    features: [
      "Business websites",
      "Theme customisation",
      "Plugin integration",
      "WooCommerce",
      "Website optimisation",
    ],
  },
  {
    number: "04",
    title: "Website Design & Development",
    description:
      "I turn ideas and business requirements into clean, professional websites designed around the goals of the business.",
    image: "/services/web-design.png",
    features: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "Mobile responsive design",
      "SEO-friendly structure",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* HEADER */}
      <section className="border-b border-[var(--foreground)]/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Services
          </p>
          <h1 className="max-w-4xl font-[var(--font-space-grotesk)] text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Digital solutions for{" "}
            <span className="text-[var(--accent)]">real needs.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            From websites and web applications to business registration
            assistance, I provide practical digital solutions tailored to
            individual and business needs.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="space-y-8">
            {services.map((service, index) => (
              <article
                key={service.number}
                className="overflow-hidden rounded-2xl border border-[var(--foreground)]/10 bg-[var(--surface)] transition duration-300 hover:border-[var(--accent)]/40"
              >
                <div className="grid lg:grid-cols-2">
                  {/* IMAGE */}
                  <div
                    className={`relative min-h-[280px] bg-[var(--background)] ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={`${service.title} service`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute left-5 top-5 rounded-full border border-[var(--foreground)]/10 bg-[var(--surface)]/90 px-4 py-2 text-xs font-semibold text-[var(--accent)] backdrop-blur">
                      {service.number}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`flex flex-col justify-center p-8 sm:p-10 lg:p-12 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                      {service.number}
                    </p>
                    <h2 className="mt-3 font-[var(--font-space-grotesk)] text-2xl font-bold tracking-tight sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                      {service.description}
                    </p>
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-[var(--foreground)]"
                        >
                          <span className="text-[var(--accent)]">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAC CREDENTIALS */}
      <section className="border-y border-[var(--foreground)]/10 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_360px] lg:gap-20">
            {/* TEXT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Business Registration
              </p>
              <h2 className="mt-3 font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
                CAC registration work.
              </h2>
              <p className="mt-5 leading-7 text-[var(--muted)]">
                I provide CAC registration assistance for individuals and
                businesses, helping clients navigate both{" "}
                <strong className="text-[var(--foreground)]">
                  Business Name
                </strong>{" "}
                and{" "}
                <strong className="text-[var(--foreground)]">Company</strong>{" "}
                registration from start to finish.
              </p>

              <a
                href="https://wa.me/2349079324580"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition hover:bg-[var(--accent-hover)]"
              >
                Enquire About Registration →
              </a>
            </div>

            {/* FLYER IMAGE */}
            <div className="relative mx-auto w-full max-w-[320px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--background)]/40 bg-[var(--background)] shadow-lg">
                <Image
                  src="/cac.jpeg"
                  alt="CAC Registration Services flyer"
                  fill
                  className="object-contain p-2"
                  sizes="320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:px-10 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Need a Digital Solution?
          </p>
          <h2 className="mt-3 font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
            Let's discuss your project.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-[var(--muted)]">
            Whether you need a website, web application or business registration
            assistance, feel free to get in touch.
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
            ;
            <Link
              href="/contact"
              className="rounded-lg border border-[var(--foreground)]/10 px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
